/**
 * Created by svenschoeni on 03.05.17.
 */
import * as React from "react";
import {PAGE_HAUSRAT} from "./constants";
import {asset, Image, MediaPlayerState, Pano, Sound, Text, Video, View, VrButton} from "react-vr";
export default class WelcomeScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            textColor: 'blue',
            infoTextVisibility: 'none',
            transformerPlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
            futurePlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
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
            <View>
                <Pano source={asset('office_small.jpg')}/>
                <Sound source={{mp3: asset('ambient.mp3')}}/>
                <View style={{
                    layoutOrigin: [0, 0, 0],
                    transform: [{translate: [0, 0, 0]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}],
                }}>
                    <Text style={{
                        fontSize: 0.8,
                        color: '#FFF',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -5]}]
                    }}>Willkommen</Text>
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
                              onEnter={() => this._toggleInfoText()}
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

                <View
                    onEnter={() => {
                        this.playTransformerVideo()
                    }}
                    onExit={() => {
                        this.stopTransformerVideo()
                    }}
                    style={{
                        layoutOrigin: [0, 0, 0],
                        borderColor: 'black',
                        transform: [{translate: [5, 5, -30]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}],
                    }}>
                    <Video
                        style={{display: 'flex', height: 10, width: 15}}
                        source={asset('transformer.mov')}
                        playerState={this.state.transformerPlayer}/>
                </View>

                <View
                    onEnter={() => {
                        this.playFutureVideo();
                    }}
                    onExit={() => {
                        this.stopFutureVideo();
                    }}
                    style={{
                        layoutOrigin: [0, 0, 0],
                        borderColor: 'black',
                        transform: [{translate: [-5, 5, -30]}, {rotateX: 0}, {rotateY: 0}, {rotateZ: 0}],
                    }}>
                    <Video
                        style={{display: 'flex', height: 10, width: 15}}
                        source={asset('back2future.mov')}
                        playerState={this.state.futurePlayer}/>
                </View>

            </View>
        );
    };
}
