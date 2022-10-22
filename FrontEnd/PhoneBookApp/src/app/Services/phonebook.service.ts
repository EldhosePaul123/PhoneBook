import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

export class PhonebookService {
  private moduleUrl = environment.baseApi+'/api/Contact';

  constructor(private http: HttpClient) {}

  getContacts(): any {
    return this.http.get<IContactDto[]>(this.moduleUrl+'?contactId=0');
  }

 

  deleteContact(contact: any): Observable<any> {
     const url = `${this.moduleUrl}/?contactId=${contact.phoneNumberId}`;
    return this.http.delete<any>(url);
    //return this.http.delete<any>('?contactId='+contact.phoneNumberId);
  }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.baseUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }

  addContact(conatct: any): Observable<IContactDto> {
    return this.http.post<IContactDto>('https://localhost:7194/api/Contact', conatct, httpOptions);
  }
}
export interface IContactDto {
  name: string;
  phonenumber: string ;
  countryExtension: string ;
  company: string;
  phoneNumberId:number;
}
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddContact: boolean = false;
  private subject = new Subject<any>();
  private contactObjsubject = new Subject<any>();

  constructor() {}

  toggleAddContact(): void {
    this.showAddContact = !this.showAddContact;
    this.subject.next(this.showAddContact);
  }

  editContact(objcontact:any): void {
    this.showAddContact = !this.showAddContact;
     objcontact.showAddContact =this.showAddContact;
    this.contactObjsubject.next(objcontact);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  onEdit(): Observable<any> {
    return this.contactObjsubject.asObservable();
  }
}



export const ContactsModel: IContactDto[] = [
  {
    phoneNumberId: 1,
    name: 'Eldhose',
    phonenumber: '8907124890',
    countryExtension: '+91',
    company: 'exp'
  },
  {
    phoneNumberId: 3,
    name: 'eldhose',
    phonenumber: '8907124890',
    countryExtension: '+91',
    company: 'exp'
  },
  {
    phoneNumberId: 4,
    name: 'eldhose paul',
    phonenumber: '8907124890',
    countryExtension: '+91',
    company: 'exp'
  }
];

