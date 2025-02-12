import { BaseElement, Channel } from '../../commons/context.js';
import htm from './htm/signup.htm';

export class SignUp extends BaseElement {
    
    constructor() {
        super(htm);
    }

    connectedCallback() {
        this.$htm.setValue("hostID", "com.web3p.album:unu");
        this.$htm.setPlace("cellNo", "회원 번호를 입력하세요.");
    }
    
    submit(hostID, cellNo) {
        Channel.submit("SignUp", 0, hostID, cellNo)
        .catch(err => {
            this.$htm.setPlace("cellNo", err.message);
        });
    }
}

customElements.define("wdp-signup", SignUp, {extends:'section'});