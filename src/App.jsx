import "./App.css";
import Banner from "./components/Banner";
import CardBerita from "./components/CardBerita";
import CardInfo from "./components/CardInfo";
import CardProduk from "./components/CardProduk";
import CardVideo from "./components/CardVideo";
import FooterWeb from "./components/FooterWeb";
import NavbarWeb from "./components/NavbarWeb";
import PencarianMenu from "./components/PencarianMenu";

function App() {
    return (
        <div>
            <div className="my-container">
                <NavbarWeb />
            </div>
            <Banner />
            <div className="my-container">
                <PencarianMenu />
                <CardInfo />
                <CardBerita />
                <CardVideo />
                <CardProduk />
            </div>
            <FooterWeb />
        </div>
    );
}

export default App;
