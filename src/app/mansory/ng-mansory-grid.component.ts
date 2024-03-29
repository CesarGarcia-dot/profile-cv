import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    PLATFORM_ID,
    Inject,
    AfterContentInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

declare var require: any;

import {
    MasonryOptions,
    Masonry as IMasonry,
    AnimationOptions,
    MasonryGridItem
} from './ng-mansory-grid.interface';
import { NgMasonryGridService } from './ng-mansory-grid.service';
// import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: '[ng-masonry-grid], ng-masonry-grid',
    template: '<ng-content></ng-content>',
    styles: [
        `
          :host {
              display: block;
          }
      `
    ]
})
export class NgMasonryGridComponent
    implements OnInit, OnDestroy, AfterContentInit {
    public _msnry: IMasonry;

    // Inputs
    @Input() public masonryOptions: MasonryOptions = {};
    @Input() public useAnimation = false;
    @Input() public scrollAnimationOptions: AnimationOptions;
    @Input() public useImagesLoaded = false;

    // Outputs
    @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output()
    onNgMasonryInit: EventEmitter<IMasonry> = new EventEmitter<IMasonry>();

    constructor(
        @Inject(PLATFORM_ID) private _platformId: any,
        private _element: ElementRef,
        private masonryGridService: NgMasonryGridService
    ) { }

    ngOnInit() {
        this._element.nativeElement.classList.add('grid');
        this.initializeMasonry();
    }

    ngAfterContentInit() {
        // initialize masonry after View Initialization
        // this.initializeMasonry();
    }

    ngOnDestroy() {
        if (this._msnry) {
            this._msnry.destroy();
            this.masonryGridService.onDestroy();
        }
    }

    public layout() {
        setTimeout(() => {
            this._msnry.layout();
        }, 50);
    }

    // remove item from masonry
    public remove(element: HTMLElement[]) {
        this._msnry.remove(element);
        this.layout();
    }

    public add(element: HTMLElement) {
        this.masonryGridService.add(element);
    }

    public initializeMasonry() {
        // initialize Masonry with Animation effects
        this._msnry = this.masonryGridService
            .init(
                this._element.nativeElement,
                this.masonryOptions,
                this.useAnimation,
                this.scrollAnimationOptions,
                this.useImagesLoaded
            );

        // Bind to Masonry events
        this._msnry.on('layoutComplete', (items: any) => {
            this.layoutComplete.emit(items);
        });

        this._msnry.on('removeComplete', (items: any) => {
            this.removeComplete.emit(items);
        });

        this._msnry.removeAnimation = () => {
            this.masonryGridService.removeAnimation();
        };

        this._msnry.setAddStatus = (value: string) => {
            this.masonryGridService.setAddStatus(value);
        }

        this._msnry.removeItem = (item: Element): Observable<MasonryGridItem> => {
            return this.masonryGridService.removeItem(item);
        }

        this._msnry.removeFirstItem = (): Observable<MasonryGridItem> => {
            return this.masonryGridService.removeFirstItem();
        }

        this._msnry.removeAllItems = (): Observable<MasonryGridItem> => {
            return this.masonryGridService.removeAllItems();
        }

        this._msnry.reOrderItems = (): void => {
            return this.masonryGridService.reorderMasonryItems();
        }

        // emit Masonry Initialization event
        this.onNgMasonryInit.emit(this._msnry);

        this.layout();
    }
}