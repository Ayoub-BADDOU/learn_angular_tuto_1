import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  posts: any =[];
  loadPosts(){
    this.postService.getPosts()
    .subscribe( res => {this.posts= res;})
  }

}
