import style from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <div className={style.container}>
      <button className={style.loadBtn} onClick={onClick} type="button">
        Load More
      </button>
    </div>
  );
};
