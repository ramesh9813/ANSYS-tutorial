import React from 'react';
import { useParams } from 'react-router-dom';

const TutorialHome = () => {
  const { category } = useParams();

  return (
    <div>
      {category ? (
        <div>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Tutorials</h1>
          <p>Here you will find tutorials for the {category} category.</p>
          {/* Add specific tutorial content here based on the category */}
        </div>
      ) : (
        <div>
          <h1>Tutorial Home</h1>
          <p>Welcome to the tutorial home page. Please select a category from the left sidebar to see the tutorials.</p>
        </div>
      )}
    </div>
  );
};

export default TutorialHome;
