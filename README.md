# CustomTableAngular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.
>For install: `npm i custom-table-angular`

## About this package

This package allow you create custom table for your web-application. You can add image, svg icon, chart and button.
For create table you need use tag `nr-table`. 

This component input one variable:
* `table` this variable use class `Table`. It is your future table.

This class include:
* `title` - name your table (no require); 
* `headerGroups` - it is array which include fields:
    * `title` - name of your section (no require);
    * `headers` - array with names for column;
* `RowGroup` - it is array which include fields:
    * `title` - name of your section (no require);
    * `rows` - array with value for rows.
    
For use style: 
* `--table-header-bg` - set color fo header and hover row;
* `--std-radius` - set border-radius for header.
    
For example: 

`<nr-table [table]='table'>
  <nr-td *nrTdDef="let item; column: 2">
    <a href="mailto:{{item}}">{{item}}</a>
  </nr-td>
</nr-table'>`
