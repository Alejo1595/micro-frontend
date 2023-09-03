import {
  NgIf,
  NgOptimizedImage,
  NgStyle,
  provideImageKitLoader,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkeletonImageComponent } from './skeleton-image/skeleton-image.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle, NgIf, SkeletonImageComponent, NgOptimizedImage],
})
export class ImageComponent {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
