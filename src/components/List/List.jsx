import React from 'react';
import ListItem from './ListItem/ListItem';
import './../List/List.css';

const style = {
    headerColor: {
        color: 'purple'
    },
    listItemColor: {
        color: 'gold'
    }
}


const List = (props) => {
    console.log(props);
    return ( 
    <div>
    <h4 style={style.headerColor}>Things I love</h4>
        <ul style={style.listItemColor}>
            {
                props.isFree ? <h1>FREEDOM!</h1> : props.thingsILove.map((thing, index) => <ListItem key={index}>{thing}</ListItem>)
            }



            {/* {
            thingsILove.map((thing, index) => <ListItem key={index}>{thing}</ListItem>)
            } */}
        </ul>
    </div>
    )
};

export default List;