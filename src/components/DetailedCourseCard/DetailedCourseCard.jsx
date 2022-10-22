import "./DetailedCourseCard.scss";

const DetailedCourseCard = (props) => {
    const {image, name, completionTime, price, information, location } = props;


  
    return (
    <div className='card' name="card">
      <div className='card__image-container'>
        <img src={image} alt="placeholder" className='card__image'/>
        </div>
        <h1 className='card__name'>{name}</h1>
        <h2 className='card__category'>{location}</h2>
        <h3 className='card__time'>{completionTime} </h3>
        <h3 className='card__price'>{price}</h3>
        <p className='card-information'>{information}</p>
        

    </div>
  )
}

export default DetailedCourseCard;