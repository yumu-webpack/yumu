import React from 'react';

import Footer from '../../component/footer';

import changeState from '../../redux/changeState.js';
import actionCreater from '../../redux/action.js';

import './home.scss';

class Home extends React.Component {
  constructor(props){
    super(props);
    changeState(actionCreater('HOME'));
    this.state = {
       a:1
    };
  }
  render() {
    console.log(111);
    const { tempState } = this.state;
    return (
      <div>
        <div className="home">首页Home111</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
