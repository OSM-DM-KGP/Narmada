import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span style="margin-left: 10rem;" class="created-by">NARMADA: Need and Available Resource Managing Assistant for Disasters and Adversities</span>
    <div class="socials">
      <a href="https://osm-dm-kgp.github.io/Narmada" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
  // Update a href later
  //   template: `
  //   <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2017</span>
  //   <div class="socials">
  //     <a href="#" target="_blank" class="ion ion-social-github"></a>
  //     <a href="#" target="_blank" class="ion ion-social-facebook"></a>
  //     <a href="#" target="_blank" class="ion ion-social-twitter"></a>
  //     <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
  //   </div>
  // `,
})
export class FooterComponent {
}
