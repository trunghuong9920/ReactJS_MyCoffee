import { useState } from 'react'

import config from '../../../_config'

function AccountController() {
    const port = config()
    const [courses, setCourses] = useState([])

    function createAccount(data) {
        const api = port+"/users"
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }
        fetch(api, options)
            .then(res => res.json())
            .then(datas => {
                setCourses([...courses, datas])
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return {createAccount, courses}
}
export default AccountController