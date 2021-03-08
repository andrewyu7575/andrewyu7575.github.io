import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ApiFill, MailFill, PhoneFill, LinkedinFill, ArrowUpOutline }from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzProgressModule } from 'ng-zorro-antd/progress';

registerLocaleData(en);

const icons: IconDefinition[] = [
    ApiFill,
    MailFill,
    PhoneFill,
    LinkedinFill,
    ArrowUpOutline
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzIconModule.forRoot(icons),
        NzMenuModule,
        NzInputModule ,
        NzDrawerModule,
        FormsModule,
        ReactiveFormsModule,
        NzMessageModule,
        NzModalModule,
        NzButtonModule,
        NzCardModule,
        NzGridModule,
        NzFormModule,
        NzProgressModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        NzInputModule,
        NzDrawerModule,
        FormsModule,
        ReactiveFormsModule,
        NzMessageModule,
        NzModalModule,
        NzButtonModule,
        NzCardModule,
        NzGridModule,
        NzFormModule,
        NzProgressModule

    ],
    providers: [ { provide: NZ_I18N, useValue: en_US } ]
})
export class SharedModule { }