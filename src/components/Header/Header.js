import React from 'react';
import Searchbar from '../UI/Searchbar/Searchbar';
import styles from './Header.module.css';
import withMousePosition from '../../hoc/withMousePosition';

function Header(props) {
	return (
		<header className={`${styles.header}`}>
			<div className='text-primary'>
			{props.mouseX}
			<br />
			{props.mouseY}
			</div>
			{props.children}
		</header>
	);
}

export default withMousePosition(Header);
