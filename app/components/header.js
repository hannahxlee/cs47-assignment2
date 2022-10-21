import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { Themes } from '../../assets/Themes';

export const Navigation = () => {
    return (
        <View style={styles.header}>
            <Image 
                source={require('../../assets/Icons/menu_light.png')}
                style={styles.icon}
            />
            <Text 
                style={styles.text}>
                Hinge
            </Text>
            <Image
                source={require('../../assets/Icons/sun.png')}
                style={styles.icon}
            />
        </View>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    icon: {
        width: 41,
        height: 41,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: Platform.OS == 'ios' ? 41:54,
        backgroundColor: Themes.light.bg,
        paddingRight: 28,
        paddingLeft: 28,
        marginTop: 10, // Ask about this margin
        marginBottom: 30, // Ask about this margin
    },
    text: {
        fontFamily: 'SydneyBold',
        fontSize: 32,
    }
});