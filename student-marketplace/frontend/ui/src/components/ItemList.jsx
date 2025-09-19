import React from 'react';

function ItemList({ items }) {
    return (
        <div className="item-list">
            <h3>Available Items</h3>
            {items.length === 0 ? (
                <p>No items available right now.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className="item-card">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <span>${item.price.toFixed(2)}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default ItemList;