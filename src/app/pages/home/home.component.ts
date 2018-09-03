import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

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
}
