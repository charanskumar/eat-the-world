async function fetchCanada() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );
  const canada = await response.json();
  console.log(canada);
}

module.exports = {
  fetchCanada,
};
