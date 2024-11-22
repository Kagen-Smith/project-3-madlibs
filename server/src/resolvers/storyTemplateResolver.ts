import StoryTemplate, { StoryTemp } from '../models/storyTemplate.js';
import IStoryTemplate from '../models/storyTemplate.js'; // Import the IStoryTemplate interface as the default export

const storyTemplateResolvers = {
  Query: {
    getStoryTemplates: async (): Promise<typeof IStoryTemplate[]> => await StoryTemplate.find(),
    getStoryTemplate: async (_: any, { id }: { id: string }): Promise<typeof IStoryTemplate | null> => {
      return await StoryTemplate.findById(id);
    },
  },
  Mutation: {
    createStoryTemplate: async (_: any, { title, template }: { title: string; template: string }): Promise<typeof storyTemplate> => {
      const storyTemplate = new StoryTemplate({ title, template });
      return await storyTemplate.save();
    },
    generateStory: async (_: any, { id, inputs }: { id: string; inputs: string[] }): Promise<string> => {
      const storyTemplate = await StoryTemplate.findById(id) as StoryTemp;
      if (!storyTemplate) throw new Error('Story Template not found');
      
      let story = storyTemplate.template;
      inputs.forEach((input, index) => {
        story = story.replace(`{${index + 1}}`, input);
      });
      return story;
    },
  },
};

export default storyTemplateResolvers;
