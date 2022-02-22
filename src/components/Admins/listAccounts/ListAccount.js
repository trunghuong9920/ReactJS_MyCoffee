import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./style.scss"

const listCategorys = ["Id","Ảnh đại diện", "Tên tài khoản", "Tên nhân viên","Số điện thoại", "Quyền truy cập", "Thao tác"]
function ListAccount() {
    const [data, setData] = useState([])
    useEffect(() => {
        const api = "http://localhost:3000/users"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
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
                                    <Link to="/admin">
                                        <button className="ListAccout_category_col-control-edit"><i className="ti-pencil-alt"></i></button>
                                    </Link>
                                    <button className="ListAccout_category_col-control-delete"><i className="ti-close"></i></button>
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
export default ListAccount