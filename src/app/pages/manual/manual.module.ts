import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ManualComponent } from './manual.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NbButtonModule, NbInputModule } from '@nebular/theme';

@NgModule({
    imports: [
        ThemeModule,
        NbButtonModule,
        NbInputModule,
        NgMultiSelectDropDownModule.forRoot(),
        Ng4GeoautocompleteModule.forRoot(),
    ],
    declarations: [
        ManualComponent,
    ],
    providers: [
    ],
})

export class ManualModule {
}
