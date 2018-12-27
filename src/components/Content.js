import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header';
import Input from './Input';
import '../assets/css/Content.css';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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

    handleBackButtonClick(e) {
        this.setState({
            loadVideo: false
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

    getYouTubeURL(url) {
      var id = '';
      url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if(url[2] !== undefined) {
        id = url[2].split(/[^0-9a-z_\-]/i);
        id = id[0];
      }
      else {
        id = url;
      }
        return id;
    }

    render() {
        const options = {
            height: window.innerHeight - 30,
            width: window.innerWidth,
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <div className="main">
                <FontAwesomeIcon className="icon-drag" icon="ellipsis-v" />

                {!this.state.loadVideo ? null : <FontAwesomeIcon className="icon-back" icon="arrow-left" onClick={this.handleBackButtonClick}/> }
                {!this.state.loadVideo ?
                    [
                    <Header />,
                    <Input
                        handleInput={this.handleInput}
                        placeholder="&#xF002; Search..." />
                    ]
                    :
                    <div className="content">
                        <YouTube
                            videoId={this.getYouTubeURL(this.state.value)}
                            opts={options}
                            onReady={this._onReady} />
                    </div>
                }
            </div>
        );
    }
}

export default Content