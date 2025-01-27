import React from "react";
import { Link } from "react-router-dom";
const ComingSoon = ({ message = "Under Development. Stay Tuned!" }) => {
  return (
    <div className="content">
        <Link to="/" className="">
          {" "}
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
      <div style={{ textAlign: "center", padding: "2rem", fontSize: "1.5rem" }}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
