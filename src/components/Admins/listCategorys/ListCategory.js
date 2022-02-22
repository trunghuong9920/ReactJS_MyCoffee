import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './style.scss'

function ListCategory(){
    const [data, setData] = useState([])
    useEffect(() => {
        const api = "http://localhost:3000/categorys"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return(
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
                                    <Link to="/admin">
                                        <button className="category_body_row_col_control-edit"><i className="ti-pencil-alt"></i></button>
                                    </Link>
                                    <button className="category_body_row_col_control-delete"><i className="ti-close"></i></button>
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
        </div>
    )
}
export default ListCategory