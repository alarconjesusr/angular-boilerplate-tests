import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { PostService } from '../service/post.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

type PostSearchState = {
  posts: Post[];
  loading: boolean;
  filter: { order: 'asc' | 'desc' };
};

const initialState: PostSearchState = {
  posts: [],
  loading: false,
  filter: { order: 'asc' },
};

export const postSearchStore = signalStore(
  withState(initialState),
  withProps(() => ({
    postService: inject(PostService),
  })),
  withComputed(({ posts }) => ({
    postCount: computed(() => posts().length),
  })),
  withMethods(({posts, postService, ...store}) => ({
    addPost(post: Post): void {
      patchState(store, {
        posts: [...posts(), post],
      });
    },
    getPosts: rxMethod<void>(
      pipe(
        switchMap(() => {
          return postService.getPosts();
        }),
        tap((posts: Post[]) => patchState(store, { posts })),
      ),
    ),
  })),
);
