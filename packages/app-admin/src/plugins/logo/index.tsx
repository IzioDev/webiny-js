import React from "react";
import Logo from "~/plugins/logo/Logo";
import { plugins } from "@webiny/plugins";
import { AdminMenuLogoPlugin } from "~/types";
import { logoStyle } from "~/views/NavigationView/Styled";
import { UIViewPlugin } from "@webiny/ui-composer/UIView";
import { AdminView } from "~/views/AdminView";
import { NavigationView } from "~/views/NavigationView";

export default () => [
    /* Set logo in the layout header. */
    new UIViewPlugin<AdminView>(AdminView, view => {
        view.getHeaderElement().setLogo(<Logo white />);
    }),
    /* Set logo in the navigation drawer. */
    new UIViewPlugin<NavigationView>(NavigationView, view => {
        view.getHeaderElement().setLogo(
            <Logo onClick={() => view.getNavigationHook().hideMenu()} />
        );

        // IMPORTANT: Fetch logo plugin for backwards compatibility.
        const logoPlugin = plugins.byName<AdminMenuLogoPlugin>("admin-menu-logo");
        if (logoPlugin) {
            view.getHeaderElement().setLogo(
                React.cloneElement(logoPlugin.render(), { className: logoStyle })
            );
        }
    })
];
