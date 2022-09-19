import React, { useState } from 'react';
import SideNav from './../Components/SideNav';
import Header from './../Components/Header';

import { Layout } from 'antd';

import './Layout.scss';

const { Content } = Layout;

const Layout1 = (props) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div id='layout'>
			<Layout>
				<SideNav collapsed={collapsed} />
				<Layout className='site-layout'>
					<Header collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} formText={props.text} />
					<Content
						className='site-layout-background'
						style={{
							margin: '24px 16px',
							paddingRight: 24,
							paddingLeft: 24,
							paddingbottom: 24
						}}>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};
export default Layout1;
