import React, { Component } from 'react';

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

    deleteItem = (key) => {
        console.log(key);
        const allItems = this.state.items;
        allItems.splice(key, 1);
        this.setState({
            items: allItems
        })
    };

    render() {
        const { input, items } = this.state
        console.log(items)
        return (
            <div>
                <div className='list-input'>

                    <h1>Todo List</h1>
                    <form onSubmit={this.storeItem}>
                        <div className='text-input' >

                            <input type='text' onChange={this.handler}
                                value={input}
                                placeholder='Enter Items' ></input>
                            <button>Add</button>
                        </div>
                    </form>
                </div>
                <div className='list-output'>
                    {items.map(

                        (data, index) => {
                            return (
                                <div>

                                    <p key={index}>{data}
                                        <i class="fa-regular fa-trash-can"
                                            onClick={
                                                () => { this.deleteItem(index) }
                                            } ></i>
                                    </p>

                                </div>

                            )
                        })}

                </div>

            </div>
        )
    }
}
