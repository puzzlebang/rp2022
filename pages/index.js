import Head from 'next/head';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Section from '../components/Section';

import styles from '../styles/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import Nav from '../components/ui/Nav';
import Button from 'react-bootstrap/Button';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer'
import { Google } from 'react-bootstrap-icons';

export default function Index() {
  const { rpData } = useGetStaticData();
  const { faqSection, sponsors } = rpData;

  return (
    <>
    <div className={styles.backgroundRedandBlue} >
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Nav /> */}
      <Header isHero={true}/>
      
      <div className={styles.landingContainer}>
       {/* <main className={styles.main}>
          <img src="/rp22-logo.png" alt="Reflections Projections Logo" />

          <a href="https://airtable.com/shrTGIqGrMhlD32NC">
            <Button>Register Now!</Button>
          </a>
        </main> */}
        
         <About name="about" /> 
         <Section className={"Prepare for Events"}/>

         
         
        {/* <FAQ faqData={faqSection ?? { sections: [] }} />
        {sponsors && <SponsorSection sponsors={sponsors} />}

        <footer className={styles.footer}>
          Questions? Interested in sponsoring?&nbsp;
          <a
            href="mailto:contact@reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            Email us at contact [at] reflectionsprojections.org
          </a>
        </footer>

        <footer className={styles.footer}>
          Visit our old website&nbsp;
          <a
            href="https://2020.reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            here
          </a>
        </footer> */}
      </div>
      
        {/* <img class = "fixed-to-top" src="/resources/MiddleWhiteStrokeBackground.png" alt="White Stroke" /> 
        # How can I make this white line not take up document flow (space) */}
        {/* <img className = "bg-img" src="/resources/Blue Curve.svg" alt="Blue Wavy Background" /> */}
        

      <div className={styles.bg}>
        <img className = "bg-img" src="/resources/Pink Curve.svg" alt="Pink Wavy Background" />
      </div>
      {/* <SponsorSection sponsors={sponsors}/> */}
      <Footer/>
    </div>

    
  


    <div className={styles.bg}>

      <img className = "bg-img" 
      style={{ height: 893.94, width: 935, marginTop: 100, marginLeft: 745 }}
      
      src="/resources/Ripples.svg" alt="Radial circles" />
    </div>

    <div>
      <div className={styles.bg}>
      <img className = "bg-img" 
        style={{height: 560, width: 560, marginTop: 570,marginLeft: 760}}
      src={"/resources/speaker.png"} alt="Speaker"/>
      </div>
      
    </div>
    </>
  );
}
