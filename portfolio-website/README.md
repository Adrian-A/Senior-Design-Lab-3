# Team Portfolio Website

A full-stack portfolio website built with React.js frontend and Python Flask backend, showcasing team members and their individual profiles.

## Project Structure

```
portfolio-website/
├── frontend/          # React.js application
│   ├── public/
│   ├── src/
│   │   ├── pages/    # HomePage and MemberPage components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── backend/          # Flask API server
    ├── app.py
    ├── requirements.txt
    └── .env.example
```

## Features

- **Homepage**: Displays all team members in a responsive grid layout
- **Individual Member Pages**: Detailed profiles with bio, skills, and projects
- **REST API**: Flask backend providing team member data
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth transitions

## Local Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python (v3.8 or higher)
- pip

### Backend Setup

1. Navigate to the backend directory:
   ```powershell
   cd backend
   ```

2. Create a virtual environment:
   ```powershell
   python -m venv venv
   ```

3. Activate the virtual environment:
   ```powershell
   .\venv\Scripts\Activate
   ```

4. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```

5. Create a `.env` file (copy from `.env.example`):
   ```powershell
   copy .env.example .env
   ```

6. Run the Flask server:
   ```powershell
   python app.py
   ```

The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```powershell
   cd frontend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the development server:
   ```powershell
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/team-members` - Returns list of all team members (basic info)
- `GET /api/team-members/:id` - Returns detailed information for a specific member

## Customization

### Adding Team Members

Edit the `TEAM_MEMBERS` array in `backend/app.py` to add or modify team member information:

```python
TEAM_MEMBERS = [
    {
        'id': 1,
        'name': 'Your Name',
        'role': 'Your Role',
        'bio': 'Your bio...',
        'email': 'your.email@team.com',
        'skills': ['Skill1', 'Skill2'],
        'projects': [...]
    }
]
```

### Styling

- Modify CSS files in `frontend/src/pages/` to customize colors and layouts
- Update the gradient in `.member-avatar` and `.profile-avatar` classes for different avatar colors

## Deployment

### Frontend Deployment (e.g., Netlify, Vercel)

1. Build the production version:
   ```powershell
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

3. Update the API endpoint in frontend code to point to your deployed backend URL

### Backend Deployment (e.g., Heroku, Railway, DigitalOcean)

1. Ensure `requirements.txt` is up to date

2. Set environment variables on your hosting platform

3. Deploy the backend folder

4. Update CORS settings in `app.py` if needed for production

## Technologies Used

### Frontend
- React 18
- React Router 6
- CSS3 with modern features

### Backend
- Flask 3.0
- Flask-CORS
- Python 3.x

## Future Enhancements

- Add database integration (PostgreSQL/MongoDB)
- Implement authentication for admin panel
- Add contact form functionality
- Include blog/news section
- Add project filtering and search
- Implement dark mode toggle

## License

This project is open source and available for educational purposes.
