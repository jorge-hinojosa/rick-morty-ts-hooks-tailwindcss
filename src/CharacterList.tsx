import React from "react";
import { ICharacter } from "./interfaces";

export default function CharacterList(props: any): JSX.Element[] {
  const { characters, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store;

  return characters.map((character: ICharacter) => {
    return (
      <section className="m-4" key={character.id}>
        <img
          className="shadow-md rounded-lg w-64"
          src={character.image}
          alt={character.name}
        />
        <div className="mt-2 font-sans flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl text-center">{character.name}</h1>
          <button
            onClick={() => toggleFavAction(state, dispatch, character)}
            className="w-20 text-sm ml-3 bg-red-300 rounded-lg"
          >
            {favorites.includes(character) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </section>
    );
  });
}
