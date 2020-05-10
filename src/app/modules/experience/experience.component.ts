import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  public cards$: Observable<any[]> = of(this.getCards());
  public activePanel = 0;

  constructor() {}

  public setStep(index: number) {
    this.activePanel = index;
  }

  private getCards(): any[] {
    const cards: any[] = [];

    cards.push({
      title: 'Blackbaud Software Engineer',
      subtitle: 'Since 2017',
      overview: `
        I'm a full stack developer on the Financial Team where I work on Financial Edge NXT
        and Financial capabilities across the company.
      `,
      contentSections: [
        `I've implemented client-requested features and improved customer satisfaction by
        refactoring areas either for an improved UI workflow or by making processes more effecient.`,

        `I've also helped lead the front-end intiative at the company by presenting and promoting
        best practices with front-end technologies and helping teams port their AngularJS code to Angular.
      `],
      skills: ['Angular + AngularJS', 'C#', 'CosmosDB', 'MS SQL']
    });

    cards.push({
      title: 'NCSU Computer Science Courses',
      subtitle: '2014 - 2017',
      contentSections: [
        `Java I, Java II, C and Software Tools, Data Structures and Algorithms,`,

        `Discrete Math, Automata, Foundations of Interactive Game Design,`,

        `Operating Systems, Assembly, Software Engineering, Software Security,`,

        `Human-Computer Interaction, Cloud Computing, Building Game Ai,`,

        `Data Driven Decision Making, Senior Design`
      ],
      skills: ['Agile', 'Java', 'C', 'C++', 'Data Structures', 'Threading', 'Security', 'Game AI & Design']
    });

    cards.push({
      title: 'Blackbaud Internship',
      subtitle: 'Summer 2017',
      overview: `
        Worked alongside a scrum-team as a Full-Stack developer on Financial Edge NXT (FENXT).
      `,
      contentSections: [`
        Using C# and AngularJS I added functionality for user's to see a process' status history.
      `],
      skills: ['AngularJS', 'C#', 'MS SQL', 'JQuery', 'Bootstrap']
    });

    cards.push({
      title: 'Blackbaud Internship',
      subtitle: 'Summer 2016',
      overview: `
        Worked on Blackbaud's Financial Edge 7 (FE7) and Financial Edge NXT (FENXT).
      `,
      contentSections: [
        `Added MixPanel Analytics to the legacy FE7 product to help Blackbaud understand how
        customers utilized FE7 so we could begin porting the most used functionality to FENXT.`,

        `After finishing my main summer project I worked on an 8-person Agile team developing FENXT.`
      ],
      skills: ['Visual Basic 6', 'AngularJS', 'C#', 'MS SQL', 'JQuery', 'Bootstrap']
    });

    return cards;
  }
}
