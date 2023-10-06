import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const UserProfile = () => {
	const { currentColor } = useStateContext();

	return (
		<div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200 text-md text-gray-700">User Profile</p>
			</div>
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200 text-md text-gray-700">User Profile</p>
			</div>
			<div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
				<img
					className="rounded-full h-24 w-24"
					src={avatar}
					alt="user-profile"
				/>			
			</div>
		</div>

	);
};

export default UserProfile;