import render from './routes';

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        render()
    });
}