package io.nology.uruguayportfoliobackend.post;

import jakarta.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
// everything that happens to db is a transaction
// if something goes wrong, we can revert back so that we don't have incomplete data

public class PostService {

  // spring will create a copy of the instance
  // called dependency injection (@Autowired)
  @Autowired
  private PostRepository postRepository;

  @Autowired
  private ModelMapper modelMapper;

  public Post create(CreatePostDTO data) {
    // Business Logic - I want to trim all strings coming from data
    // Clean up the data before I create my post
    // String postTitle = data.getTitle().trim();
    // String postContent = data.getContent().trim();
    // String postCategory = data.getCategory().trim();
    // Date postCreatedAt = new Date();

    //  replace with mapper
    //  turn DTO into a Post object
    // Post newPost = new Post(
    //   postTitle,
    //   postCategory,
    //   postContent,
    //   postCreatedAt
    // );
    // ensure same order as the constructor in Post class

    // this mapper replaces the above
    Post newPost = modelMapper.map(data, Post.class);
    newPost.setCreatedAt(new Date());

    Post createdPost = this.postRepository.save(newPost);

    return createdPost;
  }

  public List<Post> findAll() {
    return this.postRepository.findAll();
  }

  public Optional<Post> findById(Long id) {
    //findById returns an Optional
    Optional<Post> maybePost = this.postRepository.findById(id);
    return maybePost;
  }

  public boolean deleteById(Long id) {
    Optional<Post> maybePost = this.findById(id);

    // if(maybePost.isEmpty()) {
    //   throw new NotFoundException("");
    // }

    if (maybePost.isEmpty()) {
      return false;
    }
    this.postRepository.delete(maybePost.get()); //remember .get() is how we get the value from an optional
    return true;
  }

  public Optional<Post> updateById(Long id, UpdatePostDTO data) {
    // find the post I want to update
    Optional<Post> maybePost = this.findById(id);
    if (maybePost.isPresent()) {
      Post existingPost = maybePost.get();
      //~ use Model mapper to do this more easier

      modelMapper.map(data, existingPost);

      return Optional.of(this.postRepository.save(existingPost));
      // if (data.title != null) {
      //   existingPost.setTitle(data.title);
      //   Post updatedPost = this.postRepository.save(existingPost);
      //   return Optional.of(updatedPost);
      // }
    }
    return maybePost;
  }
}
