import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import "./style.scss"

import AddAccount from "./AddAccount"
import EditAccount from './EditAccount'
import DeleteAccount from "./DeleteAccount"
import UseAddModal from "../useAddModal"
import config from "../../../_config"

const listCategorys = ["Id", "Ảnh đại diện", "Tên tài khoản", "Tên nhân viên", "Số điện thoại", "Quyền truy cập", "Thao tác"]
function ListAccount() {
    const port = config()
    const [getData, setGetData] = useState([])
    const { showAddModal, handleShowAddModal } = UseAddModal()
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [idEdit, setIdEdit] = useState()

    const handleEdit = (id) => {
        setIdEdit(id)

        setShowEdit(!showEdit)
    }
    const handleDelete = (id) => {
        setIdEdit(id)
        setShowDelete(!showDelete)
    }
    const lastItem = getData[getData.length - 1]
    const handleReloadForAdd = (formData) => {
        const data = [...getData]
        const newData = {
            id: lastItem.id + 1,
            account: formData.account,
            name: formData.name,
            phone: formData.phone,
            avata : formData.avata,
            permission : formData.permission,
            password: formData.password
        }
        data.push(newData)
        setGetData(data)
    }
    
    const handleReloadForEdit = (newid, formData) => {
        const data = [...getData];
        const newData = data.map(
            item => {
                if (item.id === newid) {
                    item.account = formData.account
                    item.name = formData.name
                    item.phone = formData.phone
                    item.avata = formData.avata
                    item.permission = formData.permission
                }
            return item
            }
        )
       setGetData(newData)
    }
    const handleReloadForDelete = (newId) => {
        setGetData(getData.filter(item => item.id !== newId))
    }

    //Load data
    useEffect(() => {
        const api = port + '/users'
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setGetData(data)
            })
    }, [])

    function ModalAdd() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Thêm tài khoản</h1>
                    </div>
                    <AddAccount hide={handleShowAddModal} handleReloadForAdd={handleReloadForAdd} />
                </div>
            </>
        )
    }

    function ModalEdit() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Chỉnh sửa thông tin tài khoản</h1>
                    </div>
                    <EditAccount
                        idEdit={idEdit}
                        handleEdit={handleEdit}
                        handleReloadForEdit={handleReloadForEdit}
                    />

                </div>
            </>
        )
    }
    function ModalDelete() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Xóa thông tin tài khoản</h1>
                    </div>
                    <DeleteAccount
                        idEdit={idEdit}
                        handleDelete={handleDelete}
                        handleReloadForDelete={handleReloadForDelete}
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="colRight_header">
                <div className="colRight_header_left">
                    <h2>Danh mục tài khoản</h2>
                </div>
                <div className="colRight_header_right">
                    <div className="colRight_header_right_search">
                        <input
                            placeholder='Tìm kiếm'
                        />
                        <button><i className="ti-search"></i></button>
                    </div>
                    <button
                        className="colRight_header_right_add"
                        onClick={handleShowAddModal}
                    >
                        <i className="ti-plus"></i>
                    </button>
                </div>
            </div>
            <div className="colRight_body">
                <div className="ListAccount">
                    <div className="ListAccout_category ListAccout_category-active">
                        {
                            listCategorys.map((item, index) => (
                                <div className="ListAccout_category_col"
                                    key={index}
                                >
                                    <h3>{item}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="ListAccout_category_body">
                        {
                            getData.map((item, index) => (
                                <div key={index} className="ListAccout_category">
                                    <div className="ListAccout_category_col"
                                    >
                                        <h3 className="ListAccount_body_col_value">{item.id}</h3>
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <img src={item.avata} alt="avata" />
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <h3 className="ListAccount_body_col_value">{item.account}</h3>
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <h3 className="ListAccount_body_col_value">{item.name}</h3>
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <h3 className="ListAccount_body_col_value">{item.phone}</h3>
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <h3 className="ListAccount_body_col_value">{item.permission}</h3>
                                    </div>
                                    <div className="ListAccout_category_col"
                                    >
                                        <div className="ListAccout_category_col-control">
                                            <button className="ListAccout_category_col-control-edit"
                                                onClick={() => handleEdit(item.id)}
                                            ><i className="ti-pencil-alt"></i></button>
                                            <button className="ListAccout_category_col-control-delete"
                                                onClick={() => handleDelete(item.id)}
                                            ><i className="ti-close"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="paginate">
                        <ul className="paginate_list">
                            <li className="paginate_list_item">
                                <Link className="paginate_list_link" to="/admin">
                                    <span><i className="ti-angle-left"></i></span>
                                </Link>
                            </li>
                            <li className="paginate_list_item paginate_list_item-active">
                                <Link className="paginate_list_link" to="/admin">
                                    <span>1</span>
                                </Link>
                            </li>
                            <li className="paginate_list_item">
                                <Link className="paginate_list_link" to="/admin">
                                    <span>2</span>
                                </Link>
                            </li>
                            <li className="paginate_list_item">
                                <Link className="paginate_list_link" to="/admin">
                                    <span>3</span>
                                </Link>
                            </li>
                            <li className="paginate_list_item">
                                <div className="paginate_list_link">
                                    <span>...</span>
                                </div>
                            </li>
                            <li className="paginate_list_item">
                                <Link className="paginate_list_link" to="/admin">
                                    <span><i className="ti-angle-right"></i></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {
                        showAddModal &&
                        <ModalAdd />
                    }
                    {
                        showEdit &&
                        <ModalEdit />
                    }
                    {
                        showDelete &&
                        <ModalDelete />
                    }
                </div>
            </div>
        </>

    )
}
export default ListAccount