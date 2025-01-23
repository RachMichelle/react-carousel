import { render, asFragment } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', () => {
    render(<Card     
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={1}/>);
})

it('matches snapshot', () => {
    const {asFragment } = render(<Card     
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={1}/>);
        expect(asFragment()).toMatchSnapshot();
    })