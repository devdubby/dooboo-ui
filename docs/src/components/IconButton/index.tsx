import {ThemeProvider, Icon, IconButton} from 'dooboo-ui';
import React, {ReactElement} from 'react';

import {View} from 'react-native';
import styled from '@emotion/native';

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const IconButtonStory = (): React.ReactElement => {
  return (
    <View>
      <IconButton icon={<StyledIcon size={24} name="moment-solid" />} />
      <View style={{width: 8}} />
      <IconButton icon={<StyledIcon size={24} name="add-light" />} />
      <View style={{width: 8}} />
      <IconButton icon={<StyledIcon size={24} name="chevron-right" />} />
    </View>
  );
};

export const Light = (): ReactElement => (
  <ThemeProvider initialThemeType="light">
    <IconButtonStory />
  </ThemeProvider>
);

export const Dark = (): ReactElement => (
  <ThemeProvider initialThemeType="dark">
    <IconButtonStory />
  </ThemeProvider>
);
