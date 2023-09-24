//에러 및 로그인 코드(차후에 변경될 예정)
const NORMAL_ERROR = 1001;
const USER_NOT_FOUND = 1002;
const SESSION_EXPIRED = 1003; //세션 만료, 중복로그인 code
const NEED_TO_LOGIN = 1004;
const INVALID_LOGIN_INFO = 1005;
const PERMISSION_REQUIRED = 1006;
const DEACTIVATED_USER = 1007;
const ALREADY_EXISTS_USER = 1008;
const NEED_TO_CHANGE_PASSWORD = 1009;
const LOCKED_ACCOUNT = 1010;

const XS = 320;
const SM = 768;
const XL = 1024;

export {
  XS,
  SM,
  XL,
  NORMAL_ERROR,
  SESSION_EXPIRED,
  NEED_TO_LOGIN,
  INVALID_LOGIN_INFO,
  PERMISSION_REQUIRED,
  LOCKED_ACCOUNT,
  NEED_TO_CHANGE_PASSWORD,
};