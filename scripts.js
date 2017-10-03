
window.onload = function () {

  "use strict";
  
  var example = document.getElementById('example');
  var support = document.getElementById('support');
  var iframe = document.getElementById('iframe');
  var styleSelect = document.getElementById('styleSelect');
  var title = document.getElementById('title');

  title.innerHTML = "display: block";
  example.className = 'example block';
  support.className = 'support block';
  iframe.src = 'styles/block.css';

  window.changeStyle = function(val) {
    switch(val) {
      case 'block':
        title.innerHTML = "display: block";
        example.className = 'example block';
        support.className = 'support block';
        iframe.src = 'styles/block.css';
      break;
      case 'none':
        title.innerHTML = "display: none vs. visibility: hidden";
        example.className = 'example none';
        support.className = 'support none';
        iframe.src = 'styles/none.css';
        break;
      case 'inline':
        title.innerHTML = "display: inline";
        example.className = 'example inline';
        support.className = 'support inline';
        iframe.src = 'styles/inline.css';
      break;
      case 'inlineBlock':
        title.innerHTML = "display: inline-block";
        example.className = 'example inline-block';
        support.className = 'support inline-block';
        iframe.src = 'styles/inline-block.css';
      break;
      case 'flex':
        title.innerHTML = "display: flex and inline-flex";
        example.className = 'example flex';
        support.className = 'support flex';        
        iframe.src = 'styles/flex.css';
      break;
      case 'table':
        title.innerHTML = "display: table and inline-table";
        example.className = 'example table';
        support.className = 'support table';
        iframe.src = 'styles/table.css';
      break;
      case 'inherit':
        title.innerHTML = "display: inherit";
        example.className = 'example inherit';
        support.className = 'support inherit';
        iframe.src = 'styles/inherit.css';
      break;
      case 'unset':
        title.innerHTML = "display: unset";
        example.className = 'example unset';
        support.className = 'support unset';
        iframe.src = 'styles/unset.css';
      break;
      case 'initial':
        title.innerHTML = "display: initial";
        example.className = 'example initial';
        support.className = 'support initial';
        iframe.src = 'styles/initial.css';
      break;
      case 'grid':
        title.innerHTML = '<span class="svg-container"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 40" style="enable-background:new 0 0 36.1 40;" xml:space="preserve"><style type="text/css">.st0{fill:#8BC34A;}</style><g id="surface1"><path class="st0" d="M20,0c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S21.1,0,20,0z M20,4H8v4h2v5.5L0.6,32.4c-1.2,2.8-1,7.5,4.7,7.6,h25.5c4.2,0,6.6-4.2,4.7-7.6L26,13.5V8h2V4H20z M14,8h8v6c0,0.3,0,0.6,0.2,0.9l4.6,9.1H13.3L8.2,34.2c-0.4,0.7-0.1,1.6,0.7,1.8H5.3 c-1.1,0-1.6-1-1.1-1.8l9.7-19.3C14,14.6,14,14.3,14,14V8z M17,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S18.7,12,17,12z M18,26,c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S16.9,26,18,26z M25,30c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.4,30,25,30z"/></g></svg></span> display: grid and inline-grid';
        example.className = 'example grid';
        support.className = 'support grid';
        iframe.src = 'styles/grid.css';
      break;
      case 'flow':
        title.innerHTML = '<span class="svg-container"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 40" style="enable-background:new 0 0 36.1 40;" xml:space="preserve"><style type="text/css">.st0{fill:#8BC34A;}</style><g id="surface1"><path class="st0" d="M20,0c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S21.1,0,20,0z M20,4H8v4h2v5.5L0.6,32.4c-1.2,2.8-1,7.5,4.7,7.6,h25.5c4.2,0,6.6-4.2,4.7-7.6L26,13.5V8h2V4H20z M14,8h8v6c0,0.3,0,0.6,0.2,0.9l4.6,9.1H13.3L8.2,34.2c-0.4,0.7-0.1,1.6,0.7,1.8H5.3 c-1.1,0-1.6-1-1.1-1.8l9.7-19.3C14,14.6,14,14.3,14,14V8z M17,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S18.7,12,17,12z M18,26,c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S16.9,26,18,26z M25,30c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.4,30,25,30z"/></g></svg></span> display: flow-root';
        example.className = 'example flow-root';
        support.className = 'support flow-root';
        iframe.src = 'styles/flow-root.css';
      break;
      case 'contents':
        title.innerHTML = '<span class="svg-container"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 40" style="enable-background:new 0 0 36.1 40;" xml:space="preserve"><style type="text/css">.st0{fill:#8BC34A;}</style><g id="surface1"><path class="st0" d="M20,0c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S21.1,0,20,0z M20,4H8v4h2v5.5L0.6,32.4c-1.2,2.8-1,7.5,4.7,7.6,h25.5c4.2,0,6.6-4.2,4.7-7.6L26,13.5V8h2V4H20z M14,8h8v6c0,0.3,0,0.6,0.2,0.9l4.6,9.1H13.3L8.2,34.2c-0.4,0.7-0.1,1.6,0.7,1.8H5.3 c-1.1,0-1.6-1-1.1-1.8l9.7-19.3C14,14.6,14,14.3,14,14V8z M17,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S18.7,12,17,12z M18,26,c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S16.9,26,18,26z M25,30c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.4,30,25,30z"/></g></svg></span> display: contents';
        example.className = 'example contents';
        support.className = 'support contents';
        iframe.src = 'styles/contents.css';
      break;
      default:
        title.innerHTML = "display: block";
        example.className = 'example block';
        support.className = 'support block';
        iframe.src = 'styles/block.css';
    }
  }
}

