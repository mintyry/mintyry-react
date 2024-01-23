import { useState, useEffect } from 'react';
// mui comps
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// my css
import '../styles/Work.css'
// project imgs
import dexperience from '../assets/work/dexp.png';
import fulldexperience from '../assets/work/fulldexperience.png';
import anyyes from '../assets/work/ay.png';
import weather from '../assets/work/wuw.png';
import quiztime from '../assets/work/qtart.png';
import fullqt from '../assets/work/fullqt.png';
import dotblog from '../assets/work/dotblog.png';
import fullblog from '../assets/work/fulldot.png';
import firstportfolio from '../assets/work/firstport.png';
import fullfirst from '../assets/work/fullmintypro.png';

import Icon from "@mui/material/Icon";
import "@fortawesome/fontawesome-free/css/all.css";
import { Fragment } from 'react';

// quilted structure of photos
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}
// icons as variables
const ifa = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }}  className="fa-solid fa-font-awesome iconcolor" />
const icode = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-regular fa-file-code iconcolor" />;
const iterminal = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-regular fa-solid fa-terminal iconcolor" />;
const ihtml = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-html5 iconcolor" />;
const icss = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-css3-alt iconcolor" />;
const ijs = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-js iconcolor" />;
const igithub = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-square-github iconcolor" />;
const igit = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-git-alt iconcolor" />;
const iboot = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-bootstrap iconcolor" />;
const inode = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-node-js iconcolor" />;
const idb = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-solid fa-database iconcolor" />;
const ireact = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-react iconcolor" />;
const istripe = <Icon sx={{ width: '1.3em', lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-stripe iconcolor" />;
const ifigma = <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-figma iconcolor" />;
// dev icons as var
const ibulma = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-bulma-plain iconcolor"></i>;
const imongo = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-mongodb-plain iconcolor"></i>;
const imysql = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }}className="devicon-mysql-plain iconcolor"></i>;
const isqlz = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-sequelize-plain iconcolor"></i>;
const iwpack = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-webpack-plain iconcolor"></i>;
const iapple = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-apple-original iconcolor"></i>;
const ijquery = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-jquery-plain iconcolor"></i>;
const ihbars = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-handlebars-plain iconcolor"></i>;
const imui = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-materialui-plain iconcolor"></i>;
const ivsc = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-vscode-plain iconcolor"></i>;
const ichrome = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-chrome-plain iconcolor"></i>;
const ieslint = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-eslint-original iconcolor"></i>;
const iex = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-express-original iconcolor"></i>;
const idev = <i style={{ fontSize: "1.5rem", marginRight: "0.5em" }} className="devicon-devicon-plain iconcolor"></i>;


// array of photos as objects
const itemData = [
    {
        img: dexperience,
        title: 'DEXPERIENCE',
        rows: 2,
        cols: 2,
        url: 'https://mintyry.github.io/DEXPERIENCE/',
        text: 'DEXPERIENCE is a complete front-end application. Incorporating APi fetches to Pokéapi and a Chuck Norris Facts API, local storage, as well as the dayjs package, I was able to build up a personalized Pokédex experience for the user, including being able to: search up pokemon, seeing their statistics, new fun facts about them (generated by Chuck Norris facts), building a search history for the user to allow easy access upon return. There are additional features like Pokémon of the Day, a personal journal entry, as well as a fun little mini-game of trying to catch your own Pokémon! There are little easter eggs in there, such as entering glitch city by searching a Pokémon that does not exist, along with a fun little reward after a certain amount of searches. Go ahead enjoy your very own DEXPERIENCE!',
        fullimg: fulldexperience,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            ijs,
            igithub,
            igit,
            idb,
            ibulma
        ]
    },
    {
        img: weather,
        title: 'What\'s Up Weather?',
        cols: 2,
        url: 'https://mintyry.github.io/whats-up-weather/',
        text: 'What\'s Up Weather is a five-day forecast app, which utilizes the dayjs package to keep track of the day and time to pull corresponding weather data from the OpenWeather API. This app confirmed my confidence in CSS skills in that I found I had a much quicker time writing my own CSS than using a framework (at least for this project). Traversing through objects and the DOM allowed me to acheieve data retrieval and display, while also returning user search history via local storage.',
        fullimg: weather,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            ijs,
            igithub,
            igit,
            idb,
        ]
    },
    {
        img: dotblog,
        title: '[dot]Blog',
        rows: 2,
        url: 'https://dotblog-2a215c6fdcb3.herokuapp.com',
        text: 'dot[Blog] is my first project that builds the basic components of a social media website! This app uses databases on the back-end via MYSQL and Sequelize to persist user data. We also use password encryption to protect sensitive user login information.Additionally, rather than sticking to pure HTML, I added the Handlebars framework to render data and create more dynamic rendering.Users of the site are able to create their own accounts, add comments, and add, update, and delete posts. I also ended up building a separate pure back-end social media app that allowed adding friends, posts, and comments too. Feel free to ask me about it or checkout my GitHub!',
        fullimg: fullblog,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            ijs,
            igithub,
            igit,
            inode,
            idb,
            imysql,
            isqlz,
            ihbars,
            iex
        ]
    },
    {
        img: quiztime,
        title: 'Quiz Time',
        rows: 2,
        url: 'https://mintyry.github.io/quiz-time/',
        text: 'Personal interests are a great way to find inspiration for projects, and Pokémon is one of mine. I built a quick five question quiz called Quiz Time to for Javascript practice. Utilizing setTimeout logic as well as progressing via conditional rendering helped bring this app to life. High score are saved via local storage, and wrong choices penalize the user by cutting time off the clock. Can you ace this Pokémon quiz in time?',
        fullimg: fullqt,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            ijs,
            igithub,
            igit
        ]
    },

    {
        img: firstportfolio,
        title: 'Minty.Ry Portfolio 1.0',
        cols: 2,
        url: 'https://mintyry.github.io/Minty-Ry-Portfolio/',
        text: 'This was my first portfolio! I was honestly very proud of it, because after just a week and a half of learning software development, I was able to craft this up. I received much feedback from people assuming I had prior experience, but I really hadn\'t! (Unless you count Myspace, from back in 2007.) I still think it looks really nice for a basic webpage, and it is really satisfying for me to see how far I\'ve come on this dev journey. From that to what you are seeing right before you. By exploring my portfolio, I hope you enjoy this ride with me.',
        fullimg: fullfirst,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            igithub,
            igit
        ]
    },
    {
        img: anyyes,
        title: 'AnyYes',
        cols: 2,
        url: 'https://anyyes-com-7a95399acf53.herokuapp.com',
        text: 'AnyYes is a Customer-to-Customer (C2C) retro-gaming e-commerce application -- the OfferUp app the retro-gaming community has been lacking. In this application, users can buy and sell their own retro video games. AnyYes utilizes back-end databases via MYSQL and Sequelize to store product and user information. All of that data is encrypted into the database via, what I found to be, creative solutions in form handling. Stripe is used to process payments, and multer allows for image uploads. The user\'s cart persists via local storage. Although I had felt much more confident in writing pure CSS by myself, in building this app, I came to the embrace how a CSS framework can really expedite the whole process. Bulma CSS and Splidejs were used to style AnyYes in cohabitation with Handelbars.',
        fullimg: anyyes,
        icons: [
            icode,
            iterminal,
            ihtml,
            icss,
            ijs,
            igithub,
            igit,
            inode,
            idb,
            istripe,
            imysql,
            isqlz,
            ihbars,
            iex,
            ibulma,
            ieslint
        ]
    },

];


