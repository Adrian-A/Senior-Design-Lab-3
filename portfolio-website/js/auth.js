// Hash function (SHA-256)
async function hash(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('');
}

// Called from admin.html
async function attemptLogin() {
    const input = document.getElementById("passwordInput").value;
    const inputHash = await hash(input);

    db.collection("config").doc("password").get().then(doc => {
        if (!doc.exists) {
            alert("Password not configured.");
            return;
        }

        if (doc.data().hash === inputHash) {
            localStorage.setItem("session", "authorized");
            window.location.href = "vault_contents.html";
        } else {
            alert("Incorrect password.");
        }
    });
}

// Protect restricted pages
if (location.pathname.includes("protected") || location.pathname.includes("messages") || location.pathname.includes("vault_contents")) {
    if (localStorage.getItem("session") !== "authorized") {
        window.location.href = "admin.html";
    }
}
