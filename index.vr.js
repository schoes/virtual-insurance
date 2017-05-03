import React from "react";
import {AppRegistry, asset, Pano, Sound, View} from "react-vr";
import WelcomeScreen from "./Welcome";


export default class virtualInsurance extends React.Component {
    constructor() {
        super();
        this.state = {textColor: 'white'};
    }

    render() {
        return (
            <View>
                <WelcomeScreen></WelcomeScreen>
                <Pano source={asset('surfing.jpg')}/>
                <Sound source={{mp3: asset('ambient.mp3')}}/>
            </View>
        );
    }
};

AppRegistry.registerComponent('virtualInsurance', () => virtualInsurance);
