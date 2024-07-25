import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { reviews } from "../data";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-slate-200 py-20" id="reviews">
      <div className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <SectionTitle text={"Reviews"} />
        <article className="w-4/6 mx-auto mt-14 h-1/3 ">
          <Slider {...settings}>
            {reviews.map((review) => {
              const { id, img, name, job, quote } = review;
              return (
                <article
                  className="text-center flex place-items-center "
                  key={id}
                >
                  {/* <img
                    className=" mx-auto object-cover w-36 h-36 rounded-full mb-4 border-4 border-sky-950 shadow-md "
                    src={img}
                    alt={name}
                  /> */}
                  <h2 className="font-extrabold text-slate-950 text-lg tracking-wider mb-2">
                    {name}
                  </h2>
                  <p className="text-sm font-bold tracking-wide mb-2">{job}</p>
                  <p className="text-sm tracking-wide">{quote}</p>
                </article>
              );
            })}
          </Slider>
        </article>
      </div>
    </section>
  );
};

export default Review;
