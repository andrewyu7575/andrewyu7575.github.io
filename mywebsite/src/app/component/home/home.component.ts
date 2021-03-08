import { Component, HostListener, ViewContainerRef } from "@angular/core";
import { NgAnimateScrollService } from "ng-animate-scroll";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    showButton: boolean;
    constructor(private animateScrollService: NgAnimateScrollService, private modal: NzModalService, private viewContainerRef: ViewContainerRef) {
    }
    @HostListener("window:scroll", [])
    onScroll(): void {
        this.showButton = (window.pageYOffset > 0) ? true : false;
    }
    navigateTo(element: any, duration?: number) {
        this.animateScrollService.scrollToElement(element, duration)
    }
    openResume() {
        this.modal.create({
            nzContent: PdfViewerComponent,
            nzClosable: false,
            nzBodyStyle: {
                'height': '80vh',
            },
            nzWidth: '70vw',
            nzFooter: null,
            nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
        });
    }
}

@Component({
    selector: 'pdf-viewer',
    template: `<iframe style="width: 100%; height: 100%;" src="/assets/AndrewYu.pdf"></iframe>`
  })
  export class PdfViewerComponent {
}
  