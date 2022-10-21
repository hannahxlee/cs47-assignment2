import { ImageBackground, View, Text, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import { Themes } from '../../assets/Themes';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export const Card = () => {
    return (
        <View style={styles.card}>
            <ImageBackground 
                source={(require('../../assets/Profiles/mtl.jpg'))}
                style={styles.image}
                imageStyle={{borderRadius: 10,}}>
                <View style={styles.imageContainer}>
                    <Text 
                        style={styles.name}>
                        MTL
                    </Text>
                    <Text 
                        style={styles.location}>
                        2 miles away
                    </Text>
                </View>
            </ImageBackground>

            <View style={styles.audio}>
                <Text 
                    style={styles.audioText}>
                    My hottest take
                </Text>
                <View style={styles.audioContainer}>
                    <Image 
                        source={require('../../assets/Icons/player_light.png')}
                        style={styles.audioPlayer}/>
                    <Image 
                        source={require('../../assets/Icons/audio_waveform_light.png')}
                        style={styles.audioWave}/>
                </View>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        flex: 6,
        backgroundColor: Themes.light.bg,
        width: '85%',
        alignItems: 'center',
    },
    imageContainer: {
        paddingTop: 8,
        paddingLeft: 12,
        paddingBottom: 8,
        height: '100%',
        justifyContent: 'space-between',
    },
    image: {
        borderRadius: 10,
        width: '100%',
        aspectRatio: 1/1.1,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    name: {
        fontFamily: 'Sydney',
        fontSize: 32,
        color: Themes.light.textSecondary,
    },
    location: {
        fontFamily: 'Sydney',
        fontSize: 18,
        color: Themes.light.textSecondary,
    },
    audio: {
        width: '100%',
        height: '22%',
        borderRadius: 20, 
        marginTop: 20, //?!?!?!?!?!
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 60,
        backgroundColor: Themes.light.bgSecondary,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    audioText: {
        fontFamily: 'Sydney',
        fontSize: 28, 
        color: Themes.light.text,
        marginBottom: 14,
    },
    audioContainer: {
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    audioPlayer: {
        width: 50,
        height: 50,
    },
    audioWave: {
        width: '80%',
        height: '80%',
    }
})