import React, {Component} from 'react';
import '../Global/Global.css';
import Facebook from '../../assets/Icons/Facebook.png';
import Twitter from '../../assets/Icons/Twitter.png';
import Pinterest from '../../assets/Icons/Pinterest.png';
import Instagram from '../../assets/Icons/Instagram.png';
import Logo from '../../assets/Icons/CTS Logo.png';
import Search from '../../assets/Icons/Search.png';
import SignIn from '../../assets/Icons/Sign In.png';
import Shopping from '../../assets/Icons/Shopping Bag.png';
import Nav from '../Nav/Nav';


class Header extends Component{
    render(){
        return(
            <div>
                <div id='deal_var' className='flex-ctr-row black_b_white_txt'>
                    Free shipping for US orders over $75
                </div>

                <div id='social_nav' className='social'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/calledtosurf' title='Called to Surf on Facebook'><img src={Facebook}/></a>
                        </li>

                        <li>
                            <a href='https://twitter.com/calledtosurf' title='Called to Surf on Twitter'><img src={Twitter}/></a>
                        </li>  

                        <li>
                            <a href='https://www.pinterest.com/calledtosurf' title='Called to Surf on Pinterest'><img src={Pinterest}/></a>
                        </li>  

                        <li>
                            <a href='https://www.instagram.com/calledtosurf' title='Called to Surf on Instagram'><img src={Instagram}/></a>
                        </li>
                    </ul>
                </div>

                <div id='main_nav'>
                    <div>
                        <a>
                            <img src={Search}/>
                        </a>
                    </div>
                    <div className='flex-ctr-row'>
                        <img src={Logo}></img>
                    </div>
                    <div>
                        <a>
                            <img src={SignIn}/>
                        </a>
                        <a>
                            <img src={Shopping}/>
                        </a>
                    </div>
                </div>

                <div id='product_nav' className='flex-ctr-row'>
                    <Nav/>
                </div>
            </div>
        )
    }
}

export default Header