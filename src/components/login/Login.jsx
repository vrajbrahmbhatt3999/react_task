import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from "./login.module.scss"
import { userLogin } from '../../redux/features/login/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });

    const [error, setError] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(formData)).then((res) => {
            if (res?.payload?.status === 200) {
                console.log('200')
                navigate("/dashboard");
            } else {
                setError("username or Password is wrong ")
            }
        })
    };

    return (
        <>
            {/* {/ FORM START HERE /} */}
            <div className={styles.main_form}>
                <form onSubmit={handleSubmit} className={styles.form_main}>
                    <div className={styles.form}>
                        {/* HEADER START */}
                        <h2>Login</h2>
                        {/* HEADER END */}
                        <div className={styles.text_feild}>
                            {/* USERNAME */}
                            <label>User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                            />
                            {/* PASSWORD */}
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className={styles.error_message}>{error}</p>
                    </div>
                    <div className={styles.submit_btn}>
                        <button type="submit" id="submitbtn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* {/ FORM END HERE /} */}
        </>
    );
};

export default Login;
