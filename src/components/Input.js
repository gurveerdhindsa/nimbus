import React, { Component } from 'react';
import '../assets/css/Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            value: '',
            timeout: 0,
            urlValid: ''
        }
    }

    handleInput(e) {
        if (this.state.timeout) {
            clearTimeout(this.state.timeout);
        }

        this.setState({
            value: e.target.value,
            timeout: setTimeout(() => {
                this.validateURL(this.state.value);
            }, 800)
        });


    }

    validateURL(url) {

        if (!url) {
            console.log('No youtube url')
            this.setState({
                urlValid: ''
            });
        }
        else {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                console.log('Valid youtube url')
                this.setState({
                    urlValid: 'valid'
                });
            }
            else {
                console.log('Invalid youtube url')
                this.setState({
                    urlValid: 'invalid'
                });
            }
        }
    }

    render() {
        return (
            <div>
                <input className={"input " + this.state.urlValid}
                       placeholder="Enter a youtube URL"
                       type="text"
                       onChange={(e) => {this.handleInput(e)}} />
            </div>
        );
    }
}

export default Input