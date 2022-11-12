import type { ButtonProps} from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import { InnerStack, SettingStack } from './SettingWithButton.styles';
import type { FC } from 'react';
import React from 'react';

interface SettingWithButton extends ButtonProps {
  icon: JSX.Element;
  header: string;
  subtitle: string;
  buttonAction: () => void;
  buttonLabel: string;
}

const SettingWithButton: FC<SettingWithButton> = ({ icon, header, subtitle, buttonAction, buttonLabel, ...rest }) => {
  return (
    <SettingStack>
      <Box>
        <InnerStack>
          {icon}
          <Box sx={{ lineHeight: 1 }}>
            <Typography variant='h4' noWrap>
              {header}
            </Typography>
            <Typography variant='caption'>{subtitle}</Typography>
          </Box>
        </InnerStack>
      </Box>
      <Button {...rest} onClick={buttonAction}>
        {buttonLabel}
      </Button>
    </SettingStack>
  );
};

export default SettingWithButton;
