import { Button, Grid, Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from 'react-bootstrap/Container';
import Section from '../Section';
import Header from '../ui/Header';

import AboutCard from '../ui/AboutCard';
import Footer from '../ui/Footer';
import FAQAccordion from './components/FAQAccordion'

// import SpeakerCard from './components/SpeakerCard';
import styles from './about.module.scss';
import { pink } from '@mui/material/colors';
import { useStyles } from '../../styles/AboutPageStyles';
import Link from 'next/link';
import Head from 'next/head';

const AboutPage = () => {
  
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
    const classes = useStyles();
    const ml = "6.3%";
    const textWidth = "57.4%";
    const pink = createTheme({
      palette: {
        primary: {
          main: "#DF6C57",
          light: "#FFC0CB",
          dark: "#B22222",
          contrastText: "#fff",
        },
      },
    });
    const [faqSection, setFaqSection] = useState("General");

    const FAQdataGeneral = [
        {question:'What can you do at R|P?',answer:'Network, build, learn and more! Check out our schedule for more information!'},
        {question:'Is registration open?',answer:'Yes! Reflections|Projections is completely free to attend! This includes MechMania and all other events. '},
        {question:'Is the conference free to attend?',answer:'Yes! Reflections|Projections is completely free to attend! This includes MechMania and all other events. '},
        {question:'Who can attend?', answer:'Reflections|Projections is free and open to anyone regardless of age, major, or affiliation with the University of Illinois. Come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!'},
    ];

    const FAQdataConference = [
      {question:'Will I be able to attend the conference online?',answer:'We will be posting zoom links on our website so you can join our events wherever you are in the world! All events will be available online or in person. For speakers that choose to attend virtually, we will be playing the talk in a conference room to be viewed in addition to providing the zoom link.'},
      {question:'What precautions will Reflections|Projections take regarding COVID-19?',answer:'We are planning on adhering to the university of Illinois covid policies throughout our entire event!'},
      {question:'What is the location of the event?', answer: 'The event will be held in-person at the Siebel Center for Computer Science.'},
      {question:'What is the schedule for the conference?',answer:'Check out our schedule page for more information!'},
    ];
    
    const FAQdataMechmania = [
      {question:'What is MechMania?',answer:'MechMania is a 24-hour programming contest in which teams of students from various schools compete to create an AI capable of playing (and winning) a strategy game we have secretly developed. MechMania will be hosted in room 1404 at the Siebel Center for Computer Science. The competition, from the moment it starts to the closing ceremony and awards presentation, will be livestreamed on twitch.tv. You must be registered for Reflections|Projections to compete in MechMania. You can find more info at mechmania.io.'},
      {question:'Who\'s  eligible?',answer:'We accept teams of up to four students. All participants must actively be enrolled in a college or university, but teams do not need to be composed of students from the same school. Besides that, we accept everyone of every skill level!'},
      {question:'What do you need to know?',answer:'We accept everyone of all skill levels, but teams will have the option to program their bots in Java and Python, and run the Java engine to locally test their submissions. As such, teams should be proficient in the language they plan to use. We will provide relevant installation info on the day of the competition.'},
      {question:'What will you do?',answer:'By using our provided sample starterpacks, you will implement an artificial intelligence that will play our game! The goal is simple: return a decision from a function, but the logic you take to get there is entirely up to you.'},
      {question:'Is registration open?',answer:'Yes! Please visit mechmania.io for our pre-registration form.'},
    ];
    
    const FAQdataPuzzleBang = [
      {question:'What is Puzzlebang?',answer:'PuzzleBang is a puzzle hunt that takes place over the course of the Reflections|Projections week. Puzzles are released online at puzzlebang.com with the first puzzle coming out on Monday, September 26. Expect one or two puzzles per day until Saturday when we release the final set of puzzles along with a metapuzzle.'},
      {question:'Who’s eligible?',answer:"Anyone can play! We strongly recommend playing with friends, because the more the merrier. If you haven't met any friends who are interested in playing, sign up anyway! We'll have a discord server up this year and a #looking-for-group channel."},
      {question:'What will you need to have?',answer:"Access to a functional human brain, an internet connection, a computer with a current web browser, and an open mind. We're also adding discord support this year, so a microphone + speakers will enhance the experience."},
      {question:'What do you need to know?',answer:"Everything! No, just kidding. Wikipedia's classical cipher's page might be useful. A number of letters in the alphabet, number of cards in a deck, all the US state abbreviations, and silly other things that you've probably run across in your daily life. Some awareness of the recent memes and popular culture will probably be helpful. Knowledge of UIUC's campus layout will be really helpful."},
      {question:'What do you not need to know?',answer:'How to write code. It might be useful to be able to write a script to print out all the ways you can rearrange a set of letters, or apply different ciphers to them, but in general, you should be able to do everything by hand or ask Google and find a tool online to do it for you.'},
    ];

  return (

    <Box>
        <Header isHero={true}/>
        {/* Section 1 */}
        
        <Box ml={ml} mt={15} width={textWidth}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>What is Reflections | Projections?</Typography>
        </Box>
        <Box ml={ml} mt={5} width={textWidth}>
            <p className={styles.bodyText}>
                Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign.
                <br></br><br></br>
                We draw students, speakers, and companies from around the world. Join us to listen to tech talks from across the industry, to participate in an Artificial Intelligence programming competition in Mechmania, to solve puzzles throughout the conference during PuzzleBang!, and to attend our job fairs.
                <br></br><br></br>
                The conference is free and open to anyone regardless of age, major, job, or affiliation with the University of Illinois. So come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
            </p>
        </Box>

        {/* Section 2 */}

        <Box ml={ml} mt={'100px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>Our Team</Typography>
        </Box>
        <Box ml={ml} mt={5} width={textWidth}>
            <p className={styles.bodyText}>
                We are students passionate about technology who embody the diversity and excellence inherent at the University of Illinois at Urbana-Champaign. We bring industry and academia into one conference to incite the spread of novel ideas. We connect students with professional opportunities. We host a one of a kind AI hackathon. And, we can't wait for you to come to R|P 2022!
            </p>
        </Box>

        {/* Section 3 */}

        
        <Box ml={ml} mr={"18.9%"} mb={'100px'}>
          <Box ml={'29.5vw'} mt={'100px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>Special Events</Typography>
          </Box>
          <Box mt="30px">
            <Grid container spacing={1} columns={24}>
              <Grid item md={12}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Career Fair"}
                    description={"Meet some of the best companies in the country"}
                  />
                </Paper>
              </Grid>
              {/* <Grid item md={8}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Startup Fair"}
                    description={"Interact with the hottest new startups in the field"}
                  />
                </Paper>
              </Grid> */}
              <Grid item md={12}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Speakers"}
                    description={"Come listen to some of the industry's best minds"}
                  />
                </Paper>
              </Grid>

              <Grid item md={12}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Mech Mania"}
                    description={"Mechmania is our 24 hour AI hackathon that runs from Friday (9/30) - Saturday (10/01). Build your own AI bot to compete. The best part? No prior experience needed. You can find more info at mechmania.io."}
                  />
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"PuzzleBang"}
                    description={"Grab your friends and compete in a week-long puzzle contest hosted by four UIUC Alums to win exciting prizes. Be sure to check out our pop-up escape room in Siebel on Friday and Saturday!  Go to PuzzleBang.com to get started."}
                  />
                </Paper>
              </Grid>
              {/* <Grid item md={8}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"ACM Symposium"}
                    description={"R|P 2018 is proud to introduce the first-ever installment of the ACM Symposium - a way for ACM chapters across the Midwest to network and interact by showcasing their project and research work."}
                  />
                </Paper>
              </Grid> */}

              {/* <Grid item md={8}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Alumni Social"}
                    description={"Head over to Murphy's after the ACM Symposium after the closing ceremony to interact and network with alumni, speakers and current students! It’s the perfect social to culminate the conference."}
                  />
                </Paper>
              </Grid> */}
              {/* <Grid item md={8}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"Experiences"}
                    description={"Experiences are hybrid talks/workshops that not only help students learn the state of the art in fields ranging from distributed computing to machine learning but also make them approachable."}
                  />
                </Paper>
              </Grid> */}
              {/* <Grid item md={8}>
                <Paper>
                  <AboutCard
                    img={""}
                    title={"R|P Giveaway Contest"}
                    description={"Engage with R|P on our various social media platforms for a chance to win a Nintendo Switch, a Google Home Mini or an Amazon Echo Dot! Follow us on social media to learn more!"}
                  />
                </Paper>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <div className={styles.layer1}></div>
        <div className={styles.faqSection}>
          {/* Section 4 */}
          <Box ml={'42.5vw'} mb={'66px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>FAQ</Typography>
          </Box>

          {/* Four buttons in a row */}
          <Box justifyContent='center' ml={'16vw'} mr={'27vw'}>
            <Grid container justify="space-around" justifyContent="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                    }}
                    onClick={() => {setFaqSection("General")}}
                    >General</Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                    }}
                    onClick={() => {setFaqSection("Conference Format")}}
                    >Conference Format</Button>
                </Grid>
                <Grid item>
                  <Button 
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                    }}
                    onClick={() => {setFaqSection("Mechmania")}}
                    >MechMania</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined"
                    sx={{
                      borderRadius: "50px",
                    }}
                    onClick={() => {setFaqSection("PuzzleBang")}}
                    >PuzzleBang</Button>
                </Grid>
            </Grid>
          </Box>
          {/* Section 5 - Four FAQ Sections */}
          {/* TODO pass FAQ props in accordion */}
          <Box ml={ml} mt={'30px'}>
            { faqSection == "General" && <FAQAccordion FAQ={FAQdataGeneral}/>}
            { faqSection == "Conference Format" && <FAQAccordion FAQ={FAQdataConference}/>}
            { faqSection == "Mechmania" && <FAQAccordion FAQ={FAQdataMechmania}/>}
            { faqSection == "PuzzleBang" && <FAQAccordion FAQ={FAQdataPuzzleBang}/>}
          </Box>
        </div>
        <div className={styles.layer2}></div>

        <Footer></Footer>

    </Box>
  );
};

export default AboutPage;