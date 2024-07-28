import Technological from '../assets/images/thumbnail/TP_thumbnail_1000x564.jpg'
import DMCE from '../assets/images/thumbnail/DMCE_thumbnail_1000x564.jpg';
import Innicross from '../assets/images/thumbnail/Innicross_thumbnail_1000x564.jpg';
import NaijaFarmer from '../assets/images/thumbnail/naijaFarmer.jpg';
// import Raft from '../assets/images/thumbnail/raft_thumbnail.jpg';
import Diva from '../assets/images/thumbnail/diva.png';
import TicTackToe from '../assets/images/thumbnail/tictaktoe_thumbnail_1000x565.jpg';
import Shortlet from '../assets//images/thumbnail/shortlet.png';
import Card1 from '../assets/images/card1.svg'
import Card2 from '../assets/images/card2.svg';
/** @jsxImportSource @emotion/react */




const Project = () => {
  const projects = [
    {
      name: 'Technological Partner',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: "On a mission to provide unparalleled legal support to businesses at the forefront of Africa's economic transformation.",
      link: 'https://technolawgicalpartner.com/',
      image: Technological,
    },
    {
      name: 'DMCE',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: 'This large African organisation helps manage and grow music and entertainment industries throughout Africa.',
      link: 'https://digitalmusicce.com/',
      image: DMCE,
    },
    {
      name: 'Innicross',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: 'This company boosts African music and entertainment with content production, promotion, and data research.',
      link: 'https://innicross.com/',
      image: Innicross,
    },
    {
      name: 'NaijaFarmer',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: 'Naijafarmer is a web farm full of resources and experience to guide people in Nigerian agriculture.',
      link: 'https://naijafarmer.com/',
      image: NaijaFarmer,
    },
    {
      name: 'DivasByClaudia',
      tech: 'Wordpress, WooCommerce, Bookly, Elementor',
      info: 'DivasByClaudia is an award-winning hair salon that specializes in weaving and custom wig designs.',
      link: 'https://diva.padikash.com/',
      image: Diva,
    },
    {
      name: 'TicTacToe',
      tech: 'HTML, CSS, Javascript',
      info: "Enjoy playing Tic Tac Toe? Check out my digital version! It's easy to use, enjoyable, and suitable for all abilities. Play right now!",
      link: 'https://tikitakatoe.netlify.app/',
      image: TicTackToe,
    },
    {
      name: 'Shortlet',
      tech: 'Wordpress, Elementor',
      info: 'This platform offers short-term stays with user-friendly interface, 24/7 help and secure payment processing.',
      link: 'https://shortlet.padikash.com/',
      image: Shortlet,
    },
  ];
  return (
    <div className="mt-[50px] ml-10 ">
      <h2 className="text-3xl font-[500] "> Project</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="mt-8 neumorphism relative group">
            <img
              src={project.image}
              alt="project"
              className="h-[300px] w-[500px] object-cover rounded-lg"
            />
            <div className=" absolute inset-0 bg-yellow-500 bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white flex-col p-5">
              <h3 className="text-3xl font-[500]">{project.name}</h3>
              <p className="text-xl mt-4 text-center">{project.info}</p>
              <p className="text-xl mt-4">{project.tech}</p>

              <a
                href={project.link}
                className="text-xl mt-4 bg-white text-yellow-500 p-5 border-md"
              >
                <button>Check it out</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {projects.map((project, idx) => (
        <div className="card lg:w-[300px] " key={idx}>
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src={project.image}></img>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <h3 className="text-3xl font-[500]">{project.name}</h3>
                <p className="text-xl mt-4 text-center">{project.info}</p>
                <p className="text-xl mt-4">{project.tech}</p>

                <a
                  href={project.link}
                  className="text-xl mt-4 bg-white text-yellow-500 p-5 border-md"
                >
                  <button>Check it out</button>
                </a>
              </div>

              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
