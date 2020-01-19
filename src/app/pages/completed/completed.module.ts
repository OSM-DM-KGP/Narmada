import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CompletedComponent } from './completed.component';
import { NbListModule } from '@nebular/theme';

@NgModule({
	imports: [
	ThemeModule,
	NbListModule,
	],
	declarations: [
	CompletedComponent,
	],
	providers: [
	],
})

export class CompletedModule {
}
