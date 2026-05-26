document.addEventListener("DOMContentLoaded", function () {
    // በፍለጋ ሳጥኑ ውስጥ ያሉትን ኤለመንቶች መውሰድ
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const movieCards = document.querySelectorAll(".movie-card");

    // ፍለጋ የሚያደርገው ዋና ተግባር (Function)
    function filterMovies() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        movieCards.forEach(card => {
            // የፊልሙን ርዕስ ማግኘት
            const movieTitle = card.querySelector(".movie-info h3").textContent.toLowerCase();
            
            // የተጻፈው ቃል በፊልሙ ርዕስ ውስጥ ካለ አሳይ፣ ከሌለ ደብቅ
            if (movieTitle.includes(searchTerm)) {
                card.style.display = "block"; // ያሳያል
            } else {
                card.style.display = "none";  // ይደብቃል
            }
        });
    }

    // ተጠቃሚው በኪቦርዱ ላይ ፊደል ሲጽፍ ወዲያውኑ እንዲፈልግ
    searchInput.addEventListener("keyup", filterMovies);

    // ተጠቃሚው የፍለጋ ምልክቱን (አይኮኑን) ሲጫን እንዲፈልግ
    searchButton.addEventListener("click", function (e) {
        e.preventDefault(); // ገጹ እንዳይታደስ መከልከል
        filterMovies();
    });
});