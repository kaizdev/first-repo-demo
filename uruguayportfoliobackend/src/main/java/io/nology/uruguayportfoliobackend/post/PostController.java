package io.nology.uruguayportfoliobackend.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class PostController {

  @Autowired
  private PostService postService;

  @PostMapping
  // I am returning ResponseEntity because I want to have control over what status code gets returned as part of HTTP response
  // we don't use public Post createPost() -> because this would return 200 status code. We want a ResponseEntity that will return 201 status code and any headers

  // a POST request must have a body (what to add to the db) -> data param
  // we can't return as Post (because we don't want Id, and createdAt) -> create DTO

  // public ResponseEntity<Post> createPost(@RequestBody CreatePostDTO data) {

  // }

  public Post createPost(@Valid @RequestBody CreatePostDTO data) {
    System.out.println(data.category);
    System.out.println(data.content);
    System.out.println(data.title);
    return this.postService.create(data); // forward to my service layer
  }
}
