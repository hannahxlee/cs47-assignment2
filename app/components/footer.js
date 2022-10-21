import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { Themes } from '../../assets/Themes';

export const Buttons = () => {
    return (
        <View style={styles.buttons}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../../assets/Icons/discover_light.png')}
                    style={styles.icon}/>
                <Text
                    style={styles.text}>
                    Discover
                </Text>    
            </View>
            <View style={styles.iconContainer}>        
                <Image
                    source={require('../../assets/Icons/heart_light.png')}
                    style={styles.icon}/>   
                <Text
                    style={styles.text}>
                    Matches
                </Text>        
            </View>
            <View style={styles.iconContainer}>         
                <Image
                    source={require('../../assets/Icons/messages_light.png')}
                    style={styles.icon}/>     
                <Text
                    style={styles.text}>
                    DMs
                </Text>        
            </View>
        </View>    
    )
}

export default Buttons;

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Themes.light.navigation,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: undefined,
        height: '38%',
        aspectRatio: 1/1,
        marginBottom: 12,
    },
    text: {
        fontFamily: 'Sydney',
        fontSize: 16,
        textAlign: 'center',
        color: Themes.light.textSecondary,
    }
})