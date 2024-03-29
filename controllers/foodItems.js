// These contain meal names and pictures - Listed by Region //

async function fetchFoodId(idMeal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

async function fetchFoodByArea(strArea) {
  console.log("Ctrl String: ", strArea);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`
  );
  const data = await response.json();
  console.log("Promise?: ", data);
  return data;
}

async function fetchAreaList() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await response.json();
  console.log("list:", data);
  return data;
}
async function fetchRanFoods() {
  const response1 = fetch("www.themealdb.com/api/json/v1/1/random.php");
  const data1 = await response1.json();
  const response2 = fetch("www.themealdb.com/api/json/v1/1/random.php");
  const data2 = await response2.json();
  const response3 = fetch("www.themealdb.com/api/json/v1/1/random.php");
  const data3 = await response3.json();
  return data1, data2, data3;
}

async function fetchFoodByCategory(strCategory) {
  console.log("Ctrl String: ", strCategory);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  );
  const data = await response.json();
  console.log("Promise?: ", data);
  return data;
}

async function fetchCategoryList() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const data = await response.json();
  console.log("list:", data);
  return data;
}

module.exports = {
  fetchFoodId,
  fetchFoodByArea,
  fetchAreaList,
  fetchFoodByCategory,
  fetchCategoryList,
  fetchRanFoods,
};