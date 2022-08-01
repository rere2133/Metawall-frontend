const token = localStorage.getItem("meta_token");

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
});
instance.interceptors.request.use(
  (config) => {
    console.log("hihihi");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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
