import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CompletedComponent } from './completed.component';

@NgModule({
	imports: [
	ThemeModule,
	],
	declarations: [
	CompletedComponent,
	],
	providers: [
	],
})

export class CompletedModule {
}
