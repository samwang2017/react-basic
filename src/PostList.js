import React, { Component } from 'react';
import PostItem from './PostItem';
const data = [
    {
        title: 'title1',
        author: 'author1',
        date: 'date1'
    },
    {
        title: 'title2',
        author: 'author3',
        date: 'date2'
    },
    {
        title: 'title3',
        author: 'author3',
        date: 'date3'
    },
]
class PostList extends Component {
    render() {
        return (
            <div>
                BBS lists
                <ul>
                    {
                        data.map(item =>
                            <PostItem
                                title={item.title}
                                author={item.author}
                                date={item.date}
                            />
                                )
                               }
                </ul>
            </div>
                                );
                            }
                        }
export default PostList;