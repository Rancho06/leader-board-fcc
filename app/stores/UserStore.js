import { observable } from 'mobx';
import { API_recent, API_all } from './APIStore';
import $ from 'jquery';

class UserStore {
    @observable users = [];
    @observable currentAPI = "";

    constructor() {
        $.get(API_recent, (data) => {
            this.currentAPI = API_recent;
            this.users = data;
            console.log("Initial Data is fetched!");
        });
    }

    fetchRecentUsers(e) {
        if (this.currentAPI === API_recent) {
            return;
        }
        $.get(API_recent, (data) => {
            this.currentAPI = API_recent;
            this.users = data;
            console.log("Recent Data is fetched!");
        });
    }

    fetchAllUsers(e) {
        if (this.currentAPI === API_all) {
            return;
        }
        $.get(API_all, (data) => {
            this.currentAPI = API_all;
            this.users = data;
            console.log("All Data is fetched!");
        });
    }
}

export default new UserStore();
