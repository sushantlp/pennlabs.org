import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = (props) => (
  <section class="section" style={{height: "100%"}}>
    <div class="container" style={{paddingTop: "4rem"}}>
    	<nav class="level">
    		<div class="level-item">
    			<figure class="image" style={{width:"15%", height: "auto"}}>
    			  <img src="/static/img/404-beaker.png" />
    			</figure>
    			<div style={{marginLeft: "2rem"}}>
      			<h3 class="title is-3" style={{paddingBottom: "0.5rem"}}>
              Oops... page not found :(
            </h3>
      			<p>
              Go back to <a href="/">home</a> or <a href="/contact">contact us</a> if you think this is a mistake.
            </p>
    			</div>
    		</div>
    	</nav>
    </div>
  </section>

);

export default Error;
