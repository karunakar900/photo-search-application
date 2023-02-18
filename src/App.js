import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();
        const accessKey = 'OZqQMeGKawSs-KxjWESlmC33w246LH-KJ_sXj3MHeIU';
        const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;

        try {
            const response = await axios.get(apiUrl);
            setPhotos(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>photo-search-application</h1>
            <form onSubmit={searchPhotos}>
                <input type="text" value={query} placeholder="Enter  name of the  picture......." onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <br></br>
            <br></br>
            <div className="photos">
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.urls.regular} alt={photo.alt_description} />
                ))}
            </div>
        </div>
    );
}

export default App;

