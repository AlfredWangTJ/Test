(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    `;

    customElements.define('test.broadcaster', class WidgetTemplate extends HTMLElement {


		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._msg="This is a default msg.";
            this.dom;
            this.addEventListener("dblclick",event => {

				var event = new CustomEvent("sendMsg");
            //     ,{
			// 		detail: {
			// 			properties: {
			// 				msg: this.msg
			// 			}
			// 		}
			// });
				this.dispatchEvent(event);
			});
		}
        set msg(val){this._msg=val;}
        get msg(){return this._msg;}
        });
    })();
        
