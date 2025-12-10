Mock server and local testing

1) Start the mock server

# from project root
npm install
# run on port 3001
PORT=3001 npm run start

The mock server listens on `/api/contact` and returns `{ status: 'success' }` for valid requests.

2) Update `javascript.js` for local testing

Open `javascript.js` and set:

const API_URL = 'http://localhost:3001/api/contact';

(Already set by the helper script in this workspace.)

3) Serve the static site locally

You can serve the site with a simple static server (python):

python3 -m http.server 8000

Then open `http://localhost:8000` in your browser and submit the contact form.

4) Test with curl

curl -v -X POST http://localhost:3001/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","subject":"Hello","message":"This is a test"}'

5) Reverting

When you want to point the form to your real backend, replace the API_URL value in `javascript.js` with your production endpoint (https://api.yourdomain.com/contact).
