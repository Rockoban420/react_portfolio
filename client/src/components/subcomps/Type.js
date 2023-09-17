import React from 'react';

import Typed from 'typed.js'

export const Type = (props) => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [props.text],
        backSpeed: 30,
        typeSpeed: 60,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
    return (
        <div>
            <span style={{fontSize: '30px', color: '#fff'}} ref={el} />
        </div>
    )
}
