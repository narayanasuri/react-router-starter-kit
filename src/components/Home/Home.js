import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        setItems(items.data);
    }

    return (
        <div className="home">
            { items.length > 0 && <h2>Upcoming Items :</h2>}
            {items.map(item => (
                <h2 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h2>
            ))}
        </div>
    );
}

export default Home;