import React from "react";
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Grid
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { purple } from "@material-ui/core/colors";

const StyledCard = styled(Card)(({ theme }) => ({
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "270px",
    borderRadius: ".625rem!important",
    "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
}));


const RepoCard = ({ repo, language }) => {
    // const classes = useStyles();
    return (
        <Grid xs={12} sm={6} lg={3} sx={{
            minWidth: 0,
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex"
        }}>
            <StyledCard>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" sx={{
                            color: "E5FFFF",
                            backgroundColor: purple[500]
                        }}>
                            <span
                                className="octicon octicon-repo"
                                style={{ fontSize: "20px" }}
                            ></span>
                        </Avatar>
                    }
                    title={
                        <Typography variant="h6">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#551A8B" }}
                            >
                                {repo.name}
                            </a>{" "}
                        </Typography>
                    }
                />

                <CardContent sx={{
                    minHeight: "120px"
                }}>
                    <Typography variant="body1">{repo.description}</Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                    {repo.language ? (
                        <React.Fragment>
                            <span

                                style={{
                                    height: "12px",
                                    width: "12px",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                   
                                }}
                            ></span>
                            <Typography style={{ marginRight: "10px" }}>
                                {repo.language}
                            </Typography>
                        </React.Fragment>
                    ) : null}
                    {repo.stargazers_count >= 0 ? (
                        <React.Fragment>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    marginRight: "10px",
                                    color: "#551A8B"
                                }}
                            >
                                <span className="octicon octicon-star">
                                    {" "}
                                    {repo.stargazers_count}
                                </span>
                            </a>
                        </React.Fragment>
                    ) : null}
                    {repo.forks_count >= 0 ? (
                        <React.Fragment>
                            <a
                                href={`${repo.html_url}/fork`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    marginRight: "10px",
                                    color: "#551A8B"
                                }}
                            >
                                <span className="octicon octicon-repo-forked">
                                    {repo.forks_count}
                                </span>
                            </a>
                        </React.Fragment>
                    ) : null}
                </CardActions>
            </StyledCard>
        </Grid>
    );
};

export default RepoCard;
