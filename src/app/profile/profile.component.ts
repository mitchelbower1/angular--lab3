import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { Userprofile } from "../userprofile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userProfile: Userprofile;
  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
