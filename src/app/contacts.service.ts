import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient: HttpClient) { }
  getContacts(){
    // const httpHeaders= new HttpHeaders();
    // httpHeaders.append('content-type','application/json');
    // const contactList=[
    //   {
    //     contactId:1,
    //     contactName:'abc'
    //   },
    //   {
    //     contactId:2,
    //     contactName:'youtube'
    //   },
    //   {
    //     contactId:3,
    //     contactName:'fb'
    //   },
    //   {
    //     contactId:1,
    //     contactName:'twitter'
    //   }
    // ];

    // return contactList;
    let httpHeaders= new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'tutorial',
      'timeoutSeconds':'3000'
    });
    httpHeaders=httpHeaders.set('custom-header','118');
    let time=  httpHeaders.get('timeOutSeconds');
    if(time==='3000'){
      httpHeaders=httpHeaders.set('Authorize','3000');
    }
    return this.httpClient.get('http://localhost:3000/contacts',{headers:httpHeaders});
  }
  createContacts(createResource:any){
    return this.httpClient.post('http://localhost:3000/contacts',createResource);
  }
  updateContacts(contactId:any,updatedBody:any){
   const endpointUrl='http://localhost:3000/contacts/'+ contactId;
    return this.httpClient.put(endpointUrl,updatedBody);
  }
  deleteContacts(contactId:any){
    const endpointUrl='http://localhost:3000/contacts/'+ contactId;
    return this.httpClient.delete(endpointUrl);
  }
  getContactById(){
    const httpparams= new HttpParams({
      fromObject:{
        // query:'mark'
        id:['1','3']
      }
    });
   return this.httpClient.get('http://localhost:3000/contacts',{params:httpparams});
  }
}
