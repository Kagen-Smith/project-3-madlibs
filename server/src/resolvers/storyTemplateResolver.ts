import StoryTemplate, { IStoryTemplate } from '../models/storyTemplate';

const storyTemplateResolvers = {
  Query: {
    getStoryTemplates: async (): Promise<IStoryTemplate[]> => await StoryTemplate.find(),
    getStoryTemplate: async (_: any, { id }: { id: string }): Promise<IStoryTemplate | null> => {
      return await StoryTemplate.findById(id);
    },
  },
  Mutation: {
    createStoryTemplate: async (_: any, { title, template }: { title: string; template: string }): Promise<IStoryTemplate> => {
      const storyTemplate = new StoryTemplate({ title, template });
      return await storyTemplate.save();
    },
    generateStory: async (_: any, { id, inputs }: { id: string; inputs: string[] }): Promise<string> => {
      const storyTemplate = await StoryTemplate.findById(id);
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
