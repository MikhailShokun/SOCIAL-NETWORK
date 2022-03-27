import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import FormValidationSchema from "../../FormValidation/LoginFormSchema";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.post} key={p.id} likesCount={p.likesCount}/>);

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>

            <AddPostForm addPost={props.addPost}/>

            <div>New post</div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {

    return (
        <Formik initialValues={{newPostBody: ""}}
                // validationSchema={FormValidationSchema}
                onSubmit={(values) => {
                    props.addPost(values.newPostBody)
                }}>
            {() => (
                <Form>
                    <div>
                        <Field
                            component={'textarea'}
                            type={'textarea'}
                            name={'newPostBody'}
                            placeholder={'Enter your post'}
                        />
                        {/*<ErrorMessage className={styles.error} name="newPostBody" component="div"/>*/}


                    </div>

                    <div>
                        <button type={'submit'}>Add post</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;