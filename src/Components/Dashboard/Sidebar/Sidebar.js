import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTh,
	faCalendarMinus,
	faUserFriends,
	faCog,
	faFileAlt,
	faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	return (
		<Ul>
			<li>
				<Link to='/dashboard'>
					<FontAwesomeIcon icon={faTh} /> Dahsboard
				</Link>
			</li>
			<li>
				<Link to='/dashboard/appointment'>
					<FontAwesomeIcon icon={faCalendarMinus} /> Appointment
				</Link>
			</li>
			<li>
				<Link to='/dashboard/patients'>
					<FontAwesomeIcon icon={faUserFriends} /> Patients
				</Link>
			</li>
			<li>
				<Link to='/dashboard/prescriptions'>
					<FontAwesomeIcon icon={faFileAlt} /> Prescriptions
				</Link>
			</li>
			<li>
				<Link to='/dashboard/settings'>
					<FontAwesomeIcon icon={faCog} /> Settings
				</Link>
			</li>

			<li className='logout'>
				<FontAwesomeIcon icon={faSignOutAlt} />
				Logout
			</li>
		</Ul>
	);
};

const Ul = styled.ul`
	background: linear-gradient(
		120deg,
		rgba(25, 211, 174, 1) 0%,
		rgba(14, 207, 236, 1) 100%
	);
	height: 100vh;
	padding-top: 80px;
	position: relative;

	li {
		display: inline-block;
		width: 100%;

		a {
			display: block;
			padding: 9px 10px 9px 40px;
			color: #fff;
			font-weight: 600;
			font-size: 18px;
			margin: 7px 0;

			svg {
				margin-right: 5px;
			}
		}
	}
	.logout {
		position: absolute;
		bottom: 40px;
		left: 40px;
		font-size: 18px;
		color: #fff;
		cursor: pointer;
		svg {
			margin-right: 5px;
		}
	}
`;

export default Sidebar;
