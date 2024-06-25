import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import showFullItem from "./components/ShowFullItem";
import ShowFullItem from "./components/ShowFullItem";

function App() {
    const {items} = useSelector(state => state);
    const [showFullItem, setShowFullItem] = useState(false);
    const [itemValue, setItemValue] = useState(null)
    
  return (
      <div>
          <div
              className="w-[1280px] my-[50px] mx-auto"
          >
              <Header />
              <Items items={items} showFullItem={showFullItem} setShowFullItem={setShowFullItem}
                     setItemValue={setItemValue}/>
              {showFullItem &&
                  <ShowFullItem showFullItem={showFullItem} setShowFullItem={setShowFullItem} itemValue={itemValue}/>}
              <Footer/>
          </div>
      </div>
  );
}

export default App;
