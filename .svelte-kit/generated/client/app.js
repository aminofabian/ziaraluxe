export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/itineraries": [3],
		"/itineraries/creative-industry-france": [4],
		"/itineraries/creative-industry-germany": [5],
		"/itineraries/egypt-israel-agtech": [6],
		"/itineraries/healing-horizons": [7],
		"/itineraries/kenya-conscious": [8],
		"/itineraries/netherlands-business": [9],
		"/itineraries/singapore-corporate": [10],
		"/itineraries/tanzania-conscious": [11],
		"/itineraries/[slug]": [~12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';