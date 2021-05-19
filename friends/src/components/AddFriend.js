import { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const newFriend = {
	name: "",
	age: "",
	email: "",
};

const AddFriend = () => {
	const [friend, setFriend] = useState(newFriend);

	let { push } = useHistory();

	const handleChange = (e) => {
		setFriend({ ...friend, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/friends", friend)
			.then(() => push("/protected"))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={friend.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="age"
					placeholder="age"
					value={friend.age}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="email"
					value={friend.email}
					onChange={handleChange}
				/>
				<button>Add Friend</button>
			</form>
		</div>
	);
};
export default AddFriend;
