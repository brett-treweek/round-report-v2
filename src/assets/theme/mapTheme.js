// Custom theme for google map
export const MapTheme = [
	{
		featureType: 'all',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#ffffff',
			},
		],
	},
	{
		featureType: 'all',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#000000',
			},
			{
				lightness: 13,
			},
		],
	},
	{
		featureType: 'administrative',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#000000',
			},
		],
	},
	{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#144b53',
			},
			{
				lightness: 14,
			},
			{
				weight: 1.4,
			},
		],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'on',
			},
			{
				weight: '0.11',
			},
			{
				color: '#daff00',
			},
		],
	},
	{
		featureType: 'administrative.neighborhood',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{
				color: '#08304b',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [
			{
				color: '#0c4152',
			},
			{
				lightness: 5,
			},
		],
	},
	{
		featureType: 'poi.school',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.school',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'on',
			},
			{
				weight: '0.46',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				visibility: 'on',
			},
			{
				hue: '#ff0000',
			},
			{
				saturation: '1',
			},
			{
				weight: '1.03',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#000000',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#0b434f',
			},
			{
				lightness: 25,
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#000000',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#0b3d51',
			},
			{
				lightness: 16,
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry',
		stylers: [
			{
				color: '#000000',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'on',
			},
			{
				weight: '0.01',
			},
			{
				saturation: '0',
			},
			{
				lightness: '-42',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				color: '#146474',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				color: '#021019',
			},
		],
	},
];
