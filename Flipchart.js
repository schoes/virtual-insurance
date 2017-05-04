import * as React from "react";
import {asset, Image, View, Text} from "react-vr";
export default class Flipchart extends React.Component {

    constructor() {
        super();


    }


    render = () => {
        return (
            <View>
                <Image source={asset('chalckboard.jpg')}
                       style={{
                           position: 'absolute',
                           width: 4.5,
                           height: 5.1,
                           layoutOrigin: [0, 0],
                           transform: [{translate: [-2.8, 2.1, -10]}]
                       }}
                >
                    <Text style={{
                        fontSize: 0.3,
                        color: 'white',
                        layoutOrigin: [0.5, 0.5],
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0.6, 0.3, -5]}]
                    }}>
                        Willkommen bei der Mobiliar
                    </Text>
                </Image>


            </View>


        );
    };
}
