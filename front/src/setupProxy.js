const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = () => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://localhost:8000",
      secure: false,
    })
  );
};
