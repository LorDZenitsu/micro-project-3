const foods = require("./food.json");

function ListALlItems() {
  console.log(foods);
}

function ListFoodWithCategory(category) {
  const NewFoodList = foods.filter((food) => food.category === category);
  console.log(NewFoodList);
}

function ListFoodWithCalorieAbove(calorie) {
  const FoodAboveCalorie = foods.filter((food) => food.calorie > calorie);
  console.log(FoodAboveCalorie);
}
function ListFoodWithCalorieBelow(calorie) {
  const FoodAboveCalorie = foods.filter((food) => food.calorie < calorie);
  console.log(FoodAboveCalorie);
}

function ListFoodWithHighProteinToLowProtein() {
  const HighTOLow = [...foods].sort((a, b) => b.protiens - a.protiens);
  console.log(HighTOLow);
}

function ListFoodWithLowCabToHighCab() {
  const LowCabToHighCab = [...foods].sort((a, b) => a.cab - b.cab);
  console.log(LowCabToHighCab);
}

ListALlItems();

ListFoodWithCategory("Dairy");

ListFoodWithCalorieAbove(100);

ListFoodWithCalorieBelow(100);

ListFoodWithHighProteinToLowProtein();

ListFoodWithLowCabToHighCab();
