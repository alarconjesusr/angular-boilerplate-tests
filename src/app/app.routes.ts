import { Routes } from '@angular/router';
import { chatsRoute } from './landings/pinterest-ideas/chats/chats.route';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form',
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then((m) => m.FormComponent),
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.component').then((m) => m.GridComponent),
  },
  {
    path: 'player',
    loadComponent: () => import('./player/player.component').then((m) => m.PlayerComponent),
  },
  {
    path: 'ngrx-signal',
    loadComponent: () =>
      import('./ngrx-signals/ngrx-signal.component').then((m) => m.NgrxSignalComponent),
  },
  {
    path: 'http-resource',
    loadComponent: () =>
      import('./examples/http-resource/http-resource.component').then(
        (m) => m.HttpResourceComponent,
      ),
  },
  {
    path: 'nft',
    loadComponent: () => import('./landings/nft/nft-component').then((m) => m.NftComponent),
  },
  {
    path: 'pinterest',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landings/pinterest-ideas/pinterest.component').then(
            (m) => m.PinterestIdeasComponent,
          ),
      },
      {
        path: 'grids',
        children: [
          {
            path: 'lifestyle',
            loadComponent: () =>
              import('./landings/pinterest-ideas/grids/lifestyle/lifestyle.component').then(
                (m) => m.LifestyleComponent,
              ),
          },
          {
            path: 'rexfit',
            loadComponent: () =>
              import('./landings/pinterest-ideas/grids/rexfit/rexfit.component').then(
                (m) => m.RexfitComponent,
              ),
          },
        ],
      },
      chatsRoute
    ],
  },
];
