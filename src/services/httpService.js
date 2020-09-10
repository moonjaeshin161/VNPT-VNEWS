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

    getNewsByCate: async (cateID, _params) => {
        let defaultParams = `page=1&pageSize=3&orderType=0&cateId=${cateID}`;
        const params = _params ? _params : defaultParams;
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

    getNewsById: async (newsId) => {
        const params = `id=${newsId}`;
        let time = Date.now();
        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const url = API.GET_NEWS + `?${params}`;

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

    getRelatedList: async (newsId, cateId, tags) => {
        let params = `id=${newsId}&cateId=${cateId}&contentType=0&tags=${tags}`;
        let time = Date.now();
        let body = {
            id: parseInt(newsId),
            cateId,
            tags,
            contentType: 1,
            pageSize: 10,
        };

        const unharshedCode = `${params}#${CONST.SECURE_CODE}@${time}!web`;
        const harshedCode = sha256(md5(unharshedCode));

        const url = API.GET_RELATED_LIST;



        console.log('Body: ', JSON.stringify(body))

        const options = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                RequestTime: time,
                Authorization: harshedCode,
                Channel: "web"
            },
            body: JSON.stringify(body)
        };

        return fetch(url, options).then(res => res.json());
    },


}