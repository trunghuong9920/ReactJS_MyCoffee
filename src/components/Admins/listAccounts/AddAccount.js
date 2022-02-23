import { useState, useEffect } from 'react'

import './style.scss'

import nobody from '../../../images/nobody_m.256x256.jpg'

function AddAccount() {
    const [urlImg, setUrlImg] = useState('')
    const [avata, setAvata] = useState('')

    useEffect(() => {
        return () => {
            avata && URL.revokeObjectURL(avata.preview)
        }
    }, [avata])

    const handlePreviewAvata = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)    //thêm object cho file

        console.log(file);
        setAvata(file)

        e.target.value = null
    }

    const handleReloadImg = () => {
        setUrlImg('')
        setAvata('')
    }
    return (
        <>
            <div className="form_group">
                <h3 className="form_group_title">Ảnh:</h3>
                <img src={avata.preview || urlImg || nobody} />
                <div className='form_group_imgsrc'>
                    <input
                        className="form_group_input"
                        placeholder='Chèn đường dẫn ảnh...'
                        value={urlImg}
                        onChange={e => setUrlImg(e.target.value)}
                    />
                    <input type="file"
                        id='form_group_imgsrc_upfile'
                        hidden={true}
                        onChange={handlePreviewAvata}
                    />
                    <label htmlFor='form_group_imgsrc_upfile' className="form_group_imgsrc_upfile"><i className='ti-export'></i>Tải lên</label>
                    <button onClick={handleReloadImg}
                        className="form_group_imgsrc_reloadimg"
                    ><i className='ti-reload'></i> Hủy</button>
                </div>
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Tên tài khoản:</h3>
                <input className="form_group_input"
                    placeholder='Chèn thông tin...'
                />
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Tên nhân viên:</h3>
                <input className="form_group_input"
                    placeholder='Chèn thông tin...'
                />
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Số điện thoại:</h3>
                <input className="form_group_input"
                    placeholder='Chèn thông tin...'
                />
            </div>
            <div className="form_group">
                <h3 className="form_group_title">Quyền truy cập:</h3>
                <select>
                    <option value="0">Quản trị viên</option>
                    <option value="1">Nhân viên</option>
                </select>
            </div>
        </>
    )
}

export default AddAccount