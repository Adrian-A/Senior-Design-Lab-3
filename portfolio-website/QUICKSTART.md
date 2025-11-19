# Portfolio Website - Quick Start Guide

This guide will help you get the portfolio website running locally.

## Quick Start

### 1. Start the Backend

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate
pip install -r requirements.txt
python app.py
```

Backend will run on http://localhost:5000

### 2. Start the Frontend (in a new terminal)

```powershell
cd frontend
npm install
npm start
```

Frontend will run on http://localhost:3000

## Verify It's Working

1. Open http://localhost:3000 in your browser
2. You should see the team homepage with 4 sample team members
3. Click on any team member to view their detailed profile
4. The backend API should be accessible at http://localhost:5000/api/team-members

## Common Issues

### Backend won't start
- Make sure Python 3.8+ is installed: `python --version`
- Ensure virtual environment is activated (you should see `(venv)` in terminal)
- Check if port 5000 is already in use

### Frontend won't start
- Make sure Node.js is installed: `node --version`
- Clear npm cache if needed: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules; npm install`

### Data not loading
- Ensure backend is running on port 5000
- Check browser console for errors (F12)
- Verify proxy setting in `frontend/package.json` points to `http://localhost:5000`

## Next Steps

1. Customize team member data in `backend/app.py`
2. Update styling in the CSS files
3. Add your own features and pages
4. Prepare for deployment when ready

For detailed documentation, see the main README.md file.
