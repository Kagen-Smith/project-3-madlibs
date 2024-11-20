import { Schema, model } from 'mongoose';
const storyTemplateSchema = new Schema({
    Title: { type: String, required: true },
    Story: { type: String, required: true },
    words: { type: [String], required: true }
});
const StoryTemplate = model('StoryTemplate', storyTemplateSchema);
export default StoryTemplate;
