import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PREVIEW_ITEM_NUM = 4;
const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < PREVIEW_ITEM_NUM)
				.map((item) => (
					// <div key={item.id}>{item.name}</div>
					<CollectionItem key={item.id} {...item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
