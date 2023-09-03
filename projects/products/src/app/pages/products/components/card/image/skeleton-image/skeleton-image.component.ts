import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-image',
  templateUrl: './skeleton-image.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonImageComponent {}
