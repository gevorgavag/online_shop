import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import {useSelector} from "react-redux";

function App() {
    const orders = useSelector(state => {
        return state.orders
    })
    console.log(orders)
    const items = useSelector(state => {
        return state.items;
    })

  return (
    <div className="w-[1280px] my-[50px] mx-auto">
        <Header />
        <Items items={items}/>
        <Footer />
    </div>
  );
}

export default App;
