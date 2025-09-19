import React, { useState } from 'react';

function CreateItem({ onItemCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { title, description, price: parseFloat(price) };
        
        try {
            await createItem(newItem);
            alert('Item posted successfully!');
            setTitle('');
            setDescription('');
            setPrice('');
            onItemCreated(); // This will trigger a refresh in the parent component
        } catch (error) {
            console.error("Error posting item:", error);
            alert('Failed to post item.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="item-form">
            <h3>Post a New Item</h3>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required step="0.01" />
            <button type="submit">Post Item</button>
        </form>
    );
}
export default CreateItem;