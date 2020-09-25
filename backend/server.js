const express = require('express');
const app = express();
const port = 3001;

app.use(express.static("./"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});