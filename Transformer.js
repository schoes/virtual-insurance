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
                        height: 10,
                        width: 15,
                        position: 'absolute',
                        width: 3.5,
                        height: 2,
                        layoutOrigin: [0, 0],
                        transform: [{translate: [1, 2.0, -10]}]
                    }}
                    source={asset('transformer_low.mov')}
                    playerState={this.state.transformerPlayer}/>

                <Image style={{
                    position: 'absolute',
                    width: 6,
                    height: 3,
                    layoutOrigin: [0, 0],
                    transform: [{translate: [-0.2, 2.5, -10]}]
                }}
                       source={asset('television.png')}/>
            </View>


        );
    };
}
