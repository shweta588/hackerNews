import { useState, useEffect } from "react";
import { fetchStories } from "../apis/Hackernews";

const useStoryFetcher = (type, page_number) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchStories(type, page_number)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type, page_number]);

  return { isLoading, stories };
};

export default useStoryFetcher;
