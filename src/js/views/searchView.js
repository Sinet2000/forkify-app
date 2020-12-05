class SearchView {
  #parentElement = document.querySelector('.search');
  #searchFieldElement = document.querySelector('.search .search__field');

  getQuery() {
    const query = this.#searchFieldElement.value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#searchFieldElement.value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
