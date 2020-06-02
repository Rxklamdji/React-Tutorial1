import React, { Component } from 'react';   // "component " imported from react library

import './App.css';

import Radium, {StyleRoot} from "radium";    //for Radium, we are just importing a default version of the file, and "StyleRoot" is just another component

import Person from './Person/Person';
import person from "./Person/Person";     //We are importing our New Component that we created "Person" from the "Person,js" file, plus we have to put our "Person ClassName" in the Return of the App.js, so that this will appear on the screen of our app, since this is the Root of our App and to see stuff appear on the screen it has to be return here

//Remember below is the most used way of creating components in React; you will learn how to create a component using another way called React Ox
class App extends Component {       //Defining Component: We create a JS Class APP,which inherit from class "component " imported from react library

    //Because This component has a state, it becomes a smart component, this is better code because these states are like containers to change something, you just come here

    state = {    //Unlike Props, you can directly passed a value into a placeholder in the same file where you invoking the value and placeholder
        persons: [
            { id:'1', name: "Roberta", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
            { id: '2', name: "Masha" , number: Math.floor(Math.random() * 30 ) },    //The Good thing about State is that to change value of the variables, we just come here and the rest will be automatically change by React
            { id: '3', name: "Alexis" ,number: Math.floor(Math.random() * 30 )}
],

        persons2: [
            { name: "Isaac", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
            { name: "Chao" , number: Math.floor(Math.random() * 30 ) }    //The Good thing about State is that to change value of the variables, we just come here and the rest will be automatically change by React
        ],

        showPersons: false   //So with this: "by default, app won't show Persons" untill we click the "SwitchName Button"; now we can go back to our New Div to implement this; we are trying to incorporate a condition, so that's why we put a boolean here.

    }

    //Putting an Argument like "NewName" will allow us to take it and bind it to the click and when we click on it the function can direclty be executed
    //NewName will allow us to call it in switchNameHandler and click to changeName for the 1st sentence... ALways use Bin because it is better..




    //This is our event handler (help us capture what the user enter) for the method of typing name that we just created in person; we will use "eventTarget" to point out where we want to input the name:
    //With These updated codes we can delete our names and enter names into the field name and see them being returned at the same time
    nameChangedHandler = (event, id) => {     //Of course to link an event of our root app to a file component we always gotta use "props"

        //This is another method that gives same results like Map method without using it
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;   //We need a True or false to tell React if this is the person we are looking for  //This help us return the person id when it matched to what was sent to them;

        });    //this will find the index of the person field where we are typing

        const person = {      //here we are creating a js object that distribute all the properties of the object we are fecthing in
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;   //here we are capturing the new variable we just created

        const persons = [...this.state.persons];  //we are updating our array
        persons[personIndex] = person;      //this will help us update our new copy


        //These persons is our updated persons array which is a copy adjusted of our old array
        this.setState({
            persons: persons           //Now, this "SetMethodState will set the original values of "persons2" to these given values

            /**  persons2: [

             { name: "JhonnyTheCat", number: Math.floor(Math.random() * 30 ) },    //Then to see this, we have to call this in the return method by identifying their index number
             { name: event.target.value , number: Math.floor(Math.random() * 30 ) }   //Of course to use or see this we need to put it in the render-return-div

             ]
             })  */

        });
    }

    //We want to introduce a new Method like deleteperson

    deletePersonHandler = (personIndex) => {  //We want to be able to delete a person when we "Click button"; so we will add this method to our if statement since we want "Person" to be deleted when we add the button

        //The Flaws of this method is that in js "object and array" are reference type, so this will modify the original array we have, we need to copy the array before altering it;
        //So, now we will create a copy of the original array before altering it;
        //const persons = this.state.persons.slice();  //Instead of altering the original array, we will make another copy of it with slice() here;  //This help us fetch all of the persons that are in the stateMethod
        //Best alternative will be to just do a "Spread"
        const persons = [...this.state.persons];   //Ex feature; this will spread the original array we have into state and create a new copy;
        persons.splice(personIndex,1);  //Now we are creating a new version of that person array by "Splicing it and taking the one with Index No1;
        this.setState({persons: persons})  //Here, we are calling the new updated "Person" that we have after splicing the index 1;
    }


    togglePersonsHandler = () => {    //Here, we need to create the togglePersonsHandler; we want a certain condition to be met before we can show our phrases; first go to "stateMethod" and add a boolean property since we trying to incorporate a condition.

        //since we have 2 components method "state and set.state", we create a const function to affect "State" because it is our main one, but for "set.state" we can just call it and change it directly
        const doesShow = this.state.showPersons; //so here we are creating a function that will our Persons in the "StateMethod"
        this.setState({showPersons:!doesShow });   //so for our "set.state" if doesshow is false, it will set ShowPerson to True; if doesshow is true, it will set ShowPerson to false;
    }


    render() {         //React uses " Render (which allow normal js code not jsx like the rest, we input css and more js codes); " to return something on our screen by using the React-DOM; This is like the Head in HTML where you can put some css codes to style the page here; so React will return to the screen everything that is in the "Render {}"

        // We will use this style on our button so that you can see it well defined by a button; This Method of styling allow us to target one specific target by creating a class for it
        const styleButton = {      //These are the colors and style that will appear by default on our button; This is a 2nd method of styling, but this is to incorporate style directly in line; and this code has to be written in js code, so you can manipulate styling with any js code that you want, so in '';

            backgroundColor: '#4F42B5',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {            //Here we are adding some hoover effect and also we have to overright this where we overwrite style.backgroundcolor
                backgroundColor: 'lightgreen',
                color: 'black'
            }

        };

        //This is the Most use and clean way to create a Condition; we first create our method "Let" that is what will happened if 'if checks not true" then we create our "if statement"

        let persons = null;     //In the Render {} we can directly type normal js codes and call our "persons method" and set it to null as default;

        if (this.state.showPersons) {         //this is our boolean check to see if this is true; if it is true, then whatever is in the bracket will be executed

            persons = (

                <div /** We are going to use condition like "if" here and that's why we are putting our return phrases into div */>

                    {this.state.persons.map((person, index) => {    //so here we want to return the list of array we have present into "state.persons" because they are written in js code so we need to translate it to

                        return <Person
                                    click = {() => this.deletePersonHandler(index)}
                                    name = { person.name}
                                    number = {person.number}
                                    key = {person.id}  /** This is for React to keep up with our delete method and see how our delete is affecting the remaining numbers that we have left; usually this will be handle with 'id' from the tables of our database; but here we created a fake id */
                                    changed={(event) => this.nameChangedHandler(event, person.id)}    //This is to update the field of the person for which we type; this is connect into the method "NameChangehandler" with new const

                                />

                    })}

                </div>

            );

            //Here we wanted to add a dynamic style that will appear as soon as we click the button, so that the color of the button changes after user click on it!!
            styleButton.backgroundColor = 'red';
            styleButton.color = 'black';

            //Here we are overwriting hoover too
            styleButton[':hover'] = {        //This is for after user click on the button, how it will appear so we still use Style button as method to style;
                backgroundColor: 'yellow',
                    color: 'black'
            };

        }


        //We are creating new classes here to assign style to our phrases; Since we created 2 classes of styling 'Red' 'Bold', then to call them together, we join both to create an only one new class;
        const PhraseStyleClass = [] ;   //Now, we can call "PhraseStyleClass" to which ever phrase we wanna style

        //Here we want to set some Conditional Styling Method; so if we have less than 1 or equal to 1 element present, then the red style will be executed
        if (this.state.persons.length <= 1) {
            PhraseStyleClass.push('red');       //So if we have less than 1 phrases present, we want our style class to push the red class as a style
        }
        //If the condition here check to be false, then it wont be executed; if it checked to be true, then it will be executed
        if (this.state.persons.length <= 2) {      //Since we have already a condition for lessthan1, this will have two styling present for lessthan1 and lessthan2
            PhraseStyleClass.push('bold');
        }







    return (          //We write our HTML inside the parenthese of this return; as you can see here we are only using One component:App, now let's add another one;


        <StyleRoot>


        <div className="App">

            <h1 /** This is our Main Header*/>Romeo Klamadji Calendar</h1>
            <p className={PhraseStyleClass.join(' ') /** Since we created 2 classes of styling 'Red' 'Bold', then to call them together, we join both with the joinclause 'spaceheredontforget' to create an only one new class;*/} /** by calling the classes variables here, we are styling this using the 2 classes that we created*/>This will Track all Our Friends Activities</p>

            <button /** to impose condition, we have to also change the handler with togglePerson (which we will have to create) */
                style={styleButton    /** We are styling our button with simple inline styling here; you can find the class "StyleButton up there */}
                onClick={this.togglePersonsHandler}>Switch Name
            </button>

            {persons /** This will output the content we insert refers to that person that we set to null at the begining of our Condition; since we set it to null, then when React Render it won't show anything then*/}

        </div>
        </StyleRoot>   //To call this StyleRoot you have to import it frist, then wrap it around our app body

    );

    // THis is the old way of typing Return, we don't do this no more.
    // return React.createElement('div', {className: App}, React.createElement('h1',null, 'Romeo New Calendar') )         //Using the React Object to call a CreateElement method with 3 or more args; we have "Div" for html, "This will be the className we are using, here it is App" cause we don't want it to return anything and React.Element (so that whatever is inside will be treated as a class like h1 element), The text to be display!!

  }
}

export default Radium(App);     //Higher Order Component "Radium" wrapping our app to help us use some extra features, especially adding Hoover style on button //We are exporting the CLass App that we created above as a default;




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
