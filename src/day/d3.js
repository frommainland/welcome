import React from 'react';
import styles from './d3.module.css'
import { motion } from "framer-motion"


export default function D3() {
    return (
        <div style={{ height: '100vh' }}>
            <div className={styles.topWrap}>
                <img className={styles.logo} src={require('../images/innovationStudio-logo-white.svg')} />
                <div className={styles.fiveElements}>
                    <img src={require('../images/metal.svg')} />
                    <img src={require('../images/wood.svg')} />
                    <img src={require('../images/water.svg')} />
                    <img src={require('../images/fire.svg')} />
                    <img src={require('../images/earth.svg')} />

                </div>
            </div>
            <div className={styles.marquee}>
                <div className={styles.short}>
                    <h1>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span></h1>
                    <h1>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span>&emsp;欢迎各位同事莅临参观&emsp;<span>⁕</span></h1>
                </div>
                <div className={styles.long}>
                    <h3>&emsp;VISA INNOVATION STUDIO BEIJING. INNOVATE WITH VISA. Discover, design and develop the future of commerce and payments together.&emsp;</h3>
                    <h3>&emsp;VISA INNOVATION STUDIO BEIJING. INNOVATE WITH VISA. Discover, design and develop the future of commerce and payments together.&emsp;</h3>
                </div>
            </div>
            <ul className={styles.botWrap}>
                <li>
                    {/* <img src={require('../images/old/fire.svg')} /> */}
                </li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
            </ul>
        </div >
    )
}