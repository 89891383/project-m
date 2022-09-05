import { IconButton } from '@mui/material';
import { usePopupState, bindHover, bindPopover } from 'material-ui-popup-state/hooks';
import { usePlayerContext } from '@/contexts/PlayerContext';
import { VolumeSlider, VolumeSliderBox, VolumeSliderPopver } from './VolumeControl.styles';
import { getVolumeIcon } from '../../VideoPlayer.model';

const VolumeControl = () => {
  const { playerState, toggleMuted, setVolume } = usePlayerContext();
  const { isMuted, volume } = playerState;

  const popupState = usePopupState({ variant: 'popover', popupId: 'volumeControl' });
  return (
    <>
      <IconButton onClick={toggleMuted} {...bindHover(popupState)}>
        {getVolumeIcon(isMuted, volume)}
      </IconButton>

      <VolumeSliderPopver
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: -135,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <VolumeSliderBox>
          <VolumeSlider
            orientation='vertical'
            valueLabelDisplay='off'
            onChange={setVolume}
            value={isMuted ? 0 : volume}
            min={0}
            max={1}
            step={0.01}
          />
        </VolumeSliderBox>
      </VolumeSliderPopver>
    </>
  );
};

export default VolumeControl;