import React from 'react';
import { useParams } from 'react-router-dom';
import Structural from './Structural';
import Cfd from './Cfd';
import Electromagnetics from './Electromagnetics';
import Thermal from './Thermal';

const TutorialCategoryPage = () => {
  const { category } = useParams();

  switch (category) {
    case 'structural':
      return <Structural />;
    case 'cfd':
      return <Cfd />;
    case 'electromagnetics':
      return <Electromagnetics />;
    case 'thermal':
      return <Thermal />;
    default:
      return <div>Category not found</div>;
  }
};

export default TutorialCategoryPage;
