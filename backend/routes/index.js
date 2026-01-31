var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

const baseUrl = process.env.BASEURL;

/* GET current weather. */
router.get("/weather/current", async function (req, res, next) {
  const { q } = req.query;
  if (!q)
    return res.status(400).json({ error: "Query parameter is required." });

  const params = {
    key: process.env.APIKEY,
    q,
  };

  try {
    const response = await axios.get(`${baseUrl}/current.json`, { params });
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch current weather." });
  }
});

/* GET weather forecast */
router.get("/weather/forecast", async function (req, res) {
  const { q, days } = req.query;
  if (!q)
    return res.status(400).json({ error: "Query parameter is required." });

  const params = {
    key: process.env.APIKEY,
    q,
    days,
  };

  try {
    const response = await axios.get(`${baseUrl}/forecast.json`, { params });
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch weather forecast." });
  }
});

/* GET current location autocomplete */
router.get("/locations/autocomplete", async function (req, res) {
  const { q } = req.query;
  if (!q)
    return res.status(400).json({ error: "Query parameter 'q' is required." });

  try {
    const response = await axios.get(`${baseUrl}/search.json`, {
      params: {
        key: process.env.APIKEY,
        q,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Autocomplete failed." });
  }
});
module.exports = router;
