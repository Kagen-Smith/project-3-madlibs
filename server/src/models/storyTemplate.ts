import { Schema, model, type Document} from 'mongoose';


export interface StoryTemp extends Document {
    [x: string]: any;
    Title: string;
    Story: string;
    words: string[];
}

const storyTemplateSchema = new Schema<StoryTemp>({
    Title: { type: String, required: true },
    Story: { type: String, required: true },
    words: { type: [String], required: true }
});

const StoryTemplate = model<StoryTemp>('StoryTemplate', storyTemplateSchema);

export default StoryTemplate;