import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Api from './api';

configure({ adapter: new Adapter() });

describe ('Does API fetch data', () => {

    let api = shallow(<Api></Api>)

    it ('Spanner', () => {
        expect(api.find('AccordionComponent').exists()).toBe(true);
    })
})