import './style.scss'

function AddTable(){
    return(
        <>
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
        </>
    )
}

export default AddTable