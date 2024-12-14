import { Component, Input, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor/vendor.service';
import { Movie } from '../../interfaces/movie.interface';
import { ShowTimes } from '../../interfaces/showtime.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    // backgroundColor: Array(this.bardata.datasets[0].data.length).fill(null).map((_, i) => `rgba(${i * 30}, 99, 132, 0.2)`),
    //   ],

    @Input() vendorId!: number;
  public bardata = {
    labels: [],
    datasets: [{
      label: 'No of Reservations',
      data: [65, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
]
  };

  public piedata = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Reservation Total price ',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  public bardata2 = {
    labels: [],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  public piedata2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  public bardata3 = {
    labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july','august'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  public piedata3 = {
    labels: [
      'Red',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  constructor(private vendorService: VendorService) {
}

    ngOnInit() {
        
      console.log(this.vendorId);
      this.vendorService.getDashboard(this.vendorId).subscribe((data: any) => {
          console.log(data);
          let cinemas = data.cinemas;
          let movies = data.Movies;
          let showtimes = data.showtimes;

          this.bardata.labels = cinemas.map((cinema: any) => {
            
            return (cinema.Cinema.name);
          })
          this.bardata.datasets[0].data = cinemas.map((cinema: any) => {
            return (cinema.count);
          })

          this.piedata.labels = cinemas.map((cinema: any) => {
            
            return (cinema.Cinema.name);
          })
          this.piedata.datasets[0].data = cinemas.map((cinema: any) => {
            return (cinema.total);
          })
        //============================================================
          this.bardata2.labels = movies.map((movie: any) => {
              return (movie.Movie.title);
            })
            
            this.bardata2.datasets[0].data = movies.map((movie: any) => {
                
                return (movie.count);
            })
            
            //   console.log(this.bardata2.labels);
            this.piedata2.labels = movies.map((movie: any) => {
            //   console.log(movie);
            
            return (movie.Movie.title);
          })
          this.piedata2.datasets[0].data = movies.map((movie: any) => {
            // console.log(movie);
            return (movie.total);
          })
        //============================================================
        // console.log(showtimes);
        this.bardata3.labels = showtimes.map((showtime: any) => {
            //   console.log(showtime);
              return (showtime.ShowTime.showTime);
            })
            
            this.bardata3.datasets[0].data = showtimes.map((showtime: any) => {
                
                return (showtime.count);
            })
        this.piedata3.labels = showtimes.map((showtime: any) => {
            //   console.log(showtime);
              return (showtime.ShowTime.showTime);
            })
            
            this.piedata3.datasets[0].data = showtimes.map((showtime: any) => {
                
                return (showtime.total);
            })
            
        
      })
  }

}
