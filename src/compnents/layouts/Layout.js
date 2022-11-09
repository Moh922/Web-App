import classes from './Layout.module.css'
import MainNavigations from './MainNavigations';

function Layout (props) {
    return  <div>
        <MainNavigations />
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
}

export default Layout;