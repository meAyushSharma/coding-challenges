const express = require("express");
const middleware = express();

function requestLoggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

middleware.use(requestLoggerMiddleware);

middleware.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
middleware.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
