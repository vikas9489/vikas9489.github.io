import { initializeApp }         from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getFirestore,
  doc, getDoc, setDoc, updateDoc,
  collection, addDoc, onSnapshot,
  query, orderBy, increment, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export async function initInteractions(postSlug) {
  const postRef = doc(db, 'posts', postSlug);

  // Create post document if first visit ever
  const snap = await getDoc(postRef);
  if (!snap.exists()) {
    await setDoc(postRef, { likeCount: 0 });
  }

  setupLikes(postRef, postSlug);
  setupComments(postSlug);
}

// ─── LIKES ────────────────────────────────────────────────────────────────────

function setupLikes(postRef, postSlug) {
  const btn        = document.getElementById('likeBtn');
  const countEl    = document.getElementById('likeCount');
  const storageKey = `liked_${postSlug}`;

  if (localStorage.getItem(storageKey) === 'true') {
    btn.classList.add('liked');
  }

  // Live counter
  onSnapshot(postRef, (snap) => {
    countEl.textContent = snap.exists() ? (snap.data().likeCount ?? 0) : 0;
  });

  btn.addEventListener('click', async () => {
    const alreadyLiked = localStorage.getItem(storageKey) === 'true';

    btn.disabled = true;
    try {
      await updateDoc(postRef, { likeCount: increment(alreadyLiked ? -1 : 1) });
      if (alreadyLiked) {
        localStorage.removeItem(storageKey);
        btn.classList.remove('liked');
      } else {
        localStorage.setItem(storageKey, 'true');
        btn.classList.add('liked');
      }
    } finally {
      btn.disabled = false;
    }
  });
}

// ─── COMMENTS ─────────────────────────────────────────────────────────────────

function setupComments(postSlug) {
  const list      = document.getElementById('commentsList');
  const countEl   = document.getElementById('commentCount');
  const form      = document.getElementById('commentForm');
  const submitBtn = document.getElementById('submitBtn');

  const commentsRef = collection(db, 'posts', postSlug, 'comments');
  const q = query(commentsRef, orderBy('timestamp', 'asc'));

  // Live comments
  onSnapshot(q, (snapshot) => {
    countEl.textContent = snapshot.size;

    if (snapshot.empty) {
      list.innerHTML = '<p class="no-comments">No comments yet. Be the first to leave one!</p>';
      return;
    }

    list.innerHTML = '';
    snapshot.forEach((docSnap) => {
      const d    = docSnap.data();
      const time = d.timestamp?.toDate();
      list.innerHTML += `
        <div class="comment-item">
          <div class="comment-header">
            <span class="comment-author">${esc(d.name)}</span>
            <span class="comment-time">${relativeTime(time)}</span>
          </div>
          <p class="comment-body">${esc(d.message)}</p>
        </div>`;
    });
  });

  // Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name    = document.getElementById('commentName').value.trim();
    const message = document.getElementById('commentMessage').value.trim();
    if (!name || !message) return;

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Posting…';

    try {
      await addDoc(collection(db, 'posts', postSlug, 'comments'), {
        name, message, timestamp: serverTimestamp()
      });
      form.reset();
    } catch (err) {
      console.error('Comment failed:', err);
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Post Comment';
    }
  });
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function esc(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

function relativeTime(date) {
  if (!date) return 'just now';
  const diff  = Date.now() - date.getTime();
  const mins  = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (mins  <  1) return 'just now';
  if (mins  < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days  <  7) return `${days}d ago`;
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
