import React from "react";
import { UIView } from "@webiny/ui-composer/UIView";
import { AdminView } from "@webiny/app-admin/views/AdminView";
import { SplitView } from "@webiny/app-admin/views/SplitView";
import { ViewElement } from "@webiny/ui-composer/elements/ViewElement";
import { GenericElement } from "@webiny/ui-composer/elements/GenericElement";
import { UsersFormView } from "~/views/Users/UsersFormView";
import UsersDataList from "~/views/Users/UsersDataList";

export class UsersView extends UIView {
    constructor() {
        super("UsersView");
        this.addElements();
    }

    setTitle(title: string) {
        this.getElement<AdminView>("AdminView").setTitle(title);
    }

    private addElements() {
        const adminView = this.addElement<AdminView>(new AdminView());
        adminView.setTitle("Security - Users");

        const splitView = new SplitView("adminUsers", {
            leftPanel: new GenericElement("adminUsersLis", () => <UsersDataList />),
            rightPanel: new ViewElement("adminUsersForm", {
                view: new UsersFormView()
            })
        });

        adminView.setContentElement(new ViewElement("adminUsersSplitView", { view: splitView }));
    }
}
