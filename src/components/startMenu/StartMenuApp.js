import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    LargeWidgetsContainer,
    SmallWidgetBox,
    SmallWidgetsContainer,
    StartMenu,
    Widget
} from "./style";
import mempryGameIcon from "../taskbar/img/memory-game-icon-taskbar.jpg";
import calculatorIcon from "../taskbar/img/calculator-icon-taskbar.jpg";
import settingsIcon from "../taskbar/img/settings-icon-taskbar.png";
import neighborhoodIcon from "../taskbar/img/neighborhood-map-icon-taskbar.jpg";
import weatherIcon from "../taskbar/img/weather-icon-taskbar.jpg";
import resumeIcon from "../taskbar/img/resume-icon-taskbar.jpg";
import aboutIcon from "../taskbar/img/about-icon-taskbar.jpg";
import contactIcon from "../taskbar/img/contact-icon-taskbar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenuApp = props => {
    return (
        <StartMenu onClick={() => props.closeApp("startMenuOpen")}>
            <SmallWidgetsContainer>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/about"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "aboutOpen",
                                aboutIcon,
                                7,
                                "aboutMinimize"
                            )
                        }
                    >
                        <FontAwesomeIcon icon={["fa", "file"]} />
                    </Link>
                </SmallWidgetBox>
                <SmallWidgetBox>
                    <Link
                        to={
                            window.matchMedia("(max-width: 56.25rem)").matches
                                ? "/apps/contact"
                                : "/apps"
                        }
                        onClick={() =>
                            props.startApp(
                                "contactOpen",
                                contactIcon,
                                8,
                                "contactMinimize"
                            )
                        }
                    >
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
                        onClick={() =>
                            props.startApp(
                                "settingsOpen",
                                settingsIcon,
                                3,
                                "settingsMinimize"
                            )
                        }
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
                        onClick={() => {
                            props.startApp(
                                "memoryGameOpen",
                                mempryGameIcon,
                                1,
                                "memoryGameMinimize"
                            );
                        }}
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
                        onClick={() =>
                            props.startApp(
                                "calculatorOpen",
                                calculatorIcon,
                                2,
                                "calculatorMinimize"
                            )
                        }
                    >
                        <span className="name">Calculator</span>
                    </Link>
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
                                icon={["fab", ""]}
                                size="3x"
                            />
                        </span>
                    </a>
                </Widget>


                <Widget style={{ gridArea: "widget-10" }}>
                    widget 10 notepad
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
