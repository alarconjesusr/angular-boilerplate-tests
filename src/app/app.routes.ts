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
    {
        path: 'grid',
        loadComponent: () => import('./grid/grid.component').then(m => m.GridComponent),
    },
    {
        path: 'player',
        loadComponent: () => import('./player/player.component').then(m => m.PlayerComponent),
    },
    {
        path: 'ngrx-signal',
        loadComponent: () => import('./ngrx-signals/ngrx-signal.component').then(m => m.NgrxSignalComponent),
    },
    {
        path: 'http-resource',
        loadComponent: () => import('./examples/http-resource/http-resource.component').then(m => m.HttpResourceComponent),
    },
];
