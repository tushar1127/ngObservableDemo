import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  data :any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
       const userId =    params.get('userId')
       console.log('userId', userId);
    })
    this.data = this.activatedRoute.snapshot.data['profile'];
  }
}

