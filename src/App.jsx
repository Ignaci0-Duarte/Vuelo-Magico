import { useEffect } from "react";
import "./App.css";
import React from "react";
import { Navbar, Container, Nav, Row, Col, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import tela from "../public/nuevatela.jpeg";
import foto1 from "../public/foto1.jpeg";
import foto2 from "../public/foto2.jpeg";
import foto3 from "../public/foto3.jpeg";
import foto4 from "../public/foto4.jpeg";
import foto5 from "../public/foto5.jpeg";
import foto6 from "../public/foto6.jpeg";
import foto7 from "../public/foto7.jpeg";
import foto8 from "../public/foto8.jpeg";
import foto9 from "../public/nuevas4.jpeg";
import nueva1 from "../public/nuevas1.jpeg";
import nueva2 from "../public/nuevas2.jpeg";
import nueva3 from "../public/nuevas3.jpeg";
import profe1 from "../public/profe1.jpeg";
import profe2 from "../public/profe2.jpeg";
import profe3 from "../public/profe3.jpeg";

const App = () => {
  useEffect(() => {
    document.title = "Vuelo Magico";
  }, []);
  return (
    <>
      <Navbar style={{ backgroundColor: "#FEFEFE" }}>
        <Container className="d-flex justify-content-evenly">
          <Nav.Link
            href="https://www.instagram.com/vuelo_magico_taller_aereo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="d-flex align-items-center links"
            style={{ color: "#1D687B", textDecoration: "none" }}
          >
            <img
              src="/instagram.svg"
              alt="Instagram"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Instagram
          </Nav.Link>
          <Nav.Link
            href="https://wa.me/34602464229"
            className="d-flex align-items-center links"
            style={{ color: "#1D687B", textDecoration: "none" }}
          >
            <img
              src="/whatsapp.svg"
              alt="WhatsApp"
              style={{ width: "20px", marginRight: "8px" }}
            />
            WhatsApp
          </Nav.Link>
        </Container>
      </Navbar>

      <Container
        fluid
        style={{
          backgroundColor: "#D6E9E7",
          minHeight: "100vh",
          padding: 0,
          overflowX: "hidden",
        }}
      >
        <Row
          noGutters
          className="d-flex align-items-center g-0"
          style={{ margin: 0 }}
        >
          <Col xs={6} className="text-center py-4">
            <h1
              style={{ color: "#1D687B", textAlign: "center" }}
              className="tituloGB"
            >
              VUELO
            </h1>
            <h1
              style={{ color: "#16C8AA", textAlign: "center" }}
              className="mb-5 tituloGB"
            >
              MÁGICO
            </h1>
            <p
              style={{ color: "#1B888B", textAlign: "center" }}
              className="slogan"
            >
              Descubre la Magia de Volar
            </p>
          </Col>
          <Col xs={6} className="p-0">
            <img
              src={tela}
              alt="Vuelo Mágico"
              style={{ objectFit: "cover" }}
              className="img-fluid img-tela"
            />
          </Col>
        </Row>

        <Swiper
          className="mt-5"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
        >
          <SwiperSlide>
            <img src={foto1} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto2} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto4} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto3} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto5} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nueva3} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto6} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nueva2} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto7} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nueva1} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto8} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto9} className="img-fluid w-100 h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nueva1} className="img-fluid w-100 h-40" />
          </SwiperSlide>
        </Swiper>

        <h2 className="text-center my-5 tituloGP" style={{ color: "#1D687B" }}>
          NUESTRAS PROFESORAS
        </h2>

        <Row className="text-center">
          <Col xs={12} md={4} className="mb-4">
            <img
              src={profe1}
              alt={`Profesor`}
              className="rounded-circle"
              style={{ width: "250px", height: "250px" }}
            />
            <h3 style={{ color: "#1D687B" }} className="titulo">
              Alejandra Guerrero
            </h3>
            <h4 style={{ color: "#16C8AA" }} className="subtitulo">
              Masaje Consciente
            </h4>
            <p style={{ color: "#1D687B" }} className="mx-2">
              Sureña afincada en Madrid. Abogada de profesión y apasionada del
              deporte. Mi primer contacto con los masajes y la expresión
              corporal fue ya de pequeña en un taller de teatro. Entiendo los
              masajes como una forma de conexión entre el cuerpo y la mente por
              lo que, mi misión en este retiro es que después de la práctica de
              aéreos y yoga consigáis una dosis extra de relajación.
            </p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <img
              src={profe3}
              alt={`Profesor`}
              className="rounded-circle"
              style={{ width: "250px", height: "250px" }}
            />
            <h3 style={{ color: "#1D687B" }} className="titulo">
              Gosia
            </h3>
            <h4 style={{ color: "#16C8AA" }} className="subtitulo">
              Yoga
            </h4>
            <p style={{ color: "#1D687B" }} className="mx-2">
              Polaca de nacimiento, yogui de corazón, amante de la naturaleza y
              animales, en tiempo libre practicante de acrobacias aéreas y
              patinadora. Empecé mi experiencia con el yoga en 2016, que muy
              rápidamente se convirtió para mí en mucho más que un tipo de
              deporte, se convirtió en una forma de vida. En 2020 obtuve el
              título de instructora de yoga y desde entonces comparto mi pasión
              y conocimientos sobre la práctica del yoga. Durante este retiro,
              te invitaré al baile de tu cuerpo y tu alma al ritmo de la
              respiración y los movimientos de las asanas.
            </p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <img
              src={profe2}
              alt={`Profesor`}
              className="rounded-circle"
              style={{ width: "250px", height: "250px" }}
            />
            <h3 style={{ color: "#1D687B" }} className="titulo">
              Ana Carolina Lazarte
            </h3>
            <h4 style={{ color: "#16C8AA" }} className="subtitulo">
              Acrobacia Aérea
            </h4>
            <p style={{ color: "#1D687B" }} className="mx-2">
              Argentina, viviendo en España, Directora general. La mayoría me
              conoce como Cocó. Llevo 15 años dedicada a las Acrobacias Aéreas,
              una disciplina que me permite volar, literal y figurativamente. En
              estos años me formé como artista y profesora, trabajando duro para
              perfeccionar mis habilidades, combinando gracia, fuerza y una
              profunda pasión por lo que hago. Cada vez que estoy en el aire,
              siento que estoy en mi elemento. Y esto lo quiero compartir con
              mis alumnos, la experiencia de sentirse libres, fuertes y felices.
              En este retiro te invito a descubrir la Magia de Volar conmigo.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
