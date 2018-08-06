import { Component, OnInit } from '@angular/core';
import { SectionServiceClient } from "../services/section.service.client";
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = []
  currentUser = {};


  constructor(private sectionService: SectionServiceClient,
    private userService: UserServiceClient) { }

  enroll = (userId, sectionId) => {
    if (userId) {
      this.sectionService.enroll(userId, sectionId)
        .then((status) => {
          if (status === 200) {
            alert('You have been successfully enrolled!')
          }
          else {
            alert('Unable to enroll. Contact administrator.')
          }
        })
        .then(() => this.sectionService.updateSectionEnroll(sectionId))
        .then(() => this.sectionService.findAllSections()
          .then((sections) => this.sections = sections));

    }
    else {
      alert('Please login before enrolling in a section.')
    }
  }

  ngOnInit() {
    this.sectionService
      .findAllSections()
      .then(sections => this.sections = sections)
      .then(() =>
        this.userService.currentUser()
          .then((user) => {
            this.currentUser = user
          })
      )
  }
}
