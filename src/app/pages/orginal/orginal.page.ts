import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orginal',
  templateUrl: './orginal.page.html',
  styleUrls: ['./orginal.page.scss'],
})
export class OrginalPage implements OnInit {

  results: any = [];
  data;
  constructor(public categoriesService: CategoriesService, public navCtrl: NavController, private router: Router, private activeRoute: ActivatedRoute) {
    this.appear();
  }

  ngOnInit() { }


  //after load the page 
  ionViewDidLoad() {
    console.log("work");
    this.appear();
  }

  appear() {
    console.log("hello");
    this.categoriesService.getDetails().subscribe(data => {
      this.results = data;
      console.log(this.results);
    })
  }

  goToDetails(id) {
    let ids = {
      queryParams:{
        special: id
      }
    }
    this.router.navigate(['products-details'],ids);
  }

}

