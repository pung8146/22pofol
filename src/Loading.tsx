import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
    width:200px;
    height:200px;
    background-color: gold;
    border-radius: 15px;
`

function Loading() {
    return (
        <>
        <motion.div>
            <Box animate={{borderRadius:"100px"}} />
        </motion.div>
        </>
    )
}

export default Loading;