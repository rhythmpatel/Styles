import React from 'react';
//import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import { convertSlugToUrl } from '../../resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

/*const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});*/

function SidebarComponent() {
    const { push } = useHistory();
    //const theme = useTheme();
    //const classes = useStyles({ theme });
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
                id={SLUGS.buttons}
                title='Buttons'
                icon=''
                onClick={() => onClick(SLUGS.buttons)}
            />
			<MenuItem
                id={SLUGS.charts}
                title='Charts'
                icon=''
                onClick={() => onClick(SLUGS.charts)}
            />
			 <MenuItem
                id={SLUGS.colors}
                title='Colors'
                icon=''
                onClick={() => onClick(SLUGS.colors)}
            />
			 <MenuItem
                id={SLUGS.errormessages}
                title='Error Messages'
                icon=''
                onClick={() => onClick(SLUGS.errormessages)}
            />
			 <MenuItem
                id={SLUGS.forminput}
                title='Form Input'
                icon=''
                onClick={() => onClick(SLUGS.forminput)}
            />
			 <MenuItem
                id={SLUGS.icons}
                title='Icons'
                icon=''
                onClick={() => onClick(SLUGS.icons)}
            />
			 <MenuItem
                id={SLUGS.loaders}
                title='Loaders and Lazy Loadings'
                icon=''
                onClick={() => onClick(SLUGS.loaders)}
            />
			 <MenuItem
                id={SLUGS.logos}
                title='Logos'
                icon=''
                onClick={() => onClick(SLUGS.logos)}
            />
			 <MenuItem
                id={SLUGS.notifications}
                title='Notifications and Tooltips'
                icon=''
                onClick={() => onClick(SLUGS.notifications)}
            />
			 <MenuItem
                id={SLUGS.panels}
                title='Panels'
                icon=''
                onClick={() => onClick(SLUGS.panels)}
            />
			 <MenuItem
                id={SLUGS.richtext}
                title='Rich Text Editor'
                icon=''
                onClick={() => onClick(SLUGS.richtext)}
            />
			 <MenuItem
                id={SLUGS.tables}
                title='Tables'
                icon=''
                onClick={() => onClick(SLUGS.tables)}
            />
			 <MenuItem
                id={SLUGS.tabs}
                title='Tabs'
                icon=''
                onClick={() => onClick(SLUGS.tabs)}
            />
			 <MenuItem
                id={SLUGS.timeline}
                title='Timeline'
                icon=''
                onClick={() => onClick(SLUGS.timeline)}
            />
			 <MenuItem
                id={SLUGS.treeview}
                title='Treeview'
                icon=''
                onClick={() => onClick(SLUGS.treeview)}
            />
			 <MenuItem
                id={SLUGS.typography}
                title='Typography'
                icon=''
                onClick={() => onClick(SLUGS.typography)}
            />
			
			 
            
        </Menu>
    );
}

export default SidebarComponent;
