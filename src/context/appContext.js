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
	UPLOAD_IMAGE_BEGIN,
	UPLOAD_IMAGE_SUCCESS,
	UPLOAD_IMAGE_ERROR,
	CREATE_HAZARD_BEGIN,
	CREATE_HAZARD_SUCCESS,
	CREATE_HAZARD_ERROR,
	GET_ALL_HAZARDS_BEGIN,
	GET_ALL_HAZARDS_SUCCESS,
	GET_ONE_ROUND_BEGIN,
	GET_ONE_ROUND_SUCCESS,
	SET_ROUND,
	MAP_LOADED,

} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const round = localStorage.getItem('round');
const roundHazards = localStorage.getItem('roundHazards');


// Need to add state for userHazards to use in user-profile page.
const initialState = {
	mapLoaded: false,
	isLoading: false,
	showAlert: false,
	isEditing: false,
	alertText: '',
	alertType: '',
	user: user ? JSON.parse(user) : null,
	token: token,
	// Add Hazard
	imageUrl: '',
	editHazardId: '',
	hazardRound: '',
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
	// All hazards
	allHazards: [],
	totalAllHazards: 0,
	// Selected Round
	selectedRound: null,
	round: round ? JSON.parse(round) : null,
	roundHazards: roundHazards ? JSON.parse(roundHazards) : [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Axios instance
	// https://round-report-v2.herokuapp.com
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

	const mapIsLoaded = () => {
		dispatch({ type: MAP_LOADED });
	}

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 2000);
	};

	const displayAlert = (message) => {
		const fallback = 'Please provide all values!';
		dispatch({
			type: DISPLAY_ALERT,
			payload: { message: message || fallback },
		});
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

	const uploadImage = async (image) => {
		dispatch({ type: UPLOAD_IMAGE_BEGIN });
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'xyjakd3z');
		try {
			const { data } = await axios.post(
				'https://api.cloudinary.com/v1_1/tigmarine/image/upload',
				formData
			);
			console.log('Cloudinary Response', data);
			const { public_id } = data;
			dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: { public_id } });
			console.log('imageUrl', public_id);
		} catch (error) {
			dispatch({
				type: UPLOAD_IMAGE_ERROR,
				payload: { msg: 'Image Upload Failed' },
			});
		}
		clearAlert();
	};

	const createHazard = async () => {
		dispatch({ type: CREATE_HAZARD_BEGIN });
		try {
			const { hazardRound, hazardAddress, hazardType, imageUrl } = state;
			const hazard = await authFetch.post('/hazards', {
				hazardRound,
				hazardAddress,
				hazardType,
				imageUrl,
			});
			console.log('Hazard Response', hazard);
			dispatch({
				type: CREATE_HAZARD_SUCCESS,
				payload: { user: hazard.data.user },
			});
			dispatch({ type: CLEAR_VALUES });
			console.log('Hazard Created', hazard);
		} catch (error) {
			if (error.response.status === 401) return;
			dispatch({
				type: CREATE_HAZARD_ERROR,
				payload: { msg: error.payload.msg },
			});
		}
		clearAlert();
	};

	const getAllHazards = async () => {
		let url = `/hazards`;
		dispatch({ type: GET_ALL_HAZARDS_BEGIN });
		try {
			const { data } = await authFetch(url);
			console.log(data);
			const { hazards, totalHazards } = data;
			dispatch({
				type: GET_ALL_HAZARDS_SUCCESS,
				payload: {
					hazards,
					totalHazards,
				},
			});
		} catch (error) {
			console.log(error.response);
			// Need to activate this eventually
			// logoutUser()
		}
		clearAlert();
	};

	const setRound = (number) => {
		dispatch({
			type: SET_ROUND,
			payload: { round: number },
		});
	};

	const getOneRound = async (roundNumber) => {
		let url = `/round/${roundNumber}`;
		dispatch({ type: GET_ONE_ROUND_BEGIN });

		try {
			const { data } = await authFetch(url);

			const round = data.round;
			const roundHazards = data.roundHazards;
			localStorage.setItem('round', JSON.stringify(round));
			localStorage.setItem('roundHazards', JSON.stringify(roundHazards));
			console.log('Data from getOneRound', round, roundHazards);

			dispatch({
				type: GET_ONE_ROUND_SUCCESS,
				payload: {
					round,
					roundHazards,
				},
			});
		} catch (error) {
			console.log(error.response);
			// Need to activate this eventually
			// logoutUser()
		}
		clearAlert();
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				mapIsLoaded,
				displayAlert,
				registerUser,
				loginUser,
				logoutUser,
				updateUser,
				handleChange,
				clearValues,
				uploadImage,
				createHazard,
				getAllHazards,
				setRound,
				getOneRound,
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
