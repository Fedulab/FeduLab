import React, { PropTypes } from 'react';
import Card from './../Card/Card.js';

export default function CardGrid({ ideas }) {
  const ideaGrid = ideas.map((idea, i) => (
    <Card idea={ idea } key={ i } />
  ));
  return (
    <div className="row">
      { ideaGrid }
    </div>
  );
}

CardGrid.propTypes = {
  ideas: PropTypes.array.isRequired,
};

