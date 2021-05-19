import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const newFriend = {
	name: "",
	age: "",
	email: "",
};

const EditFriend = () => {
	const [friend, setFriend] = useState(newFriend);

	let { push } = useHistory();

	let { id } = useParams();

	useEffect(() => {
		axiosWithAuth()
			.get(`/friends/${id}`)
			.then((res) => setFriend(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	const handleChange = (e) => {
		setFriend({ ...friend, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/friends/${id}`, friend)
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
				<button>EditFriend</button>
			</form>
		</div>
	);
};
export default EditFriend;
