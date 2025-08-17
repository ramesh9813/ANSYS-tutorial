import React from 'react';
import { useParams } from 'react-router-dom';
import Structural from './Structural';

const TutorialCategoryPage = () => {
  const { category } = useParams();

  switch (category) {
    case 'structural':
      return <Structural />;
    // Add other categories here in the future
    default:
      return <div>Category not found</div>;
  }
};

export default TutorialCategoryPage;
