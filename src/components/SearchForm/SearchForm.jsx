import style from "./SearchForm.module.css";
import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";

export const SearchForm = ({ request }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        request(values.query);
        if (!values.query) {
          toast.error("Please enter something");
          return;
        }
        actions.resetForm();
      }}
    >
      <Form>
        <Field className={style.input} type="text" name="query"></Field>

        <button className={style.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};
