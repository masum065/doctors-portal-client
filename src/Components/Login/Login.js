import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Firebase.config';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import loginBg from '../../images/login-bg.png';
import { PrimaryBtn } from '../Shared/Hero/HeroHomeContent/HeroHomeContent';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}

	const handleGoogleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				const { displayName, email } = result.user;
				const signedInUser = { name: displayName, email };
				setLoggedInUser(signedInUser);
				storeAuthToken();
			})
			.catch(function (error) {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem('token', idToken);
				history.replace(from);
			})
			.catch(function (error) {
				// Handle error
			});
	};

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<LoginPageStyle>
			<Container>
				<Row>
					<Col xl={5}>
						<div className='login-form'>
							<h3>Login</h3>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='from-input'>
									<label htmlFor='name'>User Name</label>
									<input
										name='name'
										ref={register({ required: true })}
									/>
									{errors.name && (
										<span className='text-danger'>
											User Name field is required
										</span>
									)}
								</div>
								<div className='from-input'>
									<label htmlFor='password'>Password</label>
									<input
										name='password'
										ref={register({ required: true })}
									/>
									{errors.Password && (
										<span className='text-danger'>
											Password field is required
										</span>
									)}
								</div>

								<p className='forgot-pass'>
									Forgot Your Password?
								</p>
								<input type='submit' value='Sign In' />
							</form>
							<PrimaryBtn onClick={handleGoogleSignIn}>
								Continue with Google
							</PrimaryBtn>
						</div>
					</Col>
				</Row>
			</Container>
		</LoginPageStyle>
	);
};

const LoginPageStyle = styled.section`
	background-image: url(${loginBg});
	height: 100vh;
	background-position: bottom right;
	background-repeat: no-repeat;
	background-size: contain;

	.login-form {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 100vh;
		flex-direction: column;

		form {
			width: 100%;
			padding: 30px;

			button {
				width: 100%;
			}
		}
	}

	.from-input {
		.forgot-pass {
			color: #fc4453;
			cursor: pointer;
		}

		label {
			color: #878787;
		}

		input {
			width: 100%;
			border: none;
			border-bottom: 1px solid #878787;
			padding: 0px 5px;
			margin-bottom: 11px;
		}
	}
	input[type='submit'] {
		display: block;
		padding: 7px 25px;
		font-size: 20px;
		font-weight: 700;
		color: #fff;
		margin-top: 25px;
		background: rgb(25, 211, 174);
		background: linear-gradient(
			90deg,
			rgba(25, 211, 174, 1) 0%,
			rgba(14, 207, 236, 1) 100%
		);
		border: none;
		width: 100%;
	}
`;
export default Login;
