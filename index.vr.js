import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    Pano,
    Text,
    View, AmbientLight,
    Sound
} from 'react-vr';

export default class virtualInsurance extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('surfing.jpg')}/>
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.8,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -3]}],
                    }}>

                </Text>
                <Sound
                    source={{
                        mp3: asset('ambient.mp3')
                    }}
                />
            </View>
        );
    }
};

AppRegistry.registerComponent('virtualInsurance', () => virtualInsurance);
