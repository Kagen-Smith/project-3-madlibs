import StoryTemplate, { IStoryTemplate } from './src/models/storyTemplate'; // Import the Mongoose model

const resolvers = {
  Query: {
    // Fetch all story templates
    getStoryTemplates: async (): Promise<IStoryTemplate[]> => {
      return await StoryTemplate.find();
    },
    // Fetch a single story template by ID
    getStoryTemplate: async (_: any, { id }: { id: string }): Promise<IStoryTemplate | null> => {
      return await StoryTemplate.findById(id);
    },
  },
  Mutation: {
    // Create a new story template
    createStoryTemplate: async (_: any, { title, template }: { title: string; template: string }): Promise<IStoryTemplate> => {
      const storyTemplate = new StoryTemplate({ title, template });
      return await storyTemplate.save();
    },
    // Generate a story by replacing placeholders with user inputs
    generateStory: async (_: any, { id, inputs }: { id: string; inputs: string[] }): Promise<string> => {
      const storyTemplate = await StoryTemplate.findById(id);
      if (!storyTemplate) throw new Error('Story Template not found');

      // Replace placeholders in the template with user inputs
      let story = storyTemplate.template;
      inputs.forEach((input, index) => {
        story = story.replace(`{${index + 1}}`, input);
      });
      return story;
    },
  },
};

export default resolvers;
