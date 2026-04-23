import { Component, inject, OnInit } from "@angular/core";
import { postSearchStore } from "./store/post-search-store";
import { JsonPipe } from "@angular/common";
import { PostService } from "./service/post.service";

@Component({
  selector: 'app-ngrx-signal',
  templateUrl: './ngrx-signal.component.html',
  styleUrls: ['./ngrx-signal.component.css'],
  providers: [postSearchStore, PostService],
  imports: [JsonPipe]
})
export class NgrxSignalComponent implements OnInit{
    postStore =  inject(postSearchStore);

    ngOnInit(): void {
        
    }
}