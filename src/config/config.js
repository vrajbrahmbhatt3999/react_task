export const BASE_URL = "http://drivequote-dev.webmyneproduct.com/api/";
// export const BASE_URL = process.env.API_BASE_URL;
export default {
  default: {
    baseUrl: BASE_URL,
    login: BASE_URL + "Users/authenticate",
    dashboard: BASE_URL + "MasterEmployee/getalls",
    region: BASE_URL + "MasterRegion/getalls",
    branch: BASE_URL + "MasterBranch/getalls",
    salse: BASE_URL + "MasterSalesOffice/getalls",
    department: BASE_URL + "MasterDepartment/getalls",
    designation: BASE_URL + "MasterDesignation/getalls",
    addAllData:BASE_URL+"MasterEmployee"
  },
};
