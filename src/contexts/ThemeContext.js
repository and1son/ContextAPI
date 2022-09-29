import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { isDarkMode: false }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, tasteLikeChicken: false }}>
                {this.props.children}
            </ThemeContext.Provider >
        )
    }
}