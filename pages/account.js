import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spring, config } from 'react-spring'

const Account = (props) => (
  <div>
    <Header/>
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"2rem", fontWeight:800}}>
          Your Account
        </h3>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1, borderColor: "#209CEE", color: "#209CEE" }} delay={500} config={config.molasses}>
          {props => (
            <div style={props}>
            <a href="" className="button is-light is-medium">Update Account </a>
            </div>
          )}
        </Spring>
      </div>
    </section>
    <Footer/>
  </div>
);

export default Account;
