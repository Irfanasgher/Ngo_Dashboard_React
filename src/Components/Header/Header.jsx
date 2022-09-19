import React from 'react';
import { Layout } from 'antd';
import Image from 'react-bootstrap/Image';
import { MenuOutlined } from '@ant-design/icons';

import './Header.scss';

const Header1 = ({ onClick, collapsed, formText }) => {
	const { Header } = Layout;
	return (
		<div id='header'>
			<Header className='site-layout-background' style={{ padding: 0 }}>
				<div className='d-flex align-items-center'>
					{React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
						className: 'trigger',
						onClick: onClick
					})}
					<div className='ml-3 d-flex justify-content-between align-items-center' style={{ width: '92%' }}>
						<div>
							<p className='donatoin'>Donation forms</p>
							<p className='forms'>{formText}</p>
						</div>
						<div className='d-flex align-items-center'>
							<Image src='/images/chat.png' />
							<Image src='/images/notification.png' className='ml-3' />
							<Image src='/images/user.png' className='ml-3' />
						</div>
					</div>
				</div>
			</Header>
		</div>
	);
};
export default Header1;
