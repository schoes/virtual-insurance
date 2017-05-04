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
                        height: 10,
                        width: 15,
                        position: 'absolute',
                        width: 3.5,
                        height: 2,
                        layoutOrigin: [0, 0],
                        transform: [{translate: [1, 4.7, -10]}]
                    }}
                    source={asset('back2future.mov')}
                    playerState={this.state.futurePlayer}/>

                <Image style={{
                    position: 'absolute',
                    width: 6,
                    height: 3,
                    layoutOrigin: [0, 0],
                    transform: [{translate: [-0.2, 5.2, -10]}]
                }}
                       source={asset('television.png')} />
            </View>



        );
    };
}
