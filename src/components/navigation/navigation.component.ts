import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
    constructor(private auth: AuthService) {}

    logout() {
        this.auth.logout()
    }
}