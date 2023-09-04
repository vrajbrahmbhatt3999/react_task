import React from "react";
import styles from "./employeeForm.module.scss";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { employeeValidators } from "../../common/Validator/addEmployeeData";
import makeAnimated from "react-select/animated";
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
} from "../../common/constant/constants";
import {
  addAllData,
  branchGetDataSlice,
  departmentGetDataSlice,
  designationGetDataSlice,
  regionGetDataSlice,
  salesGetDataSlice,
} from "../../redux/features/dashboard/DashboardSlice";
const EmployeeForm = () => {
  const navigate = useNavigate();
  const animatedComponent = makeAnimated();

  const {
    getRegionData,
    getBranchData,
    getSalesData,
    getDepartmentData,
    getDesignationData,
  } = useSelector((state) => state.dashboardGetData);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log('data', data)
    let payloadData = {
      name: data?.name,
      masterDepartmentId: data?.masterDepartmentId?.value,
      masterRegionIds: [data?.region?.value],
      masterBranchIds: [data?.branch?.value],
      masterSalesOfficeIds: [data?.masterSalesOfficeIds?.value],
      masterDesignationId: data?.designation?.value,
      mobile: data?.mobile,
      actualDesignation: data?.designation?.lable,
      userId: data?.userId,
      email: data?.email,
      isViewCustomers: true,
      isViewQuotation: true,
      actualDesignationId: 1,
      nextUserId: 1,
      copsUserId: 1,
      isCOPSMainUser: true,
      isCOPSOutOfOffice: true,
      maxLoadPerDay: data?.maxLoadPerDay,
      totalCapacity: data?.cops_capacity,
      maxLoadOwnBranch: data?.maxLoadOwnBranch,
      maxLoadOtherBranch: data?.maxLoadOtherBranch,
      priorityOtherBranch: data?.priority_other_brand,
    };
    dispatch(addAllData(payloadData)).then((res) => {
      console.log("res", res);
      if (res?.type === "addAllData/dashboardGet/fulfilled") {
        navigate("/dashboard");
      } else {
      }
    });
  };
  const trimValue = (e) => {
    let value = e.target.value;
    if (value.length === 1 && value === " ") {
      e.target.value = "";
    } else if (
      value.length > 1 &&
      value[0] === " " &&
      value[value.length - 1] === " "
    ) {
      value = value.trim();
      const words = value.split(" ");
      const filteredWords = words.filter((word) => word !== "");
      e.target.value = filteredWords.join(" ");
    } else if (value.length > 1 && value[0] === " ") {
      e.target.value = value.trim();
    }
  };

  useEffect(() => {
    dispatch(regionGetDataSlice());
    dispatch(branchGetDataSlice());
    dispatch(salesGetDataSlice());
    dispatch(departmentGetDataSlice());
    dispatch(designationGetDataSlice());
  }, []);

  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.heading_text}>Add Employee</h2>
      </div>
      <div className={styles.dashboard_Container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_Container}>
            <div className={styles.first_Container}>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  Emp ID
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMPLOYEE_ID_DATA, employeeValidators[EMPLOYEE_ID_DATA])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.id && (
                      <span className={styles.error}>{errors.id.message}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  Actual Designation
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      ACTUAL_DESIGNATION_DATA,
                      employeeValidators[ACTUAL_DESIGNATION_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.actualDesignation && (
                      <span className={styles.error}>
                        {errors.actualDesignation.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  view Quotation
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      VIEW_QUATOTAION_DATA,
                      employeeValidators[VIEW_QUATOTAION_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.isViewQuotation && (
                      <span className={styles.error}>
                        {errors.isViewQuotation.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  Mobile
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(MOBILE_DATA, employeeValidators[MOBILE_DATA])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.mobile && (
                      <span className={styles.error}>
                        {errors.mobile.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  User ID
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(USER_ID_DATA, employeeValidators[USER_ID_DATA])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.userId && (
                      <span className={styles.error}>
                        {errors.userId.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  Email
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMAIL_DATA, employeeValidators[EMAIL_DATA])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.email && (
                      <span className={styles.error}>
                        {errors.email.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    COPS next user 1
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClass_Content}
                    // options={
                    //   Array.isArray(getDesignationData)
                    //     ? getDesignationData?.map((item) => ({
                    //       value: item?.id,
                    //       label: item?.name,
                    //     }))
                    //     : []
                    // }
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER1_DATA,
                      employeeValidators[COPS_NEXT_USER1_DATA]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER1_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(COPS_NEXT_USER1_DATA, e);
                      trigger(COPS_NEXT_USER1_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    COPS next user 3
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClass_Content}
                    // options={
                    //   Array.isArray(getDesignationData)
                    //     ? getDesignationData?.map((item) => ({
                    //       value: item?.id,
                    //       label: item?.name,
                    //     }))
                    //     : []
                    // }
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER3_DATA,
                      employeeValidators[COPS_NEXT_USER3_DATA]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER3_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(COPS_NEXT_USER3_DATA, e);
                      trigger(COPS_NEXT_USER3_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  COPS Capacity
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      COPS_CAPACTITY_DATA,
                      employeeValidators[COPS_CAPACTITY_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.cops_capacity && (
                      <span className={styles.error}>
                        {errors.cops_capacity.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  priority other branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      PRIORITY_OTHER_BRAND_DATA,
                      employeeValidators[PRIORITY_OTHER_BRAND_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.error_Text}>
                    {errors.priority_other_brand && (
                      <span className={styles.error}>
                        {errors.priority_other_brand.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  max load on branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_OWN_BRANCH_DATA,
                      employeeValidators[MAXLOAD_OWN_BRANCH_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadOwnBranch && (
                      <span className={styles.error}>
                        {errors.maxLoadOwnBranch.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.second_Container}>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  Emp Name
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(EMP_NAME_DATA, employeeValidators[EMP_NAME_DATA])}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.error_Text}>
                    {errors.name && (
                      <span className={styles.error}>
                        {errors.name.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    Branch<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Branch"
                    className={styles.customClass_Content}
                    options={
                      Array.isArray(getBranchData)
                        ? getBranchData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(BRANCH_DATA, employeeValidators[BRANCH_DATA])}
                    components={animatedComponent}
                    value={watch(BRANCH_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(BRANCH_DATA, e);
                      trigger(BRANCH_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[BRANCH_DATA] && (
                  <div className={styles.error_Container}>
                    <div className={styles.error_ExtraDiv}></div>
                    <p className={styles.formError}>{errors[BRANCH_DATA].message}</p>
                  </div>
                )}
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    Department<span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Department"
                    className={styles.customClass_Content}
                    options={
                      Array.isArray(getDepartmentData)
                        ? getDepartmentData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(DEPARTMENT_DATA, employeeValidators[DEPARTMENT_DATA])}
                    components={animatedComponent}
                    value={watch(DEPARTMENT_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(DEPARTMENT_DATA, e);
                      trigger(DEPARTMENT_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[DEPARTMENT_DATA] && (
                  <div className={styles.error_Container}>
                    <div className={styles.error_ExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[DEPARTMENT_DATA].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    Region
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Region"
                    className={styles.customClass_Content}
                    options={
                      Array.isArray(getRegionData)
                        ? getRegionData?.map((item) => {
                            console.log("item", item);
                            return {
                              value: item?.id,
                              label: item?.name,
                            };
                          })
                        : []
                    }
                    isSearchable={true}
                    {...register(REGION_DATA, employeeValidators[REGION_DATA])}
                    components={animatedComponent}
                    value={watch(REGION_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(REGION_DATA, e);
                      trigger(REGION_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[REGION_DATA] && (
                  <div className={styles.error_Container}>
                    <div className={styles.error_ExtraDiv}></div>
                    <p className={styles.formError}>{errors[REGION_DATA].message}</p>
                  </div>
                )}
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    Sales office
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Sales office"
                    className={styles.customClass_Content}
                    options={
                      Array.isArray(getSalesData)
                        ? getSalesData?.map((item) => ({
                            value: item?.id,
                            label: item?.name,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(
                      SALES_OFFICE_DATA,
                      employeeValidators[SALES_OFFICE_DATA]
                    )}
                    components={animatedComponent}
                    value={watch(SALES_OFFICE_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(SALES_OFFICE_DATA, e);
                      trigger(SALES_OFFICE_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[SALES_OFFICE_DATA] && (
                  <div className={styles.error_Container}>
                    <p className={styles.formError}>
                      {errors[SALES_OFFICE_DATA].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    Designation
                    <span className={styles.asterick}>*</span>
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClass_Content}
                    options={
                      Array.isArray(getDesignationData)
                        ? getDesignationData?.map((item) => ({
                            value: item?.id,
                            label: item?.description,
                          }))
                        : []
                    }
                    isSearchable={true}
                    {...register(DESIGNATION_DATA, employeeValidators[DESIGNATION_DATA])}
                    components={animatedComponent}
                    value={watch(DESIGNATION_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(DESIGNATION_DATA, e);
                      trigger(DESIGNATION_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
                {errors[DESIGNATION_DATA] && (
                  <div className={styles.error_Container}>
                    <div className={styles.errorExtraDiv}></div>
                    <p className={styles.formError}>
                      {errors[DESIGNATION_DATA].message}
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  View Customer
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      VIEW_CUSTOMER_DATA,
                      employeeValidators[VIEW_CUSTOMER_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.view_customer && (
                      <span className={styles.error}>
                        {errors.view_customer.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>Next user</label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClass_Content}
                    // options={
                    //   Array.isArray(getDesignationData)
                    //     ? getDesignationData?.map((item) => ({
                    //       value: item?.id,
                    //       label: item?.name,
                    //     }))
                    //     : []
                    // }
                    isSearchable={true}
                    {...register(NEXT_USER_DATA, employeeValidators[NEXT_USER_DATA])}
                    components={animatedComponent}
                    value={watch(NEXT_USER_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(NEXT_USER_DATA, e);
                      trigger(NEXT_USER_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
              </div>
              <div className={styles.referDoctor_InputField_Container}>
                <div className={styles.referDoctor_Container}>
                  <label className={styles.referDoctor_Text}>
                    COPS next user 2
                  </label>

                  <Select
                    placeholder="Select Designation"
                    className={styles.customClass_Content}
                    // options={
                    //   Array.isArray(getDesignationData)
                    //     ? getDesignationData?.map((item) => ({
                    //       value: item?.id,
                    //       label: item?.name,
                    //     }))
                    //     : []
                    // }
                    isSearchable={true}
                    {...register(
                      COPS_NEXT_USER2_DATA,
                      employeeValidators[COPS_NEXT_USER2_DATA]
                    )}
                    components={animatedComponent}
                    value={watch(COPS_NEXT_USER2_DATA)}
                    closeMenuOnSelect={true}
                    onChange={(e) => {
                      setValue(COPS_NEXT_USER2_DATA, e);
                      trigger(COPS_NEXT_USER2_DATA, e);
                    }}
                    maxMenuHeight={200}
                  />
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  MaxLoad Per Day
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_PER_DAY_DATA,
                      employeeValidators[MAXLOAD_PER_DAY_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadPerDay && (
                      <span className={styles.error}>
                        {errors.maxLoadPerDay.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.inputField_Container}>
                <label className={styles.text}>
                  MaxLoad Other Branch
                  <span className={styles.asterick}>*</span>
                </label>
                <div className={styles.error_Container}>
                  <input
                    type="text"
                    className={styles.inputField}
                    {...register(
                      MAXLOAD_OTHER_BRANCH_DATA,
                      employeeValidators[MAXLOAD_OTHER_BRANCH_DATA]
                    )}
                    onChange={(e) => trimValue(e)}
                  />
                  <p className={styles.errorText}>
                    {errors.maxLoadOtherBranch && (
                      <span className={styles.error}>
                        {errors.maxLoadOtherBranch.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn_Container}>
            <button
              className={styles.btn}
              onClick={handleSubmit(onSubmit)}

              // onClick={() => navigate("/empDashboard")}
            >
              Save
            </button>
            <button type="submit" className={styles.btn}>
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
