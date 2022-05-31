import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import reducer from './reducer';
import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGOUT_USER,
	UPDATE_USER_BEGIN,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,
	HANDLE_CHANGE,
	CLEAR_VALUES,
	CREATE_HAZARD_BEGIN,
	CREATE_HAZARD_SUCCESS,
	CREATE_HAZARD_ERROR,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
	user: user ? JSON.parse(user) : null,
	token: token,
	isEditing: false,
	editHazardId: '',
	hazardRound: '0',
	hazardTypeOptions: [
		'Aggressive Dog',
		'Aggressive Human',
		'Aggressive Magpie',
		'Blind Driveway',
		'Slippery Surface',
		'School',
		'Intersection',
		'Roadworks',
		'Missing Letterbox',
		'Other',
	],
	hazardType: 'Aggressive Dog',
	hazardAddress: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Axios instance
	const authFetch = axios.create({
		baseURL: '/api/v1',
	});

	// Axios request interceptor
	authFetch.interceptors.request.use(
		(config) => {
			config.headers.common['Authorization'] = `Bearer ${state.token}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	// Axios response interceptor
	authFetch.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			// console.log(error.response);
			if (error.response.status === 401) {
				logoutUser();
				console.log('AUTH ERROR 401 YO!');
			}
			return Promise.reject(error);
		}
	);

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const addUserToLocalStorage = ({ user, token }) => {
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
	};

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	};

	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post(
				'/api/v1/auth/register',
				currentUser
			);
			console.log('response', response);
			const { user, token } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: { user, token },
			});
			addUserToLocalStorage({ user, token });
		} catch (error) {
			console.log(error.response);
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const loginUser = async (currentUser) => {
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post(
				'/api/v1/auth/login',
				currentUser
			);
			console.log('response', data);
			const { user, token } = data;
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { user, token },
			});
			addUserToLocalStorage({ user, token });
		} catch (error) {
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUserFromLocalStorage();
	};

	const updateUser = async (currentUser) => {
		dispatch({ type: UPDATE_USER_BEGIN });
		try {
			const { data } = await authFetch.patch(
				'/auth/updateUser',
				currentUser
			);
			console.log('data1', data);

			const { user, token } = data;
			console.log('data2', data);
			dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
			addUserToLocalStorage({ user, token });
		} catch (error) {
			if (error.response.status !== 401) {
				dispatch({
					type: UPDATE_USER_ERROR,
					payload: { msg: error.response.data.msg },
				});
			}
		}
		clearAlert();
	};

	const handleChange = ({ name, value }) => {
		dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
	};

	const clearValues = () => {
		dispatch({ type: CLEAR_VALUES });
	};

	const createHazard = async () => {
		dispatch({ type: CREATE_HAZARD_BEGIN });
		try {
			const { hazardRound, hazardAddress, hazardType } = state;
			const hazard = await authFetch.post('/hazards', {
				hazardRound,
				hazardAddress,
				hazardType,
			});
			dispatch({ type: CREATE_HAZARD_SUCCESS });
			dispatch({ type: CLEAR_VALUES });
			console.log('Hazard Created', hazard);
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: CREATE_HAZARD_ERROR,
				payload: { msg: error.payload.msg },
			});
		}
		clearAlert()
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				displayAlert,
				registerUser,
				loginUser,
				logoutUser,
				updateUser,
				handleChange,
				clearValues,
				createHazard,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
