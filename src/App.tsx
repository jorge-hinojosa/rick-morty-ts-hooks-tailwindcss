import React from "react";
import { Store } from "./Store";
import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

export default function App(props: any) {
  const { state } = React.useContext(Store);

  // console.log(state);
  return (
    <Router>
      <div className="bg-lighter-grey font-mono flex flex-col justify-center items-center">
        <header className="sticky top-0 shadow-md bg-red-500 w-screen mb-8 text-gray-100 flex justify-center items-center">
          <div className="w-3/4 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-3xl font-bold m-0">Rick and Morty</h1>
              <p className="text-sm ml-3 mt-1 text-white">
                Pick your favorite characters!
              </p>
            </div>
            {/* <div>
            <input
              type="text"
              placeholder="Search"
              className="rounded-sm text-black text-sm pl-2"
            />
            <button className="ml-3">Search</button>
          </div> */}
            <div className="w-1/4 flex justify-around">
              <Link to="/">Home</Link>
              <Link to="/favorites">
                View Favorites: {state.favorites.length}
              </Link>
            </div>
          </div>
        </header>
        {props.children}
        {routes}
      </div>
    </Router>
  );
}
