import { useState, useEffect } from 'react'

import './style.scss'
import config from '../../../_config'

function EditTable({ idEdit }) {
    const port = config()
    const id = idEdit
    const [dataEdit, setDataEdit] = useState([])

    useEffect(() => {
        const api = port+"/tables?idB=" + id
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
                            <h3 className="form_group_title">Mã Bàn:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                readOnly = {true}
                                defaultValue = {item.idB}
                            />
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Tên Bàn:</h3>
                            <input className="form_group_input"
                                defaultValue="tb"
                                defaultValue = {item.name}
                            />
                        </div>
                        <div className="form_group">
                            <h3 className="form_group_title">Khu vực:</h3>
                            <select
                            >
                                <option value="0">Ngoài sân</option>
                                <option value="1">Tầng 1</option>
                                <option value="2">Tầng 2</option>
                            </select>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default EditTable