import Nav from './Nav';

const Layout = (props) => (
    <div>
        <Nav />
        <h2>{props.mainTitle}</h2>
        {props.children}
    </div>
);

export default Layout;