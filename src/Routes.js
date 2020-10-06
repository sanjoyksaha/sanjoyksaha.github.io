import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


// All Components
import Home from './components/home/Home';
import NotFound from './components/NotFound';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Resume from './components/resume/Resume';

function Routes({location}) {
    return (
        <div className="routes">
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={600} classNames="pageSlider">
                    <Switch location={location}>
                        <Route path="/" exact component= { Home } />
                        <Route path="/about" exact component = { About } />
                        <Route path="/portfolio" exact component= { Portfolio } />
                        {/* <Route path="/resume" exact component= { Resume } /> */}
                        <Route path="/contact" exact component= { Contact } />
                        <Route path="*" exact component= { NotFound } />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Routes);
