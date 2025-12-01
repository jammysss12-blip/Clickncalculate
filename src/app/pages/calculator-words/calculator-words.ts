import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../../shared/components/header/header";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-calculator-words',
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './calculator-words.html',
  styleUrl: './calculator-words.scss',
  standalone: true,
})
export class CalculatorWords {
  // Active tab control
  activeTab: string = 'counter';

  // Word Counter properties
  inputText: string = '';
  wordCount: number = 0;
  charCount: number = 0;
  charNoSpaceCount: number = 0;
  sentenceCount: number = 0;
  paragraphCount: number = 0;
  readingTime: number = 0;
  speakingTime: number = 0;

  // Text Reverser properties
  reverseInput: string = '';
  reversedText: string = '';
  preserveCase: boolean = true;

  // Case Converter properties
  caseInput: string = '';
  convertedText: string = '';
  caseType: string = 'uppercase';

  constructor() {}

  // Word Counter Methods
  countWords() {
    // Reset counts
    this.wordCount = 0;
    this.charCount = 0;
    this.charNoSpaceCount = 0;
    this.sentenceCount = 0;
    this.paragraphCount = 0;
    this.readingTime = 0;
    this.speakingTime = 0;

    if (!this.inputText.trim()) return;

    // Character count (with and without spaces)
    this.charCount = this.inputText.length;
    this.charNoSpaceCount = this.inputText.replace(/\s+/g, '').length;

    // Word count
    const words = this.inputText.trim().split(/\s+/);
    this.wordCount = words[0] === '' ? 0 : words.length;

    // Sentence count (naive approach)
    this.sentenceCount = this.inputText.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    // Paragraph count
    this.paragraphCount = this.inputText.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

    // Reading time (average reading speed: 200 words per minute)
    this.readingTime = Math.ceil(this.wordCount / 200);
    
    // Speaking time (average speaking speed: 125 words per minute)
    this.speakingTime = Math.ceil(this.wordCount / 125);
  }

  clearCounter() {
    this.inputText = '';
    this.wordCount = 0;
    this.charCount = 0;
    this.charNoSpaceCount = 0;
    this.sentenceCount = 0;
    this.paragraphCount = 0;
    this.readingTime = 0;
    this.speakingTime = 0;
  }

  // Text Reverser Methods
  reverseText() {
    if (!this.reverseInput) {
      this.reversedText = '';
      return;
    }

    if (this.preserveCase) {
      // Preserve original case
      this.reversedText = this.reverseInput.split('').reverse().join('');
    } else {
      // Convert to lowercase before reversing to normalize case
      this.reversedText = this.reverseInput.toLowerCase().split('').reverse().join('');
    }
  }

  copyReversedText() {
    if (this.reversedText) {
      navigator.clipboard.writeText(this.reversedText);
      // You can add a toast notification here if needed
    }
  }

  clearReverser() {
    this.reverseInput = '';
    this.reversedText = '';
  }

  // Case Converter Methods
  convertCase() {
    if (!this.caseInput) {
      this.convertedText = '';
      return;
    }

    switch (this.caseType) {
      case 'uppercase':
        this.convertedText = this.caseInput.toUpperCase();
        break;
      case 'lowercase':
        this.convertedText = this.caseInput.toLowerCase();
        break;
      case 'sentence':
        this.convertedText = this.caseInput.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case 'title':
        this.convertedText = this.caseInput.toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        break;
      case 'alternating':
        this.convertedText = this.caseInput.split('').map((char, i) => 
          i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        break;
      default:
        this.convertedText = this.caseInput;
    }
  }

  copyConvertedText() {
    if (this.convertedText) {
      navigator.clipboard.writeText(this.convertedText);
      // You can add a toast notification here if needed
    }
  }

  clearConverter() {
    this.caseInput = '';
    this.convertedText = '';
  }

  // Helper method to set active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
