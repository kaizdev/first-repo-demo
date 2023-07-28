package io.nology.uruguayportfoliobackend.post;

import io.nology.uruguayportfoliobackend.exceptions.NotFoundException;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class PostController {

  @Autowired
  private PostService postService;

  // I am returning ResponseEntity because I want to have control over what status code gets returned as part of HTTP response
  // we don't use public Post createPost() -> because this would return 200 status code. We want a ResponseEntity that will return 201 status code and any headers

  // a POST request must have a body (what to add to the db) -> data param
  // we can't return as Post (because we don't want Id, and createdAt) -> create DTO

  // public ResponseEntity<Post> createPost(@RequestBody CreatePostDTO data) {

  // }

  //* We don't use this one because it always returns status 200 */
  // public Post createPost(@Valid @RequestBody CreatePostDTO data) {
  //   return this.postService.create(data); // forward to my service layer

  //^ CREATE
  //* The ResponseEntity will now correctly return 201 status code
  @PostMapping
  public ResponseEntity<Post> createPost(
    @Valid @RequestBody CreatePostDTO data
  ) {
    Post createdPost = this.postService.create(data);
    return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
  }

  //^ READ
  // List of posts List<Post> - all posts in the table
  @GetMapping
  public ResponseEntity<List<Post>> getAll() {
    List<Post> allPosts = this.postService.findAll();
    return new ResponseEntity<>(allPosts, HttpStatus.OK);
  }

  // Get posts by ID
  @GetMapping("/{id}")
  public ResponseEntity<Post> getById(@PathVariable Long id) {
    Optional<Post> foundPost = this.postService.findById(id);
    if (foundPost.isEmpty()) {
      // throw some error 404
      throw new NotFoundException(
        String.format("Post with id: %d is not found", id)
      );
    }
    return new ResponseEntity<>(foundPost.get(), HttpStatus.OK);
  }

  //^ Update
  @PatchMapping("/{id}")
  public ResponseEntity<Post> updateById(
    @PathVariable Long id,
    @Valid @RequestBody UpdatePostDTO data
  ) {
    Optional<Post> maybeUpdated = this.postService.updateById(id, data);

    if (maybeUpdated.isEmpty()) {
      throw new NotFoundException(
        String.format("Post with id: %s not found, could not update", id)
      );
    }

    return new ResponseEntity<Post>(maybeUpdated.get(), HttpStatus.OK);
    // for patch, we need to make the fields optional (don't need to update all the fields). new class that allows updateDTO

  }

  //^ Delete
  // return 204 - success, nothing to return
  @DeleteMapping("/{id}")
  public ResponseEntity<Post> deleteById(@PathVariable Long id) {
    boolean deleted = this.postService.deleteById(id);

    if (!deleted) {
      throw new NotFoundException(
        String.format("Post with id: %s not found, could not delete", id)
      );
    }
    return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
  }
}
