import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Load `user.json` from the root folder
    const filePath = path.join(process.cwd(), 'user.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');

    res.status(200).json(JSON.parse(jsonData));
}

// const jsonServer = require('json-server');
// const path = require('path');

// // Create the server
// const server = jsonServer.create();

// // Set the JSON file as the database
// const router = jsonServer.router(path.join(__dirname, 'user.json'));

// // Middleware for default settings
// const middlewares = jsonServer.defaults();

// // Use the middlewares
// server.use(middlewares);

// // Use the router
// server.use(router);

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running at http://localhost:${PORT}`);
// });