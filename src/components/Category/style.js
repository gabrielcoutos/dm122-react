import { StyleSheet } from 'react-native';
import { colors, measures, fonts } from '../../styles'

const style = StyleSheet.create({
    container: {
        padding: measures.padding,
        justifyContent: 'justifyContent',
        backgroundColor: colors.white,
        borderBottomWidth: 2,
        borderBottomColor: colors.light
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginBottom: measures.padding
    },
    description: {
        fontSize: fonts.bigger,
        color: colors.black
    },
    items: {
        fontSize: fonts.big,
        color: colors.base,
        fontWeight: "bold"
    },
})

export default style;