import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  lastNameValue: string = '';
  listUser: any;
  displayedColumns: string[] = ['first_name', 'last_name'];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this._userService.getAllUsers(this.lastNameValue.toUpperCase()).subscribe((response: any) => {
      this.listUser = response.data.GetAllUsers;
      //console.log(this.listUser);
    });
  }

  findLastName(event: any): void {
    this.lastNameValue = event.target.value;
    this.getAllUsers();
  }
}
