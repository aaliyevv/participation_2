import React from 'react';
import './Note.css';

function Note({ title, content, createdDate, image }) {
  const handleClick = () => {
    alert(`Title: ${title}, Created on: ${createdDate}`);
  };

  return (
    <div onClick={handleClick}>
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={image} alt={title} />}
      <p>{createdDate}</p>
    </div>
  );
}

export default Note;