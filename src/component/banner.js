import MainBanner from '../assets-img/banner-img/clarity-banner-main.png';
import Banner_new from '../assets-img/banner-img/dock_banner_.png';
import banner_home from '../assets-img/banner-img/iris_banner-home.png';

import '../SCSS/App.scss';

const Banner = () => {
      return (

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                  <div class="carousel-inner">
                        <div class="carousel-item active">
                             <img src={MainBanner} class="d-block w-100" alt="banner-img"/>
                        </div>
                        <div class="carousel-item">
                           <img src={Banner_new} class="d-block w-100" alt="banner-img"/>
                        </div>
                        <div class="carousel-item">
                            <img src={banner_home} class="d-block w-100" alt="banner-img"/>
                        </div>
                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden ">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                  </button>
        </div>
      )
  }

export default Banner;