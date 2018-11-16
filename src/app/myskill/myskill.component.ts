import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {
  itemList: AngularFireList<any>
  itemArray = [];
  constructor(public db: AngularFireDatabase) {
    this.itemList = db.list('skills')

    this.itemList.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          let result = action.payload.toJSON()
          result["$key"] = action.key
          this.itemArray.push(result as ListItemClass)

        })
      })
    console.log(this.itemArray);
  }

  ngOnInit() {
  }

}
export class ListItemClass {
  $key: string;
  name: string;
  phone: string;
  comments: string;
  skill: string;
  province: string;
  price: string;
}