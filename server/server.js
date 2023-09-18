import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const app = express();

// server static files in assets folder
app.use('/assets', express.static('assets/public'));


// TODO how do you get this route to not clash with other routes
app.get("/*", (req, res) => {
  // TODO not found... it should be like /static/js/main.1ee581cd.js
  const entryPoint = ["/main.js"];


  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onAllReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
  );
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
