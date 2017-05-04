/**
 * Created by svenschoeni on 03.05.17.
 */
import * as React from "react";
import {PAGE_HAUSRAT} from "./constants";
import {asset, Image, Pano, Sound, Text, View, VrButton} from "react-vr";
export default class WelcomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            textColor: 'blue',
            infoTextVisibility: 'none'
        }
    }

    _toggleInfoText = () => {
        if (this.state.infoTextVisibility === 'none') {
            this.setState({infoTextVisibility: 'flex'});
        }
        else {
            this.setState({infoTextVisibility: 'none'});
        }
        console.log('test button click event');
    }

    render = () => {
        return (
            <View>
                <Pano source={asset('maxresdefault.jpg')}/>
                <View>
                    <Sound source={{mp3: asset('ambient.mp3')}}/>
                </View>
                <View style={{
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}],
                }}>
                    <Text style={{
                        backgroundColor: '#FFF',
                        fontSize: 0.8,
                        color: 'red',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -5]}]
                    }}>Mitte</Text>
                </View>
                <View style={{
                    layoutOrigin: [0, 0, 0],
                    width: 3, height: 3,
                    borderColor: 'black',
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 90}, {rotateZ: 0}],
                }}>
                    <VrButton style={{
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [0, 0.5, -5]}]
                    }}
                              onHeadPoseCaptured={() => this._toggleInfoText()}
                              onExit={() => this._toggleInfoText()}>

                        <Image source={asset('home.png')}
                               style={{width: 1, height: 1}}/>

                        <View style={{display: this.state.infoTextVisibility}}>
                            <Text style={{
                                fontSize: 0.2,
                                opacity: 0.6,
                                padding: 0.2,
                                width: 3,
                                height: 1.5,
                                margin: 0.5,
                                backgroundColor: 'white'
                            }}>
                                Schliessen Sie keine Hausratsversicherung bei der Mobiliar ab.
                            </Text>
                        </View>
                    </VrButton>
                </View>
            </View>




        )
            ;
    };
}
