import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
user: User;
//list: User[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.user = new User();
    //this.list=[];
  }
  save(){
    this.user.accountCategory = 'Customer';
    this.user.picture = '';
    this.userService.list.push(this.user);
    console.log(this.userService.list);

  }

}
