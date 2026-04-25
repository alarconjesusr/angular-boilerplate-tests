import { Route } from '@angular/router';

export const chatsRoute: Route = {
  path: 'chats',
  children: [
    {
      path: 'morechat',
      loadComponent: () =>
        import('./morechat/morechat.component').then(
          (m) => m.MorechatComponent,
        ),
    },
  ],
};
