// import {} from 'react';
import "./index.css";
import { Logo } from "../../Assets";

const Sidebar = ({ isMobile, user }) => {
  return (
    <aside className="sidebar position-relative">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="eapays logo" />
        <h4>Eapay</h4>
      </div>
      <div></div>
      {isMobile ? (
        <div className="bottom text-white">
          <p className="text-center">
            Account mode:{" "}
            <span
              className={
                user?.mode === "Live mode" ? "text-success" : "text-danger"
              }
            >
              {user?.mode}
            </span>
          </p>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
