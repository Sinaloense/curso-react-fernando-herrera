import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    test('debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:       [],
            loading:    true,
        });
        
        const wrapper = shallow(<GifGrid category="One piece" />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id:     'ABC',
            url:    'https://localhost/cualquier/cosa.jpg',
            title:  'Cualquier cosa',
        }];
        
        useFetchGifs.mockReturnValue({
            data:       gifs,
            loading:    false,
        });
        
        const wrapper = shallow(<GifGrid category="One piece" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});