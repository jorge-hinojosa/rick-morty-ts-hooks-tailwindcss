/**
|--------------------------------------------------
| All the interfaces!!
|--------------------------------------------------
*/

export interface IState {
  characters: Array<ICharacter>;
  favorites: Array<ICharacter>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  species: string;
  origin: {
    name: string;
  };
  status: string;
  image: string;
}

export interface ICharacterProps {
  characters: Array<ICharacter>;
  store: { state: IState; dispatch: any };
  toggleFavAction: (
    state: IState,
    dispatch: any,
    character: ICharacter
  ) => IAction;
  favorites: Array<ICharacter>;
}
