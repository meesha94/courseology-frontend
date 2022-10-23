import "./CreateCourse.scss";
import AddCourseForm from "../../components/AddCourseForm/AddCourseForm.jsx";

const CreateCourse = () => {
  
  const handleSubmit = async course => {
    await fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
  };


  const defaultFormState = { image: "", name: "", category: "", level: "", teacher: "", information: "" };

  return (
    <section className="create-course">
      <h2 className="create-course__title">Add Courses</h2>
      <AddCourseForm handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add A New Course" />
    </section>
  );
};

export default CreateCourse;