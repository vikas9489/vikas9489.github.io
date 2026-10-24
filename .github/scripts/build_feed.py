"""Regenerate feed.xml from the post list in blog/index.html.

Run from the repo root after adding a post:  python .github/scripts/build_feed.py
"""
import html
import re
from datetime import datetime
from pathlib import Path

SITE = "https://bytevikas.com"
ROOT = Path(__file__).resolve().parents[2]
LIMIT = 30

index = (ROOT / "blog" / "index.html").read_text(encoding="utf-8")
items = re.findall(r'<a href="([^"]+\.html)" class="post-item">(.*?)</a>', index, flags=re.S)
if not items:
    raise SystemExit("no .post-item entries found in blog/index.html")


def field(block, cls):
    m = re.search(rf'class="{cls}[^"]*">(.*?)</', block, flags=re.S)
    return html.unescape(re.sub(r"\s+", " ", m.group(1)).strip()) if m else ""


def rfc822(date_text):
    # posts go live with the 8:00 AM IST daily job
    d = datetime.strptime(date_text, "%b %d, %Y")
    return d.strftime("%a, %d %b %Y 08:00:00 +0530")


def x(s):
    return html.escape(s, quote=False)


entries = []
for href, block in items[:LIMIT]:
    url = f"{SITE}/blog/{href}"
    entries.append(f"""    <item>
      <title>{x(field(block, "post-title"))}</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <pubDate>{rfc822(field(block, "post-date"))}</pubDate>
      <category>{x(field(block, "post-cat"))}</category>
      <description>{x(field(block, "post-excerpt"))}</description>
    </item>""")

latest = rfc822(field(items[0][1], "post-date"))
feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>bytevikas Blog</title>
    <link>{SITE}/blog/index.html</link>
    <atom:link href="{SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Android engineering articles by Vikas Dhiman: performance, architecture, Jetpack Compose, Kotlin, Media3, and AI-assisted development.</description>
    <language>en</language>
    <lastBuildDate>{latest}</lastBuildDate>
{chr(10).join(entries)}
  </channel>
</rss>
"""
(ROOT / "feed.xml").write_text(feed, encoding="utf-8", newline="\n")
print(f"feed.xml: {len(entries)} items, latest {items[0][0]}")
