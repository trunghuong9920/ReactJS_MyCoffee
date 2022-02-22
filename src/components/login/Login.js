import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './style.css'


function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const api = "http://localhost:3000/login"
    function getDataLogin(data){
        const options = {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
          
        }
        fetch(api,options)
          .then(res => res.json())
          .then(data =>{
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }

    const handleLogin = () => {
        const formData = {
            name:name,
            password: password
        }
        getDataLogin(formData)
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
                        <button className='btn-login' type='button' onClick={handleLogin}>Đăng nhập</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login