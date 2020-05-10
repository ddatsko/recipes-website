import React from 'react'
import './topBar.css'
import Logo from './logo.png'

const TopBar = () => (
    <div className={'top-bar-wrapper'}>
        <div className={'top-bar'}>
            <div className={'container'}>
                <div className={'logo'}>
                    <img src={Logo} alt={'logotype'} className={'logo-img'}/>
                    <div className={'logo-title'}>
                        Cook together
                    </div>
                </div>
                <form action={'#'} className={'search-form'}>
                    <input type={'text'} placeholder={'Dish or ingredient name'}/>
                    <button type={'submit'}>🔎</button>
                </form>
            </div>
        </div>
    </div>
);
export default TopBar;