import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

class AccordionComponent extends Component {
    render() {
        const { repos, issues, isLoading } = this.props;

        let repoList = repos.map((item) => {
               return <div key={item.id}>   
               <Accordion>
                    <Card>
                        <Card.Header>    
                            <Accordion.Toggle
                                onClick={(e) => { this.props.issuesFunc(e, item.name)}} 
                                variant="" 
                                eventKey={item.id}>
                                   {item.name }
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse  eventKey={item.id}>
                            <Card.Body>
                            { 
                                issues.map((item) => {
                                    return  <Alert key={item.id} variant="info">{item.title}</Alert>
                                })
                            } 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div> 
        });

        return (
            <div>
                <h1>Repositories</h1>
                { repoList }
            </div>
        );
    }

}

export default AccordionComponent;
