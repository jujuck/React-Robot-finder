import React, { useState } from 'react';

const RobotCompany = ({ company }) => {
	const [activ, setActiv] = useState(false);
	const [label, setLabel] = useState("Regarder");

	const onActiv = () => {
		setActiv(!activ);
		label === "Regarder" ? setLabel("Masquer"): setLabel("Regarder");
	}

	return <div className="row">
			<div className="col-3 text-center">
				<button className={activ ? "btn btn-danger" : "btn btn-success"} onClick={() => onActiv()}>{label} la compagnie</button>
			</div>
			<div className="col-9">
			<h3 className="text-center">Ma compagnie</h3>
			{activ ? <div>
				<h5 className="text-center">{company.name}</h5>
				<h5 className="text-center">{company.catchPhrase}</h5>
			</div> : ''
			}
			</div>
		</div>


}

export default RobotCompany;