import { Component } from '@angular/core';
import {Table} from '../../../custom-table-angular/src/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  table: Table = {
    headerGroups: [
      {headers: [
          '№', 'Name', 'Email'
        ]}
    ],
    rowGroups: [
      {
        rows: [
          [1, 'Nikita', 'nruneev@mail.ru'],
          [2, 'Bill', 'bill@mail.ru'],
          [3, 'Thomas', 'qwerty@mail.ru'],
          [4, 'George', 'gr.efimo@mail.ru'],
          [5, 'Adam', 'adam@mail.ru'],
          [6, 'Calvin', 'super.cal@mail.ru'],
          [7, 'Donald', 'trumpland@mail.ru'],
        ]
      }
    ]
  };
}
