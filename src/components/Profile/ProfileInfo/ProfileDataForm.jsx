import React from 'react';
import {
    Formik, Form, Field, ErrorMessage} from 'formik';
import styles from "./ProfileInfo.module.css";
// import FormValidationSchema from "../../../utils/validators/FormValidation/FormSchema";

const ProfileDataForm = (props) => {
    // const onSubmit = (values, {setSubmitting}) => {
    //     login(values.email, values.password, values.rememberMe,setStatus);
    //     setSubmitting(false);
    // };
    //
    // onSubmit={onSubmit}

    return (
        <Formik initialValues={{
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe,
            contacts: props.profile.contacts
            // facebook: props.profile.contacts.facebook,
            // github: props.profile.contacts.github,
            // instagram: props.profile.contacts.instagram,
            // mainLink: props.profile.contacts.mainLink,
            // twitter: props.profile.contacts.twitter,
            // vk: props.profile.contacts.vk,
            // website: props.profile.contacts.website,
            // youtube: props.profile.contacts.youtube,
        }}
            // validationSchema={FormValidationSchema}
                onSubmit={(values) => {
                    props.onSubmit(values)
                    console.log(values)
                }}>

            {({values,
              errors}) => (
                <Form>

                    <div>
                        <button type={'submit'}>save</button>
                    </div>
                    {/*edit name*/}
                    <div>
                        <b>Full name:</b>
                        <Field name="fullName"
                        />
                    </div>
                    {/*edit looking for job*/}
                    <div>
                        <b>Looking for a job:</b>
                        <Field type={'checkbox'} name={'lookingForAJob'}/>
                    </div>
                    {/*my skills*/}
                    <div>
                        <b>My professional skills:</b>
                        <Field type={"textarea"} component={'textarea'}
                               name={'lookingForAJobDescription'}/>
                    </div>
                    {/*about me*/}
                    <div>
                        <b>About me:</b>
                        <Field type={"textarea"} component={'textarea'} name={'aboutMe'}/>
                    </div>
                    <div>
                        <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={styles.contacts}>
                            <b>{key}: <Field name={key}/></b>
                            <ErrorMessage className={styles.error} name={key} component={"div"}/>
                        </div>
                    })}
                    </div>

                </Form>
            )}
        </Formik>
    )
}
export default ProfileDataForm


