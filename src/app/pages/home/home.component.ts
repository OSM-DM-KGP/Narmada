import { Component } from '@angular/core';
var axios = require('axios');

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { apiUrl } from '../../app.module';

@Component({
	selector: 'ngx-home',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	mapoptions = {
		layers: [
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
		],
		zoom: 5,
		center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
	};

	Needs = {}; Avails = {}; Matches = {};
	
	ngOnInit() {
		var resources = {};
		// 1. fetch 20 needs
		axios.get(apiUrl, { query: { type: "Need", isCompleted: false }})
			.then(function (response) { resources = response.data; })
			.catch(function (error) { console.log('Could not fetch initial needs', error); });
		this.Needs = resources;

		// 2. fetch 20 avails
		axios.get(apiUrl, { query: { type: "Availability", isCompleted: false }})
			.then(function (response) { resources = response.data; })
			.catch(function (error) { console.log('Could not fetch initial needs', error); });
		this.Avails = resources;
		
		// 2. fetch 20 avails
		axios.get(apiUrl, { query: { isMatched: 0, isCompleted: false } })
			.then(function (response) { resources = response.data; })
			.catch(function (error) { console.log('Could not fetch initial needs', error); });
		this.Avails = resources;
	}
}
