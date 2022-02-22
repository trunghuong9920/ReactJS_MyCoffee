import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const namelists = ['STT', 'Hình ảnh', 'Tên món', 'Mã món', 'Số lượng','Đơn giá (VNĐ)', 'Chiết khấu (%)', 'Giờ vào', 'Thành tiền (VNĐ)','Lựa chọn']
function Pay({ showPay, hide, lists }) {
    const notify = () => 
    toast.success(`Xóa sản phẩm thành công!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const handlePay = () =>{
        notify()
    }
    function ListPay({ lists }) {
        return (
            lists.map((item, index) => (
                <label htmlFor={`pay_checkbox-${index}`} key={index} className="pay_body-table_col">
                    <div><h3 className="pay_body-table_col-boxvalue">
                        {index}
                    </h3></div>
                    <div className='pay_body-table_col-img'><img src={item.img} alt='photo' /></div>
                    <div><h3 className="pay_body-table_col-boxvalue pay_body-table_col-name">
                        {item.name}
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue">
                        {item.id}
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue">
                       2
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue pay_body-table_col-price">
                       20000
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue">
                        40
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue pay_body-table_col-time">
                        12h30 pm
                    </h3></div>
                    <div><h3 className="pay_body-table_col-boxvalue pay_body-table_col-price">
                        40000000
                    </h3></div>
                    <div>
                        <input
                            type="checkbox" 
                            className="pay_checkbox"
                            id={`pay_checkbox-${index}`}
                        />
                    </div>

                </label>
            ))
        )
    }
    return (
        <div className="Pay ">
            {
                showPay &&
                <>
                    <input
                        type="checkbox"
                        defaultChecked="true"
                        className="check_overlay"
                        id='check_overlay'
                        hidden={true}
                    />
                    <div className="overlay" htmlFor='check_overlay'></div>
                    <div className="pay-box">
                        <div className="pay-box_title">
                            <h3><i className='ti-tablet'></i> Bàn 1:</h3>
                            <button
                                className="pay-box_btnBack"
                                onClick={hide}
                            >
                                <i className="ti-back-right"></i>
                                Trở về
                            </button>
                        </div>
                        <div className="pay-box_body">
                            <div className="pay-box_body-top">
                                <div className='pay-box_body-title'>
                                    {
                                        namelists.map((item, index) => (
                                            <span key={index}>
                                                <h3>{item}</h3>
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className='pay-box_body-table'>
                                    <ListPay lists={lists}/>
                                </div>
                            </div>
                            <div className="pay-box_body-bottom">
                                <div className="pay-box_bottom-left">
                                    <div className="pay-box_bottom-box">
                                        <div className="pay-box_bottom-item">
                                            <h2 className="pay-box_bottom-title">Tổng tiền (VNĐ):</h2>
                                            <span>120000</span>
                                        </div>
                                        <div className="pay-box_bottom-item">
                                            <h2 className="pay-box_bottom-title">Chiết khấu (%):</h2>
                                            <input type="number" defaultValue="0"/>
                                        </div>
                                    </div>
                                    <div className="pay-box_bottom-box">
                                        <div className="pay-box_bottom-item">
                                            <h2 className="pay-box_bottom-title">Tổng tiền thanh toán (VNĐ):</h2>
                                            <span>120000</span>
                                        </div>
                                        <div className="pay-box_bottom-item">
                                            <h2 className="pay-box_bottom-title">Tổng tiền chiết khấu (VNĐ):</h2>
                                            <span>120000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pay-box_bottom-right">
                                    <div className="pay-box_bottom-right_item">
                                        <button onClick={hide}>Tạm tính</button>
                                    </div>
                                    <div className="pay-box_bottom-right_item">
                                        <button onClick={handlePay, hide}>In hóa đơn</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Pay