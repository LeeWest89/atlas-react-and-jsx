import links from "/src/assets/links.json";

// Footer component
const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              {item.label}
            </a>
          </li>
        ))};
      </ul>
      <p>© {thisYear} Atlas School</p>
    </footer>
  );
};

export default Footer;