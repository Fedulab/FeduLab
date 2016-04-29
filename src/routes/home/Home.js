import React, { PropTypes } from 'react';

import HeroImage from './../../components/HeroImage/HeroImage.js';
import CardGrid from './../../components/CardGrid/CardGrid.js';

const pageTitle = 'React Starter Kit';

const titles = [
  'Add limit to pricing',
  'New Vending Machine',
  'Rethink Innovation',
  'Rebranding',
  'Design Default Logo',
  'Add Building Signs',
  'Improve Toilet',
  'Change Mobile Onboarding',
];

function tempData(title) {
  return {
    title,
    description: 'A description',
    image: 'https://placehold.it/400x350',
  };
}

export default function Home({ news }, context) {
  context.setTitle(pageTitle);
  return (
      <div>
        <HeroImage title="ACT TODAY" image={ require('./lightbulbs.jpg') } />
        <CardGrid ideas={ titles.concat(titles).map(title => tempData(title)) } />
      </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };
