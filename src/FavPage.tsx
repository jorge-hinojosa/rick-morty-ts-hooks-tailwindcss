import React from "react";
import { Store } from "./Store";
import { ICharacterProps } from "./interfaces";
import { toggleFavAction } from "./Actions";

const CharacterList = React.lazy<any>(() => import("./CharacterList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: ICharacterProps = {
    characters: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section className='className="w-9/12 flex flex-row flex-wrap justify-center items-center'>
        {state.favorites.length !== 0 ? (
          <CharacterList {...props} />
        ) : (
          <p>Add to your favorites on the homepage!</p>
        )}
      </section>
    </React.Suspense>
  );
}
