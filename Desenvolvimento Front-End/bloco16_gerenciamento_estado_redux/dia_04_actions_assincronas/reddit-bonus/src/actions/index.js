export const beginSearch = () => {
  return {
    type:'BEGIN_SEARCH',
  }
}

export const objReturn = (obj) => {
  return {
    type:'SEARCH_SUCESS',
    payload: {
      obj,
    }
  }
}

export const failRequest = (error) => {
  return {
    type:'FAIL_REQUEST',
    error,
  }
}