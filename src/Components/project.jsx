import Technological from '../assets/images/thumbnail/TP_thumbnail_1000x564.jpg'
// import DMCE from '../assets/images/thumbnail/DMCE_thumbnail_1000x564.jpg';
import Innicross from '../assets/images/thumbnail/Innicross_thumbnail_1000x564.jpg';
import Fudfarmer from '../assets/images/thumbnail/Screenshot 2024-07-28 145322.png'
// import Raft from '../assets/images/thumbnail/raft_thumbnail.jpg';
import Diva from '../assets/images/thumbnail/diva.png';
import SyncAll from '../assets/images/thumbnail/Screenshot 2024-07-28 152426.png';
import Wealthyloop from '../assets/images/thumbnail/Screenshot 2024-07-28 145449.png'
// import Card2 from '../assets/images/card2.svg';
/** @jsxImportSource @emotion/react */
import './css/project.css'




const Project = () => {
  const projects = [
    
    {
      name: 'SyncAll',
      tech: 'Reactjs, Tailwind, TypeScript, Nodejs',
      info: 'SyncAll is at the forefront of music licensing technology, offering advanced features that simplify and streamline the process of finding and licensing African music. The platform continuously evolves to incorporate new tools and approaches, ensuring users have access to state-of-the-art functionality.',
      link: 'https://sync-all-fe-1brn.vercel.app/',
      image: SyncAll,
    },
    {
      name: 'Fudfarmer',
      tech: 'Laravel, Php, Tailwind',
      info: "Fudfarmer's mission is to bridge the gap between farmers and consumers, which will help lower food costs.",
      link: 'https://fudfarmer.com/',
      image: Fudfarmer,
    },{
      name: 'Wealthyloop',
      tech: 'Laravel, Php, Tailwind',
      info: 'Wealthyloop is a pioneering investment platform operating under the umbrella of Padikash, a global financial entity extending fintech solutions worldwide.',
      link: 'https://www.wealthyloop.com/',
      image: Wealthyloop,
    },{
      name: 'Technological Partner',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: "On a mission to provide unparalleled legal support to businesses at the forefront of Africa's economic transformation.",
      link: 'https://technolawgicalpartner.com/',
      image: Technological,
    },
    {
      name: 'Innicross',
      tech: 'Reactjs, Tailwind, Emailjs',
      info: 'This company boosts African music and entertainment with content production, promotion, and data research.',
      link: 'https://innicross.com/',
      image: Innicross,
    },
    {
      name: 'DivasByClaudia',
      tech: 'Wordpress, WooCommerce, Bookly, Elementor',
      info: 'DivasByClaudia is an award-winning hair salon that specializes in weaving and custom wig designs.',
      link: 'https://diva.padikash.com/',
      image: Diva,
    },
    
  ];
  return (
    <div className="mt-[50px] ">
      <h2 className="text-4xl font-[500] text-center mb-[30px]"> Project</h2>
      <div className="flex gap-8 mt-10 w-full items-center flex-wrap justify-center mx-auto">
        {projects.map((project, idx) => (
          <div
            className="card w-[500px] h-[500px]  lg:min-w-[500px] lg:min-h-[500px]  "
            key={idx}
          >
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={project.image}></img>
                </div>
              </div>
              <div className="front items-center flex flex-col">
                <div className="front-content gap-4">
                  <h3 className="text-3xl font-[500] text-center">
                    {project.name}
                  </h3>
                  <p className="text-xl text-center">{project.info}</p>
                  <p className="text-xl text-center">{project.tech}</p>

                  <a
                    href={project.link}
                    className="text-xl mx-auto text-yellow-500 p-5 border-md w-fit"
                  >
                    <button className='button'>
                      <span>Check it</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
