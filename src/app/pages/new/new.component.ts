import { Component } from '@angular/core';
import { apiUrl } from '../../app.module';
var axios = require('axios');

@Component({
	selector: 'ngx-completed',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],

})
export class NewComponent {
	// Resources dropdown
	dropdownList = [];	dropdownSettings = {};
	searchOptions = {};
	autocompleteSettings = {};

	// save status
	invalidText = false; invalidType = false;
	invalidResources = false; quantityMismatch = false;
	postError = false; postMsg = '';
	postSuccess = false;
	// vars
	tweetText = ''; resourceType = '';
	selectedItems = [];
	tweetSource = ''; tweetContact = ''; tweetQuantity = '';
	// sourceDesc = ''; sourceLat = 0; sourceLong = 0;
	sourceDesc = 'Assam, India'; sourceLat = 26.0737044; sourceLong = 83.18594580000001;
	
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


	saveResource() {
		this.invalidText = false; this.invalidType = false;
		this.invalidResources = false; this.quantityMismatch = false;
		this.postError = false; this.postMsg = ''; this.postSuccess = false;
		// no condition on location, contact, source
		if(!this.tweetText) {
			this.invalidText = true;
		} else if(!this.resourceType) {
			this.invalidType = true;
		} else if(this.selectedItems.length == 0) {
			this.invalidResources = true;
		} else if(!this.tweetQuantity || this.selectedItems.length != this.tweetQuantity.split(',').length) {
			this.quantityMismatch = true;
		} else {
			console.log('Submit');
			// console.log(this.sourceDesc, ',', this.sourceLat, 'x', this.sourceLong);
			
			var resources = {};
			for (var i = 0; i < this.selectedItems.length; i++) {
				resources[this.selectedItems[i]['item_text']] = this.tweetQuantity.split(',')[i];
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
				Resources: resources,
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
			.then(function (response) {
				status = true; msg = response.data;
				console.log('New resouce created', response.data);
			})
			.catch(function (error) {
				status = false; msg = error;
				console.log('Error in creating new', error);
			});
			if(status) this.postSuccess = true;
			this.postError = !this.postSuccess;
			this.postMsg = msg;
		}
	}
}
