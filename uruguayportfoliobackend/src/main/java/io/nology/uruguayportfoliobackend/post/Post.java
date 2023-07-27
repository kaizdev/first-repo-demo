package io.nology.uruguayportfoliobackend.post;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {

  // add a property that will be my primary key
  // add annotation @Id
  // db to generate value for me @GeneratedValue(strategy = GenerationType.IDENTITY) -> equivalent to AUTO INCREMENT in SQL
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  // all the properties I will add here will be columns in the database in the posts table
  @Column
  private String title;

  // maybe this could be done differently in the future? A separate table
  @Column
  private String category;

  @Column
  private String content;

  @Column
  private Date createdAt;

  public Long getId() {
    return this.id;
  }

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

  public Date getCreatedAt() {
    return this.createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }

  public String getContent() {
    return this.content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Post() {} // default constructor to keep Spring happy (otherwise might have errors). Called noArgsConstructor in Lombok

  public Post(String title, String category, String content, Date createdAt) {
    this.title = title;
    this.category = category;
    this.content = content;
    this.createdAt = createdAt;
  }
}
