import {
  ACTUAL_DESIGNATION_DATA,
  BRANCH_DATA,
  COPS_CAPACTITY_DATA,
  COPS_NEXT_USER1_DATA,
  COPS_NEXT_USER2_DATA,
  COPS_NEXT_USER3_DATA,
  DEPARTMENT_DATA,
  DESIGNATION_DATA,
  EMAIL_DATA,
  EMPLOYEE_ID_DATA,
  EMP_ID_DATA,
  EMP_NAME_DATA,
  MAIN_USER_DATA,
  MAXLOAD_OTHER_BRANCH_DATA,
  MAXLOAD_OWN_BRANCH_DATA,
  MAXLOAD_PER_DAY_DATA,
  MOBILE_DATA,
  NEXT_USER_DATA,
  PRIORITY_OTHER_BRAND_DATA,
  REGION_DATA,
  SALES_OFFICE_DATA,
  USER_ID_DATA,
  VIEW_CUSTOMER_DATA,
  VIEW_QUATOTAION_DATA,
} from "../constant/constants";

export const employeeValidators = {
  [EMAIL_DATA]: {
    required: "Please enter email",
    pattern: {
      value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
      message: "Please enter valid email",
    },
  },

  [COPS_CAPACTITY_DATA]: {
    required: "Please enter cops capacity",
  },

  [EMP_NAME_DATA]: {
    required: "Please enter emp name",
  },
  [BRANCH_DATA]: {
    required: "Please enter branch",
  },
  [DEPARTMENT_DATA]: {
    required: "Please enter department",
  },
  [ACTUAL_DESIGNATION_DATA]: {
    required: "Please enter actual designation",
  },
  [VIEW_QUATOTAION_DATA]: {
    required: "Please enter view quatetion",
  },
  [MOBILE_DATA]: {
    required: "Please enter mobile number",
  },

  [MAXLOAD_PER_DAY_DATA]: {
    required: "Please enter max load per day",
  },
  [MAXLOAD_OTHER_BRANCH_DATA]: {
    required: "Please enter max load other branch",
  },
  [PRIORITY_OTHER_BRAND_DATA]: {
    required: "Please enter priority other branch",
  },
  [MAXLOAD_OWN_BRANCH_DATA]: {
    required: "Please enter max load own branch",
  },

  [EMPLOYEE_ID_DATA]: {
    required: "Please enter empid",
  },
  [REGION_DATA]: {
    required: "Please enter region",
  },
  [SALES_OFFICE_DATA]: {
    required: "Please enter office",
  },
  [DESIGNATION_DATA]: {
    required: "Please select designation",
  },
  [USER_ID_DATA]: {
    required: "Please enter user id",
  },
};
