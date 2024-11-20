import Story from '../models/storyTemplate';
export const getStories = async (_req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        res.json(story);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createStory = async (req, res) => {
    try {
        const story = new Story(req.body);
        const savedStory = await story.save();
        res.json(savedStory);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(story);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndDelete(req.params.id);
        if (!story) {
            res.status(404).json({ message: 'Story not found' });
            return;
        }
        res.json({ message: 'Story deleted' });
        return;
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
