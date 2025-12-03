function sendMessage(memberName) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    db.collection("messages").add({
        member: memberName,
        name: name,
        email: email,
        message: message,
        timestamp: new Date()
    });

    alert("Message sent!");
}

function loadMessages() {
    const container = document.getElementById("messages");

    db.collection("messages")
        .orderBy("timestamp", "desc")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const m = doc.data();
                container.innerHTML += `
                    <div class="container" style="margin-bottom:20px;">
                        <p><strong>To:</strong> ${m.member}</p>
                        <p><strong>Name:</strong> ${m.name}</p>
                        <p><strong>Email:</strong> ${m.email}</p>
                        <p><strong>Message:</strong> ${m.message}</p>
                        <p><em>${m.timestamp.toDate()}</em></p>
                    </div>
                `;
            });
        });
}

// Auto-run on messages.html
if (location.pathname.includes("messages")) {
    loadMessages();
}
