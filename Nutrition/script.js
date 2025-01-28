// Nutrition data (in grams per 100g)
const nutritionData = {
    'apple': { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    'banana': { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    'chicken breast': { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    'rice': { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    'broccoli': { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
    // Add more food items as needed
};

// Populate the dropdown with food items
const foodDropdown = document.getElementById('food');
for (const foodItem in nutritionData) {
    const option = document.createElement('option');
    option.value = foodItem;
    option.textContent = foodItem.charAt(0).toUpperCase() + foodItem.slice(1); // Capitalize first letter
    foodDropdown.appendChild(option);
}

// Handle form submission
document.getElementById('nutrition-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedFood = foodDropdown.value;
    const quantity = parseFloat(document.getElementById('quantity').value);

    if (nutritionData[selectedFood]) {
        const nutrition = nutritionData[selectedFood];
        const result = `
            <p>Calories: ${(nutrition.calories * quantity / 100).toFixed(2)} kcal</p>
            <p>Protein: ${(nutrition.protein * quantity / 100).toFixed(2)} g</p>
            <p>Carbs: ${(nutrition.carbs * quantity / 100).toFixed(2)} g</p>
            <p>Fat: ${(nutrition.fat * quantity / 100).toFixed(2)} g</p>
        `;
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = '<p>Food item not found in database.</p>';
    }
});