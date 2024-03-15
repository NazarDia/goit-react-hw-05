import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Page was not found.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};
export default NotFoundPage;
