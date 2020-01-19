import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SavitrComponent } from './savitr.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        SavitrComponent,
    ],
    providers: [
    ],
})

export class SavitrModule {
}
