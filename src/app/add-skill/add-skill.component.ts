import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  data = {
    name : '' ,
    phone :  '' ,
    skill :  '' ,
    province :  '' ,
    price :  ''  ,
    comments :  '' 
  } 
  
  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {
  }

}
