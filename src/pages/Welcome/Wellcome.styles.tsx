import { StyleSheet } from "react-native";
import { theme } from '../../styles';


export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: theme.vw * 90,
        height: theme.vh * 90,
        backgroundColor: 'red'
    }
})