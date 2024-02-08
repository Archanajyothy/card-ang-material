import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardActions, MatCardContent, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  constructor(private http: HttpClient){}

  apiData: any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
      this.apiData = res
      console.log(this.apiData);
    })
    
  }

}
