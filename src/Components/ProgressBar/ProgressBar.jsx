import React from 'react';
import { Progress } from 'antd';
import './ProgressBar.scss';

const ProgressBar = ({ percent }) => {
	return (
		<div id='progress'>
			<div style={{ width: '30%' }}>
				<Progress percent={percent} />
			</div>
		</div>
	);
};
export default ProgressBar;
