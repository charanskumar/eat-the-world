var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/foodItems");
const fetch = require("node-fetch");

router.get("/america", async (req, res) => {
  try {
    const americaFood = await foodCtrl.fetchAmerica();
    res.render("region/america", { americaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/britain", async (req, res) => {
  try {
    const britainFood = await foodCtrl.fetchBritain();
    res.render("region/britain", { britainFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/canada", async (req, res) => {
  try {
    const canadaFood = await foodCtrl.fetchCanada();
    res.render("region/canada", { canadaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/china", async (req, res) => {
  try {
    const chinaFood = await foodCtrl.fetchChina();
    res.render("region/china", { chinaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/croatia", async (req, res) => {
  try {
    const croatiaFood = await foodCtrl.fetchCroatia();
    res.render("region/croatia", { croatiaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/dutch", async (req, res) => {
  try {
    const dutchFood = await foodCtrl.fetchDutch();
    res.render("region/dutch", { dutchFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/egypt", async (req, res) => {
  try {
    const egyptFood = await foodCtrl.fetchEgypt();
    res.render("region/egypt", { egyptFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/phillipeans", async (req, res) => {
  try {
    const phillipeansFood = await foodCtrl.fetchPhillipeans();
    res.render("region/phillipeans", { phillipeansFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/france", async (req, res) => {
  try {
    const franceFood = await foodCtrl.fetchFrance();
    res.render("region/france", { franceFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/greek", async (req, res) => {
  try {
    const greekFood = await foodCtrl.fetchGreek();
    res.render("region/greek", { greekFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/india", async (req, res) => {
  try {
    const indiaFood = await foodCtrl.fetchIndia();
    res.render("region/india", { indiaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/ireland", async (req, res) => {
  try {
    const irelandFood = await foodCtrl.fetchIreland();
    res.render("region/ireland", { irelandFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/italy", async (req, res) => {
  try {
    const italyFood = await foodCtrl.fetchItaly();
    res.render("region/italy", { italyFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/jamaica", async (req, res) => {
  try {
    const jamaicaFood = await foodCtrl.fetchJamaica();
    res.render("region/jamaica", { jamaicaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/japan", async (req, res) => {
  try {
    const japanFood = await foodCtrl.fetchJapan();
    res.render("region/japan", { japanFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/malaysia", async (req, res) => {
  try {
    const malaysiaFood = await foodCtrl.fetchMalaysia();
    res.render("region/malaysia", { malaysiaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/mexico", async (req, res) => {
  try {
    const mexicoFood = await foodCtrl.fetchMexico();
    res.render("region/mexico", { mexicoFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/morocco", async (req, res) => {
  try {
    const moroccoFood = await foodCtrl.fetchMorocco();
    res.render("region/morocco", { moroccoFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/poland", async (req, res) => {
  try {
    const polandFood = await foodCtrl.fetchPoland();
    res.render("region/poland", { polandFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/portugal", async (req, res) => {
  try {
    const portugalFood = await foodCtrl.fetchPortugal();
    res.render("region/portugal", { portugalFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/russia", async (req, res) => {
  try {
    const russiaFood = await foodCtrl.fetchRussia();
    res.render("region/russia", { russiaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/spain", async (req, res) => {
  try {
    const spainFood = await foodCtrl.fetchSpain();
    res.render("region/spain", { spainFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/thailand", async (req, res) => {
  try {
    const thailandFood = await foodCtrl.fetchThailand();
    res.render("region/thailand", { thailandFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/tunisia", async (req, res) => {
  try {
    const tunisiaFood = await foodCtrl.fetchTunisia();
    res.render("region/tunisia", { tunisiaFood });
  } catch (err) {
    console.log(err);
  }
});

router.get("/vietnam", async (req, res) => {
  try {
    const vietnamFood = await foodCtrl.fetchVietnam();
    res.render("region/vietnam", { vietnamFood });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
