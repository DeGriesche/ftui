/*
* Template component for FTUI version 3
*
* Copyright (c) 2020 Mario Stephan <mstephan@shared-files.de>
* Under MIT License (http://www.opensource.org/licenses/mit-license.php)
*
* https://github.com/knowthelist/ftui
*/

import { ftuiApp } from '../../modules/ftui/ftui.app.js';
import * as ftui from '../../modules/ftui/ftui.helper.js';
import { FtuiElement } from '../element.component.js';

export class FtuiLoop extends FtuiElement {

  constructor(properties) {
    super(Object.assign(FtuiLoop.properties, properties));

    this.createContent();
  }

  createContent() {
	let str = '';
	
	if (this.list.length > 0) {
	  this.list.split(',').forEach(item =>
		str = str + '<ftui-content file="' + this.file + '" ' + this.index + '="' + item + '" ' + this.parameter + '></ftui-content>');
	} else {	
	  for (let i = this.from; i <= this.to; i++) {
	    let padVal = Math.max(i.toString().length, this.padding);
	    str = str + '<ftui-content file="' + this.file + '" ' + this.index + '="' + this.pad(i, padVal) + '" ' + this.parameter + '></ftui-content>';
	  }
	}

	this.innerHTML = str;
    ftuiApp.initComponents(this);
  }
  
  pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  static get properties() {
    return {
	  file: '',
	  list: '',
	  from: '0',
	  to: '0',
	  index: 'index',
	  padding: '0',
	  parameter: ''
    };
  }
  
  onAttributeChanged(name) {
    switch (name) {
      case 'list':
        this.createContent();
        break;
      case 'from':
        this.createContent();
        break;
      case 'to':
        this.createContent();
        break;
      case 'file':
        this.createContent();
        break;
      case 'index':
        this.createContent();
        break;
      case 'parameter':
        this.createContent();
        break;
      case 'padding':
        this.createContent();
        break;
    }
  }

  static get observedAttributes() {
    return [...this.convertToAttributes(FtuiLoop.properties), ...super.observedAttributes];
  }

}

ftui.appendStyleLink('components/loop/loop.component.css');
window.customElements.define('ftui-loop', FtuiLoop);
