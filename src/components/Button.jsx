import React from 'react';
import Icon from './Icon';
import { Button as IButton } from '@rneui/base';
import { StyleSheet } from 'react-native';

const IconButton = ({ title, iconName, onPress, ...props }) => {
    return (
        <IButton
            title={title}
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{ ...styles.button, ...props.buttonStyle }}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            icon={() => <Icon name={iconName} />}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f9d335',
        borderRadius: 15,
        borderColor: '#634a8e',
        borderStyle: 'solid',
        borderWidth: 3,
        height: 50,
        width: 200,
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      buttonTitle: {
        fontSize: 20,
        fontFamily: '../assets/fonts/TiltNeon-Regular',
        color: 'black',
        marginVertical: -5,
      },
      buttonContainer: {
        marginHorizontal: '20%',
      },
});

export default IconButton;
