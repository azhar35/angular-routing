import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  standalone: false,
})
export class CourseComponent implements OnInit {
  course: Course;

  couponCode: string;

  constructor(private route: ActivatedRoute) {}

  // http://localhost:4200/courses/angular-router-course?couponCode=NEW_YEAR&param2=paramv2

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];

    this.couponCode = this.route.snapshot.queryParamMap.get("couponCode");

    // observable --> this.route.queryParamMap;
  }

  confirmExit() {
    return confirm(`Are you sure you want to exit ${this.course.description}?`);
  }
}
