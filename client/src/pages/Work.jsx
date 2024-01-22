
// mui comps
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// my css
import '../styles/Work.css'
// project imgs
import dexperience from '../assets/work/dexp.png';
import anyyes from '../assets/work/ay.png';

// quilted structure of photos
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

// export this
export default function Work() {
    // const updatedItemData = itemData.slice(0, -1);
    if (itemData.length > 0) {
        itemData[itemData.length - 1].cols = 4;
    }

    return (
        // <Grid container spacing={1}>
        <>
            <Grid container spacing={1} mt={3}>
                <Grid item xs={12} md={4}  >
                    <Box className='boxPics'>
                        <ImageList

                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                            sx={{ borderRadius: '10px' }}

                        >
                            {itemData.map((item) => (

                                <ImageListItem className="projects" key={item.img} cols={item.cols || 1} rows={item.rows || 1} component="a" href={item.url}>

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
                <Grid item xs={12} md={8} >
                    <Box className='description' >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas provident dicta, eveniet excepturi modi atque. Quia odit nihil iusto labore consectetur quisquam, suscipit, nobis, quaerat ducimus fugiat laborum hic.</p>
                    </Box>

                </Grid>
            </Grid>
        </>
    );
}

// array of photos as objects
const itemData = [
    {
        img: dexperience,
        title: 'DEXPERIENCE',
        rows: 2,
        cols: 2,
        url: 'https://mintyry.github.io/DEXPERIENCE/'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'honey',
        rows: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        rows: 2,
    },

    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: anyyes,
        title: 'AnyYes',
        cols: 2,
        url: 'https://anyyes-com-7a95399acf53.herokuapp.com'
    },
    // placeholder image



];




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