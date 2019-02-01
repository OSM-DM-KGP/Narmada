import { Component } from '@angular/core';
import { apiUrl, parseApiUrl } from '../../app.module';
import { ObjectUnsubscribedError } from 'rxjs';
var axios = require('axios');

@Component({
	selector: 'ngx-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],

})
export class NewComponent {
	// Resources dropdown
	dropdownList = [];	dropdownSettings = {};
	searchOptions = {}; locString = {};
	autocompleteSettings = {};

	// save status
	parseFail = false; invalidText = false; invalidType = false;
	invalidResources = false; quantityMismatch = false;
	postError = false; postMsg = '';
	postSuccess = false;
	// vars
	tweetText = ''; resourceType = '';
	selectedItems = [];
	tweetSource = ''; tweetContact = ''; 
	tweetQuantity = ''; quantityArray = []; bucketMap = {};
	sourceDesc = ''; sourceLat = 0; sourceLong = 0;
	// sourceDesc = 'Assam, India'; sourceLat = 26.0737044; sourceLong = 83.18594580000001;
	
	ngOnInit() {
		this.dropdownList = [
			{ item_id: 1, item_text: 'Food' },
			{ item_id: 2, item_text: 'Water' },
			{ item_id: 3, item_text: 'Blood' },
			{ item_id: 4, item_text: 'Tent' },
			{ item_id: 5, item_text: 'Something else' }
		];
		this.selectedItems = [
		];
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'item_id',
			textField: 'item_text',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			itemsShowLimit: this.dropdownList.length,
			allowSearchFilter: false
		};
		
		this.autocompleteSettings = {
			"showRecentSearch": false,
			"showSearchButton": false,
			"currentLocIconUrl": "https://cdn4.iconfinder.com/data/icons/proglyphs-traveling/512/Current_Location-512.png",
			"noOfRecentSearchSave": 8
		};
	}

	onItemSelect(item: any) {
		// console.log(item);
	}

	onSelectAll(items: any) {
		// console.log(items);
	}

	selectedLocation(locString) {
		// console.log(locString);
		this.sourceDesc = locString.data.description;
		this.sourceLat = locString.data.geometry.location.lat;
		this.sourceLong = locString.data.geometry.location.lng;
		console.log(this.sourceDesc, ' @ ', this.sourceLat, ' x ', this.sourceLong);
	}

	discard() {
		this.tweetText = ''; this.selectedItems = [];
		this.tweetContact = ''; this.tweetSource = '';
		this.tweetQuantity = ''; this.bucketMap = {}; this.sourceDesc = '';
		this.sourceLat = 0; this.sourceLong = 0;
	}

	parseText() {
		this.parseFail = false; this.quantityArray = [];
		axios.post(parseApiUrl + '/parse', {text: this.tweetText})
			.then((response) => {
				this.parseFail = false;
				if(response.error === 1) {this.parseFail = false; return;}
				console.log('Parsed response', response.data);
				var resource = response.data;
				this.tweetContact = "";
				if(resource.Contact.Email.length) this.tweetContact = resource.Contact.Email.join();
				if(resource.Contact.Email.length && resource.Contact['Phone number'].length) this.tweetContact += ',';
				if(resource.Contact['Phone number'].length) this.tweetContact += resource.Contact['Phone number'].join();

				this.tweetSource = resource.Sources.join();

				if(Object.keys(resource.Locations).length) {
					var loc = Object.keys(resource.Locations)[0];
					this.sourceDesc = loc;
					this.sourceLat = resource.Locations[loc].lat;
					this.sourceLong = resource.Locations[loc].long;
				}
				if(resource.Resources) {
					var quantities = {};
					for(var bucket in resource.Resources) {
						for(var rWord in resource.Resources[bucket]) {
							this.quantityArray.push({'resource': rWord, 'quantity': resource.Resources[bucket][rWord]});
							quantities[rWord] = resource.Resources[bucket][rWord];
							this.bucketMap[rWord] = bucket;
						}
					}
					this.tweetQuantity = JSON.stringify(quantities, null, 4); //.replace(/"/g, '');
					console.log(this.tweetQuantity);
				}
				else this.tweetQuantity = '';
			})
			.catch((error) => {
				this.parseFail = true;
				console.log('Error in parsing', error);
			});
	}

	IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	saveResource() {
		this.parseFail = false; this.invalidText = false; this.invalidType = false;
		this.invalidResources = false; this.quantityMismatch = false;
		this.postError = false; this.postMsg = ''; this.postSuccess = false;
		// no condition on location, contact, source
		if(!this.tweetText) {
			this.invalidText = true;
		} else if(!this.resourceType) {
			this.invalidType = true;
		// } else if(this.selectedItems.length == 0) {
		// 	this.invalidResources = true;
		// } else if(!this.tweetQuantity || this.selectedItems.length != this.tweetQuantity.split(',').length) {
		} else if (!this.tweetQuantity || !this.IsJsonString(this.tweetQuantity)) {
			this.quantityMismatch = true;
		} else {
			console.log('Submit');
			// console.log(this.sourceDesc, ',', this.sourceLat, 'x', this.sourceLong);
			
			var resources = {}, resourceWords = [];
			var resourceJSON = JSON.parse(this.tweetQuantity);
			for (var rWord in resourceJSON) {
				if(!(rWord in this.bucketMap)) continue;
				if((this.bucketMap[rWord] in resources) == false) resources[this.bucketMap[rWord]] = {};
				resources[this.bucketMap[rWord]][rWord] = resourceJSON[rWord];
				resourceWords.push(rWord);
			}
			// add id, time also
			// username not required
			var loc = {};
			loc[this.sourceDesc] = {lat: this.sourceLat, long: this.sourceLong};
			
			var contacts = this.tweetContact.split(',');
			var mails = []; var numbers = [];
			for(var i = 0; i < contacts.length; i++) {
				if(contacts[i] == '') continue;
				if(contacts[i].includes('@')) mails.push(contacts[i]);
				else numbers.push(contacts[i]);
			}

			let tweet = {
				lang: 'en',
				text: this.tweetText,
				Classification: this.resourceType,
				isCompleted: false,
				Matched: -1,
				Locations: loc,
				Sources: this.tweetSource.split(','),
				username: 'Naradmin',
				Resources: resources,
				ResourceWords: resourceWords,
				Contact: {
					Email: mails,
					"Phone number": numbers,
				}
			};

			if(!this.sourceDesc) { // delete if there's no real location
				delete tweet.Locations;
			}
			if (!this.tweetSource) {
				delete tweet.Sources;
			}

			var status = true; var msg = '';
			// console.log(tweet);
			axios.post(apiUrl + '/new', tweet)
			.then((response) => {
				status = true; msg = response.data;
				console.log('New resouce created', response.data);
			})
			.catch((error) => {
				status = false; msg = error;
				console.log('Error in creating new', error);
			});
			if(status) this.postSuccess = true;
			this.postError = !this.postSuccess;
			this.postMsg = msg;
		}
	}
}
