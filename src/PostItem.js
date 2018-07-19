import React, { Component } from 'react';
class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        };
    }

    //vote logic
    handleClick() {
        let vote = this.state.vote;
        vote++;
        this.setState({
            vote: vote
        });
    }
    render() {
        const { title, author, date } = this.props;
        return (
            <li>
                <div>
                    {title}
                </div>
                <div>
                    author:<span>{author}</span>
                </div>
                <div>
                    date:<span>{date}</span>
                </div>
                <div>
                    <button
                        onClick={() => {
                            this.handleClick();
                        }}
                    >
                        like it
                    </button>
                    &nbsp;
                    <span>
                        {this.state.vote}
                    </span>
                </div>
            </li>
        )
    }
}
export default PostItem