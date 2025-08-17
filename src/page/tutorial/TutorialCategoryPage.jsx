import React from 'react';
import { useParams } from 'react-router-dom';
import Structural from './Structural';
import Cfd from './Cfd';
import Thermal from './Thermal';
import Model from './Model';
import ThermoStructural from './ThermoStructural';
import Coupled from './Coupled';
import Fatigue from './Fatigue';
import Transient from './Transient';
import Parametric from './Parametric';

const TutorialCategoryPage = () => {
  const { category } = useParams();

  switch (category) {
    case 'structural':
      return <Structural />;
    case 'cfd':
      return <Cfd />;
    case 'thermal':
      return <Thermal />;
    case 'model':
      return <Model />;
    case 'thermo-structural':
      return <ThermoStructural />;
    case 'coupled':
      return <Coupled />;
    case 'fatigue':
      return <Fatigue />;
    case 'transient':
      return <Transient />;
    case 'parametric':
      return <Parametric />;
    default:
      return <div>Category not found</div>;
  }
};

export default TutorialCategoryPage;
