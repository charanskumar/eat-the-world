// These contain meal names and pictures - Listed by Region //

async function fetchAmerica() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
  );
  const america = await response.json();
  console.log(america);
}

async function fetchBritain() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=british"
  );
  const britain = await response.json();
  console.log(britain);
}

async function fetchCanada() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );
  const canada = await response.json();
  console.log(canada);
}

async function fetchChina() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese"
  );
  const china = await response.json();
  console.log(china);
}

async function fetchCroatia() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Croatian"
  );
  const croatia = await response.json();
  console.log(croatia);
}

async function fetchDutch() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Dutch"
  );
  const dutch = await response.json();
  console.log(dutch);
}

async function fetchEgypt() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian"
  );
  const egypt = await response.json();
  console.log(egypt);
}

async function fetchPhillipeans() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Filipino"
  );
  const phillipeans = await response.json();
  console.log(phillipeans);
}

async function fetchFrance() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=French"
  );
  const france = await response.json();
  console.log(france);
}

async function fetchGreek() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Greek"
  );
  const greek = await response.json();
  console.log(greek);
}

async function fetchIndia() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
  );
  const india = await response.json();
  console.log(india);
}

async function fetchIreland() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Irish"
  );
  const ireland = await response.json();
  console.log(ireland);
}

async function fetchItaly() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian"
  );
  const italy = await response.json();
  console.log(italy);
}

async function fetchJamaica() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Jamaican"
  );
  const jamaica = await response.json();
  console.log(jamaica);
}

async function fetchJapan() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese"
  );
  const japan = await response.json();
  console.log(japan);
}

async function fetchMalaysia() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Malaysian"
  );
  const malaysia = await response.json();
  console.log(malaysia);
}

async function fetchMexico() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican"
  );
  const mexico = await response.json();
  console.log(mexico);
}

async function fetchMorocco() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Moroccan"
  );
  const morocco = await response.json();
  console.log(morocco);
}

async function fetchPoland() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Polish"
  );
  const poland = await response.json();
  console.log(poland);
}

async function fetchPortugal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Portuguese"
  );
  const portugal = await response.json();
  console.log(portugal);
}

async function fetchRussia() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian"
  );
  const russia = await response.json();
  console.log(russia);
}

async function fetchSpain() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish"
  );
  const spain = await response.json();
  console.log(spain);
}

async function fetchThailand() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai"
  );
  const thailand = await response.json();
  console.log(thailand);
}

async function fetchTunisia() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Tunisian"
  );
  const tunisia = await response.json();
  console.log(tunisia);
}

async function fetchVietnam() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Vietnamese"
  );
  const vietnam = await response.json();
  console.log(vietnam);
}

// These contain meal names, categories, and ingredients - Listed by item A-Z //
async function fetchAFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const aFoods = await response.json();
  console.log(aFoods);
}
async function fetchBFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  );
  const bFoods = await response.json();
  console.log(bFoods);
}
async function fetchCFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
  );
  const cFoods = await response.json();
  console.log(cFoods);
}
async function fetchDFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=d"
  );
  const dFoods = await response.json();
  console.log(dFoods);
}
async function fetchEFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=e"
  );
  const eFoods = await response.json();
  console.log(eFoods);
}

async function fetchFFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
  );
  const fFoods = await response.json();
  console.log(fFoods);
}

async function fetchGFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=g"
  );
  const gFoods = await response.json();
  console.log(gFoods);
}

async function fetchHFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=h"
  );
  const hFoods = await response.json();
  console.log(hFoods);
}

async function fetchIFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=i"
  );
  const iFoods = await response.json();
  console.log(iFoods);
}

async function fetchJFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=j"
  );
  const jFoods = await response.json();
  console.log(jFoods);
}

async function fetchKFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=k"
  );
  const kFoods = await response.json();
  console.log(kFoods);
}

async function fetchLFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=l"
  );
  const lFoods = await response.json();
  console.log(lFoods);
}

async function fetchMFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=m"
  );
  const mFoods = await response.json();
  console.log(mFoods);
}

async function fetchNFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=n"
  );
  const nFoods = await response.json();
  console.log(nFoods);
}

async function fetchOFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=o"
  );
  const oFoods = await response.json();
  console.log(oFoods);
}

async function fetchPFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=p"
  );
  const pFoods = await response.json();
  console.log(pFoods);
}

async function fetchQFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=q"
  );
  const qFoods = await response.json();
  console.log(qFoods);
}

async function fetchRFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=r"
  );
  const rFoods = await response.json();
  console.log(rFoods);
}

async function fetchSFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
  );
  const sFoods = await response.json();
  console.log(sFoods);
}

async function fetchTFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=t"
  );
  const tFoods = await response.json();
  console.log(tFoods);
}

async function fetchUFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=u"
  );
  const uFoods = await response.json();
  console.log(uFoods);
}

async function fetchVFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=v"
  );
  const vFoods = await response.json();
  console.log(vFoods);
}

async function fetchWFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=w"
  );
  const wFoods = await response.json();
  console.log(wFoods);
}

async function fetchXFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=x"
  );
  const xFoods = await response.json();
  console.log(xFoods);
}

async function fetchYFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=y"
  );
  const yFoods = await response.json();
  console.log(yFoods);
}

async function fetchZFoods() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=z"
  );
  const zFoods = await response.json();
  console.log(zFoods);
}
module.exports = {
  fetchCanada,
  fetchAmerica,
  fetchBritain,
  fetchChina,
  fetchCroatia,
  fetchDutch,
  fetchEgypt,
  fetchPhillipeans,
  fetchFrance,
  fetchGreek,
  fetchIndia,
  fetchIreland,
  fetchItaly,
  fetchJamaica,
  fetchJapan,
  fetchMalaysia,
  fetchMexico,
  fetchMorocco,
  fetchPoland,
  fetchPortugal,
  fetchRussia,
  fetchSpain,
  fetchThailand,
  fetchTunisia,
  fetchVietnam,
  fetchAFoods,
  fetchBFoods,
  fetchCFoods,
  fetchDFoods,
  fetchEFoods,
  fetchFFoods,
  fetchGFoods,
  fetchHFoods,
  fetchIFoods,
  fetchJFoods,
  fetchKFoods,
  fetchLFoods,
  fetchMFoods,
  fetchNFoods,
  fetchOFoods,
  fetchPFoods,
  fetchQFoods,
  fetchRFoods,
  fetchSFoods,
  fetchTFoods,
  fetchUFoods,
  fetchVFoods,
  fetchWFoods,
  fetchXFoods,
  fetchYFoods,
  fetchZFoods,
};
