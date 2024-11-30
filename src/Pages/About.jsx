import first_img from "../assets/images/about_images/first_img.jpg";
import second_img from "../assets/images/about_images/second_img.jpg";
import mobileLogo from "../assets/images/logo_mobile.svg";

export default function About() {
  return (
    <div className="container-x ">
      {/* about us */}
      <div className="flex justify-between  text-sm  items-start mt-16 ">
        <div className="flex flex-col max-w-[45%] gap-4 text-sm items-start">
          <h1 className="text-4xl font-semibold mb-6">About Us</h1>
          <p>
            Shoptimized™ is a community of likeminded e-commerce entrepreneurs
            who have come together to learn how to upscale their businesses and
            outmaneuver their competition at every turn.
          </p>
          <p>
            Founded by Conversion Rate Expert, Bradley Long – Shoptimized™ cuts
            out all the noise and bullshit and shows you what’s really working
            in the world of e-commerce.
          </p>
          <p>
            After working with some of the world’s most sophisticated brands as
            a conversion rate optimization consultant and helping them achieve
            double and sometimes triple-digit growth in under 12-months.
          </p>
        </div>
        <div className="w-[47%] ">
          <img src={first_img} alt="" className="rounded-xl" />
        </div>
      </div>
      {/* our mission */}

      <div className="flex justify-between gap-10  my-32 ">
        <div className="w-[40%] relative">
          <img src={second_img} alt="" className="w-96 h-72 rounded-xl" />
          <div className="bg-white shadow-xl absolute  right-0 -bottom-12  w-44 h-36 rounded-xl flex flex-col justify-center items-center text-center">
            <img src={mobileLogo} alt="" className="w-16" />
            <p className="text-lg font-semibold">Logoipsum</p>
          </div>
        </div>
        <div className="w-[60%]">
          <h1 className="text-4xl font-semibold mb-8">Our Mission</h1>
          <div className="text-sm flex flex-col gap-4">
            <p>
              At Logoipsum, we aim to transform online shopping into an
              effortless, enjoyable, and trustworthy experience. Our mission is
              to provide high-quality, innovative, and sustainable products that
              cater to your lifestyle, all while ensuring exceptional customer
              service. We are committed to creating a seamless digital
              marketplace that not only meets but exceeds your expectations,
              connecting you to the things you love with just a click.
            </p>

            <p>
              Our goal is to empower shoppers with an intuitive platform that
              combines convenience, transparency, and excellent customer
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
