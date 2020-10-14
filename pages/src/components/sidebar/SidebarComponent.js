import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

   
    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon=''
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.dashboard}
                title='Buttons'
                icon=''
                onClick={() => onClick(SLUGS.buttons)}
            />
			<MenuItem
                id={SLUGS.dashboard}
                title='Charts'
                icon=''
                onClick={() => onClick(SLUGS.charts)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Colors'
                icon=''
                onClick={() => onClick(SLUGS.colors)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Error Messages'
                icon=''
                onClick={() => onClick(SLUGS.errormessages)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Form Input'
                icon=''
                onClick={() => onClick(SLUGS.forminput)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Icons'
                icon=''
                onClick={() => onClick(SLUGS.icons)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Loaders and Lazy Loadings'
                icon=''
                onClick={() => onClick(SLUGS.loaders)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Logos'
                icon=''
                onClick={() => onClick(SLUGS.logos)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Notifications and Tooltips'
                icon=''
                onClick={() => onClick(SLUGS.notifications)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Panels'
                icon=''
                onClick={() => onClick(SLUGS.panels)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Rich Text Editor'
                icon=''
                onClick={() => onClick(SLUGS.richtext)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Tables'
                icon=''
                onClick={() => onClick(SLUGS.tables)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Tabs'
                icon=''
                onClick={() => onClick(SLUGS.tabs)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Timeline'
                icon=''
                onClick={() => onClick(SLUGS.timeline)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Treeview'
                icon=''
                onClick={() => onClick(SLUGS.treeview)}
            />
			 <MenuItem
                id={SLUGS.dashboard}
                title='Typography'
                icon=''
                onClick={() => onClick(SLUGS.typography)}
            />
			
			 
            
        </Menu>
    );
}

export default SidebarComponent;
