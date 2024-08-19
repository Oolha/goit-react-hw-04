import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtn}>
      <button type="button" onClick={onClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
