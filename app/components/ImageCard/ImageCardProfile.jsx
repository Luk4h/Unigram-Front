import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import { IoChatbubbleOutline, IoHeartOutline } from "react-icons/io5"

const ImageCard = ({navigation, post}) => {
    return (
        <View style={styles.ImageCardLayout}>
            <ImageBackground
                style={styles.ImageCardImage}
                source={post.image}>
                <View style={styles.ImageCardInfo}>
                    <View style={styles.ImageCardInfoText}>
                        <Text style={styles.ImageCardInfoOwner}>@{post.id_user.username}</Text>
                        <Text style={styles.ImageCardInfoTimeAgo}> há 2 semanas</Text>
                    </View>
                    <View style={styles.ImageCardInfoButtons}>
                        <TouchableOpacity style={styles.ImageCardInfoButtom}>
                            <IoChatbubbleOutline style={styles.ImageCardInfoButtom} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageCardInfoButtom}>
                            <IoHeartOutline style={styles.ImageCardInfoButtom} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.ImageCardDescription}>
                <Text style={styles.ImageCardDescriptionText}>Eu casei!</Text>
                <TouchableOpacity>
                <Text style={styles.ImageCardDescriptionTextExpand}>ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ImageCardLayout: {
        borderRadius:'16px',
        overflow: 'hidden',
        hadowOffset: {
            width: -2,
            height: 4
        },
        shadowRadius: '24px',
        shadowOpacity: '.15',
        shadowColor: '#000',
    },
    ImageCardImage: {
        height: '32rem',
    },
    ImageCardInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color: '#fff',
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.30);',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '1rem'
    },
    ImageCardInfoText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ImageCardInfoOwner: {
        color: '#fff',
        fontWeight: '600',
        fontSize: '1rem'
    },
    ImageCardInfoTimeAgo: {
        color: '#d8d8d8',
        fontWeight: '300',
        fontSize: '1rem'
    },
    ImageCardInfoButtons:{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        color: '#fff'
    },
    ImageCardInfoButtom: {
        width: '1.5rem',
        height: '1.5rem'
    },
    ImageCardDescription: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: '1rem',
        padding: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ImageCardDescriptionText: {
        fontSize: '1rem'
    },
    ImageCardDescriptionTextExpand: {
        fontWeight: 700
    }
});

export default ImageCard;