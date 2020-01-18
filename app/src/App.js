import React from "react";
import Header from "./components/organisms/Header";
import { PeopleList } from "./components/molecules/PeopleList";

const App = () => {
  return (
    <div>
      <Header />
      <PeopleList />
    </div>
  );
};

export default App;
