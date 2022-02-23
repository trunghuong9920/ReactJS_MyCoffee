import { useEffect, useState } from 'react'

import './style.scss'

function AddProduct() {
    const [cates, setCates] = useState([])
    useEffect(() => {
        const api = "http://localhost:3000/categorys"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setCates(data)
            })
    }, [])
    return (
        <>
            <div className="form_group">
                <h3 className="form_group_title">Tên sản phẩm:</h3>
                <input className="form_group_input"
                    placeholder='Chèn thông tin...'
                />
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Loại sản phẩm:</h3>
                <select>
                    {
                        cates.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Giá sản phẩm:</h3>
                <input className="form_group_input"
                    placeholder='Vui lòng nhập số...'
                />
            </div>
        </>
    )
}

export default AddProduct