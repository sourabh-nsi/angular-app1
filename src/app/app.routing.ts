import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { QueryComponent } from './query/query.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'home', component: HomeComponent },
    { path: 'query', component: QueryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
    ];
export const Routing = RouterModule.forRoot(appRoutes);