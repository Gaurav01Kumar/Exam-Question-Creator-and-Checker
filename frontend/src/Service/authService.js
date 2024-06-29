import axios from "axios";

class authService {
  constructor() {}
  async loginService(data) {
    try {
      const res = await axios.post(
        "http://localhost:3001/v1/api/user/login",
        data
      );
      
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async signUpService(data) {
    try {
  const res=  await  axios.post("http://localhost:3001/v1/api/user/sign-up", data)
        
       return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
const service = new authService();
export default service;
