import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss']
})
export class ScenesComponent implements OnInit {
  book = [
    {
      chapter: 'prólogo',
      imgs: [
        {
          src: '/assets/scenes/1 - Monike Lab.png',
          text: null
        },
        {
          src: '/assets/scenes/1 - Monike Lab 2.png',
          text: null
        }
      ]
    },
    {
      chapter: 'zaíra',
      imgs: [
        {
          src: '/assets/scenes/2 - Naeli office.png',
          text: null
        },
        {
          src: '/assets/scenes/2 - Zaira room.png',
          text: null
        }
      ]
    }
  ]

  dataModal = null;

  constructor(private modalService: NgbModal) { }

  openModal(content: any, data: any) {
    this.dataModal = data;

    this.modalService.open(content, { backdrop: 'static', size: 'xl' }).result.then((result) => {
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(): void {
  }

}
