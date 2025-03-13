const searchBarStretchLeft = () => {
    const headerSearch = document.querySelector('.header__search');
    const searchBar = headerSearch.querySelector('.search__input');
    const searchButton = headerSearch.querySelector('.search__button');
    
    searchButton.addEventListener("mouseenter", () => {
        searchBar.classList.add("expand-left");
    });

    window.addEventListener("click", (e) => {
        if(!headerSearch.contains(e.target)){
            searchBar.classList.remove("expand-left");
        }
    });
}

export { searchBarStretchLeft };