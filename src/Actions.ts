import axios from "axios";
import { IState, ICharacter, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL = "https://rickandmortyapi.com/api/character/";
  const data = await axios
    .get(URL)
    .then(res => res.data.results)
    .catch(err => console.log(err));

  return dispatch({
    type: "FETCH_DATA",
    payload: data
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  character: ICharacter | any
): IAction => {
  const characterInFav = state.favorites.includes(character);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: character
  };
  if (characterInFav) {
    const favWithoutCharacter = state.favorites.filter(
      (fav: ICharacter) => fav.id !== character.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutCharacter
    };
  }
  return dispatch(dispatchObj);
};
