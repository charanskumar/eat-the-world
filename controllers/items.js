// These contain meal names and pictures - Listed by Region //

async function fetchFoodId(idMeal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();
  //console.log(data);
  return data;
}

async function fetchFoodByArea(strArea) {
  //console.log("Ctrl String: ", strArea);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`
  );
  const data = await response.json();
  //console.log("Promise?: ", data);
  return data;
}

async function fetchAreaList() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await response.json();
  //console.log("list:", data);
  return data;
}



module.exports = {
  fetchFoodId,
  fetchFoodByArea,
  fetchAreaList,
};
