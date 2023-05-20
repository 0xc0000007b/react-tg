import React from 'react';
import './styles/header.scss'
import '../../App.scss'
import {useTelegram} from "../../assets/hooks/useTelegram";

const Header = () => {
    const {tg} = useTelegram()
    return (
            <div>
                <nav>
                    <div className="nav">
                        <div className="container">
                            <div className="nav-row">

                            <div className="hamburger"><i className="fa fa-bars"></i></div>
                                <a href="/" className="user"><span>{tg.initDataUnsafe?.user?.first_name}</span><i className="fa fa-user"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

    );
};

export default Header;
