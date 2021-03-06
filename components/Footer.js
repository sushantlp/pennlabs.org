import Link from 'next/link';

const styles = {
    right: 0,
    bottom: 0,
    left: 0,
    height: "8rem",
}

const Footer = (props) => (
  <div>
    <footer className="footer" style={styles}>
      <div className="container">
        <div className="content has-text-centered">
          <p style={{fontSize: "0.85rem"}}>
            Made with <span className="icon is-small" style={{color:"#F56F71"}}><i className="fa fa-heart"></i></span> by Penn Labs in Philadelphia. 
          </p>
          <a href="https://github.com/pennlabs/" style={{marginRight:"1rem"}}>
          <span><i className="fab fa-github"></i></span>
        </a>
        <a href="https://www.facebook.com/labsatpenn/">
        <span><i className="fab fa-facebook-square"></i></span>
      </a>
    </div>
  </div>
</footer>
</div>
);

export default Footer;
