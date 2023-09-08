import { NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle, NgIf, NgOptimizedImage],
})
export class ImageComponent {
  @Input({ required: true })
  public url!: string;

  @Input({ required: true })
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    console.log('llamado');
    this.hasLoaded = true;
  }
}
