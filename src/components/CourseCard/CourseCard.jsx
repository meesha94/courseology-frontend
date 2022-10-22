import "./CourseCard.scss";

const CourseCard = (props) => {
    const {image, name, level, teacher} = props;


  
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="placeholder" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h3 className='card__time'>{level} </h3>
        <h3 className='card__price'>{teacher}</h3>
        

    </div>
  )
}

export default CourseCard;
