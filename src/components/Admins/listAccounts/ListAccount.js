import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import "./style.scss"

import EditAccount from './EditAccount'
import DeleteAccount from "./DeleteAccount"

const listCategorys = ["Id", "Ảnh đại diện", "Tên tài khoản", "Tên nhân viên", "Số điện thoại", "Quyền truy cập", "Thao tác"]
function ListAccount({ data }) {
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [idEdit, setIdEdit] = useState()

    const handleEdit = (id) => {
        setIdEdit(id)

        setShowEdit(!showEdit)
    }
    const handleDelete = (id) =>{
        setIdEdit(id)
        setShowDelete(!showDelete)
    }
    function ModalEdit() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Chỉnh sửa thông tin tài khoản</h1>
                    </div>
                    <div className="modal_body">
                        <EditAccount
                            idEdit={idEdit}
                        />
                    </div>
                    <div className="modal_footer">
                        <div className="modal_footer_groupbtn">
                            <button
                                onClick={() => setShowEdit(!showEdit)}
                            >
                                <i className='ti-save'></i>
                            </button>
                            <button
                                onClick={() => setShowEdit(!showEdit)}
                            >
                                <i className='ti-back-right'></i>
                            </button>
                        </div>
                    </div>
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
                    <div className="modal_body">
                        <DeleteAccount
                            idEdit={idEdit}
                        />
                    </div>
                    <div className="modal_footer">
                        <div className="modal_footer_groupbtn">
                            <button
                                onClick={() => setShowDelete(!showDelete)}
                            >
                                <i className='ti-save'></i>
                            </button>
                            <button
                                onClick={() => setShowDelete(!showDelete)}
                            >
                                <i className='ti-back-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
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
                    data.map((item, index) => (
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
                showEdit &&
                <ModalEdit />
            }
            {
                showDelete &&
                <ModalDelete />
            }
        </div>
    )
}
export default ListAccount