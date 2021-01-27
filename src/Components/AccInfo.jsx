import React,{useState} from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'

const AccInfo = ({item}) => {
    const [plus, setPlus] = useState(false)
    return (
        <>
         <main>
                <div className="accordian__box">
                    <div className="d-flex">
                        <h4 className="title">{item.title}</h4>
                        <button onClick={()=> setPlus(!plus)}>{plus ?<FaMinus/> : <FaPlus/>}</button>
                    </div>
                    {
                        plus && (<div className="content">
                        <p>{item.des}</p>
                        </div>)
                    }
                </div>
        </main>   
        </>
    )
}

export default AccInfo
