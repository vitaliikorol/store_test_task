import React, { FC, useState } from 'react';
import './sidebar.scss';
import cn from 'classnames';
import {
  allView,
  coats, newest,
  popularity,
  priceAsc,
  priceDesc,
  shirts,
  sneakers,
  trousers,
  upArrowIcon,
} from '../Additional/api';

type Params = {
  activeView: string;
  setActiveView: (value: string) => void;
  viewSort: boolean;
  setViewSort: (value: boolean) => void;
  sortType: string;
  setSortType: (value: string) => void;
};

export const SideBar: FC<Params> = ({
  activeView,
  setActiveView,
  viewSort,
  setViewSort,
  sortType,
  setSortType,
}) => {
  const [view, setView] = useState(true);
  const handleActiveView = (target: string) => {
    setActiveView(target);
  };

  const handleViewSort = () => {
    setView(prevState => !prevState);
    setViewSort(view);
  };

  const defineKeyDownView = (
    event: React.KeyboardEvent<HTMLLIElement>,
    value: string,
  ) => {
    if (event.keyCode === 86) {
      handleActiveView(value);
    }
  };

  const defineKeyDownSort = (
    event: React.KeyboardEvent<HTMLLIElement>,
    value: string,
  ) => {
    if (event.keyCode === 70) {
      handleActiveView(value);
    }
  };

  const handleSort = (value: string) => {
    setSortType(value);
  };

  return (
    <aside className="SideBar">
      <ul className="SideBar__list">
        <li
          className="SideBar__list_item"
          style={{ fontWeight: activeView === allView ? 'bold' : 'lighter' }}
          onClick={() => handleActiveView(allView)}
          onKeyDown={(event => defineKeyDownView(event, allView))}
        >
          Все
        </li>
        <li
          className="SideBar__list_item"
          style={{ fontWeight: activeView === coats ? 'bold' : 'lighter' }}
          onClick={() => handleActiveView(coats)}
          onKeyDown={(event => defineKeyDownView(event, coats))}
        >
          Плащи
        </li>
        <li
          className="SideBar__list_item"
          style={{ fontWeight: activeView === sneakers ? 'bold' : 'lighter' }}
          onClick={() => handleActiveView(sneakers)}
          onKeyDown={(event => defineKeyDownView(event, sneakers))}
        >
          Кроссовки
        </li>
        <li
          className="SideBar__list_item"
          style={{ fontWeight: activeView === shirts ? 'bold' : 'lighter' }}
          onClick={() => handleActiveView(shirts)}
          onKeyDown={(event => defineKeyDownView(event, shirts))}
        >
          Рубашки
        </li>
        <li
          className="SideBar__list_item"
          style={{ fontWeight: activeView === trousers ? 'bold' : 'lighter' }}
          onClick={() => handleActiveView(trousers)}
          onKeyDown={(event => defineKeyDownView(event, trousers))}
        >
          Брюки
        </li>
      </ul>
      <button
        className="SideBar__sort"
        onClick={handleViewSort}
        type="button"
      >
        Сортировать
        <img
          src={upArrowIcon}
          alt="&uarr;"
          style={{ transform: viewSort ? '' : 'rotate(180deg)' }}
          className="SideBar__sort_img"
        />
      </button>
      <div className="SideBar__sort_wrapper">
        <ul
          className="SideBar__list SideBar__sort_list"
          style={{ top: viewSort ? '0' : '-230px' }}
        >
          <li
            onKeyDown={(event => defineKeyDownSort(event, priceAsc))}
            onClick={() => handleSort(priceAsc)}
            className={cn(sortType === priceAsc
              ? 'SideBar__sort_list-item SideBar__sort_list-item-active'
              : 'SideBar__sort_list-item')}
          >
            От дорогих к дешевым
          </li>
          <li
            onKeyDown={(event => defineKeyDownSort(event, priceDesc))}
            onClick={() => handleSort(priceDesc)}
            className={cn(sortType === priceDesc
              ? 'SideBar__sort_list-item SideBar__sort_list-item-active'
              : 'SideBar__sort_list-item')}
          >
            От дешевых к дорогим
          </li>
          <li
            onKeyDown={(event => defineKeyDownSort(event, popularity))}
            onClick={() => handleSort(popularity)}
            className={cn(sortType === popularity
              ? 'SideBar__sort_list-item SideBar__sort_list-item-active'
              : 'SideBar__sort_list-item')}
          >
            Популярные
          </li>
          <li
            onKeyDown={(event => defineKeyDownSort(event, newest))}
            onClick={() => handleSort(newest)}
            className={cn(sortType === newest
              ? 'SideBar__sort_list-item SideBar__sort_list-item-active'
              : 'SideBar__sort_list-item')}
          >
            Новые
          </li>
        </ul>
      </div>
    </aside>
  );
};
