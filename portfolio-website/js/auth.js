// Show login box
function showLogin() {
    document.getElementById("loginBox").style.display = "block";
}

// Hash function (SHA-256)
async function hash(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('');
}

// Attempt login
async function attemptLogin() {
    const input = document.getElementById("passwordInput").value;
    const inputHash = await hash(input);

    db.collection("config").doc("password").get().then(doc => {
        if (!doc.exists) {
            alert("Password not set in database.");
            return;
        }

        if (doc.data().hash === inputHash) {
            localStorage.setItem("session", "authorized");
            window.location.href = "protected.html";
        } else {
            alert("Incorrect password.");
        }
    });
}

// Protect authorized pages
if (location.pathname.includes("protected") || location.pathname.includes("messages")) {
    if (localStorage.getItem("session") !== "authorized") {
        window.location.href = "index.html";
    }
}
