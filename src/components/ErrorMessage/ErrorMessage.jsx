import style from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <>
      <p className={style.error}>
        Sorry, something is wrong. Please restart the page!
      </p>
    </>
  );
};
