// Fetch, Load and Show Categories on html

// Create Load Categories
const loadCategories = () => {
    // Fetch the Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

const loadVideos = () => {
    // Fetch the Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videos.forEach(video => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = 
        `
        <figure>
            <img
            src= ${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        videoContainer.append(card);
    });
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
    });
}

loadCategories();
loadVideos();
