import { Container, Image, Button, Card, CardGroup } from "react-bootstrap";
import styles from "../src/css/App.module.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import React, { useEffect } from "react";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Header />

      <Container>
        <Image
          className={styles.bgPath1}
          src="../assets/Path1.png"
          alt="path 1"
        />
        <Image
          className={styles.bgPath2}
          src="../assets/Path2.png"
          alt="path 2"
        />
        <Image
          data-aos="fade-left"
          className={styles.bgPath3}
          src="../assets/Path3.png"
          alt="path 3"
        />
        <div className={`text-center text-white ${styles.hero}`}>
          <p data-aos="zoom-in-up" className={styles.heroText1}>
            WEEKEND FROM HOME
          </p>
          <p className={`fst-italic ${styles.heroText2}`}>
            Stay active with a little workout.
          </p>
          <Image
            data-aos="fade-up"
            className={styles.bitmapImage}
            src="../assets/Bitmap1.png"
            alt="image bitmap"
          />
          <Image
            data-aos="fade-right"
            className={styles.bgOval}
            src="../assets/Oval.png"
            alt="oval"
          />
          <Button className={styles.btnHero}>Let’s Go</Button>
        </div>

        <div className="mt-5">
          <Image
            data-aos="zoom-in"
            className={styles.bitmapImage2}
            src="../assets/Bitmap2.png"
            alt="bitmap image"
          />
        </div>

        <div data-aos="fade-down" className="text-end mt-5">
          <Card className={styles.quote} body>
            <span>Deffinition;</span> a practice or exercise to test or improve
            one's fitness for athletic competition, ability, or performance to
            exhaust (something, such as a mine) by working to devise, arrange,
            or achieve by resolving difficulties.
            <p>Merriam-Webster.com Dictionary.</p>
            <p className="fst-italic text-white">-weekend team</p>
          </Card>
        </div>
      </Container>

      <div className={styles.bgColorSecondary}>
        <Container>
          <div className={`text-center text-white mt-5 ${styles.wrapper}`}>
            <p data-aos="zoom-in" className={styles.testimoni}>
              Testimonial
            </p>
            <Image
              className={styles.bgOval2}
              src="../assets/Oval.png"
              alt="oval"
            />
            <div className="d-flex align-items-center mt-5 ">
              <Image
                ref={navigationPrevRef}
                className={styles.arrowImage2}
                src="../assets/Arrow.png"
                alt="arrow"
              />
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
              >
                <SwiperSlide className="m-1">
                  <Card
                    className={`text-start p-2 ${styles.wrapperCardSlider}`}
                  >
                    <Card.Title className="ms-2 mb-0 p-2 fw-bold fs-2">
                      Blu Kicks
                    </Card.Title>
                    <Card.Text className="m-3" style={{ fontSize: "12px" }}>
                      Places where you can leverage tools and software to free
                      up time to focus on growing the business.
                    </Card.Text>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="m-1">
                  <Card
                    className={`text-start p-2 ${styles.wrapperCardSlider}`}
                  >
                    <Card.Title className="ms-2 mb-0 p-2 fw-bold fs-2">
                      Angelus
                    </Card.Title>
                    <Card.Text className="m-3" style={{ fontSize: "12px" }}>
                      All those apps took me months to get running. Now the site
                      practically runs itself!.
                    </Card.Text>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="m-1">
                  <Card
                    className={`text-start p-2 ${styles.wrapperCardSlider}`}
                  >
                    <Card.Title className="ms-2 mb-0 p-2 fw-bold fs-2">
                      SoYoung
                    </Card.Title>
                    <Card.Text className="m-3" style={{ fontSize: "12px" }}>
                      Unless you have a truly unique product, it will be very
                      hard to differentiate and gain brand traction.
                    </Card.Text>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="m-1">
                  <Card
                    className={`text-start p-2 ${styles.wrapperCardSlider}`}
                  >
                    <Card.Title className="ms-2 mb-0 p-2 fw-bold fs-2">
                      Lorem Ipsum
                    </Card.Title>
                    <Card.Text className="m-3" style={{ fontSize: "12px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </Card.Text>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="m-1">
                  <Card
                    className={`text-start p-2 ${styles.wrapperCardSlider}`}
                  >
                    <Card.Title className="ms-2 mb-0 p-2 fw-bold fs-2">
                      Lorem Ipsum 2
                    </Card.Title>
                    <Card.Text className="m-3" style={{ fontSize: "12px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </Card.Text>
                  </Card>
                </SwiperSlide>
              </Swiper>
              <Image
                ref={navigationNextRef}
                className={styles.arrowImage}
                src="../assets/Arrow.png"
                alt="arrow"
              />
            </div>
          </div>

          <div
            data-aos="fade-right"
            className={`text-center text-white ${styles.wrapper2}`}
          >
            <p className={styles.testimoni}>POV</p>
            <Card className={styles.wrapperCard} body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </Card>
          </div>

          <div
            data-aos="fade-left"
            className={`text-center text-white ${styles.wrapper2}`}
          >
            <p className={styles.testimoni}>Resource</p>
            <Card className={styles.wrapperCard} body>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best.
            </Card>
          </div>

          <div className={`text-center text-white ${styles.wrapper2}`}>
            <p data-aos="fade-down" className={styles.testimoni}>
              Help $ Tips
            </p>
            <Image
              className={styles.bgPath4}
              src="../assets/Path4.png"
              alt="path image"
            />
            <CardGroup>
              <Card className={styles.cardStyle}>
                <Card.Img variant="top" src="../assets/Image1.png" />
                <Card.Body
                  className={`d-flex justify-content-between align-items-center text-start ${styles.cardBody}`}
                >
                  <Card.Title className={styles.cardTitle}>
                    Start quickly with simple steps
                  </Card.Title>
                  <Image
                    className={styles.arrowImage}
                    src="../assets/Arrow.png"
                    alt="arrow image"
                  />
                </Card.Body>
              </Card>
              <Card className={styles.cardStyle}>
                <Card.Img variant="top" src="../assets/Image2.png" />
                <Card.Body
                  className={`d-flex justify-content-between align-items-center text-start ${styles.cardBody}`}
                >
                  <Card.Title className={styles.cardTitle}>
                    Run smoothly at vero eos et accusamus
                  </Card.Title>
                  <Image
                    className={styles.arrowImage}
                    src="../assets/Arrow.png"
                    alt="arrow image"
                  />
                </Card.Body>
              </Card>
              <Card className={styles.cardStyle}>
                <Card.Img variant="top" src="../assets/Image3.png" />
                <Card.Body
                  className={`d-flex justify-content-between align-items-center text-start ${styles.cardBody}`}
                >
                  <Card.Title className={styles.cardTitle}>
                    Denounce with righteous indignation
                  </Card.Title>
                  <Image
                    className={styles.arrowImage}
                    src="../assets/Arrow.png"
                    alt="arrow image"
                  />
                </Card.Body>
              </Card>
            </CardGroup>
          </div>

          <div
            data-aos="fade-down"
            className={`text-center text-white ${styles.wrapper2}`}
          >
            <p className={styles.testimoni}>You’re all set.</p>
            <Card className={styles.wrapperCard} body>
              The wise man therefore always holds in these matters to this
              principle of selection.
            </Card>
          </div>
        </Container>

        <div className={styles.wrapper}>
          <Image
            className={styles.bitmapImage4}
            src="../assets/Bitmap3.png"
            alt="bitmap image"
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
