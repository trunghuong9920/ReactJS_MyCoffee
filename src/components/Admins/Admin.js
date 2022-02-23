import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './style.css'
import './style.scss'
import ListAccount from './listAccounts/ListAccount'
import ListTable from './listTables/ListTable'
import ListCategory from './listCategorys/ListCategory'
import ListProduct from './listProducts/ListProduct'
import AddAccount from './listAccounts/AddAccount'
import AddTable from './listTables/AddTable'
import AddCate from './listCategorys/AddCate'
import AddProduct from './listProducts/AddProduct'

const tabs = [
    {
        id: '1',
        name: 'Danh mục tài khoản'
    },
    {
        id: '2',
        name: 'Danh mục bàn'
    },
    {
        id: '3',
        name: 'Loại sản phẩm'
    }
    , {
        id: '4',
        name: 'Sản phẩm'
    }
    , {
        id: '5',
        name: 'Thống kê'
    }
]

function Admin() {
    const [tabActive, setTabActive] = useState('1')
    const [data, setData] = useState([])
    const [modalAdd, setModalAdd] = useState(false)
    let type = 'users'
    let component = <ListAccount/>
    let componentModalAdd = <AddAccount/>
    let nameTitle = "Danh mục tài khoản"
    let nameModalAdd = "Thêm tài khoản"

    switch(tabActive){
        case '1':
            component = <ListAccount data={data}/>
            nameTitle = "Danh mục tài khoản"
            type = "users"
            componentModalAdd = <AddAccount/>
            nameModalAdd = "Thêm tài khoản"
            break
        case '2':
            component = <ListTable data={data}/>
            nameTitle = "Danh mục bàn"
            type = "tables"
            componentModalAdd = <AddTable/>
            nameModalAdd = "Thêm bàn"
            break
        case '3':
            component = <ListCategory data={data}/>
            nameTitle = "Loại sản phẩm"
            type = "categorys"
            componentModalAdd = <AddCate/>
            nameModalAdd = "Thêm Loại sản phẩm"
            break
        case '4':
            component = <ListProduct data={data}/>
            nameTitle = "Danh sách sản phẩm"
            type = "products"
            componentModalAdd = <AddProduct/>
            nameModalAdd = "Thêm sản phẩm"
            break
        default:
            component = <ListAccount data={data}/>
    }
  
    useEffect(() => {
        const api = "http://localhost:3000/"+type
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [type])


    function ModalAdd(){
        return (
            <>
                <div className="modal">
                    <div className="modal_header">
                        <h1>{nameModalAdd}</h1>
                    </div>
                    <div className="modal_body">
                        {componentModalAdd}
                    </div>
                    <div className="modal_footer">
                        <div className="modal_footer_groupbtn">
                            <button
                                onClick={() => setModalAdd(!modalAdd)}
                            >
                                <i className='ti-save'></i>
                            </button>
                            <button
                                onClick={() => setModalAdd(!modalAdd)}
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
        <div className="admin ">
            <div className="admin-title">
                <div className="order_header">
                    <Link to="/" className="order_header-link">
                        <i className="ti-home order_header-link_icon"></i>
                        Trang chủ
                    </Link>
                    <i className="order_header-icon">/</i>
                    <Link to="/admin" className="order_header-link">
                        Trang quản trị
                    </Link>
                </div>
            </div>
            <div className="admin_body row">
                <div className="col l-2">
                    <div className="admin-col_right">
                        <ul className="admin-col_right-list">
                            {
                                tabs.map((item, index) => (
                                    <li key={index} className="admin-col_right-item">
                                        <button
                                            className={clsx('admin-col_right-tab',
                                                tabActive === item.id ? {
                                                    'admin-col_right-tab_active': true
                                                } : {
                                                    'admin-col_right-tab_active': false
                                                }
                                            )}
                                            onClick={() => setTabActive(item.id)}
                                        >
                                            <i className='ti-angle-right'></i>
                                            <h3>{item.name}</h3>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col l-10">
                    <div className="colRight">
                        <div className="colRight_header">
                            <div className="colRight_header_left">
                                <h2>{nameTitle}</h2>
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
                                    onClick={() => setModalAdd(!modalAdd)}
                                >
                                    <i className="ti-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="colRight_body">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
            {
                modalAdd && 
                <ModalAdd/>
            }
        </div>
    )
}
export default Admin