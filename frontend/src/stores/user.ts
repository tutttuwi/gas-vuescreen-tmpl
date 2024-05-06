import { defineStore } from 'pinia';
import { Axios } from 'axios';
const axios = new Axios();
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
        google.script.run
          .withSuccessHandler((userEmail) => {
            userInfo.email = userEmail;
          })
          .withFailureHandler(() => {})
          .getUserEmail();
      } else {
        const res = await axios.get(
          'https://script.google.com/macros/s/AKfycbzIDS-1IW_YFKWgerropr0M19qVHs9wNvLOOM-G0FwM/exec?func=getUserEmail'
        );
        console.log(res);
      }
      // update pinia state
      this.user = userInfo;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(userInfo));
    }
  }
});
