import React, { useEffect } from "react";
import Table from "../../common/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { dashboardGetDataSlice } from "../../redux/features/dashboard/DashboardSlice";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.scss"

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAllData } = useSelector((state) => state.dashboardGetData);
  useEffect(() => {
    dispatch(dashboardGetDataSlice());
  }, []);

  const handleClick = () => {
    navigate("/employee-form");
  };
  const columns = [
    {
      Header: "Name",
      accessor: "name", // accessor is the "key" in the data
    },
    {
      Header: "DepartmentName",
      accessor: "departmentName",
    },
    {
      Header: "Designation Name",
      accessor: "designationName",
    },
    {
      Header: "Mobile",
      accessor: "mobile",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Max-Load PerDay",
      accessor: "maxLoadPerDay",
    },
    {
      Header: "Total Capacity",
      accessor: "totalCapacity",
    },
    {
      Header: "Max-Load OwnBranch",
      accessor: "maxLoadOwnBranch",
    },
    {
      Header: "Max-Load OtherBranch",
      accessor: "maxLoadOtherBranch",
    },
    {
      Header: "Priority OtherBranch",
      accessor: "priorityOtherBranch",
    },
  ];

  return (
    <>
      <div className={styles.table_container}>
        <div className={styles.create_button_main}>
          <button onClick={handleClick} className={styles.create_button}>Create From</button>
        </div>
        <div className={styles.table_main}>
        <Table columns={columns} data={getAllData} />,
        </div>
      </div>
    </>
  );
};

export default Dashboard;
