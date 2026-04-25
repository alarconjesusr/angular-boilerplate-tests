import { Component } from "@angular/core";
import { SidenavComponent } from "./components/sidenav.component";
import { ChatsOverviewComponent } from "./components/chats-overview.component";
import { ChatPanelComponent } from "./components/chat-panel.component";

@Component({
    selector: "app-morechat",
    templateUrl: "./morechat.component.html",
    imports: [SidenavComponent, ChatsOverviewComponent, ChatPanelComponent],
})
export class MorechatComponent {}