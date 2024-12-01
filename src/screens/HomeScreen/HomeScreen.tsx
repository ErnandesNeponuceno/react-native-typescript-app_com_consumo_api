import { View, Text } from "react-native";
import {styles} from './HomeStyle'
import CardView from "../../components/CardView";


export default function HomeScreen(){
    return(
        <View style={styles.container}> 
            <View style={styles.cardBox}>
                <CardView/>
            </View>
        </View>
    )
}