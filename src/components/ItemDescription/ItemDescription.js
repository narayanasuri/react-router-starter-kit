import React from 'react';

function ItemDescription(obj) {
    return (
        <div>
            <h3>ItemDescription</h3>
            <h5>ID : {obj.match.params.id}</h5>
        </div>
    );
}

export default ItemDescription;