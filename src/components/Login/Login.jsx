import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/authReducer";
import styles from "./Login.module.css";
import FormValidationSchema from "../../utils/validators/FormValidation/FormSchema";

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (values, { setSubmitting, setStatus}) => {
        login(values.email, values.password, values.rememberMe,setStatus, values.captcha);
        setSubmitting(false);
    };
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false, captcha: ''}}
            validationSchema={FormValidationSchema}
            onSubmit={onSubmit}
        >

            {({
                errors,
                  touched,
                  dirty,
                  status,
                  handleChange,
                  handleBlur,
                  values
              }) => (

                <Form>
                    <div className={styles.warningAuth}>
                        {status}
                    </div>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'e-mail'} onChange={handleChange}
                               onBlur={handleBlur} value={values.email}/>
                    </div>
                    <ErrorMessage name="email" component="div"/>

                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                        <ErrorMessage name="password" component="div"/>
                    </div>

                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    {/*captcha*/}
                    {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
                    {captchaUrl && <Field name={'captcha'}/>}

                    <button type="submit"
                            disabled={!dirty && !touched}
                    >Login</button>
                </Form>
            )}
        </Formik>
    </div>
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login);
