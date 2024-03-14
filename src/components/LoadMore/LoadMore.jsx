import style from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={style.btn}>
        Load More
      </button>
    </>
  );
};
