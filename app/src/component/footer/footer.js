import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import store from '../../redux/store.js';

import './footer.scss';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  showClick() {
    console.log("yanhongweishabi");
  }
  render() {
    const state = store.getState();
    return (
      <ul className="footer">
        <li><Link className={state == 'home' ? 'active' : ''} to="/">首页</Link></li>
        <li><Link className={state == 'list' ? 'active' : ''} to="/list">分类</Link></li>
        <li><Link className={state == 'shopCar' ? 'active' : ''} to="/shopCar">购物车</Link></li>
        <li><Link className={state == 'my' ? 'active' : ''} to="/my">我的</Link></li>
      </ul>
    );
  }
}

export default Footer;
