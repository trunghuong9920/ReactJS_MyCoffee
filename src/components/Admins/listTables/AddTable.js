import './style.scss'

function AddTable({hide}) {
    return (
        <>
            <div className="modal_body">
                <div className="form_group">
                    <h3 className="form_group_title">Tên Bàn:</h3>
                    <input className="form_group_input"
                        placeholder='Chèn thông tin...'
                    />
                </div>
                <div className="form_group">
                    <h3 className="form_group_title">Khu vực:</h3>
                    <select>
                        <option value="0">Ngoài sân</option>
                        <option value="1">Tầng 1</option>
                        <option value="2">Tầng 2</option>
                    </select>
                </div>
            </div>
            <div className="modal_footer">
                <div className="modal_footer_groupbtn">
                    <button
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
        </>
    )
}

export default AddTable