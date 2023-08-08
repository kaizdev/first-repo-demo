package io.nology.springtesting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
  @Query(
    "" +
    "SELECT CASE WHEN COUNT(s) > 0 THEN " +
    "TRUE ELSE FALSE END " +
    "FROM Student s " +
    "WHERE s.email = ?1"
  )
  Boolean selectExistsEmail(String email);

  @Query("SELECT COUNT(s) FROM Student s ")
  //   @Query(value = "SELECT COUNT(*) FROM students s", nativeQuery = true)
  Integer selectCount();
  // Spring already has inbuilt
  //   Boolean existsByEmail(String email);
  //   String findByName(String name);
}
// don't need to test default methods that come with Spring
// findAll
// findById
// existsByEmail
