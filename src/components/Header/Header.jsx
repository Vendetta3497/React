import { useCallback, useState } from 'react';
import SelectUser from '../../SelectUser/SelectUser';
import Button from '../Button/Button';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

function Header() {

	const logos = ['/Personal Journal.svg', 'images.png'];

	const [stateLogo, setStateLogog] = useState(logos[0]);

	const logoToggle = useCallback(() => {
		setStateLogog(state => Number(!state));
	}, []);


	return (
		<header className={styles['header']}>
			<Logo image={logos[stateLogo]}/>
			<Button onClick={logoToggle}>Change Logo</Button>
			<SelectUser/>
		</header>
	);
}
 
export default Header;