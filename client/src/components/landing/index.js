import React, { Fragment } from 'react';

import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { uniq } from 'lodash';
import { Spacer } from '../helpers';
import Login from '../Header/components/Login';
import AppleLogo from '../../assets/images/AppleLogo.js';
import AmazonLogo from '../../assets/images/AmazonLogo.js';
import MicrosoftLogo from '../../assets/images/MicrosoftLogo.js';
import SpotifyLogo from '../../assets/images/SpotifyLogo.js';
import GoogleLogo from '../../assets/images/GoogleLogo.js';
import AsFeatureLogo from '../../assets/images/AsFeatureLogo.js';

import './landing.css';
import '../Map/map.css';

const propTypes = {
  edges: PropTypes.array
};

const BigCallToAction = () => (
  <Row>
    <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
      <Login block={true} data-test-label='landing-big-cta'>
        Get started (it's free)
      </Login>
    </Col>
  </Row>
);

const AsFeaturedSection = () => (
  <div className='text-center'>
    <h2 className='medium-heading'>As Featured In:</h2>
    <AsFeatureLogo width='70%' />
  </div>
);

export const Landing = ({ edges }) => {
  const superBlocks = uniq(edges.map(element => element.node.superBlock));
  const interviewPrep = superBlocks.splice(6, 1);
  return (
    <Fragment>
      <Helmet>
        <title>Learn to code at home | freeCodeCamp.org</title>
      </Helmet>
      <main className='landing-page'>
        <Spacer />
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h1
                className='big-heading text-center'
                data-test-label='landing-header'
              >
                Welcome to freeCodeCamp.org
              </h1>
              <Spacer />
              <h2 className='medium-heading text-center'>
                Learn to code at home.
              </h2>
              <h2 className='medium-heading text-center'>Build projects.</h2>
              <h2 className='medium-heading text-center'>
                Earn certifications.
              </h2>
              <h2 className='medium-heading text-center'>
                Since 2014, more than 40,000 freeCodeCamp.org graduates have
                gotten jobs at tech companies including:
              </h2>
              <div className='logo-row'>
                <Col md={2} sm={3} xs={4}>
                  <AppleLogo />
                </Col>
                <Col md={2} sm={3} xs={4}>
                  <GoogleLogo />
                </Col>
                <Col md={2} sm={3} xs={4}>
                  <AmazonLogo />
                </Col>
                <Col md={2} sm={3} xs={4}>
                  <MicrosoftLogo />
                </Col>
                <Col md={2} sm={3} xs={4}>
                  <SpotifyLogo />
                </Col>
              </div>
            </Col>
          </Row>
          <Spacer />
          <BigCallToAction />
          <Spacer />
          <AsFeaturedSection />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h2 className='medium-heading'>Certifications:</h2>
              <ul>
                {superBlocks.map((superBlock, i) => (
                  <li className={'superblock'} key={i}>
                    <Link state={{ superBlock: superBlock }} to={`/learn`}>
                      <h2 className='medium-heading'>{superBlock}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
              <Spacer />
              <h2 className='medium-heading'>Additional Learning:</h2>
              <ul>
                <li>
                  <Link state={{ superBlock: interviewPrep }} to={`/learn`}>
                    <h2 className='medium-heading'>{interviewPrep}</h2>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Spacer />
        </Grid>
      </main>
    </Fragment>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
