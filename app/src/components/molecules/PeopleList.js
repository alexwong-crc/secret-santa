import React from "react";
import PersonInput from "./PersonInput";

export class PeopleList extends React.Component {
  state = {
    peopleCount: 1
  };

  increasePeopleCount = () => {
    this.setState(prevState => {
      return {
        peopleCount: prevState.peopleCount + 1
      };
    });
  };
  renderPersonInput = () => {
    const personInputArray = [];
    // return <PersonInput />
    for (let i = 0; i < this.state.peopleCount; i++) {
      //the key below needs to be changed because using numbers as keysis bad practise.
      personInputArray.push(<PersonInput key={i} />);
    }
    return personInputArray;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderPersonInput()}
        <button onClick={this.increasePeopleCount}>+</button>
      </React.Fragment>
    );
  }
}
