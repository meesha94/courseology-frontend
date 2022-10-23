import "./DetailedCourseCard.scss";

const DetailedCourseCard = ({image, name, category, level, teacher, information}) => {
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="course topic" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h2 className='card__category'>{category}</h2>
        <h3 className='card__level'>{level} </h3>
        <h3 className='card__teacher'>{teacher}</h3>
        <p className='card__information'>{information}</p>
    </div>
  )
}

export default DetailedCourseCard;