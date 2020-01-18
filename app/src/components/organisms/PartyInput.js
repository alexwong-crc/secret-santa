import React from "react";
import { PeopleList } from "../molecules/PeopleList";

export default () => {
  return (
    <div>
      <div>
        <label for="partyName">Party Name:</label>
        <input name="partyName" id="partyName" />
      </div>
      <PeopleList />
    </div>
  );
};
