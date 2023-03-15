import React  from 'react'
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () =>{
    return(
    <Stack
        direction='row'
        sx={{
            marginTop:'30px',
            width:'80%'
        }}
    >
        <TextField
            id='outlined-basic'
            label='Github User'
            placeholder='Octocat'
            size='small'
            variant='outlined'
            sx={{
                width:'90%',
                
            }}
        />
        <IconButton
            size='small' 
            sx={{
                left:'-50px'
            }}
        >
            <SearchIcon/>
        </IconButton>
    </Stack>
    );
    
}
export default Searcher;