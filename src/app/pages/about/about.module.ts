import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  imports: [
    NbCardModule,
  ],
  declarations: [
    AboutComponent,
  ],
  providers: [
  ],
})

export class AboutModule { }