import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.page.html',
  styleUrls: ['./categories-details.page.scss'],
})
export class CategoriesDetailsPage implements OnInit {
  results: any;
  products:any = [];
  name:string;
  data1:any;

  constructor(public categoriesService: CategoriesService, public navCtrl: NavController, private router: Router, private activeRoute: ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params => {
      this.data1 = params.special;
      console.log('id: ',this.data1)
    });
    this.categoriesService.getDetailsId(this.data1).subscribe(data => {
      this.results = data;
      this.name = this.results.name;
      this.products = this.results.products;
      console.log(this.products);
    })
  }

  ngOnInit() {}

}
