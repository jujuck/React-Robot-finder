import React, { useState } from 'react';

const RobotAddress = ({ address }) => {
	const [activ, setActive] = useState(false);
	const [label, setLabel] = useState('Regarder');

	const onActiv = () => {
		setActive(!activ)
		label === 'Regarder' ? setLabel('Masquer') : setLabel('Regarder');
	}

	return <div className="row">
		<div className="col-3 text-center">
			<button className={activ ? 'btn btn-danger ' : 'btn btn-success'} onClick={() => onActiv()}>{label} les infos</button>
		</div>
		<div className="col-9">
			<h3 className="text-center">Mon adresse</h3>
			{ activ ? <div><p className="text-center">{address.suite}</p>
			<p className="text-center">{address.street}</p>
			<p className="text-center">{address.zipcode} - {address.city}</p></div> : ''
			}
		</div>
	</div> 
}

export default RobotAddress;