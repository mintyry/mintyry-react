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
import dotblog from '../assets/work/dotblog.png';
import firstportfolio from '../assets/work/firstport.png'

import Icon from "@mui/material/Icon";
import "@fortawesome/fontawesome-free/css/all.css";


// quilted structure of photos
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


// array of photos as objects
const itemData = [
    {
        img: dexperience,
        title: 'DEXPERIENCE',
        rows: 2,
        cols: 2,
        url: 'https://mintyry.github.io/DEXPERIENCE/',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed fuga aperiam labore ab accusantium incidunt optio officia enim dolorum, quis maxime, laborum ullam culpa. Quidem libero ab ipsum provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed fuga aperiam labore ab accusantium incidunt optio officia enim dolorum, quis maxime, laborum ullam culpa. Quidem libero ab ipsum provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed fuga aperiam labore ab accusantium incidunt optio officia enim dolorum, quis maxime, laborum ullam culpa. Quidem libero ab ipsum provident! ',
        fullimg: fulldexperience,
        icons: [
            <Icon sx={{  marginRight: '0.5em' }} className="fa-regular fa-file-code iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-regular fa-solid fa-terminal iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-html5 iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-css3-alt iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-js iconcolor iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-square-github iconcolor" />,
            <Icon sx={{ lineHeight: 'unset', marginRight: '0.5em' }} className="fa-brands fa-git-alt iconcolor" />,
            <i style={{ fontSize: "1.5rem" }} className="devicon-bulma-plain iconcolor"></i>
        ]
    },
    {
        img: weather,
        title: 'What\'s Up Weather?',
        cols: 2,
        url: 'https://mintyry.github.io/whats-up-weather/',
        text: 'This is What\'s Up Weather!!'
    },
    {
        img: dotblog,
        title: '[dot]Blog',
        rows: 2,
        url: 'https://dotblog-2a215c6fdcb3.herokuapp.com',
        text: 'This is [dot]Blog]'
    },
    {
        img: quiztime,
        title: 'Quiz Time',
        rows: 2,
        url: 'https://mintyry.github.io/quiz-time/',
        text: 'This is Quiz Time!'
    },

    {
        img: firstportfolio,
        title: 'Minty.Ry Portfolio 1.0',
        cols: 2,
        url: 'https://mintyry.github.io/Minty-Ry-Portfolio/',
        text: 'This is my first portfolio!'
    },
    {
        img: anyyes,
        title: 'AnyYes',
        cols: 2,
        url: 'https://anyyes-com-7a95399acf53.herokuapp.com',
        text: 'This is AnyYes!'
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
                                    <p className="removeMargins" style={{ fontSize: '2rem' }}>
                                        &gt;&gt;&nbsp;{showProject.title}&nbsp;&lt;&lt;
                                    </p>
                                </div>

                                {/* shows link to app */}
                                <div style={{ marginLeft: '1em' }}>
                                    <p >View App: <a style={{ color: '#ec407a' }} href={showProject.url}>{showProject.title}</a></p>
                                </div>

                                {/* holds app pic and deszcription */}
                                <Grid container sx={{marginBottom:'2rem'}}>
                                    {/* text */}
                                    <Grid item xs={6} style={{ padding: '0 1em 0em 1em' }}>
                                        <p >{showProject.text}</p>
                                    </Grid>
                                     {/* pic */}
                                     <Grid item xs={6} style={{ padding: '0 1em 0em 1em' }}>
                                        <a  href={showProject.url}>
                                            <img className="dsPic" src={showProject.fullimg}></img>
                                        </a>
                                    </Grid>
                                </Grid>

                                {/* tech stack used */}
                                <div style={{ padding: '0 1em 0em 1em' }}>
                                    <p >Utilized Tools: &nbsp;&nbsp;&nbsp; {showProject.icons}</p>
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