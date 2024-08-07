import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import "@fortawesome/fontawesome-free/css/all.css";
import '../styles/Ticker.css'

// ticker with applicable tech stack icons
function Ticker() {
    return (
        <>
            {/* for flex */}
            <Grid container >
                {/* utility belt buckle */}
                <Grid item xs={3} sx={{ display: "inline-flex", justifyContent: "flex-end", background: "linear-gradient(to right bottom, #78ffdb, #ffa8e5)", borderBottomLeftRadius: "16px" }} >
                    <p style={{ fontSize: "1.2em", backgroundColor: "black", paddingRight: "1em", paddingLeft: "1em", paddingTop: "0.2em" }}>UTILITY BELT:</p>
                </Grid>
                {/* scrolling belt */}
                <Grid item xs={9} sx={{ display: "flex", alignItems: "center", width: "100vw" }}>
                    <marquee style={{ width: "100%", background: "rgba(255, 255, 255, 0.3)", borderRight: "dashed 2px teal", padding: "0.4rem" }} behavior="scroll" direction="left">
                        {/* TECH STACK ICON CONTENT */}
                        <Icon sx={{ width: "3em" }} className="fa-solid fa-font-awesome" />
                        <Icon sx={{ width: "3em" }} className="fa-regular fa-file-code iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-regular fa-solid fa-terminal" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-html5 iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-css3-alt" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-js iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-python" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-brands fa-java iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-square-github" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-git-alt iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-bootstrap" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-node-js iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-solid fa-flask" />
                        <Icon sx={{ width: "3em" }} className="fa-solid fa-database iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-react" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-stripe iconcolor" />
                        <Icon sx={{ width: "3em" }} className="fa-brands fa-figma" />&nbsp;&nbsp;&nbsp;
                        {/* from devicon */}
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-mongodb-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-sequelize-plain"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-webpack-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-apple-original"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-jquery-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-handlebars-plain "></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-bulma-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-materialui-plain"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-mysql-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-vscode-plain "></i>
                        <i style={{ fontSize: "1.5rem", marginRight: "1.5em" }} className="devicon-intellij-plain iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-chrome-plain"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-eslint-original iconcolor"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-express-original"></i>
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-heroku-original iconcolor"></i>
                        <i style={{ fontSize: "1.5rem", marginRight: "1.5em" }} className="devicon-graphql-plain"></i>
          
                        <i style={{ fontSize: "1.7rem", marginRight: "1.5em" }} className="devicon-devicon-plain"></i>
                    </marquee>
                </Grid>
            </Grid>
        </>
    );
}


export default Ticker;