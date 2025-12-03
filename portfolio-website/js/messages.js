// Send message helper (used by forms and other callers)
function sendMessage(memberName, senderName, senderEmail, messageText) {
    if (!memberName || !messageText) {
        alert('Missing recipient or message.');
        return;
    }

    db.collection('messages').add({
        recipient: memberName,
        senderName: senderName || null,
        senderEmail: senderEmail || null,
        message: messageText,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert('Message sent!');
    }).catch(err => {
        console.error('Error saving message:', err);
        alert('Failed to send message.');
    });
}

// Load and render messages into a container with id `messages`
function loadMessages() {
    const container = document.getElementById('messages');
    if (!container) return;
    container.innerHTML = '';

    db.collection('messages')
        .orderBy('timestamp', 'desc')
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                container.innerHTML = '<p>No messages found.</p>';
                return;
            }

            snapshot.forEach(doc => {
                const m = doc.data();
                let timeStr = 'Pending...';
                if (m.timestamp && typeof m.timestamp.toDate === 'function') {
                    timeStr = m.timestamp.toDate().toLocaleString();
                }

                const div = document.createElement('div');
                div.className = 'container';
                div.style.marginBottom = '20px';
                div.innerHTML = `
                    <p><strong>To:</strong> ${escapeHtml(m.recipient || '')}</p>
                    <p><strong>From:</strong> ${escapeHtml(m.senderName || '')} (${escapeHtml(m.senderEmail || 'no-email')})</p>
                    <p><strong>Message:</strong> ${escapeHtml(m.message || '')}</p>
                    <p><em>${timeStr}</em></p>
                `;

                container.appendChild(div);
            });
        })
        .catch(err => {
            console.error('Error loading messages:', err);
            container.innerHTML = '<p>Error loading messages.</p>';
        });
}

// Small helper to avoid inserting raw HTML
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Attach submit listeners to any contact forms on member pages
document.addEventListener('DOMContentLoaded', () => {
    // If this page is the vault/messages admin page, auto-load messages
    if (location.pathname.includes('vault_contents') || location.pathname.includes('messages')) {
        loadMessages();
    }

    const forms = document.querySelectorAll('.contact-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Try to find recipient name on the page
            const recipientEl = document.querySelector('.member-name');
            const recipient = recipientEl ? recipientEl.textContent.trim() : form.dataset.recipient || '';

            const senderName = form.querySelector('#name') ? form.querySelector('#name').value.trim() : '';
            const senderEmail = form.querySelector('#email') ? form.querySelector('#email').value.trim() : '';
            const messageText = form.querySelector('#message') ? form.querySelector('#message').value.trim() : '';

            sendMessage(recipient, senderName, senderEmail, messageText);
            form.reset();
        });
    });
});
