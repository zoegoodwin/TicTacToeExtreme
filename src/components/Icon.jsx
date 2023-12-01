import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = ({ name }) => {
    const iconSource = getIconSource(name);
    return <Image source={iconSource} style={styles.icon} />;
};

const getIconSource = (name) => {
    switch (name) {
        case 'back':
            return require('../assets/icons/back-icon.png');
        case 'exit':
            return require('../assets/icons/exit-icon.png');
        case 'gameOver':
            return require('../assets/icons/game-over-icon.png');
        case 'home':
            return require('../assets/icons/home-icon.png');
        case 'instructions':
            return require('../assets/icons/instructions-icon.png');
        case 'menu':
            return require('../assets/icons/menu-icon.png');
        case 'newGame':
            return require('../assets/icons/new-game-icon.png');
        case 'pause':
            return require('../assets/icons/pause-icon.png');
        case 'resume':
            return require('../assets/icons/resume-icon.png');
        case 'settings':
            return require('../assets/icons/settings-icon.png');
        case 'speedrun':
            return require('../assets/icons/speedrun-icon.png');
        case 'start':
            return require('../assets/icons/start-icon.png');
        case 'tempO':
            return require('../assets/icons/temp-o-icon.png');
        case 'tempX':
            return require('../assets/icons/temp-x-icon.png');
        case 'tictactoe':
            return require('../assets/icons/tictactoe-icon.png');
        case 'trophy':
            return require('../assets/icons/trophy-icon.png');
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});

export default Icon;
