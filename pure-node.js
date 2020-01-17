const http = require('http');

// createServer is like building the server
const server = http.createServer((request, response) => {
  let body = [];
  request.on('data', chunk => {
    body.push(chunk);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    let userName = 'User';
    if (body) {
      userName = body.split('=')[1];
    }

    // as after parsing the data, we want to send the response
    // therefore, response is given here

    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hello ${userName} !</h1><form method="POST" action="/"><input type="text" name="usename"><button type="submit">Submit</button></form>`
    );
    response.end();
  });
});

// now with the listen method, we start the server
server.listen(3000);
