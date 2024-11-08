import { dictRU } from './../../../dict/ru';
import { dictEN } from './../../../dict/en';
import { LangStore } from '../../../stores/';
import './TopPanel.scss';
import { useCallback } from 'react';
import { observer } from 'mobx-react';

const TopPanel = observer(() => {
  const { user_lang } = LangStore;
  const menuList = user_lang === 'ru_RU' ? dictRU.navigationMenu : dictEN.navigationMenu;

  const changLang = useCallback(() => {
    let lang = user_lang === 'ru_RU' ? 'en_EN' : 'ru_RU';
    LangStore.user_lang = lang;
    localStorage.setItem('user_lang', lang);
  }, [user_lang]);

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
});

export default TopPanel;
