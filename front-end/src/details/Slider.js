import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { slidedata } from './sliderdata';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


function Slider() {
    return (
        <Carousel responsive={responsive}
                  infinite={true}
                  draggable={false}
                  swipeable={false}
                  centerMode={true} 
                  autoPlay={true}
                  autoPlaySpeed={1000}
                  showDots={false} 
                  removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {
                slidedata.map(product => (
                    <img style={{borderRadius:"1px",height:100,width:150,margin:20}} src = {product.url} key={product.id}/>
                ))
            }
        </Carousel>
    )
}

export default Slider
