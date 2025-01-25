import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Util.css";
import KYT_SideBar from "./KYT_SideBar";
import KYT_Embrace from "./KYT_Embrace";
import KYT_Quiz from "./KYT_Quiz";
import KYT_IT from "./KYT_IT";
import KYT_Bussiness4 from "./KYT_Bussiness4";
import KYT_Digital from "./KYT_Digital";
import KYT_Mfdm from "./KYT_Mfdm";
import KYT_final from "./KYT_final";

function KYT() {
  const location = useLocation();

  // Define content for each route
  const renderContent = () => {
    switch (location.pathname) {
      case "/kyt/embrace":
        return <KYT_Embrace/>;
      case "/kyt/quiz":
        return <KYT_Quiz/>;
      case "/kyt/itci":
        return <KYT_IT/>;
      case "/kyt/bizz-4":
        return <KYT_Bussiness4/>;
      case "/kyt/digital-awareness":
        return <KYT_Digital/>;
      case "/kyt/mfdm":
        return <KYT_Mfdm/>;
      case "/kyt/final-assessment":
        return <KYT_final/>;
      default:
        return <p>Select a topic to see solutions here.</p>;
    }
  };

  return (
    <div className="content">
      <Link to="/" className="">
        {" "}
        <span>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Know Your Organization</h2>
      <div className="content-container">
        <div className="card-container content-half half1">
          <KYT_SideBar />
        </div>

        <div className="card-container content-half half2">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <div className="render-content">{renderContent()}</div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default KYT;
