const express = require('express');
const { router } = require('./routes/tasks');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});