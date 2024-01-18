const Footer = () => {
  return (
    <footer className="flex items-center gap-2 font-medium text-teal-900">
      Copyright &copy; {new Date().getFullYear()} Nitan Jana
      <a target="_blank" href="https://github.com/NitanJana" rel="noreferrer">
        <img src="/github-mark.svg" alt="Github logo" width="25px" height="25px" />
      </a>
    </footer>
  );
};

export default Footer;
