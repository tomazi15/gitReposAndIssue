import React, { Component } from 'react';
import { REPOS, ISSUES } from './endPoint';
import axios from 'axios';
import AccordionComponent from '../components/Accordion/Accordion'
import Spinner from 'react-bootstrap/Spinner'

class Api extends Component {
    
    constructor () {
        super();
        this.state = {
            repos: [],
            issues: [],
            isLoading: false,
        }

        this.getIssues = this.getIssues.bind(this);

    }

    async getRepos (e) {
        e.preventDefault();

        this.setState({ isLoading: true });
        const repos = await axios.get(REPOS)
            .then((res) => {
                this.setState({ repos: [...res.data], isLoading: false });
            })
            .catch((err) => {
                console.log(err);
            })
        return repos;
    }

    async getIssues (e, name) {
        e.preventDefault();

        this.setState({ isLoading: true });
        const issues = await axios.get(`${ISSUES}${name}/issues?state=open`)
            .then((res) => {
                this.setState({ issues: [...res.data], isLoading: false });
            })
            .catch((err) => {
                console.log(err);
            })    
        return issues;
    } 

    render() {

        const { repos, issues, isLoading } = this.state

        return (
            <div>
                <div>
                    { isLoading ? <Spinner animation="border" variant="primary" /> : 
                        <button onClick={ (e) => {this.getRepos(e)} }>
                            Get Repos
                        </button>
                    }
                </div>
                <div>
                    
                    <AccordionComponent repos={ repos } issuesFunc={this.getIssues} issues={issues} loading={ isLoading }></AccordionComponent>
                </div>
            </div>
        );
    }

}

export default Api;