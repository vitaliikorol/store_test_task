import React, {FC, useState} from "react";
import './sidebar.scss';
import cn from 'classnames';

type Params = {
  activeView: string;
  setActiveView: (value: string) => void;
  viewSort: boolean;
  setViewSort: (value: boolean) => void;
  sortType: string;
  setSortType: (value: string) => void;
}

export const SideBar: FC<Params> = ({
                                      activeView,
                                      setActiveView,
                                      viewSort,
                                      setViewSort,
                                      sortType,
                                      setSortType,
                                    }) => {
  const [view, setView] = useState(true)
  const handleActiveView = (target: string) => {
    setActiveView(target)
  }
  const handleViewSort = () => {
    setView(prevState => !prevState);
    setViewSort(view);
  }

  const handleSort = (value: string) => {
    setSortType(value);
  }

  return (
    <aside className="SideBar">
      <ul className="SideBar__list">
        <li
          className="SideBar__list_item"
          style={{fontWeight: activeView === 'All' ? 'bold' : 'lighter'}}
          onClick={() => handleActiveView('All')}
        >
          Все
        </li>
        <li
          className="SideBar__list_item"
          style={{fontWeight: activeView === 'Coats' ? 'bold' : 'lighter'}}
          onClick={() => handleActiveView('Coats')}
        >
          Плащи
        </li>
        <li
          className="SideBar__list_item"
          style={{fontWeight: activeView === 'Sneakers' ? 'bold' : 'lighter'}}
          onClick={() => handleActiveView('Sneakers')}
        >
          Кроссовки
        </li>
        <li
          className="SideBar__list_item"
          style={{fontWeight: activeView === 'Shirts' ? 'bold' : 'lighter'}}
          onClick={() => handleActiveView('Shirts')}
        >
          Рубашки
        </li>
        <li
          className="SideBar__list_item"
          style={{fontWeight: activeView === 'Trousers' ? 'bold' : 'lighter'}}
          onClick={() => handleActiveView('Trousers')}
        >
          Брюки
        </li>
      </ul>
      <button className="SideBar__sort" onClick={handleViewSort}>
        Сортировать
        <img
        src="https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png"
        alt="&uarr;"
        style={{transform: viewSort ? 'rotate(180deg)' : ''}}
        className="SideBar__sort_img"/>
      </button>
      <div className="SideBar__sort_wrapper">
        <ul
          className="SideBar__list SideBar__sort_list"
          style={{top: viewSort ? '0' : '-190px'}}
        >
          <li
            onClick={() => handleSort('Price_asc')}
            className={cn(sortType === 'Price_asc' ? "SideBar__sort_list-item SideBar__sort_list-item-active" : "SideBar__sort_list-item")}
          >
            От дорогих к дешевым
          </li>
          <li
            onClick={() => handleSort('Price_desc')}
            className={cn(sortType === 'Price_desc' ? "SideBar__sort_list-item SideBar__sort_list-item-active" : "SideBar__sort_list-item")}
          >
            От дешевых к дорогим
          </li>
          <li
            onClick={() => handleSort('Popularity')}
            className={cn(sortType === 'Popularity' ? "SideBar__sort_list-item SideBar__sort_list-item-active" : "SideBar__sort_list-item")}
          >
            Популярные
          </li>
          <li
            onClick={() => handleSort('Newest')}
            className={cn(sortType === 'Newest' ? "SideBar__sort_list-item SideBar__sort_list-item-active" : "SideBar__sort_list-item")}
          >
            Новые
          </li>
        </ul>
      </div>
    </aside>

  )
}
