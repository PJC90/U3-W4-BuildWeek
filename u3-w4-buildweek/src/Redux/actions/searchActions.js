export const setSearchValue = (value) => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: value,
  }
}

export const setSearchResults = (results) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  }
}
