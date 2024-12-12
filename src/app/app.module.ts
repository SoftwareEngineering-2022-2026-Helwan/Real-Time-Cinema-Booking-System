import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from "../app/utilities/material/material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GoogleMapsModule} from '@angular/google-maps';


import {Chart, registerables} from "chart.js";
Chart.register(...registerables);
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';


//#region Components
import {CustomerHeaderComponent} from "./components/header/customer-header/customer-header.component";
import {AdminHeaderComponent} from "./components/header/admin-header/admin-header.component";
import {GustHeaderComponent} from "./components/header/gust-header/gust-header.component";
import {VendorHeaderComponent} from "./components/header/vendor-header/vendor-header.component";

import {FooterComponent} from "./components/footer/footer.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BarChartComponent} from "./components/charts/bar-chart/bar-chart.component";
import {PieChartComponent} from "./components/charts/pie-chart/pie-chart.component";

import {CinemaFormComponent} from "./components/form/cinema-form/cinema-form.component";
import {MovieFormComponent} from "./components/form/movie-form/movie-form.component";
import {VendorFormComponent} from "./components/form/vendor-form/vendor-form.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";

import {CinemaListItemComponent} from "./components/list-item/cinema-list-item/cinema-list-item.component";
import {ReservationListItemComponent} from "./components/list-item/reservation-list-item/reservation-list-item.component";
import {UsersListItemComponent} from "./components/list-item/user-list-item/user-list-item.component";
import {FeedbackListItemComponent} from "./components/list-item/feedback-list-item/feedback-list-item.component";

import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SeatComponent} from "./components/seat/seat.component";
import {AbstractMovieCardComponent} from "./components/movieCard/abstract-movieCard/abstract-movieCard.component";
import {DetailedMovieCardComponent} from "./components/movieCard/detailed-movieCard/detailed-movieCard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import { VendorHomeComponent } from './components/home/vendor-home/vendor-home.component';
import { GuestHomeComponent } from './components/home/guest-home/guest-home.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { FaqComponent } from './components/faq/faq.component';

import {UsersListComponent} from "./components/list/users-list/user-list.component";
import {CinemaListComponent} from "./components/list/cinema-list/cinema-list.component";
import {ReservationListComponent} from "./components/list/reservation-list/reservation-list.component";
import {FeedbackListComponent} from "./components/list/feedback-list/feedback-list.component";
import {MovieListComponent} from "./components/list/movie-list/movie-list.component";
import { TicketComponent } from './components/ticket/ticket.component';
import { SlideshowComponent } from './components/list/slideshow/slideshow.component';
import { SeatListComponent } from './components/list/seat-list/seat-list.component';

import { NotAuthorizedComponent } from './components/errors/NotAuthorized/NotAuthorized.component';
import { NotFoundComponent } from './components/errors/NotFound/NotFound.component';
import {VendorMovieListComponent} from "./components/list/vendor-movie-list/vendor-movie-list.component";
import {VendorMovieListItemComponent} from "./components/list-item/vendor-movie-list-item/vendor-movie-list-item.component";
import { VendorListPageComponent} from "./pages/admin/vendor-list-page/vendor-list-page.component";
import {VendorMovieListPageComponent} from "./pages/vendor/vendor-movie-list-page/vendor-movie-list-page.component";
import { ReservationPageComponent } from './pages/customer/reservation-page/reservation-page.component';
import { ListMoviePageComponent } from './pages/customer/list-movie-page/list-movie-page.component';
import { CinemaListPageComponent } from './pages/vendor/cinema-list-page/cinema-list-page.component';

//#endregion
const COMPONETS =
[
    NotAuthorizedComponent,
    NotFoundComponent,
    CinemaListPageComponent,
    ListMoviePageComponent,
    VendorMovieListPageComponent,
    ReservationPageComponent,
    VendorListPageComponent,
    VendorMovieListItemComponent,
    VendorMovieListComponent,
    CustomerHeaderComponent,
    AdminHeaderComponent,
    GustHeaderComponent,
    VendorHeaderComponent,
    FooterComponent,
    CheckoutComponent,
    DashboardComponent,
    BarChartComponent,
    PieChartComponent,
    CinemaFormComponent,
    MovieFormComponent,
    VendorFormComponent,
    FeedbackComponent,
    CinemaListItemComponent,
    ReservationListItemComponent,
    UsersListItemComponent,
    FeedbackListItemComponent,
    LoginComponent,
    SignupComponent,
    SeatComponent,
    AbstractMovieCardComponent,
    DetailedMovieCardComponent,
    ProfileComponent,
    VendorHomeComponent,
    GuestHomeComponent,
    AdminHomeComponent,
    FaqComponent,
    UsersListComponent,
    CinemaListComponent,
    ReservationListComponent,
    FeedbackListComponent,
    MovieListComponent,
    TicketComponent,
    SlideshowComponent,
    SeatListComponent
]
//#region Services
// services
import { HttpClientModule } from '@angular/common/http';
import {AdminService} from './services/admin/admin.service';
import {CustomerService} from './services/customer/customer.service';
import {CinemaService} from './services/cinema/cinema.service';
import {MovieService} from './services/movie/movie.service';
import {ReservationService} from './services/reservation/reservation.service';
import {VendorService} from './services/vendor/vendor.service';
import {PersonService} from './services/person/person.service';
import {CheckoutService} from './services/checkout/checkout.service';
import {FeedbackService} from './services/feedback/feedback.service';
import { AuthService } from './services/auth/auth.service';
//#endregion
const SERVICES = [
    AdminService,
    CustomerService,
    CinemaService,
    MovieService,
    ReservationService,
    VendorService,
    PersonService,
    CheckoutService,
    FeedbackService,
    AuthService
]


@NgModule({
  declarations: [
    AppComponent,
    COMPONETS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,

  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
