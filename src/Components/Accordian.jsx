import React from 'react'
import './Accordian.css';
import data from './data';
import AccInfo from './AccInfo';

const Accordian = () => {
    return (
        <>
            <section className="accordian__area">
                <div className="accordian__info">
                    {
                        data.map((item) => <AccInfo item = {item}/>)
                    }
                </div>
            </section>
        </>
    )
}

export default Accordian
