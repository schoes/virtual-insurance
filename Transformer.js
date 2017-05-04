import * as React from "react";
import {asset, MediaPlayerState, Video, View} from "react-vr";
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


        );
    };
}
