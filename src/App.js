import Choose from "./components/choose/Choose";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navigation from "./components/navbar/Navigation";
import Promo from "./components/promo/Promo";
import SendEmail from "./components/sendEmail/SendEmail";
import SlideImage from "./components/slideImage/SlideImage";



function App() {
  return (
    <div className="App">
          <Navigation />
          <Jumbotron />
          <Choose />
          <Promo />
          <SlideImage />
          <SendEmail />
          <Footer />
    </div>
  );
}

export default App;
