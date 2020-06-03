import React, {useContext, useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import {Header} from "./Header/header";
import {Main} from "./Main/main";
import {ClothesFromServer} from "./Additional/api";
import {ClothItem} from "./Additional/Interfaces";
import {ProductDescription} from "./ProductDescription/productDescription";

const App = () => {
  const [clothes, setClothes] = useState([]);
  const goodsFromServer = useContext(ClothesFromServer);

  useEffect(() => {
    goodsFromServer.then(data => setClothes(data))
  }, [goodsFromServer])

  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={Main} />
        {clothes.map((item: ClothItem) => (
          <Route key={item.article_no} path={`/${item.article_no}`} render={() => <ProductDescription item={item}/>}/>
        ))}
      </Switch>
    </>
  )
}

export default App;
