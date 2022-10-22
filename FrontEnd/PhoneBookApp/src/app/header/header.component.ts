import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../Services/phonebook.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Phone Book";
  showAddContact: boolean = false;
  subscription: Subscription;
  contactsubscription: Subscription;

  constructor(private router: Router,private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => ( this.showAddContact = value));
      this.contactsubscription = this.uiService
      .onEdit()
      .subscribe((value) => (this.showAddContact = value.showAddContact));
      
   }

  ngOnInit(): void {
    console.log('fromheader');
    
  }
  toggleAddContact() {
    this.uiService.toggleAddContact();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
