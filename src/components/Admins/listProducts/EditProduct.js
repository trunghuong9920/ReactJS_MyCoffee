import { useState, useEffect } from 'react'

import './style.scss'

function EditProduct({ idEdit }) {
    const id = idEdit
    const [dataEdit, setDataEdit] = useState([])
    const [dataCate, setDataCate] = useState([])

    useEffect(() => {
        const api = "http://localhost:3000/products?id=" + id
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDataEdit(data)
            })
    }, [])

    useEffect(() => {
        const api = "http://localhost:3000/categorys"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDataCate(data)
            })
    }, [])

    return (
        <>
            {
                dataEdit.map((item, index) => (
                    <div key={index}>
                        
                        <div className="form_group">
                            <h3 className="form_group_title">Mã sản phẩm:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                readOnly = {true}
                                defaultValue = {item.id}
                            />
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Tên sản phẩm:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                defaultValue = {item.name}
                                placeholder = "Nhập tên sản phẩm.."
                            />
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Loại sản phẩm:</h3>
                            <select
                            >
                                {
                                    dataCate.map((item,index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Giá bán:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                defaultValue = {item.price}
                                placeholder = "Vui lòng nhập chữ số..."
                            />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default EditProduct