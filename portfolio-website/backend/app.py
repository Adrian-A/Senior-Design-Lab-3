from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# TODO: Add your team members data here
TEAM_MEMBERS = []

@app.route('/')
def home():
    return jsonify({'message': 'Team Portfolio API', 'version': '1.0.0'})

@app.route('/api/team-members', methods=['GET'])
def get_team_members():
    """Get all team members"""
    return jsonify(TEAM_MEMBERS)

@app.route('/api/team-members/<int:member_id>', methods=['GET'])
def get_team_member(member_id):
    """Get detailed info for a specific team member"""
    member = next((m for m in TEAM_MEMBERS if m['id'] == member_id), None)
    if member:
        return jsonify(member)
    return jsonify({'error': 'Member not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
