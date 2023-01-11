import StoryCard from "../../components/layout/StoryCard";
import { useState } from "react";
import useStoryFetcher from "../../hooks/storyFetcher";
import classes from "./Page.module.css";

function Page(props) {
  const [page_number, setPageNumber] = useState(1);
  const { isLoading, stories } = useStoryFetcher(props.action, page_number);
  function onNextHandler() {
    setPageNumber(page_number + 1);
  }
  function onPrevHandler() {
    setPageNumber(page_number - 1);
  }
  return (
    <div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          {stories.map(({ data: story }) => (
            <StoryCard key={story.id} story={story} />
          ))}
          <div className={classes.wrapper}>
            {page_number > 1 && (
              <button
                className={`${classes.btn} ${classes.btnAlt}`}
                onClick={onPrevHandler}
              >
                Prev
              </button>
            )}
            <button className={classes.btn} onClick={onNextHandler}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
