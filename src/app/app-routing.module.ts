import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { GuestHomeComponent } from './components/home/guest-home/guest-home.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { VendorHomeComponent } from './components/home/vendor-home/vendor-home.component';
import { NotFoundComponent } from './components/errors/NotFound/NotFound.component';
import { NotAuthorizedComponent } from './components/errors/NotAuthorized/NotAuthorized.component';
import { ListMoviePageComponent } from './pages/customer/list-movie-page/list-movie-page.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackListComponent } from './components/list/feedback-list/feedback-list.component';
import { ReservationPageComponent } from './pages/customer/reservation-page/reservation-page.component';
import { adminGuard } from './services/auth/admin.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: GuestHomeComponent,
    },
    {
        path: 'vendor',
        component: VendorHomeComponent,
    },
    {
        path: 'movies',
        component: ListMoviePageComponent,
    },
    {
        path: 'reservation',
        component: ReservationPageComponent,
    },
    {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [adminGuard]
    },
    {
        path: 'feedback-list',
        component: FeedbackListComponent,
        // canActivate: [adminGuard]
    },
    {
        path: 'faq',
        component: FaqComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'unauthorized',
        component: NotAuthorizedComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

