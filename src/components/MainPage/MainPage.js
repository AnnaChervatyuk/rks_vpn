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
import { dictRU } from './../../dict/ru_RU';
import { dictEN } from './../../dict/en_EN';
import { LangStore } from './../../stores/';
import { observer } from 'mobx-react';

const MainPage = observer(() => {
  const { user_lang } = LangStore;
  const dict = user_lang === 'ru_RU' ? dictRU : dictEN;

  return (
    <div className="main__wrapper">
      <div className="main-page__inner ">
        <div id="top"></div>
        <TopPanel menuList={dict.navigationMenu} user_lang={user_lang} />
        <Header header={dict.header} btnBuyBlock={dict.btnBuyBlock} />
        <Description descriptionBlock={dict.descriptionBlock} />
        <Protocols protocolsBlock={dict.protocolsBlock} />
        <Advantages advantagesBlock={dict.advantagesBlock} />
        <div id="price"></div>
        <Price btnBuyBlock={dict.btnBuyBlock} priceBlock={dict.priceBlock} />
        <div id="app"></div>
        <Activation activationBlock={dict.activationBlock} />
        <Team teamBlock={dict.teamBlock} />
        <FAQ FAQBlock={dict.FAQBlock} />
        <Footer telegram={dict.telegram} />
      </div>
    </div>
  );
});

export default MainPage;
