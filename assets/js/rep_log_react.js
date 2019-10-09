import React from 'react';
import { render } from 'react-dom';
import RepLogApp from "./RepLog/RepLogApp";

const shouldShowExclamation = true;

render(
    <RepLogApp withExclamation={shouldShowExclamation} />,
    document.getElementById("lift-stuff-app")
);