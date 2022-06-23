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
	CREATE_ROUND_BEGIN,
	CREATE_ROUND_SUCCESS,
	CREATE_ROUND_ERROR,
	GET_ONE_ROUND_BEGIN,
	GET_ONE_ROUND_SUCCESS,
	MAP_LOADED
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
	
	if (action.type === MAP_LOADED) {
		return {
			...state,
			mapLoaded: true
		};
	}
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.message,
		};
	}
	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: '',
			alertText: '',
		};
	}
	if (action.type === REGISTER_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			showAlert: true,
			alertType: 'success',
			alertText: 'Registration Successful, Redirecting...',
		};
	}
	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === LOGIN_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === LOGIN_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			isAdmin: action.payload.admin,
			showAlert: true,
			alertType: 'success',
			alertText: 'Login Successful, Redirecting...',
		};
	}
	if (action.type === LOGIN_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === LOGOUT_USER) {
		return {
			...initialState,
			user: null,
			token: null,
			isAdmin: false
		};
	}
	if (action.type === UPDATE_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === UPDATE_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			showAlert: true,
			alertType: 'success',
			alertText: 'User Profile Updated!',
		};
	}
	if (action.type === UPDATE_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === HANDLE_CHANGE) {
		return {
			...state,
			[action.payload.name]: action.payload.value,
		};
	}
// at some stage need to add editRound details
	if (action.type === CLEAR_VALUES) {
		const initialState = {
			isEditing: false,
			editHazardId: '',
			hazardRound: '0',
			hazardType: 'Aggressive Dog',
			hazardAddress: '',
			imageUrl: ''
		};
		return {
			...state,
			...initialState,
		};
	}
	if (action.type === UPLOAD_IMAGE_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === UPLOAD_IMAGE_SUCCESS) {
		return {
			...state,
			imageUrl: action.payload.public_id,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'Image Confirmed',
		};
	}
	if (action.type === UPLOAD_IMAGE_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === CREATE_HAZARD_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === CREATE_HAZARD_SUCCESS) {
		return {
			...state,
			user: action.payload.user,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: "Hazard Created",
		};
	}
	if (action.type === CREATE_HAZARD_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === GET_ALL_HAZARDS_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}
	if (action.type === GET_ALL_HAZARDS_SUCCESS) {
		return {
			...state,
			isLoading: false,
			allHazards: action.payload.hazards,
			totalAllHazards: action.payload.totalHazards
		};
	}
	if (action.type === CREATE_ROUND_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (action.type === CREATE_ROUND_SUCCESS) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'Round Created',
		};
	}
	if (action.type === CREATE_ROUND_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		};
	}
	if (action.type === GET_ONE_ROUND_BEGIN) {
		return {
			...state,
			isLoading: true,
			showAlert: false,
		};
	}
	if (action.type === GET_ONE_ROUND_SUCCESS) {
		return {
			...state,
			isLoading: false,
			round: action.payload.round,
			roundHazards: action.payload.roundHazards
		};
	}

	throw new Error(`no such action : ${action.type}`);
};

export default reducer;
