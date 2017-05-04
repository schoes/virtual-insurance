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
                       }}
                >
                    <Text style={{
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0.5, 0.5],
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [1, -3, -5]}]
                    }}>
                        ** VIRTUAL INSURANCE **

                        •  APPROACH:
                            set up dummy project
                        •  RESULT:
                            virtual mobi office
                        •  DEMO:
                            grab the vr goggle
                        •  SUMMARY:
                            young and buggy
                            technology
                        •  RECOMMENDATION:
                            organize
                            cash to realize
                            the project
                        ************************
                    </Text>
                </Image>


            </View>


        );
    };
}
