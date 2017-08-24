import { ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule } from '@angular/router';
import { NewsComponent } from './News/news.component';
import { UrlComponent} from './Urls/url.component';
import { HomeComponent } from './Home/home.component';
import {NotFoundComponent}  from './not-found/not-found.component'
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';

const appRoutes : Routes = [
	{path: '', component : HomeComponent},
	{path: 'News',component : NewsComponent},
	{path: 'Urls',component : UrlComponent},
	{path: 'Login',component:LoginComponent},
	{path: 'AddTask',component:AddTaskComponent},
	{path: '**',component:NotFoundComponent}
]
export const appRouting : ModuleWithProviders  = RouterModule.forRoot(appRoutes);