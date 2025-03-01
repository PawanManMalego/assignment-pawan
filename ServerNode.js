const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number
const PORT = 3000;

// Map the URL paths to file paths
const mimeType = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css'
};

// Function to handle the requests
const requestHandler = (req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './singlefile.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeType[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile('./404.html', (error, errorContent) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(errorContent, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end(Server Error: ${err.code});
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
};

// Create an HTTP server
const server = http.createServer(requestHandler);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT}/);
});