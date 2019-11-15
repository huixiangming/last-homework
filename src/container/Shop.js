import React, { Component } from 'react'
import {NavBar, Icon,Carousel,Flex} from 'antd-mobile';

export default class Market extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'rgb(63,204,203)'}} rightContent={[<Icon key="0" type="search"/>,]}>
               商城</NavBar>
                    <Carousel
                    style={{height:'200px'}}
                    autoplay={true}
                    infinite
                    >
                   <img src={require('../images/banner2.png')}
                        style={{ width: '100%', verticalAlign: 'top',height:'200px'}}/>
                    <img src={require('../images/b.png')}
                        style={{ width: '100%', verticalAlign: 'top',height:'200px'}}/>
                </Carousel>
                <Flex>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'100px',position:'relative',left:'100px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                </Flex>
                <Flex>
                </Flex>
                <Flex>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'70px',position:'relative',left:'20px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'70%',height:'100px',position:'relative',left:'100px',top:'20px'}}src={require('../images/zhuo.png')}/></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><img style={{width:'80%',height:'150px',position:'relative',left:'30px',top:'30px'}}src={require('../images/cup.png')}/></Flex.Item>
                    <Flex.Item><img style={{width:'80%',height:'150px',position:'relative',left:'30px',top:'30px'}}src={require('../images/cup.png')}/></Flex.Item>
                </Flex>
                <Flex>
                <div style={{width:'80%',height:'150px',position:'relative',left:'30px',top:'50px'}}>
                    jaiihdih 欧式风格精细 39.99
                    </div>
                    <div style={{width:'80%',height:'150px',position:'relative',left:'30px',top:'50px'}}>
                    jaiihdih 欧式风格精细 39.99
                    </div>
                </Flex>
            </div>
        )
    }
}