import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})

export class RegisterpageComponent implements OnInit {
  acc="enter account number"

  use="enter username"

  pass=""

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    alert("reigster clicked")
  }

}
