import { Component, OnInit } from '@angular/core';
import { IContactDto, PhonebookService,ContactsModel } from '../Services/phonebook.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  searchedTerm:string;
  contacts:IContactDto[];
  constructor(private _phonebookservice:PhonebookService) { }

  ngOnInit(): void {
    this.getContactData();
  }
  addContact(contact: any) {
    this._phonebookservice.addContact(contact).subscribe({
      next: (res: any) => {
        if (res) {
          this.getContactData();
        }
      }});
  }
  getContactData(){
    this._phonebookservice.getContacts().subscribe({
      next: (res: any) => {
        if (res) {
          this.contacts = res;
          console.log(res);
        }
      },
    });
  }
  deleteContact(contact: any) {
    this._phonebookservice
      .deleteContact(contact)
      .subscribe({
        next: (res: any) => {
          if (res) {
            this.getContactData();
          }
        },
      });
  }
}
