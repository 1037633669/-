import React, { Component } from 'react';
import refresh from '../../img/refresh.png'
import leftArrow from '../../img/leftArrow.png'
import rightArrow from '../../img/rightArrow.png'
import Reather from './weather';
import { getArticleList } from "../api/api";
import './index.css'

class Pageone extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    clickdom: true,//判断是否点击刷新按钮
    city: ['wuhan', 'shanghai', 'beijing'],//城市列表
    citynum: 0,//切换时对城市的计算
    citydata: {},// 获取到的城市天气数据
  }
  // 点击刷新按钮事件
  activateLasers (value) {
    this.state.clickdom = !this.state.clickdom
    // 接口请求
    getArticleList(value).then(
      (res) => {
        this.state.citydata = res.message[0]
        this.setState({
          citydata: this.state.citydata,
          clickdom: this.state.clickdom
        })
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
  // 左右翻页按钮
  pageTurning (value) {
    if (value === 'left') {
      if (this.state.citynum === 0) {
        this.setState({
          citynum: 2
        })
      } else {
        this.setState({
          citynum: this.state.citynum - 1
        })
      }
    } else {
      if (this.state.citynum === 2) {
        this.setState({
          citynum: 0
        })
      } else {
        this.setState({
          citynum: this.state.citynum + 1
        })
      }
    }
    this.setState({
      clickdom: true
    })
  }
  render () {
    return (
      <div className='body'>
        <p className='cityname'>{this.state.city[this.state.citynum]}</p>
        <div className='citycontent'>
          <img className='cityimg' src={leftArrow} onClick={() => this.pageTurning('left')}></img>
          {
            this.state.clickdom ? (
              <div className='citydiv'>
                <img className='cityimg1' src={refresh} onClick={() => this.activateLasers(this.state.city[this.state.citynum])}>
                </img>
              </div>
            ) : (
                <Reather data={this.state.citydata}></Reather>
              )
          }
          <img className='cityimg' src={rightArrow} onClick={() => this.pageTurning('right')}></img>
        </div>
      </div>
    );
  }
}
export default Pageone;