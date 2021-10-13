import RobotAddress from './robotAddress';
import RobotCompany from './robotCompany';

const RobotCard = ({ robot }) => {
	return <div className="card m-2">
		<div className="row m-2">
			<div className="col-6 text-center">
				<h2>{robot.name}</h2>
				<h3>{robot.username}</h3>
				<p>{robot.phone}</p>
				<p>{robot.email}</p>
				<p>{robot.website}</p>
			</div>
			<div className="col-6 text-center">
				<img className ="img-thumbnail rounded" src={`https://robohash.org/${robot.id}/?set=set2/?200x200`} alt='robots' />
			</div>
		</div>
		<div className="border m-4 bg-light bg-gradient">
			<RobotAddress address={robot.address}/>
		</div>
		<div className="border m-4 bg-light bg-gradient">
			<RobotCompany company={robot.company}/>
		</div>
	</div>
}

export default RobotCard;