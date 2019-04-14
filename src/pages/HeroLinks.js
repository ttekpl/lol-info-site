import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/HeroLinks.css";
import { Spring, Trail, animated } from "react-spring/renderprops";

class HeroLinks extends React.Component {
  state = {
    champions: null
  };

  componentDidMount = () => {
    const API = `http://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion.json 
      `;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        return new Error("error occured");
      })
      .then(response => response.json())
      .then(({ data }) => {
        const champions = Object.values(data).map(hero => (
          <Link key={hero.id} to={`/Hero/${hero.id}`}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/${
                hero.id
              }.png`}
              alt=""
            />
            <p>{hero.name}</p>
          </Link>
        ));

        this.setState({
          champions
        });
      })
      .catch(error => console.log(error));
  };

  render = () => {
    console.log(this.props);
    const { champions, routs } = this.state;
    return (
      <Spring
        from={{ transform: "translateX(-100%)" }}
        to={{ transform: "translateX(0%)" }}
      >
        {props => (
          <div style={props}>
            <section className="heroLinks">
              <h1 className="heroLink_H1">Heroes list</h1>
              <div className="links">{champions ? champions : null}</div>
            </section>
          </div>
        )}
      </Spring>
    );
  };
}

export default HeroLinks;

//  <div
//         style={{
//           backgroundColor: '#247BA0',
//           position: 'relative',
//           width: '100%',
//           height: '100%',
//         }}>
//         <Trail
//           native
//           reverse={toggle}
//           initial={null}
//           items={items}
//           from={{ opacity: 0, x: -100 }}
//           to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}>
//           {item => ({ x, opacity }) => (
//             <animated.div
//               className="box"
//               onClick={this.toggle}
//               style={{
//                 opacity,
//                 transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
//               }}
//             />
//           )}
//         </Trail>
//       </div>
