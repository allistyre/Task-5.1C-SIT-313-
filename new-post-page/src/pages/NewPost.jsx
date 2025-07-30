import * as React from 'react'
import './css/NewPost.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {ToggleButtonGroup, ToggleButton, Divider} from "@mui/material";
import { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import ArticleForm from "../components/ArticleForm";
import Container from "@mui/material/Container";



function NewPost() {
    const [postType, setPostType] = useState("question");


    return (
            <Container maxWidth="lg">
                <Box component='section' sx={{ padding: 4}}>
                    <Typography component='h1' variant='h4' gutterBottom fontWeight={500}>
                        Create a New Post
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center" mb={5}>
                        <Typography component='h6' variant='h6'>
                            Select Post Type
                        </Typography>
                        <ToggleButtonGroup exclusive color="primary" value={postType} onChange={(event, newPostType) => {
                            setPostType(newPostType);
                        }}>
                            <ToggleButton value={"question"}>Question</ToggleButton>
                            <ToggleButton value={"article"}>Article</ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Divider sx={{ mb: 5}} />
                    {postType === "question" ? <QuestionForm /> : <ArticleForm /> }
                </Box>
            </Container>
    )
}

export default NewPost;