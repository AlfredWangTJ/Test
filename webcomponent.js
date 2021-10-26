(function () {
  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    `;

  customElements.define(
    "test-broadcaster",
    class WidgetTemplate extends HTMLElement {
      constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._msg = "This is a default msg.";
        this.dom;
        this.addEventListener("dblclick", (event) => {
          console.log("#01===")
          var event = new CustomEvent("sendMsg", {
            detail: {
              properties: {
                msg: this.msg,
              },
            },
          });
          this.dispatchEvent(event);
        });
        this.addEventListener("sendMsg",this._process(prop));
        this.addEventListener("getMsg",this._process(prop));
      }
      set msg(val) {
        this._msg = val;
      }
      get msg() {
        return this._msg;
      }
      _process(prop){
          this.setmsg(prop["msg"]);
      }
      onCustomWidgetAfterUpdate(oChangedProperties) {
        if ("msg" in oChangedProperties) {
            this.changeHTML(oChangedProperties["msg"]);
          }
    }

    changeHTML(val) {
        if (this._dom) {
          this._dom.parentNode.removeChild(this._dom);
        }
  
        this._dom = document.createElement("div");
        this._dom.innerHTML = val;
        this._shadowRoot.appendChild(this._dom);
      }
    }
    
  );
})();
