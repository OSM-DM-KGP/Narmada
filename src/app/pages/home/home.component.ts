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

	Needs = []; Avails = []; Matches = [];
	needsSkip = 0; availsSkip = 0; matchSkip = 0; stepSize = 20;
	showSelected = false; selectedResource = '';

	// edit menu
	searchString = '';
	newText = ''; newNewResource = ''; newNewQuantity = '';
	newContact = ''; newSources = '';

	humanReadableDate(created) {
		return created.split('T')[0];
	}

	parseResources(resources) {
		var names = resources.map(function (item) { return item['resource']; });
		var count = resources.map(function (item) { return item['quantity']; });
		var rstring = '';
		for(var i=0;i < names.length;i++) { rstring += names[i] + '\t' + count[i] + '\n';}
		return rstring;
	}

	parseLoc(locations) {
		if(!locations) return '';
		var locs = Object.keys(locations);
		var lstring = '';
		for(var i=0;i<locs.length;i++) { lstring += locs[i] + '\t'; }
		return lstring;
	}

	showMoreNeeds() {
		var request = { params: { Classification: 'Need', isCompleted: false, skip: this.needsSkip }};
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl,  request)
			.then((response) => { this.Needs = this.Needs.concat(response.data); this.needsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Needs subsequent fail', error); })
	}

	showMoreAvails() {
		var request = { params: { Classification: 'Availability', isCompleted: false, skip: this.needsSkip } };
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl, request)
			.then((response) => { this.Avails = this.Avails.concat(response.data); this.availsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Avails subsequent fail', error); })
	}

	showMoreMatches() {
		axios.get(apiUrl, { params: { Classification: 'Need', isCompleted: false, skip: this.matchSkip } })
			.then((response) => { this.Matches = this.Matches.concat(response.data); this.matchSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Matches subsequent fail', error); })
	}

	// editable menu for resource
	display(Resource) {
		this.showSelected = true;
		this.selectedResource = Resource;
		this.searchString = '';
	}

	contactToString(contact) {
		return contact.Email.join() + ',' + contact['Phone number'].join();
	}
	listToString(sources) {
		return sources.join();
	}

	updateEdit() {
		// selectedResource changed to something
		console.log('updateEdit');
		console.log(this.newText); console.log(this.newNewResource); console.log(this.newNewQuantity);
		console.log(this.newContact); console.log(this.newSources);
	}

	filterTweets() {
		console.log('Searched for ', this.searchString);
		this.Needs = [], this.Avails = [];
		// one time process to reset original tweets
		// $text: {$search: "italy"}
		
		// 1. fetch 20 needs
		axios.get(apiUrl, { params: { "text": { "$regex": this.searchString}, Classification: "Need", isCompleted: false } })
			.then((response) => { this.Needs = response.data; this.needsSkip = Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Needs initial fail', error); })

		// 2. fetch 20 avails
		axios.get(apiUrl, { params: { "text": { "$regex": this.searchString}, Classification: "Availability", isCompleted: false } })
			.then((response) => { this.Avails = response.data; this.availsSkip = Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Avails initial fail', error); })

	}

	resetSelect() {
		this.selectedResource = ''; this.showSelected = false;
		this.searchString = '';
	}

	ngOnInit() {
		var resources = [];

		// 1. fetch 20 needs
		axios.get(apiUrl, { params: { Classification: "Need", isCompleted: false } })
			.then( (response) => {this.Needs = response.data; this.needsSkip += this.stepSize;})
			.catch ( (error) => {console.log('Needs initial fail', error);})

		// 2. fetch 20 avails
		axios.get(apiUrl, { params: { Classification: "Availability", isCompleted: false } })
			.then((response) => { this.Avails = response.data; this.availsSkip += this.stepSize; })
			.catch((error) => { console.log('Avails initial fail', error); })
		
		// 3. fetch 20 avails
		axios.get(apiUrl, { params: { Classification: "Need", isCompleted: false } })
			.then((response) => { this.Matches = response.data; this.matchSkip += this.stepSize; })
			.catch((error) => { console.log('Matches initial fail', error); })
		
			// attempt at async
		// const getResources = async (url, query) => {
		// 	try {
		// 		const response = await axios.get(url, query);
		// 		resources = response.data;
		// 		return resources;
		// 	} catch (error) {
		// 		console.log(error);
		// 		return {};
		// 	}
		// };
		// this.Needs = getResources(apiUrl, { params: { Classification: "Need", isCompleted: false }});
		// getResources(apiUrl, { params: { Classification: "Availability", isCompleted: false } }, this.Avails);
	}

	loadNext(type) {
		console.log('Loading next 20 of', type);
	}
}
