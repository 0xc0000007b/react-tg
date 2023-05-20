
import {useEffect} from "react";
import Header from "./components/header/header";
import {useTelegram} from "./assets/hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/products/product-list/product-list";
import Form from "./components/form/form";


function App() {
    const {tg, close, toggle} = useTelegram();
 useEffect(() => {
   tg.ready();
 })


  return (
    <div className="App">
        <Header/>
          <button className="main-btn" onClick={close}>X</button>
      <div className="container">
          <Routes>

          <Route index element={<ProductList />}/>
          <Route path={'/form'} element={<Form/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
