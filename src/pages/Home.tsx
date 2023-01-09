import React from 'react'
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import marcus from "../imgs/home/marcus.png"
import './Styles/Home.css'

export default function Home() {
  return (
    <div className="div-home">
      <Header />
      <div className="center-home">

        <div className="content-home">
          <div className="content-home-left">
            <p className="text-home">
              Olá! Meu nome é Marcus vinicius, sou Desenvolvedor Web. { '</>' }
            </p>
            <p className="text-home">
              É um prazer ter sua visita em meu portfólio! Aproveite para olhar meus <Link to="/projects" className="link-home">projetos</Link>
            </p>
            <p className="text-home"> Aguardo o seu <Link to="/contacts" className="link-home">CONTATO</Link>
            </p>
          </div>
          <div className="content-home-right">
            <img src={ marcus } alt="Marcus" className="home-img" />
          </div>
        </div>
        <div className="content-home">
          <div className="content-home-left">
            <p className="text-about">
              Tenho 22 anos, recentemente formado no curso de desenvolvimento web full-stack pela escola de programação Trybe.
            </p>
            <p className="text-about">
              Atualmente estou buscando aprimorar meus conhecimentos na área de back-end, pois foi a que mais me abrilhantou os olhos, principalmente após conhecer o TypeScript e o todo poderoso Java.
            </p>
            <p className="text-about">
              Sou músico, toco bateria em um grupo da Igreja em que frequento, e talvez por ser baterista, prezo muito pelo trabalho em equipe, sei que a banda precisa estar em harmonia, todos precisam se entender para tirarmos o melhor som possível, assim também me sinto quando estou programando, por mais que tenho conhecimento, prefiro mil vezes dividir tarefas com alguém, poder ajudar e ser ajudado, ouvir e dar feedbacks.

            </p>
            <p className="text-about p-final">
              Gosto muito de assistir séries, filmes e animes, ler livros de histórias, mistérios, romances  e aventuras, porém, o meu melhor passatempo são os jogos de FPS (First-person shooter), é simplesmente magnífico a possibilidade de entrar para tirar o estresse, e sair mais estressado, ou o impossível acontecer e você conseguir um grupo em que todos agem conforme a estratégia, e se sentir em um batalhão de verdade.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
