import { defineStore } from 'pinia';
import { Axios } from 'axios';
const axios = new Axios({
  baseURL: 'https://script.google.com/macros/s/AKfycbzIDS-1IW_YFKWgerropr0M19qVHs9wNvLOOM-G0FwM'
  // baseURL: 'https://script.google.com/macros/s/AKfycbzPVYCmq_gDNjY6fpXocfrzGjXBVYl26dMr7jzoWYI6Wu2sEROUITGB_x2BSrhA0X5t-w',
  // headers: {
  //   'Content-Type': 'text/plain'
  //   // 'Access-Control-Allow-Origin': '*',
  //   // crossDomain: true
  // }
});
axios.options;

// axios.defaults.baseURL = 'https://script.google.com/macros/s/AKfycbzIDS-1IW_YFKWgerropr0M19qVHs9wNvLOOM-G0FwM';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user'))
  }),
  actions: {
    async fetchGasInfo() {
      let userInfo: any = {};
      if (typeof google !== 'undefined') {
        console.log('GAS環境');
        google.script.run
          .withSuccessHandler((res) => {
            userInfo.email = res.email;
          })
          .withFailureHandler(() => {})
          .getUserEmail();
      } else {
        console.log('GAS以外環境');
        // const res = await axios
        //   // @ts-ignore
        //   .get(`/exec?func=getUserEmail`)
        //   .then((res) => {
        //     console.log('レスポンス（axios）：', res);
        //     return res;
        //   })
        //   .catch((err) => {
        //     console.log('エラー情報：', err);
        //   });
        // console.log('レスポンス：', res);
        userInfo.email = 'non-gas-env-dummy@example.com';
      }
      // update pinia state
      this.user = userInfo;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(userInfo));
    }
  }
});
