import classes from "./StoryCard.module.css";
import Link from "../Link";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

function Story(props) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const story = props.story;
  const kids = story.kids;
  return (
    <div className={classes.story}>
      <div>
        <Link  url={story.url} title={story.title} />
      </div>
      <div>
        <span>
          {story.score} points by{" "}
          <Link
         
            url={`https://news.ycombinator.com/user?id=${story.by}`}
            title={story.by}
          />
          {" | "}
          {timeAgo.format(story.time * 1000)}
          {" | "}
          <Link
           style={{textDecoration:"none"}}
            url={`https://news.ycombinator.com/item?id=${story.id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
}

export default Story;
