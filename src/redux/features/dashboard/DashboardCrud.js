import axios from "axios";
import config from "../../../config/config";

// GET DATA IN DASHBOARD TABLE
export const DashboardGetData = (payload) => {
  return axios.get(`${config?.default?.dashboard}`, payload );
};

// GET DATA IN REGION DROPDOWN
export const RegionGetData = (payload) => {
  return axios.get(`${config?.default?.region}`, payload );
};

// GET ALL DATA IN BARNCH DROPODOWN
export const BranchGetData = (payload) => {
  return axios.get(`${config?.default?.branch}`, payload );
};

// GET ALL DATA IN SALES DROPDOWN
export const SalesGetData = (payload) => {
  return axios.get(`${config?.default?.salse}`, payload );
};

// GET ALL DATA IN DEPARTMENT DROPDOWN
export const DepartmentGetData = (payload) => {
  return axios.get(`${config?.default?.department}`, payload );
};

// GET ALL DATA IN DESIGNATION DROPDOWN
export const DesignationGetData = (payload) => {
  return axios.get(`${config?.default?.designation}`, payload );
};

// ADD ALL DATA
export const addAllDataCrud = (payload) => {
  return axios.post(`${config?.default?.addAllData}`, payload );
};