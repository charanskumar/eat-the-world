var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/foodItems");
const fetch = require("node-fetch");

// These contain meal names and pictures - Listed by Region //

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

// These contain meal names and ingredients - Listed by item A-Z //

router.get("/aFoods", async (req, res) => {
  try {
    const aFoods = await foodCtrl.fetchAFoods();
    res.render("/region/canada", { aFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/bFoods", async (req, res) => {
  try {
    const bFoods = await foodCtrl.fetchBFoods();
    res.render("/", { bFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/cFoods", async (req, res) => {
  try {
    const cFoods = await foodCtrl.fetchCFoods();
    res.render("/", { cFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/dFoods", async (req, res) => {
  try {
    const dFoods = await foodCtrl.fetchDFoods();
    res.render("/", { dFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/eFoods", async (req, res) => {
  try {
    const eFoods = await foodCtrl.fetchEFoods();
    res.render("/", { eFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/fFoods", async (req, res) => {
  try {
    const fFoods = await foodCtrl.fetchFFoods();
    res.render("/", { fFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/gFoods", async (req, res) => {
  try {
    const gFoods = await foodCtrl.fetchGFoods();
    res.render("/", { gFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/hFoods", async (req, res) => {
  try {
    const hFoods = await foodCtrl.fetchHFoods();
    res.render("/", { aFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/iFoods", async (req, res) => {
  try {
    const iFoods = await foodCtrl.fetchIFoods();
    res.render("/", { iFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/iFoods", async (req, res) => {
  try {
    const iFoods = await foodCtrl.fetchIFoods();
    res.render("/", { iFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/jFoods", async (req, res) => {
  try {
    const jFoods = await foodCtrl.fetchJFoods();
    res.render("/", { jFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/jFoods", async (req, res) => {
  try {
    const jFoods = await foodCtrl.fetchJFoods();
    res.render("/", { jFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/kFoods", async (req, res) => {
  try {
    const kFoods = await foodCtrl.fetchKFoods();
    res.render("/", { kFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/lFoods", async (req, res) => {
  try {
    const lFoods = await foodCtrl.fetchKFoods();
    res.render("/", { kFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/mFoods", async (req, res) => {
  try {
    const mFoods = await foodCtrl.fetchMFoods();
    res.render("/", { mFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/nFoods", async (req, res) => {
  try {
    const nFoods = await foodCtrl.fetchNFoods();
    res.render("/", { nFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/oFoods", async (req, res) => {
  try {
    const oFoods = await foodCtrl.fetchOFoods();
    res.render("/", { oFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/pFoods", async (req, res) => {
  try {
    const pFoods = await foodCtrl.fetchPFoods();
    res.render("/", { pFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/qFoods", async (req, res) => {
  try {
    const qFoods = await foodCtrl.fetchQFoods();
    res.render("/", { qFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/rFoods", async (req, res) => {
  try {
    const rFoods = await foodCtrl.fetchRFoods();
    res.render("/", { rFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/sFoods", async (req, res) => {
  try {
    const sFoods = await foodCtrl.fetchSFoods();
    res.render("/", { sFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/tFoods", async (req, res) => {
  try {
    const tFoods = await foodCtrl.fetchTFoods();
    res.render("/", { tFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/uFoods", async (req, res) => {
  try {
    const uFoods = await foodCtrl.fetchUFoods();
    res.render("/", { uFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/vFoods", async (req, res) => {
  try {
    const vFoods = await foodCtrl.fetchVFoods();
    res.render("/", { vFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/wFoods", async (req, res) => {
  try {
    const wFoods = await foodCtrl.fetchWFoods();
    res.render("/", { wFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/xFoods", async (req, res) => {
  try {
    const xFoods = await foodCtrl.fetchXFoods();
    res.render("/", { xFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/yFoods", async (req, res) => {
  try {
    const yFoods = await foodCtrl.fetchYFoods();
    res.render("/", { yFoods });
  } catch (err) {
    console.log(err);
  }
});

router.get("/zFoods", async (req, res) => {
  try {
    const zFoods = await foodCtrl.fetchZFoods();
    res.render("/", { zFoods });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
