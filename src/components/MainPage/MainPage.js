import './MainPage.scss';
import TopPanel from './../organisms/TopPanel/TopPanel';
import Header from './../organisms/Header/Header';
import Description from './../organisms/Description/Description';
import Protocols from './../organisms/Protocols/Protocols';
import Price from './../organisms/Price/Price';
import Activation from './../organisms/Activation/Activation';
import Team from './../organisms/Team/Team';
import FAQ from './../organisms/FAQ/FAQ';
import Footer from './../organisms/Footer/Footer';
import Advantages from './../organisms/Advantages/Advantages';

const MainPage = () => {
  return (
    <div className="main__wrapper">
      <div className="main-page__inner ">
        <TopPanel />
        <Header />
        <Description />
        <Protocols />
        <Advantages />
        <div id="price"></div>
        <Price />
        <div id="app"></div>
        <Activation />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
