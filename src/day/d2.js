import React from 'react';
import styles from './d2.module.css'

export default function D2() {
    return (
        <div style={{ height: '100vh' }}>
            <div className={styles.topWrap}>
                <h1>欢迎各位同事莅临参观 <br />Visa中国创新中心</h1>
            </div>
            <div className={styles.botWrap}>
                <img src={require('../images/innovationStudio-logo.svg')} />
            </div>
        </div>
    )
}