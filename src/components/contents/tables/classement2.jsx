import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './table.css';

export default class ClassmentTrie extends React.Component {

    state = {
        competitions: [],
        isLoading: true,
        errors: null
    };

    getcompetitions() {
        let config = { 'X-Auth-Token': 'a8fd10c1a4ce46889c901ab960eaecb1' };
        axios
            .get('http://api.football-data.org/v2/competitions', { headers: config })
         
            .then(response => {
                const competitions = response.data.competitions.filter((c) => c.currentSeason != undefined)
                this.setState({
                    competitions,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getcompetitions();
    }

    render() {
        const { isLoading, competitions } = this.state;
        return (




            <React.Fragment>
                <h2>Random competition</h2>
                <div>
                    <Table id="table_1">
                        <tbody>
                            <tr>
                                <td> #</td>
                                <td>Classement</td>
                                <td>Pts</td>
                                <td >Day</td>
                                <td>Diff</td>
                            </tr>


                            {!isLoading ? (
                                competitions.map(competition => {
                                    const { id, name, currentSeason } = competition;
                                    return (
                                      

                                            <tr key={id}>
                                                <td className="bold"> #{id}</td>
                                                <td>{name}</td>
                                                <td className="bold">{currentSeason.id}</td>
                                                <td className="bold">Day</td>
                                                <td className="direct">Diff</td>
                                            </tr>

                                            
                                        
                                    );
                                })
                            ) : (
                                    <tr><td>Loading...</td></tr>
                                )}
                        </tbody>
                    </Table>

                </div>
            </React.Fragment>
        );
    }
}


