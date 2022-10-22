import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContactDto, UiService } from '../Services/phonebook.service';
import { faTimes,faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactitem',
  templateUrl: './contactitem.component.html',
  styleUrls: ['./contactitem.component.css']
})
export class ContactitemComponent implements OnInit {
  @Output() onDeleteContact: EventEmitter<Task> = new EventEmitter();
  @Input()
  contactobj!: IContactDto;
  faTimes = faTimes;
  fapencil=faPencil;
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }
  deletecontact(objcontact:any){
    this.onDeleteContact.emit(objcontact);
  }
  editcontact(objcontact:any){
    this.uiService.editContact(objcontact);
  }

}
