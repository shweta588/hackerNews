import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Hacker News</Link>
          </li>
          <li>
            <Link to="/top">Top Stories</Link>
          </li>
          <li>
            <Link to="/best">Best Stories</Link>
          </li>
          <li>
            <Link to="/new">New Stories</Link>
          </li>
          <li>
            <Link to="/ask">Ask</Link>
          </li>
          <li>
            <Link to="/job">Job</Link>
          </li>
          <li>
            <Link to="/show">Show</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
