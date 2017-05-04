import * as React from "react";
import {asset, Image, View, Text} from "react-vr";
export default class Flipchart extends React.Component {

    constructor() {
        super();


    }


    render = () => {
        return (
            <View>
                <Image source={asset('chalkboard.jpg')}
                       style={{
                           position: 'absolute',
                           width: 4.5,
                           height: 5.1,
                           layoutOrigin: [0, 0],
                           transform: [{translate: [-2.8, 2.1, -10]}]
                       }}>

                    <Text style={{
                        width: 8,
                        height: 2,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.8, 2.1, -10]}]
                    }}>
                        ** VIRTUAL INSURANCE **
                    </Text>

                    <Text style={{
                        width: 8,
                        height: 1,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.3, 2.1, -10]}]
                    }}>
                        -APPROACH:
                         set up dummy project
                    </Text>
                    <Text style={{
                        width: 8,
                        height: 1,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.3, 2.1, -10]}]
                    }}>
                        -RESULT:
                         virtual mobi office
                    </Text>
                    <Text style={{
                        width: 8,
                        height: 1,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.3, 2.1, -10]}]
                    }}>
                        -DEMO:
                         grab the vr goggle
                    </Text>
                    <Text style={{
                        width: 8,
                        height: 2,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.3, 2.1, -10]}]
                    }}>
                        -SUMMARY:
                         young and buggy
                         technology
                    </Text>
                    <Text style={{
                        width: 8,
                        height: 1,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0, 0],
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        transform: [{translate: [-2.3, 2.1, -10]}]
                    }}>
                        -RECOMMENDATION:
                         PO organizes
                         cash to realize
                         the project
                    </Text>
                </Image>


            </View>


        );
    };
}
