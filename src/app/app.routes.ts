import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form',
    },
	{
		path: 'form',
		loadComponent: () => import('./form/form.component').then(m => m.FormComponent),
	},
];
