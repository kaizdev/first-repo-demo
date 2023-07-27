package io.nology.uruguayportfoliobackend.post;

import jakarta.validation.constraints.NotBlank;

public class CreatePostDTO {

  // represent what the data from the user looks like (i.e. don't need Id, createdAt as these are handled by the db)
  @NotBlank // comes from validation library - not null and at least 1 non white space character
  String title;

  @NotBlank
  String content;

  @NotBlank
  String category;

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return this.content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getCategory() {
    return this.category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public CreatePostDTO(String title, String content, String category) {
    this.title = title;
    this.category = category;
    this.content = content;
  }
}
