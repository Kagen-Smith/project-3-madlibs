import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_STORY } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Story from '../models/story';


interface StoryProps {
    story: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map(arg0: (story: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
        length: number;
        _id: string;
        title: string;
        story: string;
    };
    isLoggedUser: boolean;
    onSelect: (arg0: string) => void;
}

/**
 * Renders a list of story templates.
 * @param {StoryProps} props - The component props.
 * @param {Array<Story>} props.story - The array of story templates.
 * @param {boolean} props.isLoggedUser - Indicates if the user is logged in.
 * @returns {JSX.Element} The rendered component.
 */
const TemplatesList: React.FC<StoryProps> = ({ story, isLoggedUser }) => {
    const [removeStory] = useMutation(REMOVE_STORY, {
        refetchQueries: [QUERY_ME, 'me'],
    });

    /**
     * Handles the removal of a story template.
     * @param {Story} story - The story template to be removed.
     * @returns {Promise<void>} A promise that resolves when the story is removed.
     */
    const handleRemoveStory = async (story: Story) => {
        try {
            await removeStory({
                variables: { id: story._id },
            });
        } catch (err) {
            console.error(err);
        }
    };

    if (!story.length) {
        return <h3>No Stories Yet</h3>;
    }

    return (
        <div>
            <div>
                {story && 
                    story.map((story: Story) => (
                        <div key={story._id} className="card mb-3">
                            <p className="card-header">
                                {story.title}
                                {isLoggedUser && (
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveStory(story)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </p>
                            <div className="card-body">
                                <p>{story.story}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

    export default TemplatesList;