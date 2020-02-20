import { Injectable } from "@angular/core";
import { Userprofile } from "./userprofile";
// import { userInfo } from "os";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: Userprofile = {
    name: "Mitch Bower",
    bio: "idk how to code",
    contact: "5862098278"
  };

  getUserProfile() {
    return this.userProfile;
  }
  setUserProfile(newUserProfile: Userprofile) {
    this.userProfile = newUserProfile;
  }
}
