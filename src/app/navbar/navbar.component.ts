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
        this.showImage();
        break;
      case '/story':
        this.showImage();
        break;
      case '/rsvp':
        this.hideImage();
        break;
      case '/registry':
        this.hideImage();
        break;
      case '/wishingwell':
        this.hideImage();
        break;
      case '/photos':
        this.hideImage();
        break;
      default:
        this.hideImage();
    }
  }

  showImage() {
    $('.page-image').fadeIn('slow');
    $('#header-image').slideDown(1000);
  }

  hideImage() {
    $('.page-image').fadeOut('slow');
    $('#header-image').slideUp(1000);
  }
}
