package io.nology.uruguayportfoliobackend.post;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
// everything that happens to db is a transaction
// if something goes wrong, we can revert back so that we don't have incomplete data

public class PostService {

  // spring will create a copy of the instance
  // called dependency injection (@Autowired)
  @Autowired
  private PostRepository postRepository;

  public Post create(CreatePostDTO data) {
    // Business Logic - I want to trim all strings coming from data
    // Clean up the data before I create my post
    String postTitle = data.getTitle().trim();
    String postContent = data.getContent().trim();
    String postCategory = data.getCategory().trim();
    Date postCreatedAt = new Date();

    // turn DTO into a Post object
    Post newPost = new Post(
      postTitle,
      postCategory,
      postContent,
      postCreatedAt
    );
    // ensure same order as the constructor in Post class

    Post createdPost = this.postRepository.save(newPost);

    return createdPost;
  }
}
