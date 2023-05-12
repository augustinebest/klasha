import "./navbar.css";
import ProfileImg from "../../assets/profile_image.png";
import { DownArrow } from "../../assets/svg";
import LOGO from "../../assets/klasha_logo.svg";

interface IProps {
  click: () => void;
  toggle: boolean;
  toggleSide: boolean;
}

let classes = "nb_frame";

const Navbar = (props: IProps) => {
  if (props.toggleSide) {
    classes += " nb_frame_updated";
  }
  return (
    <div className={classes}>
      <div id="nb_logo">
        <img src={LOGO} alt="LOGO" />
      </div>
      <div className="nb_sect">
        <i
          onClick={props.click}
          className={`fa fa-${props.toggle ? "times" : "bars"} nb_bars`}
        ></i>
        <div className="nb_item nb_hide nbmr-12">
          <img src={ProfileImg} alt="profile_image" />
          <DownArrow />
        </div>
        <div className="nb_item nb_hide">
          <span>En</span>
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
