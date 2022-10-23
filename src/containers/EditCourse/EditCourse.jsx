import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddCourseForm from "../../components/AddCourseForm/AddCourseForm";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./EditCourse.scss";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getCourseById = async id => {
    const url = `http://localhost:8080/course/${id}`;
    const response = await fetch(url);
    const courseData = await response.json();
    setCourse(courseData);
  };

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  const handleUpdate = async updatedCourse => {
    const result = await fetch(`http://localhost:8080/course/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourses),
    });

    if (result.ok) {
      alert("Course updated");
      setCourse(updatedCourse);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async updatedCourse => {

    const result = await fetch(`http://localhost:8080/course/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Course deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!course) return <h2>Course not found</h2> ;

  return (
    <section class="edit-course">
      <h2 class="edit-course__title">Edit Course</h2>
      <div class="edit-course__content">
        <CourseCard course={course} />
        <div class="edit-course__buttons">
          <button
            class={showForm ? "edit-course__button" : "edit-course__button edit-course__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button class="edit-course__button edit-course__button--secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <AddCourseForm defaultFormState={course} formTitle="Update course" handleSubmit={handleUpdate} />}
    </section>
  );
};

export default EditCourse;