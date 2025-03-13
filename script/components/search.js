const searchBarStretchLeft = () => {
    const searchBar = document.querySelector('.search__input');
    const searchButton = document.querySelector('.search__button');
    const headerSearch = document.querySelector('.header__search');

    searchButton.addEventListener("mouseenter", () => {
        searchBar.classList.add("active", "expand-left");
    });

    window.addEventListener("click", (e) => {
        if(!headerSearch.contains(e.target)){
            searchBar.classList.remove("active", "expand-left");
        }
    });
}

export { searchBarStretchLeft };