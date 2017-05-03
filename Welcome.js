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
            styles: {
                welcome: {
                    fontSize: 0.8,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{translate: [0, 0, -3]}],
                    textColor: 'white'
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
    }

    naviagteToIsurance = () => {
        this.setState({site: PAGE_HAUSRAT})
    }

    changeColor = () => {
        if (this.state.styles.welcome.textColor === 'white') {
            this.setState({
                styles: {
                    welcome: {
                        textColor: 'blue'
                    }
                }
            })
        }
        else {
            this.setState({
                styles: {
                    welcome: {
                        textColor: 'white'
                    }
                }
            })
        }

    }

    render = () => {
        return (
            <View>
                <Pano source={asset('maxresdefault.jpg')}/>
                <Sound source={{mp3: asset('ambient.mp3')}}/>
                <Text onEnter={() => {
                    this.setState({
                        styles: {
                            welcome: {
                                textColor: 'white'
                            }
                        }
                    })
                }}
                      onExit={() => {
                          this.setState({
                              styles: {
                                  welcome: {
                                      textColor: 'blue'
                                  }
                              }
                          })
                      }}
                      style={this.state.styles.welcome}>Willkommen</Text>
                <VrButton
                    style={this.state.styles.hausrat}
                    onClick={this.naviagteToIsurance()}>
                    <Image source={asset("home.png")}>
                    </Image>
                    <Text style={this.state.styles.hausrat}>
                        Hausratsversicherung
                    </Text>
                </VrButton>
            </View>


        );
    };
}
