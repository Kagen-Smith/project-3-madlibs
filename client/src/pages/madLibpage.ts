import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_TEMPLATE_BY_ID } from '../graphql/queries';
import MadLibForm from '../components/MadLibForm';
import MadLibStory from '../components/MadLibStory';

interface Field {
  name: string;
  label: string;
}