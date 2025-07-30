import * as React from 'react'
import './css/NewPost.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import ArticleForm from "../components/ArticleForm";



function NewPost() {
    const [postType, setPostType] = useState("question");


    return (
        <Box component='section' sx={{ padding: 4, }}>
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

            {postType === "question" ? <QuestionForm /> : <ArticleForm /> }

        </Box>
    )
}

export default NewPost;