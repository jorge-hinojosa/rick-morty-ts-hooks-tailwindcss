import React from "react";
import { IState, IAction } from "./interfaces";

const initialState: IState = {
  characters: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_DATA":
      return { ...state, characters: payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, payload] };
    case "REMOVE_FAV":
      return { ...state, favorites: payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
