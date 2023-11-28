import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './main/pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
	},
	{
		path: '404',
		component: PageNotFoundComponent,
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
