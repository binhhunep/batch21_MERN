import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//import animate
import Animate from "rc-animate";
/****************************************/

export default function LightBoxGridGallery() {
  //import animate
  const [show, setShow] = useState(true);
  /****************************************/
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  const [start, setStart] = useState(1);
  const [image, setImage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  const selectImage = (item) => {
    setOpenModal(!openModal);
    setImage(item);
    setShow(!show);
  };
  const changeImageLeftClick = () => {
    if (image > 1) {
      setImage(image - 1);
      setShow(!show);
    }
  };
  const changeImageRightClick = () => {
    if (image < 8) {
      setImage(image + 1);
      setShow(!show);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // console.debug("Timer id: ", timer) ;
      // Kiem tra so lan render cua app, toi uu la gia tri nay khong doi
      if (start < 9) {
        setStart(start + 1);
      } else {
        setStart(1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [start]);

  return (
    <div className={`row ${styles.container}`}>
      {images.map((item, index) => {
        return (
          <div
            className={`col-lg-3 col-md-4 col-sm-6 ${styles.container_images}`}
            key={index}
          >
            {start === item ? (
              <Animate>
                <img
                  key={start === item}
                  onClick={() => selectImage(item)}
                  alt="Images"
                  src={`images/session2/imageGallaries/lightboxGridGallery/${item}.jpg`}
                  className={` ${styles.container_image_animation}`}
                />
              </Animate>
            ) : (
              <img
                key={start === item}
                onClick={() => selectImage(item)}
                alt="Images"
                src={`images/session2/imageGallaries/lightboxGridGallery/${item}.jpg`}
                className={` ${styles.container_image_noneAnimation}`}
              />
            )}
            <div
              style={{
                display: openModal && image === item ? "block" : "none",
              }}
              className={` ${styles.container_modal} modal text-primary body_modal`}
            >
              <div className={` ${styles.container_modal_image}`}>
                <div className={styles.modal_image_changeImage}>
                  <div
                    className={styles.image_changeImage_left}
                    onClick={changeImageLeftClick}
                  >
                    <BiChevronLeft
                      style={{ color: image === 1 ? "white" : "orange" }}
                      className={styles.image_chevron_left}
                      size={"7vw"}
                    />
                  </div>
                  <div
                    className={styles.image_changeImage_right}
                    onClick={changeImageRightClick}
                  >
                    <BiChevronRight
                      style={{
                        color: image === 8 ? "white" : "orange",
                      }}
                      className={styles.image_chevron_right}
                      size={"7vw"}
                    />
                  </div>
                </div>
                <Animate>
                  <img
                    key={show}
                    alt="Images"
                    src={`images/session2/imageGallaries/lightboxGridGallery/${image}.jpg`}
                    className={styles.modal_image_picture}
                  />
                </Animate>
              </div>
              <div className={` ${styles.container_modal_content}`}>
                <span
                  className={styles.modal_content_count}
                >{`Image ${image} of 8`}</span>
                <span
                  className={styles.modal_content_close}
                  onClick={closeModal}
                >
                  <AiOutlineClose size={"4vw"} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
