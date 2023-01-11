import axios from "axios";

const hackerNewsBaseUrl = "https://hacker-news.firebaseio.com/v0";

const fetchStory = async (id) => {
  try {
    const story = await axios(`${hackerNewsBaseUrl}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const fetchStories = async (type, page_number) => {
  try {
    const { data: storyIds } = await axios(
      `${hackerNewsBaseUrl}/${type}stories.json`
    );
    const end = page_number * 20;
    const stories = await Promise.all(
      storyIds.slice(end - 20, end).map(fetchStory)
    );
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
