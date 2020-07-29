import { CONST } from "../const";
import md5 from "md5";
import sha256 from "js-sha256";

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

    }
}