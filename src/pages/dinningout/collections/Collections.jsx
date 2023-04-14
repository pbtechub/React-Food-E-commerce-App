import './collections.scss'
import { Carousel } from 'bootstrap'
import { collections } from '../../../assets/data'
// import Carousel from 'react-bootstrap'

const Collections = () => {
  return (
    <div className='collections'>
     
        <h1>Collections</h1>
        <div className='collectionsDetail'>
          <div>
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
            </p>
            <p>
              <a href="http://" target="_blank" rel="noopener noreferrer">All collections in Bangalore</a>
            </p>
          </div>
          <div className='collectionPic'>
            {collections.map((collection) => (
              <div key={collection.id}>
                <div className='colImg'>
                  <img src={collection.collectionImg} alt="" srcset="" />
                  <div className='colDesc'>
                    <h4>{collection.descriptio}</h4>
                    <p>{collection.place}</p>
                </div>
                </div>
                
               
              </div>
            ))}
          </div>
        </div>
     
    </div>
  )
}

export default Collections