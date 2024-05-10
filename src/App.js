import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import coffeeImage from "./images/cupofcoffee.jpg";
import workspaceImage from "./images/workspace.jpg";
import laptopImage from "./images/working.jpg";
import growthImage from "./images/growth.jpg";
import { Children } from 'react';

import archiveVector from "./images/archive.svg";
import cpuVector from "./images/cpu.svg";
import calendarVector from "./images/calendar3.svg";
import boxVector from "./images/box-seam.svg";

import Navbar from './navbar/navbar';



function App() {
  return (
    <div className="App fluid-container m-0 overflow-hidden">
      <section style={{ backgroundColor: "var(--bg2)" }}>
        <Navbar />
        <div className='d-inline-flex flex-column flex-md-row align-items-center justify-content-center w-100' style={{ minHeight: '88vh' }}>
          <div className='col-9 col-md-5 mx-2 pb-0 pb-md-5 mb-0 mb-md-5 mt-5 mt-md-0'>
            <div className='display-2 fw-bold overflow-hidden py-2'>
              <TextFadeInAndUp>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextFadeInAndUp>
            </div>

            <p className='h4 fw-light text-end col-8 col-md-5 mt-5 float-end' ><LineUp delay={.7}>&nbsp;&nbsp;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LineUp></p>
          </div>

          <figure className='d-inline-block triangles float-end mx-2' style={{}}>
            <div class="triangle-image FadeInAnim" id="one" style={{ '--index': 1 }}>
              <img src={laptopImage} />
            </div>

            <div class="triangle-image FadeInAnim" id="two" style={{ '--index': 3 }}>
              <img src={coffeeImage} />
            </div>

            <div class="triangle-image FadeInAnim" id="three" style={{ '--index': 2 }}>
              <img src={workspaceImage} />
            </div>
          </figure>
        </div>

      </section>

      <section className='' style={{ backgroundColor: "var(--bg3)" }}>
        <p className='display-4 fw-light text-dark mx-4 my-5 py-5 px-0 px-md-5 col-11' style={{ fontWeight: 400 }}>
          <TextFadeInAndUp speed={.02} >&nbsp;&nbsp;Faucibus vitae aliquet nec ullamcorper sit. Scelerisque purus semper eget duis at tellus at urna. Libero volutpat sed cras ornare.</TextFadeInAndUp>
          <span className='d-inline' style={{ color: 'var(--accent2)' }}><TextFadeInAndUp speed={.05} delay={.2}>Ultricies integer quis auctor elit sed vulputate mi sit.</TextFadeInAndUp></span>
          <TextFadeInAndUp speed={.02} delay={.3}>Blandit cursus risus at ultrices mi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.</TextFadeInAndUp>
        </p>

        <div className='d-flex flex-column flex-md-row justify-content-center px-3 pb-5'>
          <img className='col-12 col-md-6 rounded-5 FadeInAnim' style={{'--index': 4}}src={growthImage} />
          <div className='h3 fw-light text-dark mx-auto mx-md-4 py-5 col-12 col-md-4'><LineUp delay={1}>&nbsp;&nbsp;&nbsp;&nbsp;Tristique senectus et netus et malesuada. Amet luctus venenatis lectus magna.</LineUp></div>
        </div>
      </section >

      <section className='' style={{ backgroundColor: "var(--bg4)" }}>
        <div className='d-flex justify-content-center flex-column container'>
          <div className='display-5 w-75 h-100 text-center mx-auto my-5 py-5'>
            <TextFadeInAndUp speed={.01}>Egestas sed tempus urna et pharetra. Maecenas sed enim ut sem viverra aliquet eget sit amet. Fringilla urna porttitor rhoncus dolor purus non enim. Sed nisi lacus sed viverra tellus in hac habitasse.</TextFadeInAndUp>
          </div>
          <div className='my-5 w-100 d-inline-block d-flex flex-column flex-md-row'>
            <Box index={1} image={archiveVector}>Massa placerat duis ultricies lacus. Turpis egestas sed tempus urna et pharetra. </Box>
            <Box index={2} image={calendarVector}>Neque laoreet suspendisse interdum consectetur libero id faucibus. </Box>
            <Box index={3} image={cpuVector}>Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. </Box>
            <Box index={4} image={boxVector}>Blandit cursus risus at ultrices mi tempus. Adipiscing elit pellentesque habitant morbi. </Box>

          </div>
        </div>

        <footer className='mt-5 footer d-flex justify-content-center'>
          <small className='text-center mx-0 mx-md-5'><a href='#' >Fake Privacy Policy</a></small>
          <small className='text-center mx-0 mx-md-5'><a href='#' className=''>No Terms or Conditions</a></small>
          <small className='text-center mx-0 mx-md-5'><a href='#' className=''>Placeholder for rights reserved</a></small>
        </footer>

        <br />
      </section>


    </div>
  );
}

function Box({ image, children, index }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const jsx =
    <div id="" className='Box ZoomInAnim border border-3 rounded-2 cursor-pointer m-4' style={{ '--index': index }}>
      <div className='w-100 h-100 position-relative'>
        <img src={image} className='w-50 position-absolute start-50 top-0 translate-middle-x mt-5 user-select-none' />
        <p className='w-50 h5 fw-light text-center border-3 position-absolute bottom-0 my-5 px-3 w-100' >{children}</p>
      </div>
    </div>;

  return (
    <figure ref={ref}>
      {isVisible ? jsx : " "}
    </figure>
  )
}

function TextFadeInAndUp({ children, delay, speed }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  let built = [];
  let realDelay = delay ?? 0.03;
  let words = children.split(" ");
  const increment = speed ?? 0.07;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  words.forEach((word, index) => {
    built.push(<span className='' id='text-fade-in' style={{ '--delay': `${realDelay}s`}}>{word}</span>);

    if (index !== words.length - 1) {
      built.push(
        <span id="text-fade-in" className="" key={`space_${index}`} style={{ '--delay': `${realDelay}s` }}>
          &nbsp;
        </span>
      );
    }

    realDelay += increment;
  });

  return <div ref={ref} className='overflow-hidden py-1 '>{isVisible ? built : " "}</div>;
}

function LineUp({ children, delay }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  let realDelay = delay ?? 0.5;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref} className='overflow-hidden py-1 ' >{isVisible ? <p id='text-fade-in' style={{ '--delay': `${realDelay}s` }}>{children}</p> : " "}</div>;
}


export default App;
