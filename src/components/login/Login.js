import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './style.css'
import config from '../../_config'

function Login() {
    const navigate = useNavigate();
    const port = config()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState('')

    function checkInfo(name, password) {
        if (name === '') return false
        if (password === '') return false
        return true
    }
    function checkRqApi(name){
        const api = port + "/login?account=" + name
            fetch(api)
                .then(res => res.json())
                .then(datas => {
                    if(datas.length > 0){
                        datas.map(item => {
                            localStorage.setItem("account",item.account)
                            navigate("/")
                        })
                    }
                    else{
                        setError("Thông tin tài khoản hoặc mật khẩu không đúng!")
                    }
                })
    }

    const handleLogin = () => {
        if (checkInfo(name, password)) {
            checkRqApi(name)
        }
        else {
            setError('Vui lòng nhập đủ thông tin!')
        }
    }
    

    return (
        <div className='login-app'>
            <div className='box-main'>
                <div className='box-left'>
                    <h1 className='name-app'>MY COFFEE</h1>
                    <h2 className='Login'>Login</h2>
                </div>
                <div className='box-right'>
                    <form>
                        <div className='box-right_inputgroup'>
                            <label><FontAwesomeIcon icon="fa-solid fa-user" /></label>
                            <input placeholder='Nhập vào tài khoản... '
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='box-right_inputgroup'>
                            <label><FontAwesomeIcon icon="fa-solid fa-key" /></label>
                            <input placeholder='Nhập vào mật khẩu... '
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <p className='box-right_error'>{error}</p>
                        <button className='btn-login' type='button' onClick={handleLogin}>Đăng nhập</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login