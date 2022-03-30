import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a e-mail that long")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required"),
    newPostBody: Yup.string()
        .max(5, "So long post!"),
    newMessageBody: Yup.string()
        .max(5, "So long message!"),
    mainLink: Yup.string()
        .max(5, "So long adress!"),
});
export default FormValidationSchema;
