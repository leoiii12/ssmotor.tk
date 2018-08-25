import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images = [
    'assets/home-slider-1.jpg',
    'assets/home-slider-2.jpg',
    'assets/home-slider-3.jpg',
  ];

  constructor(private modalService: NgbModal,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('主頁 - Sunshine Motor Service Company 太陽汽車服務公司');
  }

  open(modal) {
    this.modalService
      .open(modal, {size: 'lg'})
      .result
      .then(() => {
      }, () => {
      });
  }

}
