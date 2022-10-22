import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { FaBirthdayCake, FaUser, FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { useState } from "react";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
	const [user, setUser] = useState(null);
	const [title, setTitle] = useState("Random Person");

	// set which value is showing
	const [value, setValue] = useState("name");
	const getUser = async () => {
		const response = await fetch(url);
		const data = await response.json();
		const person = data.results[0];
		const { large: image } = person.picture;
		const { title, first, last } = person.name;
		const { phone, email } = person;
		const {
			dob: { age },
		} = person;
		const {
			street: { number, name },
		} = person.location;
		const { password } = person.login;
		const newPerson = {
			image,
			name: `${title}. ${first} ${last}`,
			email,
			age,
			street: `${number} ${name}`,
			phone,
			password,
		};
		setUser(newPerson);
		setTitle("name");
		setValue(newPerson.name);
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleValue = (e) => {
		if (e.target.classList.contains("icon")) {
			const newValue = e.target.dataset.label;
			setTitle(newValue);
			setValue(user[newValue]);
		}
	};

	return (
		<main>
			<div className="block bcg-orange"></div>
			<div className="block">
				<div className="container">
					<img
						src={user && user.image}
						alt="random user"
						className="user-img"
					/>
					<p className="user-title">My {title} is</p>
					<p className="user-value">{value}</p>
					<div className="values-list">
						<button className="icon" data-label="name" onClick={handleValue}>
							<FaUser />
						</button>
						<button className="icon" data-label="email" onClick={handleValue}>
							<MdEmail />
						</button>
						<button className="icon" data-label="age" onClick={handleValue}>
							<FaBirthdayCake />
						</button>
						<button className="icon" data-label="street" onClick={handleValue}>
							<FaMapMarkedAlt />
						</button>
						<button className="icon" data-label="phone" onClick={handleValue}>
							<GiRotaryPhone />
						</button>
						<button
							className="icon"
							data-label="password"
							onClick={handleValue}
						>
							<RiLockPasswordLine />
						</button>
					</div>
					<div className="btn-group">
						<button className="btn" type="button" onClick={getUser}>
							new user
						</button>
						<button className="btn" type="button">
							add user
						</button>
					</div>

					<table className="table">
						<thead>
							<tr className="head-tr">
								<th className="th">Firstname</th>
								<th className="th">Email</th>
								<th className="th">Phone</th>
								<th className="th">Age</th>
							</tr>
						</thead>
						<tbody>
							<tr className="body-tr"></tr>
						</tbody>
					</table>
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Footer />
			</div>
		</main>
	);
}

export default App;
