import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }
  msgTrue=false;
contactList:any;
  ngOnInit(): void {
    // this.contactList=this.contactsService.getContacts();
  this.contactsService.getContacts().subscribe(data=>{
    this.contactList=data;
  })
  }
  addNewContact(form:any){
    // const newFormdata={id:16,firstName:'amrithaok', lastName:'rose'};
    console.log(form.value.id);
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    const newFormdata={id:form.value.id,firstName:form.value.firstName, lastName:form.value.lastName};
    this.contactsService.createContacts(newFormdata).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }
  updateContact(contactId:any){
    const newFormdata={id:contactId,firstName:'checking put', lastName:'rose'};
    this.contactsService.updateContacts(contactId,newFormdata).subscribe(data=>{
      this.msgTrue=true;
    })
  }
  deleteContact(contactId:any){
    this.contactsService.deleteContacts(contactId).subscribe(data=>{
      console.log(data);
    });
  }
  getContact(){
    this.contactsService.getContactById().subscribe(data=>{
      console.log(data);
    })
  }
}
