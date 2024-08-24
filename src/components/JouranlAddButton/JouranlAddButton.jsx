import CardButton from '../CardButton/CardButton';
import './JouranlAddButton.css';

function JouranlAddButton() {
 
	return (
		<CardButton className='journal-add'><img className='logo-img' src="../public/Frame.svg" alt="PLus" /><div className='wrapper-add-button_text'>Новое воспоминание</div>
		</CardButton>
	);
}
 
export default JouranlAddButton;