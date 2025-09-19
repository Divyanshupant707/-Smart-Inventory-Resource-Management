import React, { useState, useEffect, useCallback } from 'react';
import ItemList from './components/ItemList';
import CreateItem, { createItem } from './components/CreateItem';
import { getItems } from './services/api';
import './App.css';

function App() {
    const [items, setItems] = useState([]);

    const fetchItems = useCallback(async () => {
        try {
            const response = await getItems();
            setItems(response.data);
        } catch (error) {
            console.error("Failed to fetch items:", error);
        }
    }, []);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <div className="container">
            <header>
                <h1>Campus Marketplace 📚</h1>
            </header>
            <main>
                <CreateItem onItemCreated={fetchItems} />
                <ItemList items={items} />
            </main>
        </div>
    );
}

export default App;