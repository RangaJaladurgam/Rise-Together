import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function JavaHandsOnTemp() {
  return (
    <div className="content">
       <Link to="/" className="nav-link "> <span><i class="fa-solid fa-arrow-left"></i></span>
        </Link>
      <h2>Xplore HandsOn (Java)</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1">
          question
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2">
              <div className="render-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

export default JavaHandsOnTemp