import React, { Component } from 'react'
import { NavBar,TabBar } from 'antd-mobile'
import Home1 from './Home1'
import Idea from './Idea'
import Shop from './Shop'

export default class Apphome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: false,
        };
    }
    render() {
        return (
            <div>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="首页"
                            key="Home"
                            icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: "url("+require('../images/zhu.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: "url("+require('../images/zhu.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            }}
                            data-seed="logId"
                        >
                        <Home1/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: "url("+require('../images/ling.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: "url("+require('../images/ling.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            title="灵感"
                            key="linggan"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            }}
                            data-seed="logId1"
                        >
                            <Idea/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: "url("+require('../images/shang.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: "url("+require('../images/shang.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            title="商城"
                            key="shop"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            }}
                        >
                            <Shop/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                            background: "url("+require('../images/my.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                            width: '22px',
                            height: '22px',
                            background: "url("+require('../images/my.png')+") center center /  21px 21px no-repeat" }}
                            />
                            }
                            title="我的"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            }}
                        >
                            {/* <Me/> */}
                        </TabBar.Item>
                        </TabBar>
                </div>
            </div>
        )
    }
}
