import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetail 
        author="Tom"
        timeAgo="Today at 7:20PM"
        content="I went to Shinjuku"
        avatar={faker.image.avatar()} 
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
        author="John"
        timeAgo="Yesterday at 7:45AM"
        content="Good morning!"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));