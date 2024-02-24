import React from 'react';
import { ReactComponent as HtmlIcon } from '../Assets/Icons/html-icon.svg';
import { ReactComponent as CssIcon } from '../Assets/Icons/css-icon.svg';
import { ReactComponent as JavaScriptIcon } from '../Assets/Icons/javascript-programming-language-icon.svg';
import { ReactComponent as MongodbIcon } from '../Assets/Icons/mongodb-icon.svg';
import { ReactComponent as NodeJsIcon } from '../Assets/Icons/node-js-icon.svg';
import { ReactComponent as ReactJsIcon } from '../Assets/Icons/react-js-icon.svg';
import { ReactComponent as ReduxJsIcon } from '../Assets/Icons/redux-icon.svg';
import { ReactComponent as GitIcon } from '../Assets/Icons/git-icon.svg';
import { ReactComponent as TypeScriptIcon } from '../Assets/Icons/typescript-programming-language-icon.svg';
import { ReactComponent as SassIcon } from '../Assets/Icons/sass-icon.svg';

const IconComponents = {
    html: HtmlIcon,
    css: CssIcon,
    sass: SassIcon,
    javascript: JavaScriptIcon,
    reactjs: ReactJsIcon,
    redux: ReduxJsIcon,
    nodejs: NodeJsIcon,
    typescript: TypeScriptIcon,
    mongodb: MongodbIcon,
    git: GitIcon,
};

export const Icon = ({ iconName }) => {
    const IconComponent = IconComponents[iconName];

    if (!IconComponent) {
        console.error(`Icon component not found for iconName: ${iconName}`);
        return null;
    }

    return <IconComponent alt={iconName} style={{ width: '32px', cursor: 'pointer' }} />;
};
