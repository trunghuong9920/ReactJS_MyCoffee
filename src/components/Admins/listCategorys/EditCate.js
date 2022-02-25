import { useState, useEffect } from 'react'

import config from '../../../_config'
import './style.scss'

function EditCate({ idEdit }) {
    const port = config()
    const id = idEdit
    const [dataEdit, setDataEdit] = useState([])

    useEffect(() => {
        const api = port+"/categorys?id=" + id
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDataEdit(data)
            })
    }, [])

    return (
        <>
            {
                dataEdit.map((item, index) => (
                    <div key={index}>
                        
                        <div className="form_group">
                            <h3 className="form_group_title">Mã loại sản phẩm:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                readOnly = {true}
                                defaultValue = {item.id}
                            />
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Tên loại sản phẩm:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                defaultValue = {item.name}
                                placeholder="Nhập tên sản phẩm..."
                            />
                        </div>
                        
                    </div>
                ))
            }
        </>
    )
}

export default EditCate