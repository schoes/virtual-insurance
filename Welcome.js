/**
 * Created by svenschoeni on 03.05.17.
 */
import * as React from "react";
import {PAGE_HAUSRAT} from "./constants";
import {asset, Image, MediaPlayerState, Pano, Sound, Text, View, VrButton} from "react-vr";
import Transformer from "./Transformer";
import Future from "./Future";
import Flipchart from "./Flipchart";
export default class WelcomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            transformerPlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
            futurePlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
            welcomeTextVisibility: 'flex',
            sketch01InfoTextVisibility: 'none',
            sketch02InfoTextVisibility: 'none'
        }
    }

    componentDidMount() {
        setTimeout(this._hideWelcomeText, 5000);
    }

    _hideWelcomeText = () => {
        this.setState({welcomeTextVisibility: 'none'});
    }

    _toggleSketch01InfoText = () => {
        if (this.state.sketch01InfoTextVisibility === 'none') {
            this.setState({sketch01InfoTextVisibility: 'flex'});
        }
        else {
            this.setState({sketch01InfoTextVisibility: 'none'});
        }
    }

    _toggleSketch02InfoText = () => {
        if (this.state.sketch02InfoTextVisibility === 'none') {
            this.setState({sketch02InfoTextVisibility: 'flex'});
        }
        else {
            this.setState({sketch02InfoTextVisibility: 'none'});
        }
    }

    playTransformerVideo = () => {
        this.state.transformerPlayer.play();
    }
    playFutureVideo = () => {
        this.state.futurePlayer.play();
    }
    stopTransformerVideo = () => {
        this.state.transformerPlayer.pause();
    }
    stopFutureVideo = () => {
        this.state.futurePlayer.pause();
    }

    render = () => {
        return (
            <View style={{
                /*
                 display: 'flex',
                 flexDirection: 'row',
                 alignItems: 'stretch'
                 */
            }}>
                <Pano source={asset('office_small.jpg')}/>
                <Sound source={{mp3: asset('ambient.mp3')}}/>

                <View style={{
                    position: 'absolute',
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}]
                }}>

                    <Text style={{
                        display: this.state.welcomeTextVisibility,
                        fontSize: 0.5,
                        color: 'white',
                        layoutOrigin: [0.5, 0.5],
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0.3, -5]}]
                    }}>
                        Willkommen bei der Mobiliar
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 90}, {rotateZ: 0}]
                }}>
                    <Flipchart/>
                </View>

                <View style={{
                    position: 'absolute',
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 180}, {rotateZ: 0}]
                }}>

                    <VrButton onEnter={() => this._toggleSketch01InfoText()}
                              onExit={() => this._toggleSketch01InfoText()}>

                        <Image source={asset('claimsketch.png')}
                               style={{
                                   position: 'absolute',
                                   width: 0.95,
                                   height: 1.9,
                                   marginTop: -1.12,
                                   marginLeft: -1.52,
                                   layoutOrigin: [0, 0],
                                   transform: [{translate: [0, 0, -11.5]}]
                               }}/>
                    </VrButton>

                    <View style={{
                        position: 'absolute',
                        display: 'flex',
                        layoutOrigin: [0, 0],
                        marginTop: -1.12,
                        marginLeft: -4.6,
                        transform: [{translate: [0, 0, -11.5]}],
                    }}>
                        <Text style={{
                            display: this.state.sketch01InfoTextVisibility,
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

                    <VrButton onEnter={() => this._toggleSketch02InfoText()}
                              onExit={() => this._toggleSketch02InfoText()}>

                        <Image source={asset('claimsketch.png')}
                               style={{
                                   position: 'absolute',
                                   width: 0.95,
                                   height: 1.9,
                                   marginTop: -1.12,
                                   marginLeft: 0.17,
                                   layoutOrigin: [0, 0],
                                   transform: [{translate: [0, 0, -11.5]}]
                               }}/>
                    </VrButton>

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
                </View>

                <View style={{
                    position: 'absolute',
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 270}, {rotateZ: 0}],
                }}>

                </View>
            </View>
        );
    };
}
