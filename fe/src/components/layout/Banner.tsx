import { Box, Typography } from "@mui/material"

export const Banner = () => {
    return (
        <>
        <Box sx={{mx: "auto", maxWidth: "1248px"}} bgcolor={"primary"}>
            <Box>
                <Typography>Pinecone Food delivery</Typography>
                <Typography>Horem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </Box>
            <Box>
                <img src="/coverImg.png"></img>
                <img src="/coverImg2.png"></img>
            </Box>
        </Box>
        </>
    )
}