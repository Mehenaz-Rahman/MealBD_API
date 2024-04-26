document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const blogContainer = document.getElementById('blog-container');
    const showAllButton = document.getElementById('show-all');

    // Function to fetch meals from MealDB API
    function searchMeal(searchTerm) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                displayMeals(data.meals);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to display meals on the webpage
    function displayMeals(meals) {
        blogContainer.innerHTML = ''; // Clear previous search results
        if (meals) {
            const displayedMeals = meals.slice(0, 5); // Show only the first 5 meals
            displayedMeals.forEach(meal => {
                const blogCard = createBlogCard(meal);
                blogContainer.appendChild(blogCard);
            });

            // If more than 5 results, show "SHOW ALL" button
            if (meals.length > 5) {
                showAllButton.style.display = 'block';
                showAllButton.addEventListener('click', function() {
                    // Display all meals
                    meals.slice(5).forEach(meal => {
                        const blogCard = createBlogCard(meal);
                        blogContainer.appendChild(blogCard);
                    });
                    showAllButton.style.display = 'none'; // Hide "SHOW ALL" button after displaying all meals
                });
            } else {
                showAllButton.style.display = 'none'; // Hide "SHOW ALL" button if less than or equal to 5 results
            }
        } else {
            blogContainer.innerHTML = '<p>No meals found</p>';
            showAllButton.style.display = 'none'; // Hide "SHOW ALL" button if no results found
        }
    }

    // Function to create a blog card for a meal
    function createBlogCard(meal) {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h2>${meal.strMeal}</h2>
            <p><strong>ID:</strong> ${meal.idMeal}</p>
            <p><strong>Title:</strong> ${meal.strMeal}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
        `;
        return blogCard;
    }

    // Event listener for search button click
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchMeal(searchTerm);
        } else {
            alert('Please enter a search term');
        }
    });
});




