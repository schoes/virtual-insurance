/**
 * Created by svenschoeni on 03.05.17.
 */
import * as React from "react";
import {PAGE_HAUSRAT} from "./constants";
import {asset, Image, Pano, Sound, Text, View, VrButton} from "react-vr";
export default class WelcomeScreen extends React.Component {

    constructor() {
        super();
        this.styles = {
            welcome: {
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}],
            },
            hausrat: {
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [1.5, 1.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [-2, 0, 0]}, {rotateY: 45}],
            }
        }
    }

    naviagteToIsurance = () => {
        this.setState({site: PAGE_HAUSRAT})
    }

    render = () => {
        return (
            <View>
                <Pano source={asset('maxresdefault.jpg')}/>
                <Sound source={{mp3: asset('ambient.mp3')}}/>
                <Text
                    style={this.styles.welcome}>Willkommen</Text>
                <VrButton
                    style={{width: 0.7}}
                    onClick={this.naviagteToIsurance}>
                    <Image source={asset("home.png")}>
                        <Text style={this.styles.hausrat}>
                            Hausratsversicherung
                        </Text>
                    </Image>
                </VrButton>
            </View>


        );
    };
}
