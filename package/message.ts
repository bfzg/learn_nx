import { WELCOME_MESSAGE } from '../config/config';

//计算当前时间 显示登录问候
const welcomeMessage = () => {
  let welcomeText: { message: string; description: string } = {
    message: '',
    description: '',
  };
  const currentTime = new Date().getHours();
  if (currentTime >= 0 && currentTime < 12) {
    welcomeText = WELCOME_MESSAGE.morning;
  } else if (currentTime >= 12 && currentTime < 14) {
    welcomeText = WELCOME_MESSAGE.noon;
  } else if (currentTime >= 14 && currentTime < 18) {
    welcomeText = WELCOME_MESSAGE.afternoon;
  } else {
    welcomeText = WELCOME_MESSAGE.night;
  }
  setTimeout(() => {}, 500);
};
