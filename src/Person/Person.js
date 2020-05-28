import React from 'react';    //We need to import the React Component everytime we want to call js component
import "./Person.css";     // Importing this makes our webapp to be aware of thisstyling and don't forget to mention the extension 'css' but for js file u dont need to mention the extension

const person = (props) => {               //Here we are creating a function named " person " using ES6 symbol syntax "() =>", we use "const" because the value we are going to assing to it wont change
//Props in general can only be used to paste the value that we gave in this file 'p' to the Root file 'App.js' into a place holder in the Component we created.
//Functions always have to return some js like we are doing here; Now to call this method we need to import React
//Props.Children "if you wanna put some content like html content between our class <>" allows us to put any Dynamic thing like text,list or any other thing right before </closing our CreatedComponent>
//This is how you paste, Method as Props: Onclick will allow us to change name by just clicking on the pharse and we use the "props.click" because we called our method "click" and what will be executed will be the method: "switchNameHandler" as we said
//input will allow us to input a text and change it and we have to create an event handler for this in the app.js
//ClassName "Person" is to bind this file to our css file for styling

    return(

    <div className="Person">

    <p onClick={props.click}>I'm {props.name} interacting with the Calendar and I am inputting  {props.number} activities in here</p>
     <p>{props.children}</p>
     <input type="text" onChange={props.changed} />
    </div>
   )
};

//This is a state less component or dumb or presentational component because it has no statemethod in this component; this is not a good way because it can make your app hard to manage and maintain

//Creating a new Component using const will require us to know "the name we are using to explore the file by default
export default person;    //Remember everything to hold our function, we have to export it by default, you always have to close it like this;
