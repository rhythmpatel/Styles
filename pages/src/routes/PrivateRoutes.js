import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
			dashboard: '/dashboard',
    buttons: '/buttons',
    charts: '/charts',
    colors: '/colors',
	errormessages: '/error-messages',
	forminput:'/form-input',
    icons: '/icons',
    loaders: '/loader-and-loadings',
    logos: '/logos',
    notifications: '/notifications-and-tooltip',
    panels: '/panels',
	richtext: '/rich-text-editor',
	table: '/tables',
	tabs: '/tabs',
	timeline: '/timeline',
	treeview: '/treeview',
	typography: '/typography',
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.buttons} render={() => <div></div>} />
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
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
