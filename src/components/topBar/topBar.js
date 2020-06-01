import React from 'react'
import './topBar.css'
import Logo from './logo.png'
import {Link} from 'react-router-dom'

const TopBar = () => (
    <div className={'top-bar-wrapper'}>
        <div className={'top-bar'}>
            <div className={'container'}>
                <Link to="/">
                    <div className={'logo'}>
                        <img src={Logo} alt={'logotype'} className={'logo-img'}/>
                        <div className={'logo-title'}>
                            Cook together
                        </div>
                    </div>
                </Link>
                <form action="/search" method="get" className="top-bar-form">
                    <input name="query"  type="text" placeholder="Dish or ingredient name"/>
                    <button type="submit">🔎</button>
                </form>
            </div>
        </div>
    </div>
);
export default TopBar;