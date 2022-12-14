import { useState } from "react";
import "./AddCourseForm.scss";


const AddCourseForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [course, setCourse] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

    if (Object.values(course).some(value => !value)) {
      alert("Missing required information, please complete all fields");
      return;
    }

    handleSubmit(course);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
      <input
          className="form-container__input"
          type="text"
          label="Image"
          placeholder="Upload Image"
          value={course.image}
          onInput={event => setCourse({ ...course, image: event.target.value })}
          
        />
        <input
          className="form-container__input"
          type="text"
          label="Course Name"
          placeholder="course name"
          value={course.name}
          onInput={event => setCourse({ ...course, name: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          label="Category"
          placeholder="Core or Optional"
          value={course.category}
          onInput={event => setCourse({ ...course, category: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          label="Year of Study"
          placeholder="year of study"
          value={course.level}
          onInput={event => setCourse({ ...course, level: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          label="Teacher"
          placeholder="Teacher"
          value={course.teacher}
          onInput={event => setCourse({ ...course, teacher: event.target.value })}
        />
        <textarea
          className="form-container__input--info"
          type="text"
          label="Course Information"
          placeholder="Course information"
          value={course.information}
          onInput={event => setCourse({ ...course, information: event.target.value })}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;