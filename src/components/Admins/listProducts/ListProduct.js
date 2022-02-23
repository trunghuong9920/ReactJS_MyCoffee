import { Link } from 'react-router-dom'
import { useState } from "react"

import './style.scss'
import EditProduct from './EditProduct'

function ListProduct({ data }) {
    const [showEdit, setShowEdit] = useState(false)
    const [idEdit, setIdEdit] = useState()

    const handleEdit = (id) => {
        setIdEdit(id)

        setShowEdit(!showEdit)
    }

    function ModalEdit() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Chỉnh sửa thông tin sản phẩm</h1>
                    </div>
                    <div className="modal_body">
                        <EditProduct
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
    return (
        <div className="product">
            <div className="product_title">
                <div className="product_title_col">
                    <h3 className="product_title_col_value">Id</h3>
                </div>
                <div className="product_title_col">
                    <h3 className="product_title_col_value">Tên sản phẩm</h3>
                </div>
                <div className="product_title_col">
                    <h3 className="product_title_col_value">Loại sản phẩm</h3>
                </div>
                <div className="product_title_col">
                    <h3 className="product_title_col_value">Giá</h3>
                </div>
                <div className="product_title_col">
                    <h3 className="product_title_col_value">Thao tác</h3>
                </div>
            </div>
            <div className="product_body">
                {
                    data.map((item, index) => (
                        <div key={index} className="product_body_row">
                            <div className="product_body_row_col">
                                <h3 className="product_body_row_col_value">{item.id}</h3>
                            </div>
                            <div className="product_body_row_col">
                                <h3 className="product_body_row_col_value">{item.name}</h3>
                            </div>
                            <div className="product_body_row_col">
                                <h3 className="product_body_row_col_value">{item.nameC}</h3>
                            </div>
                            <div className="product_body_row_col">
                                <h3 className="product_body_row_col_value">{item.price}</h3>
                            </div>
                            <div className="product_body_row_col">
                                <div className="product_body_row_col_control">
                                    <button className="product_body_row_col_control-edit"
                                        onClick={() => handleEdit(item.id)}
                                    ><i className="ti-pencil-alt"></i></button>
                                    <button className="product_body_row_col_control-delete"><i className="ti-close"></i></button>
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
                <ModalEdit/>
            }
        </div>
    )
}

export default ListProduct