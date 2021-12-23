import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = (props) => {

    const [items, setItems] = useState([]);

    const getItems = async () => {
        try {
            const response = await axios.get(`https://localhost:3001/orders/${props.id}`)
            setItems(response.data.items);
        } catch (error) {
            console.log(error);
            alert('Bad request; try again');
        }
    }

    useEffect(() => {
        getItems();
    });

    return (
        <div>
            {items.map((item) => {
                return (
                    <div>
                        {item.name} {' '} {item.price}
                    </div>
                );
            })}
        </div>
    );
}

export default Order