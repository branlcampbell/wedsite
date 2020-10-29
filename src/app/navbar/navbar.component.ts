import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private route: Router) {
   }

  ngOnInit() {
    this.sub = this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showOrHideImage(event.url);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Uses route user has visited to determine whether or not to display header image.
   * @param route - path the user has navigated to
   */
  showOrHideImage(route: string) {
    switch(route) {
      case '/':
        $('.page-image').slideDown('slow');
        break;
      case '/story':
        $('.page-image').slideDown('slow');
        break;
      case '/rsvp':
        $('.page-image').slideUp('slow');
        break;
      case '/registry':
        $('.page-image').slideUp('slow');
        break;
      case '/wishingwell':
        $('.page-image').slideUp('slow');
        break;
      case '/photos':
        $('.page-image').slideUp('slow');
        break;
      default:
        $('.page-image').slideUp('slow');
    }
  }
}
