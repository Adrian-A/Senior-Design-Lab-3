// Vault Configuration
const VAULT_PASSWORD = "gold2024";

// DOM Elements
const vaultForm = document.getElementById("vaultForm");
const vaultPassword = document.getElementById("vaultPassword");
const vaultError = document.getElementById("vaultError");
const vaultLocked = document.getElementById("vaultLocked");
const vaultUnlocked = document.getElementById("vaultUnlocked");
const lockVaultBtn = document.getElementById("lockVaultBtn");

// Handle vault form submission
vaultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const password = vaultPassword.value;
  
  if (password === VAULT_PASSWORD) {
    // Correct password - unlock vault
    vaultError.textContent = "";
    vaultError.classList.remove("show");
    vaultLocked.style.display = "none";
    vaultUnlocked.style.display = "flex";
  } else {
    // Incorrect password - show error
    vaultError.textContent = "Incorrect password. Try again.";
    vaultError.classList.add("show");
    vaultPassword.value = "";
  }
});

// Handle lock vault again button
lockVaultBtn.addEventListener("click", () => {
  vaultPassword.value = "";
  vaultError.textContent = "";
  vaultError.classList.remove("show");
  vaultUnlocked.style.display = "none";
  vaultLocked.style.display = "block";
  vaultPassword.focus();
});
