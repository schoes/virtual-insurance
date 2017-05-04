import * as React from "react";
import {asset, MediaPlayerState, Video, View} from "react-vr";
export default class Flipchart extends React.Component {

    constructor() {
        super();


    }


    render = () => {
        return (
            <View style={{
                position: 'absolute',
                display: 'flex',
                layoutOrigin: [0, 0],
                marginTop: -1.12,
                marginLeft: 1.2,
                transform: [{translate: [0, 0, -11.5]}],
            }}>
                <Text style={{
                    display: this.state.sketch02InfoTextVisibility,
                    textAlignVertical: 'center',
                    fontSize: 0.25,
                    color: 'black',
                    backgroundColor: 'white',
                    opacity: 0.6,
                    width: 3,
                    height: 1.2
                }}>
                    Die Schadenskizzen sind ein wichtiger Bestandteil des Mobiliar Marketings.
                </Text>
            </View>


        );
    };
}
