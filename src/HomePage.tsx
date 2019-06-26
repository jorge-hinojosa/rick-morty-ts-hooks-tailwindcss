import React from "react";
import { ICharacterProps } from "./interfaces";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";

const CharacterList = React.lazy<any>(() => import("./CharacterList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.characters.length === 0 && fetchDataAction(dispatch);
  });

  const props: ICharacterProps = {
    characters: state.characters,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading</div>}>
        <section className="w-9/12 flex flex-row flex-wrap justify-center items-center">
          <CharacterList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
