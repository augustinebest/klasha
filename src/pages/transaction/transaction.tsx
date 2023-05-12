import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./transaction.css";
import { Filter } from "../../assets/svg";

const Transaction = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleSide, setToggleSide] = useState<boolean>(false);
  const data = [
    {
      transactionID: "GB124QWERTY12346",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "0223337281",
      amount: "$230.00",
      requestDate: "24.08.2021",
      status: "Pending",
    },
    {
      transactionID: "CB328ABCEDF23416",
      source: "UBA",
      customerName: "Steve O'Shassy",
      customerEmail: "0982764829",
      amount: "$480.00",
      requestDate: "22.08.2021",
      status: "Successful",
    },
    {
      transactionID: "GB124QWERTY12346",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "0223337281",
      amount: "$230.00",
      requestDate: "24.08.2021",
      status: "Pending",
    },
    {
      transactionID: "GB124QWERTY12346",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "0223337281",
      amount: "$230.00",
      requestDate: "24.08.2021",
      status: "Pending",
    },
  ];
  return (
    <div>
      <Sidebar
        toggleSide={toggleSide}
        click={() => setToggleSide(!toggleSide)}
        toggle={toggle}
      />
      <Navbar toggleSide={toggleSide} click={() => setToggle(!toggle)} toggle={toggle} />
      <div className="tr_frame">
        <div className="tr_history">
          <span>Transaction history</span>
        </div>
        <div className="tr_search">
          <form>
            <div className="tr_form_div">
              <input type="text" placeholder="Search" />
              <i className="fa fa-search"></i>
            </div>
          </form>
          <div className="tr_filter">
            <button>
              <span>Filter</span>
              <Filter />
            </button>
            <button>
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Source</th>
                <th>Customer name</th>
                <th>Customer email</th>
                <th>Amount</th>
                <th>Request date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{val.transactionID}</td>
                  <td>{val.source}</td>
                  <td>{val.customerName}</td>
                  <td>{val.customerEmail}</td>
                  <td>{val.amount}</td>
                  <td>{val.requestDate}</td>
                  <td>{val.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tr_pagination">
          <div className="tr_p_item">
            <span>
              <i className="fa fa-angle-left"></i>
            </span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
