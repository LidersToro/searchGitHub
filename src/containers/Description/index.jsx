import React  from "react";
import { Stack, Typography } from '@mui/material';
import PaperInformation from "../../componets/PaperInformation";
import LocationInformation from "../../componets/LocationInformation";

const Description = (props) => {
    const {userState} = props;
    const {bio} = userState;
    return (
        <>
        <Stack sx={{justifyContent:'center'}}> 
        {
            bio !== null
            ? <Typography variant="body1">{bio}</Typography>
            : <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</Typography>
        }
        </Stack>
        <PaperInformation  userState={userState} />
        <LocationInformation userState={userState} />

        </>
    )
}

export default Description;