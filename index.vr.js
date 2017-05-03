import React from "react";
import {AppRegistry} from "react-vr";
import WelcomeScreen from "./Welcome";
import {PAGE_HAUSRAT, PAGE_WELCOME} from "./constants";
import Hausrat from "./Hausrat";


export default class virtualInsurance extends React.Component {
    constructor() {
        super();
        this.styles = {
            logo: {width: 1, height: 1}
        }
        this.state = {site: PAGE_WELCOME}
    }

    render() {
        if (this.state.site === PAGE_HAUSRAT) {
            return (<Hausrat/>);
        }
        else {
            return (
                <WelcomeScreen></WelcomeScreen>
            );
        }
    }
};
AppRegistry.registerComponent('virtualInsurance', () => virtualInsurance);
