import axios from "axios";
// import { Loading } from "element-ui";

// let loadingInstance;
let service = axios.create();

service.interceptors.request.use((config) => {
    // loadingInstance = Loading.service({ fullscreen: true });
    return config;
});

service.interceptors.response.use((resp) => {
    // loadingInstance.close();
    return resp;
}, (error) => {
    // loadingInstance.close();
    return error;
});

export function GetWebData() {
    return service({
        url: "https://ework-1251965636.cos.ap-beijing.myqcloud.com/web.json",
        method: "get",
    });
}
