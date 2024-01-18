function Footer() {
  return (
    <footer className="flex items-center gap-2 font-medium text-teal-600">
      Copyright &copy; {new Date().getFullYear()} Nitan Jana
      <a target="_blank" href="https://github.com/NitanJana" rel="noreferrer">
        <img src="/github-mark.svg" alt="Github logo" className="h-6" />
      </a>
    </footer>
  );
}

export default Footer;
