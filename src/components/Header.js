import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            </ul>
         </nav>
         
         <div className="row banner">  
            <div className="banner-text">
                <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
                <h1 className="responsive-headline">{resumeData.name}</h1>
                <h3 style={{color:'#fff', fontFamily:'sans-serif', fontSize: '20px'}}>Hi! I'm a {resumeData.role}.{resumeData.roleDescription}
                </h3>
                <h3 style={{color:'#fff', fontFamily:'sans-serif', fontSize: '20px'}}>Feel free to check out my <a className="smoothscroll" href="#portfolio">projects</a> below, contact me at <a href="mailto:ashleyye@berkeley.edu" target="_">ashleyye@berkeley.edu</a> or check out my <a href="assets/AshleyYeResume-Freshman.pdf" target="_">resume</a>!</h3>
                <hr/>
                <ul className="social">
                    {
                        resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                        return(
                                <li key={item.name}>
                                    <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                </li>
                                )
                            }
                        )
                    }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}