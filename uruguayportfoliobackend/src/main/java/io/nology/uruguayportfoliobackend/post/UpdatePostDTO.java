package io.nology.uruguayportfoliobackend.post;

import jakarta.validation.constraints.Pattern;

public class UpdatePostDTO {

  //   @Size(min = 1)
  @Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be an empty string")
  String title;

  //   @Size(min = 1)
  @Pattern(
    regexp = "^(?=\\S).*$",
    message = "Category cannot be an empty string"
  )
  String category;

  //   @Size(min = 1)
  @Pattern(
    regexp = "^(?=\\S).*$",
    message = "Content cannot be an empty string"
  )
  String content;

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getCategory() {
    return this.category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getContent() {
    return this.content;
  }

  public void setContent(String content) {
    this.content = content;
  }
}
