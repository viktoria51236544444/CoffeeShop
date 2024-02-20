import Face from "./assets/Image-ourstory.png";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Equipment from "./assets/Equipment.png";
import Type from "./assets/Type.png";
import Take from "./assets/TakeAway.png";
import Beans from "./assets/Beans.png";
import Pastry from "./assets/Pastry.png";
import Offer from "./assets/offer.png";
import Shop from "./assets/shop.png";
import LittleBean1 from "./assets/littlebean1.png";
import LittleBean2 from "./assets/littlebean2.png";
import Modal from "react-modal";
const MainContentBlock1 = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
  };
  const [modalIsOpenEquipment, setModalIsOpenEquipment] = useState(false);
  const [modalIsOpenType, setModalIsOpenType] = useState(false);
  const [modalIsOpenTake, setModalIsOpenTake] = useState(false);
  const [modalIsOpenBeansVariant, setModalIsOpenBeansVariant] = useState(false);
  const [modalIsOpenPastry, setModalIsOpenPastry] = useState(false);

  const openModalEquipment = () => {
    setModalIsOpenEquipment(true);
  };
  const openModalType = () => {
    setModalIsOpenType(true);
  };
  const openModalTake = () => {
    setModalIsOpenTake(true);
  };
  const openModalBeansVariant = () => {
    setModalIsOpenBeansVariant(true);
  };
  const openModalPastry = () => {
    setModalIsOpenPastry(true);
  };
  const closeModal = () => {
    setModalIsOpenEquipment(false);
    setModalIsOpenType(false);
    setModalIsOpenTake(false);
    setModalIsOpenBeansVariant(false);
    setModalIsOpenPastry(false);
  };

  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers{" "}
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers{" "}
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers{" "}
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="services__content">
        <h2
          style={{
            fontFamily: "Dancing Script",
            color: "white",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: "120px",
          }}
        >
          Services
        </h2>
        <div className="service_img">
          <div onClick={openModalEquipment}>
            <img src={Equipment} alt="Equipment" />
          </div>
          <div onClick={openModalType}>
            <img src={Type} alt="Type of Coffee" />
          </div>
          <div onClick={openModalTake}>
            <img src={Take} alt="" />
          </div>
          <div onClick={openModalBeansVariant}>
            <img src={Beans} alt="" />
          </div>
          <div onClick={openModalPastry}>
            <img src={Pastry} alt="" />
          </div>
          <Modal
            isOpen={modalIsOpenEquipment}
            onRequestClose={closeModal}
            contentLabel="Equipment Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2>Name of Equipment</h2>
              <p>Description of Equipment...</p>
              <button className="ModalButton" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenType}
            onRequestClose={closeModal}
            contentLabel="Type Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2>Type of Coffee</h2>
              <p>Description of Types...</p>
              <button className="ModalButton" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenTake}
            onRequestClose={closeModal}
            contentLabel="Take A Way"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2>Take A Way</h2>
              <p>Description of Getting Coffees...</p>
              <button className="ModalButton" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenBeansVariant}
            onRequestClose={closeModal}
            contentLabel="Beans Variant"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2>Beans Variant</h2>
              <p>Description of Beans Variant...</p>
              <button className="ModalButton" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenPastry}
            onRequestClose={closeModal}
            contentLabel="Pastry"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2>Pastry</h2>
              <p>Description of Pastry...</p>
              <button className="ModalButton" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="offer__container">
        <div className="text__container">
          <h2>Offer</h2>
          <h3>Up To 50% Off</h3>
          <p>
            At Our Cafe, We Take Pride In Providing Our Customers With The Best
            Coffee Around. Our Carefully-Selected Coffees Come From Some Of The
            Most Renowned Coffee Growing Regions In The World, Ensuring That
            Each Cup Is Unrivaled In Flavor And Freshness.
          </p>
          <img src={Shop} alt="Shop" id="shop" />
        </div>
        <div className="text__container-right">
          <img src={Offer} alt="Offer" />
        </div>
      </div>
    </div>
  );
};

export default MainContentBlock1;
