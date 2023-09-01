import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="sumz_logo"
          className="w-28 object-contain hover:cursor-pointer "
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/", "_blank")}
          className="black_btn text-xl font-mono ml-auto"
        >
          GitHub
        </button>
        <button
          type="button"
          onClick={() => window.open("https://linkedin.com/", "_blank")}
          className="blue_btn text-xl font-mono ml-3"
        >
          LinkedIn
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Discover the cutting-edge capability of OpenAI GPT-4 in summarizing
        articles with unparalleled precision and efficiency.
      </h2>
    </header>
  );
};

export default Hero;
