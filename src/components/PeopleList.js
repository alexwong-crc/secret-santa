import React from 'react'
import PersonInput from './PersonInput'

export class PeopleList extends React.Component {
  state = {
    peopleCount: 1,
    foo: 'bar'
  }

  increasePeopleCount = () => {
    this.setState(prevState => {
      return {
        peopleCount: prevState.peopleCount + 1
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.peopleCount}
        <PersonInput />
        <button onClick={this.increasePeopleCount}>+</button>
      </React.Fragment>
    )
  }
}
