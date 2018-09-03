import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletComponent } from './leaflet/leaflet.component';
import { PlotlyModule } from 'angular-plotly.js';
import * as Plotly from 'plotly.js';

@NgModule({
	imports: [
	ThemeModule,
	NgxEchartsModule,
	NgxChartsModule,
	PlotlyModule,
	LeafletModule.forRoot(),
	],
	declarations: [
	HomeComponent,
	],
	providers: [
	],
})

export class HomeModule {
	public graph: Object = {
		data: [{
			type:'scattermapbox',
			lat:['45.5017'],
			lon:['-73.5673'],
			mode:'markers',
			marker: {
				size:14
			},
			text:['Montreal']
		}],

		layout: {
			autosize: true,
			hovermode:'closest',
			mapbox: {
				bearing:0,
				center: {
					lat:45,
					lon:-73
				},
				pitch:0,
				zoom:5
			},
		}
	};

  // Plotly.setPlotConfig({
  //   mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
  // });

  // Plotly.plot('PlotlyMap', data, layout);
}
