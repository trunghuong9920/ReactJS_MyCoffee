import './style.scss'

function AddCate({hide}) {
    return (
        <>
            <div className="modal_body">
                <div className="form_group">
                    <h3 className="form_group_title">Loại sản phẩm:</h3>
                    <input className="form_group_input"
                        placeholder='Chèn thông tin...'
                    />
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

export default AddCate