import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Image from 'react-bootstrap/Image';

import ProgressBar from '../../Components/ProgressBar';
import RaiseMoney from '../../Components/RaiseMoney';
import DonationModal from '../../Components/DonationModal';
import CountableModal from '../../Components/CountableModal';

import './Form_New_Projects_Added.scss';
const Form_New_Projects_Added = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isCountModalVisible, setIsCountModalVisible] = useState(false);
	return (
		<div id='added'>
			<ProgressBar percent={40} />
			<RaiseMoney heading={'What do you want to raise money for with the form?'} to='/form-new-contact' />
			<p className='donation mt-2'>New donation project</p>
			<Row gutter={20}>
				<Col md={7}>
					<div className='box' onClick={() => setIsModalVisible(true)}>
						<div className='d-flex justify-content-between align-items-center'>
							<div>
								<h1 className='simple'>
									Simple donation <br /> topic
								</h1>
								<p className='general'>General topic without tying donations to quantities</p>
							</div>
							<div className='plus d-flex justify-content-center align-items-center'>
								<PlusOutlined />
							</div>
						</div>
					</div>
					<DonationModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
				</Col>
				<Col md={7}>
					<div className='box' onClick={() => setIsCountModalVisible(true)}>
						<div className='d-flex justify-content-between align-items-center'>
							<div>
								<h1 className='simple'>Countable project topic</h1>
								<p className='general'>
									Tie your project to a crowd <br /> (e.g., plant trees)
								</p>
							</div>
							<div className='plus d-flex justify-content-center align-items-center'>
								<PlusOutlined />
							</div>
						</div>
					</div>
					<CountableModal isModalVisible={isCountModalVisible} setIsModalVisible={setIsCountModalVisible} />
				</Col>
				<Col md={{ span: 9, offset: 1 }}>
					<div className='box1 pb-4'>
						<div className='image-container mt-4'>
							<Image src='/images/title-2.png' alt='title-2' width='100%' height='100%' />
							<div className='content-container p-4 d-flex align-items-center justify-content-between'>
								<div>
									<h3 className='countable-project'>Countable project</h3>
									<h1 className='plant'>Plant trees</h1>
								</div>
								<Image src='/images/edit-square-white.png' alt='edit-square-white' />
							</div>
						</div>
						<div className='image-container mt-4'>
							<Image src='/images/title-2.png' alt='title-2' width='100%' height='100%' />
							<div className='content-container p-4 d-flex align-items-center justify-content-between'>
								<div>
									<h3 className='countable-project'>Countable project</h3>
									<h1 className='plant'>Plant trees</h1>
								</div>
								<Image src='/images/edit-square-white.png' alt='edit-square-white' />
							</div>
						</div>
						<div className='image-container mt-4'>
							<Image src='/images/title-2.png' alt='title-2' width='100%' height='100%' />
							<div className='content-container p-4 d-flex align-items-center justify-content-between'>
								<div>
									<h3 className='countable-project'>Countable project</h3>
									<h1 className='plant'>Plant trees</h1>
								</div>
								<Image src='/images/edit-square-white.png' alt='edit-square-white' />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Form_New_Projects_Added;
