
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;
let contador = 1;

const server = http.createServer((req, res) => {
  const result = 
`${process.env.MESSAGE_PREFIX}
Hola Mundo
(Invocado ${contador} ${contador > 1 ? 'veces' : 'vez'})
${process.env.MESSAGE_SUFFIX}
`;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(result);
  console.log(`Devolviendo el valor ${contador}...`);
  contador++;
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
