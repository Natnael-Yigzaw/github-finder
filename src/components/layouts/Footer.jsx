function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-6 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {footerYear} - All right reserved.</p>
        <p>
          Made by <strong>Natnael Yigzaw</strong>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
