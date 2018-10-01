import React from 'react';
import SocialCards from '../components/social-cards';
import Title from '../partials/title';
import DownloadButton from '../components/download-button';
import ImportButton from '../components/import-button';
import CreateRunLink from '../components/create-run-link';

export default () => (
  <React.Fragment>
    <article>
      <Title>Create Run Button</Title>
      <SocialCards title="Insomnia" summary="Create Run Button" isBanner/>
      <section className="container">
        <CreateRunLink/>
      </section>
    </article>
  </React.Fragment>
);
