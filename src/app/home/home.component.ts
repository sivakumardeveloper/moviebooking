import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovie:any;
rating:any;
popularMovies: any;
theaterMovies:any;



  constructor(private Http: HttpClient , private router:Router) { }
  ngOnInit(): void {
    
    this.getTrendingMovie();
    this.getpopularMovies();
    this.gettheaterMovies();
  }
  getTrendingMovie() {
  
    this.Http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movie) => {
      this.trendingMovie= movie;
      console.log(this.trendingMovie)
    });
  }

  getpopularMovies(){
    this.Http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movie)=>{
      this.popularMovies=movie;
      console.log(this.popularMovies)
    });
  }


  gettheaterMovies(){
    this.Http.get('http://localhost:4200/assets/data/theater-movies.json').subscribe((movie)=>{
      this.theaterMovies=movie;
      console.log(this.theaterMovies)
    });
  }
  goToMoivie(type:string,id:string){
    this.router.navigate(['movie',type,id]);
  }
}
