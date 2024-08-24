import './LeftPanel.css';
function LeftPanel({children}) {
 
	return (
		<div className="Left-wrapper">
			{children}
		</div>
	);
}
 
export default LeftPanel;