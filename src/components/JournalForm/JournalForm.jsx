import Button from '../Button/Button';
import styles from'./JournalForm.module.css';
import { useReducer, useRef, useContext } from 'react';
// import cn from 'classnames';
import { useEffect } from 'react';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context.jsx';

function JournalForm({ onSubmit }) {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid: isValid, isFormReadyToSubmit: isFormReadyToSubmit, values: values } = formState;
	const titleRef	= useRef();
	const dateRef	= useRef();
	const textRef	= useRef();
	const { userId } = useContext(UserContext);
	
	const focusError = (isValid) => {
		// switch (true) {
		// case !isValid.title:
		// 	titleRef.current.focus();
		// 	break;
		// case !isValid.date:
		// 	dateRef.current.focus();
		// 	break;
		// case !isValid.text:
		// 	textRef.current.focus();
		// 	break;
		// }
		if (!isValid.title === true) {
			return titleRef.current.focus();
		}
		if (!isValid.date === true) {
			return dateRef.current.focus();
		}
		if (!isValid.text === true) {
			return textRef.current.focus();
		}
	};
	
	
	
	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		}; 
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit, values, onSubmit]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload :{ userId }});
	}, [userId]);

	const onChange = (e) =>  {
		dispatchForm({ type: 'SET_VALUE', payload :{ [e.target.name]: e.target.value }});	
	};
	
	const  addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT'});     
		
	};
 
	return (
				
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			{/* {state.age} */}
			<Input type="text" name='title' ref={titleRef} onChange={onChange} placeholder='Title' value={values.title} appearence="title" isValid={isValid.title}/>
			<div className={styles['wrapper-input']}>
				<label htmlFor='date' className={styles['wrapper-extra_data']}>
					<img src="../../../public/calendar.svg" alt="calendar icon" />
					<div className={styles['wrapper-extra_data__text']}>Date</div>
				</label>
				<Input type="date" name='date' ref={dateRef} onChange={onChange} id='date' value={values.date} isValid={isValid.date}/>
			</div>
			<div className={styles['wrapper-input']}>
				<label htmlFor='tag' className={styles['wrapper-extra_data']}>
					<img src="../../../public/folder.svg" alt="calendar icon" />
					<div className={styles['wrapper-extra_data__text']}>Marks</div>
				</label>
				<Input type="text" name='tag' id='tag'  onChange={onChange} value={values.tag} isValid={isValid.text}/>
			</div>
			<textarea name="text" id="" cols="30" ref={textRef}  onChange={onChange} value={values.text} rows="10" placeholder='Text' className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`}></textarea>
		
			<Button>Save</Button>
		</form>


	);
}
 
export default JournalForm;