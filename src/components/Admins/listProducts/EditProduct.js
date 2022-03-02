import { useState, useEffect } from 'react'

import config from '../../../_config'
import './style.scss'
import ApiController from '../../../services/apiController'
import ProductController from './ProductController'

function EditProduct({ idEdit, hide ,handleReloadForEdit}) {
    const port = config()
    const { CheckInfo } = ProductController()
    const { editData } = ApiController()

    const [nameP, setNameP] = useState('')
    const [nameC, setNameC] = useState('')
    const [idC, setIdC] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState('')

    const id = idEdit
    const [dataEdit, setDataEdit] = useState([])
    const [dataCate, setDataCate] = useState([])

    
    const handleGetProduct = (e) =>{
        setIdC(e.target.value)
        dataCate.map(item => {
            if(parseInt(e.target.value) === item.id){
                setNameC(item.name);
            }
        })
    }

    const handleSave = () =>{
        if(CheckInfo(nameC, price)){
            console.log(nameC);
            const formData = {
                nameC:nameC,
                idc:idC,
                name:nameP,
                price:price
            }
            const api = port + "/products/" + id
            editData(api, formData)
            handleReloadForEdit(id, formData)
            hide()
        }
        else{
            setError("Vui lòng nhập đủ thông tin!")
        }
    }

    useEffect(() => {
        const api = port + "/products?id=" + id
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDataEdit(data)
                data.map(item => {
                    setIdC(item.idc)
                    setNameP(item.name)
                    setNameC(item.nameC)
                    setPrice(item.price)
                })
            })
    }, [])

    useEffect(() => {
        const api = port + "/categorys"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDataCate(data)
            })
    }, [])

    return (
        <>
            <div className="modal">
                <div className="modal_header">
                    <h1>Chỉnh sửa thông tin sản phẩm</h1>
                </div>
                <div className="modal_body">
                    {
                        dataEdit.map((item, index) => (
                            <div key={index}>

                                <div className="form_group">
                                    <h3 className="form_group_title">Mã sản phẩm:</h3>
                                    <input className="form_group_input"
                                        readOnly={true}
                                        value={item.id}
                                    />
                                </div>
                                <div className="form_group">
                                    <h3 className="form_group_title">Tên sản phẩm:</h3>
                                    <input className="form_group_input"
                                        value={nameP}
                                        placeholder="Nhập tên sản phẩm.."
                                        onChange={e => setNameP(e.target.value)}
                                    />
                                </div>
                                <div className="form_group">
                                    <h3 className="form_group_title">Loại sản phẩm:</h3>
                                    <select
                                        value={idC}
                                        onChange ={handleGetProduct}
                                    >
                                        {
                                            dataCate.map((item, index) => (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form_group">
                                    <h3 className="form_group_title">Giá bán:</h3>
                                    <input className="form_group_input"
                                        value={price}
                                        placeholder="Vui lòng nhập chữ số..."
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="modal_footer">
                    <div className='modal_footer_error'>
                        <h3>{error}</h3>
                    </div>
                    <div className="modal_footer_groupbtn">
                        <button
                            onClick={handleSave}
                        >
                            <i className='ti-save'></i>
                        </button>
                        <button
                            onClick={hide}
                        >
                            <i className='ti-back-right'></i>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditProduct