import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import 'react-horizontal-scrolling-menu/dist/styles.css'; // Import the required styles

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow" sx={{ cursor: 'pointer' }}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow" sx={{ cursor: 'pointer' }}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 10px" // Adjust spacing as needed
          sx={{
            display: 'inline-block', // Ensure inline display
            width: 'auto',
            flexShrink: 0, // Prevent shrinking
          }}
        >
          {bodyParts ? 
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> 
            : 
            <ExerciseCard exercise={item} /> 
          }
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;
