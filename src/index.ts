import express from "express";

const app = express();

app.use(express.static("Public"));

app.get("/", (request, response) => {
  response.sendFile("/Users/leroymerlin/Workspace/TestExpress/Public/index.html");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
