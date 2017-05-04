import * as React from "react";
import {asset, Image, MediaPlayerState, Video, View} from "react-vr";
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
                }}>
                <Video
                    style={{
                        position: 'absolute',
                        width: 4.6,
                        height: 2.6,
                        layoutOrigin: [0, 0],
                        transform: [{translate: [1.45, 6.5, -14]}]
                    }}
                    source={asset('back2future_low.mov')}
                    playerState={this.state.futurePlayer}/>

                <Image style={{
                    position: 'absolute',
                    width: 8,
                    height: 4,
                    layoutOrigin: [0, 0],
                    transform: [{translate: [-0.2, 7.2, -14]}]
                }}
                       source={asset('television.png')} />
            </View>



        );
    };
}
