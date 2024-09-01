import SelectUser from '../../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles['header']}>
			<div className="logo"><img src="../../../public/Personal Journal.svg" alt="logo" /></div>
			<SelectUser/>
		</header>
	);
}
 
export default Header;