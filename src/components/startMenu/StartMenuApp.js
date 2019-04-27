import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LargeWidgetsContainer from "./style/LargeWidgetsContainer";
import SmallWidgetsContainer from "./style/SmallWidgetsContainer";
import SmallWidgetBox from "./style/SmallWidgetBox";
import StartMenu from "./style/StartMenu";
import Widget from "./style/Widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenuApp = props => {
    return (
        <StartMenu onClick={() => props.closeApp("startMenuOpen")}>
            <SmallWidgetsContainer>
                <SmallWidgetBox>
                    <Link to="#">
                        <FontAwesomeIcon icon={["fa", "file"]} />
                    </Link>
                </SmallWidgetBox>
                <SmallWidgetBox>
                    <Link to="#">
                        <FontAwesomeIcon icon={["fa", "address-card"]} />
                    </Link>
                </SmallWidgetBox>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/settings"
                                : "/apps"
                        }
                        onClick={() => props.startApp("settingsOpen")}
                    >
                        <FontAwesomeIcon icon={["fa", "cog"]} />
                    </Link>
                </SmallWidgetBox>
            </SmallWidgetsContainer>
            <LargeWidgetsContainer>
                <Widget style={{ gridArea: "widget-1" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/memorygame"
                                : "/apps"
                        }
                        onClick={() => props.startApp("memoryGameOpen")}
                    >
                        <span className="name">Memory Game</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-2" }}>
                    widget 2 calendar
                </Widget>
                <Widget style={{ gridArea: "widget-3" }}>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/calculator"
                                : "/apps"
                        }
                        onClick={() => props.startApp("calculatorOpen")}
                    >
                        <span className="name">Calculator</span>
                    </Link>
                </Widget>
                <Widget style={{ gridArea: "widget-4" }}>
                    widget 4 resume
                </Widget>
                <Widget style={{ gridArea: "widget-5" }} title="github">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "github"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-6" }} title="codesandbox">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "codepen"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-7" }} title="linkedin">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "linkedin-in"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-8" }} title="instagram">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>
                <Widget style={{ gridArea: "widget-9" }}>
                    widget 9 neighborhood map
                </Widget>
                <Widget style={{ gridArea: "widget-10" }}>
                    widget 10 notepad
                </Widget>
                <Widget style={{ gridArea: "widget-11" }}>
                    widget 11 weather app
                </Widget>
            </LargeWidgetsContainer>
        </StartMenu>
    );
};

export default StartMenuApp;

StartMenuApp.propTypes = {
    closeApp: PropTypes.func.isRequired,
    startApp: PropTypes.func.isRequired
};
