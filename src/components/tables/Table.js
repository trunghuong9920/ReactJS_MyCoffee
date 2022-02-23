import { useState} from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './style.css'

const tablesYard = [
    {
        name:'A1',
        status: true
    },
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }
    ,
    {
        name:'A2',
        status: false
    },
    {
        name:'A3',
        status: false
    }

]
const tablesFloor1 = [
    {
        name:'B1',
        status: false
    },
    {
        name:'B2',
        status: false
    },
    {
        name:'B3',
        status: true
    },
    {
        name:'B4',
        status: false
    },{
        name:'B5',
        status: true
    }
]
const tablesFloor2 = [
    {
        name:'D1',
        status: true
    },
    {
        name:'D2',
        status: false
    }
]
const tabs = [
    {
        id: 0,
        name: 'Ngoài sân',
        nameE: tablesYard,
    },
    {
        id: 1,
        name: 'Tầng 1',
        nameE: tablesFloor1,
    }, {
        id: 2,
        name: 'Tầng 2',
        nameE: tablesFloor2,
    }
]

function Table() {
    const [positon, setPosition] = useState(tablesYard)
   
    return (
        <div className="table-main">
            <ul className='tabbar-top'>
                {tabs.map(tab => (
                    <li className='tabbar_item' key={tab.id}>
                        <button
                            className={clsx('tabbar_link',
                                positon === tab.nameE ? {
                                    'tabbar_link-active':true
                                    
                                } : 
                                {
                                    'tabbar_link-active':false
                                }
                            )}
                            
                            onClick={() => setPosition(tab.nameE)}
                        >
                            {tab.name}
                            <i className="tabbar_link-icon"> 
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                            </i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="table-body">
                <div className="table-body_container">
                {
                    positon.map((item, index) => (
                        
                        <div  key={index}  className={clsx('table_box', 'tableNoempty', {
                            'tableempty':item.status,
                        })}>
                            <Link className="table_box-link"to={`/order?idB=${item.name}`}>{item.name}</Link>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Table