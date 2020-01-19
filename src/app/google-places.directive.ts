// / <reference types="@types/googlemaps" />
import { Directive, ElementRef, OnInit } from '@angular/core';
// const google = require('@types/googlemaps');
// import { maps } from '@types/googlemaps';
// import { } from 'googlemaps'; 
import { } from "googlemaps";
import { } from "@types/googlemaps";

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    console.log(this.element);
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}