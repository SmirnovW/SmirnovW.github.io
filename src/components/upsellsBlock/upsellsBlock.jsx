import React, {Component} from 'react';
import {connect} from 'react-redux';

import {UpsellsList, UpsellItem} from 'components/upsells';
import {initializeUpsellAdding} from 'store/app/appActionCreators';

import styles from './upsellsBlock.scss';

export class UpsellsBlock extends Component {
    state = {
        upsells: [1, 2, 3],
    };

    addUpsell = (upsell) => {
        this.props.dispatch(initializeUpsellAdding(upsell));
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <UpsellsList>
                    {this.state.upsells.map(upsell =>
                        <UpsellItem key={upsell} data={upsell} onClick={this.addUpsell}/>
                    )}
                </UpsellsList>

            </div>
        );
    }
}

export const UpsellsBlockConnected = connect()(UpsellsBlock);
