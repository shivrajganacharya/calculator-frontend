import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/"

class EmployeeService {
    getSqroot(num) {
        return axios.get(EMPLOYEE_API_BASE_URL+"sqroot?num="+num)
    }
}

export default new EmployeeService()