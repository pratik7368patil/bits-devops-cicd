export default function initRoutes(app) {
  app.get("/status", (req, res) => {
    res.send({
      status: "API is Running...",
    });
  });
}
