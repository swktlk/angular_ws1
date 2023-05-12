import { Component, OnInit } from '@angular/core';
import { SBService } from '../sb.service';
import { BOOK } from '../Test-request-get';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  data: BOOK[] = [];
  MovieID :string =""
  MovieType :string =""
  MoviePrice : any
  MovieName:string =""
  constructor(private sbservice: SBService) {}

  ngOnInit() {
    this.sbservice.getBooksWeb().subscribe(data => {
      this.data = data;
    });
  }

  Book_id(value: string) {
    
    this.MovieID=this.data[Number(value)-1].Movieid
    this.MoviePrice=this.data[Number(value)-1].MoviePrice
    this.MovieName=this.data[Number(value)-1].NameMovie
    this.MovieType=this.data[Number(value)-1].TypeMovie
   
  }
}
