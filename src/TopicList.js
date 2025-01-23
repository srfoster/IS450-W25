import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      {topics.map((topic) => (
        <Card key={topic.id} sx={{ width: '100%', mb: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {topic.name}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => onSelectTopic(topic)} 
              sx={{ mt: 1 }}
            >
              Select Topic
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TopicList;