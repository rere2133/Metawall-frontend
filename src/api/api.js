import store from "../store";
const token = localStorage.getItem("meta_token");
const noneTokenList = ["/users/sign_in", "/users/sign_up"];

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 40000,
});

instance.interceptors.request.use(
  (config) => {
    store.commit("setGlobalLoading", true);
    if (!noneTokenList.includes(config.url)) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (err) => {
    store.commit("setGlobalLoading", false);
    return Promise.reject(err);
  }
);
instance.interceptors.response.use((res) => {
  store.commit("setGlobalLoading", false);
  return res;
});

export default function (method, url, data = null, config) {
  method = method.toLowerCase();
  switch (method) {
    case "get":
      return instance.get(url, { params: data });
    case "post":
      return instance.post(url, data, config);
    case "patch":
      return instance.patch(url, data);
    case "delete":
      return instance.delete(url, { params: data });
    case "patch":
      return instance.patch(url, data);
    default:
      console.log(`未知的method : ${method}`);
      return false;
  }
}
