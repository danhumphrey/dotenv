require("dotenv").config();
const express = require("express");
const opn = require("opn");
const pd = require("pretty-data").pd;

// Pretty print environment variables in the default browser
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`<pre>${pd.json(process.env)}</pre>`);
});
app.listen(port, () => {
  opn(`http://localhost:${port}`);
});

