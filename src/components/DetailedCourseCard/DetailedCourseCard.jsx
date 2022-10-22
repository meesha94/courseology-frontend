import "./DetailedCourseCard.scss";

const DetailedCourseCard = (props) => {
    const {image, name, level, teacher, information, category } = props;


  
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="placeholder" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h2 className='card__category'>{category}</h2>
        <h3 className='card__time'>{level} </h3>
        <h3 className='card__price'>{teacher}</h3>
        <p className='card-information'>{information}</p>
        

    </div>
  )
}

export default DetailedCourseCard;