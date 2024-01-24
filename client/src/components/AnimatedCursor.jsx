import AnimatedCursor from 'react-animated-cursor';

// make custom cursor
function AnimCursor() {
    return (
        <AnimatedCursor
            innerSize={6}
            outerSize={16}
            color='166, 255, 246'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
           
        />
    )
};

export default AnimCursor;