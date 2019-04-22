import React from "react";
import LargeWidgetsContainer from "./startMenuStructure/LargeWidgetsContainer";
import SmallWidgetsContainer from "./startMenuStructure/SmallWidgetsContainer";
import StartMenu from "./startMenuStructure/StartMenu";
import Widget from "./startMenuStructure/Widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenuApp = props => {
    return (
        <StartMenu display={props.startMenuOpen} onClick={props.closeStartMenu}>
            <SmallWidgetsContainer />
            <LargeWidgetsContainer>
                <Widget
                    onClick={props.startMemoryGame}
                    style={{ gridArea: "widget-1" }}
                >
                    <span>Memory Game</span>
                </Widget>
            </LargeWidgetsContainer>
        </StartMenu>
    );
};

export default StartMenuApp;
