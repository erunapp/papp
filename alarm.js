
var form = window.eval("(function(){function Field(obj,ext){let _name=obj.name,_get=()=>ext.get(obj),_set=(val)=>ext.set(obj,val);return{name:_name,get:()=>_get(),set:(val)=>_set(val)};}function getField(obj){switch(obj.tagName){case 'INPUT':return getInput(obj);case 'SELECT':return new Field(obj,Helper.Select);case 'TEXTAREA':return new Field(obj,Helper.TextArea);case 'OUTPUT':return new Field(obj,Helper.Output);default:return null;}}function getInput(obj){switch(obj.type){case 'text':return new Field(obj,Helper.Text);case 'number':return new Field(obj,Helper.Number);case 'range':return new Field(obj,Helper.Range);case 'month':return new Field(obj,Helper.Range);case 'week':return new Field(obj,Helper.Range);case 'checkbox':return new Field(obj,Helper.Check);case 'radio':return new Field(obj,Helper.Radio);case 'date':return new Field(obj,Helper.Date);case 'time':return new Field(obj,Helper.Time);case 'email':return new Field(obj,Helper.Email);case 'url':return new Field(obj,Helper.Pattern);case 'tel':return new Field(obj,Helper.Pattern);case 'color':return new Field(obj,Helper.Pattern);case 'hidden':return new Field(obj,Helper.Text);case 'password':return new Field(obj,Helper.Text);case 'search':return new Field(obj,Helper.Text);case 'datetime-local':return new Field(obj,Helper.DateTime);default:return null;}}var Helper={Text:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},Number:{get:(obj)=>obj.valueAsNumber,set:(obj,val)=>obj.valueAsNumber=val},Radio:{get:(obj)=>obj.checked?obj.value:'',set:(obj,val)=>obj.checked=(obj.value==val)},Check:{get:(obj)=>obj.checked,set:(obj,val)=>obj.checked=(obj.value==val)||(val===true)},Date:{get:(obj)=>obj.value,set:(obj,val)=>obj.valueAsDate=new Date(val)},Time:{get:(obj)=>obj.value,set:(obj,val)=>obj.valueAsNumber=val.substr(0,2)*3600000+val.substr(3,2)*60000},DateTime:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},Email:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},Pattern:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},Range:{get:(obj)=>obj.valueAsNumber,set:(obj,val)=>obj.valueAsNumber=val},Select:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},Output:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val},TextArea:{get:(obj)=>obj.value,set:(obj,val)=>obj.value=val}};var jsos=document.body.querySelectorAll('[name]'),flds={},objs={};for(let jso of jsos){let obj=getField(jso),id=jso.name;if(obj){if(objs[id]){if(Array.isArray(objs[id])){objs[id].push(obj);}else{let tmp=objs[id];objs[id]=[tmp,obj];}}else{objs[id]=obj;}}}for(let id in objs){let obj=objs[id];if(Array.isArray(obj)){Object.defineProperty(flds,id,{get(){for(let e of obj)if(e.get().length > 0)return e.get();return '';},set(val){for(let e of obj)e.set(val);}});}else{Object.defineProperty(flds,id,{get() { return obj.get(); },set(val) { obj.set(val); }});}}return{flds:flds,objs:objs,jsos:jsos}}())");
var objs = form.objs;
var flds = form.flds;
var data = {
	    no: 1,
	    eventid: 'Test Event',
	    eventon: '2020-06-25',
	    alarmat: '09:00',
	    period: 'y',
	    alarmfor: 3,
	    alarmunit: 'm',
	    countgap: 10,
	    countunit: 'm',
	    count: 5,
	    volume: 9,
	    vibrate: true,
	    sound: 'melody.mp3',
	    message: '일어나요.'
	}

load();

function load() {
    for (let id in objs) flds[id] = data[id];
};

function save() {	
    for (let id in objs) data[id] = flds[id];
};
