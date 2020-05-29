import React, { Component } from 'react';   // "component " imported from react library

import './App.css';

import Person from './Person/Person';     //We are importing our New Component that we created "Person" from the "Person,js" file, plus we have to put our "Person ClassName" in the Return of the App.js, so that this will appear on the screen of our app, since this is the Root of our App and to see stuff appear on the screen it has to be return here

//Remember below is the most used way of creating components in React; you will learn how to create a component using another way called React Ox
class App extends Component {       //Defining Component: We create a JS Class APP,which inherit from class "component " imported from react library

    //Because This component has a state, it becomes a smart component, this is better code because these states are like containers to change something, you just come here

    state = {    //Unlike Props, you can directly passed a value into a placeholder in the same file where you invoking the value and placeholder
        persons: [
            { name: "Roberta", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
            { name: "Masha" , number: Math.floor(Math.random() * 30 ) }    //The Good thing about State is that to change value of the variables, we just come here and the rest will be automatically change by React
        ],

        persons2: [
            { name: "Isaac", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
            { name: "Chao" , number: Math.floor(Math.random() * 30 ) }    //The Good thing about State is that to change value of the variables, we just come here and the rest will be automatically change by React
        ],

        showPersons: false   //So with this: "by default, app won't show Persons" untill we click the "SwitchName Button"; now we can go back to our New Div to implement this; we are trying to incorporate a condition, so that's why we put a boolean here.

    }

    //Putting an Argument like "NewName" will allow us to take it and bind it to the click and when we click on it the function can direclty be executed
    //NewName will allow us to call it in switchNameHandler and click to changeName for the 1st sentence... ALways use Bin because it is better..

    switchNameHandler = (NewName) => {   //This will be the method that will be exeuted as soon as we click on the button, we call it event handler because we need an action like click to happen first and this is an action also that is trigger by another action
        //console.log('Was Clicked!!');   //This will make Console write Was clicked as soon as we clicked the button

        //StateMethod makes React to update the "DOM" or the Web; it analyze the code and update it using state where it needs to do so
        this.setState({             //Now, this "SetMethodState will set the original values of "persons2" to these given values

            persons2: [

                { name: NewName, number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
                { name: "ChangedToMillo" , number: Math.floor(Math.random() * 30 ) }

            ]
        })

    }

    //This is our event handler for the method of typing name that we just created in person; we will use "eventTarget" to point out where we want to input the name:
    nameChangedHandler = (event) => {     //Of course to link an event of our root app to a file component we always gotta use "props"

        this.setState({             //Now, this "SetMethodState will set the original values of "persons2" to these given values

            persons2: [

                { name: "JhonnyTheCat", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
                { name: event.target.value , number: Math.floor(Math.random() * 30 ) }   //Of course to use or see this we need to put it in the render-return-div

            ]
        })

    }


    togglePersonsHandler = () => {    //Here, we need to create the togglePersonsHandler; we want a certain condition to be met before we can show our phrases; first go to "stateMethod" and add a boolean property since we trying to incorporate a condition.

        //since we have 2 components method "state and set.state", we create a const function to affect "State" because it is our main one, but for "set.state" we can just call it and change it directly
        const doesShow = this.state.showPersons; //so here we are creating a function that will our Persons in the "StateMethod"
        this.setState({showPersons:!doesShow })   //so for our "set.state" if doesshow is false, it will set ShowPerson to True; if doesshow is true, it will set ShowPerson to false;
    }


    render() {         //React uses " Render " to return something on our screen by using the React-DOM

        // We will use this style on our button so that you can see it well defined by a button; This Method of styling allow us to target one specific target by creating a class for it
        const styleButton = {      //This is a 2nd method of styling, but this is to incorporate style directly in line; and this code has to be written in js code, so in '';

            backgroundColor: '#4F42B5',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };

    return (          //We write our HTML inside the parenthese of this return; as you can see here we are only using One component:App, now let's add another one;

        <div className="App">

        <h1 /** This is our Main Header*/>Romeo Klamadji Calendar</h1>
        <p /** This will be 2nd header of our Webpage*/>This will Track all Our Friends Activities</p>

        <button /** to impose condition, we have to also change the handler with togglePerson (which we will have to create) */
            style={styleButton}
            onClick={this.togglePersonsHandler}>Switch Name
        </button>

            { this.state.showPersons ? //"?" will check this condition to see if it is true; so if this is true, then what is"since we create our boolean variable in state, we use "state.persons" to call it back; remember React only speak in js language.
                <div /** We are going to use condition like "if" here and that's why we are putting our return phrases into div */>

                      <Person name = {this.state.persons2[0].name} number = {this.state.persons2[0].number} />

                      <Person name = {this.state.persons2[1].name} number = {this.state.persons2[1].number}
                              changed={this.nameChangedHandler}/>

                      <Person name = {this.state.persons[0].name} number = {this.state.persons[0].number} />
                        <Person name = {this.state.persons[1].name} number = {this.state.persons[1].number} />

                    <Person name = 'Jenne' number = {Math.floor(Math.random() * 30 )} >Like: Gardening</Person>

                    <Person name = 'Andrea' number = {Math.floor(Math.random() * 30)}>
                    Like: Drinking Coffee
                    </Person>

                    <Person name = 'clickToChangeName' number = {Math.floor(Math.random() * 30)}
                          click={this.switchNameHandler.bind(this, 'ClickToNameItRomeo')}>
                      Like: Soccer
                    </Person>

                </div> : null //This will be our else statement; so if it is not true, if "?" check not true, return nothing because we didn't enter anything than u null;

            }

      </div>

    );

    // THis is the old way of typing Return, we don't do this no more.
    // return React.createElement('div', {className: App}, React.createElement('h1',null, 'Romeo New Calendar') )         //Using the React Object to call a CreateElement method with 3 or more args; we have "Div" for html, "This will be the className we are using, here it is App" cause we don't want it to return anything and React.Element (so that whatever is inside will be treated as a class like h1 element), The text to be display!!

  }
}

export default App;     //We are exporting the CLass App that we created above as a default;




/** This is the React Ox of creating a Method this is not so used

 //since we are creating a method in this file we will use the name we are using to "Export by Default which is APP"

 const App = props => {    //first we create the component and with the js code "Return plus Div"

// Unlike State, UseState return element in a form of Array, that's why we use
        const [personsState,setPersonsState] = useState({    //Unlike Props, you can directly passed a value into a placeholder in the same file where you invoking the value and placeholder

            persons: [
                { name: "Roberta", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
                { name: "Masha" , number: Math.floor(Math.random() * 30 ) }    //The Good thing about State is that to change value of the variables, we just come here and the rest will be automatically change by React
            ]

        });


        return(

            <div className="App">

                <p>I'm using the Redox Method to create this new Component</p>

            </div>
        )




        //So now everywhere, we originally had "This.State" will be replaced with "peronsState.
        <Person name = {this.state"personsState will be here".persons2[0].name} number = {this.state.persons2[0].number} />

    }

//For the new click button, this is how we will call it
 <button onClick={switchNameHandler}>Switch Name</button>

 switchNameHandler = () => {   //For the new switchNameHandler we will use this state instead

    this.setState"setPersonsState({     //We replace the "this.." with the one we created "setPersonsState"

    //This will not merge the code of person one into person 2 as it does in our regular example, but it will replace it completely
            persons2: [

                { name: "ChangedToKoffi", number: Math.floor(Math.random() * 30 ) },
                { name: "ChangedToMillo" , number: Math.floor(Math.random() * 30 ) }

            ]
        })

    }


 Import React, {useState} from 'React'   // This will allow us to use the UseStateMethod = StateMethod  to define variables as we did on top

 */
