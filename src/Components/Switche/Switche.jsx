import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import './Switche.scss';
const Switche = () => {
	return (
		<div id='switch'>
			<Switch
				size='medium'
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
				defaultChecked
			/>
		</div>
	);
};
export default Switche;
