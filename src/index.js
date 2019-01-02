import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Green');
const color2 = React.createElement('li', {}, 'Blue');
const color3 = React.createElement('li', {}, 'Purple');

const artist1 = React.createElement('li', {}, 'Ween');
const artist2 = React.createElement('li', {}, 'Rolling Stones');
const artist3 = React.createElement('li', {}, 'Radiohead');

const food1 = React.createElement('li', {}, 'Pizza');
const food2 = React.createElement('li', {}, 'Ceasar Salad');
const food3 = React.createElement('li', {}, 'Gnocchi');

const website1 = React.createElement(
  'li',
  {},
  React.createElement('a', { href: 'https://www.chohoh.com' }, 'www.chohoh.com')
);
const website2 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.lindsaybradford.com' },
    'www.lindsaybradford.com'
  )
);
const website3 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.etsy.com' },
    'www.etsy.com'
  )
);

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
      'ul',
      {},
      React.createElement(
        'li',
        {},
        'Favorite Colors',
        React.createElement('ol', {}, color1, color2, color3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Music',
        React.createElement('ol', {}, artist1, artist2, artist3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Food',
        React.createElement('ol', {}, food1, food2, food3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Websites',
        React.createElement('ol', {}, website1, website2, website3)
      )
    )
  ),
  document.getElementById('root')
);

/*
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
        'ul',
        {className: 'rowPadding'},
            React.createElement(
                'li',
                {},
                "Favorite Colors",
                React.createElement(
                    'ol',
                    {className: 'favoriteColors'},
                    React.createElement('li', {}, 'Green'),
                    React.createElement('li', {}, 'Blue'),
                    React.createElement('li', {}, 'Red')
                )
            ),
            React.createElement(
                'li',
                {},
                "Favorite Music",
                React.createElement(
                    'ol',
                    {className: 'favoriteMusic'},
                    React.createElement('li', {}, 'Ween'),
                    React.createElement('li', {}, 'Phish'),
                    React.createElement('li', {}, 'Donald Glaude')
                )               
            ),
            React.createElement(
                'li',
                {},
                "Favorite Food",
                React.createElement(
                    'ol',
                    {className: 'favoriteFood'},
                    React.createElement('li', {}, 'Tacos'),
                    React.createElement('li', {}, 'Indian'),
                    React.createElement('li', {}, 'Smoothies')
                )                       
            ),
            React.createElement(
                'li',
                {},
                "Favorite Websites",
                React.createElement(
                    'ol',
                    {className: 'favoriteWebsites'},
                    React.createElement('li', {},
                        React.createElement('a', {href: 'https://www.google.com' }, 'Take me to Google.com!'),
                    ),
                    React.createElement('li', {}, 
                        React.createElement('a', {href: 'https://www.chohoh.com' }, 'Take me to chohoh.com'),
                    ),
                    React.createElement('li', {},
                        React.createElement('a', {href: 'https://www.lindsaybradford.com' }, 'Take me to lindsaybradford.com!'),
                    ),
                )    
            ),
    )
  ),
  document.getElementById('root')
);


*/