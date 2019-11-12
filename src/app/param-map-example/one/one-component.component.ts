import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class OneComponent implements OnInit {
  data :any;
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
       const userId =    params.get('userId')
       console.log('userId', userId);
    })
    this.data = this.activatedRoute.snapshot.data['profile'];
    // return this.http.get(`https://uat-api.taxbuddy.com/txbdy/api/taxQueryIndexedCOA?date1=${date1}&date2=${date2}&amount=${amount}&assetType=${assetType}`, httpOptions);
  }
}

