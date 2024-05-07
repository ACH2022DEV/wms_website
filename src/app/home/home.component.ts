import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2500)),
    ]),
    trigger('slideInFromLeft', [
      state('void', style({
        transform: 'translateX(-100%)',
      })),
      transition('void => *', [
        animate('0.5s ease-in-out')
      ]),
    ]),
    trigger('scroll', [
      state('inactive', style({
        opacity: '0',
        transform: 'translateX(-100%)'
      })),
      state('active', style({
        opacity: '1',
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('0.6s ease-in')),
      transition('active => inactive', animate('0.6s ease-out'))
    ])
  ]
})
export class HomeComponent {
  animationStarted = false;
  constructor(private elRef: ElementRef,private cd: ChangeDetectorRef) { }
  scrollPosition = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log("this.scrollPosition"+this.scrollPosition)
  }
}
