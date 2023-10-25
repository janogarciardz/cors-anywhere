const express = require("express");
const app = express();
const port = 3030;
const axios = require("axios");

app.get("/", (req, res) => {
  const { location, radius, key } = req.query;
  console.log("query:", location, radius);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&key=${key}`
    )
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3030);
