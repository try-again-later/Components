const u=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();const d=document.getElementById("rating-component"),n=document.getElementById("rating-form"),i=document.getElementById("rating-feedback-component"),r=document.querySelector(".stars-fieldset__required-message");document.addEventListener("click",function(o){o.target instanceof Node&&(r==null?void 0:r.contains(o.target))===!1&&r.classList.remove("stars-fieldset__required-message_visible")});const a=n==null?void 0:n.querySelector("[name=rating]");a==null||a.addEventListener("invalid",function(){r==null||r.classList.add("stars-fieldset__required-message_visible")});n==null||n.addEventListener("submit",function(o){o.preventDefault();const s=new FormData(this);console.log(s.get("rating"))});n==null||n.addEventListener("formdata",function(o){d==null||d.classList.add("rating_hidden"),i==null||i.classList.remove("rating-feedback_hidden");const s=o.formData.get("rating"),c=i==null?void 0:i.querySelector(".rating-feedback__rating-value");c!=null&&(c.textContent=`You selected ${s} out of 5`)});