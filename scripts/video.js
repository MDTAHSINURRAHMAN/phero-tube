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
const displayCategories = (data) => {
    // Add Data in html
    console.log(data);
}

loadCategories();
