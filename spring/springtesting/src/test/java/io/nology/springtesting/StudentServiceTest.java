package io.nology.springtesting;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class StudentServiceTest {

  @Mock
  private StudentRepository studentRepository;

  private StudentService underTest; // service layer that we're testing

  @BeforeEach
  void setUp() {
    this.underTest = new StudentService(studentRepository);
    // we need this so that Spring doesn't call the actual data
  }

  @Test
  void getAllStudentsShouldCallFindAll() {
    underTest.getAllStudents();
    Mockito.verify(studentRepository).findAll(); //passes
    // Mockito.verify(studentRepository).selectCount(); //fails
    // making sure that the findAll is being called after getAllStudents is called
  }

  @Test
  void isShouldNotAddStudent() {
    String email1 = "calum@gmail.com";
    Student student1 = new Student("Calum", email1, Student.Gender.MALE);

    // underTest.addStudent(student1); //addStudent is from the service

    // we want it to always return true for the purpose of our testing (ArgumentMatches allows any String)
    BDDMockito
      .given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
      .willReturn(true); // if existsEmail is true, throw new BadRequestException

    Assertions
      .assertThatThrownBy(() -> underTest.addStudent(student1))
      .isInstanceOf(BadRequestException.class)
      .hasMessage("Email " + student1.getEmail() + " taken");
  }

  // test for successful create
  @Test
  void itShouldAddStudent() {
    Student student = new Student(
      "Calum",
      "calum@gmail.com",
      Student.Gender.MALE
    );

    BDDMockito
      .given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
      .willReturn(false);

    underTest.addStudent(student);
    // function needs to run first before the verify -> order is important (otherwise we get error that it wasn't invoked)

    // catch the input of the .save method
    // call .save method

    ArgumentCaptor<Student> studentArgument = ArgumentCaptor.forClass(
      Student.class
    ); // this captures the argument passed to save() during the execution of the addStudent method above. i.e. studentRepository.save(studentArgument)

    Mockito.verify(studentRepository).save(studentArgument.capture());

    Assertions.assertThat(studentArgument.getValue()).isEqualTo(student);
    Assertions
      .assertThat(studentArgument.getValue().getEmail())
      .isEqualTo(student.getEmail());
    // student is  being passed to save() in the actual method under test, and studentArgument.capture() in the test code is simply a mechanism to capture and verify that argument.
  }

  @Test
  void isShouldDeleteStudentIfIdExists() {
    Long id = 123L;

    // use any long (instead of the above static id)
    BDDMockito
      .given(studentRepository.existsById(ArgumentMatchers.anyLong()))
      .willReturn(true);

    underTest.deleteStudent(id);

    ArgumentCaptor<Long> idArgument = ArgumentCaptor.forClass(Long.class); //.class returns the name of the class (name space of the class)

    Mockito.verify(studentRepository).deleteById(idArgument.capture());

    Assertions.assertThat(idArgument.getValue()).isEqualTo(id);
  }

  @Test
  void isShouldNotDeleteStudentIfIdDoesntExist() {
    Long id = 123L;

    // mocking the output of the repository (as we don't actually want to call the repository)
    BDDMockito.given(studentRepository.existsById(id)).willReturn(false); // mock that the id doesnt exist in the db

    Assertions
      .assertThatThrownBy(() -> underTest.deleteStudent(id))
      .isInstanceOf(StudentNotFoundException.class)
      .hasMessage("Student with id " + id + " does not exists");
  }
}
