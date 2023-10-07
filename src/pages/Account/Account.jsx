import React from 'react';
import Header from '../../components/Header/Header'
import AccountComponent from '../../components/AccountComponent/AccountComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faMessage, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Account.scss';
import 'react-tabs/style/react-tabs.css';

function Account() {
    return <>
        <Header />
        <div id="tabs">
            <div className="container">
                <div className="tabs-inner">
                <Tabs>
                    <TabList>
                        <Tab>Account <FontAwesomeIcon icon={faUser} /></Tab>
                        <Tab>Favorites <FontAwesomeIcon icon={faHeart} /></Tab>
                        <Tab>Messages <FontAwesomeIcon icon={faMessage} /></Tab>
                        <Tab>Approved projects <FontAwesomeIcon icon={faCheck} /></Tab>
                    </TabList>

                    <TabPanel>
                        <AccountComponent />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </div>
    </>
}

export default Account;