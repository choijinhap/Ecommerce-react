import React from 'react';
import './collection-preview.style.scss';

const PREVIEW_ITEM_NUM = 4;
const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < PREVIEW_ITEM_NUM)
				.map((item) => (
					<div key={item.id}>{item.name}</div>
				))}
		</div>
	</div>
);

export default CollectionPreview;
