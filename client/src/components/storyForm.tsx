import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_STORY } from '../utils/mutations';
import Auth from '../utils/auth';

interface StoryFormProps {
    templateId: string;
    }

const StoryForm: React.FC<StoryFormProps> = ({ templateId }) => {
    const [story, setStory] = useState({
        title: '',
        story: '',
    });
 
    const [addStory] = useMutation(CREATE_STORY);
    const [characterCount, setCharacterCount] = useState(0);
    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { data } = await addStory({
                variables: {
                    input: { ...story, templateId },
                },
            });
            setStory({ title: '', story: '' });
            Auth.login(data.addStory.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h4>Add Your Story</h4>
            {Auth.loggedIn() ? (
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="storyTitle">Title:</label>
                        <input
                            placeholder="Title"
                            name="title"
                            type="text"
                            id="storyTitle"
                            value={story.title}
                            onChange={(event) => {
                                if (event.target.value.length <= 50) {
                                    setStory({ ...story, title: event.target.value });
                                    setCharacterCount(event.target.value.length);
                                }
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="storyText">Story:</label>
                        <textarea
                            placeholder="Tell your story..."
                            name="story"
                            id="storyText"
                            value={story.story}
                            onChange={(event) => {
                                if (event.target.value.length <= 500) {
                                    setStory({ ...story, story: event.target.value });
                                    setCharacterCount(event.target.value.length);
                                }
                            }}
                        />
                    </div>
                    <div>
                        {characterCount}/500
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>
                    You need to be logged in to share your story. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    )
}

export default StoryForm;