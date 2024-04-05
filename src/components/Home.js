import React from 'react';
import { FileUpload, Edit, Visibility } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import Upload from './Upload';

const OrangeContainer = styled(Box)({
  backgroundColor: 'orange',
  minHeight: '100vh', // Ensure the container takes up the full height of the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingBottom: '50px', // Add padding at the bottom to create space for the triangle
});

const IconLabel = styled(Box)({
  color: 'black',
  textAlign: 'center',
  borderRadius: '50%', // Make the container circular
  border: '2px solid white', // Add white border
  padding: '10px', // Add padding for space around the icon and label
  margin: '10px', // Add margin for space between icons
  width: '100px', // Set fixed width to maintain consistent size
  height: '100px', // Set fixed height to maintain consistent size
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey', // Fill the area under white borders with grey color
  position: 'absolute', // Position icons absolutely
});

const Top = styled(IconLabel)({
  top: '50px',
  left: 'calc(50% - 50px)',
});

const BottomLeft = styled(IconLabel)({
  bottom: '50px',
  left: '50px',
});

const BottomRight = styled(IconLabel)({
  bottom: '50px',
  right: '50px',
});

export default function Home() {
  return (
    <OrangeContainer>
      <Top>
        <Visibility fontSize="large" />
        <div>View document</div>
      </Top>
      <BottomLeft>
        <FileUpload  fontSize="large" /> {/* Changed here */}
        <div >Upload document</div>
      </BottomLeft>
      <BottomRight>
        <Edit fontSize="large" />
        <div>Edit document</div>
      </BottomRight>
    </OrangeContainer>
  );
}
