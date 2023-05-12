import "./sidebar.css";
import LOGO from "../../assets/klasha_logo.svg";
import { NavLink } from "react-router-dom";
import {
  Analytics,
  Balance,
  Checkout,
  DownArrow,
  Exchange,
  LeftArrow,
  Marketing,
  Payment,
  Piechart,
  Support,
  Transaction,
  Wire,
} from "../../assets/svg";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileImg from "../../assets/profile_image.png";

interface IProps {
  toggle: boolean;
  click: () => void;
  toggleSide: boolean;
}

const Sidebar = (props: IProps) => {
  const location = useLocation();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (location?.pathname === "/" && location?.hash === "#dashboard") {
      setActive(true);
    }
  }, [location, active]);

  useEffect(() => {}, [props.toggleSide]);

  const mainItems = [
    {
      img: (
        <Piechart
          color={location?.hash === "#dashboard" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Dashboard",
      link: "/#dashboard",
    },
    {
      img: (
        <Balance
          color={location?.hash === "#balance" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Balances",
      link: "/#balance",
    },
    {
      img: (
        <Transaction
          color={location?.hash === "#transactions" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Transactions",
      link: "/transactions",
    },
    {
      img: (
        <Analytics
          color={location?.hash === "#analytics" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Analytics",
      link: "/#analytics",
    },
    {
      img: (
        <Marketing
          color={location?.hash === "#marketing" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Marketing",
      link: "/#marketing",
    },
    {
      img: (
        <Exchange
          color={location?.hash === "#exchange" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Exchange rates",
      link: "/#exchange",
    },
  ];

  const subItems = [
    {
      img: (
        <Checkout
          color={location?.hash === "#checkout" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Checkout",
      link: "/#checkout",
    },
    {
      img: (
        <Payment
          color={location?.hash === "#payment" ? "#EF2C5A" : "#0A0A0A"}
        />
      ),
      title: "Payment links",
      link: "/#payment",
    },
  ];

  const thirdItem = [
    {
      img: <Wire color={location?.hash === "#wire" ? "#EF2C5A" : "#0A0A0A"} />,
      title: "Wire",
      link: "/#wire",
    },
  ];

  let classes = "sb_frame";

  if (props.toggle) {
    classes += " sb_active";
  }

  if (props.toggleSide) {
    classes += " sb_update";
  }

  return (
    <div className={classes}>
      <div>
        <div className="sb_logo">
          <img
            className={!props.toggleSide ? "" : "sb_img"}
            src={LOGO}
            alt="LOGO"
          />
        </div>
        <div className="nb_sect sb_item">
          <div className="nb_item nbmr-12">
            <img src={ProfileImg} alt="profile_image" />
            <DownArrow />
          </div>
          <div className="nb_item">
            <span>En</span>
            <DownArrow />
          </div>
        </div>
        <div className={props.toggleSide ? "sb_content" : ""}>
          {!props.toggleSide ? (
            <div className="sb_description">Main pages</div>
          ) : (
            <span>M</span>
          )}
          <ul>
            {mainItems.map((data, index) => (
              <NavLink to={data.link} className="navlink" key={index}>
                <li className={props.toggleSide ? "sb_icons" : ""}>
                  {data.img}
                  {!props.toggleSide && (
                    <span
                      className={
                        location.hash === data.link.substring(1)
                          ? "sbnav_active"
                          : ""
                      }
                    >
                      {data.title}
                    </span>
                  )}
                </li>
              </NavLink>
            ))}
          </ul>
          {!props.toggleSide ? (
            <div className="sb_description">Accept payments</div>
          ) : (
            <span>A</span>
          )}
          <ul>
            {subItems.map((data, index) => (
              <NavLink to={data.link} className="navlink" key={index}>
                <li className={props.toggleSide ? "sb_icons" : ""}>
                  {data.img}
                  {!props.toggleSide && (
                    <span
                      className={
                        location.hash === data.link.substring(1)
                          ? "sbnav_active"
                          : ""
                      }
                    >
                      {data.title}
                    </span>
                  )}
                </li>
              </NavLink>
            ))}
          </ul>
          {!props.toggleSide ? (
            <div className="sb_description">Send payments</div>
          ) : (
            <span>S</span>
          )}
          <ul>
            {thirdItem.map((data, index) => (
              <NavLink to={data.link} className="navlink" key={index}>
                <li className={props.toggleSide ? "sb_icons" : ""}>
                  {data.img}
                  {!props.toggleSide && (
                    <span
                      className={
                        location.hash === data.link.substring(1)
                          ? "sbnav_active"
                          : ""
                      }
                    >
                      {data.title}
                    </span>
                  )}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="sb_footer">
          <button>
            <Support />
            {!props.toggleSide && <span>Support</span>}
          </button>
          <button id="sb_footer_btn" onClick={props.click}>
            {!props.toggleSide ? (
              <LeftArrow />
            ) : (
              <i className="fa fa-angle-right sb_right_ar"></i>
            )}
            {!props.toggleSide && <span>Hide panel</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
