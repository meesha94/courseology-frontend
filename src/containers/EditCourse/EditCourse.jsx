import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddCourseForm from "../../components/AddCourseForm/AddCourseForm";
import DetailedCourseCard from "../../components/DetailedCourseCard/DetailedCourseCard";
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
      body: JSON.stringify(updatedCourse),
    });

    if (result.ok) {
      alert("Course updated");
      setCourse(updatedCourse);
      navigate("/");
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
      alert("This Course has been deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!course) return <h2>Course not found</h2> ;

  return (
    <section className="edit-course">
      <h2 className="edit-course__title">Edit Course</h2>
      <div className="edit-course__content">
        <div className="edit-course__buttons">
          <button
            className={showForm ? "edit-course__button" : "edit-course__button edit-course__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button className="edit-course__button edit-course__button--secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <AddCourseForm defaultFormState={course} formTitle="Update course" handleSubmit={handleUpdate} />}
    </section>
  );
};

export default EditCourse;