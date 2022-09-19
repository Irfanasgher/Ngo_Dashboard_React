import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';

import './RaiseMoney.scss';
const RaiseMoney = ({ heading, to }) => {
	const history = useHistory();
	return (
		<div id='raiseMoney'>
			<div className='d-flex justify-content-between align-items-center w-100'>
				<h1 className='choose mt-4'>{heading}</h1>
				<div className='d-flex align-items-center'>
					<p
						className='back'
						onClick={() => {
							history.goBack();
						}}>
						back
					</p>
					<Link to={to}>
						<Button type='primary' className='ml-4'>
							Next
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RaiseMoney;
