import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '675px',
		borderRadius: '20px',
		padding: '30px',
	},
};

const FromContainer = styled.div`
	padding: 39px;

	input {
		width: 100%;
		padding: 14px 20px;
		border: 1px solid #bfbfbf;
		margin: 6px 0px;
		border-radius: 4px;
	}
	input[type='submit'] {
		display: inline-block;
		width: 100px;
		padding: 9px;
		float: right;
		margin-top: 15px;
		color: #fff;
		background: rgb(25, 211, 174);
		background: linear-gradient(
			90deg,
			rgba(25, 211, 174, 1) 0%,
			rgba(14, 207, 236, 1) 100%
		);
		border: none;
	}
`;
const FormTitle = styled.h2`
	text-align: center;
	color: #1cc7c1;
	font-size: 24px;
	margin-bottom: -13px;
`;
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		const appointmet = { ...data, appointmentDate: date };

		fetch('http://localhost:4000/appointments', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(appointmet),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					alert('Thank For your Appintmet.');
					closeModal();
				}
			});
	};

	Modal.setAppElement('#root');
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<FormTitle>{appointmentOn}</FormTitle>
				<p
					style={{
						textAlign: 'center',
						marginTop: '13px',
						fontSize: '12px',
					}}
				>
					{date.toDateString()}
				</p>
				<FromContainer>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='input-feild'>
							<input
								name='name'
								ref={register({ required: true })}
								placeholder='Your Name'
							/>
							{errors.name && (
								<span className='text-danger'>
									Name is required
								</span>
							)}
						</div>
						<div className='input-feild'>
							<input
								name='phone'
								ref={register({ required: true })}
								placeholder='Your Phone Number'
							/>
							{errors.phone && (
								<span className='text-danger'>
									Phone Number is required
								</span>
							)}
						</div>
						<div className='input-feild'>
							<input
								name='email'
								type='email'
								ref={register({ required: true })}
								placeholder='Your Email'
							/>
							{errors.email && (
								<span className='text-danger'>
									Email Address is required
								</span>
							)}
						</div>
						<div className='input-feild'>
							<input
								name='issueData'
								type='date'
								ref={register({ required: true })}
							/>
							{errors.issueData && (
								<span className='text-danger'>
									Date is required
								</span>
							)}
						</div>
						<input type='submit' />
					</form>
				</FromContainer>
			</Modal>
		</div>
	);
};

export default AppointmentForm;
