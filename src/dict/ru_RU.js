export const dictRU = {
  navigationMenu: [
    { link: 'price', name: 'Стоимость' },
    { link: 'app', name: 'Приложение' },
    { link: 'lang', name: 'En' }
  ],

  header: {
    header: 'Устойчивый к&nbsp;блокировкам VPN',
    text: 'VPN от&nbsp;технических специалистов <a href="https://rks.global/" target="_blank">RKS.Global</a>'
  },

  btnBuyBlock: {
    btnBuy: {
      text: 'Купить',
      link: 'https://vpnpay.io/ru/rks/'
    },
    textPeriod: 'от 250&nbsp;₽ в&nbsp;месяц',
    textDescr: 'при оплате на&nbsp;год'
  },

  descriptionBlock: {
    header: 'Создан на&nbsp;основе современного протокола Xray, который сложно заблокировать',
    text1:
      'Xray предоставляет большие возможности для обеспечения конфиденциальности, обхода интернет-цензуры и&nbsp;защиты ваших данных в&nbsp;интернете.',
    text2:
      'Использует TLS (Transport Layer Security) и&nbsp;маскировку VPN-трафика под обычные HTTPS-соединения. Работает на всех платформах: Windows, macOS, Linux, Android и&nbsp;iOS.'
  },
  protocolsBlock: {
    header: 'протокола на основе Xray в одном VPN',
    protocolsList: [
      {
        header: 'VMess',
        text: 'Имеет встроенное шифрование и&nbsp;поддержку различных типов транспортов, изначально был разработан для обхода интернет‑цензуры и&nbsp;защищенной и&nbsp;анонимной передачи данных'
      },
      {
        header: 'VLESS',
        text: 'Облегченная и&nbsp;более новая версия VMess без встроенного шифрования, где главным достоинством является производительность и&nbsp;минимизация задержек'
      },
      {
        header: 'Shadowsocks',
        text: 'Протокол для обхода интернет-цензуры, разработанных для стран с&nbsp;жёсткими ограничениями, например, Китай, Россия, Иран'
      }
    ]
  },
  advantagesBlock: {
    header: 'Преимущества RKS&nbsp;VPN',
    platforms: {
      header: 'Работает на&nbsp;разных приложениях и&nbsp;платформах',
      text: 'Вы&nbsp;получаете код для&nbsp;подключения, который используется в&nbsp;VPN-приложениях, поддерживающих импорт настроек. Мы&nbsp;рекомендуем <a href="https://amnezia.org/ru" target="_blank">Amnezia VPN</a>'
    },
    traffic: {
      header: 'Безлимитный трафик'
    },
    device: {
      header: 'Возможность подключения до&nbsp;5&nbsp;устройств',
      text: 'Поделитесь VPN с&nbsp;друзьями или&nbsp;оставьте всё&nbsp;себе'
    },
    server: {
      header: 'VPN-серверы в&nbsp;Европе',
      text: 'Такое расположение серверов позволит обходить цензуру с&nbsp;минимальной задержкой. Вы получите ключи с&nbsp;тремя локациями&nbsp;&mdash; Франция, Польша и&nbsp;Нидерланды'
    }
  },
  priceBlock: {
    header: 'Стоимость',
    priceList: [
      { period: '3 месяца', price: '1000 ₽ или  333 ₽/мес', discount: null, fullPrice: null },
      { period: '6 месяцев', price: '1800 ₽ или  300 ₽/мес ', discount: '10% скидка', fullPrice: '2000 ₽' },
      { period: '1 год', price: '3000 ₽ или 250 ₽/мес', discount: '25% скидка', fullPrice: '4000 ₽' }
    ],
    descr:
      'Вы&nbsp;будете перенаправлены на&nbsp;сайт VPNPAY для оплаты. К&nbsp;оплате принимаются карты российских и&nbsp;зарубежных банков, криптовалюта'
  },

  activationBlock: {
    header: 'Как активировать',
    textHeader: 'Вы&nbsp;можете использовать любые приложения, поддерживающих импорт настроек: <a href="">VPN 1</a>',
    headerSecond: 'Самый простой способ активировать VPN&nbsp;&mdash; использовать приложение Amnezia VPN',
    textSecond:
      'Доступно для macOS, Linux, Windows, Android. Установить VPN на&nbsp;TV тоже возможно. Для этого вам понадобится приложение <a href="https://docs.amnezia.org/ru/documentation/amnezia-wg/" target="_blank">AmneziaWG</a>.',
    btnLink: 'https://amnezia.org/ru/downloads',
    btnText: 'Скачать',
    textInstr:
      'Amnezia VPN отсутствует в&nbsp;Apple App Store. Посмотрите видео, о&nbsp;том <a href="https://www.youtube.com/watch?v=RCkC_L2OQfs" target="_blank"> как устанавливать приложения без App Store </a>'
  },
  teamBlock: {
    header: 'Мы&nbsp;знаем как работает интернет-цензура изнутри, поэтому наши инструменты могут её&nbsp;обойти',
    text: '<p>RKS VPN разрабатывает команда экспертов в&nbsp;области свободы интернета: журналисты, юристы и&nbsp;технические специалисты.</p><p>Мы&nbsp;10+&nbsp;лет изучаем интернет-цензуру, создаём инструменты для её&nbsp;обхода и&nbsp;защищаем свободу слова.</p>'
  },

  FAQBlock: {
    header: 'Вопросы-ответы',
    FAQList: [
      {
        question: 'Мне нужна поддержка, как с ней связаться',
        answer: 'Мне нужна поддержка, как с ней связаться'
      },
      {
        question: 'Трафик действительно безлимитный?',
        answer: 'Трафик безлимитный для обычно использования. Для перепродажи многим людям не подойдет'
      },
      {
        question: 'Как установить VPN на телевизор',
        answer: 'Как установить VPN на телевизор'
      }
    ]
  },

  telegram: 'Телеграм-бот'
};
