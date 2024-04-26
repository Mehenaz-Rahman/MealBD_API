// JavaScript code for searching news
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Event listener for search button click
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            // You can perform further actions here, such as fetching news articles based on the search term
            console.log('Search term:', searchTerm);
        } else {
            alert('Please enter a search term');
        }
    });
});
