import React, {Component} from 'react'
import {NavBar} from 'antd-mobile';
import {Carousel,Flex} from 'antd-mobile';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'rgb(63,204,203)'}}>
               住吧家居</NavBar>
                <Carousel
                    style={{height:'200px'}}
                    autoplay={true}
                    infinite
                    >
                        <img src={require('../images/banner.png')}
                            style={{width:'100%', height:'200px'}}/>
                         <img src={require('../images/b.png')}
                            style={{width:'100%',height:'200px' }}/>
                        <img src={require('../images/banner2.png')}
                            style={{width:'100%',height:'200px' }}/>
                </Carousel>
                <Flex>
                    <Flex.Item><img style={{width:'90%',height:'130px',position:'relative',left:'20px',top:'15px'}}src={require('../images/a.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'90%',height:'130px',position:'relative',left:'10px',top:'15px'}}src={require('../images/a.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'90%',height:'130px',position:'relative',top:'15px'}}src={require('../images/a.png')}/></Flex.Item>
                </Flex>
                <h2>热门推荐</h2>
                <img src={require('../images/b.png')}
                style={{ width: '100%', verticalAlign: 'top',height:'200px' }}/>
            </div>
        )
    }
}