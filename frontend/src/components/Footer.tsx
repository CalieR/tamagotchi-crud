const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4 mt-4 sticky bottom-0">
      <div className="container">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by CR
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
