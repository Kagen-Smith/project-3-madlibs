import { useState, useEffect } from 'react';
import  Story  from '../models/story';

const CompletedStories = () => {

    // Initialize state for stories
    const [stories, setStories] = useState<Story[]>([]);
    
    // Fetch stories from the server
    useEffect(() => {
        fetch('/api/stories')
        .then((res) => res.json())
        .then((data) => setStories(data));
    }, []);
    
    return (
        <div>
        <h1>Completed Stories</h1>
        <ul>
            {stories.map((story) => (
            <li key={story._id}>
                <h2>{story.title}</h2>
                <p>{story.story}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default CompletedStories;