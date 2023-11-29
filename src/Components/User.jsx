/* React components use props to communicate with each other.
Every parent component can pass some information
to its child components by giving them props.
Props might remind you of HTML attributes, 
but you can pass any JavaScript value through them,
including objects, arrays, and functions.
 */

import React, { Children } from "react";

export const User = (props) => {
  return <>
    <section style={{textAlign: "center"}}>
    <img src={props.img} alt="image-loading"  width={200}/>
    <h1>Name: {props.name}</h1>
    <h2>Age: {props.age}</h2>
    <h4>Hobbies: {props.hobbies}</h4>
    {props.children}      {/*children of react component, special keyword "children" is defined to call it.*/}
    </section>
  </>;
};
