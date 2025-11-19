# Frontend - React Application

This directory contains the React.js frontend for the team portfolio website.

## Development

Start the development server:
```powershell
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

- `public/` - Static files and HTML template
- `src/`
  - `pages/` - Page components (HomePage, MemberPage)
  - `App.js` - Main application component with routing
  - `index.js` - Application entry point
  - `*.css` - Styling files

## Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add the route in `App.js`
3. Link to the new page from other components

## Environment Variables

Create a `.env` file in this directory for environment-specific variables:
```
REACT_APP_API_URL=http://localhost:5000
```
