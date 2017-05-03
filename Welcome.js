/**
 * Created by svenschoeni on 03.05.17.
 */
import * as React from "react";
import {Text} from "react-vr";
export default class WelcomeScreen extends React.Component {


    render = () => {
        return (
            <Text style={{
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}],
            }}>Willkommen</Text>

        );
    };
}
