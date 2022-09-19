import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Table, Input } from 'antd';
import Image from 'react-bootstrap/Image';
import Switche from '../../Components/Switche';

import { SearchOutlined } from '@ant-design/icons';

import './Table.scss';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name'
	},
	{
		title: 'Formnumber',
		dataIndex: 'number'
	},
	{
		title: 'Revenue',
		dataIndex: 'revenue'
	},
	{
		title: 'Number of donors',
		dataIndex: 'donors'
	},
	{
		title: 'Status',
		dataIndex: 'status',
		render: () => {
			return <Switche />;
		}
	},
	{
		title: 'Actions',
		dataIndex: 'action',
		render: () => {
			return (
				<div className='d-flex align-items-center'>
					<Image src='/images/edit.png' alt='add icon' />
					<Image src='/images/add-item-alt.png' alt='add icon' className='ml-3' />
				</div>
			);
		}
	}
];

const data = [
	{
		key: '1',
		name: 'Allgemeines Formular',
		number: '338844',
		revenue: '3’625 CHF',
		donors: '29'
	},
	{
		key: '2',
		name: 'Gorillas retten ',
		number: '7737322',
		revenue: '10’387 CHF',
		donors: '59'
	},
	{
		key: '3',
		name: 'SocialMediaFormular',
		number: '3372732',
		revenue: '11’293 CHF',
		donors: '132'
	},
	{
		key: '4',
		name: 'SocialMediaFormular',
		number: '3372732',
		revenue: '11’293 CHF',
		donors: '132'
	},
	{
		key: '5',
		name: 'SocialMediaFormular',
		number: '3372732',
		revenue: '11’293 CHF',
		donors: '132'
	},
	{
		key: '6',
		name: 'SocialMediaFormular',
		number: '3372732',
		revenue: '11’293 CHF',
		donors: '132'
	},
	{
		key: '7',
		name: 'SocialMediaFormular',
		number: '3372732',
		revenue: '11’293 CHF',
		donors: '132'
	}
];

const itemRender = (current, type, originalElement) => {
	if (type === 'prev') {
		return <a style={{ textAlign: 'left' }}>back</a>;
	}
	if (type === 'next') {
		return <a>forward</a>;
	}
	return originalElement;
};
const Table1 = () => {
	return (
		<div id='table'>
			<div className='d-flex justify-content-between align-items-center'>
				<h1></h1>
				<div>
					<Link to='/form-new-type'>
						<Button type='primary'>New form</Button>
					</Link>
					<Image src='/images/add-item-alt.png' alt='add icon' className='ml-3' />
				</div>
			</div>
			<div className='d-flex justify-content-between align-items-center mt-4'>
				<Input
					size='large'
					placeholder='Suchen'
					prefix={<SearchOutlined />}
					style={{ width: '20%', borderRadius: '50px' }}
				/>
				<div className='d-flex align-items-center'>
					<p className='text'>Seite</p>
					<p className='number ml-3'>1</p>
					<p className='text ml-3'>Einträge</p>
					<p className='number ml-3'>3</p>
				</div>
			</div>
			<Table
				columns={columns}
				dataSource={data}
				bordered
				className='mt-3'
				// pageSize={2}
				pagination={{ pageSize: 3, itemRender: itemRender }}
			/>
		</div>
	);
};
export default Table1;
