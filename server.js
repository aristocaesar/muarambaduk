const { app: server } = require('./src/app');
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log('server running on port ', PORT);
});
