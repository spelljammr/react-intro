import React from 'react'
// import ListItem from './../List/ListItem/ListItem'

const style = {
    headerColor: {
        color: 'green'
    },
    itemColor: {
        color: 'blue'
    }
}


const OrderedList = () => (
    <div>
        <h4 style={style.headerColor}>Things I hate</h4>
        <ol style={style.itemColor}>
            {/* {
            thingsIHate.map((thing, index) => <ListItem key={index}>{thing}</ListItem>)
            } */}
        </ol>
    </div>
    );

    export default OrderedList;