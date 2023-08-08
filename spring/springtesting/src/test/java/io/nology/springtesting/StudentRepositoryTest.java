package io.nology.springtesting;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest // every time it sees Autowired, inject the data for us
// Unit tests for StudentRepository
public class StudentRepositoryTest {

  @Autowired
  private StudentRepository underTest;

  @AfterEach
  // clear the db after every test - don't want to impact the db
  void tearDown() {
    underTest.deleteAll();
  }

  // these are sort of unit tests for the repositories
  @Test
  void itShouldCheckWhenStudentEmailExists() {
    // ensure the method name is descriptive
    // the email is added to the db, so we can test if it exists
    String email = "calum@gmail.com";
    Student student = new Student("Calum", email, Student.Gender.MALE);

    underTest.save(student);

    boolean received = underTest.selectExistsEmail(email);
    assertThat(received).isTrue();
  }

  @Test
  void existsByEmailShouldReturnFalseWhenEmailDoesntExist() {
    // no email is added to the db. Check should fail
    String email = "jack@gmail.com";
    boolean received = underTest.selectExistsEmail(email);
    assertThat(received).isFalse();
  }

  @Test
  void selectCountShouldReturnTheRightCountOfRecord() {
    String email1 = "calum@gmail.com";
    Student student1 = new Student("Calum", email1, Student.Gender.MALE);

    underTest.save(student1);

    Integer received = underTest.selectCount();
    assertThat(received).isEqualTo(1);
  }
}
