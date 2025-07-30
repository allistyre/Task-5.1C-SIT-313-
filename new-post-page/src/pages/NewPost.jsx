import * as React from 'react'
import './css/NewPost.css'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import { useState } from "react";


function NewPost() {
    const [postType, setPostType] = useState("question");


    return (
        <Box component='section' sx={{ padding: 4, }}>
            <Typography component='h1' variant='h4' gutterBottom>
                New Post
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
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

        </Box>
    )
}

export default NewPost;