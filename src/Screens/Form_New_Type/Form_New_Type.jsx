import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import ProgressBar from '../../Components/ProgressBar';

import LayoutComponent from '../../Layout';
import './Form_New_Type.scss';
const Form_New_Type = () => {
	return (
		<div id='type'>
			<ProgressBar percent={30} />
			<h1 className='choose mt-4'>Choose formular type</h1>
			<div className='box mt-4'>
				<Link to='/form-new-projects-added'>
					<Image src='/images/box-image.png' alt='box image' />
					<h3 className='interactive mt-4'>Interactive donation form</h3>
					<p className='state'>- State-of-the-art design for your fundraising.</p>
					<p className='state'>- Very easy and without programming.</p>
					<p className='state'>- Interactive features like map and impact graphics.</p>
					<p className='technical'>
						Free - for our technical effort we charge 1.5% fee (excl. transaction fees) and deduct it
						directly from the donation amount.{' '}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Form_New_Type;
