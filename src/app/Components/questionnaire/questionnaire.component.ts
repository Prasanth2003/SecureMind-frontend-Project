import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TherapyExpectations, TherapyReasons } from '../../Models/therapy-scores';
import { CounsellorService } from '../../services/counsellor.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
  /* formVisible: boolean = false; // Initially false to show only the welcome message
  currentStep: number = 0;
  // Method to show the form and hide the welcome message
  showForm() {
    this.formVisible = true; // Set formVisible to true when "Get Started" is clicked
  }

  expectationsScore: number = 0;
  reasonsScore: number = 0;
  totalScore: number = 0;
  specialization: string = '';
  counsellors: any[] = [];
  error: string = '';
  selectedReasons: string[] = [];
  selectedExpectations: string[] = [];
  ages = Array.from({ length: 83}, (_, i) => i + 18);
  therapyReasons = [
    "I've been feeling depressed",
    'I feel anxious or overwhelmed',
    'My mood is interfering with my job/school performance',
    'I struggle with building or maintaining relationships',
    "I can't find purpose and meaning in my life",
    'I am grieving',
    'I have experienced trauma',
    'I need to talk through a specific challenge',
    'I want to gain self confidence',
    "I want to improve myself but I don't know where to start",
    'Recommended to me (friend, family, doctor)',
    'Just exploring',
    'Other'
  ];

  therapyExpectations = [
    'Listens',
    'Explores my past',
    'Teaches me new skills',
    'Challenges my beliefs',
    'Assigns me homework',
    'Guides me to set goals',
    'Proactively checks in with me',
    'Other',
    "I don't know"
  ];

  constructor(private counsellorService: CounsellorService) {}
  
  // Move to the next question step
  nextStep(selectedValue: any = null) {
    if (selectedValue !== null) {
      // Optionally handle the selection value here
      console.log('Selected:', selectedValue);
    }
    this.currentStep++;
  }

  // Handle checkbox selections
  toggleSelection(option: string, type: string) {
    if (type === 'reasons') {
      if (!this.selectedReasons.includes(option)) {
        this.selectedReasons.push(option);
      } else {
        this.selectedReasons = this.selectedReasons.filter(reason => reason !== option);
      }
      this.onReasonsChange(option); // Update score on selection change
    } else if (type === 'expectations') {
      if (!this.selectedExpectations.includes(option)) {
        this.selectedExpectations.push(option);
      } else {
        this.selectedExpectations = this.selectedExpectations.filter(expectation => expectation !== option);
      }
      this.onExpectationsChange(option); // Update score on selection change
    }
  }
  
  onExpectationsChange(selectedAnswer: string) {
    if (selectedAnswer in TherapyExpectations) {
      this.expectationsScore = TherapyExpectations[selectedAnswer as keyof typeof TherapyExpectations];
      this.calculateTotalScore();
    }
  }
  // Example event handler with proper type casting
onAgeChange(event: Event) {
  const target = event.target as HTMLSelectElement; // Cast to HTMLSelectElement to access 'value'
  const selectedAge = target?.value; // Safe access to the 'value' property
  console.log('Selected Age:', selectedAge);
  this.nextStep(); 
}


  onReasonsChange(selectedAnswer: string) {
    if (selectedAnswer in TherapyReasons) {
      this.reasonsScore += TherapyReasons[selectedAnswer as keyof typeof TherapyReasons];
      this.calculateTotalScore();
    }
  }

  calculateTotalScore() {
    this.totalScore = this.expectationsScore + this.reasonsScore;
  }

  determineSpecialization() {
    
    console.log('Determining specialization with total score:', this.totalScore);  // Debugging line
    if (this.totalScore <= 50) {
      this.specialization = 'Mental Health Counselor';
    } else if (this.totalScore <= 100) {
      this.specialization = 'Clinical Psychologist';
    } else {
      this.specialization = 'Marriage Counselor';
    }
    this.getCounsellors(this.specialization);
  }

  getCounsellors(specialization: string): void {
    this.counsellorService.getCounsellors(specialization)
      .subscribe(
        data => {
          this.counsellors = data;
          console.log(this.counsellors);
        },
        error => {
          this.error = 'Error fetching counsellors';
          console.error('Error fetching counsellors:', error);
        }
      );
  } 
  submitForm() {
    this.nextStep(); 
    this.determineSpecialization(); // Call specialization determination on form submit
  } */
  formVisible: boolean = false;
  currentStep: number = 0;
  expectationsScore: number = 0;
  reasonsScore: number = 0;
  totalScore: number = 0;
  specialization: string = '';
  selectedReasons: string[] = [];
  selectedExpectations: string[] = [];
  ages = Array.from({ length: 83}, (_, i) => i + 18);
  therapyReasons = [
    "I've been feeling depressed",
    'I feel anxious or overwhelmed',
    'My mood is interfering with my job/school performance',
    'I struggle with building or maintaining relationships',
    "I can't find purpose and meaning in my life",
    'I am grieving',
    'I have experienced trauma',
    'I need to talk through a specific challenge',
    'I want to gain self confidence',
    "I want to improve myself but I don't know where to start",
    'Recommended to me (friend, family, doctor)',
    'Just exploring',
    'Other'
  ];
  therapyExpectations = [
    'Listens',
    'Explores my past',
    'Teaches me new skills',
    'Challenges my beliefs',
    'Assigns me homework',
    'Guides me to set goals',
    'Proactively checks in with me',
    'Other',
    "I don't know"
  ];

  constructor(private counsellorService: CounsellorService, private router: Router) {}

  showForm() {
    this.formVisible = true;
  }

  nextStep(selectedValue: any = null) {
    if (selectedValue !== null) {
      console.log('Selected:', selectedValue);
    }
    this.currentStep++;
  }

  toggleSelection(option: string, type: string) {
    if (type === 'reasons') {
      this.selectedReasons.includes(option) 
        ? this.selectedReasons = this.selectedReasons.filter(reason => reason !== option)
        : this.selectedReasons.push(option);
      this.onReasonsChange(option);
    } else if (type === 'expectations') {
      this.selectedExpectations.includes(option)
        ? this.selectedExpectations = this.selectedExpectations.filter(expectation => expectation !== option)
        : this.selectedExpectations.push(option);
      this.onExpectationsChange(option);
    }
  }

  onExpectationsChange(selectedAnswer: string) {
    if (selectedAnswer in TherapyExpectations) {
      this.expectationsScore = TherapyExpectations[selectedAnswer as keyof typeof TherapyExpectations];
      this.calculateTotalScore();
    }
  }

  onAgeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedAge = target?.value;
    console.log('Selected Age:', selectedAge);
    this.nextStep();
  }

  onReasonsChange(selectedAnswer: string) {
    if (selectedAnswer in TherapyReasons) {
      this.reasonsScore += TherapyReasons[selectedAnswer as keyof typeof TherapyReasons];
      this.calculateTotalScore();
    }
  }

  calculateTotalScore() {
    this.totalScore = this.expectationsScore + this.reasonsScore;
  }

  determineSpecialization() {
    console.log('Determining specialization with total score:', this.totalScore);
    if (this.totalScore <= 50) {
      this.specialization = 'Mental Health Counselor';
    } else if (this.totalScore <= 100) {
      this.specialization = 'Clinical Psychologist';
    } else {
      this.specialization = 'Marriage Counselor';
    }
  }

  submitForm() {
    this.nextStep();
    this.determineSpecialization();
    this.router.navigate(['/recommendations'], {
      queryParams: { specialization: this.specialization }
    });
  }
}