import { CONST } from "../const";
import md5 from "md5";
import sha256 from "js-sha256";
import { API } from "./APIs";

export const httpService = {

    postWithParams: async (url, params) => {

        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            }
        };

        return fetch(url, options).then(res => res.json());
    },

    getCatelist: async () => {
        const params = 'page=1&pageSize=50&orderType=1';
        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));
        const url = API.GET_CATE_LIST + `?${params}`;

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            }
        };

        return fetch(url, options).then(res => res.json());
    },

    getTrendingNews: async () => {
        const params = 'page=1&pageSize=3&trending=1';
        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const url = API.GET_NEWS_LIST + `?${params}`;

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            }
        };

        return fetch(url, options).then(res => res.json());

    },

    getLatestNews: async () => {
        const params = 'page=1&pageSize=3&orderType=0';
        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const url = API.GET_NEWS_LIST + `?${params}`;

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            }
        };

        return fetch(url, options).then(res => res.json());
    },

    getNewsByCate: async (cateID) => {
        const params = `page=1&pageSize=3&orderType=0&cateId=${cateID}`;
        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const url = API.GET_NEWS_LIST + `?${params}`;

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            }
        };

        return fetch(url, options).then(res => res.json());
    }

}