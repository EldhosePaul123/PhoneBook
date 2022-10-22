import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IContactDto, PhonebookService, UiService } from '../Services/phonebook.service';

@Component({
  selector: 'app-contactaddedit',
  templateUrl: './contactaddedit.component.html',
  styleUrls: ['./contactaddedit.component.css'],
})
export class ContactaddeditComponent implements OnInit {
  form: FormGroup;
  @Output() onAddContact: EventEmitter<any> = new EventEmitter();
  name: string | undefined;
  countryExtension: string | undefined;
  phonenumber: string | undefined;
  company: string | undefined;
  showAddContact: boolean=false;
  subscription: Subscription;
  buttonText:string;
  submitted = false;
  contactsubscription: Subscription;
  phoneNumberId:number;
  constructor(private _phonebookservice:PhonebookService,private uiService: UiService,private formBuilder: FormBuilder) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddContact = value,
      this.name="",
        this.countryExtension ="",
        this.phonenumber ="",
        this.company="",
      this.buttonText="Add Contact"));
    this.contactsubscription = this.uiService
      .onEdit()
      .subscribe((value) => (this.showAddContact = value.showAddContact,
        this.name=value.name,
        this.countryExtension =value.countryExtension,
        this.phonenumber =value.phonenumber,
        this.company=value.company,
        this.phoneNumberId =value.phoneNumberId,
        this.buttonText="Update Contact"
        ));
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      countrycode: ['', Validators.required],
      contactcompany: ['', null],
      contactphonenumber:['', Validators.required]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    const newcontact = {
      name: this.name,
      countryExtension:this.countryExtension,
      phonenumber:this.phonenumber,
      company:this.company,
      phoneNumberId:this.phoneNumberId
    };
    this.onAddContact.emit(newcontact);
    
    this.form.reset();
  }
}
