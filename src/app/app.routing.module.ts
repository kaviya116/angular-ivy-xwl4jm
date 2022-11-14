import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './task/register/register.component';
import { HomeComponent } from './task/home/home.component';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
     
      { path: 'register', component: RegisterComponent},
      { path: 'home', component: HomeComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