// export this
export default function Work() {
    // const updatedItemData = itemData.slice(0, -1);
    if (itemData.length > 0) {
        itemData[itemData.length - 1].cols = 4;
    }
    // set value to nothing first
    const [showProject, setShowProject] = useState(null);

    return (
        <>
            {/* image quilt */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className="quilt"  >
                    <Box className='boxPics'>
                        <ImageList

                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                            sx={{ borderRadius: '10px' }}
                        >
                            {itemData.map((item) => (

                                <ImageListItem className="projects" key={item.img} cols={item.cols || 1} rows={item.rows || 1} onClick={() => setShowProject(item)} >
                                    <div className="image-overlay">
                                        <p>{item.title}</p>
                                    </div>
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />

                                </ImageListItem>

                            ))}
                        </ImageList>
                    </Box>
                </Grid>

                {/* description div */}

                <Grid item xs={12} md={8}>
                    <Grid item xs={12} className='description' >
                        {showProject && (
                            <>
                                {/* shows app name */}
                                <div className="project" style={{}}>
                                    <p className="removeMargins" style={{ fontSize: '2rem', color: 'black' }}>
                                        &gt;&gt;&nbsp;{showProject.title}&nbsp;&lt;&lt;
                                    </p>
                                </div>

                                {/* shows link to app */}
                                <div style={{ marginLeft: '1em' }}>
                                    <p >View App: <a style={{ color: '#ec407a' }} href={showProject.url}>{showProject.title}</a></p>
                                </div>

                                {/* holds app pic and deszcription */}
                                <Grid container sx={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
                                    {/* text */}
                                    <Grid item xs={6} style={{ padding: '0 1em 0em 1em' }}>
                                        <p >{showProject.text}</p>
                                    </Grid>
                                    {/* pic */}
                                    <Grid item xs={6} style={{ padding: '0 1em 0em 1em' }}>
                                        <a href={showProject.url}>
                                            <img className="dsPic" src={showProject.fullimg}></img>
                                        </a>
                                    </Grid>
                                </Grid>

                                {/* tech stack used */}
                                <div style={{ padding: '0 1em 0em 1em' }}>

                                    <div style={{ display: 'flex' }}>Utilized Tools: &nbsp;&nbsp;&nbsp;
                                        {
                                            showProject.icons.map((icon, index) => (
                                                <Fragment key={index}>
                                                    {icon}
                                                </Fragment>
                                            ))
                                        }

                                        {/* {showProject.icons} */}

                                    </div>
                                </div>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}






// function Work() {
//     return (

//         <Grid container spacing={1}>
//             <Grid item xs={12} md={4}  >
//                 <Box p={2} className='pics'>


//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequatur expedita officiis. Sit neque ducimus omnis error harum, beatae reiciendis quo consequuntur aliquam unde ab nemo quis sequi, dolor facilis.
//                     </p>



//                 </Box>
//             </Grid>
//             <Grid item xs={12} md={8} >
//                 <Box p={2} className='description' >
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas provident dicta, eveniet excepturi modi atque. Quia odit nihil iusto labore consectetur quisquam, suscipit, nobis, quaerat ducimus fugiat laborum hic.</p>
//                 </Box>

//             </Grid>

//         </Grid>

//     );
// };

// export default Work;