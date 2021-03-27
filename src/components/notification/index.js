import "./index.css";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const NotificationBar = ({ content, status, onCancel, notify }) => {
  return (
    <Fade top when={notify}>
      <div
        className={`${status === "success" ? "bg-success" : "bg-danger"}`}
        id="topbar"
      >
        <p className="m-0">{content}</p>
        <label onClick={onCancel} className="m-0"  id="hideTop">
          X
        </label>
      </div>
    </Fade>
  );
};

NotificationBar.propTypes = {
  content: PropTypes.string,
  status: PropTypes.oneOf(["success", "failed"]),
};

export default NotificationBar;
