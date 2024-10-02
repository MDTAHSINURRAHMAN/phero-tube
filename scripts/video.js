// Fetch, Load and Show Categories on html

// Create Load Categories
const loadCategories = () => {
    // Fetch the Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

// Create Display Categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {
        // Create a Button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;
        // Add Button to Category Container
        categoryContainer.append(button);
    })
}

loadCategories();
