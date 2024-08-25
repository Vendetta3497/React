import styles from './Header.module.css';

function Header() {
 
	return (
		<header className={styles.header}>
			<div className="logo"><img src="../../../public/Personal Journal.svg" alt="logo" /></div>
		</header>
	);
}
 
export default Header;