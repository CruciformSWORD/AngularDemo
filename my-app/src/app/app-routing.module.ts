import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SoccerfeedComponent } from './soccerfeed/soccerfeed.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NationalParksComponent } from './nationalparks/nationalparks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'soccerfeed', component: SoccerfeedComponent },
  { path: 'Repositories', component: RepositoriesComponent },
  { path: 'nationalparks', component: NationalParksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
