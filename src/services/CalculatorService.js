import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/"

class EmployeeService {
    getSqroot(num) {
        return axios.get(EMPLOYEE_API_BASE_URL+"sqroot?num="+num)
    }

    getFactorial(num) {
        return axios.get(EMPLOYEE_API_BASE_URL+"factorial?num="+num)
    }

    getLog(num) {
        return axios.get(EMPLOYEE_API_BASE_URL+"ln?num="+num)
    }

    getPower(num1, num2) {
        return axios.get(EMPLOYEE_API_BASE_URL+"pow?base="+num1+"&power="+num2)
    }
}

export default new EmployeeService()