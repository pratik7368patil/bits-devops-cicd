const sampleData = [
  {
    username: "ABCD1",
    city: "Maxico",
  },
  {
    username: "Alice",
    city: "USA",
  },
];

export default function initRoutes(app) {
  app.get("/status", (req, res) => {
    res.send({
      status: "API is Running...",
    });
  });

  app.get("/get-all-users", (req, res) => {
    res.send({
      users: sampleData,
    });
  });
}
