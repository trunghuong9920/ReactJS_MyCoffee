import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

import './style.scss'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'
import config from '../../../_config'

function ListProduct() {
    const port = config()
    const [getData, setGetData] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [idEdit, setIdEdit] = useState()


    const handleAdd = () => {
        setShowAdd(!showAdd)
    }
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
            name: formData.name,
            nameC: formData.nameC,
            idc: formData.idc,
            price: formData.price
        }
        data.push(newData)
        setGetData(data)
    }

    const handleReloadForEdit = (newid, formData) => {
        const data = [...getData];
        const newData = data.map(
            item => {
                if (item.id === newid) {
                    item.name = formData.name
                    item.nameC = formData.nameC
                    item.idc = formData.idc
                    item.price = formData.price
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
        const api = port + '/products'
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
                        <h1>Thêm sản phẩm:</h1>
                    </div>
                    <AddProduct hide={handleAdd} handleReloadForAdd={handleReloadForAdd} />
                </div>
            </>
        )
    }
    function ModalEdit() {
        return (
            <>
                <EditProduct
                    idEdit={idEdit}
                    hide={handleEdit}
                    handleReloadForEdit={handleReloadForEdit}
                />

            </>
        )
    }

    function ModalDelete() {
        return (
            <>
                <DeleteProduct
                    idEdit={idEdit}
                    hide = {handleDelete}
                    handleReloadForDelete = {handleReloadForDelete}
                />
            </>
        )
    }
    return (
        <>
            <div className="colRight_header">
                <div className="colRight_header_left">
                    <h2>Danh mục sản phẩm</h2>
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
                        onClick={handleAdd}
                    >
                        <i className="ti-plus"></i>
                    </button>
                </div>
            </div>
            <div className="colRight_body">
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
                            getData.map((item, index) => (
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
                                            <button className="product_body_row_col_control-delete"
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
                        showAdd &&
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

export default ListProduct