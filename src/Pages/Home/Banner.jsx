import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// className="h-[40vh] bg-cover bg-center flex flex-col justify-center items-center text-center "
// style={{
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg')`

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full text-black "
      >
        
        <SwiperSlide>
          <div
            className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center "
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .8)), url('https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?cs=srgb&dl=pexels-element5-1370298.jpg&fm=jpg')`,
            }}
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Discover the world of knowledge at our library! Explore, Learn,
                Grow.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Start Reading
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .8)), url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=pexels-pixabay-159711.jpg&fm=jpg')`,
            }}
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Browse our extensive catalog anytime, anywhere, for your next
                literary adventure.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Start Reading
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .8)), url('https://www.gvmgc.in/wp-content/uploads/2017/06/online-libr.jpg`,
            }}
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
                Access eBooks, audiobooks, journals, and more with just a click,
                expanding your reading horizons.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Start Reading
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .8)), url('https://www.nzherald.co.nz/resizer/v2/E3BPKY6JV4DQQ6O2A2J4IKREQI.jpg?auth=1845d8414684bf1a7da5c9466e6de30401ddff88040623baeae1aca805fa35b4&width=1200&height=675&quality=70&smart=true')`,
            }}
          >
            <div className="text-left p-10 space-y-5 lg:ml-32">
              <h2 className="text-2xl lg:text-5xl font-bold text-white lg:w-1/2">
              Access resources from libraries worldwide, expanding your reach and enriching your learning experience.
              </h2>
              <a href="#category">
                <button className="btn btn-outline text-white bg-black bg-opacity-40 my-10">
                  Start Reading
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
