import { useState } from "react";
import style from "../styles/paginate.module.scss";

const Paginate = ({ userList, onPreviousPage, onNextPage, currentPage, setCurrentPage }) => {
  const paginationNumbers = [];

  for (let idx = 1; idx <= Math.ceil(userList.length / 4); idx++) {
    paginationNumbers.push(idx);
  }

  return (
    <div className={style.paginate}>
      <ul>
        <li className={style.paginate__item}>
          <button
            disabled={currentPage < 2}
            onClick={onPreviousPage}
            className={style.paginate__icon}
          >
            <span></span>
          </button>
        </li>
        {paginationNumbers.map((item) => (
          <li className={style.paginate__item} key={item}>
            <button
              className={currentPage === item ? style.active : ""}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage >= Math.ceil(userList.length / 4)}
            onClick={onNextPage}
            className={`${style.paginate__icon} ${style["paginate__icon-right"]}`}
          >
            <span></span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;