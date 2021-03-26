import "./index.css";
import PropTypes from "prop-types";
import { Slide } from "react-reveal";

const NotificationBar = ({ content, status }) => {
  return (
    <Slide top>
      <div
        className={`${status === "success" ? "bg-success" : "bg-danger"}`}
        id="topbar"
      >
        <p className="m-0">{content}</p>
        <label className="m-0" for="toggleTop" id="hideTop">
          X
        </label>
      </div>
    </Slide>
  );
};

NotificationBar.propTypes = {
  content: PropTypes.string,
  status: PropTypes.oneOf(["success", "failed"]),
};

export default NotificationBar;
