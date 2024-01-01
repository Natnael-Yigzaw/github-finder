function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-8 bg-gray-700 text-slate-400 footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
