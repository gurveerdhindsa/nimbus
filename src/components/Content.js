import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/Content.css';
import Header from './Header';
import Input from './Input';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            value: '',
            timeout: 0,
            loadVideo: false
        };
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
        }
        else {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                console.log('Valid youtube url')
                this.setState({
                    loadVideo: true
                });
            }
            else {
                console.log('Invalid youtube url')
            }
        }
    }

    render() {
        const opts = {
            height: window.innerHeight - 30,
            width: window.innerWidth,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="main">
            <FontAwesomeIcon className="icon-drag" icon="ellipsis-v" />
                {!this.state.loadVideo ?
                    [
                        <Header />,
                        <Input  handleInput={this.handleInput}
                                placeholder="Search..."/>
                    ]
                    :
                    <div className="content">
                      <YouTube
                          videoId="ZYHmgb-zmzQ"
                          opts={opts}
                          onReady={this._onReady} />
                    </div>
                }
            </div>
        );
    }
}

export default Content