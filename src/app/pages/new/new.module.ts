import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NewComponent } from './new.component';

@NgModule({
	imports: [
	ThemeModule,
	],
	declarations: [
	NewComponent,
	],
	providers: [
	],
})

export class NewModule {
}
