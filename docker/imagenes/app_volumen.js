const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;
let contador = 1;
const mensaje = fs.readFileSync("data/message.txt", "utf-8", (err, data) => {
  if (err) { console.log(err); }
  console.log(`Leído el fichero de mensaje:\n\r${data}`);
});
const stream = fs.createWriteStream('data/log.txt', {flags: 'a'});

const server = http.createServer((req, res) => {
  const textoNumeroInvocaciones = `(Invocado ${contador} ${contador > 1 ? 'veces' : 'vez'})\r\n`;
  const result = `${mensaje}\r\n${textoNumeroInvocaciones}`;
  const logText = `[${new Date().toISOString()}] - ${textoNumeroInvocaciones}`;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(result);
  console.log(`Devolviendo el valor ${contador}...`);
  stream.write(logText);
  contador++;
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});