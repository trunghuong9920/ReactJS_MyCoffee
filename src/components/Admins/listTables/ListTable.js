import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import "./style.scss"
import AddTable from './AddTable'
import EditTable from "./EditTable"
import DeleteTable from "./DeleteTable"
import config from "../../../_config"

function ListTable() {
    const port = config();
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [idEdit, setIdEdit] = useState()
    const [getData, setGetData] = useState([])


    const lastItem = getData[getData.length - 1]
    const handleReloadForAdd = (formData) => {
        const data = [...getData]
        const newData = {
            id: lastItem.id + 1,
            name: formData.name,
            status: formData.status,
            area: formData.area
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
                    item.area = formData.area
                }
            return item
            }
        )
       setGetData(newData)
    }

    const handleReloadForDelete = (newId) => {
        setGetData(getData.filter(item => item.id !== newId))
    }

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

      //Load data
      useEffect(() => {
        const api = port + '/tables'
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
                        <h1>Thêm bàn:</h1>
                    </div>
                    <AddTable hide={handleAdd} handleReloadForAdd = {handleReloadForAdd}/>
                </div>
            </>
        )
    }

    function ModalEdit() {
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>Chỉnh sửa thông tin bàn</h1>
                    </div>
                    <EditTable
                            idEdit={idEdit}
                            hide = {handleEdit}
                            handleReloadForEdit = {handleReloadForEdit}
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
                        <h1>Xóa thông tin bàn</h1>
                    </div>
                    <DeleteTable
                            id={idEdit}
                            hide = {handleDelete}
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
                    <h2>Danh mục bàn</h2>
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
                <div className="listTable">
                    <div className="listTable_title">
                        <div className="listTable_title_col">
                            <h3 className="listTable_title_col_value">Id</h3>
                        </div>
                        <div className="listTable_title_col">
                            <h3 className="listTable_title_col_value">Tên Bàn</h3>
                        </div>
                        <div className="listTable_title_col">
                            <h3 className="listTable_title_col_value">Trạng Thái</h3>
                        </div>
                        <div className="listTable_title_col">
                            <h3 className="listTable_title_col_value">Khu vực</h3>
                        </div>
                        <div className="listTable_title_col">
                            <h3 className="listTable_title_col_value">Thao tác</h3>
                        </div>
                    </div>
                    <div className="listTable_body">
                        {
                            getData.map((item, index) => (
                                <div key={index} className="listTable_body_row">
                                    <div className="listTable_body_row_col">
                                        <h3 className="listTable_body_row_col_value">{item.id}</h3>
                                    </div>
                                    <div className="listTable_body_row_col">
                                        <h3 className="listTable_body_row_col_value">{item.name}</h3>
                                    </div>
                                    <div className="listTable_body_row_col">
                                        <h3 className="listTable_body_row_col_value">{item.status}</h3>
                                    </div>
                                    <div className="listTable_body_row_col">
                                        <h3 className="listTable_body_row_col_value">{item.area}</h3>
                                    </div>
                                    <div className="listTable_body_row_col">
                                        <div className="listTable_body_row_col_control">
                                            <button className="listTable_body_row_col_control-edit"
                                                onClick={() => handleEdit(item.id)}
                                            ><i className="ti-pencil-alt"></i></button>
                                            <button className="listTable_body_row_col_control-delete"
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
                        <ModalEdit
                        />
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
export default ListTable