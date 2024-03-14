import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <p>Page was not found.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};
