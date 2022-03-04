import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { ToastContainer, toast } from 'react-toastify';

import './style.css'
import Pay from '../pays/Pay'
import useModal from '../pays/useModal'
import 'react-toastify/dist/ReactToastify.css';
import config from '../../_config'

const namelists = ['STT', 'Hình ảnh', 'Tên món', 'Mã món', 'Số lượng', 'Đơn giá (VNĐ)', 'Chiết khấu (%)', 'Giờ vào', 'Thành tiền (VNĐ)', 'Thao tác']
const products = [
    {
        id: '1',
        name: 'Trà đào cam sả',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    },
    {
        id: '2',
        name: 'Trà đào',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    },
    {
        id: '3',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    },
    {
        id: '4',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    },
    {
        id: '5',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    },
    {
        id: '5',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    }
    , {
        id: '6',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    }, {
        id: '7',
        name: 'Nâu đá',
        img: 'https://tinhayvip.com/wp-content/uploads/2022/01/eimi-fukada-khoe-nhan-cuoi-khien-nhieu-anh-em-vun-vo-1.jpg',
        price: '20000',
    }
]

function Order() {
    const port = config()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const idB = query.get("idB")

    let numberClickNext = 0
    const [countNext, setCountNext] = useState(1)
    const [tabCate, setTabcate] = useState('1')
    const [tabNext, setTabNext] = useState(0)
    const [getCategorys, setGetCategorys] = useState([])
    const [getProduct, setGetProduct] = useState([])
    const [listOrder, setListOrder] = useState([])

    
    useEffect(() => {
        const api = port + "/orders?idB=" + idB
        fetch(api)
            .then(res => res.json())
            .then(datas => {
                setListOrder(datas)
            })
    }, [tabCate])


    useEffect(() => {
        const api = port + "/products?idc=" + tabCate
        fetch(api)
            .then(res => res.json())
            .then(datas => {
                setGetProduct(datas)
            })
    }, [tabCate])

    useEffect(() => {
        const api = port + "/categorys"
        fetch(api)
            .then(res => res.json())
            .then(datas => {
                setGetCategorys(datas)
            })
    }, [])
    numberClickNext = getCategorys.length / 4

    const handlePrev = () => {
        if (tabNext < 0) {
            setTabNext(tabNext + 400)
            setCountNext(countNext - 1)
        }
    }
    const handleNext = () => {
        if (countNext < numberClickNext) {
            setTabNext(tabNext - 400)
            setCountNext(countNext + 1)
        }
    }

    const { showPay, handleShowPay } = useModal()

    const notify = (name) =>
        toast.success(`Xóa sản phẩm ${name} thành công!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    function ListOrder({lists}) {
        return (
            lists.map((item, index) => (
                <tr key={index} className="list_order-table_col">
                    <td><h3 className="list_order-table_col-boxvalue">
                        {index + 1}
                    </h3></td>
                    <td>
                        <span className="list_order-table_col-boximg">
                            <img src={item.img} alt='photo' />
                        </span>
                    </td>
                    <td><h3 className="list_order-table_col-boxvalue list_order-table_col-name">
                        {item.name}
                    </h3></td>
                    <td><h3 className="list_order-table_col-boxvalue">
                        {item.id}
                    </h3></td>
                    <td>
                        <input className='list_order-table_col-number'
                            defaultValue={item.amount}
                            type="number"
                            min="0"
                        /></td>
                    <td><h3 className="list_order-table_col-boxvalue list_order-table_col-price">
                        {item.price}
                    </h3></td>
                    <td>
                        <input className='list_order-table_col-discount'
                            defaultValue={item.discount}
                            type="number"
                        />
                    </td>
                    <td><h3 className="list_order-table_col-boxvalue list_order-table_col-time">
                        {item.timeIn}
                    </h3></td>
                    <td><h3 className="list_order-table_col-boxvalue list_order-table_col-price">
                        {item.totalPrice}
                    </h3></td>
                    <td>
                        <div className="operation-order">
                            <span className="operation-order_close"
                                onClick={() => notify(item.name)}
                            >
                                <i className='ti-close'>
                                </i>
                            </span>
                        </div>
                    </td>
                </tr>
            ))
        )
    }

    return (
        <div className="order_main">
            <div className="order_header">
                <Link to="/" className="order_header-link">
                    <i className="ti-home order_header-link_icon"></i>
                    Trang chủ
                </Link>
                <i className="order_header-icon">/</i>
                <Link to="/order" className="order_header-link">
                    Bàn {idB}
                </Link>
            </div>
            <div className="grid">
                <div className="row order_body">
                    <div className="col l-10">
                        <div className='order_body-left'>
                            <div className='order_body-list_order'>
                                <div className='list_order-table_tile'>
                                    {
                                        namelists.map((item, index) => (
                                            <span key={index}>
                                                <h3>{item}</h3>
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="list_order-table_body">
                                    <table className="list_order-table">
                                        <tbody>
                                            <ListOrder
                                                lists={listOrder}
                                                
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='order_body-list_product'>
                                <div className="order-list_product-header">
                                    <h2 className="order-list_product-header_name"><i className='ti-align-justify'></i> Danh mục thức uống</h2>
                                    <div className='order-list_product-header_search'>
                                        <i className='ti-search'></i>
                                        <input className=""
                                            placeholder='Nhập để tìm món'
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="order-list_product-body">
                                    <div className="order-list_product-tabs_left"
                                        onClick={handlePrev}
                                    >
                                        <i className='ti-angle-left'></i>
                                    </div>
                                    <ul className="order-list_product-tabs">
                                        {
                                            getCategorys.map(item => (
                                                <li key={item.id}
                                                    className="order-list_product-item"
                                                    style={{
                                                        transform: `translateX(${tabNext}%)`,
                                                        transition: 'transform .3s linear 0s'
                                                    }}
                                                >
                                                    <span
                                                        className={clsx('order-list_product-btn',
                                                            tabCate === item.id ? {
                                                                'order-list_product-btn_active': true
                                                            } : {
                                                                'order-list_product-btn_active': false
                                                            }
                                                        )}
                                                        onClick={() => setTabcate(item.id)}
                                                    >
                                                        <i><FontAwesomeIcon icon="fa-solid fa-champagne-glasses" /></i>
                                                        {item.name}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="order-list_product-tabs_right"
                                        onClick={handleNext}
                                    >
                                        <i className='ti-angle-right'></i>
                                    </div>
                                    <div className="order-list_product-listProduct">
                                        {
                                            getProduct.map((item, index) => (
                                                <button
                                                    key={index}
                                                    className="order-list_product-listProduct_btn">
                                                    <h4>
                                                        {item.name}
                                                    </h4>
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-2">
                        <ul className="order_right">
                            <li className="order_right-item order_rigth-boxshardow">
                                <button className="order_right-link ">
                                    <h3>Cập nhật</h3>
                                </button>
                            </li>
                            <li className="order_right-item order_rigth-boxshardow">
                                <Link to="/" className="order_right-link">
                                    <h3>Chuyển bàn</h3>
                                </Link>
                            </li>
                            <li className="order_right-item">
                                <h3 className="order_right-item_tile">Chiết khấu (%):</h3>
                                <input type="number" defaultValue="20" />
                            </li>
                            <li className="order_right-item">
                                <h3 className="order_right-item_tile">Tổng tiền (VNĐ):</h3>
                                <input readOnly={true} defaultValue="200000" />
                            </li>
                            <li className="order_right-item order_rigth-boxshardow">
                                <button
                                    className="order_right-link "
                                    onClick={handleShowPay}
                                >
                                    <h3>Thanh toán</h3>
                                </button>
                            </li>
                            <li className="order_right-item order_rigth-boxshardow">
                                <button className="order_right-link ">
                                    <h3>Báo chế biến</h3>
                                </button>
                            </li>
                            <li className="order_right-item order_rigth-boxshardow">
                                <Link to="/" className="order_right-link">
                                    <h3>Về trang chủ</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                <Pay
                    showPay={showPay}
                    hide={handleShowPay}
                    lists={products}
                />
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

export default Order