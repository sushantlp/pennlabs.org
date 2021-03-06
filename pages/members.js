import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard'

import fetch from 'isomorphic-fetch';

//Also check out our <a href="/alumni">Alumni</a>!

const Members = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="container">
        <h3 className="title is-3" style={{marginBottom:"0.5rem", fontWeight:800}}>
          Meet the Team
        </h3>
        <p>
          The brilliant minds behind the products that tens of thousands
          of students use.
        </p>
        <br />
        {props.teams.map((team) => (
          <div>
            <h4 className="title is-4" style={{fontWeight:800, marginBottom: "0.3rem"}}>
              {team.name}
            </h4>
            <p> {team.description} </p>
            <br/>
            <div className="columns is-multiline">
              {(team.members) ? ((team.members.map((member)=> <MemberCard member={member} /> ))) : (<div></div>)}
            </div>
            <br/>
          </div>
        ))}
    </div>
  </section>
  <Footer />
</div>);

Members.getInitialProps = async({ }) => {
  const res = await fetch('http://platform.pennlabs.org/org/teams/?format=json');
  const teams = await res.json();
  return { teams };
}

export default Members;
