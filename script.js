'use strict';
const numse=document.querySelector('.numsel')
const r1=document.querySelector('.bl1');
const r2=document.querySelector('.bl2');
const r3=document.querySelector('.bl3');
const r4=document.querySelector('.bl4');
const r5=document.querySelector('.bl5');
const sub=document.querySelector('.sub');
const modal=document.getElementById('modal');
let val=0;

document.querySelector('.imc').addEventListener('click',function(){
    r1.classList.remove('btnive');
    r2.classList.remove('btnive');
    r3.classList.remove('btnive');
    r4.classList.remove('btnive');
    r5.classList.remove('btnive');
    val=0
})
r1.addEventListener('click',function(){
    r1.classList.add('btnive');
    r2.classList.remove('btnive');
    r3.classList.remove('btnive');
    r4.classList.remove('btnive');
    r5.classList.remove('btnive');
    val=1;
})
r2.addEventListener('click',function(){
    r1.classList.remove('btnive');
    r2.classList.add('btnive');
    r3.classList.remove('btnive');
    r4.classList.remove('btnive');
    r5.classList.remove('btnive');
    val=2;
})
r3.addEventListener('click',function(){
    r1.classList.remove('btnive');
    r2.classList.remove('btnive');
    r3.classList.add('btnive');
    r4.classList.remove('btnive');
    r5.classList.remove('btnive');
    val=3;
})
r4.addEventListener('click',function(){
    r1.classList.remove('btnive');
    r2.classList.remove('btnive');
    r3.classList.remove('btnive');
    r4.classList.add('btnive');
    r5.classList.remove('btnive');
    val=4;
})
r5.addEventListener('click',function(){
    r1.classList.remove('btnive');
    r2.classList.remove('btnive');
    r3.classList.remove('btnive');
    r4.classList.remove('btnive');
    r5.classList.add('btnive');
    val=5;
})

sub.addEventListener('click',function(){
    numse.textContent=val;
    modal.classList.toggle('hide');
})

modal.addEventListener('click',function(){
    modal.classList.toggle('hide');
    r1.classList.remove('btnive');
    r2.classList.remove('btnive');
    r3.classList.remove('btnive');
    r4.classList.remove('btnive');
    r5.classList.remove('btnive');
    val=0;
    numse.textContent=val;
})