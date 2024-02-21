import React from "react";
import bg from "../homepage/assets/review-img/customer-review-BG.png";
import beanbig from "../homepage/assets/review-img/review-bean-big.png";
import beantop from "../homepage/assets/review-img/review-bean-top.png";
import beanbot from "../homepage/assets/review-img/review-bean-bot.png";

const ReviewSection = () => {
  return (
    <div>
      <section
        className="review"
        style={{
          backgroundImage: `url(../homepage/assets/review-img/review-bean-big.png), url(../homepage/assets/review-img/review-bean-top.png), url(./img/review-img/review-bean-bot.png)`,
        }}
      >
        <div className="review__container">
          <div className="review__title">
            <h2>customer review</h2>
          </div>
          <div className="review__border">
            <div
              className="swiper review__slider-container"
              style={{
                backgroundImage:
                  "url('../homepage/assets/review-img/customer-review-BG.png')",
              }}
            >
              <div className="swiper-wrapper review__slider">
                <div className="swiper-slide swiper-slide3 review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/rev_person_1.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Tyler Student</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      I love spending my downtime in a cozy coffee shop,
                      surrounded by the sweet aroma of freshly brewed drinks and
                      pastries.
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/rev_person_2.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Joanna Doe</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      I love spending my downtime in a cozy coffee shop,
                      surrounded by the sweet aroma of freshly brewed drinks and
                      pastries.
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/rev_person_3.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>John Doe</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      I love spending my downtime in a cozy coffee shop,
                      surrounded by the sweet aroma of freshly brewed drinks and
                      pastries.
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/rev_person_4.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Melissa Doe</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      I love spending my downtime in a cozy coffee shop,
                      surrounded by the sweet aroma of freshly brewed drinks and
                      pastries.
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/rev_person_5.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Jane Doe</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      I love spending my downtime in a cozy coffee shop,
                      surrounded by the sweet aroma of freshly brewed drinks and
                      pastries.
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/nazar.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Nazar Kekosh</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      A web developer and just a good person who lives in
                      Ukraine and wishes everyone good luck! See you again...
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/iren.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Iryna Pec</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      A web developer and just a good person who lives in
                      Ukraine and wishes everyone good luck! See you again...
                    </p>
                  </div>
                </div>

                <div className="swiper-slide review__card">
                  <div className="review__marks">
                    <img src="./img/review-img/rev_qmark.svg" alt="img" />
                  </div>
                  <div className="review__card-image">
                    <img src="./img/review-img/vasa.png" alt="img" />
                  </div>
                  <div className="review__name">
                    <p>Vasyl Melko</p>
                  </div>
                  <div className="review__star">
                    <img src="./img/review-img/rev_stars.svg" alt="stars" />
                  </div>
                  <div className="review__describe">
                    <p>
                      A web developer and just a good person who lives in
                      Ukraine and wishes everyone good luck! See you again...
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next swiper-button-next3"></div>
              <div className="swiper-button-prev swiper-button-prev3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
