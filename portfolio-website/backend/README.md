# Backend - Flask API

This directory contains the Python Flask backend API for the team portfolio website.

## Development

1. Activate virtual environment:
   ```powershell
   .\venv\Scripts\Activate
   ```

2. Run the server:
   ```powershell
   python app.py
   ```

## API Endpoints

### GET /
Returns API information and version

### GET /api/team-members
Returns list of all team members with basic information:
```json
[
  {
    "id": 1,
    "name": "Team Member 1",
    "role": "Frontend Developer"
  }
]
```

### GET /api/team-members/:id
Returns detailed information for a specific team member:
```json
{
  "id": 1,
  "name": "Team Member 1",
  "role": "Frontend Developer",
  "bio": "...",
  "email": "member1@team.com",
  "skills": ["React", "JavaScript"],
  "projects": [...]
}
```

## Adding New Endpoints

Add new route handlers in `app.py`:
```python
@app.route('/api/your-endpoint', methods=['GET'])
def your_function():
    return jsonify({'data': 'value'})
```

## Database Integration (Future)

To add database support:
1. Install SQLAlchemy: `pip install flask-sqlalchemy`
2. Define models in a new `models.py` file
3. Update `app.py` to use database queries instead of the `TEAM_MEMBERS` list

## Environment Variables

Copy `.env.example` to `.env` and customize:
```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key
PORT=5000
```
