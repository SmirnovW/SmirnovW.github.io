import React, {Component} from 'react';

import styles from './upsellItem.scss';

export class UpsellItem extends Component {
    add = () => {
        this.props.onClick(this.props.data);
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <p>upsell {this.props.data}</p>
                <button onClick={this.add}>add upsell</button>
            </div>
        );
    }
}
