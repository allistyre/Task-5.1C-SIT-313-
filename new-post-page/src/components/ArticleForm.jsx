import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";

function ArticleForm() {
    return (
        <Box component='section'>
            <Typography component='h1' variant='h4' gutterBottom fontWeight={500} >
                What do you want to ask or share
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" mb={5}>
                <Typography component='h1' variant='h5'>Title</Typography>
                <TextField id="outlined-basic" label="Start your question with how, what, why, etc." variant="outlined"
                           fullWidth/>
            </Stack>
            <Stack direction="column" spacing={2} mb={5}>
                <Typography component='h1' variant='h5'>Abstract</Typography>
                <TextField id="outlined-textarea" label="Enter a 1-paragraph abstract" multiline rows={4}></TextField>
            </Stack>
            <Stack direction="column" spacing={2} mb={5}>
                <Typography component='h1' variant='h5'>Article Text</Typography>
                <TextField id="outlined-textarea" label="Enter a 1-paragraph abstract" multiline rows={10}></TextField>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" mb={5}>
                <Typography component='h1' variant='h5'>Tags</Typography>
                <TextField id="outlined-basic" label="Please add up to 3 tags to describe what your question is about
                e.g., Java" variant="outlined"
                           fullWidth/>
            </Stack>
            <Stack direction="row" spacing={2} mb={5}>
                <Button variant="contained" color="primary">POST</Button>
            </Stack>
        </Box>
    )
}

export default ArticleForm;