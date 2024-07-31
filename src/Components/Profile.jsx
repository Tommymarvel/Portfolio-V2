import './css/profile.css';
import Photo from '../assets/images/WhatsApp_Image_2024-04-08_at_17.20.29_58f5f015-removebg-preview.png';

const Profile = () => {
  return (
    <div className="mb-[100px] mt-[60px]">
      <h2 className="text-4xl font-[500] text-center mb-[30px]">Profile</h2>
      <div className="flex flex-col lg:flex-row lg:ml-[80px] gap-[20px]">
        <div className="lg:w-[40%] mx-2.5">
          <img
            src={Photo}
            alt=""
            className="lg:rounded-br-[100px]  lg:rounded-tl-[100px] mx-auto lg:h-[500px] lg:w-[500px] object-cover"
          />
        </div>
        <div className="lg:w-[60%] flex flex-col mx-[10px]">
          <div className="mt-2.5">
            <p className="profile">
              Hey there! I&apos;m <strong>Marvellous Ibironke</strong> , a
              front-end engineer from Lagos, Nigeria, with over four years of
              experience creating sleek, functional websites and applications. I
              specialize in JavaScript, React, Redux, jQuery, HTML5, and CSS3,
              and I also dabble in back-end technologies like Ruby on Rails and
              Laravel.
            </p>
          </div>
          <div className="mt-2.5">
            <div>
              <p className="profile-para2">
                I adore simplifying difficult issues into elegant,
                straightforward fixes. My path has led me to work on fascinating
                projects with organisations like INTO, INNICROSS, SYNCALL, and
                others. There, I have designed interesting, interactive
                features, improved website SEO, and increased business
                visibility and sales.
              </p>
            </div>
            <div className="mt-2.5">
              <p className="profile-para3">
                When I&apos;m not developing, I like to listen to music and
                coach aspiring developers at Microverse. I help them with code
                reviews and help them become better developers. My profession
                requires a lot of collaboration, and I do best in group settings
                where I can readily contribute and absorb new information.
                I&apos;m adaptable and receptive to chances that will help me
                develop and contribute.
              </p>
            </div>
            <div className="mt-2.5">
              {' '}
              <p className="profile-para4">
                Feel free to check out my work on GitHub, connect with me on
                LinkedIn, and thank you for looking at my portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
