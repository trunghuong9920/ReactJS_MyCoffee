import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

import "./style.scss"
import nobody from '../../images/nobody_m.256x256.jpg'
import EditAvata from "./editAvata/EditAvata"

function Info() {
    const [data, setData] = useState([])
    useEffect(() => {
        const api = "http://localhost:3000/info"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    const [editAccount, setEditAccount] = useState(false)
    const [editName, setEditName] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editPassword, setEditPassword] = useState(false)

    const targetInput = useRef();
    const handleEditAccount = () => {
        setEditAccount(!editAccount)
        targetInput.current.focus()
    }
    const handleEditName = () => {
        setEditName(!editName)
        targetInput.current.focus()
    }
    const handleEditPhone = () => {
        setEditPhone(!editPhone)
        targetInput.current.focus()
    }
    const handleEditPassword = () => {
        setEditPassword(!editPassword)
        targetInput.current.focus()
    }


    function EditInfo({ item}) {
        return (
            <div className="editInfo">
                <div className="editInfo_group">
                    <div className="editInfo_group_title">
                        <h2>Tên tài khoản:</h2>
                        <div className="editInfo_group_title_edit">
                            <button
                                style={
                                    editAccount ? {
                                        display: 'none'
                                    } :
                                        {
                                            display: 'block'
                                        }
                                }
                                onClick={handleEditAccount}
                            >Chỉnh sửa</button>
                            <div
                                style={
                                    editAccount ? {
                                        display: 'flex'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                            >
                                <button>Lưu</button>
                                <button
                                    onClick={() => setEditAccount(!editAccount)}
                                >Hủy</button>
                            </div>
                        </div>
                    </div>
                    <div className="editInfo_group_body">
                        <div className="editInfo_group_body_form">
                            <input
                                readOnly={!editAccount}
                                ref={targetInput}
                                defaultValue = {item.account || ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="editInfo_group">
                    <div className="editInfo_group_title">
                        <h2>Họ tên:</h2>
                        <div className="editInfo_group_title_edit">
                            <button
                                style={
                                    editName ? {
                                        display: 'none'
                                    } :
                                        {
                                            display: 'block'
                                        }
                                }
                                onClick={handleEditName}
                            >Chỉnh sửa</button>
                            <div
                                style={
                                    editName ? {
                                        display: 'flex'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                            >
                                <button>Lưu</button>
                                <button
                                    onClick={() => setEditName(!editName)}
                                >Hủy</button>
                            </div>
                        </div>
                    </div>
                    <div className="editInfo_group_body">
                        <div className="editInfo_group_body_form">
                            <input
                                readOnly={!editName}
                                ref={targetInput}
                               defaultValue={item.name || ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="editInfo_group">
                    <div className="editInfo_group_title">
                        <h2>Số điện thoại:</h2>
                        <div className="editInfo_group_title_edit">
                            <button
                                style={
                                    editPhone ? {
                                        display: 'none'
                                    } :
                                        {
                                            display: 'block'
                                        }
                                }
                                onClick={handleEditPhone}
                            >Chỉnh sửa</button>
                            <div
                                style={
                                    editPhone ? {
                                        display: 'flex'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                            >
                                <button>Lưu</button>
                                <button
                                    onClick={() => setEditPhone(!editPhone)}
                                >Hủy</button>
                            </div>
                        </div>
                    </div>
                    <div className="editInfo_group_body">
                        <div className="editInfo_group_body_form">
                            <input
                                readOnly={!editPhone}
                                ref={targetInput}
                                defaultValue={item.phone || ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="editInfo_group">
                    <div className="editInfo_group_title">
                        <h2>Mật khẩu:</h2>
                        <div className="editInfo_group_title_edit">
                            <button
                                style={
                                    editPassword ? {
                                        display: 'none'
                                    } :
                                        {
                                            display: 'block'
                                        }
                                }
                                onClick={handleEditPassword}
                            >Chỉnh sửa</button>
                            <div
                                style={
                                    editPassword ? {
                                        display: 'flex'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                            >
                                <button>Lưu</button>
                                <button
                                    onClick={() => setEditPassword(!editPassword)}
                                >Hủy</button>
                            </div>
                        </div>
                    </div>
                    <div className="editInfo_group_body">
                        <div className="editInfo_group_body_form">
                            <input
                                className="editInfo_group_body_form_editpassword"
                                readOnly={!editPassword}
                                type={
                                    editPassword ? 'text' : 'password'
                                }
                                ref={targetInput}
                                
                                placeholder={
                                    editPassword ? 'Mật khẩu cũ' : ''
                                }
                                defaultValue={
                                    editPassword ? '' : item.password
                                }
                            />
                            <input
                                className="editInfo_group_body_form_editpassword"
                                readOnly={!editPassword}
                                type={
                                    editPassword ? 'text' : 'password'
                                }
                                ref={targetInput}
                                defaultValue={
                                    editPassword ? '' : 'password'
                                }
                                style={
                                    editPassword ? {
                                        display: 'block'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                                placeholder={
                                    editPassword ? 'Mật khẩu mới' : ''
                                }
                            />
                            <input
                                className="editInfo_group_body_form_editpassword"
                                readOnly={!editPassword}
                                type={
                                    editPassword ? 'text' : 'password'
                                }
                                ref={targetInput}
                                defaultValue={
                                    editPassword ? '' : 'password'
                                }
                                style={
                                    editPassword ? {
                                        display: 'block'
                                    } :
                                        {
                                            display: 'none'
                                        }
                                }
                                placeholder={
                                    editPassword ? 'Xác nhận mật khẩu' : ''
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="info">
            <div className="info_header">
                <div className="order_header">
                    <Link to="/" className="order_header-link">
                        <i className="ti-home order_header-link_icon"></i>
                        Trang chủ
                    </Link>
                    <i className="order_header-icon">/</i>
                    <Link to="/admin" className="order_header-link">
                        Thông tin cá nhân
                    </Link>
                </div>
            </div>
            <div className="info_body">
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <EditAvata
                                apiSrc = {item.avata}
                                idStaff = {item.id}
                             />
                            <EditInfo
                                item={item}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Info