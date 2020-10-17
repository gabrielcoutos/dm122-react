import { StyleSheet } from 'react-native'
import { colors,measures,fonts } from '../../styles'

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: measures.padding,
        justifyContent: 'space-between'
    },
    text: {
       fontSize: fonts.bigger,
       color: colors.base,
       borderBottomWidth: 2,
       borderBottomColor: colors.dark,
       padding: measures.padding,
       fontWeight: 'bold'
    }
})

export default style;