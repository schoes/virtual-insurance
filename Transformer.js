import * as React from "react";
import {asset, Image, MediaPlayerState, Video, View} from "react-vr";
export default class Transformer extends React.Component {

    constructor() {
        super();

        this.state = {
            transformerPlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
        }
    }

    playTransformerVideo = () => {
        this.state.transformerPlayer.play();
    }

    stopTransformerVideo = () => {
        this.state.transformerPlayer.pause();
    }

    render = () => {
        return (
            <View
                onEnter={() => {
                    this.playTransformerVideo()
                }}
                onExit={() => {
                    this.stopTransformerVideo()
                }}>

                <Video
                    style={{
                        position: 'absolute',
                        width: 4.6,
                        height: 2.6,
                        layoutOrigin: [0, 0],
                        transform: [{translate: [1.45, 2.5, -14]}]
                    }}
                    source={asset('transformer_low.mov')}
                    playerState={this.state.transformerPlayer}/>

                <Image style={{
                    position: 'absolute',
                    width: 8,
                    height: 4,
                    layoutOrigin: [0, 0],
                    transform: [{translate: [-0.2, 3.2, -14]}]
                }}
                       source={asset('television.png')}/>
            </View>


        );
    };
}
