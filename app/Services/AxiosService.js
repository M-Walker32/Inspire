// @ts-ignore
export const inspireService = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 5000
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/maria",
  timeout: 8000
})