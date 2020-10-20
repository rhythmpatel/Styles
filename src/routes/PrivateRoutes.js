import React, { Suspense,
    // lazy
} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';
import ButtonComponent from '../components/pages/ButtonComponent';
// const DashboardComponent = lazy(() => import('./dashboard'));


function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.buttons} component={ButtonComponent}/>
                <Route exact path={SLUGS.charts} render={() => <div></div>} />
                <Route exact path={SLUGS.colors} render={() => <div></div>} />
                <Route exact path={SLUGS.errormessages} render={() => <div></div>} />
                <Route exact path={SLUGS.forminput} render={() => <div></div>} />
                <Route exact path={SLUGS.icons} render={() => <div></div>} />
                <Route exact path={SLUGS.loaders} render={() => <div></div>} />
                <Route exact path={SLUGS.logos} render={() => <div></div>} />
                <Route exact path={SLUGS.notifications} render={() => <div></div>} />
                <Route exact path={SLUGS.panels} render={() => <div></div>} />
				<Route exact path={SLUGS.richtext} render={() => <div></div>} />
				<Route exact path={SLUGS.table} render={() => <div></div>} />
				<Route exact path={SLUGS.tabs} render={() => <div></div>} />
				<Route exact path={SLUGS.timeline} render={() => <div></div>} />
				<Route exact path={SLUGS.treeview} render={() => <div></div>} />
				<Route exact path={SLUGS.typography} render={() => <div></div>} />
                <Redirect to={SLUGS.buttons} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
