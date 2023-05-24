import React, { Component } from 'react'

export default class Module extends Component {
    state = {
        input: "",
        items: []
    }
    handler = (event) => {
        this.setState({
            input: event.target.value
        });
    };

    storeItem = (event) => {
        event.preventDefault();
        const { input } = this.state;

        this.setState({
            items: [...this.state.items, input],
            input: ""
        })

    };
    render() {
        const { input, items } = this.state
        console.log(items)
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.storeItem}>
                    <input type='text' onChange={this.handler}
                        value={input}
                        placeholder='Enter Items' ></input>
                    <button>Add</button>
                </form>
                <div>
                    {items.map(

                        (data, index) => {
                            return(

                                <p key={index}>{data}</p>
                            )
                        })}

                    <p>Item 1</p>
                </div>

            </div>
        )
    }
}
