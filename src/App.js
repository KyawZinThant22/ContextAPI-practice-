
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import { CartAPI } from './components/Context';
import Header from './components/Header';
import Home from './components/Home';


function App() {


  const {data, setData} = useContext(CartAPI)


    useEffect(()=>{
        const dataJson = localStorage.getItem("Datas")

        if(data) setData(JSON.parse(dataJson))
    },[])

    useEffect(() => {
        localStorage.setItem("Datas" , JSON.stringify(data))
    },[data])


  return (
    <BrowserRouter>


    <div className="header">

       <Header/>
        <Routes>
          <Route path='/' element = { <Home/> }> </Route>
          <Route path='/cart' element = { <Cart/> }  ></Route>
       

        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
