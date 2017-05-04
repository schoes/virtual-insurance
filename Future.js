import * as React from "react";
import {asset, MediaPlayerState, Video, View} from "react-vr";
export default class Future extends React.Component {

    constructor() {
        super();

        this.state = {
            futurePlayer: new MediaPlayerState({autoPlay: false, muted: false}), // init with muted, autoPlay
        }
    }

    playFutureVideo = () => {
        this.state.futurePlayer.play();
    }

    stopFutureVideo = () => {
        this.state.futurePlayer.pause();
    }

    render = () => {
        return (


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



        );
    };
}
