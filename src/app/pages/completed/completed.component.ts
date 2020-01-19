import { Component } from '@angular/core';
var axios = require('axios');

import { apiUrl } from '../../app.module';

@Component({
	selector: 'ngx-completed',
	templateUrl: './completed.component.html',
})
export class CompletedComponent {
	CompletedNeeds = []; CompletedAvails = [];
	CompletedMatches = [];

	needsSkip = 0; availsSkip = 0; matchSkip = 0; stepSize = 20;
	showSelected = false; selectedResource = {}; resourcesOnly = [];

	searchString = ''; showCancelSearch = false;
	
	humanReadableDate(created) {
		return created.split('T')[0];
	}

	parseLoc(locations) {
		if (!locations) return '';
		var locs = Object.keys(locations);
		var lstring = '';
		for (var i = 0; i < locs.length; i++) { lstring += locs[i] + '\t'; }
		return lstring;
	}

	parseContact(contacts) {
		var contactString = "";
		// console.log(contacts);
		contactString = contacts['Phone number'].toString();
		contactString += contacts['Email'].toString();
		return contactString;
	}

	clearSearch() {
		this.searchString = '';
		this.showCancelSearch = false;
		this.ngOnInit();
	}

	// editable menu for resource
	display(Resource) {
		this.showSelected = true;
		this.selectedResource = Resource; this.resourcesOnly = [];
		this.searchString = '';

		// console.log(Resource);
		var locs = Resource.Locations;
		/*for (var location in locs) {
			this.mapoptions.center = L.latLng({ lat: locs[location].lat, lng: locs[location].long });
			// var destination = L.marker([ locs[location].lat, locs[location].long]).addTo(L.map('map'));
		}*/

		for (var category in Resource.Resources) {
			for (var resourceTweet in Resource.Resources[category]) {
				var count = Resource.Resources[category][resourceTweet] === "None" ? "-" : Resource.Resources[category][resourceTweet];
				this.resourcesOnly.push({ 'resource': resourceTweet, 'count': count });
			}
		}
		// console.log(this.resourcesOnly);

	}

	filterTweets() {
		console.log('Searched for ', this.searchString);
		if (this.searchString != '') this.showCancelSearch = true;
		this.CompletedNeeds = [], this.CompletedAvails = []; this.CompletedMatches = [];
		this.needsSkip = 0; this.availsSkip = 0; this.matchSkip = 0;
		// one time process to reset original tweets
		// $text: {$search: "italy"}

		// 1. fetch 20 needs
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString }, Classification: "Need", isCompleted: true } })
			.then((response) => { this.CompletedNeeds = response.data; this.needsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('CompletedNeeds initial fail', error); });

		// 2. fetch 20 avails
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString }, Classification: "Availability", isCompleted: true } })
			.then((response) => { this.CompletedAvails = response.data; this.availsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('CompletedAvails initial fail', error); });

		// 3. fetch 20 matches
		axios.get(apiUrl + '/get', { params: { "text": { "$regex": this.searchString }, isCompleted: true, Matched: true } })
			.then((response) => { this.CompletedMatches = response.data; this.matchSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Completed Matches initial fail', error); })
	}

	resetSelect() {
		// console.log('Reset select');
		this.selectedResource = {}; this.showSelected = false;
		this.searchString = ''; // this.showMatches = false;
		// this.MatchingNeeds = []; this.MatchingAvails = [];
	}

	showMoreNeeds() {
		var request = { params: { Classification: 'Need', isCompleted: true, skip: this.needsSkip } };
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get', request)
			.then((response) => { this.CompletedNeeds = this.CompletedNeeds.concat(response.data); this.needsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Needs subsequent fail', error); })
	}

	showMoreAvails() {
		var request = { params: { Classification: 'Availability', isCompleted: true, skip: this.availsSkip } };
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get', request)
			.then((response) => { this.CompletedAvails = this.CompletedAvails.concat(response.data); this.availsSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Avails subsequent fail', error); })
	}

	showMoreMatches() {
		var request = { params: { Classification: 'Need', isCompleted: true, skip: this.matchSkip, Matched: true } };
		if (this.searchString) {
			request.params["text"] = { "$regex": this.searchString };
		}
		axios.get(apiUrl + '/get', request)
			.then((response) => { this.CompletedMatches = this.CompletedMatches.concat(response.data); this.matchSkip += Math.min(this.stepSize, response.data.length); })
			.catch((error) => { console.log('Matches subsequent fail', error); })
	}

	ngOnInit() {

		// 1. fetch 20 needs
		axios.get(apiUrl + '/get', { params: { Classification: "Need", isCompleted: true } })
			.then((response) => { this.CompletedNeeds = response.data; this.needsSkip += this.stepSize; })
			.catch((error) => { console.log('Needs initial fail', error); })

		// 2. fetch 20 avails
		axios.get(apiUrl + '/get', { params: { Classification: "Availability", isCompleted: true } })
			.then((response) => { this.CompletedAvails = response.data; this.availsSkip += this.stepSize; })
			.catch((error) => { console.log('Avails initial fail', error); })

		// 3. fetch 20 matches
		axios.get(apiUrl + '/get', { params: { Classification: "Need", isCompleted: true, Matched: true } })
			.then((response) => { this.CompletedMatches = response.data; this.matchSkip += this.stepSize; })
			.catch((error) => { console.log('Matches initial fail', error); })
	}
}
