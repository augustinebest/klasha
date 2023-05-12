import {
  DownArrow,
  DownArrow2,
  Graph1,
  Graph2,
  Graph3,
  VerticalBar,
} from "../../assets/svg";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";
import chart from "../../assets/sales_chart.png";
import { useState } from "react";

const Dashboard = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleSide, setToggleSide] = useState<boolean>(false);
  let classes = "db_frame";

  if (toggleSide) {
    classes += " db_frame_updated";
  }
  return (
    <div>
      <Sidebar
        toggleSide={toggleSide}
        click={() => setToggleSide(!toggleSide)}
        toggle={toggle}
      />
      <Navbar
        toggleSide={toggleSide}
        click={() => setToggle(!toggle)}
        toggle={toggle}
      />
      <div className={classes}>
        <div>
          <div className="db_title">Sales overview</div>
          <div className="db_column">
            <div className="db_item">
              <div className="db_head">Today's sales</div>
              <div className="db_amount">₦1,652.50</div>
            </div>
            <div className="db_item db_second">
              <div className="db_head">24 Aug - 01 Sep 21</div>
              <div className="db_graph">
                <div className="db_svg">
                  <Graph1 />
                </div>
              </div>
              <div className="db_head">This month</div>
              <div className="db_amount">₦1,652.50</div>
            </div>
            <div className="db_item">
              <div className="db_head">24 Aug - 01 Sep 21</div>
              <div className="db_graph">
                <div className="db_svg">
                  <Graph2 />
                </div>
              </div>
              <div className="db_head">This month</div>
              <div className="db_amount">₦1,652.50</div>
            </div>
            <div className="db_item">
              <div className="db_head">24 Aug - 01 Sep 21</div>
              <div className="db_graph">
                <div className="db_svg">
                  <Graph3 />
                </div>
              </div>
              <div className="db_head">This month</div>
              <div className="db_amount">₦1,652.50</div>
            </div>
          </div>
          <div className="db_sales">
            <div className="db_sales_item">
              <div className="db_nav">
                <div>
                  <span>Sales</span>
                  <span className="db_bar">
                    <VerticalBar />
                  </span>
                  <span>7 days</span>
                  <span>30 days</span>
                  <button className="db_button">
                    <span>USD</span>
                    <DownArrow />
                  </button>
                  <span className="db_bar">
                    <VerticalBar />
                  </span>
                  <span>Email</span>
                </div>
                <div className="db_right">
                  <DownArrow />
                  <button className="db_button">
                    <DownArrow2 />
                    <span>Download report</span>
                  </button>
                </div>
              </div>
              <div id="db_graph">
                <img src={chart} alt="sales_chart" />
              </div>
            </div>
            <div className="db_sales_item">
              <div className="db_send">
                <div>
                  <div className="db_send_txt">
                    KlashaWire - send money to businesses globally from Africa
                  </div>
                  <button>Send a Wire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
