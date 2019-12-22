import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CategoriesService } from '../../services/categories.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  results:any = [];
  data;
  constructor(public categoriesService: CategoriesService, public navCtrl: NavController, private router: Router, private activeRoute: ActivatedRoute) { 
    this.appear();
  }

  ngOnInit() {}


  //after load the page 
  ionViewDidLoad(){
    console.log("kero");
    this.appear();
  }

  appear(){
      console.log("hello");
      this.categoriesService.getDetails().subscribe(data => {
      this.results = data;
      console.log(this.results);
    })
    }

     goToDetails(id){
      this.router.navigate(['products-details']);
    }

}


  /*getCategory() {
    axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
      .then(function (response) {
        // handle success
        let category = [response.data]
         console.log(category);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };*/