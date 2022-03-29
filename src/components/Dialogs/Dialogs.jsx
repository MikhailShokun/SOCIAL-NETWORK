import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Formik, Form, Field, ErrorMessage} from "formik";
import FormValidationSchema from "../../utils/validators/FormValidation/LoginFormSchema";


const Dialogs = (props) => {

    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>

            <AddMessageForm sendMessage={props.sendMessage}/>

            <div>
                <div>{messagesElements}</div>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <Formik initialValues={{newMessageBody: ""}}
                // validationSchema={FormValidationSchema}
                onSubmit={(values) => {
                    props.sendMessage(values.newMessageBody);
                }
                }>
            {() => (
                <Form>
                    <div>
                        <Field component={'textarea'}
                               name={'newMessageBody'}
                               placeholder={'Enter your message'}/>
                        <ErrorMessage className={styles.error} name="newMessageBody" component="div"/>
                    </div>

                    <div>
                        <button type={'submit'}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}



export default Dialogs;