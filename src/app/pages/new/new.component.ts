import { Component } from '@angular/core';

@Component({
	selector: 'ngx-completed',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],

})
export class NewComponent {
	radioModel = 'left';
	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	searchOptions = {};
	autocompleteSettings = {};

	// populateLocations(locString) {
	// 	console.log(locString);
	// 	var baseUrl = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyC4OlWZx9GBrjXeWdaJCvP8NjnMmNtfQwY&input=";
		
	// 	// const autocomplete = new google.maps.places.Autocomplete(locString);
	// 	// https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyC4OlWZx9GBrjXeWdaJCvP8NjnMmNtfQwY&input=pizza+near%20par
	// }

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
		console.log(item);
	}
	onSelectAll(items: any) {
		console.log(items);
	}
}
