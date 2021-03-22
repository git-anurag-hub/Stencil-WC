import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContent: boolean;
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onCloseDrawer = () => {
    this.opened = false;
  };

  onContactChange = () => {
    this.showContent = !this.showContent;
    console.log(this.showContent);
  };

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot></slot>;
    if (this.showContent) {
      mainContent = (
        <div id="info">
          <h2>Contact Info</h2>
          <p>This Tag is made as demo.</p>
        </div>
      );
    }

    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer}>X</button>
        </header>
        <section id="tabs">
          <button class={this.showContent ? '' : 'active'} onClick={this.onContactChange}>
            Navigation
          </button>
          <button class={this.showContent ? 'active' : ''} onClick={this.onContactChange}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>
    );
  }
}
