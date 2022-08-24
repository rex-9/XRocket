import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from './utils';
import App from '../App';
import { Join, Leave } from '../components/JoinLeave';
import { ActiveStatus, InactiveStatus } from '../components/Status';

describe('Render All of the components', () => {
  test('Render Pages', () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/Space Traveler's Hub/i)).toMatchSnapshot(); // Nav component

    fireEvent.click(screen.getByText(/Missions/i));
    expect(screen.getByText(/Description/i)).toMatchSnapshot(); // Mission component

    expect(screen.getByText(/Description/i)).toMatchSnapshot(); // Mission component

    fireEvent.click(screen.getByText(/My Profile/i));
    expect(screen.getByText(/My Missions/i)).toMatchSnapshot(); // MyProfile component
  });

  test('Render Components', () => {
    renderWithProviders(<Join />);
    expect(screen.getByText(/Join Mission/i)).toMatchSnapshot(); // Join component
    renderWithProviders(<InactiveStatus />);
    expect(screen.getByText(/NOT A MEMBER/i)).toMatchSnapshot(); // Inactive component

    renderWithProviders(<ActiveStatus />);
    expect(screen.getByText('Active Member')).toMatchSnapshot(); // Active component
    renderWithProviders(<Leave />);
    expect(screen.getByText('Leave Mission')).toMatchSnapshot(); // Leave component
  });
});
