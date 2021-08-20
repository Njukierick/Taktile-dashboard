import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import allianz from "../../images/allianz.svg.png";
import arag from "../../images/arag.png";
import deutsche from "../../images/deutsche.png";
import generali from "../../images/genarali.svg.png";
import liquid from "../../images/liquid.png";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Customers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={deutsche} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Deutsche</span>
            <span className="widgetSmUserTitle">Banking & Finance</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={generali} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">G Deutschland</span>
            <span className="widgetSmUserTitle">Insurance</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={liquid} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Liquid</span>
            <span className="widgetSmUserTitle">Banking & Finance</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={allianz} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allianz SE</span>
            <span className="widgetSmUserTitle">Insurance</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={arag} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Arag</span>
            <span className="widgetSmUserTitle">Banking & Finance</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
