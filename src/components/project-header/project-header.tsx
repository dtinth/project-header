import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'dtinth-project-header',
  styleUrl: 'project-header.css',
  scoped: true,
})
export class ProjectHeader {
  @Prop() projectName: string
  @Prop() projectId: string
  @Prop() projectIcon: string
  render() {
    return (
      <Host>
        <div class="dtinth-project-icon-frame">
          <svg width="58" height="58" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.582 42.832l-22.29 22.291-1.415-1.414 22.291-22.291c-7.113-7.85-6.884-19.987.69-27.56 7.573-7.574 19.71-7.803 27.56-.69l22.29-22.291 1.415 1.414-22.291 22.291c7.113 7.85 6.884 19.987-.69 27.56-7.573 7.574-19.71 7.803-27.56.69zm26.146-2.104c7.03-7.03 7.03-18.426 0-25.456-7.03-7.03-18.426-7.03-25.456 0-7.03 7.03-7.03 18.426 0 25.456 7.03 7.03 18.426 7.03 25.456 0z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="dtinth-project-icon"
          style={{
            'background-image': `url("${this.projectIcon}")`,
          }}
        ></div>
        <h1 class="dtinth-project-title">
          <slot></slot>
        </h1>
      </Host>
    )
  }
}
