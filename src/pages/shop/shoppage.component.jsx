import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/coleection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...rest }) => (
					<CollectionPreview key={id} {...rest} />
				))}
			</div>
		);
	}
}

export default ShopPage;