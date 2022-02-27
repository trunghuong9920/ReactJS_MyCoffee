import { Link } from 'react-router-dom'
import { useState } from "react"

import './style.scss'
import AddCate from './AddCate'
import EditCate from './EditCate'
import DeleteCate from './DeleteCate'
import UseAddModal from '../useAddModal'

function ListCategory({ data }) {
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

    function ModalAdd() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Thêm loại sản phẩm:</h1>
                    </div>
                    <AddCate hide={handleShowAddModal} />
                </div>
            </>
        )
    }

    function ModalEdit() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Chỉnh sửa loại sản phẩm</h1>
                    </div>
                    <div className="modal_body">
                        <EditCate
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
                        <h1>Chỉnh sửa loại sản phẩm</h1>
                    </div>
                    <div className="modal_body">
                        <DeleteCate
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
        <>
            <div className="colRight_header">
                <div className="colRight_header_left">
                    <h2>Danh mục loại sản phẩm</h2>
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
                <div className='category'>
                    <div className="category_title">
                        <div className="category_title_col">
                            <h3 className="category_title_col_value">Id</h3>
                        </div>
                        <div className="category_title_col">
                            <h3 className="category_title_col_value">Loại sản phẩm</h3>
                        </div>
                        <div className="category_title_col">
                            <h3 className="category_title_col_value">Thao tác</h3>
                        </div>
                    </div>
                    <div className="category_body">
                        {
                            data.map((item, index) => (
                                <div key={index} className="category_body_row">
                                    <div className="category_body_row_col">
                                        <h3 className="category_body_row_col_value">{item.id}</h3>
                                    </div>
                                    <div className="category_body_row_col">
                                        <h3 className="category_body_row_col_value">{item.name}</h3>
                                    </div>
                                    <div className="category_body_row_col">
                                        <div className="category_body_row_col_control">
                                            <button className="category_body_row_col_control-edit"
                                                onClick={() => handleEdit(item.id)}
                                            ><i className="ti-pencil-alt"></i></button>
                                            <button className="category_body_row_col_control-delete"
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
export default ListCategory