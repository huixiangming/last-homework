import React, { Component } from 'react';
import { Tabs, Flex,NavBar, Icon } from 'antd-mobile';

export default class Home extends Component {
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '冬季' },
      { title: '宜家' },
      { title: '推荐' },
      { title: '冬季' },
      { title: '宜家' },
    ];
    return (
      <div>
           <NavBar style={{backgroundColor:'rgb(63,204,203)'}} rightContent={[<Icon key="0" type="search"/>,]}>
               灵感</NavBar>
        <Tabs tabs={tabs} initialPage={0}>
            <div>
              <Flex>
                  <Flex.Item><img style={{width:'90%',position:'relative',left:'20px',top:'20px'}} src={require('../images/big.png')}/></Flex.Item>
                  <Flex.Item><img style={{width:'90%',position:'relative',light:'20px',top:'20px'}}src={require('../images/big.png')}/></Flex.Item>
              </Flex>
            <Flex>
            <Flex.Item><img style={{width:'90%',position:'relative',left:'20px',top:'20px'}} src={require('../images/big.png')}/></Flex.Item>
                  <Flex.Item><img style={{width:'90%',position:'relative',light:'20px',top:'20px'}}src={require('../images/big.png')}/></Flex.Item>
            </Flex>
            <Flex>
            <Flex.Item><img style={{width:'90%',position:'relative',left:'20px',top:'20px'}} src={require('../images/big.png')}/></Flex.Item>
                  <Flex.Item><img style={{width:'90%',position:'relative',light:'20px',top:'20px'}}src={require('../images/big.png')}/></Flex.Item>
            </Flex>
        </div>
        </Tabs>
      </div>
    );
  }
}