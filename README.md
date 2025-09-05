Journal is a full-stack web application that allows users to securely sign up, log in, manage their profiles, and maintain personal entries. Built with Vue.js (frontend) and Django REST Framework (backend), it provides a smooth and responsive experience with token-based authentication.

🔧 Features 
User Registration: Sign up with first name, last name, email, and password. Username is auto-generated from the email (before @). 
Authentication: Secure login with username and password using token-based authentication. 
Profile Page: View and manage personal profile information. Profile Editing: Edit all fields including username, email, and profile image via modal. 
Auto Avatar: A default avatar is auto-assigned after sign-up, which can be updated later. 
Entry Management: Add journal entries from the profile page using a modal interface.

🛠️ Tech Stack Frontend: Vue.js, Axios, 
Vue Router Backend: Django, Django REST Framework, Djoser (for auth) 
Database: SQLite (development) 

Media Handling: Profile images with Pillow