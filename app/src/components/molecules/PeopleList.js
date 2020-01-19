import React, { useState } from "react";
import PersonInput from "./PersonInput";

export const PeopleList = props => {
  const [peopleCount, setPeopleCount] = useState(1);

  const renderPersonInput = () => {
    const personInputArray = [];
    for (let i = 0; i < peopleCount; i++) {
      personInputArray.push(
        <PersonInput key={i} formikProps={props.formikProps} id={i} />
      );
    }
    return personInputArray;
  };

  const increasePeopleCount = () => {
    setPeopleCount(peopleCount + 1);
  };

  return (
    <>
      {renderPersonInput()}
      <button onClick={increasePeopleCount}>+</button>
    </>
  );
};
