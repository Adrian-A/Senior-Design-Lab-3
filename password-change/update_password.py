import hashlib
import firebase_admin
from firebase_admin import credentials, firestore

def sha256_hash(text):
    """Return the SHA-256 hash of a string."""
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def main():
    print("=== Firebase Password Update Tool ===")
    new_password = input("Enter new password: ")

    # Hash the password
    new_hash = sha256_hash(new_password)
    print(f"\nSHA-256 Hash:\n{new_hash}\n")

    # Initialize Firebase Admin
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    # Update Firestore document
    doc_ref = db.collection("config").document("password")
    doc_ref.set({"hash": new_hash})

    print("Password successfully updated in Firestore!")
    print("You may now upload your updated protected content.")

if __name__ == "__main__":
    main()
