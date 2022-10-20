import { Button, Grid, Paper, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Settings from '../../components/Settings';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { leader } = useSocketContext();
  const { isAdmin } = useAuthContext();
  const { t } = useTranslation();
  const { handleOnVideoSkip } = usePlayerContext();
  const { togglePlaylistLocked } = usePlaylistContext();

  return (
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
            <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item xs={12} sm={12} md={7} sx={{ pt: '0!important' }}>
                <Playlist />
              </Grid>
              <Grid item sm={12} md={5} sx={{ pt: '0!important' }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Settings />
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ height: '500px' }}>
                      <Typography>__debug options__</Typography>
                      <Button variant='contained' onClick={() => handleOnVideoSkip()}>
                        Skip video
                      </Button>
                      <Button variant='contained' onClick={() => toast(`${t('genericErrorMessage')}`)}>
                        Request Toast
                      </Button>
                      <Button variant='contained' onClick={() => togglePlaylistLocked()}>
                        Toggle Playlist
                      </Button>
                      isAdmin: {isAdmin ? 'yup' : 'nopers'}
                      <br />
                      currentLeader: {JSON.stringify(leader, null, 2)}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;