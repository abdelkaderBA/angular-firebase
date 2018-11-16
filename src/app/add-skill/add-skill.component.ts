import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  data = {
    name: '',
    phone: '',
    skill: '',
    province: '',
    price: '',
    comments: ''
  }

  itemList: AngularFireList<any>;

  constructor(public db: AngularFireDatabase, public route: Router) {
    this.itemList = db.list('skills');
  }

  ngOnInit() {
  }

  insertSkill() {
    this.itemList.push({
      name: this.data.name,
      phone: this.data.phone,
      skill: this.data.skill,
      province: this.data.province,
      price: this.data.price,
      comments: this.data.comments
    })
    this.route.navigate(['/myskill']);
  }

}
