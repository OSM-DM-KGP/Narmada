import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NewComponent } from './new.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NbButtonModule, NbInputModule, NbLayoutModule, NbCardModule, } from '@nebular/theme';

@NgModule({
	imports: [
		ThemeModule,
		NbButtonModule,
		NbInputModule,
		NbLayoutModule,
		NbCardModule,
		NgMultiSelectDropDownModule.forRoot(),
		Ng4GeoautocompleteModule.forRoot(),
	],
	declarations: [
		NewComponent,
	],
	providers: [
	],
})

export class NewModule {
}
