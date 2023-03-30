import React from "react";
import { Link } from "react-router-dom";

import combo1 from "/assets/combo+.png";
import combo2 from "/assets/combo+2.png";
import logo from "/assets/logo.svg";
import plan1 from "/assets/plan.svg";
import plan2 from "/assets/plan2.png";
import plan3 from "/assets/plan3.png";
import image1 from "/assets/image1.png";
import image2 from "/assets/image2.jpg";
import image3 from "/assets/image3.jpg";
import image4 from "/assets/image4.jpg";
import image5 from "/assets/image5.jpg";
import image6 from "/assets/image6.jpg";
import image7 from "/assets/image7.jpg";
import image8 from "/assets/image8.jpg";
import image9 from "/assets/image9.jpg";
import image10 from "/assets/image10.jpg";
import image11 from "/assets/image11.png";
import image13 from "/assets/image13.png";
import image14 from "/assets/image14.png";
import image15 from "/assets/image15.png";
import image16 from "/assets/image16.png";
import { questions } from "./../data/Questions";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div className="w-full bg-nav-pos-scroll">
      <div className="w-full lg:h-screen pt-[60vw] md:pt-[50vw] lg:pt-0 pb-10 lg:pb-0 relative pl-0 lg:pl-10">
        <div className="bg__hero bg-bg-hero-xs md:hidden bg-image-hero bg-top" />
        <div className="bg__hero hidden md:block bg-bg-hero-md bg-image-hero" />
        <div className="bg__hero hidden lg:block bg-bg-hero-lg bg__hero" />
        <div className="w-full lg:max-w-[550px] h-full flex flex-col items-center lg:justify-center relative z-10">
          <img
            src={logo}
            alt="Logo da Disney+"
            className="w-40 md:w-56 lg:w-72"
          />
          <p className="text-text-btn text-lg lg:text-2xl font-Metropolis-medium mt-5 mb-10">
            As melhores histórias em um só lugar.
          </p>
          <div className="w-[60%] md:w-[80%] lg:w-full mx-auto flex flex-col md:flex-row gap-10 lg:gap-5">
            <div className="flex flex-col text-center gap-4">
              <img src={combo1} alt="" />
              <Link className="btn border-bg-btn2 bg-bg-btn2 w-full py-3">
                ASSINE AGORA
              </Link>
            </div>
            <div className="flex flex-col text-center gap-4">
              <img src={combo2} alt="" />
              <Link className="btn border-bg-btn2 bg-bg-btn2 w-full py-3">
                ASSINE AGORA
              </Link>
            </div>
          </div>
          <Link className="text-text-btn text-xs underline mt-10 lg:mt-16">
            Assinar somente o Disney+
          </Link>
        </div>
      </div>
      <div className="py-10 px-4">
        <h2 className="text-center text-4xl text-white font-Metropolis-bold">
          Escolha seu plano
        </h2>
        <h6 className="text-center text-lg text-white/70 font-Metropolis-medium mt-10">
          Cancele a qualquer momento.
        </h6>
        <div className="max-w-[1000px] mx-auto flex sticky top-0 pt-20 text-white text-center border-b-2 border-white bg-nav-pos-scroll">
          <div className="hidden md:flex col-span-2 px-1 pb-2 pt-3 w-[33%]" />
          <div className="border-t-2 border-white/50 px-1 pb-3 pt-4 flex flex-col items-center justify-between gap-4 flex-1">
            <span className="text-sm">Disney+</span>
            <img src={plan1} alt="/" className="w-[60%]" />
            <Link className="text-xs md:text-sm btn bg-bg-btn2 border-bg-btn2 py-3 rounded-md">
              R$ 27,90/MÊS*
            </Link>
          </div>
          <div className="border-t-2 border-white/50 px-1 pb-3 pt-4 flex flex-col items-center justify-between gap-4 flex-1 bg-[#1d1f2b]">
            <span className="text-sm">Combo+</span>
            <img src={plan2} alt="/" className="w-[60%]" />
            <Link className="text-xs md:text-sm btn bg-bg-btn2 border-bg-btn2 py-3 rounded-md">
              R$ 45,90/MÊS*
            </Link>
          </div>
          <div className="border-t-2 border-white/50 px-1 pb-3 pt-4 flex flex-col items-center justify-between gap-4 flex-1">
            <span className="md:whitespace-nowrap text-sm">
              Star+ Disney+ LIONSGATE+
            </span>
            <img src={plan3} alt="/" className="w-[100%]" />
            <Link className="text-xs md:text-sm btn bg-bg-btn2 border-bg-btn2 py-3 rounded-md">
              R$ 55,90/MÊS*
            </Link>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto text-white/50">
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">Preço anual</p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 flex flex-col text-center md:padding__plan bg__check__trace">
                <Link className="text-sm text-white">
                  R$ 279.90/ano à vista*
                </Link>
                <small className="text-xs">12 meses pelo preço de 10</small>
              </div>
              <div className="flex-1 trace padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 trace padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Filmes, séries e originais exclusivos da Disney, Pixar, Marvel,
                Star Wars e National Geographic
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 check padding__plan bg__check__trace" />
              <div className="flex-1 check padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 check padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Os melhores torneios e ligas esportivas do mundo ao vivo com a
                ESPN
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 trace padding__plan bg__check__trace" />
              <div className="flex-1 check padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 check padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Produções locais, programas, séries e filmes premiados
                exclusivos do Star+
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 trace padding__plan bg__check__trace" />
              <div className="flex-1 check padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 check padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Dispositivos para reprodução simultânea
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 text-center md:padding__plan bg__check__trace">
                <span>4</span>
              </div>
              <div className="flex-1 text-center md:padding__plan md:bg__plan bg__check__trace">
                <span>4 + 4</span>
              </div>
              <div className="flex-1 text-center md:padding__plan bg__check__trace">
                <span>4 + 4 + 4</span>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Baixe seus favoritos para assistir sem precisar de internet
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 trace padding__plan bg__check__trace" />
              <div className="flex-1 check padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 check padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Crie perfis personalizados na sua conta
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 text-center md:padding__plan bg__check__trace">
                <span>7</span>
              </div>
              <div className="flex-1 text-center md:padding__plan md:bg__plan bg__check__trace">
                <span>7 + 7</span>
              </div>
              <div className="flex-1 text-center md:padding__plan bg__check__trace">
                <span>7 + 7 + 5</span>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row border-b-2 border-white/20">
            <div className="w-full md:w-[33%] py-5">
              <p className="text-sm text-center">
                Proteja sua família com o controle parental
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 check padding__plan bg__check__trace" />
              <div className="flex-1 check padding__plan md:bg__plan bg__check__trace" />
              <div className="flex-1 check padding__plan bg__check__trace" />
            </div>
          </div>
          <div className="w-full padding__plan">
            <p className="text-[0.55rem] md:text-xs text-center md:text-start">
              *O preço pode variar caso a assinatura seja feita através de
              outras plataformas.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-max-container mx-auto flex flex-col md:flex-row gap-10 md:gap-5 mt-5 pb-10">
        <div className="flex items-center justify-center md:flex-1">
          <img src={image1} alt="" className="w-[80%] md:w-[90%]" />
        </div>
        <div className="flex flex-col md:justify-center text-center md:text-start md:flex-1">
          <h2 className="text-white text-2xl md:text-3xl font-Metropolis-extrabold">
            Assista do seu jeito
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-3">
            Aproveite a tela grande da TV ou assista no tablet, laptop, celular
            e outros aparelhos. Nossa seleção de títulos em 4K não para de
            crescer. Além disso, para a felicidade de todos, é possível assistir
            em até 4 telas ao mesmo tempo.
          </p>
        </div>
      </div>
      <div className="max-w-max-container mx-auto px-4 md:px-0 text-center mt-12 pb-20">
        <h1 className="text-2xl text-white font-Metropolis-extrabold">
          Originais Disney+ exclusivos
        </h1>
        <p className="text-white/50 text-sm mt-5 mb-10">
          Só no Disney+ você vê os melhores filmes, séries, curtas e outros
          conteúdos inéditos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={image2}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image3}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image4}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image5}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image6}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image7}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image8}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image9}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
          <img
            src={image10}
            alt="/"
            className="rounded-md hover:scale-105 duration-150"
          />
        </div>
      </div>
      <div className="max-w-max-container mx-auto flex flex-col md:flex-row gap-10 md:gap-5 mt-5 pb-10 relative px-8 lg:px-0">
        <div className="flex items-center justify-center md:flex-1 md:hidden">
          <img src={image11} alt="" className="w-[80%] md:w-[90%] " />
        </div>
        <div className="flex flex-col md:justify-center text-center md:text-start md:pl-[50%] md:flex-1 md:bg-bg-rei-leao bg-cover md:bg-no-repeat md:py-60">
          <h2 className="text-white text-2xl md:text-4xl font-Metropolis-extrabold">
            Baixe filmes e séries
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-3">
            Baixe e assista quando e onde quiser. Assim, seus favoritos estão
            sempre com você, até mesmo sem internet.
          </p>
        </div>
      </div>
      <div className="py-20 max-w-max-container px-4 md:px-0">
        <h2 className="text-white text-2xl md:text-4xl font-Metropolis-extrabold text-center">
          Disponível nos seus dispositivos favoritos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 text-white/50 mt-20">
          <div className="flex flex-col items-center text-center">
            <img src={image13} alt="/" />
            <ul className="flex flex-col">
              <strong className="text-white text-2xl mb-3">Computador</strong>
              <span className="text-base">Chrome OS</span>
              <span className="text-base">MacOS</span>
              <span className="text-base">PC Windows</span>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={image14} alt="/" />
            <ul className="flex flex-col">
              <strong className="text-white text-2xl mb-3">TV</strong>
              <span className="text-base">Amazon Fire TV</span>
              <span className="text-base">Android TV</span>
              <span className="text-base">Apple TV</span>
              <span className="text-base">Chromecast</span>
              <span className="text-base">TVs LG</span>
              <span className="text-base">Roku</span>
              <span className="text-base">Samsung</span>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={image15} alt="/" />
            <ul className="flex flex-col">
              <strong className="text-white text-2xl mb-3">Videgames</strong>
              <span className="text-base">PS4</span>
              <span className="text-base">PS5</span>
              <span className="text-base">XBox One</span>
              <span className="text-base">XBox Series X</span>
              <span className="text-base">XBox Series S</span>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={image16} alt="/" />
            <ul className="flex flex-col">
              <strong className="text-white text-2xl mb-3">
                Celulares e tablets
              </strong>
              <span className="text-base">Tablets Amazon Fire</span>
              <span className="text-base">Celulares e Tablets Android</span>
              <span className="text-base">iPhone e iPad</span>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-max-container mx-auto px-4 lg:px-0">
        <h2 className="text-white text-2xl md:text-4xl font-Metropolis-extrabold text-center">
          Perguntas Frequentes
        </h2>
        <div className="flex flex-col gap-4 mt-10">
          {questions.map(({ title, subtitle, items }) => {
            return (
              <Questions key={title} title={title} subtitle={subtitle}>
                {items?.map((subitem) => {
                  return (
                    <>
                      <span className="list-item">{subitem?.item1}</span>
                      <span className="list-item">{subitem?.item2}</span>
                      <span className="list-item">{subitem?.item3}</span>
                      <span className="list-item">{subitem?.item4}</span>
                      <span className="list-item">{subitem?.item5}</span>
                      <span className="list-item">{subitem?.item6}</span>
                      <span className="list-item">{subitem?.item7}</span>
                    </>
                  );
                })}
              </Questions>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
