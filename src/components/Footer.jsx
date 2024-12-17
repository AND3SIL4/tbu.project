import config from "../config/config.json";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-500 text-sm p-3">
      All rigths reserved &copy;{year} | TBU project developed by{" "}
      {config.author.map((author, index) => (
        <a
          className="font-bold hover:text-[#636AE8]"
          target="_blank"
          key={index}
          href={author.github}
        >
          {author.name}
        </a>
      ))}{" "}
      at Globaltek Security{" "}
    </footer>
  );
};

export default Footer;
