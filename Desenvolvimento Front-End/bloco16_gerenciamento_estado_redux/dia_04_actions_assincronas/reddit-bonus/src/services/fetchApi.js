import { beginSearch, objReturn,failRequest } from "../actions";

const fetchApi = (tipo) => {
  return async dispatch => {
    dispatch(beginSearch())
    try{
      const response = await fetch(`https://www.reddit.com/r/${tipo}.json`);
      const obj = await response.json();
      dispatch(objReturn(obj.data.children));
    }catch (error){
      dispatch(failRequest(error))
    }
  }
}

export default fetchApi;