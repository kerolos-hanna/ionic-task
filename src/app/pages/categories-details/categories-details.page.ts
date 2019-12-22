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
  data;

  constructor(public categoriesService: CategoriesService, public navCtrl: NavController, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    console.log('id = ',id);
    this.categoriesService.getDetailsId(4).subscribe(data => {
      this.results = data;
      this.products = this.results.products;
      console.log(this.products);
    })
  }

}
