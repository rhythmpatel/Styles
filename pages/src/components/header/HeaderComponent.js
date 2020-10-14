import React, { useContext } from 'react';
import { string } from 'prop-types';
//import { useHistory } from 'react-router-dom';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from '../../hooks/useSidebar';
import SLUGS from '../../resources/slugs';


const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        minWidth: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        '@media (max-width: 768px)': {
            marginLeft: 14
        }
    },
    container: {
        height: 40
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
}));

function HeaderComponent() {
    //const { push } = useHistory();
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });

    let title;
	
    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'Dashboard';
            break;
        case currentItem === SLUGS.buttons:
            title = 'Buttons';
            break;
		case currentItem === SLUGS.charts:
            title = 'Charts';
            break;
		case currentItem === SLUGS.colors:
            title = 'Colors';
            break;
		case currentItem === SLUGS.errormessages:
            title = 'Error Messages';
            break;
		case currentItem === SLUGS.forminput:
            title = 'Form Input';
            break;
		case currentItem === SLUGS.icons:
            title = 'Icons';
            break;
		case currentItem === SLUGS.loaders:
            title = 'Loaders';
            break;
		case currentItem === SLUGS.logos:
            title = 'Logos';
            break;
		case currentItem === SLUGS.notifications:
            title = 'Notifications And Tooltip';
            break;
		case currentItem === SLUGS.panels:
            title = 'Panels';
            break;
		case currentItem === SLUGS.richtext:
            title = 'Rich Text Editors';
            break;
        case currentItem === SLUGS.table:
            title = 'Tables';
            break;
		case currentItem === SLUGS.tabs:
            title = 'Tabs';
            break;
		case currentItem === SLUGS.timeline:
            title = 'Timeline';
            break;
		case currentItem === SLUGS.treeview:
            title = 'Treeview';
            break; 
		case currentItem === SLUGS.typography:
            title = 'Typography';
            break; 
        default:
            title = '';
    }

    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
