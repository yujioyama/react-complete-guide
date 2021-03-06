import React, { Component } from 'react';
import classes from './App.module.css';

// import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


//class based
class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: '太郎', age: 999 },
      { id: 'gfd2', name: 'ステフェン', age: 1 },
      { id: 'dfgg1', name: 'silver', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); You can use this but the other one below this one is a simpler and newer way to code
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle} />
        {persons}
      </div>
      
    );
  }  
}

export default App;

// hooks
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: '太郎', age: 999 },
//       { name: 'ステフェン', age: 1 },
//       { name: 'silver', age: 22 }
//     ]
//   })
  
//   const [otherState, setOtherState] = useState('some other value')

//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'ロキソニン', age: 4 },
//         { name: 'SK2', age: 100 },
//         { name: 'ギルガメス', age: 999 }
//       ]
//     })
//   }
  
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name}  age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name}  age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
//     </div>
//   );
// }

// export default app;
