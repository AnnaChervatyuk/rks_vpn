import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { dictRU } from './../../../dict/ru';
import { dictEN } from './../../../dict/en';
import './TopPanel.scss';

const TopPanel = () => {
  const menuList = window.user_lang === 'ru_RU' ? dictRU.navigationMenu : dictEN.navigationMenu;

  const changLang = () => {
    window.user_lang = window.user_lang === 'ru_RU' ? (window.user_lang = 'en_EN') : (window.user_lang = 'ru_RU');
  };

  return (
    <div className="top_panel__wrapper">
      <div className="top_panel__inner inner">
        <div className="logo logo__rks-vpn"></div>
        <div className="top_panel__menu menu-general">
          {menuList
            .filter((node) => node.link !== 'lang')
            .map((node, key) => {
              return (
                <div
                  onClick={() =>
                    document.getElementById(node.link).scrollIntoView({
                      behavior: 'smooth'
                    })
                  }
                  className="top_panel__menu-item"
                  key={key}
                >
                  {node.name}
                </div>
              );
            })}
        </div>
        <div className="top_panel__menu top_panel__menu-item menu-lang" onClick={changLang}>
          {menuList.find((node) => node.link === 'lang').name}
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default TopPanel;
