import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';

const routes: Routes = [
  { path: 'today', component: WeatherTodayComponent},
  { path: 'forecast', component: WeatherSearchComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
