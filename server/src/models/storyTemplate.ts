import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the story template document
export interface IStoryTemplate extends Document {
  title: string;
  template: string;
}

// Define the schema for MongoDB
const StoryTemplateSchema: Schema = new Schema({
  title: { type: String, required: true },
  template: { type: String, required: true },
});

// Export the Mongoose model
export default mongoose.model<IStoryTemplate>('StoryTemplate', StoryTemplateSchema);
