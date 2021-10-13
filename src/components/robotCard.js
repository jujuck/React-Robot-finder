import RobotAddress from './robotAddress';
import RobotCompany from './robotCompany';

const RobotCard = ({ robot }) => {
	return <div className="card">
		<div className="row">
			<div className="col-4">
				<h2>{robot.name}</h2>
				<h3>{robot.username}</h3>
				<p>{robot.phone}</p>
				<p>{robot.email}</p>
				<p>{robot.website}</p>
			</div>
			<div className="col-4">
				<RobotAddress address={robot.address}/>
			</div>
			<div className="col-4">
				<RobotCompany company={robot.company}/>
			</div>
		</div>
	</div>
}

export default RobotCard;