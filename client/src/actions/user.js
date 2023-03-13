import axios from 'axios';



export const registrationUser = async (email, password) => {
   try {
      const response = await axios.post(`http://localhost:5000/api/auth/registration`, { email, password })
      return response
   } catch (error) {
      return error
   }
}
export const loginUser = async (email, password) => {
   try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, { email, password })
      localStorage.setItem('token', response.data.token)
      return response
   } catch (error) {
      return error
   }
}
export const authUser = async () => {
   try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      return response.data
   } catch (error) {
      localStorage.removeItem('token')
      return error
   }
}