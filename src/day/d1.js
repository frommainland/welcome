import React from 'react';
import './d1.css'

export default function D1() {
    return (
        <div className="d1">
            <div className="topWrap">
                <h1>欢迎各位同事莅临参观 <br />Visa中国创新中心</h1>
            </div>
            <div className='botWrap'>
                <img src={require('../images/innovationStudio-logo.svg')} />
            </div>
        </div>
    )
}