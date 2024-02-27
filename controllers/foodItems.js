// These contain meal names and pictures //

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
};
