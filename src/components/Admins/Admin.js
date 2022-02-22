import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './style.css'
import './style.scss'
import ListAccount from './listAccounts/ListAccount'
import ListTable from './listTables/ListTable'
import ListCategory from './listCategorys/ListCategory'
import ListProduct from './listProducts/ListProduct'

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
    let component = <ListAccount/>
    let nameTitle = "Danh mục tài khoản"

    switch(tabActive){
        case '1':
            component = <ListAccount/>
            nameTitle = "Danh mục tài khoản"
            break
        case '2':
            component = <ListTable/>
            nameTitle = "Danh mục bàn"
            break
        case '3':
            component = <ListCategory/>
            nameTitle = "Loại sản phẩm"
            break
        case '4':
            component = <ListProduct/>
            nameTitle = "Danh sách sản phẩm"
            break
        default:
            component = <ListAccount/>
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
        </div>
    )
}
export default Admin