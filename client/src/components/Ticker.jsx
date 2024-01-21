import Grid from "@mui/material/Grid";

function Ticker() {
    return (
        <>
            <Grid container >
                <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end", background: "linear-gradient(to right bottom, #78ffdb, #ffa8e5)", borderBottomLeftRadius: "16px"  }} >
                    <p style={{fontSize:"2rem", backgroundColor:"black", paddingRight: "1em", paddingLeft: "1em"}}>UTILITY BELT:</p>
                </Grid>
                <Grid item xs={9} sx={{ display: "flex", alignItems:"center" }}>
                    <marquee behavior="scroll" direction="left">Your scrolling text goes here</marquee>
                    
                     {/* <p>Hi</p> */}
                </Grid>
            </Grid>
        </>
    );
}


export default Ticker;