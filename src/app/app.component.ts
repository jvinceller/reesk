import { Component } from '@angular/core';

@Component({
  selector: "reesk",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  estimation: number;
  slidersEnabled: boolean;
  maxOutcome: number;
  complexity = 1;
  knowledge = 3;
  dependencies = 1;
  communication = 1;
  storypoints = [1, 2, 3, 5, 8, 13, 20, 40, 100];

  changeMaxOutcome(maxOutcome: number) {
    this.slidersEnabled = true;
    this.maxOutcome = maxOutcome;
    this.reestimate();
  }
  changeComplexity(event: any) {
    this.complexity = event.source.value;
    this.reestimate();
  }
  changeKnowledge(event: any) {
    this.knowledge = event.source.value;
    this.reestimate();
  }
  changeDependencies(event: any) {
    this.dependencies = event.source.value;
    this.reestimate();
  }
  changeCommunication(event: any) {
    this.communication = event.source.value;
    this.reestimate();
  }
  reestimate() {
    // estimate a value first, which is between 1 and the maxOutcome
    // knowledge must be reversed, because the bigger the knowledge, the easier the task
    const estimatedValue =
      1 +
      ((this.maxOutcome - 1) *
        (this.complexity +
          (4 - this.knowledge) +
          this.dependencies +
          this.communication -
          4)) /
        8;
    // and then translate this to scrum points
    this.estimation = this.findNearestStoryPoint(estimatedValue);
  }
  findNearestStoryPoint(goal: number): number {
    return this.storypoints.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );
  }
}
