import './warning.less';
import '../header.less';

import {Icon} from 'com/ui';

export default function HeaderWarning( props ) {
	let {root} = props;

	if ( root && root.meta && root.meta.message ) {
		return (
			<section class="header -warning outside">
				<Icon baseline small src="warning" />
				{root.meta.message}
			</section>
		);
	}

	return null;
}
