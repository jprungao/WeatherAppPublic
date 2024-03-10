import { Component, OnInit } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
    user: User | null | undefined = null

    constructor(private auth: AuthService) { }


    ngOnInit(): void {
        this.auth.user$.subscribe(user => {
            this.user = user
            console.log(this.user)
        })
    }
}