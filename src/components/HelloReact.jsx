import React from "react";
import List from './List/List'
import OrderedList from "./OrderedList/OrderedList";

const thingsIHate = ['being awake', 'throwing up', 'commuting'];
const thingsILove = ['video games', 'cars', 'sleeping'];

function HelloReact() {
    return (
    <div>
      <h1>Hello! My name is Adam!</h1>
      <List 
      thingsILove={thingsILove}
      name='Adam'
      age={30}
      isFree={true}
      />
      <OrderedList thingsIHate={thingsIHate}/>
    </div>
    )
}

export default HelloReact;