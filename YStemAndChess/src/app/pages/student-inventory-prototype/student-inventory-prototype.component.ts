import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-inventory-prototype',
  templateUrl: './student-inventory-prototype.component.html',
  styleUrls: ['./student-inventory-prototype.component.scss']
})
export class StudentInventoryPrototypeComponent implements OnInit {

  // get user name
  name = "John Doe"

  //box contents
  boxes = [
    "Streak Progress",
    "Growth Quests",
    "Chess Boards",
    "Achievements",
  ]

  constructor() { 

  }

  ngOnInit(): void {

  }

}
