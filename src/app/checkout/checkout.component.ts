import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder : FormBuilder) { 
    // this.checkoutForm=formBuilder.group({
    // emailAdress: new FormControl(),
    // quantity: new FormControl(),
    // terms: new FormControl()
    //  } );
    this.checkoutForm=formBuilder.group({
      emailAdress: ['',[Validators.minLength(12) ,
                       Validators.required,
                          Validators.email]],
      quantity: ['', Validators.required],
      terms:['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
        itemId:['1'],
        itemName:['2'],
        itemDescription:['3'],
        itemDone:['',Validators.requiredTrue]
      })
      ])
       } );
    }
  ngOnInit(): void {
    // setvalue method
    // this.checkoutForm.setValue({
    //   emailAdress:'test@gmail.com',
    //   quantity:10,
    //   terms:true
    // })
    //patchvalue
    // this.checkoutForm.patchValue({
    //   emailAdress:'test@gmail.com',
    //   quantity:10,
      
    // })
    // value changes
    // this.checkoutForm.get('emailAdress')?.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })
    // track whole form
    // this.checkoutForm.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })

    //     this.checkoutForm.get('emailAdress').valueChanges.subscribe(data=>{
    //   console.log(data);
    // })
    // status changes
    // this.checkoutForm.get('emailAdress')?.statusChanges.subscribe(data=>{
    //   console.log(data);
    // })
    // this.checkoutForm.statusChanges.subscribe(formstate=>{
    //   console.log(formstate);
    // })
    console.log(this.checkoutForm.get('items')?.value.length);
    console.log(this.checkoutForm.get('items')?.value);
    // console.log(this.checkoutForm.get('items')[0].value);
    this.checkoutForm.get('items')?.setValue([{
      itemId:['13'],
      itemName:['24'],
      itemDescription:['35'],
      itemDone:['',Validators.requiredTrue]
    }])
  }
  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log("email : "+this.checkoutForm.value.emailAdress);
    this.resetForm();

  }
  resetForm(){
    this.checkoutForm.reset();
  }
  get items(){
    return this.checkoutForm.get('items') as FormArray;
  }
 addNewItem(){
   const itemLength= this.items.length;
 const newItem=  this.formBuilder.group({
    itemId:[itemLength + 1],
    itemName:[''],
    itemDescription:[''],
    itemDone:['',Validators.requiredTrue]
  }
  )
  this.items.push(newItem);
 }
 removeItem(itemIdd:any){
   console.log('remove item clicked');
   console.log(itemIdd);
   this.items.removeAt(itemIdd);
 }
}
