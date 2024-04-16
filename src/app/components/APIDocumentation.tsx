import React from 'react';
import PlaygroundHeader from './PlaygroundHeader';
import NavMenu from './NavMenu';
import Documentation from './Documentation';

const APIDocumentation = () => {
  return (
    <>
      <PlaygroundHeader/>
      <div id='api-docs'>
        <NavMenu/>
        <Documentation/>
      </div>
    </>
  );
}

export default APIDocumentation;
