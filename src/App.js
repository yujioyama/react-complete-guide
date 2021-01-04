import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//class based
class App extends Component {
  state = {
    persons: [
      { name: '太郎', age: 999 },
      { name: 'ステフェン', age: 1 },
      { name: 'silver', age: 22 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState ({
      persons: [
        { name: newName, age: 4 },
        { name: 'SK2', age: 100 },
        { name: 'ギルガメス', age: 999 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'ロキソニン', age: 4 },
        { name: event.target.value, age: 100 },
        { name: 'ギルガメス', age: 999 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('ロキソニン')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} 
          />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'protest')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} 
          />
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
