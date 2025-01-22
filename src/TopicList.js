import React from 'react';

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <div>
      {topics.map((topic) => (
        <button key={topic.id} onClick={() => onSelectTopic(topic)}>
          {topic.name}
        </button>
      ))}
    </div>
  );
};

export default TopicList;