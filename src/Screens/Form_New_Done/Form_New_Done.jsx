import React from 'react';
import { Button } from 'antd';

import ProgressBar from '../../Components/ProgressBar';

import LayoutComponent from '../../Layout';
import './Form_New_Done.scss';
const Form_New_Done = () => {
	return (
		<div id='done'>
			<ProgressBar percent={100} />
			<h1 className='choose mt-4'>Your form has been created and you can start collecting donations now.</h1>
			<h3 className='interactive mt-4'>
				Share this URL: <br />
				https://ngo.trackact.org/do/zvlr4L
			</h3>
			<Button type='primary' className='mt-4'>
				Open form settings
			</Button>
		</div>
	);
};

export default Form_New_Done;
