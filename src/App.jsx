import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {UpsellsBlockConnected} from 'components/upsellsBlock/upsellsBlock';

import {buyUpsell, stopBuyingUpsell, changePopupVisibility} from 'store/app/appActionCreators';

import styles from './App.scss';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class App extends Component {
    closeModal = () => {
        this.props.dispatch(stopBuyingUpsell());
        this.props.dispatch(changePopupVisibility(false));
    };

    buyUpsell = () => {
        this.props.dispatch(buyUpsell());
    };

    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.addedUpsells.length > 0 &&
                    <div>
                        <p>Added upsells</p>
                        {this.props.addedUpsells.map(upsell => <div>{upsell}</div>)}
                        <hr/>
                    </div>
                }
                <UpsellsBlockConnected/>
                <Modal
                    isOpen={this.props.isPopupVisible}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <button onClick={this.buyUpsell}>buy upsell</button>
                </Modal>
            </div>
        );
    }
}

export const AppConnected = connect(state => ({
    isPopupVisible: state.app.isPopupVisible,
    addedUpsells: state.app.addedUpsells,
}))(App);
