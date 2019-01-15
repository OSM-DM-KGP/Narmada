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
		zoom: 3,
		center: L.latLng({ lat: 34.083656, lng: 74.797371 }),
	};

	Needs = []; Avails = []; Matches = [];
	needsSkip = 0; availsSkip = 0; matchSkip = 0; stepSize = 20;
	showSelected = false; selectedResource = {}; resourcesOnly = [];

	showMatches = false;
	MatchingNeeds = []; MatchingAvails = [];

	// edit menu
	searchString = ''; showCancelSearch = false;
	newText = ''; newNewResource = ''; newNewQuantity = '';
	newContact = ''; newSources = ''; updatedQuantity = ''; toEditResource = {};

	humanReadableDate(created) {
		return created.split('T')[0];
	}

	parseResources(resources) {
		// console.log(resources);
		return "";
		// var names = resources.map(function (item) { return item['resource']; });
		// var count = resources.map(function (item) { return item['quantity']; });
		// var rstring = '';
		// for(var i=0;i < names.length;i++) { rstring += names[i] + '\t' + count[i] + '\n';}
		// return rstring;
	}

	parseLoc(locations) {
		if(!locations) return '';
		var locs = Object.keys(locations);
		var lstring = '';
		for(var i=0;i<locs.length;i++) { lstring += locs[i] + '\t'; }
		return lstring;
	}

	parseContact(contacts) {
		var contactString = "";
		// console.log(contacts);
		contactString  = contacts['Phone number'].toString();
		contactString += contacts['Email'].toString();
		return contactString;
	}

	showMoreNeeds() {
		var request = { params: { Classification: 'Need', isCompleted: false, skip: this.needsSkip }};
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get',  request)
			.then((response) => { this.Needs = this.Needs.concat(response.data); this.needsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Needs subsequent fail', error); })
	}

	showMoreAvails() {
		var request = { params: { Classification: 'Availability', isCompleted: false, skip: this.needsSkip } };
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get', request)
			.then((response) => { this.Avails = this.Avails.concat(response.data); this.availsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Avails subsequent fail', error); })
	}

	showMoreMatches() {
		var request = { params: { Classification: 'Need', isCompleted: false, skip: this.matchSkip, Matched: true }};
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get', request)
			.then((response) => { this.Matches = this.Matches.concat(response.data); this.matchSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Matches subsequent fail', error); })
	}

	// editable menu for resource
	display(Resource) {
		this.showSelected = true; this.showMatches = false;
		this.selectedResource = Resource; this.resourcesOnly = [];
		this.searchString = ''; this.showMatches = false;
		this.newText = ''; this.newContact = ''; this.newSources ='';
		this.toEditResource = {};
		// console.log(Resource);
		var locs = Resource.Locations;
		for(var location in locs) {
			this.mapoptions.center = L.latLng({ lat: locs[location].lat, lng: locs[location].long });
			// var destination = L.marker([ locs[location].lat, locs[location].long]).addTo(L.map('map'));
		}

		for(var category in Resource.Resources) {
			for(var resourceTweet in Resource.Resources[category]) {
				var count = Resource.Resources[category][resourceTweet] === "None" ? "-" : Resource.Resources[category][resourceTweet];
				this.resourcesOnly.push({'resource': resourceTweet, 'count': count});
			}
		}
		// console.log(this.resourcesOnly);

	}

	contactToString(contact) {
		return contact.Email.join() + ',' + contact['Phone number'].join();
	}
	listToString(sources) {
		return sources.join();
	}

	clearSearch() {
		this.searchString = '';
		this.showCancelSearch = false;
		this.ngOnInit();
	}
	updateEdit() {
		// selectedResource changed to something
		console.log('updateEdit');
		console.log(this.newText); console.log(this.newContact); console.log(this.newSources);
	}
	
	resourceToEdit(r) {
		this.toEditResource = r;
		console.log(this.toEditResource);
	}
	updateResources() {
		console.log(this.newContact); console.log(this.newSources);
	}


	filterTweets() {
		console.log('Searched for ', this.searchString);
		if(this.searchString != '') this.showCancelSearch = true;
		this.Needs = [], this.Avails = [];
		this.needsSkip = 0; this.availsSkip = 0; this.matchSkip = 0;
		// one time process to reset original tweets
		// $text: {$search: "italy"}
		
		// 1. fetch 20 needs
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString}, Classification: "Need", isCompleted: false } })
			.then((response) => { this.Needs = response.data; this.needsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Needs initial fail', error); });

		// 2. fetch 20 avails
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString }, Classification: "Availability", isCompleted: false } })
			.then((response) => { this.Avails = response.data; this.availsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Avails initial fail', error); });

		// 3. fetch 20 matches
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString }, isCompleted: false, Matched: true } })
			.then((response) => { this.Matches = response.data; this.matchSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Matches initial fail', error); })


	}

	resetSelect() {
		// console.log('Reset select');
		this.selectedResource = {}; this.showSelected = false;
		this.searchString = ''; this.showMatches = false;
		this.MatchingNeeds = []; this.MatchingAvails = [];
	}

	suggestMatches(Resource) {
		this.showMatches = !this.showMatches;
		if(!this.showMatches) {
			return;
		}

		axios.get(apiUrl + '/match?id=' + Resource._id + '&type=' + Resource.Classification)
			.then((response) => { 
				if(Resource.Classification==="Need") { this.MatchingAvails = response.data; this.MatchingNeeds = [];}
				else {this.MatchingNeeds = response.data; this.MatchingAvails = [];}
			})
			.catch((error) => { console.log('Failed to fetch matches!', error); });
		
		console.log('Found matches', this.MatchingNeeds);
	}

	cancelMatches() {
		this.showMatches = false;
	}

	makeMatch(Resource) {
		console.log('Making match of', Resource._id, ' and ', this.selectedResource['_id']);
		axios.put(apiUrl + '/makeMatch', {id1: Resource._id, id2: this.selectedResource['_id']})
			.then((response) => {
				console.log('Made match of', Resource._id, ' and ', this.selectedResource['_id']);
				// push match to Matches
				this.showSelected = false; this.showMatches = false;
				this.ngOnInit();
			})
			.catch((error) => { console.log('Could not make match', error)});
	}

	markCompleted() {
		var id1 = this.selectedResource['_id'], id2 = this.selectedResource['Matched'];
		
	}

	ngOnInit() {
		var resources = [];
		
		// 1. fetch 20 needs
		axios.get(apiUrl + '/get', { params: { Classification: "Need", isCompleted: false } })
			.then( (response) => {this.Needs = response.data; this.needsSkip += this.stepSize;})
			.catch ( (error) => {console.log('Needs initial fail', error);})

		// 2. fetch 20 avails
		axios.get(apiUrl + '/get', { params: { Classification: "Availability", isCompleted: false } })
			.then((response) => { this.Avails = response.data; this.availsSkip += this.stepSize; })
			.catch((error) => { console.log('Avails initial fail', error); })
		
		// 3. fetch 20 matches
		axios.get(apiUrl + '/get', { params: { Classification: "Need", isCompleted: false, Matched: true }})
			.then((response) => { this.Matches = response.data; this.matchSkip += this.stepSize;})
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
		// this.Needs = getResources(apiUrl + '/get', { params: { Classification: "Need", isCompleted: false }});
		// getResources(apiUrl + '/get', { params: { Classification: "Availability", isCompleted: false } }, this.Avails);
	}

	loadNext(type) {
		console.log('Loading next 20 of', type);
	}
}
