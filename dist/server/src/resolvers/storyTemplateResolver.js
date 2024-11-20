import StoryTemplate from '../models/storyTemplate';
const storyTemplateResolvers = {
    Query: {
        getStoryTemplates: async () => await StoryTemplate.find(),
        getStoryTemplate: async (_, { id }) => {
            return await StoryTemplate.findById(id);
        },
    },
    Mutation: {
        createStoryTemplate: async (_, { title, template }) => {
            const storyTemplate = new StoryTemplate({ title, template });
            return await storyTemplate.save();
        },
        generateStory: async (_, { id, inputs }) => {
            const storyTemplate = await StoryTemplate.findById(id);
            if (!storyTemplate)
                throw new Error('Story Template not found');
            let story = storyTemplate.template;
            inputs.forEach((input, index) => {
                story = story.replace(`{${index + 1}}`, input);
            });
            return story;
        },
    },
};
export default storyTemplateResolvers;
