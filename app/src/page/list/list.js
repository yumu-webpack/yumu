import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '../../component/footer';

import changeState from '../../redux/changeState.js';
import actionCreater from '../../redux/action.js';

import './list.scss';

class List extends React.Component {
  constructor(props){
    super(props);
    changeState(actionCreater('LIST'));
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div className="list">列表页面List</div>
        <Footer />
      </div>
    );
  }
}

export default List;
