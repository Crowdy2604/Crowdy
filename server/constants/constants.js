export const OKEY_STATUS_CODE = 200;
export const BAD_REQUEST_STATUS_CODE = 400;
export const UNAUTHORIZED_STATUS_CODE = 401;
export const FORBIDDEN_STATUS_CODE = 403;
export const NOT_FOUND_STATUS_CODE = 404;
export const SERVER_ERROR_STATUS_CODE = 500;
export const MONGODB_DUPLICATE_CODE = 11000;
export const APP_FORM_FILE_FIELD_NAME_REGEX = /app-form-file-/g;

export const DOMAIN = 'trade.crowdy.site';

export const DATABASE_URL = 'mongodb://localhost/pl-finance';

export const FILES_FOLDER_PATH = 'src/apps/admin/files';

// TODO: добавьте финхаб ключи здесь
// Важно создать разные аккаунты финхаб. Т.к. финхаб разрешает только 1 вебсокет подключение для конкретного ключа
export const FINNHUB_API_KEY_DEV = 'c9c1602ad3i8r0u4b46g';

export const FINNHUB_API_KEY_PROD = 'cp70lhpr01qpb9raf69gcp70lhpr01qpb9raf6a0';
export const FINNHUB_API_KEY = process.env.NODE_ENV === 'production' ? FINNHUB_API_KEY_PROD : FINNHUB_API_KEY_DEV;
// export const FINNHUB_API_KEY = FINNHUB_API_KEY_PROD;

export const SYMBOL_PRICE_CHANGE_EVENT = 'symbol_price_change';
export const AUTO_CLOSE_ORDER_EVENT = 'AUTO_CLOSE_ORDER_EVENT';
export const AUTO_CLOSE_ORDER_EVENT_CLIENT = 'AUTO_CLOSE_ORDER_EVENT_CLIENT';

// TODO: добавьте gmail почту здесь
// Для работы gmail почты
// https://myaccount.google.com/lesssecureapps - разрешить к почте подключаться не только через сайт gmail
// https://accounts.google.com/b/0/DisplayUnlockCaptcha - разрешить подключиться незнакомому устрайству (серверу сайта)
export const DEV_MAIL_CREDENTIALS = {
    login: 'crowdyinvestments@gmail.com',
    password: 'пароль от почты дк'
};
export const PROD_MAIL_CREDENTIALS = {
    login: 'crowdyinvestments@gmail.com',
    password: 'пароль от почты дк'
};
export const MAIL_CREDENTIALS = process.env.NODE_ENV === 'production' ? PROD_MAIL_CREDENTIALS : DEV_MAIL_CREDENTIALS;

export const DOC_NAMES = ['identity', 'residence', 'cardFront', 'cardBack', 'others'];

export const AMOUNT = [
    { id: 1, name: 'gold', value: 1000 },
    { id: 2, name: 'platinum', value: 5000 },
    { id: 3, name: 'diamond', value: 20000 },
    { id: 4, name: 'vip' }
];

export const REQUIRED_DOC = [
    'identity',
    'residence',
    'cardFront',
    'cardBack'
];

export const WS_MESSAGES_PORT = 2053;