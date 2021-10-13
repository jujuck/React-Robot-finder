const RobotAddress = ({ address }) => {
	console.log(address)
	return <div>
		<h3>Mon adresse</h3>
		<p>{address.suite}</p>
		<p>{address.street}</p>
		<p>{address.zipcode} - {address.city}</p>
	</div>
}

export default RobotAddress;