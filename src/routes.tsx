import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/dashboard/dashboard"));
const Transaction = React.lazy(() => import("./pages/transaction/transaction"));

const Loading = () => <p>Loading ...</p>;

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Router;
