class SearchView {
  _parentElement = document.querySelector('.search');
  _searchFieldElement = document.querySelector('.search .search__field');

  getQuery() {
    const query = this._searchFieldElement.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._searchFieldElement.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
