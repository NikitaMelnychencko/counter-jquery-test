
const CounterPlugin = function({rootSelector,initialValue=0, step=1}={}){
this._value=initialValue;
this._step=step;
this._refs=this._getRefs(rootSelector)
this._bindEvents();
this.updateValueUI();
}

CounterPlugin.prototype._getRefs=function(rootSelector){
console.log(rootSelector);

const refs={};
//find document in rootSelector
refs.counter=document.querySelector(rootSelector);
// in rootSelector find data-attributes
refs.incrementBtn=refs.counter.querySelector('[data-increment]');
refs.decrementBtn=refs.counter.querySelector('[data-decrement]');
refs.value=refs.counter.querySelector('[data-value]');

return refs;
}
CounterPlugin.prototype._bindEvents=function(){
    this._refs.incrementBtn.addEventListener('click',()=>{
        console.log('CounterPlugin.prototype.bindEvents->this',this);
        this.increment();
        this.updateValueUI();
    })
    this._refs.decrementBtn.addEventListener('click',()=>{
        console.log('CounterPlugin.prototype.bindEvents->this',this);
        this.decrement();
        this.updateValueUI();
    })
}
CounterPlugin.prototype.updateValueUI=function(){
    this._refs.value.textContent=this._value;
}
CounterPlugin.prototype.increment=function(){
    this._value+=this._step;
}

CounterPlugin.prototype.decrement=function(){
    this._value-=this._step;
}
const counter1 = new CounterPlugin({rootSelector:'#counter-1', step:10});
console.log('counter-1',counter1);
const counter2 = new CounterPlugin({rootSelector:'#counter-2', step:2});
console.log('counter-2',counter2);
