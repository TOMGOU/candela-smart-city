/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="143";const QA=2;const ni="srgb",rr="srgb-linear";const od="300 es";class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,ad=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function Mx(i,e){return(i%e+e)%e}function fc(i,e,t){return(1-t)*i+t*e}function ld(i){return(i&i-1)===0&&i!==0}function Eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(){xn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=r[0],m=r[3],_=r[6],x=r[1],M=r[4],v=r[7],b=r[2],y=r[5],E=r[8];return s[0]=o*g+a*x+l*b,s[3]=o*m+a*M+l*y,s[6]=o*_+a*v+l*E,s[1]=c*g+u*x+h*b,s[4]=c*m+u*M+h*y,s[7]=c*_+u*v+h*E,s[2]=d*g+f*x+p*b,s[5]=d*m+f*M+p*y,s[8]=d*_+f*v+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function vp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function _l(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pc={[ni]:{[rr]:lr},[rr]:{[ni]:pl}},Sn={legacyMode:!0,get workingColorSpace(){return rr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(pc[e]&&pc[e][t]!==void 0){const n=pc[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={r:0,g:0,b:0},En={h:0,s:0,l:0},ia={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ra(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rr){return this.r=e,this.g=t,this.b=n,Sn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rr){if(e=Mx(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mc(o,s,e+1/3),this.g=mc(o,s,e),this.b=mc(o,s,e-1/3)}return Sn.toWorkingColorSpace(this,r),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Sn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Sn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Sn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ni){const n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=pl(e.r),this.g=pl(e.g),this.b=pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Sn.fromWorkingColorSpace(ra(this,Pt),e),Xt(Pt.r*255,0,255)<<16^Xt(Pt.g*255,0,255)<<8^Xt(Pt.b*255,0,255)<<0}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rr){Sn.fromWorkingColorSpace(ra(this,Pt),t);const n=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rr){return Sn.fromWorkingColorSpace(ra(this,Pt),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ni){return Sn.fromWorkingColorSpace(ra(this,Pt),e),e!==ni?`color(${e} ${Pt.r} ${Pt.g} ${Pt.b})`:`rgb(${Pt.r*255|0},${Pt.g*255|0},${Pt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=n,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(ia);const n=fc(En.h,ia.h,t),r=fc(En.s,ia.s,t),s=fc(En.l,ia.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ct.NAMES=yp;let Ar;class Mp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=_l("canvas")),Ar.width=e.width,Ar.height=e.height;const n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_l("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bp{constructor(e=null){this.isSource=!0,this.uuid=ys(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gc(r[o].image)):s.push(gc(r[o]))}else s=gc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bx=0;class Fn extends vs{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=1001,r=1001,s=1006,o=1008,a=1023,l=1009,c=1,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=ys(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=300;class pt{constructor(e=0,t=0,n=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,b=(_+1)/2,y=(u+d)/4,E=(h+g)/4,w=(p+m)/4;return M>v&&M>b?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=y/n,s=E/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=y/r,s=w/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=E/s,r=w/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ur extends vs{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wp extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wx extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==p){let m=1-a;const _=l*d+c*f+u*p+h*g,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const b=Math.sqrt(M),y=Math.atan2(b,_*x);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+p*v,h=h*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new j,cd=new Oo;class zo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ki.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox),_c.applyMatrix4(e.matrixWorld),this.union(_c);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),sa.subVectors(this.max,Is),Lr.subVectors(e.a,Is),Cr.subVectors(e.b,Is),Rr.subVectors(e.c,Is),fi.subVectors(Cr,Lr),pi.subVectors(Rr,Cr),Vi.subVectors(Lr,Rr);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Vi.z,Vi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Vi.z,0,-Vi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Vi.y,Vi.x,0];return!vc(t,Lr,Cr,Rr,sa)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,Lr,Cr,Rr,sa))?!1:(oa.crossVectors(fi,pi),t=[oa.x,oa.y,oa.z],vc(t,Lr,Cr,Rr,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ki.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new j,new j,new j,new j,new j,new j,new j,new j],ki=new j,_c=new zo,Lr=new j,Cr=new j,Rr=new j,fi=new j,pi=new j,Vi=new j,Is=new j,sa=new j,oa=new j,Wi=new j;function vc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wi.fromArray(i,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sx=new zo,hd=new j,aa=new j,yc=new j;class nu{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){yc.subVectors(e,this.center);const t=yc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(yc.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?aa.set(0,0,1).multiplyScalar(e.radius):aa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hd.copy(e.center).add(aa)),this.expandByPoint(hd.copy(e.center).sub(aa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new j,Mc=new j,la=new j,mi=new j,bc=new j,ca=new j,wc=new j;class Ex{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Mc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=mi.dot(this.direction),l=-mi.dot(la),c=mi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(la).multiplyScalar(d).add(Mc),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){bc.subVectors(t,e),ca.subVectors(n,e),wc.crossVectors(bc,ca);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(mi,ca));if(l<0)return null;const c=a*this.direction.dot(bc.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(wc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,Ax)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),gi.crossVectors(n,on),gi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),gi.crossVectors(n,on)),gi.normalize(),ha.crossVectors(on,gi),r[0]=gi.x,r[4]=ha.x,r[8]=on.x,r[1]=gi.y,r[5]=ha.y,r[9]=on.y,r[2]=gi.z,r[6]=ha.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],x=n[3],M=n[7],v=n[11],b=n[15],y=r[0],E=r[4],w=r[8],S=r[12],R=r[1],I=r[5],H=r[9],z=r[13],L=r[2],B=r[6],O=r[10],$=r[14],Z=r[3],k=r[7],Y=r[11],se=r[15];return s[0]=o*y+a*R+l*L+c*Z,s[4]=o*E+a*I+l*B+c*k,s[8]=o*w+a*H+l*O+c*Y,s[12]=o*S+a*z+l*$+c*se,s[1]=u*y+h*R+d*L+f*Z,s[5]=u*E+h*I+d*B+f*k,s[9]=u*w+h*H+d*O+f*Y,s[13]=u*S+h*z+d*$+f*se,s[2]=p*y+g*R+m*L+_*Z,s[6]=p*E+g*I+m*B+_*k,s[10]=p*w+g*H+m*O+_*Y,s[14]=p*S+g*z+m*$+_*se,s[3]=x*y+M*R+v*L+b*Z,s[7]=x*E+M*I+v*B+b*k,s[11]=x*w+M*H+v*O+b*Y,s[15]=x*S+M*z+v*$+b*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15];return p*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],x=h*m*c-g*d*c+g*l*f-a*m*f-h*l*_+a*d*_,M=p*d*c-u*m*c-p*l*f+o*m*f+u*l*_-o*d*_,v=u*g*c-p*h*c+p*a*f-o*g*f-u*a*_+o*h*_,b=p*h*l-u*g*l-p*a*d+o*g*d+u*a*m-o*h*m,y=t*x+n*M+r*v+s*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=x*E,e[1]=(g*d*s-h*m*s-g*r*f+n*m*f+h*r*_-n*d*_)*E,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*_+n*l*_)*E,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*s-p*d*s+p*r*f-t*m*f-u*r*_+t*d*_)*E,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*_-t*l*_)*E,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*E,e[8]=v*E,e[9]=(p*h*s-u*g*s-p*n*f+t*g*f+u*n*_-t*h*_)*E,e[10]=(o*g*s-p*a*s+p*n*c-t*g*c-o*n*_+t*a*_)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=b*E,e[13]=(u*g*r-p*h*r+p*n*d-t*g*d-u*n*m+t*h*m)*E,e[14]=(p*a*r-o*g*r-p*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,g=o*u,m=o*h,_=a*h,x=l*c,M=l*u,v=l*h,b=n.x,y=n.y,E=n.z;return r[0]=(1-(g+_))*b,r[1]=(f+v)*b,r[2]=(p-M)*b,r[3]=0,r[4]=(f-v)*y,r[5]=(1-(d+_))*y,r[6]=(m+x)*y,r[7]=0,r[8]=(p+M)*E,r[9]=(m-x)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/s,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,d=(n+r)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new j,Tn=new Tt,Tx=new j(0,0,0),Ax=new j(1,1,1),gi=new j,ha=new j,on=new j,ud=new Tt,dd=new Oo;class Uo{constructor(e=0,t=0,n=0,r=Uo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Uo.DefaultOrder="XYZ";Uo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const fd=new j,Dr=new Oo,Yn=new Tt,ua=new j,Fs=new j,Cx=new j,Rx=new Oo,pd=new j(1,0,0),md=new j(0,1,0),gd=new j(0,0,1),Px={type:"added"},xd={type:"removed"};class vn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DefaultUp.clone();const e=new j,t=new Uo,n=new Oo,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new xn}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=vn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Fs,ua,this.up):Yn.lookAt(ua,Fs,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Px)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vn.DefaultUp=new j(0,1,0);vn.DefaultMatrixAutoUpdate=!0;const An=new j,jn=new j,Sc=new j,Zn=new j,Ir=new j,Fr=new j,_d=new j,Ec=new j,Tc=new j,Ac=new j;class ii{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){An.subVectors(r,t),jn.subVectors(n,t),Sc.subVectors(e,t);const o=An.dot(An),a=An.dot(jn),l=An.dot(Sc),c=jn.dot(jn),u=jn.dot(Sc),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Zn),l.set(0,0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,t,n,r){return An.subVectors(n,t),jn.subVectors(e,t),An.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ii.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,n),Fr.subVectors(s,n),Ec.subVectors(e,n);const l=Ir.dot(Ec),c=Fr.dot(Ec);if(l<=0&&c<=0)return t.copy(n);Tc.subVectors(e,r);const u=Ir.dot(Tc),h=Fr.dot(Tc);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ir,o);Ac.subVectors(e,s);const f=Ir.dot(Ac),p=Fr.dot(Ac);if(p>=0&&f<=p)return t.copy(s);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Fr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return _d.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(_d,a);const _=1/(m+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(Ir,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dx=0;class Go extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ep extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new j,da=new Re;class Vn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ct),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Re),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new j),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new pt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Tp extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ap extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ix=0;const mn=new Tt,Lc=new vn,Nr=new j,an=new zo,Ns=new zo,Bt=new j;class ci extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?Ap:Tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(an.min,Ns.min),an.expandByPoint(Bt),Bt.addVectors(an.max,Ns.max),an.expandByPoint(Bt)):(an.expandByPoint(Ns.min),an.expandByPoint(Ns.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Nr.fromBufferAttribute(e,c),Bt.add(Nr)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new j,u[R]=new j;const h=new j,d=new j,f=new j,p=new Re,g=new Re,m=new Re,_=new j,x=new j;function M(R,I,H){h.fromArray(r,R*3),d.fromArray(r,I*3),f.fromArray(r,H*3),p.fromArray(o,R*2),g.fromArray(o,I*2),m.fromArray(o,H*2),d.sub(h),f.sub(h),g.sub(p),m.sub(p);const z=1/(g.x*m.y-m.x*g.y);!isFinite(z)||(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(z),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(z),c[R].add(_),c[I].add(_),c[H].add(_),u[R].add(x),u[I].add(x),u[H].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,I=v.length;R<I;++R){const H=v[R],z=H.start,L=H.count;for(let B=z,O=z+L;B<O;B+=3)M(n[B+0],n[B+1],n[B+2])}const b=new j,y=new j,E=new j,w=new j;function S(R){E.fromArray(s,R*3),w.copy(E);const I=c[R];b.copy(I),b.sub(E.multiplyScalar(E.dot(I))).normalize(),y.crossVectors(w,I);const z=y.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=z}for(let R=0,I=v.length;R<I;++R){const H=v[R],z=H.start,L=H.count;for(let B=z,O=z+L;B<O;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)d[p++]=c[f++]}return new Vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vd=new Tt,Br=new Ex,Cc=new nu,xi=new j,_i=new j,vi=new j,Rc=new j,Pc=new j,Dc=new j,fa=new j,pa=new j,ma=new j,ga=new Re,xa=new Re,_a=new Re,Ic=new j,va=new j;class Li extends vn{constructor(e=new ci,t=new Ep){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)===!1)||(vd.copy(s).invert(),Br.copy(e.ray).applyMatrix4(vd),n.boundingBox!==null&&Br.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,m=f.length;g<m;g++){const _=f[g],x=r[_.materialIndex],M=Math.max(_.start,p.start),v=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,y=v;b<y;b+=3){const E=a.getX(b),w=a.getX(b+1),S=a.getX(b+2);o=ya(this,x,e,Br,l,c,u,h,d,E,w,S),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let _=g,x=m;_<x;_+=3){const M=a.getX(_),v=a.getX(_+1),b=a.getX(_+2);o=ya(this,r,e,Br,l,c,u,h,d,M,v,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,m=f.length;g<m;g++){const _=f[g],x=r[_.materialIndex],M=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,y=v;b<y;b+=3){const E=b,w=b+1,S=b+2;o=ya(this,x,e,Br,l,c,u,h,d,E,w,S),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let _=g,x=m;_<x;_+=3){const M=_,v=_+1,b=_+2;o=ya(this,r,e,Br,l,c,u,h,d,M,v,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Fx(i,e,t,n,r,s,o,a){let l;if(e.side===1?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==2,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function ya(i,e,t,n,r,s,o,a,l,c,u,h){xi.fromBufferAttribute(r,c),_i.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,h);const d=i.morphTargetInfluences;if(s&&d){fa.set(0,0,0),pa.set(0,0,0),ma.set(0,0,0);for(let p=0,g=s.length;p<g;p++){const m=d[p],_=s[p];m!==0&&(Rc.fromBufferAttribute(_,c),Pc.fromBufferAttribute(_,u),Dc.fromBufferAttribute(_,h),o?(fa.addScaledVector(Rc,m),pa.addScaledVector(Pc,m),ma.addScaledVector(Dc,m)):(fa.addScaledVector(Rc.sub(xi),m),pa.addScaledVector(Pc.sub(_i),m),ma.addScaledVector(Dc.sub(vi),m)))}xi.add(fa),_i.add(pa),vi.add(ma)}i.isSkinnedMesh&&(i.boneTransform(c,xi),i.boneTransform(u,_i),i.boneTransform(h,vi));const f=Fx(i,e,t,n,xi,_i,vi,Ic);if(f){a&&(ga.fromBufferAttribute(a,c),xa.fromBufferAttribute(a,u),_a.fromBufferAttribute(a,h),f.uv=ii.getUV(Ic,xi,_i,vi,ga,xa,_a,new Re)),l&&(ga.fromBufferAttribute(l,c),xa.fromBufferAttribute(l,u),_a.fromBufferAttribute(l,h),f.uv2=ii.getUV(Ic,xi,_i,vi,ga,xa,_a,new Re));const p={a:c,b:u,c:h,normal:new j,materialIndex:0};ii.getNormal(xi,_i,vi,p.normal),f.face=p}return f}class Ho extends ci{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function p(g,m,_,x,M,v,b,y,E,w,S){const R=v/E,I=b/w,H=v/2,z=b/2,L=y/2,B=E+1,O=w+1;let $=0,Z=0;const k=new j;for(let Y=0;Y<O;Y++){const se=Y*I-z;for(let le=0;le<B;le++){const ue=le*R-H;k[g]=ue*x,k[m]=se*M,k[_]=L,c.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[_]=y>0?1:-1,u.push(k.x,k.y,k.z),h.push(le/E),h.push(1-Y/w),$+=1}}for(let Y=0;Y<w;Y++)for(let se=0;se<E;se++){const le=d+se+B*Y,ue=d+se+B*(Y+1),be=d+(se+1)+B*(Y+1),Se=d+(se+1)+B*Y;l.push(le,ue,Se),l.push(ue,be,Se),Z+=6}a.addGroup(f,Z,S),f+=Z,d+=$}}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const r in n)e[r]=n[r]}return e}function Nx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Bx={clone:fs,merge:kt};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends Lp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=90,zr=1;class Ux extends vn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new gn(Or,zr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const s=new gn(Or,zr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new j(-1,0,0)),this.add(s);const o=new gn(Or,zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new j(0,1,0)),this.add(o);const a=new gn(Or,zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const l=new gn(Or,zr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new j(0,0,1)),this.add(l);const c=new gn(Or,zr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Cp extends Fn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gx extends ur{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ho(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new Li(r,s),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ux(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Fc=new j,Hx=new j,kx=new xn;class Ki{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fc.subVectors(n,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Fc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kx.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new nu,Ma=new j;class iu{constructor(e=new Ki,t=new Ki,n=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],p=n[10],g=n[11],m=n[12],_=n[13],x=n[14],M=n[15];return t[0].setComponents(a-r,h-l,g-d,M-m).normalize(),t[1].setComponents(a+r,h+l,g+d,M+m).normalize(),t[2].setComponents(a+s,h+c,g+f,M+_).normalize(),t[3].setComponents(a-s,h-c,g-f,M-_).normalize(),t[4].setComponents(a-o,h-u,g-p,M-x).normalize(),t[5].setComponents(a+o,h+u,g+p,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),c.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;i.bindBuffer(h,c),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ru extends ci{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const x=_*d-o;for(let M=0;M<c;M++){const v=M*h-s;p.push(v,-x,0),g.push(0,0,1),m.push(M/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const M=x+c*_,v=x+c*(_+1),b=x+1+c*(_+1),y=x+1+c*_;f.push(M,v,y),f.push(v,b,y)}this.setIndex(f),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx="vec3 transformed = vec3( position );",Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,c_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,L_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,O_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,k_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ev=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,iv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Uv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$v=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tt={alphamap_fragment:Wx,alphamap_pars_fragment:$x,alphatest_fragment:qx,alphatest_pars_fragment:Xx,aomap_fragment:Yx,aomap_pars_fragment:jx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:Kx,iridescence_fragment:Qx,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:r_,color_fragment:s_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:l_,common:c_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:u_,displacementmap_pars_vertex:d_,displacementmap_vertex:f_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,encodings_fragment:g_,encodings_pars_fragment:x_,envmap_fragment:__,envmap_common_pars_fragment:v_,envmap_pars_fragment:y_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:D_,envmap_vertex:b_,fog_vertex:w_,fog_pars_vertex:S_,fog_fragment:E_,fog_pars_fragment:T_,gradientmap_pars_fragment:A_,lightmap_fragment:L_,lightmap_pars_fragment:C_,lights_lambert_vertex:R_,lights_pars_begin:P_,lights_toon_fragment:I_,lights_toon_pars_fragment:F_,lights_phong_fragment:N_,lights_phong_pars_fragment:B_,lights_physical_fragment:O_,lights_physical_pars_fragment:z_,lights_fragment_begin:U_,lights_fragment_maps:G_,lights_fragment_end:H_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:$_,map_fragment:q_,map_pars_fragment:X_,map_particle_fragment:Y_,map_particle_pars_fragment:j_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:J_,morphcolor_vertex:K_,morphnormal_vertex:Q_,morphtarget_pars_vertex:ev,morphtarget_vertex:tv,normal_fragment_begin:nv,normal_fragment_maps:iv,normal_pars_fragment:rv,normal_pars_vertex:sv,normal_vertex:ov,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:lv,clearcoat_normal_fragment_maps:cv,clearcoat_pars_fragment:hv,iridescence_pars_fragment:uv,output_fragment:dv,packing:fv,premultiplied_alpha_fragment:pv,project_vertex:mv,dithering_fragment:gv,dithering_pars_fragment:xv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:Mv,shadowmap_vertex:bv,shadowmask_pars_fragment:wv,skinbase_vertex:Sv,skinning_pars_vertex:Ev,skinning_vertex:Tv,skinnormal_vertex:Av,specularmap_fragment:Lv,specularmap_pars_fragment:Cv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Pv,transmission_fragment:Dv,transmission_pars_fragment:Iv,uv_pars_fragment:Fv,uv_pars_vertex:Nv,uv_vertex:Bv,uv2_pars_fragment:Ov,uv2_pars_vertex:zv,uv2_vertex:Uv,worldpos_vertex:Gv,background_vert:Hv,background_frag:kv,cube_vert:Vv,cube_frag:Wv,depth_vert:$v,depth_frag:qv,distanceRGBA_vert:Xv,distanceRGBA_frag:Yv,equirect_vert:jv,equirect_frag:Zv,linedashed_vert:Jv,linedashed_frag:Kv,meshbasic_vert:Qv,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:r0,meshnormal_vert:s0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:x0,sprite_frag:_0},Ce={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xn},uv2Transform:{value:new xn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}}},Hn={basic:{uniforms:kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:kt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:kt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:kt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:kt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:kt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:kt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:kt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:kt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new xn},t2D:{value:null}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},cube:{uniforms:kt([Ce.envmap,{opacity:{value:1}}]),vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:kt([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:kt([Ce.lights,Ce.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hn.physical={uniforms:kt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};function v0(i,e,t,n,r,s){const o=new ct(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function f(g,m){let _=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=e.get(x));const M=i.xr,v=M.getSession&&M.getSession();v&&v.environmentBlendMode==="additive"&&(x=null),x===null?p(o,a):x&&x.isColor&&(p(x,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(c===void 0&&(c=new Li(new Ho(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:fs(Hn.cube.uniforms),vertexShader:Hn.cube.vertexShader,fragmentShader:Hn.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Li(new ru(2,2),new dr({name:"BackgroundMaterial",uniforms:fs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,m){t.buffers.color.setClear(g.r,g.g,g.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),a=m,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(o,a)},render:f}}function y0(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(L,B,O,$,Z){let k=!1;if(o){const Y=g($,O,B);c!==Y&&(c=Y,f(c.object)),k=_(L,$,O,Z),k&&x(L,$,O,Z)}else{const Y=B.wireframe===!0;(c.geometry!==$.id||c.program!==O.id||c.wireframe!==Y)&&(c.geometry=$.id,c.program=O.id,c.wireframe=Y,k=!0)}Z!==null&&t.update(Z,34963),(k||u)&&(u=!1,w(L,B,O,$),Z!==null&&i.bindBuffer(34963,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function p(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,B,O){const $=O.wireframe===!0;let Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let k=Z[B.id];k===void 0&&(k={},Z[B.id]=k);let Y=k[$];return Y===void 0&&(Y=m(d()),k[$]=Y),Y}function m(L){const B=[],O=[],$=[];for(let Z=0;Z<r;Z++)B[Z]=0,O[Z]=0,$[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:$,object:L,attributes:{},index:null}}function _(L,B,O,$){const Z=c.attributes,k=B.attributes;let Y=0;const se=O.getAttributes();for(const le in se)if(se[le].location>=0){const be=Z[le];let Se=k[le];if(Se===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),be===void 0||be.attribute!==Se||Se&&be.data!==Se.data)return!0;Y++}return c.attributesNum!==Y||c.index!==$}function x(L,B,O,$){const Z={},k=B.attributes;let Y=0;const se=O.getAttributes();for(const le in se)if(se[le].location>=0){let be=k[le];be===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(be=L.instanceColor));const Se={};Se.attribute=be,be&&be.data&&(Se.data=be.data),Z[le]=Se,Y++}c.attributes=Z,c.attributesNum=Y,c.index=$}function M(){const L=c.newAttributes;for(let B=0,O=L.length;B<O;B++)L[B]=0}function v(L){b(L,0)}function b(L,B){const O=c.newAttributes,$=c.enabledAttributes,Z=c.attributeDivisors;O[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),Z[L]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),Z[L]=B)}function y(){const L=c.newAttributes,B=c.enabledAttributes;for(let O=0,$=B.length;O<$;O++)B[O]!==L[O]&&(i.disableVertexAttribArray(O),B[O]=0)}function E(L,B,O,$,Z,k){n.isWebGL2===!0&&(O===5124||O===5125)?i.vertexAttribIPointer(L,B,O,Z,k):i.vertexAttribPointer(L,B,O,$,Z,k)}function w(L,B,O,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=$.attributes,k=O.getAttributes(),Y=B.defaultAttributeValues;for(const se in k){const le=k[se];if(le.location>=0){let ue=Z[se];if(ue===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ue!==void 0){const be=ue.normalized,Se=ue.itemSize,U=t.get(ue);if(U===void 0)continue;const Ue=U.buffer,we=U.type,Ee=U.bytesPerElement;if(ue.isInterleavedBufferAttribute){const ge=ue.data,Fe=ge.stride,V=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let W=0;W<le.locationSize;W++)b(le.location+W,ge.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let W=0;W<le.locationSize;W++)v(le.location+W);i.bindBuffer(34962,Ue);for(let W=0;W<le.locationSize;W++)E(le.location+W,Se/le.locationSize,we,be,Fe*Ee,(V+Se/le.locationSize*W)*Ee)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<le.locationSize;ge++)b(le.location+ge,ue.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<le.locationSize;ge++)v(le.location+ge);i.bindBuffer(34962,Ue);for(let ge=0;ge<le.locationSize;ge++)E(le.location+ge,Se/le.locationSize,we,be,Se*Ee,Se/le.locationSize*ge*Ee)}}else if(Y!==void 0){const be=Y[se];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(le.location,be);break;case 3:i.vertexAttrib3fv(le.location,be);break;case 4:i.vertexAttrib4fv(le.location,be);break;default:i.vertexAttrib1fv(le.location,be)}}}}y()}function S(){H();for(const L in a){const B=a[L];for(const O in B){const $=B[O];for(const Z in $)p($[Z].object),delete $[Z];delete B[O]}delete a[L]}}function R(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const O in B){const $=B[O];for(const Z in $)p($[Z].object),delete $[Z];delete B[O]}delete a[L.id]}function I(L){for(const B in a){const O=a[B];if(O[L.id]===void 0)continue;const $=O[L.id];for(const Z in $)p($[Z].object),delete $[Z];delete O[L.id]}}function H(){z(),u=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:v,disableUnusedAttributes:y}}function M0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function b0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),f=i.getParameter(3379),p=i.getParameter(34076),g=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),M=d>0,v=o||e.has("OES_texture_float"),b=M&&v,y=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:y}}function w0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ki,a=new xn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const p=h.length!==0||d||n!==0||r;return r=d,t=u(h,f,0),n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,M=x*4;let v=_.clippingState||null;l.value=v,v=u(p,d,M,f);for(let b=0;b!==M;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,v=f;M!==g;++M,v+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function S0(i){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gx(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class E0 extends Lp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,yd=[.125,.215,.35,.446,.526,.582],nr=20,Nc=new E0,Md=new ct;let Bc=null;const Qi=(1+Math.sqrt(5))/2,Gr=1/Qi,bd=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Qi,Gr),new j(0,Qi,-Gr),new j(Gr,0,Qi),new j(-Gr,0,Qi),new j(Qi,Gr,0),new j(-Qi,Gr,0)];class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Bc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},r=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(s)),this._blurMaterial=A0(s,e,t)}return r}_compileMaterial(e){const t=new Li(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,r){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Md),u.toneMapping=0,u.autoClear=!1;const f=new Ep({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Li(new Ho,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Md),g=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;ba(r,x*M,_>2?M:0,M,M),u.setRenderTarget(r),g&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bd[(r-1)%bd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Li(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*nr-1),g=s/p,m=isFinite(s)?1+Math.floor(u*g):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const _=[];let x=0;for(let E=0;E<nr;++E){const w=E/g,S=Math.exp(-w*w/2);_.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<_.length;E++)_[E]=_[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const v=this._sizeLods[r],b=3*v*(r>M-os?r-M+os:0),y=4*(this._cubeSize-v);ba(t,b,y,3*v,2*v),l.setRenderTarget(t),l.render(h,Nc)}}function T0(i){const e=[],t=[],n=[];let r=i;const s=i-os+1+yd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-os?l=yd[o-i+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,g=3,m=2,_=1,x=new Float32Array(g*p*f),M=new Float32Array(m*p*f),v=new Float32Array(_*p*f);for(let y=0;y<f;y++){const E=y%3*2/3-1,w=y>2?0:-1,S=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];x.set(S,g*p*y),M.set(d,m*p*y);const R=[y,y,y,y,y,y];v.set(R,_*p*y)}const b=new ci;b.setAttribute("position",new Vn(x,g)),b.setAttribute("uv",new Vn(M,m)),b.setAttribute("faceIndex",new Vn(v,_)),e.push(b),r>os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sd(i,e,t){const n=new ur(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function A0(i,e,t){const n=new Float32Array(nr),r=new j(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ed(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Td(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wd(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new wd(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function C0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function R0(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const g=f[p];for(let m=0,_=g.length;m<_;m++)e.update(g[m],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,v=x.length;M<v;M+=3){const b=x[M+0],y=x[M+1],E=x[M+2];d.push(b,y,y,E,E,b)}}else{const x=p.array;g=p.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const b=M+0,y=M+1,E=M+2;d.push(b,y,y,E,E,b)}}const m=new(vp(d)?Ap:Tp)(d,1);m.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function P0(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){i.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,f,a,d*l,p),t.update(f,s,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function D0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function I0(i,e){return i[0]-e[0]}function F0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Oc(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function N0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let B=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",B)};m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let S=0;M===!0&&(S=1),v===!0&&(S=2),b===!0&&(S=3);let R=u.attributes.position.count*S,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const H=new Float32Array(R*I*4*g),z=new wp(H,R,I,g);z.type=1015,z.needsUpdate=!0;const L=S*4;for(let O=0;O<g;O++){const $=y[O],Z=E[O],k=w[O],Y=R*I*4*O;for(let se=0;se<$.count;se++){const le=se*L;M===!0&&(o.fromBufferAttribute($,se),$.normalized===!0&&Oc(o,$),H[Y+le+0]=o.x,H[Y+le+1]=o.y,H[Y+le+2]=o.z,H[Y+le+3]=0),v===!0&&(o.fromBufferAttribute(Z,se),Z.normalized===!0&&Oc(o,Z),H[Y+le+4]=o.x,H[Y+le+5]=o.y,H[Y+le+6]=o.z,H[Y+le+7]=0),b===!0&&(o.fromBufferAttribute(k,se),k.normalized===!0&&Oc(o,k),H[Y+le+8]=o.x,H[Y+le+9]=o.y,H[Y+le+10]=o.z,H[Y+le+11]=k.itemSize===4?o.w:1)}}m={count:g,texture:z,size:new Re(R,I)},s.set(u,m),u.addEventListener("dispose",B)}let _=0;for(let M=0;M<f.length;M++)_+=f[M];const x=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const p=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const b=g[v];b[0]=v,b[1]=f[v]}g.sort(F0);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(I0);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const b=a[v],y=b[0],E=b[1];y!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+v)!==m[y]&&u.setAttribute("morphTarget"+v,m[y]),_&&u.getAttribute("morphNormal"+v)!==_[y]&&u.setAttribute("morphNormal"+v,_[y]),r[v]=E,x+=E):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function B0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pp=new Fn,Dp=new wp,Ip=new wx,Fp=new Cp,Ad=[],Ld=[],Cd=new Float32Array(16),Rd=new Float32Array(9),Pd=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ad[r];if(s===void 0&&(s=new Float32Array(r),Ad[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vl(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),Zt(t,n)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),Zt(t,n)}}function V0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(jt(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),Zt(t,n)}}function W0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;jt(t,e)||(i.uniform2iv(this.addr,e),Zt(t,e))}function q0(i,e){const t=this.cache;jt(t,e)||(i.uniform3iv(this.addr,e),Zt(t,e))}function X0(i,e){const t=this.cache;jt(t,e)||(i.uniform4iv(this.addr,e),Zt(t,e))}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j0(i,e){const t=this.cache;jt(t,e)||(i.uniform2uiv(this.addr,e),Zt(t,e))}function Z0(i,e){const t=this.cache;jt(t,e)||(i.uniform3uiv(this.addr,e),Zt(t,e))}function J0(i,e){const t=this.cache;jt(t,e)||(i.uniform4uiv(this.addr,e),Zt(t,e))}function K0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Pp,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ip,r)}function ey(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fp,r)}function ty(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dp,r)}function ny(i){switch(i){case 5126:return O0;case 35664:return z0;case 35665:return U0;case 35666:return G0;case 35674:return H0;case 35675:return k0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return $0;case 35668:case 35672:return q0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return j0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function sy(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function ay(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ly(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cy(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hy(i,e){i.uniform1iv(this.addr,e)}function uy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function fy(i,e){i.uniform4iv(this.addr,e)}function py(i,e){i.uniform1uiv(this.addr,e)}function my(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function xy(i,e){i.uniform4uiv(this.addr,e)}function _y(i,e,t){const n=e.length,r=Vl(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Pp,r[s])}function vy(i,e,t){const n=e.length,r=Vl(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ip,r[s])}function yy(i,e,t){const n=e.length,r=Vl(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Fp,r[s])}function My(i,e,t){const n=e.length,r=Vl(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Dp,r[s])}function by(i){switch(i){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}class wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ny(t.type)}}class Sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=by(t.type)}}class Ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Dd(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){const n=i.name,r=n.length;for(zc.lastIndex=0;;){const s=zc.exec(n),o=zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dd(t,c===void 0?new wy(a,i,e):new Sy(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ey(a),Dd(t,h)),t=h}}}class ml{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ty(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Id(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Ay=0;function Ly(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Cy(i){switch(i){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Fd(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ly(i.getShaderSource(e),o)}else return r}function Ry(i,e){const t=Cy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Py(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dy(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function Iy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ys(i){return i!==""}function Nd(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(i){return i.replace(Ny,By)}function By(i,e){const t=tt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Th(t)}const Oy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(zy,Np).replace(Oy,Uy)}function Uy(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Np(i,e,t,n)}function Np(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Hy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ky(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Vy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Wy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $y(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gy(t),c=Hy(t),u=ky(t),h=Vy(t),d=Wy(t),f=t.isWebGL2?"":Dy(t),p=Iy(s),g=r.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[p].filter(Ys).join(`
`),m.length>0&&(m+=`
`),_=[f,p].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(m=[zd(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),_=[f,zd(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?tt.tonemapping_pars_fragment:"",t.toneMapping!==0?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.encodings_pars_fragment,Ry("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=Th(o),o=Nd(o,t),o=Bd(o,t),a=Th(a),a=Nd(a,t),a=Bd(a,t),o=Od(o),a=Od(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+m+o,v=x+_+a,b=Id(r,35633,M),y=Id(r,35632,v);if(r.attachShader(g,b),r.attachShader(g,y),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(b).trim(),I=r.getShaderInfoLog(y).trim();let H=!0,z=!0;if(r.getProgramParameter(g,35714)===!1){H=!1;const L=Fd(r,b,"vertex"),B=Fd(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+S+`
`+L+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||I==="")&&(z=!1);z&&(this.diagnostics={runnable:H,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:I,prefix:_}})}r.deleteShader(b),r.deleteShader(y);let E;this.getUniforms=function(){return E===void 0&&(E=new ml(r,g)),E};let w;return this.getAttributes=function(){return w===void 0&&(w=Fy(r,g)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Ay++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=y,this}let qy=0;class Xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Yy(e);t.set(e,n)}return t.get(e)}}class Yy{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function jy(i,e,t,n,r,s,o){const a=new Sp,l=new Xy,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w,S,R,I,H){const z=I.fog,L=H.geometry,B=w.isMeshStandardMaterial?I.environment:null,O=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),$=!!O&&O.mapping===306?O.image.height:null,Z=p[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Y=k!==void 0?k.length:0;let se=0;L.morphAttributes.position!==void 0&&(se=1),L.morphAttributes.normal!==void 0&&(se=2),L.morphAttributes.color!==void 0&&(se=3);let le,ue,be,Se;if(Z){const Fe=Hn[Z];le=Fe.vertexShader,ue=Fe.fragmentShader}else le=w.vertexShader,ue=w.fragmentShader,l.update(w),be=l.getVertexShaderID(w),Se=l.getFragmentShaderID(w);const U=i.getRenderTarget(),Ue=w.alphaTest>0,we=w.clearcoat>0,Ee=w.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:w.type,vertexShader:le,fragmentShader:ue,defines:w.defines,customVertexShaderID:be,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:d,outputEncoding:U===null?i.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:3e3,map:!!w.map,matcap:!!w.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:$,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===1,tangentSpaceNormalMap:w.normalMapType===0,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===3001,clearcoat:we,clearcoatMap:we&&!!w.clearcoatMap,clearcoatRoughnessMap:we&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!w.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!w.iridescenceMap,iridescenceThicknessMap:Ee&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===1,alphaMap:!!w.alphaMap,alphaTest:Ue,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!L.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:w.toneMapped?i.toneMapping:0,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===2,flipSided:w.side===1,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(_(S,w),x(S,w),S.push(i.outputEncoding)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputEncoding),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.combine),w.push(S.vertexUvs),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),S.fog&&a.enable(33),w.push(a.mask),a.disableAll(),S.useFog&&a.enable(0),S.flatShading&&a.enable(1),S.logarithmicDepthBuffer&&a.enable(2),S.skinning&&a.enable(3),S.morphTargets&&a.enable(4),S.morphNormals&&a.enable(5),S.morphColors&&a.enable(6),S.premultipliedAlpha&&a.enable(7),S.shadowMapEnabled&&a.enable(8),S.physicallyCorrectLights&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.specularIntensityMap&&a.enable(14),S.specularColorMap&&a.enable(15),S.transmission&&a.enable(16),S.transmissionMap&&a.enable(17),S.thicknessMap&&a.enable(18),S.sheen&&a.enable(19),S.sheenColorMap&&a.enable(20),S.sheenRoughnessMap&&a.enable(21),S.decodeVideoTexture&&a.enable(22),S.opaque&&a.enable(23),w.push(a.mask)}function M(w){const S=p[w.type];let R;if(S){const I=Hn[S];R=Bx.clone(I.uniforms)}else R=w.uniforms;return R}function v(w,S){let R;for(let I=0,H=c.length;I<H;I++){const z=c[I];if(z.cacheKey===S){R=z,++R.usedTimes;break}}return R===void 0&&(R=new $y(i,S,w,s),c.push(R)),R}function b(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function y(w){l.remove(w)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:E}}function Zy(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Jy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,p,g,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:g,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=p,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function a(h,d,f,p,g,m){const _=o(h,d,f,p,g,m);f.transmission>0?n.push(_):f.transparent===!0?r.push(_):t.push(_)}function l(h,d,f,p,g,m){const _=o(h,d,f,p,g,m);f.transmission>0?n.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||Jy),n.length>1&&n.sort(d||Ud),r.length>1&&r.sort(d||Ud)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ky(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new Gd,i.set(n,[s])):r>=i.get(n).length?(s=new Gd,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ct};break;case"SpotLight":t={position:new j,direction:new j,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function eM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tM=0;function nM(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function iM(i,e){const t=new Qy,n=eM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,o=new Tt,a=new Tt;function l(u,h){let d=0,f=0,p=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let g=0,m=0,_=0,x=0,M=0,v=0,b=0,y=0;u.sort(nM);const E=h!==!0?Math.PI:1;for(let S=0,R=u.length;S<R;S++){const I=u[S],H=I.color,z=I.intensity,L=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*z*E,f+=H.g*z*E,p+=H.b*z*E;else if(I.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],z);else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const $=I.shadow,Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.directionalShadow[g]=Z,r.directionalShadowMap[g]=B,r.directionalShadowMatrix[g]=I.shadow.matrix,v++}r.directional[g]=O,g++}else if(I.isSpotLight){const O=t.get(I);if(O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(H).multiplyScalar(z*E),O.distance=L,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,I.castShadow){const $=I.shadow,Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.spotShadow[_]=Z,r.spotShadowMap[_]=B,r.spotShadowMatrix[_]=I.shadow.matrix,y++}r.spot[_]=O,_++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(H).multiplyScalar(z),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[x]=O,x++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),O.distance=I.distance,O.decay=I.decay,I.castShadow){const $=I.shadow,Z=n.get(I);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=I.shadow.matrix,b++}r.point[m]=O,m++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(z*E),O.groundColor.copy(I.groundColor).multiplyScalar(z*E),r.hemi[M]=O,M++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=p;const w=r.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==x||w.hemiLength!==M||w.numDirectionalShadows!==v||w.numPointShadows!==b||w.numSpotShadows!==y)&&(r.directional.length=g,r.spot.length=_,r.rectArea.length=x,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=y,w.directionalLength=g,w.pointLength=m,w.spotLength=_,w.rectAreaLength=x,w.hemiLength=M,w.numDirectionalShadows=v,w.numPointShadows=b,w.numSpotShadows=y,r.version=tM++)}function c(u,h){let d=0,f=0,p=0,g=0,m=0;const _=h.matrixWorldInverse;for(let x=0,M=u.length;x<M;x++){const v=u[x];if(v.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),d++}else if(v.isSpotLight){const b=r.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function Hd(i,e){const t=new iM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rM(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Hd(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new Hd(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class sM extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oM extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cM(i,e,t){let n=new iu;const r=new Re,s=new Re,o=new pt,a=new sM({depthPacking:3201}),l=new oM,c={},u=t.maxTextureSize,h={0:1,1:0,2:2},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:aM,fragmentShader:lM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ci;p.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Li(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(v,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),R=i.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,H=v.length;I<H;I++){const z=v[I],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const B=L.getFrameExtents();if(r.multiply(B),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,L.mapSize.y=s.y)),L.map===null){const $=this.type!==3?{minFilter:1003,magFilter:1003}:{};L.map=new ur(r.x,r.y,$),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const O=L.getViewportCount();for(let $=0;$<O;$++){const Z=L.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),R.viewport(o),L.updateMatrices(z,$),n=L.getFrustum(),M(b,y,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===3&&_(L,y),L.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(E,w,S)};function _(v,b){const y=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ur(r.x,r.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(b,null,y,d,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(b,null,y,f,g,null)}function x(v,b,y,E,w,S){let R=null;const I=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0?R=I:R=y.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const H=R.uuid,z=b.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let B=L[z];B===void 0&&(B=R.clone(),L[z]=B),R=B}return R.visible=b.visible,R.wireframe=b.wireframe,S===3?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(y.matrixWorld),R.nearDistance=E,R.farDistance=w),R}function M(v,b,y,E,w){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===3)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);const I=e.update(v),H=v.material;if(Array.isArray(H)){const z=I.groups;for(let L=0,B=z.length;L<B;L++){const O=z[L],$=H[O.materialIndex];if($&&$.visible){const Z=x(v,$,E,y.near,y.far,w);i.renderBufferDirect(y,null,I,Z,v,O)}}}else if(H.visible){const z=x(v,H,E,y.near,y.far,w);i.renderBufferDirect(y,null,I,z,v,null)}}const R=v.children;for(let I=0,H=R.length;I<H;I++)M(R[I],b,y,E,w)}}function hM(i,e,t){const n=t.isWebGL2;function r(){let Q=!1;const Ie=new pt;let pe=null;const Pe=new pt(0,0,0,0);return{setMask:function(De){pe!==De&&!Q&&(i.colorMask(De,De,De,De),pe=De)},setLocked:function(De){Q=De},setClear:function(De,nt,wt,rt,bn){bn===!0&&(De*=rt,nt*=rt,wt*=rt),Ie.set(De,nt,wt,rt),Pe.equals(Ie)===!1&&(i.clearColor(De,nt,wt,rt),Pe.copy(Ie))},reset:function(){Q=!1,pe=null,Pe.set(-1,0,0,0)}}}function s(){let Q=!1,Ie=null,pe=null,Pe=null;return{setTest:function(De){De?Ue(2929):we(2929)},setMask:function(De){Ie!==De&&!Q&&(i.depthMask(De),Ie=De)},setFunc:function(De){if(pe!==De){if(De)switch(De){case 0:i.depthFunc(512);break;case 1:i.depthFunc(519);break;case 2:i.depthFunc(513);break;case 3:i.depthFunc(515);break;case 4:i.depthFunc(514);break;case 5:i.depthFunc(518);break;case 6:i.depthFunc(516);break;case 7:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);pe=De}},setLocked:function(De){Q=De},setClear:function(De){Pe!==De&&(i.clearDepth(De),Pe=De)},reset:function(){Q=!1,Ie=null,pe=null,Pe=null}}}function o(){let Q=!1,Ie=null,pe=null,Pe=null,De=null,nt=null,wt=null,rt=null,bn=null;return{setTest:function(xt){Q||(xt?Ue(2960):we(2960))},setMask:function(xt){Ie!==xt&&!Q&&(i.stencilMask(xt),Ie=xt)},setFunc:function(xt,wn,F){(pe!==xt||Pe!==wn||De!==F)&&(i.stencilFunc(xt,wn,F),pe=xt,Pe=wn,De=F)},setOp:function(xt,wn,F){(nt!==xt||wt!==wn||rt!==F)&&(i.stencilOp(xt,wn,F),nt=xt,wt=wn,rt=F)},setLocked:function(xt){Q=xt},setClear:function(xt){bn!==xt&&(i.clearStencil(xt),bn=xt)},reset:function(){Q=!1,Ie=null,pe=null,Pe=null,De=null,nt=null,wt=null,rt=null,bn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,g=[],m=null,_=!1,x=null,M=null,v=null,b=null,y=null,E=null,w=null,S=!1,R=null,I=null,H=null,z=null,L=null;const B=i.getParameter(35661);let O=!1,$=0;const Z=i.getParameter(7938);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=$>=2);let k=null,Y={};const se=i.getParameter(3088),le=i.getParameter(2978),ue=new pt().fromArray(se),be=new pt().fromArray(le);function Se(Q,Ie,pe){const Pe=new Uint8Array(4),De=i.createTexture();i.bindTexture(Q,De),i.texParameteri(Q,10241,9728),i.texParameteri(Q,10240,9728);for(let nt=0;nt<pe;nt++)i.texImage2D(Ie+nt,0,6408,1,1,0,6408,5121,Pe);return De}const U={};U[3553]=Se(3553,3553,1),U[34067]=Se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(2929),l.setFunc(3),ae(!1),N(1),Ue(2884),te(0);function Ue(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function we(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function Ee(Q,Ie){return f[Q]!==Ie?(i.bindFramebuffer(Q,Ie),f[Q]=Ie,n&&(Q===36009&&(f[36160]=Ie),Q===36160&&(f[36009]=Ie)),!0):!1}function ge(Q,Ie){let pe=g,Pe=!1;if(Q)if(pe=p.get(Ie),pe===void 0&&(pe=[],p.set(Ie,pe)),Q.isWebGLMultipleRenderTargets){const De=Q.texture;if(pe.length!==De.length||pe[0]!==36064){for(let nt=0,wt=De.length;nt<wt;nt++)pe[nt]=36064+nt;pe.length=De.length,Pe=!0}}else pe[0]!==36064&&(pe[0]=36064,Pe=!0);else pe[0]!==1029&&(pe[0]=1029,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Fe(Q){return m!==Q?(i.useProgram(Q),m=Q,!0):!1}const V={[100]:32774,[101]:32778,[102]:32779};if(n)V[103]=32775,V[104]=32776;else{const Q=e.get("EXT_blend_minmax");Q!==null&&(V[103]=Q.MIN_EXT,V[104]=Q.MAX_EXT)}const W={[200]:0,[201]:1,[202]:768,[204]:770,[210]:776,[208]:774,[206]:772,[203]:769,[205]:771,[209]:775,[207]:773};function te(Q,Ie,pe,Pe,De,nt,wt,rt){if(Q===0){_===!0&&(we(3042),_=!1);return}if(_===!1&&(Ue(3042),_=!0),Q!==5){if(Q!==x||rt!==S){if((M!==100||y!==100)&&(i.blendEquation(32774),M=100,y=100),rt)switch(Q){case 1:i.blendFuncSeparate(1,771,1,771);break;case 2:i.blendFunc(1,1);break;case 3:i.blendFuncSeparate(0,769,0,1);break;case 4:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case 1:i.blendFuncSeparate(770,771,1,771);break;case 2:i.blendFunc(770,1);break;case 3:i.blendFuncSeparate(0,769,0,1);break;case 4:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}v=null,b=null,E=null,w=null,x=Q,S=rt}return}De=De||Ie,nt=nt||pe,wt=wt||Pe,(Ie!==M||De!==y)&&(i.blendEquationSeparate(V[Ie],V[De]),M=Ie,y=De),(pe!==v||Pe!==b||nt!==E||wt!==w)&&(i.blendFuncSeparate(W[pe],W[Pe],W[nt],W[wt]),v=pe,b=Pe,E=nt,w=wt),x=Q,S=null}function xe(Q,Ie){Q.side===2?we(2884):Ue(2884);let pe=Q.side===1;Ie&&(pe=!pe),ae(pe),Q.blending===1&&Q.transparent===!1?te(0):te(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.premultipliedAlpha),l.setFunc(Q.depthFunc),l.setTest(Q.depthTest),l.setMask(Q.depthWrite),a.setMask(Q.colorWrite);const Pe=Q.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(Q.stencilWriteMask),c.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),c.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),ne(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Ue(32926):we(32926)}function ae(Q){R!==Q&&(Q?i.frontFace(2304):i.frontFace(2305),R=Q)}function N(Q){Q!==0?(Ue(2884),Q!==I&&(Q===1?i.cullFace(1029):Q===2?i.cullFace(1028):i.cullFace(1032))):we(2884),I=Q}function P(Q){Q!==H&&(O&&i.lineWidth(Q),H=Q)}function ne(Q,Ie,pe){Q?(Ue(32823),(z!==Ie||L!==pe)&&(i.polygonOffset(Ie,pe),z=Ie,L=pe)):we(32823)}function de(Q){Q?Ue(3089):we(3089)}function G(Q){Q===void 0&&(Q=33984+B-1),k!==Q&&(i.activeTexture(Q),k=Q)}function A(Q,Ie){k===null&&G();let pe=Y[k];pe===void 0&&(pe={type:void 0,texture:void 0},Y[k]=pe),(pe.type!==Q||pe.texture!==Ie)&&(i.bindTexture(Q,Ie||U[Q]),pe.type=Q,pe.texture=Ie)}function T(){const Q=Y[k];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ye(){try{i.texStorage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ne(Q){ue.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),ue.copy(Q))}function Ge(Q){be.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),be.copy(Q))}function Je(Q,Ie){let pe=h.get(Ie);pe===void 0&&(pe=new WeakMap,h.set(Ie,pe));let Pe=pe.get(Q);Pe===void 0&&(Pe=i.getUniformBlockIndex(Ie,Q.name),pe.set(Q,Pe))}function it(Q,Ie){const Pe=h.get(Ie).get(Q);u.get(Q)!==Pe&&(i.uniformBlockBinding(Ie,Pe,Q.__bindingPointIndex),u.set(Q,Pe))}function gt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},k=null,Y={},f={},p=new WeakMap,g=[],m=null,_=!1,x=null,M=null,v=null,b=null,y=null,E=null,w=null,S=!1,R=null,I=null,H=null,z=null,L=null,ue.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:we,bindFramebuffer:Ee,drawBuffers:ge,useProgram:Fe,setBlending:te,setMaterial:xe,setFlipSided:ae,setCullFace:N,setLineWidth:P,setPolygonOffset:ne,setScissorTest:de,activeTexture:G,bindTexture:A,unbindTexture:T,compressedTexImage2D:q,texImage2D:_e,texImage3D:Me,updateUBOMapping:Je,uniformBlockBinding:it,texStorage2D:ye,texStorage3D:J,texSubImage2D:K,texSubImage3D:ce,compressedTexSubImage2D:fe,scissor:Ne,viewport:Ge,reset:gt}}function uM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,T){return _?new OffscreenCanvas(A,T):_l("canvas")}function M(A,T,q,K){let ce=1;if((A.width>K||A.height>K)&&(ce=K/Math.max(A.width,A.height)),ce<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=T?Eh:Math.floor,ye=fe(ce*A.width),J=fe(ce*A.height);g===void 0&&(g=x(ye,J));const _e=q?x(ye,J):g;return _e.width=ye,_e.height=J,_e.getContext("2d").drawImage(A,0,0,ye,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+J+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return ld(A.width)&&ld(A.height)}function b(A){return a?!1:A.wrapS!==1001||A.wrapT!==1001||A.minFilter!==1003&&A.minFilter!==1006}function y(A,T){return A.generateMipmaps&&T&&A.minFilter!==1003&&A.minFilter!==1006}function E(A){i.generateMipmap(A)}function w(A,T,q,K,ce=!1){if(a===!1)return T;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=T;return T===6403&&(q===5126&&(fe=33326),q===5131&&(fe=33325),q===5121&&(fe=33321)),T===33319&&(q===5126&&(fe=33328),q===5131&&(fe=33327),q===5121&&(fe=33323)),T===6408&&(q===5126&&(fe=34836),q===5131&&(fe=34842),q===5121&&(fe=K===3001&&ce===!1?35907:32856),q===32819&&(fe=32854),q===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(A,T,q){return y(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function R(A){return A===1003||A===1004||A===1005?9728:9729}function I(A){const T=A.target;T.removeEventListener("dispose",I),z(T),T.isVideoTexture&&p.delete(T)}function H(A){const T=A.target;T.removeEventListener("dispose",H),B(T)}function z(A){const T=n.get(A);if(T.__webglInit===void 0)return;const q=A.source,K=m.get(q);if(K){const ce=K[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&L(A),Object.keys(K).length===0&&m.delete(q)}n.remove(A)}function L(A){const T=n.get(A);i.deleteTexture(T.__webglTexture);const q=A.source,K=m.get(q);delete K[T.__cacheKey],o.memory.textures--}function B(A){const T=A.texture,q=n.get(A),K=n.get(T);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)i.deleteFramebuffer(q.__webglFramebuffer[ce]),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ce]);else{if(i.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ce=0;ce<q.__webglColorRenderbuffer.length;ce++)q.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ce]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,fe=T.length;ce<fe;ce++){const ye=n.get(T[ce]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(T[ce])}n.remove(T),n.remove(A)}let O=0;function $(){O=0}function Z(){const A=O;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),O+=1,A}function k(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.encoding),T.join()}function Y(A,T){const q=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(q,A,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,q.__webglTexture)}function se(A,T){const q=n.get(A);if(A.version>0&&q.__version!==A.version){we(q,A,T);return}t.activeTexture(33984+T),t.bindTexture(35866,q.__webglTexture)}function le(A,T){const q=n.get(A);if(A.version>0&&q.__version!==A.version){we(q,A,T);return}t.activeTexture(33984+T),t.bindTexture(32879,q.__webglTexture)}function ue(A,T){const q=n.get(A);if(A.version>0&&q.__version!==A.version){Ee(q,A,T);return}t.activeTexture(33984+T),t.bindTexture(34067,q.__webglTexture)}const be={[1e3]:10497,[1001]:33071,[1002]:33648},Se={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function U(A,T,q){if(q?(i.texParameteri(A,10242,be[T.wrapS]),i.texParameteri(A,10243,be[T.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,be[T.wrapR]),i.texParameteri(A,10240,Se[T.magFilter]),i.texParameteri(A,10241,Se[T.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(T.wrapS!==1001||T.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,R(T.magFilter)),i.texParameteri(A,10241,R(T.minFilter)),T.minFilter!==1003&&T.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(T.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ue(A,T){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",I));const K=T.source;let ce=m.get(K);ce===void 0&&(ce={},m.set(K,ce));const fe=k(T);if(fe!==A.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[fe].usedTimes++;const ye=ce[A.__cacheKey];ye!==void 0&&(ce[A.__cacheKey].usedTimes--,ye.usedTimes===0&&L(T)),A.__cacheKey=fe,A.__webglTexture=ce[fe].texture}return q}function we(A,T,q){let K=3553;T.isDataArrayTexture&&(K=35866),T.isData3DTexture&&(K=32879);const ce=Ue(A,T),fe=T.source;if(t.activeTexture(33984+q),t.bindTexture(K,A.__webglTexture),fe.version!==fe.__currentVersion||ce===!0){i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const ye=b(T)&&v(T.image)===!1;let J=M(T.image,ye,!1,u);J=G(T,J);const _e=v(J)||a,Me=s.convert(T.format,T.encoding);let Ne=s.convert(T.type),Ge=w(T.internalFormat,Me,Ne,T.encoding,T.isVideoTexture);U(K,T,_e);let Je;const it=T.mipmaps,gt=a&&T.isVideoTexture!==!0,Q=fe.__currentVersion===void 0||ce===!0,Ie=S(T,J,_e);if(T.isDepthTexture)Ge=6402,a?T.type===1015?Ge=36012:T.type===1014?Ge=33190:T.type===1020?Ge=35056:Ge=33189:T.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===1026&&Ge===6402&&T.type!==1012&&T.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=1014,Ne=s.convert(T.type)),T.format===1027&&Ge===6402&&(Ge=34041,T.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=1020,Ne=s.convert(T.type))),Q&&(gt?t.texStorage2D(3553,1,Ge,J.width,J.height):t.texImage2D(3553,0,Ge,J.width,J.height,0,Me,Ne,null));else if(T.isDataTexture)if(it.length>0&&_e){gt&&Q&&t.texStorage2D(3553,Ie,Ge,it[0].width,it[0].height);for(let pe=0,Pe=it.length;pe<Pe;pe++)Je=it[pe],gt?t.texSubImage2D(3553,pe,0,0,Je.width,Je.height,Me,Ne,Je.data):t.texImage2D(3553,pe,Ge,Je.width,Je.height,0,Me,Ne,Je.data);T.generateMipmaps=!1}else gt?(Q&&t.texStorage2D(3553,Ie,Ge,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Me,Ne,J.data)):t.texImage2D(3553,0,Ge,J.width,J.height,0,Me,Ne,J.data);else if(T.isCompressedTexture){gt&&Q&&t.texStorage2D(3553,Ie,Ge,it[0].width,it[0].height);for(let pe=0,Pe=it.length;pe<Pe;pe++)Je=it[pe],T.format!==1023?Me!==null?gt?t.compressedTexSubImage2D(3553,pe,0,0,Je.width,Je.height,Me,Je.data):t.compressedTexImage2D(3553,pe,Ge,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(3553,pe,0,0,Je.width,Je.height,Me,Ne,Je.data):t.texImage2D(3553,pe,Ge,Je.width,Je.height,0,Me,Ne,Je.data)}else if(T.isDataArrayTexture)gt?(Q&&t.texStorage3D(35866,Ie,Ge,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Me,Ne,J.data)):t.texImage3D(35866,0,Ge,J.width,J.height,J.depth,0,Me,Ne,J.data);else if(T.isData3DTexture)gt?(Q&&t.texStorage3D(32879,Ie,Ge,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Me,Ne,J.data)):t.texImage3D(32879,0,Ge,J.width,J.height,J.depth,0,Me,Ne,J.data);else if(T.isFramebufferTexture){if(Q)if(gt)t.texStorage2D(3553,Ie,Ge,J.width,J.height);else{let pe=J.width,Pe=J.height;for(let De=0;De<Ie;De++)t.texImage2D(3553,De,Ge,pe,Pe,0,Me,Ne,null),pe>>=1,Pe>>=1}}else if(it.length>0&&_e){gt&&Q&&t.texStorage2D(3553,Ie,Ge,it[0].width,it[0].height);for(let pe=0,Pe=it.length;pe<Pe;pe++)Je=it[pe],gt?t.texSubImage2D(3553,pe,0,0,Me,Ne,Je):t.texImage2D(3553,pe,Ge,Me,Ne,Je);T.generateMipmaps=!1}else gt?(Q&&t.texStorage2D(3553,Ie,Ge,J.width,J.height),t.texSubImage2D(3553,0,0,0,Me,Ne,J)):t.texImage2D(3553,0,Ge,Me,Ne,J);y(T,_e)&&E(K),fe.__currentVersion=fe.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Ee(A,T,q){if(T.image.length!==6)return;const K=Ue(A,T),ce=T.source;if(t.activeTexture(33984+q),t.bindTexture(34067,A.__webglTexture),ce.version!==ce.__currentVersion||K===!0){i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const fe=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!fe&&!ye?J[pe]=M(T.image[pe],!1,!0,c):J[pe]=ye?T.image[pe].image:T.image[pe],J[pe]=G(T,J[pe]);const _e=J[0],Me=v(_e)||a,Ne=s.convert(T.format,T.encoding),Ge=s.convert(T.type),Je=w(T.internalFormat,Ne,Ge,T.encoding),it=a&&T.isVideoTexture!==!0,gt=ce.__currentVersion===void 0||K===!0;let Q=S(T,_e,Me);U(34067,T,Me);let Ie;if(fe){it&&gt&&t.texStorage2D(34067,Q,Je,_e.width,_e.height);for(let pe=0;pe<6;pe++){Ie=J[pe].mipmaps;for(let Pe=0;Pe<Ie.length;Pe++){const De=Ie[Pe];T.format!==1023?Ne!==null?it?t.compressedTexSubImage2D(34069+pe,Pe,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(34069+pe,Pe,Je,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(34069+pe,Pe,0,0,De.width,De.height,Ne,Ge,De.data):t.texImage2D(34069+pe,Pe,Je,De.width,De.height,0,Ne,Ge,De.data)}}}else{Ie=T.mipmaps,it&&gt&&(Ie.length>0&&Q++,t.texStorage2D(34067,Q,Je,J[0].width,J[0].height));for(let pe=0;pe<6;pe++)if(ye){it?t.texSubImage2D(34069+pe,0,0,0,J[pe].width,J[pe].height,Ne,Ge,J[pe].data):t.texImage2D(34069+pe,0,Je,J[pe].width,J[pe].height,0,Ne,Ge,J[pe].data);for(let Pe=0;Pe<Ie.length;Pe++){const nt=Ie[Pe].image[pe].image;it?t.texSubImage2D(34069+pe,Pe+1,0,0,nt.width,nt.height,Ne,Ge,nt.data):t.texImage2D(34069+pe,Pe+1,Je,nt.width,nt.height,0,Ne,Ge,nt.data)}}else{it?t.texSubImage2D(34069+pe,0,0,0,Ne,Ge,J[pe]):t.texImage2D(34069+pe,0,Je,Ne,Ge,J[pe]);for(let Pe=0;Pe<Ie.length;Pe++){const De=Ie[Pe];it?t.texSubImage2D(34069+pe,Pe+1,0,0,Ne,Ge,De.image[pe]):t.texImage2D(34069+pe,Pe+1,Je,Ne,Ge,De.image[pe])}}}y(T,Me)&&E(34067),ce.__currentVersion=ce.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function ge(A,T,q,K,ce){const fe=s.convert(q.format,q.encoding),ye=s.convert(q.type),J=w(q.internalFormat,fe,ye,q.encoding);n.get(T).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,J,T.width,T.height,T.depth,0,fe,ye,null):t.texImage2D(ce,0,J,T.width,T.height,0,fe,ye,null)),t.bindFramebuffer(36160,A),ne(T)?d.framebufferTexture2DMultisampleEXT(36160,K,ce,n.get(q).__webglTexture,0,P(T)):i.framebufferTexture2D(36160,K,ce,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(A,T,q){if(i.bindRenderbuffer(36161,A),T.depthBuffer&&!T.stencilBuffer){let K=33189;if(q||ne(T)){const ce=T.depthTexture;ce&&ce.isDepthTexture&&(ce.type===1015?K=36012:ce.type===1014&&(K=33190));const fe=P(T);ne(T)?d.renderbufferStorageMultisampleEXT(36161,fe,K,T.width,T.height):i.renderbufferStorageMultisample(36161,fe,K,T.width,T.height)}else i.renderbufferStorage(36161,K,T.width,T.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(T.depthBuffer&&T.stencilBuffer){const K=P(T);q&&ne(T)===!1?i.renderbufferStorageMultisample(36161,K,35056,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(36161,K,35056,T.width,T.height):i.renderbufferStorage(36161,34041,T.width,T.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const K=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0;ce<K.length;ce++){const fe=K[ce],ye=s.convert(fe.format,fe.encoding),J=s.convert(fe.type),_e=w(fe.internalFormat,ye,J,fe.encoding),Me=P(T);q&&ne(T)===!1?i.renderbufferStorageMultisample(36161,Me,_e,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(36161,Me,_e,T.width,T.height):i.renderbufferStorage(36161,_e,T.width,T.height)}}i.bindRenderbuffer(36161,null)}function V(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const K=n.get(T.depthTexture).__webglTexture,ce=P(T);if(T.depthTexture.format===1026)ne(T)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ce):i.framebufferTexture2D(36160,36096,3553,K,0);else if(T.depthTexture.format===1027)ne(T)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ce):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function W(A){const T=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");V(T.__webglFramebuffer,A)}else if(q){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]=i.createRenderbuffer(),Fe(T.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),Fe(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function te(A,T,q){const K=n.get(A);T!==void 0&&ge(K.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&W(A)}function xe(A){const T=A.texture,q=n.get(A),K=n.get(T);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,ye=v(A)||a;if(ce){q.__webglFramebuffer=[];for(let J=0;J<6;J++)q.__webglFramebuffer[J]=i.createFramebuffer()}else{if(q.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const J=A.texture;for(let _e=0,Me=J.length;_e<Me;_e++){const Ne=n.get(J[_e]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ne(A)===!1){const J=fe?T:[T];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let _e=0;_e<J.length;_e++){const Me=J[_e];q.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(36161,q.__webglColorRenderbuffer[_e]);const Ne=s.convert(Me.format,Me.encoding),Ge=s.convert(Me.type),Je=w(Me.internalFormat,Ne,Ge,Me.encoding),it=P(A);i.renderbufferStorageMultisample(36161,it,Je,A.width,A.height),i.framebufferRenderbuffer(36160,36064+_e,36161,q.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,K.__webglTexture),U(34067,T,ye);for(let J=0;J<6;J++)ge(q.__webglFramebuffer[J],A,T,36064,34069+J);y(T,ye)&&E(34067),t.unbindTexture()}else if(fe){const J=A.texture;for(let _e=0,Me=J.length;_e<Me;_e++){const Ne=J[_e],Ge=n.get(Ne);t.bindTexture(3553,Ge.__webglTexture),U(3553,Ne,ye),ge(q.__webglFramebuffer,A,Ne,36064+_e,3553),y(Ne,ye)&&E(3553)}t.unbindTexture()}else{let J=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?J=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,K.__webglTexture),U(J,T,ye),ge(q.__webglFramebuffer,A,T,36064,J),y(T,ye)&&E(J),t.unbindTexture()}A.depthBuffer&&W(A)}function ae(A){const T=v(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let K=0,ce=q.length;K<ce;K++){const fe=q[K];if(y(fe,T)){const ye=A.isWebGLCubeRenderTarget?34067:3553,J=n.get(fe).__webglTexture;t.bindTexture(ye,J),E(ye),t.unbindTexture()}}}function N(A){if(a&&A.samples>0&&ne(A)===!1){const T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,K=A.height;let ce=16384;const fe=[],ye=A.stencilBuffer?33306:36096,J=n.get(A),_e=A.isWebGLMultipleRenderTargets===!0;if(_e)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){fe.push(36064+Me),A.depthBuffer&&fe.push(ye);const Ne=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Ne===!1&&(A.depthBuffer&&(ce|=256),A.stencilBuffer&&(ce|=1024)),_e&&i.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[Me]),Ne===!0&&(i.invalidateFramebuffer(36008,[ye]),i.invalidateFramebuffer(36009,[ye])),_e){const Ge=n.get(T[Me]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ge,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,ce,9728),f&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,J.__webglColorRenderbuffer[Me]);const Ne=n.get(T[Me]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,Ne,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function P(A){return Math.min(h,A.samples)}function ne(A){const T=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function de(A){const T=o.render.frame;p.get(A)!==T&&(p.set(A,T),A.update())}function G(A,T){const q=A.encoding,K=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===1035||q!==3e3&&(q===3001?a===!1?e.has("EXT_sRGB")===!0&&K===1023?(A.format=1035,A.minFilter=1006,A.generateMipmaps=!1):T=Mp.sRGBToLinear(T):(K!==1023||ce!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),T}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=te,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ne}function dM(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(o===3001)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===37492)return o===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===37496)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===37808)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===36492)return o===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===1020?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class fM extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const x=new wa;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[g.jointName]=x,c.add(x)}const _=c.joints[g.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class mM extends Fn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class gM extends vs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,f=null;const p=t.getContextAttributes();let g=null,m=null;const _=[],x=[],M=new gn;M.layers.enable(1),M.viewport=new pt;const v=new gn;v.layers.enable(2),v.viewport=new pt;const b=[M,v],y=new fM;y.layers.enable(1),y.layers.enable(2);let E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=_[k];return Y===void 0&&(Y=new Uc,_[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=_[k];return Y===void 0&&(Y=new Uc,_[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=_[k];return Y===void 0&&(Y=new Uc,_[k]=Y),Y.getHandSpace()};function S(k){const Y=x.indexOf(k.inputSource);if(Y===-1)return;const se=_[Y];se!==void 0&&se.dispatchEvent({type:k.type,data:k.inputSource})}function R(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",I);for(let k=0;k<_.length;k++){const Y=x[k];Y!==null&&(x[k]=null,_[k].disconnect(Y))}E=null,w=null,e.setRenderTarget(g),d=null,h=null,u=null,r=null,m=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",R),r.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),m=new ur(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let Y=null,se=null,le=null;p.depth&&(le=p.stencil?35056:33190,Y=p.stencil?1027:1026,se=p.stencil?1020:1014);const ue={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),m=new ur(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new mM(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const be=e.properties.get(m);be.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(k){for(let Y=0;Y<k.removed.length;Y++){const se=k.removed[Y],le=x.indexOf(se);le>=0&&(x[le]=null,_[le].dispatchEvent({type:"disconnected",data:se}))}for(let Y=0;Y<k.added.length;Y++){const se=k.added[Y];let le=x.indexOf(se);if(le===-1){for(let be=0;be<_.length;be++)if(be>=x.length){x.push(se),le=be;break}else if(x[be]===null){x[be]=se,le=be;break}if(le===-1)break}const ue=_[le];ue&&ue.dispatchEvent({type:"connected",data:se})}}const H=new j,z=new j;function L(k,Y,se){H.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);const le=H.distanceTo(z),ue=Y.projectionMatrix.elements,be=se.projectionMatrix.elements,Se=ue[14]/(ue[10]-1),U=ue[14]/(ue[10]+1),Ue=(ue[9]+1)/ue[5],we=(ue[9]-1)/ue[5],Ee=(ue[8]-1)/ue[0],ge=(be[8]+1)/be[0],Fe=Se*Ee,V=Se*ge,W=le/(-Ee+ge),te=W*-Ee;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(te),k.translateZ(W),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const xe=Se+W,ae=U+W,N=Fe-te,P=V+(le-te),ne=Ue*U/ae*xe,de=we*U/ae*xe;k.projectionMatrix.makePerspective(N,P,ne,de,xe,ae)}function B(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.near=v.near=M.near=k.near,y.far=v.far=M.far=k.far,(E!==y.near||w!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,w=y.far);const Y=k.parent,se=y.cameras;B(y,Y);for(let ue=0;ue<se.length;ue++)B(se[ue],Y);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),k.position.copy(y.position),k.quaternion.copy(y.quaternion),k.scale.copy(y.scale),k.matrix.copy(y.matrix),k.matrixWorld.copy(y.matrixWorld);const le=k.children;for(let ue=0,be=le.length;ue<be;ue++)le[ue].updateMatrixWorld(!0);se.length===2?L(y,M,v):y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let O=null;function $(k,Y){if(c=Y.getViewerPose(l||o),f=Y,c!==null){const se=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let le=!1;se.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let ue=0;ue<se.length;ue++){const be=se[ue];let Se=null;if(d!==null)Se=d.getViewport(be);else{const Ue=u.getViewSubImage(h,be);Se=Ue.viewport,ue===0&&(e.setRenderTargetTextures(m,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(m))}let U=b[ue];U===void 0&&(U=new gn,U.layers.enable(ue),U.viewport=new pt,b[ue]=U),U.matrix.fromArray(be.transform.matrix),U.projectionMatrix.fromArray(be.projectionMatrix),U.viewport.set(Se.x,Se.y,Se.width,Se.height),ue===0&&y.matrix.copy(U.matrix),le===!0&&y.cameras.push(U)}}for(let se=0;se<_.length;se++){const le=x[se],ue=_[se];le!==null&&ue!==void 0&&ue.update(le,Y,l||o)}O&&O(k,Y),f=null}const Z=new Rp;Z.setAnimationLoop($),this.setAnimationLoop=function(k){O=k},this.dispose=function(){}}}function xM(i,e){function t(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),p(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?a(g,m,_,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.specularMap&&(g.specularMap.value=m.specularMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const v=i.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uv2Transform.value.copy(M.matrix))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function a(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===1&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function _M(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=r[x.id];v===void 0&&(p(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const y=e.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function u(x){const M=h();x.__bindingPointIndex=M;const v=i.createBuffer(),b=x.__size,y=x.usage;return i.bindBuffer(35345,v),i.bufferData(35345,b,y),i.bindBuffer(35345,null),i.bindBufferBase(35345,M,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(35345,M);for(let y=0,E=v.length;y<E;y++){const w=v[y];if(f(w,y,b)===!0){const S=w.value,R=w.__offset;typeof S=="number"?(w.__data[0]=S,i.bufferSubData(35345,R,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):S.toArray(w.__data),i.bufferSubData(35345,R,w.__data))}}i.bindBuffer(35345,null)}function f(x,M,v){const b=x.value;if(v[M]===void 0)return typeof b=="number"?v[M]=b:v[M]=b.clone(),!0;if(typeof b=="number"){if(v[M]!==b)return v[M]=b,!0}else{const y=v[M];if(y.equals(b)===!1)return y.copy(b),!0}return!1}function p(x){const M=x.uniforms;let v=0;const b=16;let y=0;for(let E=0,w=M.length;E<w;E++){const S=M[E],R=g(S);if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,E>0){y=v%b;const I=b-y;y!==0&&I-R.boundary<0&&(v+=b-y,S.__offset=v)}v+=R.storage}return y=v%b,y>0&&(v+=b-y),x.__size=v,x.__cache={},this}function g(x){const M=x.value,v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function vM(){const i=_l("canvas");return i.style.display="block",i}function yM(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:vM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let m=!1,_=0,x=0,M=null,v=-1,b=null;const y=new pt,E=new pt;let w=null,S=e.width,R=e.height,I=1,H=null,z=null;const L=new pt(0,0,S,R),B=new pt(0,0,S,R);let O=!1;const $=new iu;let Z=!1,k=!1,Y=null;const se=new Tt,le=new Re,ue=new j,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return M===null?I:1}let U=t;function Ue(C,X){for(let re=0;re<C.length;re++){const ee=C[re],ie=e.getContext(ee,X);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){const X=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&X.shift(),U=Ue(X,C),U===null)throw Ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,Ee,ge,Fe,V,W,te,xe,ae,N,P,ne,de,G,A,T,q,K,ce,fe,ye,J,_e,Me;function Ne(){we=new C0(U),Ee=new b0(U,we,i),we.init(Ee),J=new dM(U,we,Ee),ge=new hM(U,we,Ee),Fe=new D0,V=new Zy,W=new uM(U,we,ge,V,Ee,J,Fe),te=new S0(g),xe=new L0(g),ae=new Vx(U,Ee),_e=new y0(U,we,ae,Ee),N=new R0(U,ae,Fe,_e),P=new B0(U,N,ae,Fe),ce=new N0(U,Ee,W),T=new w0(V),ne=new jy(g,te,xe,we,Ee,_e,T),de=new xM(g,V),G=new Ky,A=new rM(we,Ee),K=new v0(g,te,ge,P,u,o),q=new cM(g,P,Ee),Me=new _M(U,Fe,Ee,ge),fe=new M0(U,we,Fe,Ee),ye=new P0(U,we,Fe,Ee),Fe.programs=ne.programs,g.capabilities=Ee,g.extensions=we,g.properties=V,g.renderLists=G,g.shadowMap=q,g.state=ge,g.info=Fe}Ne();const Ge=new gM(g,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(S,R,!1))},this.getSize=function(C){return C.set(S,R)},this.setSize=function(C,X,re){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,R=X,e.width=Math.floor(C*I),e.height=Math.floor(X*I),re!==!1&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(S*I,R*I).floor()},this.setDrawingBufferSize=function(C,X,re){S=C,R=X,I=re,e.width=Math.floor(C*re),e.height=Math.floor(X*re),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,X,re,ee){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,X,re,ee),ge.viewport(y.copy(L).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy(B)},this.setScissor=function(C,X,re,ee){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,X,re,ee),ge.scissor(E.copy(B).multiplyScalar(I).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(C){ge.setScissorTest(O=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,X=!0,re=!0){let ee=0;C&&(ee|=16384),X&&(ee|=256),re&&(ee|=1024),U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),G.dispose(),A.dispose(),V.dispose(),te.dispose(),xe.dispose(),P.dispose(),_e.dispose(),Me.dispose(),ne.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",nt),Ge.removeEventListener("sessionend",wt),Y&&(Y.dispose(),Y=null),rt.stop()};function Je(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Fe.autoReset,X=q.enabled,re=q.autoUpdate,ee=q.needsUpdate,ie=q.type;Ne(),Fe.autoReset=C,q.enabled=X,q.autoUpdate=re,q.needsUpdate=ee,q.type=ie}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){const X=C.target;X.removeEventListener("dispose",Q),Ie(X)}function Ie(C){pe(C),V.remove(C)}function pe(C){const X=V.get(C).programs;X!==void 0&&(X.forEach(function(re){ne.releaseProgram(re)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,re,ee,ie,Ae){X===null&&(X=be);const Ve=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=Te(C,X,re,ee,ie);ge.setMaterial(ee,Ve);let Ye=re.index;const je=re.attributes.position;if(Ye===null){if(je===void 0||je.count===0)return}else if(Ye.count===0)return;let et=1;ee.wireframe===!0&&(Ye=N.getWireframeAttribute(re),et=2),_e.setup(ie,ee,ze,re,Ye);let Ze,at=fe;Ye!==null&&(Ze=ae.get(Ye),at=ye,at.setIndex(Ze));const en=Ye!==null?Ye.count:je.count,fn=re.drawRange.start*et,Er=re.drawRange.count*et,zn=Ae!==null?Ae.start*et:0,st=Ae!==null?Ae.count*et:1/0,Tr=Math.max(fn,zn),At=Math.min(en,fn+Er,zn+st)-1,pn=Math.max(0,At-Tr+1);if(pn!==0){if(ie.isMesh)ee.wireframe===!0?(ge.setLineWidth(ee.wireframeLinewidth*Se()),at.setMode(1)):at.setMode(4);else if(ie.isLine){let di=ee.linewidth;di===void 0&&(di=1),ge.setLineWidth(di*Se()),ie.isLineSegments?at.setMode(1):ie.isLineLoop?at.setMode(2):at.setMode(3)}else ie.isPoints?at.setMode(0):ie.isSprite&&at.setMode(4);if(ie.isInstancedMesh)at.renderInstances(Tr,pn,ie.count);else if(re.isInstancedBufferGeometry){const di=Math.min(re.instanceCount,re._maxInstanceCount);at.renderInstances(Tr,pn,di)}else at.render(Tr,pn)}},this.compile=function(C,X){d=A.get(C),d.init(),p.push(d),C.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(d.pushLight(re),re.castShadow&&d.pushShadow(re))}),d.setupLights(g.physicallyCorrectLights),C.traverse(function(re){const ee=re.material;if(ee)if(Array.isArray(ee))for(let ie=0;ie<ee.length;ie++){const Ae=ee[ie];oe(Ae,C,re)}else oe(ee,C,re)}),p.pop(),d=null};let Pe=null;function De(C){Pe&&Pe(C)}function nt(){rt.stop()}function wt(){rt.start()}const rt=new Rp;rt.setAnimationLoop(De),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(C){Pe=C,Ge.setAnimationLoop(C),C===null?rt.stop():rt.start()},Ge.addEventListener("sessionstart",nt),Ge.addEventListener("sessionend",wt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.autoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(X),X=Ge.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,X,M),d=A.get(C,p.length),d.init(),p.push(d),se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(se),k=this.localClippingEnabled,Z=T.init(this.clippingPlanes,k,X),h=G.get(C,f.length),h.init(),f.push(h),bn(C,X,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(H,z),Z===!0&&T.beginShadows();const re=d.state.shadowsArray;if(q.render(re,C,X),Z===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,C),d.setupLights(g.physicallyCorrectLights),X.isArrayCamera){const ee=X.cameras;for(let ie=0,Ae=ee.length;ie<Ae;ie++){const Ve=ee[ie];xt(h,C,Ve,Ve.viewport)}}else xt(h,C,X);M!==null&&(W.updateMultisampleRenderTarget(M),W.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(g,C,X),_e.resetDefaultState(),v=-1,b=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function bn(C,X,re,ee){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){ee&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Ve=P.update(C),ze=C.material;ze.visible&&h.push(C,Ve,ze,re,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Fe.render.frame&&(C.skeleton.update(),C.skeleton.frame=Fe.render.frame),!C.frustumCulled||$.intersectsObject(C))){ee&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Ve=P.update(C),ze=C.material;if(Array.isArray(ze)){const Ye=Ve.groups;for(let je=0,et=Ye.length;je<et;je++){const Ze=Ye[je],at=ze[Ze.materialIndex];at&&at.visible&&h.push(C,Ve,at,re,ue.z,Ze)}}else ze.visible&&h.push(C,Ve,ze,re,ue.z,null)}}const Ae=C.children;for(let Ve=0,ze=Ae.length;Ve<ze;Ve++)bn(Ae[Ve],X,re,ee)}function xt(C,X,re,ee){const ie=C.opaque,Ae=C.transmissive,Ve=C.transparent;d.setupLightsView(re),Ae.length>0&&wn(ie,X,re),ee&&ge.viewport(y.copy(ee)),ie.length>0&&F(ie,X,re),Ae.length>0&&F(Ae,X,re),Ve.length>0&&F(Ve,X,re),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function wn(C,X,re){const ee=Ee.isWebGL2;Y===null&&(Y=new ur(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ee&&s===!0?4:0})),g.getDrawingBufferSize(le),ee?Y.setSize(le.x,le.y):Y.setSize(Eh(le.x),Eh(le.y));const ie=g.getRenderTarget();g.setRenderTarget(Y),g.clear();const Ae=g.toneMapping;g.toneMapping=0,F(C,X,re),g.toneMapping=Ae,W.updateMultisampleRenderTarget(Y),W.updateRenderTargetMipmap(Y),g.setRenderTarget(ie)}function F(C,X,re){const ee=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Ae=C.length;ie<Ae;ie++){const Ve=C[ie],ze=Ve.object,Ye=Ve.geometry,je=ee===null?Ve.material:ee,et=Ve.group;ze.layers.test(re.layers)&&he(ze,X,re,Ye,je,et)}}function he(C,X,re,ee,ie,Ae){C.onBeforeRender(g,X,re,ee,ie,Ae),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(g,X,re,ee,C,Ae),ie.transparent===!0&&ie.side===2?(ie.side=1,ie.needsUpdate=!0,g.renderBufferDirect(re,X,ee,ie,C,Ae),ie.side=0,ie.needsUpdate=!0,g.renderBufferDirect(re,X,ee,ie,C,Ae),ie.side=2):g.renderBufferDirect(re,X,ee,ie,C,Ae),C.onAfterRender(g,X,re,ee,ie,Ae)}function oe(C,X,re){X.isScene!==!0&&(X=be);const ee=V.get(C),ie=d.state.lights,Ae=d.state.shadowsArray,Ve=ie.state.version,ze=ne.getParameters(C,ie.state,Ae,X,re),Ye=ne.getProgramCacheKey(ze);let je=ee.programs;ee.environment=C.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(C.isMeshStandardMaterial?xe:te).get(C.envMap||ee.environment),je===void 0&&(C.addEventListener("dispose",Q),je=new Map,ee.programs=je);let et=je.get(Ye);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ve)return me(C,ze),et}else ze.uniforms=ne.getUniforms(C),C.onBuild(re,ze,g),C.onBeforeCompile(ze,g),et=ne.acquireProgram(ze,Ye),je.set(Ye,et),ee.uniforms=ze.uniforms;const Ze=ee.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=T.uniform),me(C,ze),ee.needsLights=qe(C),ee.lightsStateVersion=Ve,ee.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.directionalShadowMap.value=ie.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotShadowMap.value=ie.state.spotShadowMap,Ze.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ze.pointShadowMap.value=ie.state.pointShadowMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix);const at=et.getUniforms(),en=ml.seqWithValue(at.seq,Ze);return ee.currentProgram=et,ee.uniformsList=en,et}function me(C,X){const re=V.get(C);re.outputEncoding=X.outputEncoding,re.instancing=X.instancing,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Te(C,X,re,ee,ie){X.isScene!==!0&&(X=be),W.resetTextureUnits();const Ae=X.fog,Ve=ee.isMeshStandardMaterial?X.environment:null,ze=M===null?g.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:3e3,Ye=(ee.isMeshStandardMaterial?xe:te).get(ee.envMap||Ve),je=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!ee.normalMap&&!!re.attributes.tangent,Ze=!!re.morphAttributes.position,at=!!re.morphAttributes.normal,en=!!re.morphAttributes.color,fn=ee.toneMapped?g.toneMapping:0,Er=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,zn=Er!==void 0?Er.length:0,st=V.get(ee),Tr=d.state.lights;if(Z===!0&&(k===!0||C!==b)){const sn=C===b&&ee.id===v;T.setState(ee,C,sn)}let At=!1;ee.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Tr.state.version||st.outputEncoding!==ze||ie.isInstancedMesh&&st.instancing===!1||!ie.isInstancedMesh&&st.instancing===!0||ie.isSkinnedMesh&&st.skinning===!1||!ie.isSkinnedMesh&&st.skinning===!0||st.envMap!==Ye||ee.fog===!0&&st.fog!==Ae||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==T.numPlanes||st.numIntersection!==T.numIntersection)||st.vertexAlphas!==je||st.vertexTangents!==et||st.morphTargets!==Ze||st.morphNormals!==at||st.morphColors!==en||st.toneMapping!==fn||Ee.isWebGL2===!0&&st.morphTargetsCount!==zn)&&(At=!0):(At=!0,st.__version=ee.version);let pn=st.currentProgram;At===!0&&(pn=oe(ee,X,ie));let di=!1,Ps=!1,cc=!1;const $t=pn.getUniforms(),Ds=st.uniforms;if(ge.useProgram(pn.program)&&(di=!0,Ps=!0,cc=!0),ee.id!==v&&(v=ee.id,Ps=!0),di||b!==C){if($t.setValue(U,"projectionMatrix",C.projectionMatrix),Ee.logarithmicDepthBuffer&&$t.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),b!==C&&(b=C,Ps=!0,cc=!0),ee.isShaderMaterial||ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshStandardMaterial||ee.envMap){const sn=$t.map.cameraPosition;sn!==void 0&&sn.setValue(U,ue.setFromMatrixPosition(C.matrixWorld))}(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&$t.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial||ee.isShadowMaterial||ie.isSkinnedMesh)&&$t.setValue(U,"viewMatrix",C.matrixWorldInverse)}if(ie.isSkinnedMesh){$t.setOptional(U,ie,"bindMatrix"),$t.setOptional(U,ie,"bindMatrixInverse");const sn=ie.skeleton;sn&&(Ee.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),$t.setValue(U,"boneTexture",sn.boneTexture,W),$t.setValue(U,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hc=re.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0&&Ee.isWebGL2===!0)&&ce.update(ie,re,ee,pn),(Ps||st.receiveShadow!==ie.receiveShadow)&&(st.receiveShadow=ie.receiveShadow,$t.setValue(U,"receiveShadow",ie.receiveShadow)),Ps&&($t.setValue(U,"toneMappingExposure",g.toneMappingExposure),st.needsLights&&Ke(Ds,cc),Ae&&ee.fog===!0&&de.refreshFogUniforms(Ds,Ae),de.refreshMaterialUniforms(Ds,ee,I,R,Y),ml.upload(U,st.uniformsList,Ds,W)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ml.upload(U,st.uniformsList,Ds,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&$t.setValue(U,"center",ie.center),$t.setValue(U,"modelViewMatrix",ie.modelViewMatrix),$t.setValue(U,"normalMatrix",ie.normalMatrix),$t.setValue(U,"modelMatrix",ie.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const sn=ee.uniformsGroups;for(let uc=0,yx=sn.length;uc<yx;uc++)if(Ee.isWebGL2){const sd=sn[uc];Me.update(sd,pn),Me.bind(sd,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function Ke(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function qe(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,re){V.get(C.texture).__webglTexture=X,V.get(C.depthTexture).__webglTexture=re;const ee=V.get(C);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=re===void 0,ee.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const re=V.get(C);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,re=0){M=C,_=X,x=re;let ee=!0;if(C){const Ye=V.get(C);Ye.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),ee=!1):Ye.__webglFramebuffer===void 0?W.setupRenderTarget(C):Ye.__hasExternalTextures&&W.rebindTextures(C,V.get(C.texture).__webglTexture,V.get(C.depthTexture).__webglTexture)}let ie=null,Ae=!1,Ve=!1;if(C){const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture)&&(Ve=!0);const je=V.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=je[X],Ae=!0):Ee.isWebGL2&&C.samples>0&&W.useMultisampledRTT(C)===!1?ie=V.get(C).__webglMultisampledFramebuffer:ie=je,y.copy(C.viewport),E.copy(C.scissor),w=C.scissorTest}else y.copy(L).multiplyScalar(I).floor(),E.copy(B).multiplyScalar(I).floor(),w=O;if(ge.bindFramebuffer(36160,ie)&&Ee.drawBuffers&&ee&&ge.drawBuffers(C,ie),ge.viewport(y),ge.scissor(E),ge.setScissorTest(w),Ae){const Ye=V.get(C.texture);U.framebufferTexture2D(36160,36064,34069+X,Ye.__webglTexture,re)}else if(Ve){const Ye=V.get(C.texture),je=X||0;U.framebufferTextureLayer(36160,36064,Ye.__webglTexture,re||0,je)}v=-1},this.readRenderTargetPixels=function(C,X,re,ee,ie,Ae,Ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=V.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(ze=ze[Ve]),ze){ge.bindFramebuffer(36160,ze);try{const Ye=C.texture,je=Ye.format,et=Ye.type;if(je!==1023&&J.convert(je)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=et===1016&&(we.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&we.has("EXT_color_buffer_float"));if(et!==1009&&J.convert(et)!==U.getParameter(35738)&&!(et===1015&&(Ee.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ee&&re>=0&&re<=C.height-ie&&U.readPixels(X,re,ee,ie,J.convert(je),J.convert(et),Ae)}finally{const Ye=M!==null?V.get(M).__webglFramebuffer:null;ge.bindFramebuffer(36160,Ye)}}},this.copyFramebufferToTexture=function(C,X,re=0){const ee=Math.pow(2,-re),ie=Math.floor(X.image.width*ee),Ae=Math.floor(X.image.height*ee);W.setTexture2D(X,0),U.copyTexSubImage2D(3553,re,0,0,C.x,C.y,ie,Ae),ge.unbindTexture()},this.copyTextureToTexture=function(C,X,re,ee=0){const ie=X.image.width,Ae=X.image.height,Ve=J.convert(re.format),ze=J.convert(re.type);W.setTexture2D(re,0),U.pixelStorei(37440,re.flipY),U.pixelStorei(37441,re.premultiplyAlpha),U.pixelStorei(3317,re.unpackAlignment),X.isDataTexture?U.texSubImage2D(3553,ee,C.x,C.y,ie,Ae,Ve,ze,X.image.data):X.isCompressedTexture?U.compressedTexSubImage2D(3553,ee,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ve,X.mipmaps[0].data):U.texSubImage2D(3553,ee,C.x,C.y,Ve,ze,X.image),ee===0&&re.generateMipmaps&&U.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(C,X,re,ee,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=C.max.x-C.min.x+1,Ve=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ye=J.convert(ee.format),je=J.convert(ee.type);let et;if(ee.isData3DTexture)W.setTexture3D(ee,0),et=32879;else if(ee.isDataArrayTexture)W.setTexture2DArray(ee,0),et=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,ee.flipY),U.pixelStorei(37441,ee.premultiplyAlpha),U.pixelStorei(3317,ee.unpackAlignment);const Ze=U.getParameter(3314),at=U.getParameter(32878),en=U.getParameter(3316),fn=U.getParameter(3315),Er=U.getParameter(32877),zn=re.isCompressedTexture?re.mipmaps[0]:re.image;U.pixelStorei(3314,zn.width),U.pixelStorei(32878,zn.height),U.pixelStorei(3316,C.min.x),U.pixelStorei(3315,C.min.y),U.pixelStorei(32877,C.min.z),re.isDataTexture||re.isData3DTexture?U.texSubImage3D(et,ie,X.x,X.y,X.z,Ae,Ve,ze,Ye,je,zn.data):re.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(et,ie,X.x,X.y,X.z,Ae,Ve,ze,Ye,zn.data)):U.texSubImage3D(et,ie,X.x,X.y,X.z,Ae,Ve,ze,Ye,je,zn),U.pixelStorei(3314,Ze),U.pixelStorei(32878,at),U.pixelStorei(3316,en),U.pixelStorei(3315,fn),U.pixelStorei(32877,Er),ie===0&&ee.generateMipmaps&&U.generateMipmap(et),ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,ge.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class MM extends yM{}MM.prototype.isWebGL1Renderer=!0;class e3 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Re:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new j,r=[],s=[],o=[],a=new j,l=new Tt;for(let f=0;f<=e;f++){const p=f/e;r[f]=this.getTangentAt(p,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Xt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Xt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ou extends $n{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Re,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bM extends ou{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Sa=new j,Gc=new au,Hc=new au,kc=new au;class wM extends $n{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new j){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Sa.subVectors(r[0],r[1]).add(r[0]),c=Sa);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Sa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Gc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,g,m),Hc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,g,m),kc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Hc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),kc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Gc.calc(l),Hc.calc(l),kc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new j().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kd(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function SM(i,e){const t=1-i;return t*t*e}function EM(i,e){return 2*(1-i)*i*e}function TM(i,e){return i*i*e}function Js(i,e,t,n){return SM(i,e)+EM(i,t)+TM(i,n)}function AM(i,e){const t=1-i;return t*t*t*e}function LM(i,e){const t=1-i;return 3*t*t*i*e}function CM(i,e){return 3*(1-i)*i*i*e}function RM(i,e){return i*i*i*e}function Ks(i,e,t,n,r){return AM(i,e)+LM(i,t)+CM(i,n)+RM(i,r)}class Bp extends $n{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(e,r.x,s.x,o.x,a.x),Ks(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PM extends $n{constructor(e=new j,t=new j,n=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new j){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(e,r.x,s.x,o.x,a.x),Ks(e,r.y,s.y,o.y,a.y),Ks(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lu extends $n{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Re;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DM extends $n{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Op extends $n{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Js(e,r.x,s.x,o.x),Js(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IM extends $n{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Js(e,r.x,s.x,o.x),Js(e,r.y,s.y,o.y),Js(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(kd(a,l.x,c.x,u.x,h.x),kd(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var Up=Object.freeze({__proto__:null,ArcCurve:bM,CatmullRomCurve3:wM,CubicBezierCurve:Bp,CubicBezierCurve3:PM,EllipseCurve:ou,LineCurve:lu,LineCurve3:DM,QuadraticBezierCurve:Op,QuadraticBezierCurve3:IM,SplineCurve:zp});class FM extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new lu(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Up[r.type]().fromJSON(r))}return this}}class Vd extends FM{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new lu(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Op(this.currentPoint.clone(),new Re(e,t),new Re(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Bp(this.currentPoint.clone(),new Re(e,t),new Re(n,r),new Re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new ou(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gp extends Vd{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Vd().fromJSON(r))}return this}}const NM={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Hp(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=GM(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let p=t;p<r;p+=t)h=i[p],d=i[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return io(s,o,t,a,l,f),o}};function Hp(i,e,t,n,r){let s,o;if(r===JM(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Wd(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Wd(s,i[s],i[s+1],o);return o&&Wl(o,o.next)&&(so(o),o=o.next),o}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wl(t,t.next)||vt(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,r,s,o){if(!i)return;!o&&s&&$M(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?OM(i,n,r,s):BM(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zM(Fi(i),e,t),io(i,e,t,n,r,s,2)):o===2&&UM(i,e,t,n,r,s):io(Fi(i),e,t,n,r,s,1);break}}}function BM(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(as(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&vt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function OM(i,e,t,n){const r=i.prev,s=i,o=i.next;if(vt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Ah(a,l,e,t,n),d=Ah(c,u,e,t,n);let f=i.prevZ,p=i.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==i.prev&&f!==i.next&&as(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&vt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==i.prev&&p!==i.next&&as(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&vt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==i.prev&&f!==i.next&&as(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&vt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==i.prev&&p!==i.next&&as(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function zM(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Wl(r,s)&&kp(r,n,n.next,s)&&ro(r,s)&&ro(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),so(n),so(n.next),n=i=s),n=n.next}while(n!==i);return Fi(n)}function UM(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&YM(o,a)){let l=Vp(o,a);o=Fi(o,o.next),l=Fi(l,l.next),io(o,e,t,n,r,s),io(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function GM(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Hp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(XM(c));for(r.sort(HM),s=0;s<r.length;s++)kM(r[s],t),t=Fi(t,t.next);return t}function HM(i,e){return i.x-e.x}function kM(i,e){if(e=VM(i,e),e){const t=Vp(e,i);Fi(e,e.next),Fi(t,t.next)}}function VM(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&as(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),ro(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&WM(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function WM(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function $M(i,e,t,n){let r=i;do r.z===null&&(r.z=Ah(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,qM(r)}function qM(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Ah(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function XM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function as(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function YM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jM(i,e)&&(ro(i,e)&&ro(e,i)&&ZM(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Wl(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wl(i,e){return i.x===e.x&&i.y===e.y}function kp(i,e,t,n){const r=Ta(vt(i,e,t)),s=Ta(vt(i,e,n)),o=Ta(vt(t,n,i)),a=Ta(vt(t,n,e));return!!(r!==s&&o!==a||r===0&&Ea(i,t,e)||s===0&&Ea(i,n,e)||o===0&&Ea(t,i,n)||a===0&&Ea(t,e,n))}function Ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ta(i){return i>0?1:i<0?-1:0}function jM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ro(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function ZM(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vp(i,e){const t=new Lh(i.i,i.x,i.y),n=new Lh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Wd(i,e,t,n){const r=new Lh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JM(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ci{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];$d(e),qd(n,e);let o=e.length;t.forEach($d);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,qd(n,t[l]);const a=NM.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function $d(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wp extends ci{constructor(e=new Gp([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _n(r,3)),this.setAttribute("uv",new _n(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:KM;let M,v=!1,b,y,E,w;_&&(M=_.getSpacedPoints(u),v=!0,d=!1,b=_.computeFrenetFrames(u,!1),y=new j,E=new j,w=new j),d||(m=0,f=0,p=0,g=0);const S=a.extractPoints(c);let R=S.shape;const I=S.holes;if(!Ci.isClockWise(R)){R=R.reverse();for(let V=0,W=I.length;V<W;V++){const te=I[V];Ci.isClockWise(te)&&(I[V]=te.reverse())}}const z=Ci.triangulateShape(R,I),L=R;for(let V=0,W=I.length;V<W;V++){const te=I[V];R=R.concat(te)}function B(V,W,te){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().multiplyScalar(te).add(V)}const O=R.length,$=z.length;function Z(V,W,te){let xe,ae,N;const P=V.x-W.x,ne=V.y-W.y,de=te.x-V.x,G=te.y-V.y,A=P*P+ne*ne,T=P*G-ne*de;if(Math.abs(T)>Number.EPSILON){const q=Math.sqrt(A),K=Math.sqrt(de*de+G*G),ce=W.x-ne/q,fe=W.y+P/q,ye=te.x-G/K,J=te.y+de/K,_e=((ye-ce)*G-(J-fe)*de)/(P*G-ne*de);xe=ce+P*_e-V.x,ae=fe+ne*_e-V.y;const Me=xe*xe+ae*ae;if(Me<=2)return new Re(xe,ae);N=Math.sqrt(Me/2)}else{let q=!1;P>Number.EPSILON?de>Number.EPSILON&&(q=!0):P<-Number.EPSILON?de<-Number.EPSILON&&(q=!0):Math.sign(ne)===Math.sign(G)&&(q=!0),q?(xe=-ne,ae=P,N=Math.sqrt(A)):(xe=P,ae=ne,N=Math.sqrt(A/2))}return new Re(xe/N,ae/N)}const k=[];for(let V=0,W=L.length,te=W-1,xe=V+1;V<W;V++,te++,xe++)te===W&&(te=0),xe===W&&(xe=0),k[V]=Z(L[V],L[te],L[xe]);const Y=[];let se,le=k.concat();for(let V=0,W=I.length;V<W;V++){const te=I[V];se=[];for(let xe=0,ae=te.length,N=ae-1,P=xe+1;xe<ae;xe++,N++,P++)N===ae&&(N=0),P===ae&&(P=0),se[xe]=Z(te[xe],te[N],te[P]);Y.push(se),le=le.concat(se)}for(let V=0;V<m;V++){const W=V/m,te=f*Math.cos(W*Math.PI/2),xe=p*Math.sin(W*Math.PI/2)+g;for(let ae=0,N=L.length;ae<N;ae++){const P=B(L[ae],k[ae],xe);Ue(P.x,P.y,-te)}for(let ae=0,N=I.length;ae<N;ae++){const P=I[ae];se=Y[ae];for(let ne=0,de=P.length;ne<de;ne++){const G=B(P[ne],se[ne],xe);Ue(G.x,G.y,-te)}}}const ue=p+g;for(let V=0;V<O;V++){const W=d?B(R[V],le[V],ue):R[V];v?(E.copy(b.normals[0]).multiplyScalar(W.x),y.copy(b.binormals[0]).multiplyScalar(W.y),w.copy(M[0]).add(E).add(y),Ue(w.x,w.y,w.z)):Ue(W.x,W.y,0)}for(let V=1;V<=u;V++)for(let W=0;W<O;W++){const te=d?B(R[W],le[W],ue):R[W];v?(E.copy(b.normals[V]).multiplyScalar(te.x),y.copy(b.binormals[V]).multiplyScalar(te.y),w.copy(M[V]).add(E).add(y),Ue(w.x,w.y,w.z)):Ue(te.x,te.y,h/u*V)}for(let V=m-1;V>=0;V--){const W=V/m,te=f*Math.cos(W*Math.PI/2),xe=p*Math.sin(W*Math.PI/2)+g;for(let ae=0,N=L.length;ae<N;ae++){const P=B(L[ae],k[ae],xe);Ue(P.x,P.y,h+te)}for(let ae=0,N=I.length;ae<N;ae++){const P=I[ae];se=Y[ae];for(let ne=0,de=P.length;ne<de;ne++){const G=B(P[ne],se[ne],xe);v?Ue(G.x,G.y+M[u-1].y,M[u-1].x+te):Ue(G.x,G.y,h+te)}}}be(),Se();function be(){const V=r.length/3;if(d){let W=0,te=O*W;for(let xe=0;xe<$;xe++){const ae=z[xe];we(ae[2]+te,ae[1]+te,ae[0]+te)}W=u+m*2,te=O*W;for(let xe=0;xe<$;xe++){const ae=z[xe];we(ae[0]+te,ae[1]+te,ae[2]+te)}}else{for(let W=0;W<$;W++){const te=z[W];we(te[2],te[1],te[0])}for(let W=0;W<$;W++){const te=z[W];we(te[0]+O*u,te[1]+O*u,te[2]+O*u)}}n.addGroup(V,r.length/3-V,0)}function Se(){const V=r.length/3;let W=0;U(L,W),W+=L.length;for(let te=0,xe=I.length;te<xe;te++){const ae=I[te];U(ae,W),W+=ae.length}n.addGroup(V,r.length/3-V,1)}function U(V,W){let te=V.length;for(;--te>=0;){const xe=te;let ae=te-1;ae<0&&(ae=V.length-1);for(let N=0,P=u+m*2;N<P;N++){const ne=O*N,de=O*(N+1),G=W+xe+ne,A=W+ae+ne,T=W+ae+de,q=W+xe+de;Ee(G,A,T,q)}}}function Ue(V,W,te){l.push(V),l.push(W),l.push(te)}function we(V,W,te){ge(V),ge(W),ge(te);const xe=r.length/3,ae=x.generateTopUV(n,r,xe-3,xe-2,xe-1);Fe(ae[0]),Fe(ae[1]),Fe(ae[2])}function Ee(V,W,te,xe){ge(V),ge(W),ge(xe),ge(W),ge(te),ge(xe);const ae=r.length/3,N=x.generateSideWallUV(n,r,ae-6,ae-3,ae-2,ae-1);Fe(N[0]),Fe(N[1]),Fe(N[3]),Fe(N[1]),Fe(N[2]),Fe(N[3])}function ge(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function Fe(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Up[r.type]().fromJSON(r)),new Wp(n,e.options)}}const KM={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Re(s,o),new Re(a,l),new Re(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],g=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-h),new Re(d,1-p),new Re(g,1-_)]:[new Re(a,1-l),new Re(u,1-h),new Re(f,1-p),new Re(m,1-_)]}};function QM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $p extends ci{constructor(e=new Gp([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _n(r,3)),this.setAttribute("normal",new _n(s,3)),this.setAttribute("uv",new _n(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,_=p.length;m<_;m++){const x=p[m];Ci.isClockWise(x)===!0&&(p[m]=x.reverse())}const g=Ci.triangulateShape(f,p);for(let m=0,_=p.length;m<_;m++){const x=p[m];f=f.concat(x)}for(let m=0,_=f.length;m<_;m++){const x=f[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,_=g.length;m<_;m++){const x=g[m],M=x[0]+h,v=x[1]+h,b=x[2]+h;n.push(M,v,b),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return eb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new $p(n,e.curveSegments)}}function eb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class t3 extends Go{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class qp extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xd=new Tt,Yd=new j,jd=new j;class tb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zd=new Tt,Bs=new j,Vc=new j;class nb extends tb{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),r.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd)}}class n3 extends qp{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i3 extends qp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);var Jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ib(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var cu={};const hu="126",rb={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sb={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xp=0,Ch=1,Yp=2,ob=3,ab=0,uu=1,jp=2,ls=3,bs=0,Ct=1,ko=2,du=1,lb=2,si=0,hs=1,Rh=2,Ph=3,Dh=4,Zp=5,ir=100,Jp=101,Kp=102,Ih=103,Fh=104,Qp=200,em=201,tm=202,nm=203,fu=204,pu=205,im=206,rm=207,sm=208,om=209,am=210,lm=0,cm=1,hm=2,vl=3,um=4,dm=5,fm=6,pm=7,Vo=0,mm=1,gm=2,cr=0,xm=1,_m=2,vm=3,ym=4,Mm=5,$l=300,Wo=301,$o=302,yl=303,Ml=304,ws=306,qo=307,oo=1e3,Yt=1001,ao=1002,Dt=1003,bl=1004,cb=1004,wl=1005,hb=1005,It=1006,mu=1007,ub=1007,Ss=1008,db=1008,Es=1009,bm=1010,wm=1011,lo=1012,Sm=1013,Qs=1014,ri=1015,co=1016,Em=1017,Tm=1018,Am=1019,us=1020,Lm=1021,Ri=1022,hn=1023,Cm=1024,Rm=1025,Pm=hn,hr=1026,ps=1027,Dm=1028,Im=1029,Fm=1030,Nm=1031,Bm=1032,Om=1033,Nh=33776,Bh=33777,Oh=33778,zh=33779,Uh=35840,Gh=35841,Hh=35842,kh=35843,zm=36196,Vh=37492,Wh=37496,Um=37808,Gm=37809,Hm=37810,km=37811,Vm=37812,Wm=37813,$m=37814,qm=37815,Xm=37816,Ym=37817,jm=37818,Zm=37819,Jm=37820,Km=37821,Qm=36492,eg=37840,tg=37841,ng=37842,ig=37843,rg=37844,sg=37845,og=37846,ag=37847,lg=37848,cg=37849,hg=37850,ug=37851,dg=37852,fg=37853,pg=2200,mg=2201,gg=2202,ho=2300,uo=2301,gl=2302,sr=2400,or=2401,fo=2402,ql=2500,gu=2501,xg=0,fb=1,pb=2,Jt=3e3,Xo=3001,Xl=3007,Yl=3002,_g=3003,xu=3004,_u=3005,vu=3006,vg=3200,yg=3201,vr=0,Mg=1,mb=0,xl=7680,gb=7681,xb=7682,_b=7683,vb=34055,yb=34056,Mb=5386,bb=512,wb=513,Sb=514,Eb=515,Tb=516,Ab=517,Lb=518,bg=519,Yo=35044,fr=35048,Cb=35040,Rb=35045,Pb=35049,Db=35041,Ib=35046,Fb=35050,Nb=35042,Bb="100",$h="300 es";function hi(){}Object.assign(hi.prototype,{addEventListener:function(i,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[i]===void 0&&(t[i]=[]),t[i].indexOf(e)===-1&&t[i].push(e)},hasEventListener:function(i,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[i]!==void 0&&t[i].indexOf(e)!==-1},removeEventListener:function(i,e){if(this._listeners===void 0)return;const n=this._listeners[i];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}},dispatchEvent:function(i){if(this._listeners===void 0)return;const t=this._listeners[i.type];if(t!==void 0){i.target=this;const n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,i)}}});const Gt=[];for(let i=0;i<256;i++)Gt[i]=(i<16?"0":"")+i.toString(16);let Aa=1234567;const Xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toUpperCase()},clamp:function(i,e,t){return Math.max(e,Math.min(t,i))},euclideanModulo:function(i,e){return(i%e+e)%e},mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},lerp:function(i,e,t){return(1-t)*i+t*e},damp:function(i,e,t,n){return Xe.lerp(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Xe.euclideanModulo(i,e*2)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){return i!==void 0&&(Aa=i%2147483647),Aa=Aa*16807%2147483647,(Aa-1)/2147483646},degToRad:function(i){return i*Xe.DEG2RAD},radToDeg:function(i){return i*Xe.RAD2DEG},isPowerOfTwo:function(i){return(i&i-1)===0&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class ve{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}ve.prototype.isVector2=!0;class Ft{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=r[0],m=r[3],_=r[6],x=r[1],M=r[4],v=r[7],b=r[2],y=r[5],E=r[8];return s[0]=o*g+a*x+l*b,s[3]=o*m+a*M+l*y,s[6]=o*_+a*v+l*E,s[1]=c*g+u*x+h*b,s[4]=c*m+u*M+h*y,s[7]=c*_+u*v+h*E,s[2]=d*g+f*x+p*b,s[5]=d*m+f*M+p*y,s[8]=d*_+f*v+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Ft.prototype.isMatrix3=!0;let Hr;const yr={getDataURL:function(i){if(/^data:/i.test(i.src)||typeof HTMLCanvasElement>"u")return i.src;let e;if(i instanceof HTMLCanvasElement)e=i;else{Hr===void 0&&(Hr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Hr.width=i.width,Hr.height=i.height;const t=Hr.getContext("2d");i instanceof ImageData?t.putImageData(i,0,0):t.drawImage(i,0,0,i.width,i.height),e=Hr}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let Ob=0;class Nt extends hi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Yt,r=Yt,s=It,o=Ss,a=hn,l=Es,c=1,u=Jt){super(),Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Xe.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Xe.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Nt.DEFAULT_IMAGE=void 0;Nt.DEFAULT_MAPPING=$l;Nt.prototype.isTexture=!0;function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yr.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ot{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,b=(_+1)/2,y=(u+d)/4,E=(h+g)/4,w=(p+m)/4;return M>v&&M>b?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=y/n,s=E/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=y/r,s=w/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=E/s,r=w/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}ot.prototype.isVector4=!0;class oi extends hi{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),n=n||{},this.texture=new Nt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}oi.prototype.isWebGLRenderTarget=!0;class wg extends oi{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}wg.prototype.isWebGLMultisampleRenderTarget=!0;class zt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return n.copy(e).slerp(t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==p){let m=1-a;const _=l*d+c*f+u*p+h*g,x=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const b=Math.sqrt(M),y=Math.atan2(b,_*x);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+p*v,h=h*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}zt.prototype.isQuaternion=!0;class D{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe.clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}D.prototype.isVector3=!0;const $c=new D,Kd=new zt;class rn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Os.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new D),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new D),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox),qc.applyMatrix4(e.matrixWorld),this.union(qc));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new D),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Os),Os.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),La.subVectors(this.max,zs),kr.subVectors(e.a,zs),Vr.subVectors(e.b,zs),Wr.subVectors(e.c,zs),yi.subVectors(Vr,kr),Mi.subVectors(Wr,Vr),$i.subVectors(kr,Wr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!Xc(t,kr,Vr,Wr,La)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,kr,Vr,Wr,La))?!1:(Ca.crossVectors(yi,Mi),t=[Ca.x,Ca.y,Ca.z],Xc(t,kr,Vr,Wr,La))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new D),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Os.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Os).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}rn.prototype.isBox3=!0;const Jn=[new D,new D,new D,new D,new D,new D,new D,new D],Os=new D,qc=new rn,kr=new D,Vr=new D,Wr=new D,yi=new D,Mi=new D,$i=new D,zs=new D,La=new D,Ca=new D,qi=new D;function Xc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qi.fromArray(i,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zb=new rn;class Gi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zb.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new D),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new rn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new D,Yc=new D,Ra=new D,bi=new D,jc=new D,Pa=new D,Zc=new D;class Hi{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new D),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new D),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yc.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Yc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=bi.dot(this.direction),l=-bi.dot(Ra),c=bi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ra).multiplyScalar(d).add(Yc),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,r,s){jc.subVectors(t,e),Pa.subVectors(n,e),Zc.crossVectors(jc,Pa);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Pa.crossVectors(bi,Pa));if(l<0)return null;const c=a*this.direction.dot(jc.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Zc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Gb)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),wi.crossVectors(n,ln),wi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),wi.crossVectors(n,ln)),wi.normalize(),Da.crossVectors(ln,wi),r[0]=wi.x,r[4]=Da.x,r[8]=ln.x,r[1]=wi.y,r[5]=Da.y,r[9]=ln.y,r[2]=wi.z,r[6]=Da.z,r[10]=ln.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],x=n[3],M=n[7],v=n[11],b=n[15],y=r[0],E=r[4],w=r[8],S=r[12],R=r[1],I=r[5],H=r[9],z=r[13],L=r[2],B=r[6],O=r[10],$=r[14],Z=r[3],k=r[7],Y=r[11],se=r[15];return s[0]=o*y+a*R+l*L+c*Z,s[4]=o*E+a*I+l*B+c*k,s[8]=o*w+a*H+l*O+c*Y,s[12]=o*S+a*z+l*$+c*se,s[1]=u*y+h*R+d*L+f*Z,s[5]=u*E+h*I+d*B+f*k,s[9]=u*w+h*H+d*O+f*Y,s[13]=u*S+h*z+d*$+f*se,s[2]=p*y+g*R+m*L+_*Z,s[6]=p*E+g*I+m*B+_*k,s[10]=p*w+g*H+m*O+_*Y,s[14]=p*S+g*z+m*$+_*se,s[3]=x*y+M*R+v*L+b*Z,s[7]=x*E+M*I+v*B+b*k,s[11]=x*w+M*H+v*O+b*Y,s[15]=x*S+M*z+v*$+b*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15];return p*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],x=h*m*c-g*d*c+g*l*f-a*m*f-h*l*_+a*d*_,M=p*d*c-u*m*c-p*l*f+o*m*f+u*l*_-o*d*_,v=u*g*c-p*h*c+p*a*f-o*g*f-u*a*_+o*h*_,b=p*h*l-u*g*l-p*a*d+o*g*d+u*a*m-o*h*m,y=t*x+n*M+r*v+s*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=x*E,e[1]=(g*d*s-h*m*s-g*r*f+n*m*f+h*r*_-n*d*_)*E,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*_+n*l*_)*E,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*s-p*d*s+p*r*f-t*m*f-u*r*_+t*d*_)*E,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*_-t*l*_)*E,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*E,e[8]=v*E,e[9]=(p*h*s-u*g*s-p*n*f+t*g*f+u*n*_-t*h*_)*E,e[10]=(o*g*s-p*a*s+p*n*c-t*g*c-o*n*_+t*a*_)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=b*E,e[13]=(u*g*r-p*h*r+p*n*d-t*g*d-u*n*m+t*h*m)*E,e[14]=(p*a*r-o*g*r-p*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,g=o*u,m=o*h,_=a*h,x=l*c,M=l*u,v=l*h,b=n.x,y=n.y,E=n.z;return r[0]=(1-(g+_))*b,r[1]=(f+v)*b,r[2]=(p-M)*b,r[3]=0,r[4]=(f-v)*y,r[5]=(1-(d+_))*y,r[6]=(m+x)*y,r[7]=0,r[8]=(p+M)*E,r[9]=(m-x)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,d=(n+r)*c,f=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}He.prototype.isMatrix4=!0;const $r=new D,Ln=new He,Ub=new D(0,0,0),Gb=new D(1,1,1),wi=new D,Da=new D,ln=new D,Qd=new He,ef=new zt;class Mr{constructor(e=0,t=0,n=0,r=Mr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const r=Xe.clamp,s=e.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new D(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Mr.prototype.isEuler=!0;Mr.DefaultOrder="XYZ";Mr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yu{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Hb=0;const tf=new D,qr=new zt,Qn=new He,Ia=new D,Us=new D,kb=new D,Vb=new zt,nf=new D(1,0,0),rf=new D(0,1,0),sf=new D(0,0,1),Wb={type:"added"},of={type:"removed"};function We(){Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const i=new D,e=new Mr,t=new zt,n=new D(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:i},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new He},normalMatrix:{value:new Ft}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}We.DefaultUp=new D(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype=Object.assign(Object.create(hi.prototype),{constructor:We,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(i){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(i),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(i){return this.quaternion.premultiply(i),this},setRotationFromAxisAngle:function(i,e){this.quaternion.setFromAxisAngle(i,e)},setRotationFromEuler:function(i){this.quaternion.setFromEuler(i,!0)},setRotationFromMatrix:function(i){this.quaternion.setFromRotationMatrix(i)},setRotationFromQuaternion:function(i){this.quaternion.copy(i)},rotateOnAxis:function(i,e){return qr.setFromAxisAngle(i,e),this.quaternion.multiply(qr),this},rotateOnWorldAxis:function(i,e){return qr.setFromAxisAngle(i,e),this.quaternion.premultiply(qr),this},rotateX:function(i){return this.rotateOnAxis(nf,i)},rotateY:function(i){return this.rotateOnAxis(rf,i)},rotateZ:function(i){return this.rotateOnAxis(sf,i)},translateOnAxis:function(i,e){return tf.copy(i).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this},translateX:function(i){return this.translateOnAxis(nf,i)},translateY:function(i){return this.translateOnAxis(rf,i)},translateZ:function(i){return this.translateOnAxis(sf,i)},localToWorld:function(i){return i.applyMatrix4(this.matrixWorld)},worldToLocal:function(i){return i.applyMatrix4(Qn.copy(this.matrixWorld).invert())},lookAt:function(i,e,t){i.isVector3?Ia.copy(i):Ia.set(i,e,t);const n=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Us,Ia,this.up):Qn.lookAt(Ia,Us,this.up),this.quaternion.setFromRotationMatrix(Qn),n&&(Qn.extractRotation(n.matrixWorld),qr.setFromRotationMatrix(Qn),this.quaternion.premultiply(qr.invert()))},add:function(i){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return i===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",i),this):(i&&i.isObject3D?(i.parent!==null&&i.parent.remove(i),i.parent=this,this.children.push(i),i.dispatchEvent(Wb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",i),this)},remove:function(i){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(i);return e!==-1&&(i.parent=null,this.children.splice(e,1),i.dispatchEvent(of)),this},clear:function(){for(let i=0;i<this.children.length;i++){const e=this.children[i];e.parent=null,e.dispatchEvent(of)}return this.children.length=0,this},attach:function(i){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),i.parent!==null&&(i.parent.updateWorldMatrix(!0,!1),Qn.multiply(i.parent.matrixWorld)),i.applyMatrix4(Qn),this.add(i),i.updateWorldMatrix(!1,!0),this},getObjectById:function(i){return this.getObjectByProperty("id",i)},getObjectByName:function(i){return this.getObjectByProperty("name",i)},getObjectByProperty:function(i,e){if(this[i]===e)return this;for(let t=0,n=this.children.length;t<n;t++){const s=this.children[t].getObjectByProperty(i,e);if(s!==void 0)return s}},getWorldPosition:function(i){return i===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),i=new D),this.updateWorldMatrix(!0,!1),i.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(i){return i===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),i=new zt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,i,kb),i},getWorldScale:function(i){return i===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),i=new D),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vb,i),i},getWorldDirection:function(i){i===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),i=new D),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return i.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(i){i(this);const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].traverse(i)},traverseVisible:function(i){if(this.visible===!1)return;i(this);const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].traverseVisible(i)},traverseAncestors:function(i){const e=this.parent;e!==null&&(i(e),e.traverseAncestors(i))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(i){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,i=!0);const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateMatrixWorld(i)},updateWorldMatrix:function(i,e){const t=this.parent;if(i===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}},toJSON:function(i){const e=i===void 0||typeof i=="string",t={};e&&(i={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(i)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(i.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const u=a[l];r(i.shapes,u)}else r(i.shapes,a)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(i.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(r(i.materials,this.material[a]));n.material=o}else n.material=r(i.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(i).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];n.animations.push(r(i.animations,a))}}if(e){const o=s(i.geometries),a=s(i.materials),l=s(i.textures),c=s(i.images),u=s(i.shapes),h=s(i.skeletons),d=s(i.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d)}return t.object=n,t;function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}},clone:function(i){return new this.constructor().copy(this,i)},copy:function(i,e=!0){if(this.name=i.name,this.up.copy(i.up),this.position.copy(i.position),this.rotation.order=i.rotation.order,this.quaternion.copy(i.quaternion),this.scale.copy(i.scale),this.matrix.copy(i.matrix),this.matrixWorld.copy(i.matrixWorld),this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrixWorldNeedsUpdate=i.matrixWorldNeedsUpdate,this.layers.mask=i.layers.mask,this.visible=i.visible,this.castShadow=i.castShadow,this.receiveShadow=i.receiveShadow,this.frustumCulled=i.frustumCulled,this.renderOrder=i.renderOrder,this.userData=JSON.parse(JSON.stringify(i.userData)),e===!0)for(let t=0;t<i.children.length;t++){const n=i.children[t];this.add(n.clone())}return this}});const Jc=new D,$b=new D,qb=new Ft;class Dn{constructor(e=new D(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Jc.subVectors(n,t).cross($b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new D),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new D);const n=e.delta(Jc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new D),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qb.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Dn.prototype.isPlane=!0;const Cn=new D,ei=new D,Kc=new D,ti=new D,Xr=new D,Yr=new D,af=new D,Qc=new D,eh=new D,th=new D;class Et{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new D),r.subVectors(n,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Cn.subVectors(r,t),ei.subVectors(n,t),Kc.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ei),l=Cn.dot(Kc),c=ei.dot(ei),u=ei.dot(Kc),h=o*c-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new D),h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ti),l.set(0,0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,t,n,r){return Cn.subVectors(n,t),ei.subVectors(e,t),Cn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new D),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Et.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Dn),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Et.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Et.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Et.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Et.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new D);const n=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,n),Yr.subVectors(s,n),Qc.subVectors(e,n);const l=Xr.dot(Qc),c=Yr.dot(Qc);if(l<=0&&c<=0)return t.copy(n);eh.subVectors(e,r);const u=Xr.dot(eh),h=Yr.dot(eh);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xr,o);th.subVectors(e,s);const f=Xr.dot(th),p=Yr.dot(th);if(p>=0&&f<=p)return t.copy(s);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Yr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return af.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(af,a);const _=1/(m+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xb=0;function mt(){Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=hs,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fu,this.blendDst=pu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}mt.prototype=Object.assign(Object.create(hi.prototype),{constructor:mt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(i){if(i!==void 0)for(const e in i){const t=i[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===du;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(i){const e=i===void 0||typeof i=="string";e&&(i={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(i).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(i).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(i).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(i).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(i).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(i).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(i).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(i).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(i).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(i).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(i).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(i).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(i).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(i).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(i).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(i).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(i).uuid),this.size!==void 0&&(t.size=this.size),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(t.blending=this.blending),this.side!==bs&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=n(i.textures),s=n(i.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(i){this.name=i.name,this.fog=i.fog,this.blending=i.blending,this.side=i.side,this.vertexColors=i.vertexColors,this.opacity=i.opacity,this.transparent=i.transparent,this.blendSrc=i.blendSrc,this.blendDst=i.blendDst,this.blendEquation=i.blendEquation,this.blendSrcAlpha=i.blendSrcAlpha,this.blendDstAlpha=i.blendDstAlpha,this.blendEquationAlpha=i.blendEquationAlpha,this.depthFunc=i.depthFunc,this.depthTest=i.depthTest,this.depthWrite=i.depthWrite,this.stencilWriteMask=i.stencilWriteMask,this.stencilFunc=i.stencilFunc,this.stencilRef=i.stencilRef,this.stencilFuncMask=i.stencilFuncMask,this.stencilFail=i.stencilFail,this.stencilZFail=i.stencilZFail,this.stencilZPass=i.stencilZPass,this.stencilWrite=i.stencilWrite;const e=i.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let r=0;r!==n;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=i.clipIntersection,this.clipShadows=i.clipShadows,this.shadowSide=i.shadowSide,this.colorWrite=i.colorWrite,this.precision=i.precision,this.polygonOffset=i.polygonOffset,this.polygonOffsetFactor=i.polygonOffsetFactor,this.polygonOffsetUnits=i.polygonOffsetUnits,this.dithering=i.dithering,this.alphaTest=i.alphaTest,this.premultipliedAlpha=i.premultipliedAlpha,this.visible=i.visible,this.toneMapped=i.toneMapped,this.userData=JSON.parse(JSON.stringify(i.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(mt.prototype,"needsUpdate",{set:function(i){i===!0&&this.version++}});const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function nh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ih(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class Be{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Xe.euclideanModulo(e,1),t=Xe.clamp(t,0,1),n=Xe.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=nh(s,r,e+1/3),this.g=nh(s,r,e),this.b=nh(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Sg[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ih(e.r),this.g=ih(e.g),this.b=ih(e.b),this}copyLinearToSRGB(e){return this.r=rh(e.r),this.g=rh(e.g),this.b=rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Fa);const n=Xe.lerp(Rn.h,Fa.h,t),r=Xe.lerp(Rn.s,Fa.s,t),s=Xe.lerp(Rn.l,Fa.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Be.NAMES=Sg;Be.prototype.isColor=!0;Be.prototype.r=1;Be.prototype.g=1;Be.prototype.b=1;class ui extends mt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}ui.prototype.isMeshBasicMaterial=!0;const ht=new D,Na=new ve;function $e(i,e,t){if(Array.isArray(i))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=i,this.itemSize=e,this.count=i!==void 0?i.length/e:0,this.normalized=t===!0,this.usage=Yo,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty($e.prototype,"needsUpdate",{set:function(i){i===!0&&this.version++}});Object.assign($e.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(i){return this.usage=i,this},copy:function(i){return this.name=i.name,this.array=new i.array.constructor(i.array),this.itemSize=i.itemSize,this.count=i.count,this.normalized=i.normalized,this.usage=i.usage,this},copyAt:function(i,e,t){i*=this.itemSize,t*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[i+n]=e.array[t+n];return this},copyArray:function(i){return this.array.set(i),this},copyColorsArray:function(i){const e=this.array;let t=0;for(let n=0,r=i.length;n<r;n++){let s=i[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),s=new Be),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(i){const e=this.array;let t=0;for(let n=0,r=i.length;n<r;n++){let s=i[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),s=new ve),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(i){const e=this.array;let t=0;for(let n=0,r=i.length;n<r;n++){let s=i[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),s=new D),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(i){const e=this.array;let t=0;for(let n=0,r=i.length;n<r;n++){let s=i[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),s=new ot),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(i){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(i),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ht.fromBufferAttribute(this,e),ht.applyMatrix3(i),this.setXYZ(e,ht.x,ht.y,ht.z);return this},applyMatrix4:function(i){for(let e=0,t=this.count;e<t;e++)ht.x=this.getX(e),ht.y=this.getY(e),ht.z=this.getZ(e),ht.applyMatrix4(i),this.setXYZ(e,ht.x,ht.y,ht.z);return this},applyNormalMatrix:function(i){for(let e=0,t=this.count;e<t;e++)ht.x=this.getX(e),ht.y=this.getY(e),ht.z=this.getZ(e),ht.applyNormalMatrix(i),this.setXYZ(e,ht.x,ht.y,ht.z);return this},transformDirection:function(i){for(let e=0,t=this.count;e<t;e++)ht.x=this.getX(e),ht.y=this.getY(e),ht.z=this.getZ(e),ht.transformDirection(i),this.setXYZ(e,ht.x,ht.y,ht.z);return this},set:function(i,e=0){return this.array.set(i,e),this},getX:function(i){return this.array[i*this.itemSize]},setX:function(i,e){return this.array[i*this.itemSize]=e,this},getY:function(i){return this.array[i*this.itemSize+1]},setY:function(i,e){return this.array[i*this.itemSize+1]=e,this},getZ:function(i){return this.array[i*this.itemSize+2]},setZ:function(i,e){return this.array[i*this.itemSize+2]=e,this},getW:function(i){return this.array[i*this.itemSize+3]},setW:function(i,e){return this.array[i*this.itemSize+3]=e,this},setXY:function(i,e,t){return i*=this.itemSize,this.array[i+0]=e,this.array[i+1]=t,this},setXYZ:function(i,e,t,n){return i*=this.itemSize,this.array[i+0]=e,this.array[i+1]=t,this.array[i+2]=n,this},setXYZW:function(i,e,t,n,r){return i*=this.itemSize,this.array[i+0]=e,this.array[i+1]=t,this.array[i+2]=n,this.array[i+3]=r,this},onUpload:function(i){return this.onUploadCallback=i,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function po(i,e,t){$e.call(this,new Int8Array(i),e,t)}po.prototype=Object.create($e.prototype);po.prototype.constructor=po;function mo(i,e,t){$e.call(this,new Uint8Array(i),e,t)}mo.prototype=Object.create($e.prototype);mo.prototype.constructor=mo;function go(i,e,t){$e.call(this,new Uint8ClampedArray(i),e,t)}go.prototype=Object.create($e.prototype);go.prototype.constructor=go;function xo(i,e,t){$e.call(this,new Int16Array(i),e,t)}xo.prototype=Object.create($e.prototype);xo.prototype.constructor=xo;function pr(i,e,t){$e.call(this,new Uint16Array(i),e,t)}pr.prototype=Object.create($e.prototype);pr.prototype.constructor=pr;function _o(i,e,t){$e.call(this,new Int32Array(i),e,t)}_o.prototype=Object.create($e.prototype);_o.prototype.constructor=_o;function mr(i,e,t){$e.call(this,new Uint32Array(i),e,t)}mr.prototype=Object.create($e.prototype);mr.prototype.constructor=mr;function vo(i,e,t){$e.call(this,new Uint16Array(i),e,t)}vo.prototype=Object.create($e.prototype);vo.prototype.constructor=vo;vo.prototype.isFloat16BufferAttribute=!0;function Oe(i,e,t){$e.call(this,new Float32Array(i),e,t)}Oe.prototype=Object.create($e.prototype);Oe.prototype.constructor=Oe;function yo(i,e,t){$e.call(this,new Float64Array(i),e,t)}yo.prototype=Object.create($e.prototype);yo.prototype.constructor=yo;function Eg(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}const Yb={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function js(i,e){return new Yb[i](e)}let jb=0;const Un=new He,sh=new We,jr=new D,cn=new rn,Gs=new rn,Ot=new D;function ke(){Object.defineProperty(this,"id",{value:jb++}),this.uuid=Xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}ke.prototype=Object.assign(Object.create(hi.prototype),{constructor:ke,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(i){return Array.isArray(i)?this.index=new(Eg(i)>65535?mr:pr)(i,1):this.index=i,this},getAttribute:function(i){return this.attributes[i]},setAttribute:function(i,e){return this.attributes[i]=e,this},deleteAttribute:function(i){return delete this.attributes[i],this},hasAttribute:function(i){return this.attributes[i]!==void 0},addGroup:function(i,e,t=0){this.groups.push({start:i,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(i,e){this.drawRange.start=i,this.drawRange.count=e},applyMatrix4:function(i){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(i),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new Ft().getNormalMatrix(i);t.applyNormalMatrix(r),t.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(i),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(i){return Un.makeRotationX(i),this.applyMatrix4(Un),this},rotateY:function(i){return Un.makeRotationY(i),this.applyMatrix4(Un),this},rotateZ:function(i){return Un.makeRotationZ(i),this.applyMatrix4(Un),this},translate:function(i,e,t){return Un.makeTranslation(i,e,t),this.applyMatrix4(Un),this},scale:function(i,e,t){return Un.makeScale(i,e,t),this.applyMatrix4(Un),this},lookAt:function(i){return sh.lookAt(i),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this},setFromPoints:function(i){const e=[];for(let t=0,n=i.length;t<n;t++){const r=i[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new rn);const i=this.attributes.position,e=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(i!==void 0){if(this.boundingBox.setFromBufferAttribute(i),e)for(let t=0,n=e.length;t<n;t++){const r=e[t];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const i=this.attributes.position,e=this.morphAttributes.position;if(i&&i.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(i){const t=this.boundingSphere.center;if(cn.setFromBufferAttribute(i),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(cn.min,Gs.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,Gs.max),cn.expandByPoint(Ot)):(cn.expandByPoint(Gs.min),cn.expandByPoint(Gs.max))}cn.getCenter(t);let n=0;for(let r=0,s=i.count;r<s;r++)Ot.fromBufferAttribute(i,r),n=Math.max(n,t.distanceToSquared(Ot));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Ot.fromBufferAttribute(o,l),a&&(jr.fromBufferAttribute(i,l),Ot.add(jr)),n=Math.max(n,t.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const i=this.index,e=this.attributes;if(i===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=i.array,n=e.position.array,r=e.normal.array,s=e.uv.array,o=n.length/3;e.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const a=e.tangent.array,l=[],c=[];for(let S=0;S<o;S++)l[S]=new D,c[S]=new D;const u=new D,h=new D,d=new D,f=new ve,p=new ve,g=new ve,m=new D,_=new D;function x(S,R,I){u.fromArray(n,S*3),h.fromArray(n,R*3),d.fromArray(n,I*3),f.fromArray(s,S*2),p.fromArray(s,R*2),g.fromArray(s,I*2),h.sub(u),d.sub(u),p.sub(f),g.sub(f);const H=1/(p.x*g.y-g.x*p.y);!isFinite(H)||(m.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(H),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(H),l[S].add(m),l[R].add(m),l[I].add(m),c[S].add(_),c[R].add(_),c[I].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.length}]);for(let S=0,R=M.length;S<R;++S){const I=M[S],H=I.start,z=I.count;for(let L=H,B=H+z;L<B;L+=3)x(t[L+0],t[L+1],t[L+2])}const v=new D,b=new D,y=new D,E=new D;function w(S){y.fromArray(r,S*3),E.copy(y);const R=l[S];v.copy(R),v.sub(y.multiplyScalar(y.dot(R))).normalize(),b.crossVectors(E,R);const H=b.dot(c[S])<0?-1:1;a[S*4]=v.x,a[S*4+1]=v.y,a[S*4+2]=v.z,a[S*4+3]=H}for(let S=0,R=M.length;S<R;++S){const I=M[S],H=I.start,z=I.count;for(let L=H,B=H+z;L<B;L+=3)w(t[L+0]),w(t[L+1]),w(t[L+2])}},computeVertexNormals:function(){const i=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const n=new D,r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D;if(i)for(let h=0,d=i.count;h<d;h+=3){const f=i.getX(h+0),p=i.getX(h+1),g=i.getX(h+2);n.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),c.subVectors(s,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),l.fromBufferAttribute(t,g),o.add(c),a.add(c),l.add(c),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(p,a.x,a.y,a.z),t.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(n,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(i,e){if(!(i&&i.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",i);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const n in t){if(i.attributes[n]===void 0)continue;const s=t[n].array,o=i.attributes[n],a=o.array,l=o.itemSize*e,c=Math.min(a.length,s.length-l);for(let u=0,h=l;u<c;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const i=this.attributes.normal;for(let e=0,t=i.count;e<t;e++)Ot.fromBufferAttribute(i,e),Ot.normalize(),i.setXYZ(e,Ot.x,Ot.y,Ot.z)},toNonIndexed:function(){function i(o,a){const l=o.array,c=o.itemSize,u=o.normalized,h=new l.constructor(a.length*c);let d=0,f=0;for(let p=0,g=a.length;p<g;p++){d=a[p]*c;for(let m=0;m<c;m++)h[f++]=l[d++]}return new $e(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,t=this.index.array,n=this.attributes;for(const o in n){const a=n[o],l=i(a,t);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const a=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const h=l[c],d=i(h,t);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const l=s[o];e.addGroup(l.start,l.count,l.materialIndex)}return e},toJSON:function(){const i={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),Object.keys(this.userData).length>0&&(i.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(i[l]=a[l]);return i}i.data={attributes:{}};const e=this.index;e!==null&&(i.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const a in t){const l=t[a],c=l.toJSON(i.data);l.name!==""&&(c.name=l.name),i.data.attributes[a]=c}const n={};let r=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=d.toJSON(i.data);d.name!==""&&(f.name=d.name),c.push(f)}c.length>0&&(n[a]=c,r=!0)}r&&(i.data.morphAttributes=n,i.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(i.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(i.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),i},clone:function(){return new ke().copy(this)},copy:function(i){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=i.name;const t=i.index;t!==null&&this.setIndex(t.clone(e));const n=i.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const r=i.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,d=u.length;h<d;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=i.morphTargetsRelative;const s=i.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=i.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=i.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=i.drawRange.start,this.drawRange.count=i.drawRange.count,this.userData=i.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const lf=new He,Zr=new Hi,oh=new Gi,Si=new D,Ei=new D,Ti=new D,ah=new D,lh=new D,ch=new D,Ba=new D,Oa=new D,za=new D,Ua=new ve,Ga=new ve,Ha=new ve,hh=new D,ka=new D;function ut(i=new ke,e=new ui){We.call(this),this.type="Mesh",this.geometry=i,this.material=e,this.updateMorphTargets()}ut.prototype=Object.assign(Object.create(We.prototype),{constructor:ut,isMesh:!0,copy:function(i){return We.prototype.copy.call(this,i),i.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=i.morphTargetInfluences.slice()),i.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},i.morphTargetDictionary)),this.material=i.material,this.geometry=i.geometry,this},updateMorphTargets:function(){const i=this.geometry;if(i.isBufferGeometry){const e=i.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=i.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(i,e){const t=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),oh.copy(t.boundingSphere),oh.applyMatrix4(r),i.ray.intersectsSphere(oh)===!1)||(lf.copy(r).invert(),Zr.copy(i.ray).applyMatrix4(lf),t.boundingBox!==null&&Zr.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){const o=t.index,a=t.attributes.position,l=t.morphAttributes.position,c=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,d=t.groups,f=t.drawRange;if(o!==null)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){const m=d[p],_=n[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(m.start+m.count,f.start+f.count);for(let v=x,b=M;v<b;v+=3){const y=o.getX(v),E=o.getX(v+1),w=o.getX(v+2);s=Va(this,_,i,Zr,a,l,c,u,h,y,E,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Va(this,n,i,Zr,a,l,c,u,h,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){const m=d[p],_=n[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(m.start+m.count,f.start+f.count);for(let v=x,b=M;v<b;v+=3){const y=v,E=v+1,w=v+2;s=Va(this,_,i,Zr,a,l,c,u,h,y,E,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const x=m,M=m+1,v=m+2;s=Va(this,n,i,Zr,a,l,c,u,h,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Zb(i,e,t,n,r,s,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==ko,a),l===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:i}}function Va(i,e,t,n,r,s,o,a,l,c,u,h){Si.fromBufferAttribute(r,c),Ei.fromBufferAttribute(r,u),Ti.fromBufferAttribute(r,h);const d=i.morphTargetInfluences;if(e.morphTargets&&s&&d){Ba.set(0,0,0),Oa.set(0,0,0),za.set(0,0,0);for(let p=0,g=s.length;p<g;p++){const m=d[p],_=s[p];m!==0&&(ah.fromBufferAttribute(_,c),lh.fromBufferAttribute(_,u),ch.fromBufferAttribute(_,h),o?(Ba.addScaledVector(ah,m),Oa.addScaledVector(lh,m),za.addScaledVector(ch,m)):(Ba.addScaledVector(ah.sub(Si),m),Oa.addScaledVector(lh.sub(Ei),m),za.addScaledVector(ch.sub(Ti),m)))}Si.add(Ba),Ei.add(Oa),Ti.add(za)}i.isSkinnedMesh&&e.skinning&&(i.boneTransform(c,Si),i.boneTransform(u,Ei),i.boneTransform(h,Ti));const f=Zb(i,e,t,n,Si,Ei,Ti,hh);if(f){a&&(Ua.fromBufferAttribute(a,c),Ga.fromBufferAttribute(a,u),Ha.fromBufferAttribute(a,h),f.uv=Et.getUV(hh,Si,Ei,Ti,Ua,Ga,Ha,new ve)),l&&(Ua.fromBufferAttribute(l,c),Ga.fromBufferAttribute(l,u),Ha.fromBufferAttribute(l,h),f.uv2=Et.getUV(hh,Si,Ei,Ti,Ua,Ga,Ha,new ve));const p={a:c,b:u,c:h,normal:new D,materialIndex:0};Et.getNormal(Si,Ei,Ti,p.normal),f.face=p}return f}class gr extends ke{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function p(g,m,_,x,M,v,b,y,E,w,S){const R=v/E,I=b/w,H=v/2,z=b/2,L=y/2,B=E+1,O=w+1;let $=0,Z=0;const k=new D;for(let Y=0;Y<O;Y++){const se=Y*I-z;for(let le=0;le<B;le++){const ue=le*R-H;k[g]=ue*x,k[m]=se*M,k[_]=L,c.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[_]=y>0?1:-1,u.push(k.x,k.y,k.z),h.push(le/E),h.push(1-Y/w),$+=1}}for(let Y=0;Y<w;Y++)for(let se=0;se<E;se++){const le=d+se+B*Y,ue=d+se+B*(Y+1),be=d+(se+1)+B*(Y+1),Se=d+(se+1)+B*Y;l.push(le,ue,Se),l.push(ue,be,Se),Z+=6}a.addGroup(f,Z,S),f+=Z,d+=$}}}function ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=ms(i[t]);for(const r in n)e[r]=n[r]}return e}const Tg={clone:ms,merge:Vt};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function nn(i){mt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Jb,this.fragmentShader=Kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,i!==void 0&&(i.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(i))}nn.prototype=Object.create(mt.prototype);nn.prototype.constructor=nn;nn.prototype.isShaderMaterial=!0;nn.prototype.copy=function(i){return mt.prototype.copy.call(this,i),this.fragmentShader=i.fragmentShader,this.vertexShader=i.vertexShader,this.uniforms=ms(i.uniforms),this.defines=Object.assign({},i.defines),this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.lights=i.lights,this.clipping=i.clipping,this.skinning=i.skinning,this.morphTargets=i.morphTargets,this.morphNormals=i.morphNormals,this.extensions=Object.assign({},i.extensions),this.glslVersion=i.glslVersion,this};nn.prototype.toJSON=function(i){const e=mt.prototype.toJSON.call(this,i);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?e.uniforms[n]={type:"t",value:s.toJSON(i).uuid}:s&&s.isColor?e.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[n]={type:"m4",value:s.toArray()}:e.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const n in this.extensions)this.extensions[n]===!0&&(t[n]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Ni(){We.call(this),this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}Ni.prototype=Object.assign(Object.create(We.prototype),{constructor:Ni,isCamera:!0,copy:function(i,e){return We.prototype.copy.call(this,i,e),this.matrixWorldInverse.copy(i.matrixWorldInverse),this.projectionMatrix.copy(i.projectionMatrix),this.projectionMatrixInverse.copy(i.projectionMatrixInverse),this},getWorldDirection:function(i){i===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),i=new D),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return i.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(i){We.prototype.updateMatrixWorld.call(this,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(i,e){We.prototype.updateWorldMatrix.call(this,i,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Rt(i=50,e=1,t=.1,n=2e3){Ni.call(this),this.type="PerspectiveCamera",this.fov=i,this.zoom=1,this.near=t,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Rt.prototype=Object.assign(Object.create(Ni.prototype),{constructor:Rt,isPerspectiveCamera:!0,copy:function(i,e){return Ni.prototype.copy.call(this,i,e),this.fov=i.fov,this.zoom=i.zoom,this.near=i.near,this.far=i.far,this.focus=i.focus,this.aspect=i.aspect,this.view=i.view===null?null:Object.assign({},i.view),this.filmGauge=i.filmGauge,this.filmOffset=i.filmOffset,this},setFocalLength:function(i){const e=.5*this.getFilmHeight()/i;this.fov=Xe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const i=Math.tan(Xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/i},getEffectiveFOV:function(){return Xe.RAD2DEG*2*Math.atan(Math.tan(Xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(i,e,t,n,r,s){this.aspect=i/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=i,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const i=this.near;let e=i*Math.tan(Xe.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,n=this.aspect*t,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/a,e-=s.offsetY*t/l,n*=s.width/a,t*=s.height/l}const o=this.filmOffset;o!==0&&(r+=i*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-t,i,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(i){const e=We.prototype.toJSON.call(this,i);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const Jr=90,Kr=1;class jl extends We{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Rt(Jr,Kr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Rt(Jr,Kr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Rt(Jr,Kr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Rt(Jr,Kr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Rt(Jr,Kr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Rt(Jr,Kr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class Ts extends Nt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wo,a=a!==void 0?a:Ri,super(e,t,n,r,s,o,a,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ts.prototype.isCubeTexture=!0;class Zl extends oi{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Ts(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=hn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gr(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:si});s.uniforms.tEquirect.value=t;const o=new ut(r,s),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=It),new jl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}Zl.prototype.isWebGLCubeRenderTarget=!0;class gs extends Nt{constructor(e,t,n,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Dt,this.minFilter=u!==void 0?u:Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}gs.prototype.isDataTexture=!0;const Qr=new Gi,Wa=new D;class jo{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],p=n[10],g=n[11],m=n[12],_=n[13],x=n[14],M=n[15];return t[0].setComponents(a-r,h-l,g-d,M-m).normalize(),t[1].setComponents(a+r,h+l,g+d,M+m).normalize(),t[2].setComponents(a+s,h+c,g+f,M+_).normalize(),t[3].setComponents(a-s,h-c,g-f,M-_).normalize(),t[4].setComponents(a-o,h-u,g-p,M-x).normalize(),t[5].setComponents(a+o,h+u,g+p,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ag(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qb(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),c.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;i.bindBuffer(h,c),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Mo extends ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const x=_*d-o;for(let M=0;M<c;M++){const v=M*h-s;p.push(v,-x,0),g.push(0,0,1),m.push(M/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const M=x+c*_,v=x+c*(_+1),b=x+1+c*(_+1),y=x+1+c*_;f.push(M,v,y),f.push(v,b,y)}this.setIndex(f),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(m,2))}}var ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nw=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw="vec3 transformed = vec3( position );",ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aw=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,pw=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,mw=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,_w=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ww=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pw=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Dw=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Bw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zw=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Gw=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kw=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$w=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,qw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e1=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,a1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,h1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,d1=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,w1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S1=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,N1=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,B1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,O1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,z1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,U1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,G1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,H1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,pS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_S=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Qe={alphamap_fragment:ew,alphamap_pars_fragment:tw,alphatest_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,begin_vertex:sw,beginnormal_vertex:ow,bsdfs:aw,bumpmap_pars_fragment:lw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:hw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:dw,color_fragment:fw,color_pars_fragment:pw,color_pars_vertex:mw,color_vertex:gw,common:xw,cube_uv_reflection_fragment:_w,defaultnormal_vertex:vw,displacementmap_pars_vertex:yw,displacementmap_vertex:Mw,emissivemap_fragment:bw,emissivemap_pars_fragment:ww,encodings_fragment:Sw,encodings_pars_fragment:Ew,envmap_fragment:Tw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:Lw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:Gw,envmap_vertex:Rw,fog_vertex:Pw,fog_pars_vertex:Dw,fog_fragment:Iw,fog_pars_fragment:Fw,gradientmap_pars_fragment:Nw,lightmap_fragment:Bw,lightmap_pars_fragment:Ow,lights_lambert_vertex:zw,lights_pars_begin:Uw,lights_toon_fragment:Hw,lights_toon_pars_fragment:kw,lights_phong_fragment:Vw,lights_phong_pars_fragment:Ww,lights_physical_fragment:$w,lights_physical_pars_fragment:qw,lights_fragment_begin:Xw,lights_fragment_maps:Yw,lights_fragment_end:jw,logdepthbuf_fragment:Zw,logdepthbuf_pars_fragment:Jw,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:Qw,map_fragment:e1,map_pars_fragment:t1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:s1,morphnormal_vertex:o1,morphtarget_pars_vertex:a1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:h1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:x1,dithering_fragment:_1,dithering_pars_fragment:v1,roughnessmap_fragment:y1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:w1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:L1,skinnormal_vertex:C1,specularmap_fragment:R1,specularmap_pars_fragment:P1,tonemapping_fragment:D1,tonemapping_pars_fragment:I1,transmissionmap_fragment:F1,transmissionmap_pars_fragment:N1,uv_pars_fragment:B1,uv_pars_vertex:O1,uv_vertex:z1,uv2_pars_fragment:U1,uv2_pars_vertex:G1,uv2_vertex:H1,worldpos_vertex:k1,background_frag:V1,background_vert:W1,cube_frag:$1,cube_vert:q1,depth_frag:X1,depth_vert:Y1,distanceRGBA_frag:j1,distanceRGBA_vert:Z1,equirect_frag:J1,equirect_vert:K1,linedashed_frag:Q1,linedashed_vert:eS,meshbasic_frag:tS,meshbasic_vert:nS,meshlambert_frag:iS,meshlambert_vert:rS,meshmatcap_frag:sS,meshmatcap_vert:oS,meshtoon_frag:aS,meshtoon_vert:lS,meshphong_frag:cS,meshphong_vert:hS,meshphysical_frag:uS,meshphysical_vert:dS,normal_frag:fS,normal_vert:pS,points_frag:mS,points_vert:gS,shadow_frag:xS,shadow_vert:_S,sprite_frag:vS,sprite_vert:yS},Le={common:{diffuse:{value:new Be(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Be(15658734)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Ft}}},In={basic:{uniforms:Vt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Vt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.fog,Le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Vt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Vt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Vt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Be(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Vt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Vt([Le.points,Le.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Vt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Vt([Le.common,Le.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Vt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.normal_vert,fragmentShader:Qe.normal_frag},sprite:{uniforms:Vt([Le.sprite,Le.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},cube:{uniforms:Vt([Le.envmap,{opacity:{value:1}}]),vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Vt([Le.common,Le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Vt([Le.lights,Le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};In.physical={uniforms:Vt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Be(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};function MS(i,e,t,n,r){const s=new Be(0);let o=0,a,l,c=null,u=0,h=null;function d(p,g,m,_){let x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=e.get(x));const M=i.xr,v=M.getSession&&M.getSession();v&&v.environmentBlendMode==="additive"&&(x=null),x===null?f(s,o):x&&x.isColor&&(f(x,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.isWebGLCubeRenderTarget||x.mapping===ws)?(l===void 0&&(l=new ut(new gr(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ms(In.cube.uniforms),vertexShader:In.cube.vertexShader,fragmentShader:In.cube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),x.isWebGLCubeRenderTarget&&(x=x.texture),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,(c!==x||u!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=x,u=x.version,h=i.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new ut(new Mo(2,2),new nn({name:"BackgroundMaterial",uniforms:ms(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||u!==x.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,c=x,u=x.version,h=i.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,g){t.buffers.color.setClear(p.r,p.g,p.b,g,r)}return{getClearColor:function(){return s},setClearColor:function(p,g=1){s.set(p),o=g,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function bS(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l;function u(z,L,B,O,$){let Z=!1;if(o){const k=p(O,B,L);c!==k&&(c=k,d(c.object)),Z=m(O,$),Z&&_(O,$)}else{const k=L.wireframe===!0;(c.geometry!==O.id||c.program!==B.id||c.wireframe!==k)&&(c.geometry=O.id,c.program=B.id,c.wireframe=k,Z=!0)}z.isInstancedMesh===!0&&(Z=!0),$!==null&&t.update($,34963),Z&&(E(z,L,B,O),$!==null&&i.bindBuffer(34963,t.get($).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function f(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,L,B){const O=B.wireframe===!0;let $=a[z.id];$===void 0&&($={},a[z.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let k=Z[O];return k===void 0&&(k=g(h()),Z[O]=k),k}function g(z){const L=[],B=[],O=[];for(let $=0;$<r;$++)L[$]=0,B[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:z,attributes:{},index:null}}function m(z,L){const B=c.attributes,O=z.attributes;let $=0;for(const Z in O){const k=B[Z],Y=O[Z];if(k===void 0||k.attribute!==Y||k.data!==Y.data)return!0;$++}return c.attributesNum!==$||c.index!==L}function _(z,L){const B={},O=z.attributes;let $=0;for(const Z in O){const k=O[Z],Y={};Y.attribute=k,k.data&&(Y.data=k.data),B[Z]=Y,$++}c.attributes=B,c.attributesNum=$,c.index=L}function x(){const z=c.newAttributes;for(let L=0,B=z.length;L<B;L++)z[L]=0}function M(z){v(z,0)}function v(z,L){const B=c.newAttributes,O=c.enabledAttributes,$=c.attributeDivisors;B[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),$[z]!==L&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,L),$[z]=L)}function b(){const z=c.newAttributes,L=c.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==z[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(z,L,B,O,$,Z){n.isWebGL2===!0&&(B===5124||B===5125)?i.vertexAttribIPointer(z,L,B,$,Z):i.vertexAttribPointer(z,L,B,O,$,Z)}function E(z,L,B,O){if(n.isWebGL2===!1&&(z.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=O.attributes,Z=B.getAttributes(),k=L.defaultAttributeValues;for(const Y in Z){const se=Z[Y];if(se>=0){const le=$[Y];if(le!==void 0){const ue=le.normalized,be=le.itemSize,Se=t.get(le);if(Se===void 0)continue;const U=Se.buffer,Ue=Se.type,we=Se.bytesPerElement;if(le.isInterleavedBufferAttribute){const Ee=le.data,ge=Ee.stride,Fe=le.offset;Ee&&Ee.isInstancedInterleavedBuffer?(v(se,Ee.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ee.meshPerAttribute*Ee.count)):M(se),i.bindBuffer(34962,U),y(se,be,Ue,ue,ge*we,Fe*we)}else le.isInstancedBufferAttribute?(v(se,le.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)):M(se),i.bindBuffer(34962,U),y(se,be,Ue,ue,0,0)}else if(Y==="instanceMatrix"){const ue=t.get(z.instanceMatrix);if(ue===void 0)continue;const be=ue.buffer,Se=ue.type;v(se+0,1),v(se+1,1),v(se+2,1),v(se+3,1),i.bindBuffer(34962,be),i.vertexAttribPointer(se+0,4,Se,!1,64,0),i.vertexAttribPointer(se+1,4,Se,!1,64,16),i.vertexAttribPointer(se+2,4,Se,!1,64,32),i.vertexAttribPointer(se+3,4,Se,!1,64,48)}else if(Y==="instanceColor"){const ue=t.get(z.instanceColor);if(ue===void 0)continue;const be=ue.buffer,Se=ue.type;v(se,1),i.bindBuffer(34962,be),i.vertexAttribPointer(se,3,Se,!1,12,0)}else if(k!==void 0){const ue=k[Y];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(se,ue);break;case 3:i.vertexAttrib3fv(se,ue);break;case 4:i.vertexAttrib4fv(se,ue);break;default:i.vertexAttrib1fv(se,ue)}}}}b()}function w(){I();for(const z in a){const L=a[z];for(const B in L){const O=L[B];for(const $ in O)f(O[$].object),delete O[$];delete L[B]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;const L=a[z.id];for(const B in L){const O=L[B];for(const $ in O)f(O[$].object),delete O[$];delete L[B]}delete a[z.id]}function R(z){for(const L in a){const B=a[L];if(B[z.id]===void 0)continue;const O=B[z.id];for(const $ in O)f(O[$].object),delete O[$];delete B[z.id]}}function I(){H(),c!==l&&(c=l,d(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:I,resetDefaultState:H,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function wS(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function SS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),h=i.getParameter(35660),d=i.getParameter(3379),f=i.getParameter(34076),p=i.getParameter(34921),g=i.getParameter(36347),m=i.getParameter(36348),_=i.getParameter(36349),x=h>0,M=o||e.has("OES_texture_float"),v=x&&M,b=o?i.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:b}}function ES(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Dn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const p=h.length!==0||d||n!==0||r;return r=d,t=u(h,f,0),n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,M=x*4;let v=_.clippingState||null;l.value=v,v=u(p,d,M,f);for(let b=0;b!==M;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,v=f;M!==g;++M,v+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function TS(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=Wo:a===Ml&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=i.getRenderTarget(),u=new Zl(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(c),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function AS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function LS(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const g=f[p];for(let m=0,_=g.length;m<_;m++)e.update(g[m],34962)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,v=x.length;M<v;M+=3){const b=x[M+0],y=x[M+1],E=x[M+2];d.push(b,y,y,E,E,b)}}else{const x=p.array;g=p.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const b=M+0,y=M+1,E=M+2;d.push(b,y,y,E,E,b)}}const m=new(Eg(d)>65535?mr:pr)(d,1);m.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function CS(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){i.drawElements(s,f,a,d*l),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,f,a,d*l,p),t.update(f,s,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function RS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function PS(i,e){return i[0]-e[0]}function DS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function IS(i){const e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function r(s,o,a,l){const c=s.morphTargetInfluences,u=c===void 0?0:c.length;let h=e[o.id];if(h===void 0){h=[];for(let m=0;m<u;m++)h[m]=[m,0];e[o.id]=h}for(let m=0;m<u;m++){const _=h[m];_[0]=m,_[1]=c[m]}h.sort(DS);for(let m=0;m<8;m++)m<u&&h[m][1]?(n[m][0]=h[m][0],n[m][1]=h[m][1]):(n[m][0]=Number.MAX_SAFE_INTEGER,n[m][1]=0);n.sort(PS);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let m=0;m<8;m++){const _=n[m],x=_[0],M=_[1];x!==Number.MAX_SAFE_INTEGER&&M?(d&&o.getAttribute("morphTarget"+m)!==d[x]&&o.setAttribute("morphTarget"+m,d[x]),f&&o.getAttribute("morphNormal"+m)!==f[x]&&o.setAttribute("morphNormal"+m,f[x]),t[m]=M,p+=M):(d&&o.hasAttribute("morphTarget"+m)===!0&&o.deleteAttribute("morphTarget"+m),f&&o.hasAttribute("morphNormal"+m)===!0&&o.deleteAttribute("morphNormal"+m),t[m]=0)}const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",t)}return{update:r}}function FS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mu extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}Mu.prototype.isDataTexture2DArray=!0;class bu extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}bu.prototype.isDataTexture3D=!0;const Lg=new Nt,NS=new Mu,BS=new bu,Cg=new Ts,cf=[],hf=[],uf=new Float32Array(16),df=new Float32Array(9),ff=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cf[r];if(s===void 0&&(s=new Float32Array(r),cf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rg(i,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function OS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function US(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function HS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(yn(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),dn(t,n)}}function kS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(yn(t,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),dn(t,n)}}function VS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(yn(t,n))return;uf.set(n),i.uniformMatrix4fv(this.addr,!1,uf),dn(t,n)}}function WS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||Lg,r)}function $S(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||NS,r)}function qS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||BS,r)}function XS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Cg,r)}function YS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jS(i,e){const t=this.cache;yn(t,e)||(i.uniform2iv(this.addr,e),dn(t,e))}function ZS(i,e){const t=this.cache;yn(t,e)||(i.uniform3iv(this.addr,e),dn(t,e))}function JS(i,e){const t=this.cache;yn(t,e)||(i.uniform4iv(this.addr,e),dn(t,e))}function KS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QS(i){switch(i){case 5126:return OS;case 35664:return zS;case 35665:return US;case 35666:return GS;case 35674:return HS;case 35675:return kS;case 35676:return VS;case 5124:case 35670:return YS;case 35667:case 35671:return jS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return $S}}function eE(i,e){i.uniform1fv(this.addr,e)}function tE(i,e){i.uniform1iv(this.addr,e)}function nE(i,e){i.uniform2iv(this.addr,e)}function iE(i,e){i.uniform3iv(this.addr,e)}function rE(i,e){i.uniform4iv(this.addr,e)}function sE(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function oE(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function aE(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function lE(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cE(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hE(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uE(i,e,t){const n=e.length,r=Rg(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Lg,r[s])}function dE(i,e,t){const n=e.length,r=Rg(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Cg,r[s])}function fE(i){switch(i){case 5126:return eE;case 35664:return sE;case 35665:return oE;case 35666:return aE;case 35674:return lE;case 35675:return cE;case 35676:return hE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35680:case 36300:case 36308:case 36293:return dE}}function pE(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=QS(e.type)}function Pg(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=fE(e.type)}Pg.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),dn(e,i)};function Dg(i){this.id=i,this.seq=[],this.map={}}Dg.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const uh=/(\w+)(\])?(\[|\.)?/g;function pf(i,e){i.seq.push(e),i.map[e.id]=e}function mE(i,e,t){const n=i.name,r=n.length;for(uh.lastIndex=0;;){const s=uh.exec(n),o=uh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pf(t,c===void 0?new pE(a,i,e):new Pg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Dg(a),pf(t,h)),t=h}}}function Pi(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);mE(r,s,this)}}Pi.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Pi.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Pi.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Pi.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function mf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let gE=0;function xE(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ig(i){switch(i){case Jt:return["Linear","( value )"];case Xo:return["sRGB","( value )"];case Yl:return["RGBE","( value )"];case xu:return["RGBM","( value, 7.0 )"];case _u:return["RGBM","( value, 16.0 )"];case vu:return["RGBD","( value, 256.0 )"];case Xl:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case _g:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function gf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=i.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+xE(s)}function Hs(i,e){const t=Ig(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function _E(i,e){const t=Ig(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vE(i,e){let t;switch(e){case xm:t="Linear";break;case _m:t="Reinhard";break;case vm:t="OptimizedCineon";break;case ym:t="ACESFilmic";break;case Mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yE(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function ME(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bE(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r).name;t[o]=i.getAttribLocation(e,o)}return t}function Zs(i){return i!==""}function xf(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(wE,SE)}function SE(i,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qh(t)}const EE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(TE,Fg).replace(EE,AE)}function AE(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fg(i,e,t,n)}function Fg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function CE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wo:case $o:e="ENVMAP_TYPE_CUBE";break;case ws:case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $o:case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function PE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function DE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LE(t),c=CE(t),u=RE(t),h=PE(t),d=i.gammaFactor>0?i.gammaFactor:1,f=t.isWebGL2?"":yE(t),p=ME(s),g=r.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[p].filter(Zs).join(`
`),m.length>0&&(m+=`
`),_=[f,p].filter(Zs).join(`
`),_.length>0&&(_+=`
`)):(m=[yf(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),_=[f,yf(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==cr?vE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Qe.encodings_pars_fragment,t.map?Hs("mapTexelToLinear",t.mapEncoding):"",t.matcap?Hs("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Hs("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Hs("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Hs("lightMapTexelToLinear",t.lightMapEncoding):"",_E("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=qh(o),o=xf(o,t),o=_f(o,t),a=qh(a),a=xf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===$h?"":"out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+m+o,v=x+_+a,b=mf(r,35633,M),y=mf(r,35632,v);if(r.attachShader(g,b),r.attachShader(g,y),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(b).trim(),I=r.getShaderInfoLog(y).trim();let H=!0,z=!0;if(r.getProgramParameter(g,35714)===!1){H=!1;const L=gf(r,b,"vertex"),B=gf(r,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(g,35715),"gl.getProgramInfoLog",S,L,B)}else S!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",S):(R===""||I==="")&&(z=!1);z&&(this.diagnostics={runnable:H,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:I,prefix:_}})}r.deleteShader(b),r.deleteShader(y);let E;this.getUniforms=function(){return E===void 0&&(E=new Pi(r,g)),E};let w;return this.getAttributes=function(){return w===void 0&&(w=bE(r,g)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=y,this}function IE(i,e,t,n,r,s){const o=[],a=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,u=n.maxVertexUniforms,h=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(y){const w=y.skeleton.bones;if(c)return 1024;{const R=Math.floor((u-20)/4),I=Math.min(R,w.length);return I<w.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+w.length+" bones. This GPU supports "+I+"."),0):I}}function m(y){let E;return y&&y.isTexture?E=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),E=y.texture.encoding):E=Jt,E}function _(y,E,w,S,R){const I=S.fog,H=y.isMeshStandardMaterial?S.environment:null,z=e.get(y.envMap||H),L=f[y.type],B=R.isSkinnedMesh?g(R):0;y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let O,$;if(L){const Y=In[L];O=Y.vertexShader,$=Y.fragmentShader}else O=y.vertexShader,$=y.fragmentShader;const Z=i.getRenderTarget();return{isWebGL2:a,shaderID:L,shaderName:y.type,vertexShader:O,fragmentShader:$,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:R.isInstancedMesh===!0,instancingColor:R.isInstancedMesh===!0&&R.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z!==null?m(Z.texture):i.outputEncoding,map:!!y.map,mapEncoding:m(y.map),matcap:!!y.matcap,matcapEncoding:m(y.matcap),envMap:!!z,envMapMode:z&&z.mapping,envMapEncoding:m(z),envMapCubeUV:!!z&&(z.mapping===ws||z.mapping===qo),lightMap:!!y.lightMap,lightMapEncoding:m(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:m(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Mg,tangentSpaceNormalMap:y.normalMapType===vr,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.transmissionMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:y.skinning&&B>0,maxBones:B,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,maxMorphTargets:i.maxMorphTargets,maxMorphNormals:i.maxMorphNormals,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:cr,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===ko,flipSided:y.side===Ct,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.fragmentShader),E.push(y.vertexShader)),y.defines!==void 0)for(const w in y.defines)E.push(w),E.push(y.defines[w]);if(y.isRawShaderMaterial===!1){for(let w=0;w<p.length;w++)E.push(y[p[w]]);E.push(i.outputEncoding),E.push(i.gammaFactor)}return E.push(y.customProgramCacheKey),E.join()}function M(y){const E=f[y.type];let w;if(E){const S=In[E];w=Tg.clone(S.uniforms)}else w=y.uniforms;return w}function v(y,E){let w;for(let S=0,R=o.length;S<R;S++){const I=o[S];if(I.cacheKey===E){w=I,++w.usedTimes;break}}return w===void 0&&(w=new DE(i,E,y,r),o.push(w)),w}function b(y){if(--y.usedTimes===0){const E=o.indexOf(y);o[E]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:_,getProgramCacheKey:x,getUniforms:M,acquireProgram:v,releaseProgram:b,programs:o}}function FE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function NE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function BE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(i){const e=[];let t=0;const n=[],r=[],s={id:-1};function o(){t=0,n.length=0,r.length=0}function a(d,f,p,g,m,_){let x=e[t];const M=i.get(p);return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,program:M.program||s,groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},e[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.program=M.program||s,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=_),t++,x}function l(d,f,p,g,m,_){const x=a(d,f,p,g,m,_);(p.transparent===!0?r:n).push(x)}function c(d,f,p,g,m,_){const x=a(d,f,p,g,m,_);(p.transparent===!0?r:n).unshift(x)}function u(d,f){n.length>1&&n.sort(d||NE),r.length>1&&r.sort(f||BE)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:n,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function OE(i){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new Mf(i),e.set(r,[o])):s>=e.get(r).length?(o=new Mf(i),e.get(r).push(o)):o=e.get(r)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function zE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function UE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let GE=0;function HE(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function kE(i,e){const t=new zE,n=UE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new He,a=new He;function l(u){let h=0,d=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,g=0,m=0,_=0,x=0,M=0,v=0,b=0;u.sort(HE);for(let E=0,w=u.length;E<w;E++){const S=u[E],R=S.color,I=S.intensity,H=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*I,d+=R.g*I,f+=R.b*I;else if(S.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(S.sh.coefficients[L],I);else if(S.isDirectionalLight){const L=t.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const B=S.shadow,O=n.get(S);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.directionalShadow[p]=O,r.directionalShadowMap[p]=z,r.directionalShadowMatrix[p]=S.shadow.matrix,M++}r.directional[p]=L,p++}else if(S.isSpotLight){const L=t.get(S);if(L.position.setFromMatrixPosition(S.matrixWorld),L.color.copy(R).multiplyScalar(I),L.distance=H,L.coneCos=Math.cos(S.angle),L.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),L.decay=S.decay,S.castShadow){const B=S.shadow,O=n.get(S);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.spotShadow[m]=O,r.spotShadowMap[m]=z,r.spotShadowMatrix[m]=S.shadow.matrix,b++}r.spot[m]=L,m++}else if(S.isRectAreaLight){const L=t.get(S);L.color.copy(R).multiplyScalar(I),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),r.rectArea[_]=L,_++}else if(S.isPointLight){const L=t.get(S);if(L.color.copy(S.color).multiplyScalar(S.intensity),L.distance=S.distance,L.decay=S.decay,S.castShadow){const B=S.shadow,O=n.get(S);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,r.pointShadow[g]=O,r.pointShadowMap[g]=z,r.pointShadowMatrix[g]=S.shadow.matrix,v++}r.point[g]=L,g++}else if(S.isHemisphereLight){const L=t.get(S);L.skyColor.copy(S.color).multiplyScalar(I),L.groundColor.copy(S.groundColor).multiplyScalar(I),r.hemi[x]=L,x++}}_>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;const y=r.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==m||y.rectAreaLength!==_||y.hemiLength!==x||y.numDirectionalShadows!==M||y.numPointShadows!==v||y.numSpotShadows!==b)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=_,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=v,r.spotShadowMatrix.length=b,y.directionalLength=p,y.pointLength=g,y.spotLength=m,y.rectAreaLength=_,y.hemiLength=x,y.numDirectionalShadows=M,y.numPointShadows=v,y.numSpotShadows=b,r.version=GE++)}function c(u,h){let d=0,f=0,p=0,g=0,m=0;const _=h.matrixWorldInverse;for(let x=0,M=u.length;x<M;x++){const v=u[x];if(v.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),d++}else if(v.isSpotLight){const b=r.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const b=r.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),b.direction.normalize(),m++}}}return{setup:l,setupView:c,state:r}}function bf(i,e){const t=new kE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(){t.setup(n)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VE(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new bf(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new bf(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jl extends mt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=vg,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Jl.prototype.isMeshDepthMaterial=!0;class Kl extends mt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Kl.prototype.isMeshDistanceMaterial=!0;var WE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,$E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ng(i,e,t){let n=new jo;const r=new ve,s=new ve,o=new ot,a=[],l=[],c={},u={0:Ct,1:bs,2:ko},h=new nn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:$E,fragmentShader:WE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new ke;f.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ut(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu,this.render=function(b,y,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let H=0,z=b.length;H<z;H++){const L=b[H],B=L.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const O=B.getFrameExtents();if(r.multiply(O),s.copy(B.mapSize),(r.x>t||r.y>t)&&(r.x>t&&(s.x=Math.floor(t/O.x),r.x=s.x*O.x,B.mapSize.x=s.x),r.y>t&&(s.y=Math.floor(t/O.y),r.y=s.y*O.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===ls){const Z={minFilter:It,magFilter:It,format:hn};B.map=new oi(r.x,r.y,Z),B.map.texture.name=L.name+".shadowMap",B.mapPass=new oi(r.x,r.y,Z),B.camera.updateProjectionMatrix()}if(B.map===null){const Z={minFilter:Dt,magFilter:Dt,format:hn};B.map=new oi(r.x,r.y,Z),B.map.texture.name=L.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const $=B.getViewportCount();for(let Z=0;Z<$;Z++){const k=B.getViewport(Z);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),B.updateMatrices(L,Z),n=B.getFrustum(),v(y,E,B.camera,L,this.type)}!B.isPointLightShadow&&this.type===ls&&m(B,E),B.needsUpdate=!1}g.needsUpdate=!1,i.setRenderTarget(w,S,R)};function m(b,y){const E=e.update(p);h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,E,h,p,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,E,d,p,null)}function _(b,y,E){const w=b<<0|y<<1|E<<2;let S=a[w];return S===void 0&&(S=new Jl({depthPacking:yg,morphTargets:b,skinning:y}),a[w]=S),S}function x(b,y,E){const w=b<<0|y<<1|E<<2;let S=l[w];return S===void 0&&(S=new Kl({morphTargets:b,skinning:y}),l[w]=S),S}function M(b,y,E,w,S,R,I){let H=null,z=_,L=b.customDepthMaterial;if(w.isPointLight===!0&&(z=x,L=b.customDistanceMaterial),L===void 0){let B=!1;E.morphTargets===!0&&(B=y.morphAttributes&&y.morphAttributes.position&&y.morphAttributes.position.length>0);let O=!1;b.isSkinnedMesh===!0&&(E.skinning===!0?O=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b));const $=b.isInstancedMesh===!0;H=z(B,O,$)}else H=L;if(i.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0){const B=H.uuid,O=E.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let Z=$[O];Z===void 0&&(Z=H.clone(),$[O]=Z),H=Z}return H.visible=E.visible,H.wireframe=E.wireframe,I===ls?H.side=E.shadowSide!==null?E.shadowSide:E.side:H.side=E.shadowSide!==null?E.shadowSide:u[E.side],H.clipShadows=E.clipShadows,H.clippingPlanes=E.clippingPlanes,H.clipIntersection=E.clipIntersection,H.wireframeLinewidth=E.wireframeLinewidth,H.linewidth=E.linewidth,w.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(w.matrixWorld),H.nearDistance=S,H.farDistance=R),H}function v(b,y,E,w,S){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ls)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const H=e.update(b),z=b.material;if(Array.isArray(z)){const L=H.groups;for(let B=0,O=L.length;B<O;B++){const $=L[B],Z=z[$.materialIndex];if(Z&&Z.visible){const k=M(b,H,Z,w,E.near,E.far,S);i.renderBufferDirect(E,null,H,k,b,$)}}}else if(z.visible){const L=M(b,H,z,w,E.near,E.far,S);i.renderBufferDirect(E,null,H,L,b,null)}}const I=b.children;for(let H=0,z=I.length;H<z;H++)v(I[H],y,E,w,S)}}function qE(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const A=new ot;let T=null;const q=new ot(0,0,0,0);return{setMask:function(K){T!==K&&!G&&(i.colorMask(K,K,K,K),T=K)},setLocked:function(K){G=K},setClear:function(K,ce,fe,ye,J){J===!0&&(K*=ye,ce*=ye,fe*=ye),A.set(K,ce,fe,ye),q.equals(A)===!1&&(i.clearColor(K,ce,fe,ye),q.copy(A))},reset:function(){G=!1,T=null,q.set(-1,0,0,0)}}}function s(){let G=!1,A=null,T=null,q=null;return{setTest:function(K){K?Y(2929):se(2929)},setMask:function(K){A!==K&&!G&&(i.depthMask(K),A=K)},setFunc:function(K){if(T!==K){if(K)switch(K){case lm:i.depthFunc(512);break;case cm:i.depthFunc(519);break;case hm:i.depthFunc(513);break;case vl:i.depthFunc(515);break;case um:i.depthFunc(514);break;case dm:i.depthFunc(518);break;case fm:i.depthFunc(516);break;case pm:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);T=K}},setLocked:function(K){G=K},setClear:function(K){q!==K&&(i.clearDepth(K),q=K)},reset:function(){G=!1,A=null,T=null,q=null}}}function o(){let G=!1,A=null,T=null,q=null,K=null,ce=null,fe=null,ye=null,J=null;return{setTest:function(_e){G||(_e?Y(2960):se(2960))},setMask:function(_e){A!==_e&&!G&&(i.stencilMask(_e),A=_e)},setFunc:function(_e,Me,Ne){(T!==_e||q!==Me||K!==Ne)&&(i.stencilFunc(_e,Me,Ne),T=_e,q=Me,K=Ne)},setOp:function(_e,Me,Ne){(ce!==_e||fe!==Me||ye!==Ne)&&(i.stencilOp(_e,Me,Ne),ce=_e,fe=Me,ye=Ne)},setLocked:function(_e){G=_e},setClear:function(_e){J!==_e&&(i.clearStencil(_e),J=_e)},reset:function(){G=!1,A=null,T=null,q=null,K=null,ce=null,fe=null,ye=null,J=null}}}const a=new r,l=new s,c=new o;let u={},h=null,d=!1,f=null,p=null,g=null,m=null,_=null,x=null,M=null,v=!1,b=null,y=null,E=null,w=null,S=null;const R=i.getParameter(35661);let I=!1,H=0;const z=i.getParameter(7938);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=H>=2);let L=null,B={};const O=new ot,$=new ot;function Z(G,A,T){const q=new Uint8Array(4),K=i.createTexture();i.bindTexture(G,K),i.texParameteri(G,10241,9728),i.texParameteri(G,10240,9728);for(let ce=0;ce<T;ce++)i.texImage2D(A+ce,0,6408,1,1,0,6408,5121,q);return K}const k={};k[3553]=Z(3553,3553,1),k[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(2929),l.setFunc(vl),Ue(!1),we(Ch),Y(2884),Se(si);function Y(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function se(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function le(G){return h!==G?(i.useProgram(G),h=G,!0):!1}const ue={[ir]:32774,[Jp]:32778,[Kp]:32779};if(n)ue[Ih]=32775,ue[Fh]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(ue[Ih]=G.MIN_EXT,ue[Fh]=G.MAX_EXT)}const be={[Qp]:0,[em]:1,[tm]:768,[fu]:770,[am]:776,[sm]:774,[im]:772,[nm]:769,[pu]:771,[om]:775,[rm]:773};function Se(G,A,T,q,K,ce,fe,ye){if(G===si){d===!0&&(se(3042),d=!1);return}if(d===!1&&(Y(3042),d=!0),G!==Zp){if(G!==f||ye!==v){if((p!==ir||_!==ir)&&(i.blendEquation(32774),p=ir,_=ir),ye)switch(G){case hs:i.blendFuncSeparate(1,771,1,771);break;case Rh:i.blendFunc(1,1);break;case Ph:i.blendFuncSeparate(0,0,769,771);break;case Dh:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case hs:i.blendFuncSeparate(770,771,1,771);break;case Rh:i.blendFunc(770,1);break;case Ph:i.blendFunc(0,769);break;case Dh:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}g=null,m=null,x=null,M=null,f=G,v=ye}return}K=K||A,ce=ce||T,fe=fe||q,(A!==p||K!==_)&&(i.blendEquationSeparate(ue[A],ue[K]),p=A,_=K),(T!==g||q!==m||ce!==x||fe!==M)&&(i.blendFuncSeparate(be[T],be[q],be[ce],be[fe]),g=T,m=q,x=ce,M=fe),f=G,v=null}function U(G,A){G.side===ko?se(2884):Y(2884);let T=G.side===Ct;A&&(T=!T),Ue(T),G.blending===hs&&G.transparent===!1?Se(si):Se(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const q=G.stencilWrite;c.setTest(q),q&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits)}function Ue(G){b!==G&&(G?i.frontFace(2304):i.frontFace(2305),b=G)}function we(G){G!==Xp?(Y(2884),G!==y&&(G===Ch?i.cullFace(1029):G===Yp?i.cullFace(1028):i.cullFace(1032))):se(2884),y=G}function Ee(G){G!==E&&(I&&i.lineWidth(G),E=G)}function ge(G,A,T){G?(Y(32823),(w!==A||S!==T)&&(i.polygonOffset(A,T),w=A,S=T)):se(32823)}function Fe(G){G?Y(3089):se(3089)}function V(G){G===void 0&&(G=33984+R-1),L!==G&&(i.activeTexture(G),L=G)}function W(G,A){L===null&&V();let T=B[L];T===void 0&&(T={type:void 0,texture:void 0},B[L]=T),(T.type!==G||T.texture!==A)&&(i.bindTexture(G,A||k[G]),T.type=G,T.texture=A)}function te(){const G=B[L];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function P(G){O.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),O.copy(G))}function ne(G){$.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function de(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},L=null,B={},h=null,d=!1,f=null,p=null,g=null,m=null,_=null,x=null,M=null,v=!1,b=null,y=null,E=null,w=null,S=null,a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:se,useProgram:le,setBlending:Se,setMaterial:U,setFlipSided:Ue,setCullFace:we,setLineWidth:Ee,setPolygonOffset:ge,setScissorTest:Fe,activeTexture:V,bindTexture:W,unbindTexture:te,compressedTexImage2D:xe,texImage2D:ae,texImage3D:N,scissor:P,viewport:ne,reset:de}}function XE(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,P){return p?new OffscreenCanvas(N,P):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function m(N,P,ne,de){let G=1;if((N.width>de||N.height>de)&&(G=de/Math.max(N.width,N.height)),G<1||P===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const A=P?Xe.floorPowerOfTwo:Math.floor,T=A(G*N.width),q=A(G*N.height);f===void 0&&(f=g(T,q));const K=ne?g(T,q):f;return K.width=T,K.height=q,K.getContext("2d").drawImage(N,0,0,T,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+T+"x"+q+")."),K}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function _(N){return Xe.isPowerOfTwo(N.width)&&Xe.isPowerOfTwo(N.height)}function x(N){return a?!1:N.wrapS!==Yt||N.wrapT!==Yt||N.minFilter!==Dt&&N.minFilter!==It}function M(N,P){return N.generateMipmaps&&P&&N.minFilter!==Dt&&N.minFilter!==It}function v(N,P,ne,de){i.generateMipmap(N);const G=n.get(P);G.__maxMipLevel=Math.log2(Math.max(ne,de))}function b(N,P,ne){if(a===!1)return P;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=P;return P===6403&&(ne===5126&&(de=33326),ne===5131&&(de=33325),ne===5121&&(de=33321)),P===6407&&(ne===5126&&(de=34837),ne===5131&&(de=34843),ne===5121&&(de=32849)),P===6408&&(ne===5126&&(de=34836),ne===5131&&(de=34842),ne===5121&&(de=32856)),(de===33325||de===33326||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function y(N){return N===Dt||N===bl||N===wl?9728:9729}function E(N){const P=N.target;P.removeEventListener("dispose",E),S(P),P.isVideoTexture&&d.delete(P),o.memory.textures--}function w(N){const P=N.target;P.removeEventListener("dispose",w),R(P),o.memory.textures--}function S(N){const P=n.get(N);P.__webglInit!==void 0&&(i.deleteTexture(P.__webglTexture),n.remove(N))}function R(N){const P=N.texture,ne=n.get(N),de=n.get(P);if(!!N){if(de.__webglTexture!==void 0&&i.deleteTexture(de.__webglTexture),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let G=0;G<6;G++)i.deleteFramebuffer(ne.__webglFramebuffer[G]),ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[G]);else i.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer),ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer);n.remove(P),n.remove(N)}}let I=0;function H(){I=0}function z(){const N=I;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),I+=1,N}function L(N,P){const ne=n.get(N);if(N.isVideoTexture&&V(N),N.version>0&&ne.__version!==N.version){const de=N.image;if(de===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(ne,N,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,ne.__webglTexture)}function B(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){le(ne,N,P);return}t.activeTexture(33984+P),t.bindTexture(35866,ne.__webglTexture)}function O(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){le(ne,N,P);return}t.activeTexture(33984+P),t.bindTexture(32879,ne.__webglTexture)}function $(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){ue(ne,N,P);return}t.activeTexture(33984+P),t.bindTexture(34067,ne.__webglTexture)}const Z={[oo]:10497,[Yt]:33071,[ao]:33648},k={[Dt]:9728,[bl]:9984,[wl]:9986,[It]:9729,[mu]:9985,[Ss]:9987};function Y(N,P,ne){if(ne?(i.texParameteri(N,10242,Z[P.wrapS]),i.texParameteri(N,10243,Z[P.wrapT]),(N===32879||N===35866)&&i.texParameteri(N,32882,Z[P.wrapR]),i.texParameteri(N,10240,k[P.magFilter]),i.texParameteri(N,10241,k[P.minFilter])):(i.texParameteri(N,10242,33071),i.texParameteri(N,10243,33071),(N===32879||N===35866)&&i.texParameteri(N,32882,33071),(P.wrapS!==Yt||P.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,10240,y(P.magFilter)),i.texParameteri(N,10241,y(P.minFilter)),P.minFilter!==Dt&&P.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(P.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(N,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function se(N,P){N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",E),N.__webglTexture=i.createTexture(),o.memory.textures++)}function le(N,P,ne){let de=3553;P.isDataTexture2DArray&&(de=35866),P.isDataTexture3D&&(de=32879),se(N,P),t.activeTexture(33984+ne),t.bindTexture(de,N.__webglTexture),i.pixelStorei(37440,P.flipY),i.pixelStorei(37441,P.premultiplyAlpha),i.pixelStorei(3317,P.unpackAlignment),i.pixelStorei(37443,0);const G=x(P)&&_(P.image)===!1,A=m(P.image,G,!1,u),T=_(A)||a,q=s.convert(P.format);let K=s.convert(P.type),ce=b(P.internalFormat,q,K);Y(de,P,T);let fe;const ye=P.mipmaps;if(P.isDepthTexture)ce=6402,a?P.type===ri?ce=36012:P.type===Qs?ce=33190:P.type===us?ce=35056:ce=33189:P.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===hr&&ce===6402&&P.type!==lo&&P.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=lo,K=s.convert(P.type)),P.format===ps&&ce===6402&&(ce=34041,P.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=us,K=s.convert(P.type))),t.texImage2D(3553,0,ce,A.width,A.height,0,q,K,null);else if(P.isDataTexture)if(ye.length>0&&T){for(let J=0,_e=ye.length;J<_e;J++)fe=ye[J],t.texImage2D(3553,J,ce,fe.width,fe.height,0,q,K,fe.data);P.generateMipmaps=!1,N.__maxMipLevel=ye.length-1}else t.texImage2D(3553,0,ce,A.width,A.height,0,q,K,A.data),N.__maxMipLevel=0;else if(P.isCompressedTexture){for(let J=0,_e=ye.length;J<_e;J++)fe=ye[J],P.format!==hn&&P.format!==Ri?q!==null?t.compressedTexImage2D(3553,J,ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,J,ce,fe.width,fe.height,0,q,K,fe.data);N.__maxMipLevel=ye.length-1}else if(P.isDataTexture2DArray)t.texImage3D(35866,0,ce,A.width,A.height,A.depth,0,q,K,A.data),N.__maxMipLevel=0;else if(P.isDataTexture3D)t.texImage3D(32879,0,ce,A.width,A.height,A.depth,0,q,K,A.data),N.__maxMipLevel=0;else if(ye.length>0&&T){for(let J=0,_e=ye.length;J<_e;J++)fe=ye[J],t.texImage2D(3553,J,ce,q,K,fe);P.generateMipmaps=!1,N.__maxMipLevel=ye.length-1}else t.texImage2D(3553,0,ce,q,K,A),N.__maxMipLevel=0;M(P,T)&&v(de,P,A.width,A.height),N.__version=P.version,P.onUpdate&&P.onUpdate(P)}function ue(N,P,ne){if(P.image.length!==6)return;se(N,P),t.activeTexture(33984+ne),t.bindTexture(34067,N.__webglTexture),i.pixelStorei(37440,P.flipY),i.pixelStorei(37441,P.premultiplyAlpha),i.pixelStorei(3317,P.unpackAlignment),i.pixelStorei(37443,0);const de=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),G=P.image[0]&&P.image[0].isDataTexture,A=[];for(let J=0;J<6;J++)!de&&!G?A[J]=m(P.image[J],!1,!0,c):A[J]=G?P.image[J].image:P.image[J];const T=A[0],q=_(T)||a,K=s.convert(P.format),ce=s.convert(P.type),fe=b(P.internalFormat,K,ce);Y(34067,P,q);let ye;if(de){for(let J=0;J<6;J++){ye=A[J].mipmaps;for(let _e=0;_e<ye.length;_e++){const Me=ye[_e];P.format!==hn&&P.format!==Ri?K!==null?t.compressedTexImage2D(34069+J,_e,fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+J,_e,fe,Me.width,Me.height,0,K,ce,Me.data)}}N.__maxMipLevel=ye.length-1}else{ye=P.mipmaps;for(let J=0;J<6;J++)if(G){t.texImage2D(34069+J,0,fe,A[J].width,A[J].height,0,K,ce,A[J].data);for(let _e=0;_e<ye.length;_e++){const Ne=ye[_e].image[J].image;t.texImage2D(34069+J,_e+1,fe,Ne.width,Ne.height,0,K,ce,Ne.data)}}else{t.texImage2D(34069+J,0,fe,K,ce,A[J]);for(let _e=0;_e<ye.length;_e++){const Me=ye[_e];t.texImage2D(34069+J,_e+1,fe,K,ce,Me.image[J])}}N.__maxMipLevel=ye.length}M(P,q)&&v(34067,P,T.width,T.height),N.__version=P.version,P.onUpdate&&P.onUpdate(P)}function be(N,P,ne,de){const G=P.texture,A=s.convert(G.format),T=s.convert(G.type),q=b(G.internalFormat,A,T);de===32879||de===35866?t.texImage3D(de,0,q,P.width,P.height,P.depth,0,A,T,null):t.texImage2D(de,0,q,P.width,P.height,0,A,T,null),i.bindFramebuffer(36160,N),i.framebufferTexture2D(36160,ne,de,n.get(G).__webglTexture,0),i.bindFramebuffer(36160,null)}function Se(N,P,ne){if(i.bindRenderbuffer(36161,N),P.depthBuffer&&!P.stencilBuffer){let de=33189;if(ne){const G=P.depthTexture;G&&G.isDepthTexture&&(G.type===ri?de=36012:G.type===Qs&&(de=33190));const A=Fe(P);i.renderbufferStorageMultisample(36161,A,de,P.width,P.height)}else i.renderbufferStorage(36161,de,P.width,P.height);i.framebufferRenderbuffer(36160,36096,36161,N)}else if(P.depthBuffer&&P.stencilBuffer){if(ne){const de=Fe(P);i.renderbufferStorageMultisample(36161,de,35056,P.width,P.height)}else i.renderbufferStorage(36161,34041,P.width,P.height);i.framebufferRenderbuffer(36160,33306,36161,N)}else{const de=P.texture,G=s.convert(de.format),A=s.convert(de.type),T=b(de.internalFormat,G,A);if(ne){const q=Fe(P);i.renderbufferStorageMultisample(36161,q,T,P.width,P.height)}else i.renderbufferStorage(36161,T,P.width,P.height)}i.bindRenderbuffer(36161,null)}function U(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),L(P.depthTexture,0);const de=n.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===hr)i.framebufferTexture2D(36160,36096,3553,de,0);else if(P.depthTexture.format===ps)i.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const P=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");U(P.__webglFramebuffer,N)}else if(ne){P.__webglDepthbuffer=[];for(let de=0;de<6;de++)i.bindFramebuffer(36160,P.__webglFramebuffer[de]),P.__webglDepthbuffer[de]=i.createRenderbuffer(),Se(P.__webglDepthbuffer[de],N,!1)}else i.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Se(P.__webglDepthbuffer,N,!1);i.bindFramebuffer(36160,null)}function we(N){const P=N.texture,ne=n.get(N),de=n.get(P);N.addEventListener("dispose",w),de.__webglTexture=i.createTexture(),o.memory.textures++;const G=N.isWebGLCubeRenderTarget===!0,A=N.isWebGLMultisampleRenderTarget===!0,T=P.isDataTexture3D||P.isDataTexture2DArray,q=_(N)||a;if(a&&P.format===Ri&&(P.type===ri||P.type===co)&&(P.format=hn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),G){ne.__webglFramebuffer=[];for(let K=0;K<6;K++)ne.__webglFramebuffer[K]=i.createFramebuffer()}else if(ne.__webglFramebuffer=i.createFramebuffer(),A)if(a){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,ne.__webglColorRenderbuffer);const K=s.convert(P.format),ce=s.convert(P.type),fe=b(P.internalFormat,K,ce),ye=Fe(N);i.renderbufferStorageMultisample(36161,ye,fe,N.width,N.height),i.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,ne.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(ne.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(G){t.bindTexture(34067,de.__webglTexture),Y(34067,P,q);for(let K=0;K<6;K++)be(ne.__webglFramebuffer[K],N,36064,34069+K);M(P,q)&&v(34067,P,N.width,N.height),t.bindTexture(34067,null)}else{let K=3553;T&&(a?K=P.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(K,de.__webglTexture),Y(K,P,q),be(ne.__webglFramebuffer,N,36064,K),M(P,q)&&v(3553,P,N.width,N.height),t.bindTexture(3553,null)}N.depthBuffer&&Ue(N)}function Ee(N){const P=N.texture,ne=_(N)||a;if(M(P,ne)){const de=N.isWebGLCubeRenderTarget?34067:3553,G=n.get(P).__webglTexture;t.bindTexture(de,G),v(de,P,N.width,N.height),t.bindTexture(de,null)}}function ge(N){if(N.isWebGLMultisampleRenderTarget)if(a){const P=n.get(N);i.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,P.__webglFramebuffer);const ne=N.width,de=N.height;let G=16384;N.depthBuffer&&(G|=256),N.stencilBuffer&&(G|=1024),i.blitFramebuffer(0,0,ne,de,0,0,ne,de,G,9728),i.bindFramebuffer(36160,P.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Fe(N){return a&&N.isWebGLMultisampleRenderTarget?Math.min(h,N.samples):0}function V(N){const P=o.render.frame;d.get(N)!==P&&(d.set(N,P),N.update())}let W=!1,te=!1;function xe(N,P){N&&N.isWebGLRenderTarget&&(W===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),W=!0),N=N.texture),L(N,P)}function ae(N,P){N&&N.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),N=N.texture),$(N,P)}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=$,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ge,this.safeSetTexture2D=xe,this.safeSetTextureCube=ae}function Bg(i,e,t){const n=t.isWebGL2;function r(s){let o;if(s===Es)return 5121;if(s===Em)return 32819;if(s===Tm)return 32820;if(s===Am)return 33635;if(s===bm)return 5120;if(s===wm)return 5122;if(s===lo)return 5123;if(s===Sm)return 5124;if(s===Qs)return 5125;if(s===ri)return 5126;if(s===co)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Lm)return 6406;if(s===Ri)return 6407;if(s===hn)return 6408;if(s===Cm)return 6409;if(s===Rm)return 6410;if(s===hr)return 6402;if(s===ps)return 34041;if(s===Dm)return 6403;if(s===Im)return 36244;if(s===Fm)return 33319;if(s===Nm)return 33320;if(s===Bm)return 36248;if(s===Om)return 36249;if(s===Nh||s===Bh||s===Oh||s===zh)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Nh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uh||s===Gh||s===Hh||s===kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Uh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Vh||s===Wh)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Vh)return o.COMPRESSED_RGB8_ETC2;if(s===Wh)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Um||s===Gm||s===Hm||s===km||s===Vm||s===Wm||s===$m||s===qm||s===Xm||s===Ym||s===jm||s===Zm||s===Jm||s===Km||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===cg||s===hg||s===ug||s===dg||s===fg)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Qm)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===us)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Sl(i=[]){Rt.call(this),this.cameras=i}Sl.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Sl,isArrayCamera:!0});class ar extends We{constructor(){super(),this.type="Group"}}ar.prototype.isGroup=!0;function eo(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(eo.prototype,{constructor:eo,getHandSpace:function(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(i){return this._targetRay!==null&&this._targetRay.dispatchEvent(i),this._grip!==null&&this._grip.dispatchEvent(i),this._hand!==null&&this._hand.dispatchEvent(i),this},disconnect:function(i){return this.dispatchEvent({type:"disconnected",data:i}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(i,e,t){let n=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(i&&e.session.visibilityState!=="visible-blurred")if(l&&i.hand){s=!0;for(const p of i.hand.values()){const g=e.getJointPose(p,t);if(l.joints[p.jointName]===void 0){const _=new ar;_.matrixAutoUpdate=!1,_.visible=!1,l.joints[p.jointName]=_,l.add(_)}const m=l.joints[p.jointName];g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=g.radius),m.visible=g!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),d=.02,f=.005;l.inputState.pinching&&h>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:i.handedness,target:this})):!l.inputState.pinching&&h<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:i.handedness,target:this}))}else o!==null&&(n=e.getPose(i.targetRaySpace,t),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&i.gripSpace&&(r=e.getPose(i.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=n!==null),a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),this}});function Og(i,e){const t=this;let n=null,r=1,s=null,o="local-floor",a=null;const l=[],c=new Map,u=new Rt;u.layers.enable(1),u.viewport=new ot;const h=new Rt;h.layers.enable(2),h.viewport=new ot;const d=[u,h],f=new Sl;f.layers.enable(1),f.layers.enable(2);let p=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let I=l[R];return I===void 0&&(I=new eo,l[R]=I),I.getTargetRaySpace()},this.getControllerGrip=function(R){let I=l[R];return I===void 0&&(I=new eo,l[R]=I),I.getGripSpace()},this.getHand=function(R){let I=l[R];return I===void 0&&(I=new eo,l[R]=I),I.getHandSpace()};function m(R){const I=c.get(R.inputSource);I&&I.dispatchEvent({type:R.type,data:R.inputSource})}function _(){c.forEach(function(R,I){R.disconnect(I)}),c.clear(),p=null,g=null,i.setFramebuffer(null),i.setRenderTarget(i.getRenderTarget()),S.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return n},this.setSession=async function(R){if(n=R,n!==null){n.addEventListener("select",m),n.addEventListener("selectstart",m),n.addEventListener("selectend",m),n.addEventListener("squeeze",m),n.addEventListener("squeezestart",m),n.addEventListener("squeezeend",m),n.addEventListener("end",_),n.addEventListener("inputsourceschange",x);const I=e.getContextAttributes();I.xrCompatible!==!0&&await e.makeXRCompatible();const H={antialias:I.antialias,alpha:I.alpha,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r},z=new XRWebGLLayer(n,e,H);n.updateRenderState({baseLayer:z}),s=await n.requestReferenceSpace(o),S.setContext(n),S.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function x(R){const I=n.inputSources;for(let H=0;H<l.length;H++)c.set(I[H],l[H]);for(let H=0;H<R.removed.length;H++){const z=R.removed[H],L=c.get(z);L&&(L.dispatchEvent({type:"disconnected",data:z}),c.delete(z))}for(let H=0;H<R.added.length;H++){const z=R.added[H],L=c.get(z);L&&L.dispatchEvent({type:"connected",data:z})}}const M=new D,v=new D;function b(R,I,H){M.setFromMatrixPosition(I.matrixWorld),v.setFromMatrixPosition(H.matrixWorld);const z=M.distanceTo(v),L=I.projectionMatrix.elements,B=H.projectionMatrix.elements,O=L[14]/(L[10]-1),$=L[14]/(L[10]+1),Z=(L[9]+1)/L[5],k=(L[9]-1)/L[5],Y=(L[8]-1)/L[0],se=(B[8]+1)/B[0],le=O*Y,ue=O*se,be=z/(-Y+se),Se=be*-Y;I.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Se),R.translateZ(be),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const U=O+be,Ue=$+be,we=le-Se,Ee=ue+(z-Se),ge=Z*$/Ue*U,Fe=k*$/Ue*U;R.projectionMatrix.makePerspective(we,Ee,ge,Fe,U,Ue)}function y(R,I){I===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(I.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.getCamera=function(R){f.near=h.near=u.near=R.near,f.far=h.far=u.far=R.far,(p!==f.near||g!==f.far)&&(n.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,g=f.far);const I=R.parent,H=f.cameras;y(f,I);for(let L=0;L<H.length;L++)y(H[L],I);R.matrixWorld.copy(f.matrixWorld),R.matrix.copy(f.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const z=R.children;for(let L=0,B=z.length;L<B;L++)z[L].updateMatrixWorld(!0);return H.length===2?b(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let E=null;function w(R,I){if(a=I.getViewerPose(s),a!==null){const z=a.views,L=n.renderState.baseLayer;i.setFramebuffer(L.framebuffer);let B=!1;z.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(let O=0;O<z.length;O++){const $=z[O],Z=L.getViewport($),k=d[O];k.matrix.fromArray($.transform.matrix),k.projectionMatrix.fromArray($.projectionMatrix),k.viewport.set(Z.x,Z.y,Z.width,Z.height),O===0&&f.matrix.copy(k.matrix),B===!0&&f.cameras.push(k)}}const H=n.inputSources;for(let z=0;z<l.length;z++){const L=l[z],B=H[z];L.update(B,I,s)}E&&E(R,I)}const S=new Ag;S.setAnimationLoop(w),this.setAnimationLoop=function(R){E=R},this.dispose=function(){}}Object.assign(Og.prototype,hi.prototype);function YE(i){function e(_,x){_.fogColor.value.copy(x.color),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function t(_,x,M,v){x.isMeshBasicMaterial?n(_,x):x.isMeshLambertMaterial?(n(_,x),l(_,x)):x.isMeshToonMaterial?(n(_,x),u(_,x)):x.isMeshPhongMaterial?(n(_,x),c(_,x)):x.isMeshStandardMaterial?(n(_,x),x.isMeshPhysicalMaterial?d(_,x):h(_,x)):x.isMeshMatcapMaterial?(n(_,x),f(_,x)):x.isMeshDepthMaterial?(n(_,x),p(_,x)):x.isMeshDistanceMaterial?(n(_,x),g(_,x)):x.isMeshNormalMaterial?(n(_,x),m(_,x)):x.isLineBasicMaterial?(r(_,x),x.isLineDashedMaterial&&s(_,x)):x.isPointsMaterial?o(_,x,M,v):x.isSpriteMaterial?a(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function n(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap),x.specularMap&&(_.specularMap.value=x.specularMap);const M=i.get(x).envMap;if(M){_.envMap.value=M,_.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,_.reflectivity.value=x.reflectivity,_.refractionRatio.value=x.refractionRatio;const y=i.get(M).__maxMipLevel;y!==void 0&&(_.maxMipLevel.value=y)}x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity);let v;x.map?v=x.map:x.specularMap?v=x.specularMap:x.displacementMap?v=x.displacementMap:x.normalMap?v=x.normalMap:x.bumpMap?v=x.bumpMap:x.roughnessMap?v=x.roughnessMap:x.metalnessMap?v=x.metalnessMap:x.alphaMap?v=x.alphaMap:x.emissiveMap?v=x.emissiveMap:x.clearcoatMap?v=x.clearcoatMap:x.clearcoatNormalMap?v=x.clearcoatNormalMap:x.clearcoatRoughnessMap&&(v=x.clearcoatRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),_.uvTransform.value.copy(v.matrix));let b;x.aoMap?b=x.aoMap:x.lightMap&&(b=x.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),_.uv2Transform.value.copy(b.matrix))}function r(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity}function s(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function o(_,x,M,v){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*M,_.scale.value=v*.5,x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap);let b;x.map?b=x.map:x.alphaMap&&(b=x.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),_.uvTransform.value.copy(b.matrix))}function a(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map),x.alphaMap&&(_.alphaMap.value=x.alphaMap);let M;x.map?M=x.map:x.alphaMap&&(M=x.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),_.uvTransform.value.copy(M.matrix))}function l(_,x){x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap)}function c(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===Ct&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===Ct&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function u(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===Ct&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===Ct&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function h(_,x){_.roughness.value=x.roughness,_.metalness.value=x.metalness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===Ct&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===Ct&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),i.get(x).envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function d(_,x){h(_,x),_.reflectivity.value=x.reflectivity,_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.sheen&&_.sheen.value.copy(x.sheen),x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),_.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===Ct&&_.clearcoatNormalScale.value.negate()),_.transmission.value=x.transmission,x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap)}function f(_,x){x.matcap&&(_.matcap.value=x.matcap),x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===Ct&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===Ct&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function p(_,x){x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}function g(_,x){x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),_.referencePosition.value.copy(x.referencePosition),_.nearDistance.value=x.nearDistance,_.farDistance.value=x.farDistance}function m(_,x){x.bumpMap&&(_.bumpMap.value=x.bumpMap,_.bumpScale.value=x.bumpScale,x.side===Ct&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,_.normalScale.value.copy(x.normalScale),x.side===Ct&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function jE(){const i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return i.style.display="block",i}function lt(i){i=i||{};const e=i.canvas!==void 0?i.canvas:jE(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Jt,this.physicallyCorrectLights=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const g=this;let m=!1,_=null,x=0,M=0,v=null,b=null,y=-1,E=null;const w=new ot,S=new ot;let R=null,I=e.width,H=e.height,z=1,L=null,B=null;const O=new ot(0,0,I,H),$=new ot(0,0,I,H);let Z=!1;const k=new jo;let Y=!1,se=!1;const le=new He,ue=new D,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return v===null?z:1}let U=t;function Ue(F,he){for(let oe=0;oe<F.length;oe++){const me=F[oe],Te=e.getContext(me,he);if(Te!==null)return Te}return null}try{const F={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ge,!1),U===null){const he=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&he.shift(),U=Ue(he,F),U===null)throw Ue(he)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let we,Ee,ge,Fe,V,W,te,xe,ae,N,P,ne,de,G,A,T,q,K,ce,fe,ye;function J(){we=new AS(U),Ee=new SS(U,we,i),we.init(Ee),fe=new Bg(U,we,Ee),ge=new qE(U,we,Ee),ge.scissor(S.copy($).multiplyScalar(z).floor()),ge.viewport(w.copy(O).multiplyScalar(z).floor()),Fe=new RS,V=new FE,W=new XE(U,we,ge,V,Ee,fe,Fe),te=new TS(g),xe=new Qb(U,Ee),ye=new bS(U,we,xe,Ee),ae=new LS(U,xe,Fe,ye),N=new FS(U,ae,xe,Fe),q=new IS(U),A=new ES(V),P=new IE(g,te,we,Ee,ye,A),ne=new YE(V),de=new OE(V),G=new VE(we,Ee),T=new MS(g,te,ge,N,a),K=new wS(U,we,Fe,Ee),ce=new CS(U,we,Fe,Ee),Fe.programs=P.programs,g.capabilities=Ee,g.extensions=we,g.properties=V,g.renderLists=de,g.state=ge,g.info=Fe}J();const _e=new Og(g,U);this.xr=_e;const Me=new Ng(g,N,Ee.maxTextureSize);this.shadowMap=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const F=we.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=we.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(F){F!==void 0&&(z=F,this.setSize(I,H,!1))},this.getSize=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),F=new ve),F.set(I,H)},this.setSize=function(F,he,oe){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=F,H=he,e.width=Math.floor(F*z),e.height=Math.floor(he*z),oe!==!1&&(e.style.width=F+"px",e.style.height=he+"px"),this.setViewport(0,0,F,he)},this.getDrawingBufferSize=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),F=new ve),F.set(I*z,H*z).floor()},this.setDrawingBufferSize=function(F,he,oe){I=F,H=he,z=oe,e.width=Math.floor(F*oe),e.height=Math.floor(he*oe),this.setViewport(0,0,F,he)},this.getCurrentViewport=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),F=new ot),F.copy(w)},this.getViewport=function(F){return F.copy(O)},this.setViewport=function(F,he,oe,me){F.isVector4?O.set(F.x,F.y,F.z,F.w):O.set(F,he,oe,me),ge.viewport(w.copy(O).multiplyScalar(z).floor())},this.getScissor=function(F){return F.copy($)},this.setScissor=function(F,he,oe,me){F.isVector4?$.set(F.x,F.y,F.z,F.w):$.set(F,he,oe,me),ge.scissor(S.copy($).multiplyScalar(z).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(F){ge.setScissorTest(Z=F)},this.setOpaqueSort=function(F){L=F},this.setTransparentSort=function(F){B=F},this.getClearColor=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),F=new Be),F.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor.apply(T,arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha.apply(T,arguments)},this.clear=function(F,he,oe){let me=0;(F===void 0||F)&&(me|=16384),(he===void 0||he)&&(me|=256),(oe===void 0||oe)&&(me|=1024),U.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ge,!1),de.dispose(),G.dispose(),V.dispose(),te.dispose(),N.dispose(),ye.dispose(),_e.dispose(),Pe.stop()};function Ne(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,J()}function Je(F){const he=F.target;he.removeEventListener("dispose",Je),it(he)}function it(F){gt(F),V.remove(F)}function gt(F){const he=V.get(F).program;he!==void 0&&P.releaseProgram(he)}function Q(F,he){F.render(function(oe){g.renderBufferImmediate(oe,he)})}this.renderBufferImmediate=function(F,he){ye.initAttributes();const oe=V.get(F);F.hasPositions&&!oe.position&&(oe.position=U.createBuffer()),F.hasNormals&&!oe.normal&&(oe.normal=U.createBuffer()),F.hasUvs&&!oe.uv&&(oe.uv=U.createBuffer()),F.hasColors&&!oe.color&&(oe.color=U.createBuffer());const me=he.getAttributes();F.hasPositions&&(U.bindBuffer(34962,oe.position),U.bufferData(34962,F.positionArray,35048),ye.enableAttribute(me.position),U.vertexAttribPointer(me.position,3,5126,!1,0,0)),F.hasNormals&&(U.bindBuffer(34962,oe.normal),U.bufferData(34962,F.normalArray,35048),ye.enableAttribute(me.normal),U.vertexAttribPointer(me.normal,3,5126,!1,0,0)),F.hasUvs&&(U.bindBuffer(34962,oe.uv),U.bufferData(34962,F.uvArray,35048),ye.enableAttribute(me.uv),U.vertexAttribPointer(me.uv,2,5126,!1,0,0)),F.hasColors&&(U.bindBuffer(34962,oe.color),U.bufferData(34962,F.colorArray,35048),ye.enableAttribute(me.color),U.vertexAttribPointer(me.color,3,5126,!1,0,0)),ye.disableUnusedAttributes(),U.drawArrays(4,0,F.count),F.count=0},this.renderBufferDirect=function(F,he,oe,me,Te,Ke){he===null&&(he=be);const qe=Te.isMesh&&Te.matrixWorld.determinant()<0,C=bn(F,he,me,Te);ge.setMaterial(me,qe);let X=oe.index;const re=oe.attributes.position;if(X===null){if(re===void 0||re.count===0)return}else if(X.count===0)return;let ee=1;me.wireframe===!0&&(X=ae.getWireframeAttribute(oe),ee=2),(me.morphTargets||me.morphNormals)&&q.update(Te,oe,me,C),ye.setup(Te,me,C,oe,X);let ie,Ae=K;X!==null&&(ie=xe.get(X),Ae=ce,Ae.setIndex(ie));const Ve=X!==null?X.count:re.count,ze=oe.drawRange.start*ee,Ye=oe.drawRange.count*ee,je=Ke!==null?Ke.start*ee:0,et=Ke!==null?Ke.count*ee:1/0,Ze=Math.max(ze,je),at=Math.min(Ve,ze+Ye,je+et)-1,en=Math.max(0,at-Ze+1);if(en!==0){if(Te.isMesh)me.wireframe===!0?(ge.setLineWidth(me.wireframeLinewidth*Se()),Ae.setMode(1)):Ae.setMode(4);else if(Te.isLine){let fn=me.linewidth;fn===void 0&&(fn=1),ge.setLineWidth(fn*Se()),Te.isLineSegments?Ae.setMode(1):Te.isLineLoop?Ae.setMode(2):Ae.setMode(3)}else Te.isPoints?Ae.setMode(0):Te.isSprite&&Ae.setMode(4);if(Te.isInstancedMesh)Ae.renderInstances(Ze,en,Te.count);else if(oe.isInstancedBufferGeometry){const fn=Math.min(oe.instanceCount,oe._maxInstanceCount);Ae.renderInstances(Ze,en,fn)}else Ae.render(Ze,en)}},this.compile=function(F,he){d=G.get(F),d.init(),F.traverseVisible(function(me){me.isLight&&me.layers.test(he.layers)&&(d.pushLight(me),me.castShadow&&d.pushShadow(me))}),d.setupLights();const oe=new WeakMap;F.traverse(function(me){const Te=me.material;if(Te)if(Array.isArray(Te))for(let Ke=0;Ke<Te.length;Ke++){const qe=Te[Ke];oe.has(qe)===!1&&(rt(qe,F,me),oe.set(qe))}else oe.has(Te)===!1&&(rt(Te,F,me),oe.set(Te))})};let Ie=null;function pe(F){_e.isPresenting||Ie&&Ie(F)}const Pe=new Ag;Pe.setAnimationLoop(pe),typeof window<"u"&&Pe.setContext(window),this.setAnimationLoop=function(F){Ie=F,_e.setAnimationLoop(F),F===null?Pe.stop():Pe.start()},this.render=function(F,he){let oe,me;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),oe=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),me=arguments[3]),he!==void 0&&he.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;ye.resetDefaultState(),y=-1,E=null,F.autoUpdate===!0&&F.updateMatrixWorld(),he.parent===null&&he.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(he=_e.getCamera(he)),F.isScene===!0&&F.onBeforeRender(g,F,he,oe||v),d=G.get(F,p.length),d.init(),p.push(d),le.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),k.setFromProjectionMatrix(le),se=this.localClippingEnabled,Y=A.init(this.clippingPlanes,se,he),h=de.get(F,f.length),h.init(),f.push(h),De(F,he,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(L,B),Y===!0&&A.beginShadows();const Te=d.state.shadowsArray;Me.render(Te,F,he),d.setupLights(),d.setupLightsView(he),Y===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe!==void 0&&this.setRenderTarget(oe),T.render(h,F,he,me);const Ke=h.opaque,qe=h.transparent;Ke.length>0&&nt(Ke,F,he),qe.length>0&&nt(qe,F,he),F.isScene===!0&&F.onAfterRender(g,F,he),v!==null&&(W.updateRenderTargetMipmap(v),W.updateMultisampleRenderTarget(v)),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1),p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function De(F,he,oe,me){if(F.visible===!1)return;if(F.layers.test(he.layers)){if(F.isGroup)oe=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(he);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||k.intersectsSprite(F)){me&&ue.setFromMatrixPosition(F.matrixWorld).applyMatrix4(le);const qe=N.update(F),C=F.material;C.visible&&h.push(F,qe,C,oe,ue.z,null)}}else if(F.isImmediateRenderObject)me&&ue.setFromMatrixPosition(F.matrixWorld).applyMatrix4(le),h.push(F,null,F.material,oe,ue.z,null);else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==Fe.render.frame&&(F.skeleton.update(),F.skeleton.frame=Fe.render.frame),!F.frustumCulled||k.intersectsObject(F))){me&&ue.setFromMatrixPosition(F.matrixWorld).applyMatrix4(le);const qe=N.update(F),C=F.material;if(Array.isArray(C)){const X=qe.groups;for(let re=0,ee=X.length;re<ee;re++){const ie=X[re],Ae=C[ie.materialIndex];Ae&&Ae.visible&&h.push(F,qe,Ae,oe,ue.z,ie)}}else C.visible&&h.push(F,qe,C,oe,ue.z,null)}}const Ke=F.children;for(let qe=0,C=Ke.length;qe<C;qe++)De(Ke[qe],he,oe,me)}function nt(F,he,oe){const me=he.isScene===!0?he.overrideMaterial:null;for(let Te=0,Ke=F.length;Te<Ke;Te++){const qe=F[Te],C=qe.object,X=qe.geometry,re=me===null?qe.material:me,ee=qe.group;if(oe.isArrayCamera){const ie=oe.cameras;for(let Ae=0,Ve=ie.length;Ae<Ve;Ae++){const ze=ie[Ae];C.layers.test(ze.layers)&&(ge.viewport(w.copy(ze.viewport)),d.setupLightsView(ze),wt(C,he,ze,X,re,ee))}}else wt(C,he,oe,X,re,ee)}}function wt(F,he,oe,me,Te,Ke){if(F.onBeforeRender(g,he,oe,me,Te,Ke),F.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),F.isImmediateRenderObject){const qe=bn(oe,he,Te,F);ge.setMaterial(Te),ye.reset(),Q(F,qe)}else g.renderBufferDirect(oe,he,me,Te,F,Ke);F.onAfterRender(g,he,oe,me,Te,Ke)}function rt(F,he,oe){he.isScene!==!0&&(he=be);const me=V.get(F),Te=d.state.lights,Ke=d.state.shadowsArray,qe=Te.state.version,C=P.getParameters(F,Te.state,Ke,he,oe),X=P.getProgramCacheKey(C);let re=me.program,ee=!0;if(me.environment=F.isMeshStandardMaterial?he.environment:null,me.fog=he.fog,me.envMap=te.get(F.envMap||me.environment),re===void 0)F.addEventListener("dispose",Je);else if(re.cacheKey!==X)gt(F);else if(me.lightsStateVersion!==qe)ee=!1;else{if(C.shaderID!==void 0)return;ee=!1}ee&&(C.uniforms=P.getUniforms(F),F.onBeforeCompile(C,g),re=P.acquireProgram(C,X),me.program=re,me.uniforms=C.uniforms,me.outputEncoding=C.outputEncoding);const ie=me.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(me.numClippingPlanes=A.numPlanes,me.numIntersection=A.numIntersection,ie.clippingPlanes=A.uniform),me.needsLights=wn(F),me.lightsStateVersion=qe,me.needsLights&&(ie.ambientLightColor.value=Te.state.ambient,ie.lightProbe.value=Te.state.probe,ie.directionalLights.value=Te.state.directional,ie.directionalLightShadows.value=Te.state.directionalShadow,ie.spotLights.value=Te.state.spot,ie.spotLightShadows.value=Te.state.spotShadow,ie.rectAreaLights.value=Te.state.rectArea,ie.ltc_1.value=Te.state.rectAreaLTC1,ie.ltc_2.value=Te.state.rectAreaLTC2,ie.pointLights.value=Te.state.point,ie.pointLightShadows.value=Te.state.pointShadow,ie.hemisphereLights.value=Te.state.hemi,ie.directionalShadowMap.value=Te.state.directionalShadowMap,ie.directionalShadowMatrix.value=Te.state.directionalShadowMatrix,ie.spotShadowMap.value=Te.state.spotShadowMap,ie.spotShadowMatrix.value=Te.state.spotShadowMatrix,ie.pointShadowMap.value=Te.state.pointShadowMap,ie.pointShadowMatrix.value=Te.state.pointShadowMatrix);const Ae=me.program.getUniforms(),Ve=Pi.seqWithValue(Ae.seq,ie);me.uniformsList=Ve}function bn(F,he,oe,me){he.isScene!==!0&&(he=be),W.resetTextureUnits();const Te=he.fog,Ke=oe.isMeshStandardMaterial?he.environment:null,qe=v===null?g.outputEncoding:v.texture.encoding,C=te.get(oe.envMap||Ke),X=V.get(oe),re=d.state.lights;if(Y===!0&&(se===!0||F!==E)){const je=F===E&&oe.id===y;A.setState(oe,F,je)}oe.version===X.__version?(oe.fog&&X.fog!==Te||X.environment!==Ke||X.needsLights&&X.lightsStateVersion!==re.state.version||X.numClippingPlanes!==void 0&&(X.numClippingPlanes!==A.numPlanes||X.numIntersection!==A.numIntersection)||X.outputEncoding!==qe||X.envMap!==C)&&rt(oe,he,me):(rt(oe,he,me),X.__version=oe.version);let ee=!1,ie=!1,Ae=!1;const Ve=X.program,ze=Ve.getUniforms(),Ye=X.uniforms;if(ge.useProgram(Ve.program)&&(ee=!0,ie=!0,Ae=!0),oe.id!==y&&(y=oe.id,ie=!0),ee||E!==F){if(ze.setValue(U,"projectionMatrix",F.projectionMatrix),Ee.logarithmicDepthBuffer&&ze.setValue(U,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),E!==F&&(E=F,ie=!0,Ae=!0),oe.isShaderMaterial||oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshStandardMaterial||oe.envMap){const je=ze.map.cameraPosition;je!==void 0&&je.setValue(U,ue.setFromMatrixPosition(F.matrixWorld))}(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&ze.setValue(U,"isOrthographic",F.isOrthographicCamera===!0),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial||oe.isShadowMaterial||oe.skinning)&&ze.setValue(U,"viewMatrix",F.matrixWorldInverse)}if(oe.skinning){ze.setOptional(U,me,"bindMatrix"),ze.setOptional(U,me,"bindMatrixInverse");const je=me.skeleton;if(je){const et=je.bones;if(Ee.floatVertexTextures){if(je.boneTexture===null){let Ze=Math.sqrt(et.length*4);Ze=Xe.ceilPowerOfTwo(Ze),Ze=Math.max(Ze,4);const at=new Float32Array(Ze*Ze*4);at.set(je.boneMatrices);const en=new gs(at,Ze,Ze,hn,ri);je.boneMatrices=at,je.boneTexture=en,je.boneTextureSize=Ze}ze.setValue(U,"boneTexture",je.boneTexture,W),ze.setValue(U,"boneTextureSize",je.boneTextureSize)}else ze.setOptional(U,je,"boneMatrices")}}return(ie||X.receiveShadow!==me.receiveShadow)&&(X.receiveShadow=me.receiveShadow,ze.setValue(U,"receiveShadow",me.receiveShadow)),ie&&(ze.setValue(U,"toneMappingExposure",g.toneMappingExposure),X.needsLights&&xt(Ye,Ae),Te&&oe.fog&&ne.refreshFogUniforms(Ye,Te),ne.refreshMaterialUniforms(Ye,oe,z,H),Pi.upload(U,X.uniformsList,Ye,W)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Pi.upload(U,X.uniformsList,Ye,W),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&ze.setValue(U,"center",me.center),ze.setValue(U,"modelViewMatrix",me.modelViewMatrix),ze.setValue(U,"normalMatrix",me.normalMatrix),ze.setValue(U,"modelMatrix",me.matrixWorld),Ve}function xt(F,he){F.ambientLightColor.needsUpdate=he,F.lightProbe.needsUpdate=he,F.directionalLights.needsUpdate=he,F.directionalLightShadows.needsUpdate=he,F.pointLights.needsUpdate=he,F.pointLightShadows.needsUpdate=he,F.spotLights.needsUpdate=he,F.spotLightShadows.needsUpdate=he,F.rectAreaLights.needsUpdate=he,F.hemisphereLights.needsUpdate=he}function wn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.setFramebuffer=function(F){_!==F&&v===null&&U.bindFramebuffer(36160,F),_=F},this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTarget=function(F,he=0,oe=0){v=F,x=he,M=oe,F&&V.get(F).__webglFramebuffer===void 0&&W.setupRenderTarget(F);let me=_,Te=!1,Ke=!1;if(F){const qe=F.texture;(qe.isDataTexture3D||qe.isDataTexture2DArray)&&(Ke=!0);const C=V.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(me=C[he],Te=!0):F.isWebGLMultisampleRenderTarget?me=V.get(F).__webglMultisampledFramebuffer:me=C,w.copy(F.viewport),S.copy(F.scissor),R=F.scissorTest}else w.copy(O).multiplyScalar(z).floor(),S.copy($).multiplyScalar(z).floor(),R=Z;if(b!==me&&(U.bindFramebuffer(36160,me),b=me),ge.viewport(w),ge.scissor(S),ge.setScissorTest(R),Te){const qe=V.get(F.texture);U.framebufferTexture2D(36160,36064,34069+he,qe.__webglTexture,oe)}else if(Ke){const qe=V.get(F.texture),C=he||0;U.framebufferTextureLayer(36160,36064,qe.__webglTexture,oe||0,C)}},this.readRenderTargetPixels=function(F,he,oe,me,Te,Ke,qe){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let C=V.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&qe!==void 0&&(C=C[qe]),C){let X=!1;C!==b&&(U.bindFramebuffer(36160,C),X=!0);try{const re=F.texture,ee=re.format,ie=re.type;if(ee!==hn&&fe.convert(ee)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=ie===co&&(we.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&we.has("EXT_color_buffer_float"));if(ie!==Es&&fe.convert(ie)!==U.getParameter(35738)&&!(ie===ri&&(Ee.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?he>=0&&he<=F.width-me&&oe>=0&&oe<=F.height-Te&&U.readPixels(he,oe,me,Te,fe.convert(ee),fe.convert(ie),Ke):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{X&&U.bindFramebuffer(36160,b)}}},this.copyFramebufferToTexture=function(F,he,oe=0){const me=Math.pow(2,-oe),Te=Math.floor(he.image.width*me),Ke=Math.floor(he.image.height*me),qe=fe.convert(he.format);W.setTexture2D(he,0),U.copyTexImage2D(3553,oe,qe,F.x,F.y,Te,Ke,0),ge.unbindTexture()},this.copyTextureToTexture=function(F,he,oe,me=0){const Te=he.image.width,Ke=he.image.height,qe=fe.convert(oe.format),C=fe.convert(oe.type);W.setTexture2D(oe,0),U.pixelStorei(37440,oe.flipY),U.pixelStorei(37441,oe.premultiplyAlpha),U.pixelStorei(3317,oe.unpackAlignment),he.isDataTexture?U.texSubImage2D(3553,me,F.x,F.y,Te,Ke,qe,C,he.image.data):he.isCompressedTexture?U.compressedTexSubImage2D(3553,me,F.x,F.y,he.mipmaps[0].width,he.mipmaps[0].height,qe,he.mipmaps[0].data):U.texSubImage2D(3553,me,F.x,F.y,qe,C,he.image),me===0&&oe.generateMipmaps&&U.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(F,he,oe,me,Te=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ke,height:qe,data:C}=oe.image,X=fe.convert(me.format),re=fe.convert(me.type);let ee;if(me.isDataTexture3D)W.setTexture3D(me,0),ee=32879;else if(me.isDataTexture2DArray)W.setTexture2DArray(me,0),ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,me.flipY),U.pixelStorei(37441,me.premultiplyAlpha),U.pixelStorei(3317,me.unpackAlignment);const ie=U.getParameter(3314),Ae=U.getParameter(32878),Ve=U.getParameter(3316),ze=U.getParameter(3315),Ye=U.getParameter(32877);U.pixelStorei(3314,Ke),U.pixelStorei(32878,qe),U.pixelStorei(3316,F.min.x),U.pixelStorei(3315,F.min.y),U.pixelStorei(32877,F.min.z),U.texSubImage3D(ee,Te,he.x,he.y,he.z,F.max.x-F.min.x+1,F.max.y-F.min.y+1,F.max.z-F.min.z+1,X,re,C),U.pixelStorei(3314,ie),U.pixelStorei(32878,Ae),U.pixelStorei(3316,Ve),U.pixelStorei(3315,ze),U.pixelStorei(32877,Ye),Te===0&&me.generateMipmaps&&U.generateMipmap(ee),ge.unbindTexture()},this.initTexture=function(F){W.setTexture2D(F,0),ge.unbindTexture()},this.resetState=function(){ge.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zg extends lt{}zg.prototype.isWebGL1Renderer=!0;class Zo{constructor(e,t){this.name="",this.color=new Be(e),this.density=t!==void 0?t:25e-5}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Zo.prototype.isFogExp2=!0;class Jo{constructor(e,t,n){this.name="",this.color=new Be(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}clone(){return new Jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Jo.prototype.isFog=!0;class Ql extends We{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ql.prototype.isScene=!0;function tn(i,e){this.array=i,this.stride=e,this.count=i!==void 0?i.length/e:0,this.usage=Yo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xe.generateUUID()}Object.defineProperty(tn.prototype,"needsUpdate",{set:function(i){i===!0&&this.version++}});Object.assign(tn.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(i){return this.usage=i,this},copy:function(i){return this.array=new i.array.constructor(i.array),this.count=i.count,this.stride=i.stride,this.usage=i.usage,this},copyAt:function(i,e,t){i*=this.stride,t*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[i+n]=e.array[t+n];return this},set:function(i,e=0){return this.array.set(i,e),this},clone:function(i){i.arrayBuffers===void 0&&(i.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe.generateUUID()),i.arrayBuffers[this.array.buffer._uuid]===void 0&&(i.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(i.arrayBuffers[this.array.buffer._uuid]),t=new tn(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(i){return this.onUploadCallback=i,this},toJSON:function(i){return i.arrayBuffers===void 0&&(i.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe.generateUUID()),i.arrayBuffers[this.array.buffer._uuid]===void 0&&(i.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Xi=new D;function Bi(i,e,t,n){this.name="",this.data=i,this.itemSize=e,this.offset=t,this.normalized=n===!0}Object.defineProperties(Bi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(i){this.data.needsUpdate=i}}});Object.assign(Bi.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(i){for(let e=0,t=this.data.count;e<t;e++)Xi.x=this.getX(e),Xi.y=this.getY(e),Xi.z=this.getZ(e),Xi.applyMatrix4(i),this.setXYZ(e,Xi.x,Xi.y,Xi.z);return this},setX:function(i,e){return this.data.array[i*this.data.stride+this.offset]=e,this},setY:function(i,e){return this.data.array[i*this.data.stride+this.offset+1]=e,this},setZ:function(i,e){return this.data.array[i*this.data.stride+this.offset+2]=e,this},setW:function(i,e){return this.data.array[i*this.data.stride+this.offset+3]=e,this},getX:function(i){return this.data.array[i*this.data.stride+this.offset]},getY:function(i){return this.data.array[i*this.data.stride+this.offset+1]},getZ:function(i){return this.data.array[i*this.data.stride+this.offset+2]},getW:function(i){return this.data.array[i*this.data.stride+this.offset+3]},setXY:function(i,e,t){return i=i*this.data.stride+this.offset,this.data.array[i+0]=e,this.data.array[i+1]=t,this},setXYZ:function(i,e,t,n){return i=i*this.data.stride+this.offset,this.data.array[i+0]=e,this.data.array[i+1]=t,this.data.array[i+2]=n,this},setXYZW:function(i,e,t,n,r){return i=i*this.data.stride+this.offset,this.data.array[i+0]=e,this.data.array[i+1]=t,this.data.array[i+2]=n,this.data.array[i+3]=r,this},clone:function(i){if(i===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return i.interleavedBuffers===void 0&&(i.interleavedBuffers={}),i.interleavedBuffers[this.data.uuid]===void 0&&(i.interleavedBuffers[this.data.uuid]=this.data.clone(i)),new Bi(i.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(i){if(i===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return i.interleavedBuffers===void 0&&(i.interleavedBuffers={}),i.interleavedBuffers[this.data.uuid]===void 0&&(i.interleavedBuffers[this.data.uuid]=this.data.toJSON(i)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});class ec extends mt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}ec.prototype.isSpriteMaterial=!0;let es;const ks=new D,ts=new D,ns=new D,is=new ve,Vs=new ve,Ug=new He,$a=new D,Ws=new D,qa=new D,wf=new ve,dh=new ve,Sf=new ve;class tc extends We{constructor(e){if(super(),this.type="Sprite",es===void 0){es=new ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tn(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Bi(n,3,0,!1)),es.setAttribute("uv",new Bi(n,2,3,!1))}this.geometry=es,this.material=e!==void 0?e:new ec,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Ug.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Xa($a.set(-.5,-.5,0),ns,o,ts,r,s),Xa(Ws.set(.5,-.5,0),ns,o,ts,r,s),Xa(qa.set(.5,.5,0),ns,o,ts,r,s),wf.set(0,0),dh.set(1,0),Sf.set(1,1);let a=e.ray.intersectTriangle($a,Ws,qa,!1,ks);if(a===null&&(Xa(Ws.set(-.5,.5,0),ns,o,ts,r,s),dh.set(0,1),a=e.ray.intersectTriangle($a,qa,Ws,!1,ks),a===null))return;const l=e.ray.origin.distanceTo(ks);l<e.near||l>e.far||t.push({distance:l,point:ks.clone(),uv:Et.getUV(ks,$a,Ws,qa,wf,dh,Sf,new ve),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}tc.prototype.isSprite=!0;function Xa(i,e,t,n,r,s){is.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Vs.x=s*is.x-r*is.y,Vs.y=r*is.x+s*is.y):Vs.copy(is),i.copy(e),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Ug)}const Ya=new D,Ef=new D;class wu extends We{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ya.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(Ya);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ya.setFromMatrixPosition(e.matrixWorld),Ef.setFromMatrixPosition(this.matrixWorld);const n=Ya.distanceTo(Ef)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s&&n>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const o=n[r];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}}const Tf=new D,Af=new ot,Lf=new ot,ZE=new D,Cf=new He;function bo(i,e){ut.call(this,i,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}bo.prototype=Object.assign(Object.create(ut.prototype),{constructor:bo,isSkinnedMesh:!0,copy:function(i){return ut.prototype.copy.call(this,i),this.bindMode=i.bindMode,this.bindMatrix.copy(i.bindMatrix),this.bindMatrixInverse.copy(i.bindMatrixInverse),this.skeleton=i.skeleton,this},bind:function(i,e){this.skeleton=i,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const i=new ot,e=this.geometry.attributes.skinWeight;for(let t=0,n=e.count;t<n;t++){i.x=e.getX(t),i.y=e.getY(t),i.z=e.getZ(t),i.w=e.getW(t);const r=1/i.manhattanLength();r!==1/0?i.multiplyScalar(r):i.set(1,0,0,0),e.setXYZW(t,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(i){ut.prototype.updateMatrixWorld.call(this,i),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(i,e){const t=this.skeleton,n=this.geometry;Af.fromBufferAttribute(n.attributes.skinIndex,i),Lf.fromBufferAttribute(n.attributes.skinWeight,i),Tf.fromBufferAttribute(n.attributes.position,i).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Lf.getComponent(r);if(s!==0){const o=Af.getComponent(r);Cf.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(ZE.copy(Tf).applyMatrix4(Cf),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function wo(){We.call(this),this.type="Bone"}wo.prototype=Object.assign(Object.create(We.prototype),{constructor:wo,isBone:!0});const Rf=new He,JE=new He;class Ko{constructor(e=[],t=[]){this.uuid=Xe.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:JE;Rf.multiplyMatrices(a,t[s]),Rf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ko(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wo),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}const Pf=new He,Df=new He,ja=[],$s=new ut;function El(i,e,t){ut.call(this,i,e),this.instanceMatrix=new $e(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}El.prototype=Object.assign(Object.create(ut.prototype),{constructor:El,isInstancedMesh:!0,copy:function(i){return ut.prototype.copy.call(this,i),this.instanceMatrix.copy(i.instanceMatrix),i.instanceColor!==null&&(this.instanceColor=i.instanceColor.clone()),this.count=i.count,this},getColorAt:function(i,e){e.fromArray(this.instanceColor.array,i*3)},getMatrixAt:function(i,e){e.fromArray(this.instanceMatrix.array,i*16)},raycast:function(i,e){const t=this.matrixWorld,n=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0)for(let r=0;r<n;r++){this.getMatrixAt(r,Pf),Df.multiplyMatrices(t,Pf),$s.matrixWorld=Df,$s.raycast(i,ja);for(let s=0,o=ja.length;s<o;s++){const a=ja[s];a.instanceId=r,a.object=this,e.push(a)}ja.length=0}},setColorAt:function(i,e){this.instanceColor===null&&(this.instanceColor=new $e(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,i*3)},setMatrixAt:function(i,e){e.toArray(this.instanceMatrix.array,i*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});class Ut extends mt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Ut.prototype.isLineBasicMaterial=!0;const If=new D,Ff=new D,Nf=new He,fh=new Hi,Za=new Gi;function Nn(i=new ke,e=new Ut){We.call(this),this.type="Line",this.geometry=i,this.material=e,this.updateMorphTargets()}Nn.prototype=Object.assign(Object.create(We.prototype),{constructor:Nn,isLine:!0,copy:function(i){return We.prototype.copy.call(this,i),this.material=i.material,this.geometry=i.geometry,this},computeLineDistances:function(){const i=this.geometry;if(i.isBufferGeometry)if(i.index===null){const e=i.attributes.position,t=[0];for(let n=1,r=e.count;n<r;n++)If.fromBufferAttribute(e,n-1),Ff.fromBufferAttribute(e,n),t[n]=t[n-1],t[n]+=If.distanceTo(Ff);i.setAttribute("lineDistance",new Oe(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else i.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(i,e){const t=this.geometry,n=this.matrixWorld,r=i.params.Line.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Za.copy(t.boundingSphere),Za.applyMatrix4(n),Za.radius+=r,i.ray.intersectsSphere(Za)===!1)return;Nf.copy(n).invert(),fh.copy(i.ray).applyMatrix4(Nf);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new D,l=new D,c=new D,u=new D,h=this.isLineSegments?2:1;if(t.isBufferGeometry){const d=t.index,p=t.attributes.position;if(d!==null){const g=d.array;for(let m=0,_=g.length-1;m<_;m+=h){const x=g[m],M=g[m+1];if(a.fromBufferAttribute(p,x),l.fromBufferAttribute(p,M),fh.distanceSqToSegment(a,l,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);const b=i.ray.origin.distanceTo(u);b<i.near||b>i.far||e.push({distance:b,point:c.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else for(let g=0,m=p.count-1;g<m;g+=h){if(a.fromBufferAttribute(p,g),l.fromBufferAttribute(p,g+1),fh.distanceSqToSegment(a,l,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);const x=i.ray.origin.distanceTo(u);x<i.near||x>i.far||e.push({distance:x,point:c.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const i=this.geometry;if(i.isBufferGeometry){const e=i.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=i.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Bf=new D,Of=new D;function Kt(i,e){Nn.call(this,i,e),this.type="LineSegments"}Kt.prototype=Object.assign(Object.create(Nn.prototype),{constructor:Kt,isLineSegments:!0,computeLineDistances:function(){const i=this.geometry;if(i.isBufferGeometry)if(i.index===null){const e=i.attributes.position,t=[];for(let n=0,r=e.count;n<r;n+=2)Bf.fromBufferAttribute(e,n),Of.fromBufferAttribute(e,n+1),t[n]=n===0?0:t[n-1],t[n+1]=t[n]+Bf.distanceTo(Of);i.setAttribute("lineDistance",new Oe(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else i.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});class Su extends Nn{constructor(e,t){super(e,t),this.type="LineLoop"}}Su.prototype.isLineLoop=!0;class br extends mt{constructor(e){super(),this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}br.prototype.isPointsMaterial=!0;const zf=new He,Xh=new Hi,Ja=new Gi,Ka=new D;function xs(i=new ke,e=new br){We.call(this),this.type="Points",this.geometry=i,this.material=e,this.updateMorphTargets()}xs.prototype=Object.assign(Object.create(We.prototype),{constructor:xs,isPoints:!0,copy:function(i){return We.prototype.copy.call(this,i),this.material=i.material,this.geometry=i.geometry,this},raycast:function(i,e){const t=this.geometry,n=this.matrixWorld,r=i.params.Points.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere),Ja.applyMatrix4(n),Ja.radius+=r,i.ray.intersectsSphere(Ja)===!1)return;zf.copy(n).invert(),Xh.copy(i.ray).applyMatrix4(zf);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(t.isBufferGeometry){const a=t.index,c=t.attributes.position;if(a!==null){const u=a.array;for(let h=0,d=u.length;h<d;h++){const f=u[h];Ka.fromBufferAttribute(c,f),Uf(Ka,f,o,n,i,e,this)}}else for(let u=0,h=c.count;u<h;u++)Ka.fromBufferAttribute(c,u),Uf(Ka,u,o,n,i,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const i=this.geometry;if(i.isBufferGeometry){const e=i.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=i.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Uf(i,e,t,n,r,s,o){const a=Xh.distanceSqToPoint(i);if(a<t){const l=new D;Xh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Gg extends Nt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.format=a!==void 0?a:Ri,this.minFilter=o!==void 0?o:It,this.magFilter=s!==void 0?s:It,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Gg.prototype.isVideoTexture=!0;class Eu extends Nt{constructor(e,t,n,r,s,o,a,l,c,u,h,d){super(null,o,a,l,c,u,r,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Eu.prototype.isCompressedTexture=!0;class Hg extends Nt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.needsUpdate=!0}}Hg.prototype.isCanvasTexture=!0;class kg extends Nt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:hr,u!==hr&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hr&&(n=lo),n===void 0&&u===ps&&(n=us),super(null,r,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}kg.prototype.isDepthTexture=!0;class Tl extends ke{constructor(e=1,t=8,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,u=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}}class _s extends ke{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let p=0;const g=[],m=n/2;let _=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function x(){const v=new D,b=new D;let y=0;const E=(t-e)/n;for(let w=0;w<=s;w++){const S=[],R=w/s,I=R*(t-e)+e;for(let H=0;H<=r;H++){const z=H/r,L=z*l+a,B=Math.sin(L),O=Math.cos(L);b.x=I*B,b.y=-R*n+m,b.z=I*O,h.push(b.x,b.y,b.z),v.set(B,E,O).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-R),S.push(p++)}g.push(S)}for(let w=0;w<r;w++)for(let S=0;S<s;S++){const R=g[S][w],I=g[S+1][w],H=g[S+1][w+1],z=g[S][w+1];u.push(R,I,z),u.push(I,H,z),y+=6}c.addGroup(_,y,0),_+=y}function M(v){const b=p,y=new ve,E=new D;let w=0;const S=v===!0?e:t,R=v===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;const I=p;for(let H=0;H<=r;H++){const L=H/r*l+a,B=Math.cos(L),O=Math.sin(L);E.x=S*O,E.y=m*R,E.z=S*B,h.push(E.x,E.y,E.z),d.push(0,R,0),y.x=B*.5+.5,y.y=O*.5*R+.5,f.push(y.x,y.y),p++}for(let H=0;H<r;H++){const z=b+H,L=I+H;v===!0?u.push(L,L+1,z):u.push(L+1,L,z),w+=3}c.addGroup(_,w,v===!0?1:2),_+=w}}}class Al extends _s{constructor(e=1,t=1,n=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class Oi extends ke{constructor(e,t,n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,v=new D,b=new D;for(let y=0;y<t.length;y+=3)f(t[y+0],M),f(t[y+1],v),f(t[y+2],b),l(M,v,b,x)}function l(x,M,v,b){const y=b+1,E=[];for(let w=0;w<=y;w++){E[w]=[];const S=x.clone().lerp(v,w/y),R=M.clone().lerp(v,w/y),I=y-w;for(let H=0;H<=I;H++)H===0&&w===y?E[w][H]=S:E[w][H]=S.clone().lerp(R,H/I)}for(let w=0;w<y;w++)for(let S=0;S<2*(y-w)-1;S++){const R=Math.floor(S/2);S%2===0?(d(E[w][R+1]),d(E[w+1][R]),d(E[w][R])):(d(E[w][R+1]),d(E[w+1][R+1]),d(E[w+1][R]))}}function c(x){const M=new D;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(x),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function u(){const x=new D;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const v=m(x)/2/Math.PI+.5,b=_(x)/Math.PI+.5;o.push(v,1-b)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],v=o[x+2],b=o[x+4],y=Math.max(M,v,b),E=Math.min(M,v,b);y>.9&&E<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){const x=new D,M=new D,v=new D,b=new D,y=new ve,E=new ve,w=new ve;for(let S=0,R=0;S<s.length;S+=9,R+=6){x.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),y.set(o[R+0],o[R+1]),E.set(o[R+2],o[R+3]),w.set(o[R+4],o[R+5]),b.copy(x).add(M).add(v).divideScalar(3);const I=m(b);g(y,R+0,x,I),g(E,R+2,M,I),g(w,R+4,v,I)}}function g(x,M,v,b){b<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function _(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}}class Ll extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}}const Qa=new D,el=new D,ph=new D,tl=new Et;class Tu extends ke{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const r=Math.pow(10,4),s=Math.cos(Xe.DEG2RAD*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:g,b:m,c:_}=tl;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),tl.getNormal(ph),h[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const M=(x+1)%3,v=h[x],b=h[M],y=tl[u[x]],E=tl[u[M]],w=`${v}_${b}`,S=`${b}_${v}`;S in d&&d[S]?(ph.dot(d[S].normal)<=s&&(f.push(y.x,y.y,y.z),f.push(E.x,E.y,E.z)),d[S]=null):w in d||(d[w]={index0:c[x],index1:c[M],normal:ph.clone()})}}for(const p in d)if(d[p]){const{index0:g,index1:m}=d[p];Qa.fromBufferAttribute(a,g),el.fromBufferAttribute(a,m),f.push(Qa.x,Qa.y,Qa.z),f.push(el.x,el.y,el.z)}this.setAttribute("position",new Oe(f,3))}}const KE={triangulate:function(i,e,t){t=t||2;const n=e&&e.length,r=n?e[0]*t:i.length;let s=Vg(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=iT(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let p=t;p<r;p+=t)h=i[p],d=i[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?1/f:0}return So(s,o,t,a,l,f),o}};function Vg(i,e,t,n,r){let s,o;if(r===pT(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Gf(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Gf(s,i[s],i[s+1],o);return o&&nc(o,o.next)&&(To(o),o=o.next),o}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nc(t,t.next)||yt(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function So(i,e,t,n,r,s,o){if(!i)return;!o&&s&&lT(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?eT(i,n,r,s):QE(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),To(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tT(zi(i),e,t),So(i,e,t,n,r,s,2)):o===2&&nT(i,e,t,n,r,s):So(zi(i),e,t,n,r,s,1);break}}}function QE(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(cs(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&yt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function eT(i,e,t,n){const r=i.prev,s=i,o=i.next;if(yt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Yh(a,l,e,t,n),d=Yh(c,u,e,t,n);let f=i.prevZ,p=i.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==i.prev&&f!==i.next&&cs(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&yt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==i.prev&&p!==i.next&&cs(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&yt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==i.prev&&f!==i.next&&cs(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&yt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==i.prev&&p!==i.next&&cs(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function tT(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!nc(r,s)&&Wg(r,n,n.next,s)&&Eo(r,s)&&Eo(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),To(n),To(n.next),n=i=s),n=n.next}while(n!==i);return zi(n)}function nT(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uT(o,a)){let l=$g(o,a);o=zi(o,o.next),l=zi(l,l.next),So(o,e,t,n,r,s),So(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function iT(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Vg(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(hT(c));for(r.sort(rT),s=0;s<r.length;s++)sT(r[s],t),t=zi(t,t.next);return t}function rT(i,e){return i.x-e.x}function sT(i,e){if(e=oT(i,e),e){const t=$g(e,i);zi(e,e.next),zi(t,t.next)}}function oT(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&cs(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),Eo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&aT(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function aT(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function lT(i,e,t,n){let r=i;do r.z===null&&(r.z=Yh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cT(r)}function cT(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Yh(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cs(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function uT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dT(i,e)&&(Eo(i,e)&&Eo(e,i)&&fT(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||nc(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nc(i,e){return i.x===e.x&&i.y===e.y}function Wg(i,e,t,n){const r=il(yt(i,e,t)),s=il(yt(i,e,n)),o=il(yt(t,n,i)),a=il(yt(t,n,e));return!!(r!==s&&o!==a||r===0&&nl(i,t,e)||s===0&&nl(i,n,e)||o===0&&nl(t,i,n)||a===0&&nl(t,e,n))}function nl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function il(i){return i>0?1:i<0?-1:0}function dT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Eo(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function fT(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $g(i,e){const t=new jh(i.i,i.x,i.y),n=new jh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Gf(i,e,t,n){const r=new jh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pT(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}const ai={area:function(i){const e=i.length;let t=0;for(let n=e-1,r=0;r<e;n=r++)t+=i[n].x*i[r].y-i[r].x*i[n].y;return t*.5},isClockWise:function(i){return ai.area(i)<0},triangulateShape:function(i,e){const t=[],n=[],r=[];Hf(i),kf(t,i);let s=i.length;e.forEach(Hf);for(let a=0;a<e.length;a++)n.push(s),s+=e[a].length,kf(t,e[a]);const o=KE.triangulate(t,n);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Hf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class li extends ke{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:mT;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let M,v=!1,b,y,E,w;_&&(M=_.getSpacedPoints(u),v=!0,d=!1,b=_.computeFrenetFrames(u,!1),y=new D,E=new D,w=new D),d||(m=0,f=0,p=0,g=0);const S=a.extractPoints(c);let R=S.shape;const I=S.holes;if(!ai.isClockWise(R)){R=R.reverse();for(let V=0,W=I.length;V<W;V++){const te=I[V];ai.isClockWise(te)&&(I[V]=te.reverse())}}const z=ai.triangulateShape(R,I),L=R;for(let V=0,W=I.length;V<W;V++){const te=I[V];R=R.concat(te)}function B(V,W,te){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().multiplyScalar(te).add(V)}const O=R.length,$=z.length;function Z(V,W,te){let xe,ae,N;const P=V.x-W.x,ne=V.y-W.y,de=te.x-V.x,G=te.y-V.y,A=P*P+ne*ne,T=P*G-ne*de;if(Math.abs(T)>Number.EPSILON){const q=Math.sqrt(A),K=Math.sqrt(de*de+G*G),ce=W.x-ne/q,fe=W.y+P/q,ye=te.x-G/K,J=te.y+de/K,_e=((ye-ce)*G-(J-fe)*de)/(P*G-ne*de);xe=ce+P*_e-V.x,ae=fe+ne*_e-V.y;const Me=xe*xe+ae*ae;if(Me<=2)return new ve(xe,ae);N=Math.sqrt(Me/2)}else{let q=!1;P>Number.EPSILON?de>Number.EPSILON&&(q=!0):P<-Number.EPSILON?de<-Number.EPSILON&&(q=!0):Math.sign(ne)===Math.sign(G)&&(q=!0),q?(xe=-ne,ae=P,N=Math.sqrt(A)):(xe=P,ae=ne,N=Math.sqrt(A/2))}return new ve(xe/N,ae/N)}const k=[];for(let V=0,W=L.length,te=W-1,xe=V+1;V<W;V++,te++,xe++)te===W&&(te=0),xe===W&&(xe=0),k[V]=Z(L[V],L[te],L[xe]);const Y=[];let se,le=k.concat();for(let V=0,W=I.length;V<W;V++){const te=I[V];se=[];for(let xe=0,ae=te.length,N=ae-1,P=xe+1;xe<ae;xe++,N++,P++)N===ae&&(N=0),P===ae&&(P=0),se[xe]=Z(te[xe],te[N],te[P]);Y.push(se),le=le.concat(se)}for(let V=0;V<m;V++){const W=V/m,te=f*Math.cos(W*Math.PI/2),xe=p*Math.sin(W*Math.PI/2)+g;for(let ae=0,N=L.length;ae<N;ae++){const P=B(L[ae],k[ae],xe);Ue(P.x,P.y,-te)}for(let ae=0,N=I.length;ae<N;ae++){const P=I[ae];se=Y[ae];for(let ne=0,de=P.length;ne<de;ne++){const G=B(P[ne],se[ne],xe);Ue(G.x,G.y,-te)}}}const ue=p+g;for(let V=0;V<O;V++){const W=d?B(R[V],le[V],ue):R[V];v?(E.copy(b.normals[0]).multiplyScalar(W.x),y.copy(b.binormals[0]).multiplyScalar(W.y),w.copy(M[0]).add(E).add(y),Ue(w.x,w.y,w.z)):Ue(W.x,W.y,0)}for(let V=1;V<=u;V++)for(let W=0;W<O;W++){const te=d?B(R[W],le[W],ue):R[W];v?(E.copy(b.normals[V]).multiplyScalar(te.x),y.copy(b.binormals[V]).multiplyScalar(te.y),w.copy(M[V]).add(E).add(y),Ue(w.x,w.y,w.z)):Ue(te.x,te.y,h/u*V)}for(let V=m-1;V>=0;V--){const W=V/m,te=f*Math.cos(W*Math.PI/2),xe=p*Math.sin(W*Math.PI/2)+g;for(let ae=0,N=L.length;ae<N;ae++){const P=B(L[ae],k[ae],xe);Ue(P.x,P.y,h+te)}for(let ae=0,N=I.length;ae<N;ae++){const P=I[ae];se=Y[ae];for(let ne=0,de=P.length;ne<de;ne++){const G=B(P[ne],se[ne],xe);v?Ue(G.x,G.y+M[u-1].y,M[u-1].x+te):Ue(G.x,G.y,h+te)}}}be(),Se();function be(){const V=r.length/3;if(d){let W=0,te=O*W;for(let xe=0;xe<$;xe++){const ae=z[xe];we(ae[2]+te,ae[1]+te,ae[0]+te)}W=u+m*2,te=O*W;for(let xe=0;xe<$;xe++){const ae=z[xe];we(ae[0]+te,ae[1]+te,ae[2]+te)}}else{for(let W=0;W<$;W++){const te=z[W];we(te[2],te[1],te[0])}for(let W=0;W<$;W++){const te=z[W];we(te[0]+O*u,te[1]+O*u,te[2]+O*u)}}n.addGroup(V,r.length/3-V,0)}function Se(){const V=r.length/3;let W=0;U(L,W),W+=L.length;for(let te=0,xe=I.length;te<xe;te++){const ae=I[te];U(ae,W),W+=ae.length}n.addGroup(V,r.length/3-V,1)}function U(V,W){let te=V.length;for(;--te>=0;){const xe=te;let ae=te-1;ae<0&&(ae=V.length-1);for(let N=0,P=u+m*2;N<P;N++){const ne=O*N,de=O*(N+1),G=W+xe+ne,A=W+ae+ne,T=W+ae+de,q=W+xe+de;Ee(G,A,T,q)}}}function Ue(V,W,te){l.push(V),l.push(W),l.push(te)}function we(V,W,te){ge(V),ge(W),ge(te);const xe=r.length/3,ae=x.generateTopUV(n,r,xe-3,xe-2,xe-1);Fe(ae[0]),Fe(ae[1]),Fe(ae[2])}function Ee(V,W,te,xe){ge(V),ge(W),ge(xe),ge(W),ge(te),ge(xe);const ae=r.length/3,N=x.generateSideWallUV(n,r,ae-6,ae-3,ae-2,ae-1);Fe(N[0]),Fe(N[1]),Fe(N[3]),Fe(N[1]),Fe(N[2]),Fe(N[3])}function ge(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function Fe(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=ke.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return gT(t,n,e)}}const mT={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],g=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<.01?[new ve(o,1-l),new ve(c,1-h),new ve(d,1-p),new ve(g,1-_)]:[new ve(a,1-l),new ve(u,1-h),new ve(f,1-p),new ve(m,1-_)]}};function gT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cl extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}}class Rl extends ke{constructor(e,t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Xe.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],l=1/t,c=new D,u=new ve;for(let h=0;h<=t;h++){const d=n+h*l*r,f=Math.sin(d),p=Math.cos(d);for(let g=0;g<=e.length-1;g++)c.x=e[g].x*f,c.y=e[g].y,c.z=e[g].x*p,o.push(c.x,c.y,c.z),u.x=h/t,u.y=g/(e.length-1),a.push(u.x,u.y)}for(let h=0;h<t;h++)for(let d=0;d<e.length-1;d++){const f=d+h*e.length,p=f,g=f+e.length,m=f+e.length+1,_=f+1;s.push(p,g,_),s.push(g,m,_)}if(this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.computeVertexNormals(),r===Math.PI*2){const h=this.attributes.normal.array,d=new D,f=new D,p=new D,g=t*e.length*3;for(let m=0,_=0;m<e.length;m++,_+=3)d.x=h[_+0],d.y=h[_+1],d.z=h[_+2],f.x=h[g+_+0],f.y=h[g+_+1],f.z=h[g+_+2],p.addVectors(d,f).normalize(),h[_+0]=h[g+_+0]=p.x,h[_+1]=h[g+_+1]=p.y,h[_+2]=h[g+_+2]=p.z}}}class Ao extends Oi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}}function xr(i,e,t){ke.call(this),this.type="ParametricGeometry",this.parameters={func:i,slices:e,stacks:t};const n=[],r=[],s=[],o=[],a=1e-5,l=new D,c=new D,u=new D,h=new D,d=new D;i.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=e+1;for(let p=0;p<=t;p++){const g=p/t;for(let m=0;m<=e;m++){const _=m/e;i(_,g,c),r.push(c.x,c.y,c.z),_-a>=0?(i(_-a,g,u),h.subVectors(c,u)):(i(_+a,g,u),h.subVectors(u,c)),g-a>=0?(i(_,g-a,u),d.subVectors(c,u)):(i(_,g+a,u),d.subVectors(u,c)),l.crossVectors(h,d).normalize(),s.push(l.x,l.y,l.z),o.push(_,g)}}for(let p=0;p<t;p++)for(let g=0;g<e;g++){const m=p*f+g,_=p*f+g+1,x=(p+1)*f+g+1,M=(p+1)*f+g;n.push(m,_,M),n.push(_,x,M)}this.setIndex(n),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2))}xr.prototype=Object.create(ke.prototype);xr.prototype.constructor=xr;class Pl extends ke{constructor(e=.5,t=1,n=8,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,f=new D,p=new ve;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){const _=s+m/n*o;f.x=h*Math.cos(_),f.y=h*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let g=0;g<r;g++){const m=g*(n+1);for(let _=0;_<n;_++){const x=_+m,M=x,v=x+n+1,b=x+n+2,y=x+1;a.push(M,v,y),a.push(v,b,y)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}}class Lo extends ke{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,_=p.length;m<_;m++){const x=p[m];ai.isClockWise(x)===!0&&(p[m]=x.reverse())}const g=ai.triangulateShape(f,p);for(let m=0,_=p.length;m<_;m++){const x=p[m];f=f.concat(x)}for(let m=0,_=f.length;m<_;m++){const x=f[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,_=g.length;m<_;m++){const x=g[m],M=x[0]+h,v=x[1]+h,b=x[2]+h;n.push(M,v,b),l+=3}}}toJSON(){const e=ke.prototype.toJSON.call(this),t=this.parameters.shapes;return xT(t,e)}}function xT(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Co extends ke{constructor(e=1,t=8,n=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){const x=[],M=_/n;let v=0;_==0&&o==0?v=.5/t:_==n&&l==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const y=b/t;h.x=-e*Math.cos(r+y*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+y*s)*Math.sin(o+M*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(y+v,1-M),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const M=u[_][x+1],v=u[_][x],b=u[_+1][x],y=u[_+1][x+1];(_!==0||o>0)&&f.push(M,v,y),(_!==n-1||l<Math.PI)&&f.push(v,b,y)}this.setIndex(f),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(m,2))}}class Dl extends Oi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class Il extends li{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new ke;const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t),this.type="TextGeometry"}}class Fl extends ke{constructor(e=1,t=.4,n=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){const g=p/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){const g=(r+1)*f+p-1,m=(r+1)*(f-1)+p-1,_=(r+1)*(f-1)+p,x=(r+1)*f+p;o.push(g,m,x),o.push(m,_,x)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}}class Nl extends ke{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],h=new D,d=new D,f=new D,p=new D,g=new D,m=new D,_=new D;for(let M=0;M<=n;++M){const v=M/n*s*Math.PI*2;x(v,s,o,e,f),x(v+.01,s,o,e,p),m.subVectors(p,f),_.addVectors(p,f),g.crossVectors(m,_),_.crossVectors(g,m),g.normalize(),_.normalize();for(let b=0;b<=r;++b){const y=b/r*Math.PI*2,E=-t*Math.cos(y),w=t*Math.sin(y);h.x=f.x+(E*_.x+w*g.x),h.y=f.y+(E*_.y+w*g.y),h.z=f.z+(E*_.z+w*g.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(M/n),u.push(b/r)}}for(let M=1;M<=n;M++)for(let v=1;v<=r;v++){const b=(r+1)*(M-1)+(v-1),y=(r+1)*M+(v-1),E=(r+1)*M+v,w=(r+1)*(M-1)+v;a.push(b,y,w),a.push(y,E,w)}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2));function x(M,v,b,y,E){const w=Math.cos(M),S=Math.sin(M),R=b/v*M,I=Math.cos(R);E.x=y*(2+I)*.5*w,E.y=y*(2+I)*S*.5,E.z=y*Math.sin(R)*.5}}}class Bl extends ke{constructor(e,t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new ve;let u=new D;const h=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function g(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),x(),_()}function m(M){u=e.getPointAt(M/t,u);const v=o.normals[M],b=o.binormals[M];for(let y=0;y<=r;y++){const E=y/r*Math.PI*2,w=Math.sin(E),S=-Math.cos(E);l.x=S*v.x+w*b.x,l.y=S*v.y+w*b.y,l.z=S*v.z+w*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){const b=(r+1)*(M-1)+(v-1),y=(r+1)*M+(v-1),E=(r+1)*M+v,w=(r+1)*(M-1)+v;p.push(b,y,w),p.push(y,E,w)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,f.push(c.x,c.y)}}toJSON(){const e=ke.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class Au extends ke{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],n=[0,0],r={},s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,g=d+f;p<g;p+=3)for(let m=0;m<3;m++){const _=a.getX(p+m),x=a.getX(p+(m+1)%3);n[0]=Math.min(_,x),n[1]=Math.max(_,x);const M=n[0]+","+n[1];r[M]===void 0&&(r[M]={index1:n[0],index2:n[1]})}}for(const c in r){const u=r[c];s.fromBufferAttribute(o,u.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,u.index2),t.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z);const h=3*a+(c+1)%3;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z)}}this.setAttribute("position",new Oe(t,3))}}var qt=Object.freeze({__proto__:null,BoxGeometry:gr,BoxBufferGeometry:gr,CircleGeometry:Tl,CircleBufferGeometry:Tl,ConeGeometry:Al,ConeBufferGeometry:Al,CylinderGeometry:_s,CylinderBufferGeometry:_s,DodecahedronGeometry:Ll,DodecahedronBufferGeometry:Ll,EdgesGeometry:Tu,ExtrudeGeometry:li,ExtrudeBufferGeometry:li,IcosahedronGeometry:Cl,IcosahedronBufferGeometry:Cl,LatheGeometry:Rl,LatheBufferGeometry:Rl,OctahedronGeometry:Ao,OctahedronBufferGeometry:Ao,ParametricGeometry:xr,ParametricBufferGeometry:xr,PlaneGeometry:Mo,PlaneBufferGeometry:Mo,PolyhedronGeometry:Oi,PolyhedronBufferGeometry:Oi,RingGeometry:Pl,RingBufferGeometry:Pl,ShapeGeometry:Lo,ShapeBufferGeometry:Lo,SphereGeometry:Co,SphereBufferGeometry:Co,TetrahedronGeometry:Dl,TetrahedronBufferGeometry:Dl,TextGeometry:Il,TextBufferGeometry:Il,TorusGeometry:Fl,TorusBufferGeometry:Fl,TorusKnotGeometry:Nl,TorusKnotBufferGeometry:Nl,TubeGeometry:Bl,TubeBufferGeometry:Bl,WireframeGeometry:Au});class Lu extends mt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Lu.prototype.isShadowMaterial=!0;class Ls extends nn{constructor(e){super(e),this.type="RawShaderMaterial"}}Ls.prototype.isRawShaderMaterial=!0;function Wn(i){mt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(i)}Wn.prototype=Object.create(mt.prototype);Wn.prototype.constructor=Wn;Wn.prototype.isMeshStandardMaterial=!0;Wn.prototype.copy=function(i){return mt.prototype.copy.call(this,i),this.defines={STANDARD:""},this.color.copy(i.color),this.roughness=i.roughness,this.metalness=i.metalness,this.map=i.map,this.lightMap=i.lightMap,this.lightMapIntensity=i.lightMapIntensity,this.aoMap=i.aoMap,this.aoMapIntensity=i.aoMapIntensity,this.emissive.copy(i.emissive),this.emissiveMap=i.emissiveMap,this.emissiveIntensity=i.emissiveIntensity,this.bumpMap=i.bumpMap,this.bumpScale=i.bumpScale,this.normalMap=i.normalMap,this.normalMapType=i.normalMapType,this.normalScale.copy(i.normalScale),this.displacementMap=i.displacementMap,this.displacementScale=i.displacementScale,this.displacementBias=i.displacementBias,this.roughnessMap=i.roughnessMap,this.metalnessMap=i.metalnessMap,this.alphaMap=i.alphaMap,this.envMap=i.envMap,this.envMapIntensity=i.envMapIntensity,this.refractionRatio=i.refractionRatio,this.wireframe=i.wireframe,this.wireframeLinewidth=i.wireframeLinewidth,this.wireframeLinecap=i.wireframeLinecap,this.wireframeLinejoin=i.wireframeLinejoin,this.skinning=i.skinning,this.morphTargets=i.morphTargets,this.morphNormals=i.morphNormals,this.flatShading=i.flatShading,this.vertexTangents=i.vertexTangents,this};function Ui(i){Wn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Xe.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(i)}Ui.prototype=Object.create(Wn.prototype);Ui.prototype.constructor=Ui;Ui.prototype.isMeshPhysicalMaterial=!0;Ui.prototype.copy=function(i){return Wn.prototype.copy.call(this,i),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=i.clearcoat,this.clearcoatMap=i.clearcoatMap,this.clearcoatRoughness=i.clearcoatRoughness,this.clearcoatRoughnessMap=i.clearcoatRoughnessMap,this.clearcoatNormalMap=i.clearcoatNormalMap,this.clearcoatNormalScale.copy(i.clearcoatNormalScale),this.reflectivity=i.reflectivity,i.sheen?this.sheen=(this.sheen||new Be).copy(i.sheen):this.sheen=null,this.transmission=i.transmission,this.transmissionMap=i.transmissionMap,this};class ic extends mt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ic.prototype.isMeshPhongMaterial=!0;class Cu extends mt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Cu.prototype.isMeshToonMaterial=!0;class Ru extends mt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Ru.prototype.isMeshNormalMaterial=!0;class Pu extends mt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Pu.prototype.isMeshLambertMaterial=!0;class Du extends mt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Du.prototype.isMeshMatcapMaterial=!0;class Iu extends Ut{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Iu.prototype.isLineDashedMaterial=!0;var _T=Object.freeze({__proto__:null,ShadowMaterial:Lu,SpriteMaterial:ec,RawShaderMaterial:Ls,ShaderMaterial:nn,PointsMaterial:br,MeshPhysicalMaterial:Ui,MeshStandardMaterial:Wn,MeshPhongMaterial:ic,MeshToonMaterial:Cu,MeshNormalMaterial:Ru,MeshLambertMaterial:Pu,MeshDepthMaterial:Jl,MeshDistanceMaterial:Kl,MeshBasicMaterial:ui,MeshMatcapMaterial:Du,LineDashedMaterial:Iu,LineBasicMaterial:Ut,Material:mt});const ft={arraySlice:function(i,e,t){return ft.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*r;if(!(p<t||p>=n)){h.push(c.times[f]);for(let g=0;g<u;++g)d.push(c.values[f*u+g])}}h.length!==0&&(c.times=ft.convertArray(h,c.times.constructor),c.values=ft.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let g;if(s<=a.times[0]){const _=u,x=h-u;g=ft.arraySlice(a.values,_,x)}else if(s>=a.times[p]){const _=p*h+u,x=_+h-u;g=ft.arraySlice(a.values,_,x)}else{const _=a.createInterpolant(),x=u,M=h-u;_.evaluate(s),g=ft.arraySlice(_.resultBuffer,x,M)}l==="quaternion"&&new zt().fromArray(g).normalize().conjugate().toArray(g);const m=c.times.length;for(let _=0;_<m;++_){const x=_*f+d;if(l==="quaternion")zt.multiplyQuaternionsFlat(c.values,x,g,0,c.values,x);else{const M=f-d*2;for(let v=0;v<M;++v)c.values[x+v]-=g[v]}}}return i.blendMode=gu,i}};function un(i,e,t,n){this.parameterPositions=i,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(un.prototype,{evaluate:function(i){const e=this.parameterPositions;let t=this._cachedIndex,n=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(i<n)){for(let o=t+2;;){if(n===void 0){if(i<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,i,r)}if(t===o)break;if(r=n,n=e[++t],i<n)break t}s=e.length;break n}if(!(i>=r)){const o=e[1];i<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,i,n);if(t===a)break;if(n=r,r=e[--t-1],i>=r)break t}s=t,t=0;break n}break e}for(;t<s;){const o=t+s>>>1;i<e[o]?s=o:t=o+1}if(n=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,i,n);if(n===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,i)}this._cachedIndex=t,this.intervalChanged_(t,r,n)}return this.interpolate_(t,r,i,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(i){const e=this.resultBuffer,t=this.sampleValues,n=this.valueSize,r=i*n;for(let s=0;s!==n;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(un.prototype,{beforeStart_:un.prototype.copySampleValue_,afterEnd_:un.prototype.copySampleValue_});function Ol(i,e,t,n){un.call(this,i,e,t,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Ol.prototype=Object.assign(Object.create(un.prototype),{constructor:Ol,DefaultSettings_:{endingStart:sr,endingEnd:sr},intervalChanged_:function(i,e,t){const n=this.parameterPositions;let r=i-2,s=i+1,o=n[r],a=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case or:r=i,o=2*e-t;break;case fo:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=i,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case or:s=i,a=2*t-e;break;case fo:s=1,a=t+n[1]-n[0];break;default:s=i-1,a=e}const l=(t-e)*.5,c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-t),this._offsetPrev=r*c,this._offsetNext=s*c},interpolate_:function(i,e,t,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=i*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(t-e)/(n-e),p=f*f,g=p*f,m=-h*g+2*h*p-h*f,_=(1+h)*g+(-1.5-2*h)*p+(-.5+h)*f+1,x=(-1-d)*g+(1.5+d)*p+.5*f,M=d*g-d*p;for(let v=0;v!==o;++v)r[v]=m*s[c+v]+_*s[l+v]+x*s[a+v]+M*s[u+v];return r}});function Ro(i,e,t,n){un.call(this,i,e,t,n)}Ro.prototype=Object.assign(Object.create(un.prototype),{constructor:Ro,interpolate_:function(i,e,t,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=i*o,l=a-o,c=(t-e)/(n-e),u=1-c;for(let h=0;h!==o;++h)r[h]=s[l+h]*u+s[a+h]*c;return r}});function zl(i,e,t,n){un.call(this,i,e,t,n)}zl.prototype=Object.assign(Object.create(un.prototype),{constructor:zl,interpolate_:function(i){return this.copySampleValue_(i-1)}});class On{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ft.convertArray(t,this.TimeBufferType),this.values=ft.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ft.convertArray(e.times,Array),values:ft.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ft.arraySlice(n,s,o),this.values=ft.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ft.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ft.arraySlice(this.times),t=ft.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===gl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ft.arraySlice(e,0,o),this.values=ft.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ft.arraySlice(this.times,0),t=ft.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=uo;class wr extends On{}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=ho;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fu extends On{}Fu.prototype.ValueTypeName="color";class Po extends On{}Po.prototype.ValueTypeName="number";function Ul(i,e,t,n){un.call(this,i,e,t,n)}Ul.prototype=Object.assign(Object.create(un.prototype),{constructor:Ul,interpolate_:function(i,e,t,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(n-e);let l=i*o;for(let c=l+o;l!==c;l+=4)zt.slerpFlat(r,0,s,l-o,s,l,a);return r}});class Cs extends On{InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.DefaultInterpolation=uo;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends On{}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=ho;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends On{}Do.prototype.ValueTypeName="vector";class Io{constructor(e,t=-1,n,r=ql){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Xe.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yT(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(On.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ft.getKeyframeOrder(l);l=ft.sortedArray(l,1,u),c=ft.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Po(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,g){if(f.length!==0){const m=[],_=[];ft.flattenJSON(f,m,_,p),m.length!==0&&g.push(new h(d,m,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)f[d[p].morphTargets[g]]=-1;for(const g in f){const m=[],_=[];for(let x=0;x!==d[p].morphTargets.length;++x){const M=d[p];m.push(M.time),_.push(M.morphTarget===g?1:0)}r.push(new Po(".morphTargetInfluence["+g+"]",m,_))}l=f.length*(o||1)}else{const f=".bones["+t[h].name+"]";n(Do,f+".position",d,"pos",r),n(Cs,f+".quaternion",d,"rot",r),n(Do,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return Fu;case"quaternion":return Cs;case"bool":case"boolean":return wr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vT(i.type);if(i.times===void 0){const t=[],n=[];ft.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const _r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nu(i,e,t){const n=this;let r=!1,s=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=i,this.onProgress=e,this.onError=t,this.itemStart=function(c){o++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,o),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,h=l.length;u<h;u+=2){const d=l[u],f=l[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return f}return null}}const qg=new Nu;function bt(i){this.manager=i!==void 0?i:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(bt.prototype,{load:function(){},loadAsync:function(i,e){const t=this;return new Promise(function(n,r){t.load(i,n,e,r)})},parse:function(){},setCrossOrigin:function(i){return this.crossOrigin=i,this},setWithCredentials:function(i){return this.withCredentials=i,this},setPath:function(i){return this.path=i,this},setResourcePath:function(i){return this.resourcePath=i,this},setRequestHeader:function(i){return this.requestHeader=i,this}});const Pn={};function Mn(i){bt.call(this,i)}Mn.prototype=Object.assign(Object.create(bt.prototype),{constructor:Mn,load:function(i,e,t,n){i===void 0&&(i=""),this.path!==void 0&&(i=this.path+i),i=this.manager.resolveURL(i);const r=this,s=_r.get(i);if(s!==void 0)return r.manager.itemStart(i),setTimeout(function(){e&&e(s),r.manager.itemEnd(i)},0),s;if(Pn[i]!==void 0){Pn[i].push({onLoad:e,onProgress:t,onError:n});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=i.match(o);let l;if(a){const c=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let m=0;m<h.length;m++)p[m]=h.charCodeAt(m);f==="blob"?d=new Blob([p.buffer],{type:c}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,c);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(i)},0)}catch(d){setTimeout(function(){n&&n(d),r.manager.itemError(i),r.manager.itemEnd(i)},0)}}else{Pn[i]=[],Pn[i].push({onLoad:e,onProgress:t,onError:n}),l=new XMLHttpRequest,l.open("GET",i,!0),l.addEventListener("load",function(c){const u=this.response,h=Pn[i];if(delete Pn[i],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),_r.add(i,u);for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(i)}else{for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}r.manager.itemError(i),r.manager.itemEnd(i)}},!1),l.addEventListener("progress",function(c){const u=Pn[i];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onProgress&&f.onProgress(c)}},!1),l.addEventListener("error",function(c){const u=Pn[i];delete Pn[i];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}r.manager.itemError(i),r.manager.itemEnd(i)},!1),l.addEventListener("abort",function(c){const u=Pn[i];delete Pn[i];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}r.manager.itemError(i),r.manager.itemEnd(i)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)l.setRequestHeader(c,this.requestHeader[c]);l.send(null)}return r.manager.itemStart(i),l},setResponseType:function(i){return this.responseType=i,this},setMimeType:function(i){return this.mimeType=i,this}});class MT extends bt{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Mn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=Io.parse(e[n]);t.push(r)}return t}}function Zh(i){bt.call(this,i)}Zh.prototype=Object.assign(Object.create(bt.prototype),{constructor:Zh,load:function(i,e,t,n){const r=this,s=[],o=new Eu,a=new Mn(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let l=0;function c(u){a.load(i[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=It),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},t,n)}if(Array.isArray(i))for(let u=0,h=i.length;u<h;++u)c(u);else a.load(i,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=It),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,n);return o}});class rc extends bt{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),_r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xg extends bt{constructor(e){super(e)}load(e,t,n,r){const s=new Ts,o=new rc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}function Gl(i){bt.call(this,i)}Gl.prototype=Object.assign(Object.create(bt.prototype),{constructor:Gl,load:function(i,e,t,n){const r=this,s=new gs,o=new Mn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(i,function(a){const l=r.parse(a);!l||(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:Yt,s.wrapT=l.wrapT!==void 0?l.wrapT:Yt,s.magFilter=l.magFilter!==void 0?l.magFilter:It,s.minFilter=l.minFilter!==void 0?l.minFilter:It,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=Ss),l.mipmapCount===1&&(s.minFilter=It),s.needsUpdate=!0,e&&e(s,l))},t,n),s}});function Hl(i){bt.call(this,i)}Hl.prototype=Object.assign(Object.create(bt.prototype),{constructor:Hl,load:function(i,e,t,n){const r=new Nt,s=new rc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(i,function(o){r.image=o;const a=i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0;r.format=a?Ri:hn,r.needsUpdate=!0,e!==void 0&&e(r)},t,n),r}});function Qt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Qt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(i,e){const t=this.getUtoTmapping(i);return this.getPoint(t,e)},getPoints:function(i=5){const e=[];for(let t=0;t<=i;t++)e.push(this.getPoint(t/i));return e},getSpacedPoints:function(i=5){const e=[];for(let t=0;t<=i;t++)e.push(this.getPointAt(t/i));return e},getLength:function(){const i=this.getLengths();return i[i.length-1]},getLengths:function(i){if(i===void 0&&(i=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===i+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,n=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=i;s++)t=this.getPoint(s/i),r+=t.distanceTo(n),e.push(r),n=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(i,e){const t=this.getLengths();let n=0;const r=t.length;let s;e?s=e:s=i*t[r-1];let o=0,a=r-1,l;for(;o<=a;)if(n=Math.floor(o+(a-o)/2),l=t[n]-s,l<0)o=n+1;else if(l>0)a=n-1;else{a=n;break}if(n=a,t[n]===s)return n/(r-1);const c=t[n],h=t[n+1]-c,d=(s-c)/h;return(n+d)/(r-1)},getTangent:function(i,e){let n=i-1e-4,r=i+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),o=this.getPoint(r),a=e||(s.isVector2?new ve:new D);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(i,e){const t=this.getUtoTmapping(i);return this.getTangent(t,e)},computeFrenetFrames:function(i,e){const t=new D,n=[],r=[],s=[],o=new D,a=new He;for(let d=0;d<=i;d++){const f=d/i;n[d]=this.getTangentAt(f,new D),n[d].normalize()}r[0]=new D,s[0]=new D;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),h=Math.abs(n[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),o.crossVectors(n[0],t).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=i;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Xe.clamp(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Xe.clamp(r[0].dot(r[i]),-1,1));d/=i,n[0].dot(o.crossVectors(r[0],r[i]))>0&&(d=-d);for(let f=1;f<=i;f++)r[f].applyMatrix4(a.makeRotationAxis(n[f],d*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(i){return this.arcLengthDivisions=i.arcLengthDivisions,this},toJSON:function(){const i={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return i.arcLengthDivisions=this.arcLengthDivisions,i.type=this.type,i},fromJSON:function(i){return this.arcLengthDivisions=i.arcLengthDivisions,this}});class Qo extends Qt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ve,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Qo.prototype.isEllipseCurve=!0;class Bu extends Qo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.type="ArcCurve"}}Bu.prototype.isArcCurve=!0;function Ou(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const rl=new D,mh=new Ou,gh=new Ou,xh=new Ou;class zu extends Qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(rl.subVectors(r[0],r[1]).add(r[0]),c=rl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(rl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),mh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,g,m),gh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,g,m),xh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),xh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(mh.calc(l),gh.calc(l),xh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}zu.prototype.isCatmullRomCurve3=!0;function Vf(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function bT(i,e){const t=1-i;return t*t*e}function wT(i,e){return 2*(1-i)*i*e}function ST(i,e){return i*i*e}function to(i,e,t,n){return bT(i,e)+wT(i,t)+ST(i,n)}function ET(i,e){const t=1-i;return t*t*t*e}function TT(i,e){const t=1-i;return 3*t*t*i*e}function AT(i,e){return 3*(1-i)*i*i*e}function LT(i,e){return i*i*i*e}function no(i,e,t,n,r){return ET(i,e)+TT(i,t)+AT(i,n)+LT(i,r)}class sc extends Qt{constructor(e=new ve,t=new ve,n=new ve,r=new ve){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ve){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(no(e,r.x,s.x,o.x,a.x),no(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}sc.prototype.isCubicBezierCurve=!0;class Uu extends Qt{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(no(e,r.x,s.x,o.x,a.x),no(e,r.y,s.y,o.y,a.y),no(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Uu.prototype.isCubicBezierCurve3=!0;class ea extends Qt{constructor(e=new ve,t=new ve){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ve;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ea.prototype.isLineCurve=!0;class Yg extends Qt{constructor(e=new D,t=new D){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oc extends Qt{constructor(e=new ve,t=new ve,n=new ve){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(to(e,r.x,s.x,o.x),to(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}oc.prototype.isQuadraticBezierCurve=!0;class Gu extends Qt{constructor(e=new D,t=new D,n=new D){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(to(e,r.x,s.x,o.x),to(e,r.y,s.y,o.y),to(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Gu.prototype.isQuadraticBezierCurve3=!0;class ac extends Qt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Vf(a,l.x,c.x,u.x,h.x),Vf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ve().fromArray(r))}return this}}ac.prototype.isSplineCurve=!0;var Jh=Object.freeze({__proto__:null,ArcCurve:Bu,CatmullRomCurve3:zu,CubicBezierCurve:sc,CubicBezierCurve3:Uu,EllipseCurve:Qo,LineCurve:ea,LineCurve3:Yg,QuadraticBezierCurve:oc,QuadraticBezierCurve3:Gu,SplineCurve:ac});class jg extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ea(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=t){const s=n[r]-t,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Jh[r.type]().fromJSON(r))}return this}}class Fo extends jg{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ea(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new oc(this.currentPoint.clone(),new ve(e,t),new ve(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new sc(this.currentPoint.clone(),new ve(e,t),new ve(n,r),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ac(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Qo(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Di extends Fo{constructor(e){super(e),this.uuid=Xe.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Fo().fromJSON(r))}return this}}class Bn extends We{constructor(e,t=1){super(),this.type="Light",this.color=new Be(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Bn.prototype.isLight=!0;class Hu extends Bn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new Be(t)}copy(e){return Bn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Hu.prototype.isHemisphereLight=!0;const Wf=new He,$f=new D,qf=new D;class ku{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),Wf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zg extends ku{constructor(){super(new Rt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Xe.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}}Zg.prototype.isSpotLightShadow=!0;class Vu extends Bn{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Zg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Vu.prototype.isSpotLight=!0;const Xf=new He,qs=new D,_h=new D;class Jg extends ku{constructor(){super(new Rt(90,1,.5,500)),this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix;qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),_h.copy(n.position),_h.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_h),n.updateMatrixWorld(),r.makeTranslation(-qs.x,-qs.y,-qs.z),Xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf)}}Jg.prototype.isPointLightShadow=!0;class Wu extends Bn{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Jg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Wu.prototype.isPointLight=!0;class ta extends Ni{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=We.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ta.prototype.isOrthographicCamera=!0;class Kg extends ku{constructor(){super(new ta(-5,5,5,-5,.5,500))}}Kg.prototype.isDirectionalLightShadow=!0;class $u extends Bn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new Kg}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}$u.prototype.isDirectionalLight=!0;class qu extends Bn{constructor(e,t){super(e,t),this.type="AmbientLight"}}qu.prototype.isAmbientLight=!0;class Xu extends Bn{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Xu.prototype.isRectAreaLight=!0;class Yu{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Yu.prototype.isSphericalHarmonics3=!0;class na extends Bn{constructor(e=new Yu,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}na.prototype.isLightProbe=!0;class Qg extends bt{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,o=new Mn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=new _T[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=new Be().setHex(e.sheen)),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(r.skinning=e.skinning),e.morphTargets!==void 0&&(r.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(r.morphNormals=e.morphNormals),e.dithering!==void 0&&(r.dithering=e.dithering),e.vertexTangents!==void 0&&(r.vertexTangents=e.vertexTangents),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=n(o.value);break;case"c":r.uniforms[s].value=new Be().setHex(o.value);break;case"v2":r.uniforms[s].value=new ve().fromArray(o.value);break;case"v3":r.uniforms[s].value=new D().fromArray(o.value);break;case"v4":r.uniforms[s].value=new ot().fromArray(o.value);break;case"m3":r.uniforms[s].value=new Ft().fromArray(o.value);break;case"m4":r.uniforms[s].value=new He().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new ve().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(r.transmission=e.transmission),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),r}setTextures(e){return this.textures=e,this}}const ju={decodeText:function(i){if(typeof TextDecoder<"u")return new TextDecoder().decode(i);let e="";for(let t=0,n=i.length;t<n;t++)e+=String.fromCharCode(i[t]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(i){const e=i.lastIndexOf("/");return e===-1?"./":i.substr(0,e+1)}};function No(){ke.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}No.prototype=Object.assign(Object.create(ke.prototype),{constructor:No,isInstancedBufferGeometry:!0,copy:function(i){return ke.prototype.copy.call(this,i),this.instanceCount=i.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const i=ke.prototype.toJSON.call(this);return i.instanceCount=this.instanceCount,i.isInstancedBufferGeometry=!0,i}});function kl(i,e,t,n){typeof t=="number"&&(n=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),$e.call(this,i,e,t),this.meshPerAttribute=n||1}kl.prototype=Object.assign(Object.create($e.prototype),{constructor:kl,isInstancedBufferAttribute:!0,copy:function(i){return $e.prototype.copy.call(this,i),this.meshPerAttribute=i.meshPerAttribute,this},toJSON:function(){const i=$e.prototype.toJSON.call(this);return i.meshPerAttribute=this.meshPerAttribute,i.isInstancedBufferAttribute=!0,i}});class ex extends bt{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Mn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(f,p){if(t[p]!==void 0)return t[p];const m=f.interleavedBuffers[p],_=s(f,m.buffer),x=js(m.type,_),M=new tn(x,m.stride);return M.uuid=m.uuid,t[p]=M,M}function s(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],_=new Uint32Array(m).buffer;return n[p]=_,_}const o=e.isInstancedBufferGeometry?new No:new ke,a=e.data.index;if(a!==void 0){const f=js(a.type,a.array);o.setIndex(new $e(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let g;if(p.isInterleavedBufferAttribute){const m=r(e.data,p.data);g=new Bi(m,p.itemSize,p.offset,p.normalized)}else{const m=js(p.type,p.array),_=p.isInstancedBufferAttribute?kl:$e;g=new _(m,p.itemSize,p.normalized)}p.name!==void 0&&(g.name=p.name),o.setAttribute(f,g)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],g=[];for(let m=0,_=p.length;m<_;m++){const x=p[m];let M;if(x.isInterleavedBufferAttribute){const v=r(e.data,x.data);M=new Bi(v,x.itemSize,x.offset,x.normalized)}else{const v=js(x.type,x.array);M=new $e(v,x.itemSize,x.normalized)}x.name!==void 0&&(M.name=x.name),g.push(M)}o.morphAttributes[f]=g}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const g=h[f];o.addGroup(g.start,g.count,g.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new D;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Gi(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class CT extends bt{constructor(e){super(e)}load(e,t,n,r){const s=this,o=this.path===""?ju.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Mn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let h=!1;for(const d in o)if(o[d]instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new Di().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Ko().fromJSON(e[s],r);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};let r;if(e!==void 0){const s=new ex;for(let o=0,a=e.length;o<a;o++){let l;const c=e[o];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":l=new qt[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":l=new qt[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":l=new qt[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":l=new qt[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":l=new qt[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":l=new qt[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":l=new qt[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":l=new qt[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":l=new qt[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":l=new qt[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":l=new qt[c.type](new Jh[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":l=new qt[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":l=new qt[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let h=0,d=c.shapes.length;h<d;h++){const f=t[c.shapes[h]];r.push(f)}l=new qt[c.type](r,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let h=0,d=c.shapes.length;h<d;h++){const f=t[c.shapes[h]];r.push(f)}const u=c.options.extrudePath;u!==void 0&&(c.options.extrudePath=new Jh[u.type]().fromJSON(u)),l=new qt[c.type](r,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":l=s.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}l.uuid=c.uuid,c.name!==void 0&&(l.name=c.name),l.isBufferGeometry===!0&&c.userData!==void 0&&(l.userData=c.userData),n[c.uuid]=l}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new Qg;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];if(l.type==="MultiMaterial"){const c=[];for(let u=0;u<l.materials.length;u++){const h=l.materials[u];n[h.uuid]===void 0&&(n[h.uuid]=s.parse(h)),c.push(n[h.uuid])}r[l.uuid]=c}else n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=Io.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:js(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Nu(t);s=new rc(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){r[h.uuid]=[];for(let f=0,p=d.length;f<p;f++){const g=d[f],m=a(g);m!==null&&(m instanceof HTMLImageElement?r[h.uuid].push(m):r[h.uuid].push(new gs(m.data,m.width,m.height)))}}else{const f=a(h.url);f!==null&&(r[h.uuid]=f)}}}return r}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l;const c=t[a.image];Array.isArray(c)?(l=new Ts(c),c.length===6&&(l.needsUpdate=!0)):(c&&c.data?l=new gs(c.data,c.width,c.height):l=new Nt(c),c&&(l.needsUpdate=!0)),l.uuid=a.uuid,a.name!==void 0&&(l.name=a.name),a.mapping!==void 0&&(l.mapping=n(a.mapping,RT)),a.offset!==void 0&&l.offset.fromArray(a.offset),a.repeat!==void 0&&l.repeat.fromArray(a.repeat),a.center!==void 0&&l.center.fromArray(a.center),a.rotation!==void 0&&(l.rotation=a.rotation),a.wrap!==void 0&&(l.wrapS=n(a.wrap[0],Yf),l.wrapT=n(a.wrap[1],Yf)),a.format!==void 0&&(l.format=a.format),a.type!==void 0&&(l.type=a.type),a.encoding!==void 0&&(l.encoding=a.encoding),a.minFilter!==void 0&&(l.minFilter=n(a.minFilter,jf)),a.magFilter!==void 0&&(l.magFilter=n(a.magFilter,jf)),a.anisotropy!==void 0&&(l.anisotropy=a.anisotropy),a.flipY!==void 0&&(l.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(l.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(l.unpackAlignment=a.unpackAlignment),r[a.uuid]=l}return r}parseObject(e,t,n,r){let s;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function a(u){if(u!==void 0){if(Array.isArray(u)){const h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),h.push(n[p])}return h}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}let l,c;switch(e.type){case"Scene":s=new Ql,e.background!==void 0&&Number.isInteger(e.background)&&(s.background=new Be(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Jo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Zo(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new Rt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new ta(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new qu(e.color,e.intensity);break;case"DirectionalLight":s=new $u(e.color,e.intensity);break;case"PointLight":s=new Wu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Xu(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Vu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new Hu(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new na().fromJSON(e);break;case"SkinnedMesh":l=o(e.geometry),c=a(e.material),s=new bo(l,c),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":l=o(e.geometry),c=a(e.material),s=new ut(l,c);break;case"InstancedMesh":l=o(e.geometry),c=a(e.material);const u=e.count,h=e.instanceMatrix;s=new El(l,c,u),s.instanceMatrix=new $e(new Float32Array(h.array),16);break;case"LOD":s=new wu;break;case"Line":s=new Nn(o(e.geometry),a(e.material));break;case"LineLoop":s=new Su(o(e.geometry),a(e.material));break;case"LineSegments":s=new Kt(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":s=new xs(o(e.geometry),a(e.material));break;case"Sprite":s=new tc(a(e.material));break;case"Group":s=new ar;break;case"Bone":s=new wo;break;default:s=new We}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let h=0;h<u.length;h++)s.add(this.parseObject(u[h],t,n,r))}if(e.animations!==void 0){const u=e.animations;for(let h=0;h<u.length;h++){const d=u[h];s.animations.push(r[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let h=0;h<u.length;h++){const d=u[h],f=s.getObjectByProperty("uuid",d.object);f!==void 0&&s.addLevel(f,d.distance)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const RT={UVMapping:$l,CubeReflectionMapping:Wo,CubeRefractionMapping:$o,EquirectangularReflectionMapping:yl,EquirectangularRefractionMapping:Ml,CubeUVReflectionMapping:ws,CubeUVRefractionMapping:qo},Yf={RepeatWrapping:oo,ClampToEdgeWrapping:Yt,MirroredRepeatWrapping:ao},jf={NearestFilter:Dt,NearestMipmapNearestFilter:bl,NearestMipmapLinearFilter:wl,LinearFilter:It,LinearMipmapNearestFilter:mu,LinearMipmapLinearFilter:Ss};function Kh(i){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),bt.call(this,i),this.options={premultiplyAlpha:"none"}}Kh.prototype=Object.assign(Object.create(bt.prototype),{constructor:Kh,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(i,e,t,n){i===void 0&&(i=""),this.path!==void 0&&(i=this.path+i),i=this.manager.resolveURL(i);const r=this,s=_r.get(i);if(s!==void 0)return r.manager.itemStart(i),setTimeout(function(){e&&e(s),r.manager.itemEnd(i)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(i,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){_r.add(i,a),e&&e(a),r.manager.itemEnd(i)}).catch(function(a){n&&n(a),r.manager.itemError(i),r.manager.itemEnd(i)}),r.manager.itemStart(i)}});class tx{constructor(){this.type="ShapePath",this.color=new Be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(x){const M=[];for(let v=0,b=x.length;v<b;v++){const y=x[v],E=new Di;E.curves=y.curves,M.push(E)}return M}function r(x,M){const v=M.length;let b=!1;for(let y=v-1,E=0;E<v;y=E++){let w=M[y],S=M[E],R=S.x-w.x,I=S.y-w.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(w=M[E],R=-R,S=M[y],I=-I),x.y<w.y||x.y>S.y)continue;if(x.y===w.y){if(x.x===w.x)return!0}else{const H=I*(x.x-w.x)-R*(x.y-w.y);if(H===0)return!0;if(H<0)continue;b=!b}}else{if(x.y!==w.y)continue;if(S.x<=x.x&&x.x<=w.x||w.x<=x.x&&x.x<=S.x)return!0}}return b}const s=ai.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c;const u=[];if(o.length===1)return l=o[0],c=new Di,c.curves=l.curves,u.push(c),u;let h=!s(o[0].getPoints());h=e?!h:h;const d=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let x=0,M=o.length;x<M;x++)l=o[x],m=l.getPoints(),a=s(m),a=e?!a:a,a?(!h&&f[g]&&g++,f[g]={s:new Di,p:m},f[g].s.curves=l.curves,h&&g++,p[g]=[]):p[g].push({h:l,p:m[0]});if(!f[0])return n(o);if(f.length>1){let x=!1;const M=[];for(let v=0,b=f.length;v<b;v++)d[v]=[];for(let v=0,b=f.length;v<b;v++){const y=p[v];for(let E=0;E<y.length;E++){const w=y[E];let S=!0;for(let R=0;R<f.length;R++)r(w.p,f[R].p)&&(v!==R&&M.push({froms:v,tos:R,hole:E}),S?(S=!1,d[R].push(w)):x=!0);S&&d[v].push(w)}}M.length>0&&(x||(p=d))}let _;for(let x=0,M=f.length;x<M;x++){c=f[x].s,u.push(c),_=p[x];for(let v=0,b=_.length;v<b;v++)c.holes.push(_[v].h)}return u}}class Zu{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=PT(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(n,r[s].toShapes());return n}}function PT(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=DT(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function DT(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new tx;let a,l,c,u,h,d,f,p;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,_=g.length;m<_;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,o.quadraticCurveTo(h,d,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,f=g[m++]*e+t,p=g[m++]*e+n,o.bezierCurveTo(h,d,f,p,c,u);break}}return{offsetX:s.ha*e,path:o}}Zu.prototype.isFont=!0;class IT extends bt{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Mn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=s.parse(l);t&&t(c)},n,r)}parse(e){return new Zu(e)}}let sl;const Ju={getContext:function(){return sl===void 0&&(sl=new(window.AudioContext||window.webkitAudioContext)),sl},setContext:function(i){sl=i}};class nx extends bt{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Mn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Ju.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class ix extends na{constructor(e,t,n=1){super(void 0,n);const r=new Be().set(e),s=new Be().set(t),o=new D(r.r,r.g,r.b),a=new D(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}ix.prototype.isHemisphereLightProbe=!0;class rx extends na{constructor(e,t=1){super(void 0,t);const n=new Be().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}rx.prototype.isAmbientLightProbe=!0;const Zf=new He,Jf=new He;class FT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Rt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Rt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const r=e.projectionMatrix.clone(),s=t.eyeSep/2,o=s*t.near/t.focus,a=t.near*Math.tan(Xe.DEG2RAD*t.fov*.5)/t.zoom;let l,c;Jf.elements[12]=-s,Zf.elements[12]=s,l=-a*t.aspect+o,c=a*t.aspect+o,r.elements[0]=2*t.near/(c-l),r.elements[8]=(c+l)/(c-l),this.cameraL.projectionMatrix.copy(r),l=-a*t.aspect-o,c=a*t.aspect-o,r.elements[0]=2*t.near/(c-l),r.elements[8]=(c+l)/(c-l),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Jf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Zf)}}class sx{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kf(){return(typeof performance>"u"?Date:performance).now()}const Yi=new D,Qf=new zt,NT=new D,ji=new D;class BT extends We{constructor(){super(),this.type="AudioListener",this.context=Ju.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new sx}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Yi,Qf,NT),ji.set(0,0,-1).applyQuaternion(Qf),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yi.x,r),t.positionY.linearRampToValueAtTime(Yi.y,r),t.positionZ.linearRampToValueAtTime(Yi.z,r),t.forwardX.linearRampToValueAtTime(ji.x,r),t.forwardY.linearRampToValueAtTime(ji.y,r),t.forwardZ.linearRampToValueAtTime(ji.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Yi.x,Yi.y,Yi.z),t.setOrientation(ji.x,ji.y,ji.z,n.x,n.y,n.z)}}class Ku extends We{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Zi=new D,ep=new zt,OT=new D,Ji=new D;class zT extends Ku{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Zi,ep,OT),Ji.set(0,0,1).applyQuaternion(ep);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Zi.x,n),t.positionY.linearRampToValueAtTime(Zi.y,n),t.positionZ.linearRampToValueAtTime(Zi.z,n),t.orientationX.linearRampToValueAtTime(Ji.x,n),t.orientationY.linearRampToValueAtTime(Ji.y,n),t.orientationZ.linearRampToValueAtTime(Ji.z,n)}else t.setPosition(Zi.x,Zi.y,Zi.z),t.setOrientation(Ji.x,Ji.y,Ji.z)}}class ox{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class ax{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){zt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;zt.multiplyQuaternionsFlat(e,o,e,t,e,n),zt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Qu="\\[\\]\\.:\\/",UT=new RegExp("["+Qu+"]","g"),ed="[^"+Qu+"]",GT="[^"+Qu.replace("\\.","")+"]",HT=/((?:WC+[\/:])*)/.source.replace("WC",ed),kT=/(WCOD+)?/.source.replace("WCOD",GT),VT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),WT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),$T=new RegExp("^"+HT+kT+VT+WT+"$"),qT=["material","materials","bones"];function lx(i,e,t){const n=t||Wt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}Object.assign(lx.prototype,{getValue:function(i,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)},setValue:function(i,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)},bind:function(){const i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()},unbind:function(){const i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}});function Wt(i,e,t){this.path=e,this.parsedPath=t||Wt.parseTrackName(e),this.node=Wt.findNode(i,this.parsedPath.nodeName)||i,this.rootNode=i}Object.assign(Wt,{Composite:lx,create:function(i,e,t){return i&&i.isAnimationObjectGroup?new Wt.Composite(i,e,t):new Wt(i,e,t)},sanitizeNodeName:function(i){return i.replace(/\s/g,"_").replace(UT,"")},parseTrackName:function(i){const e=$T.exec(i);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+i);const t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=t.nodeName&&t.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=t.nodeName.substring(n+1);qT.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,n),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+i);return t},findNode:function(i,e){if(!e||e===""||e==="."||e===-1||e===i.name||e===i.uuid)return i;if(i.skeleton){const t=i.skeleton.getBoneByName(e);if(t!==void 0)return t}if(i.children){const t=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=t(o.children);if(a)return a}return null},n=t(i.children);if(n)return n}return null}});Object.assign(Wt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]},function(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let i=this.node;const e=this.parsedPath,t=e.objectName,n=e.propertyName;let r=e.propertyIndex;if(i||(i=Wt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=i),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!i){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let l=e.objectIndex;switch(t){case"materials":if(!i.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!i.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}i=i.material.materials;break;case"bones":if(!i.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}i=i.skeleton.bones;for(let c=0;c<i.length;c++)if(i[c].name===l){l=c;break}break;default:if(i[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}i=i[t]}if(l!==void 0){if(i[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,i);return}i=i[l]}}const s=i[n];if(s===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",i);return}let o=this.Versioning.None;this.targetObject=i,i.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:i.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!i.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(i.geometry.isBufferGeometry){if(!i.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}i.morphTargetDictionary[r]!==void 0&&(r=i.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(Wt.prototype,{_getValue_unbound:Wt.prototype.getValue,_setValue_unbound:Wt.prototype.setValue});class cx{constructor(){this.uuid=Xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let g=0,m=o;g!==m;++g)s[g].push(new Wt(d,n[g],r[g]))}else if(p<c){a=e[p];const g=--c,m=e[g];t[m.uuid]=p,e[p]=m,t[f]=g,e[g]=d;for(let _=0,x=o;_!==x;++_){const M=s[_],v=M[g];let b=M[p];M[p]=v,b===void 0&&(b=new Wt(d,n[_],r[_])),M[g]=b}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=r;f!==p;++f){const g=n[f],m=g[h],_=g[u];g[u]=m,g[h]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],p=--o,g=e[p];t[f.uuid]=h,e[h]=f,t[g.uuid]=d,e[d]=g,e.pop();for(let m=0,_=r;m!==_;++m){const x=n[m],M=x[d],v=x[p];x[h]=M,x[d]=v,x.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,g=r;p!==g;++p){const m=n[p];m[h]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);r=s.length,n[e]=r,o.push(e),a.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new Wt(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),r[n]=r[a],r.pop()}}}cx.prototype.isAnimationObjectGroup=!0;class XT{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:sr,endingEnd:sr};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ql:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===gg;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===pg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=or,r.endingEnd=or):(e?r.endingStart=this.zeroSlopeAtStart?or:sr:r.endingStart=fo,t?r.endingEnd=this.zeroSlopeAtEnd?or:sr:r.endingEnd=fo)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class hx extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let p=u[f];if(p!==void 0)o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;p=new ax(Wt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ro(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Io.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ql),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new XT(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Io.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}hx.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class lc{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new lc(this.value.clone===void 0?this.value:this.value.clone())}}function Qh(i,e,t){tn.call(this,i,e),this.meshPerAttribute=t||1}Qh.prototype=Object.assign(Object.create(tn.prototype),{constructor:Qh,isInstancedInterleavedBuffer:!0,copy:function(i){return tn.prototype.copy.call(this,i),this.meshPerAttribute=i.meshPerAttribute,this},clone:function(i){const e=tn.prototype.clone.call(this,i);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(i){const e=tn.prototype.toJSON.call(this,i);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function td(i,e,t,n,r){this.buffer=i,this.type=e,this.itemSize=t,this.elementSize=n,this.count=r,this.version=0}Object.defineProperty(td.prototype,"needsUpdate",{set:function(i){i===!0&&this.version++}});Object.assign(td.prototype,{isGLBufferAttribute:!0,setBuffer:function(i){return this.buffer=i,this},setType:function(i,e){return this.type=i,this.elementSize=e,this},setItemSize:function(i){return this.itemSize=i,this},setCount:function(i){return this.count=i,this}});function nd(i,e,t=0,n=1/0){this.ray=new Hi(i,e),this.near=t,this.far=n,this.camera=null,this.layers=new yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function tp(i,e){return i.distance-e.distance}function eu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)eu(r[s],e,t,!0)}}Object.assign(nd.prototype,{set:function(i,e){this.ray.set(i,e)},setFromCamera:function(i,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(i.x,i.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(i.x,i.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(i,e=!1,t=[]){return eu(i,this,t,e),t.sort(tp),t},intersectObjects:function(i,e=!1,t=[]){for(let n=0,r=i.length;n<r;n++)eu(i[n],this,t,e);return t.sort(tp),t}});class YT{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe.clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jT{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const np=new ve;class Rs{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=np.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new ve),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new ve),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new ve),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new ve),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return np.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Rs.prototype.isBox2=!0;const ip=new D,ol=new D;class ux{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new D),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new D),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new D),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ip.subVectors(e,this.start),ol.subVectors(this.end,this.start);const n=ol.dot(ol);let s=ol.dot(ip)/n;return t&&(s=Xe.clamp(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new D),this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Bo(i){We.call(this),this.material=i,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Bo.prototype=Object.create(We.prototype);Bo.prototype.constructor=Bo;Bo.prototype.isImmediateRenderObject=!0;const rp=new D;class ZT extends We{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new ke,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Oe(r,3));const s=new Ut({fog:!1,toneMapped:!1});this.cone=new Kt(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),rp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ai=new D,al=new He,vh=new He;class dx extends Kt{constructor(e){const t=fx(e),n=new ke,r=[],s=[],o=new Be(0,0,1),a=new Be(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Oe(r,3)),n.setAttribute("color",new Oe(s,3));const l=new Ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");vh.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(al.multiplyMatrices(vh,a.matrixWorld),Ai.setFromMatrixPosition(al),r.setXYZ(o,Ai.x,Ai.y,Ai.z),al.multiplyMatrices(vh,a.parent.matrixWorld),Ai.setFromMatrixPosition(al),r.setXYZ(o+1,Ai.x,Ai.y,Ai.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function fx(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,fx(i.children[t]));return e}class JT extends ut{constructor(e,t,n){const r=new Co(t,4,2),s=new ui({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const KT=new D,sp=new Be,op=new Be;class QT extends We{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const r=new Ao(t);r.rotateY(Math.PI*.5),this.material=new ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new $e(o,3)),this.add(new ut(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");sp.copy(this.light.color),op.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?sp:op;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}e.lookAt(KT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class px extends Kt{constructor(e=10,t=10,n=4473924,r=8947848){n=new Be(n),r=new Be(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const g=d===s?n:r;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const u=new ke;u.setAttribute("position",new Oe(l,3)),u.setAttribute("color",new Oe(c,3));const h=new Ut({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class eA extends Kt{constructor(e=10,t=16,n=8,r=64,s=4473924,o=8947848){s=new Be(s),o=new Be(o);const a=[],l=[];for(let h=0;h<=t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const g=h&1?s:o;l.push(g.r,g.g,g.b),l.push(g.r,g.g,g.b)}for(let h=0;h<=n;h++){const d=h&1?s:o,f=e-e/n*h;for(let p=0;p<r;p++){let g=p/r*(Math.PI*2),m=Math.sin(g)*f,_=Math.cos(g)*f;a.push(m,0,_),l.push(d.r,d.g,d.b),g=(p+1)/r*(Math.PI*2),m=Math.sin(g)*f,_=Math.cos(g)*f,a.push(m,0,_),l.push(d.r,d.g,d.b)}}const c=new ke;c.setAttribute("position",new Oe(a,3)),c.setAttribute("color",new Oe(l,3));const u=new Ut({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}}const ap=new D,ll=new D,lp=new D;class tA extends We{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let r=new ke;r.setAttribute("position",new Oe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Ut({fog:!1,toneMapped:!1});this.lightPlane=new Nn(r,s),this.add(this.lightPlane),r=new ke,r.setAttribute("position",new Oe([0,0,0,0,0,1],3)),this.targetLine=new Nn(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){ap.setFromMatrixPosition(this.light.matrixWorld),ll.setFromMatrixPosition(this.light.target.matrixWorld),lp.subVectors(ll,ap),this.lightPlane.lookAt(ll),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ll),this.targetLine.scale.z=lp.length()}}const cl=new D,Mt=new Ni;class nA extends Kt{constructor(e){const t=new ke,n=new Ut({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={},a=new Be(16755200),l=new Be(16711680),c=new Be(43775),u=new Be(16777215),h=new Be(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",l),d("p","n2",l),d("p","n3",l),d("p","n4",l),d("u1","u2",c),d("u2","u3",c),d("u3","u1",c),d("c","t",u),d("p","c",h),d("cn1","cn2",h),d("cn3","cn4",h),d("cf1","cf2",h),d("cf3","cf4",h);function d(p,g,m){f(p,m),f(g,m)}function f(p,g){r.push(0,0,0),s.push(g.r,g.g,g.b),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}t.setAttribute("position",new Oe(r,3)),t.setAttribute("color",new Oe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),St("c",t,e,Mt,0,0,-1),St("t",t,e,Mt,0,0,1),St("n1",t,e,Mt,-n,-r,-1),St("n2",t,e,Mt,n,-r,-1),St("n3",t,e,Mt,-n,r,-1),St("n4",t,e,Mt,n,r,-1),St("f1",t,e,Mt,-n,-r,1),St("f2",t,e,Mt,n,-r,1),St("f3",t,e,Mt,-n,r,1),St("f4",t,e,Mt,n,r,1),St("u1",t,e,Mt,n*.7,r*1.1,-1),St("u2",t,e,Mt,-n*.7,r*1.1,-1),St("u3",t,e,Mt,0,r*2,-1),St("cf1",t,e,Mt,-n,0,1),St("cf2",t,e,Mt,n,0,1),St("cf3",t,e,Mt,0,-r,1),St("cf4",t,e,Mt,0,r,1),St("cn1",t,e,Mt,-n,0,-1),St("cn2",t,e,Mt,n,0,-1),St("cn3",t,e,Mt,0,-r,-1),St("cn4",t,e,Mt,0,r,-1),e.getAttribute("position").needsUpdate=!0}}function St(i,e,t,n,r,s,o){cl.set(r,s,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],cl.x,cl.y,cl.z)}}const hl=new rn;class mx extends Kt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new ke;s.setIndex(new $e(n,1)),s.setAttribute("position",new $e(r,3)),super(s,new Ut({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&hl.setFromObject(this.object),hl.isEmpty())return;const t=hl.min,n=hl.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return Kt.prototype.copy.call(this,e),this.object=e.object,this}}class iA extends Kt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ke;s.setIndex(new $e(n,1)),s.setAttribute("position",new Oe(r,3)),super(s,new Ut({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class rA extends Nn{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new ke;o.setAttribute("position",new Oe(s,3)),o.computeBoundingSphere(),super(o,new Ut({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new ke;l.setAttribute("position",new Oe(a,3)),l.computeBoundingSphere(),this.add(new ut(l,new ui({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?Ct:bs,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const cp=new D;let ul,yh;class sA extends We{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ul===void 0&&(ul=new ke,ul.setAttribute("position",new Oe([0,0,0,0,1,0],3)),yh=new _s(0,.5,1,5,1),yh.translate(0,-.5,0)),this.position.copy(t),this.line=new Nn(ul,new Ut({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ut(yh,new ui({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{cp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(cp,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class gx extends Kt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ke;r.setAttribute("position",new Oe(t,3)),r.setAttribute("color",new Oe(n,3));const s=new Ut({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}}const xx=new Float32Array(1),oA=new Int32Array(xx.buffer),aA={toHalfFloat:function(i){xx[0]=i;const e=oA[0];let t=e>>16&32768,n=e>>12&2047;const r=e>>23&255;return r<103?t:r>142?(t|=31744,t|=(r==255?0:1)&&e&8388607,t):r<113?(n|=2048,t|=(n>>114-r)+(n>>113-r&1),t):(t|=r-112<<10|n>>1,t+=n&1,t)}},ds=4,Ii=8,Gn=Math.pow(2,Ii),_x=[.125,.215,.35,.446,.526,.582],vx=Ii-ds+1+_x.length,rs=20,kn={[Jt]:0,[Xo]:1,[Yl]:2,[xu]:3,[_u]:4,[vu]:5,[Xl]:6},er=new ui({side:Ct,depthWrite:!1,depthTest:!1}),lA=new ut(new gr,er),Mh=new ta,{_lodPlanes:Xs,_sizeLods:hp,_sigmas:dl}=uA(),up=new Be;let bh=null;const tr=(1+Math.sqrt(5))/2,ss=1/tr,dp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,tr,ss),new D(0,tr,-ss),new D(ss,0,tr),new D(-ss,0,tr),new D(tr,ss,0),new D(-tr,ss,0)];function fp(i){const e=Math.max(i.r,i.g,i.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return i.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class cA{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=dA(rs),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bh=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=gp(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=mp(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Xs.length;e++)Xs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(bh),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e){bh=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Es,format:Pm,encoding:hA(e)?e.encoding:Yl,depthBuffer:!1},n=pp(t);return n.depthBuffer=!e,this._pingPongRenderTarget=pp(t),n}_compileMaterial(e){const t=new ut(Xs[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(up),u.toneMapping=cr,u.outputEncoding=Jt,u.autoClear=!1;let p=!1;const g=e.background;if(g){if(g.isColor){er.color.copy(g).convertSRGBToLinear(),e.background=null;const m=fp(er.color);er.opacity=m,p=!0}}else{er.color.copy(up).convertSRGBToLinear();const m=fp(er.color);er.opacity=m,p=!0}for(let m=0;m<6;m++){const _=m%3;_==0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_==1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m])),fl(r,_*Gn,m>2?Gn:0,Gn,Gn),u.setRenderTarget(r),p&&u.render(lA,a),u.render(e,a)}u.toneMapping=f,u.outputEncoding=d,u.autoClear=h}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=gp()):this._equirectShader==null&&(this._equirectShader=mp());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new ut(Xs[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=kn[e.encoding],o.outputEncoding.value=kn[t.texture.encoding],fl(t,0,0,3*Gn,2*Gn),n.setRenderTarget(t),n.render(s,Mh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<vx;r++){const s=Math.sqrt(dl[r]*dl[r]-dl[r-1]*dl[r-1]),o=dp[(r-1)%dp.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(Xs[r],c),d=c.uniforms,f=hp[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=s/p,m=isFinite(s)?1+Math.floor(u*g):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const _=[];let x=0;for(let y=0;y<rs;++y){const E=y/g,w=Math.exp(-E*E/2);_.push(w),y==0?x+=w:y<m&&(x+=2*w)}for(let y=0;y<_.length;y++)_[y]=_[y]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=p,d.mipInt.value=Ii-n,d.inputEncoding.value=kn[e.texture.encoding],d.outputEncoding.value=kn[e.texture.encoding];const M=hp[r],v=3*Math.max(0,Gn-2*M),b=(r===0?0:2*Gn)+2*M*(r>Ii-ds?r-Ii+ds:0);fl(t,v,b,3*M,2*M),l.setRenderTarget(t),l.render(h,Mh)}}function hA(i){return i===void 0||i.type!==Es?!1:i.encoding===Jt||i.encoding===Xo||i.encoding===Xl}function uA(){const i=[],e=[],t=[];let n=Ii;for(let r=0;r<vx;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>Ii-ds?o=_x[r-Ii+ds-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=2,g=1,m=new Float32Array(f*d*h),_=new Float32Array(p*d*h),x=new Float32Array(g*d*h);for(let v=0;v<h;v++){const b=v%3*2/3-1,y=v>2?0:-1,E=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];m.set(E,f*d*v),_.set(u,p*d*v);const w=[v,v,v,v,v,v];x.set(w,g*d*v)}const M=new ke;M.setAttribute("position",new $e(m,f)),M.setAttribute("uv",new $e(_,p)),M.setAttribute("faceIndex",new $e(x,g)),i.push(M),n>ds&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function pp(i){const e=new oi(3*Gn,3*Gn,i);return e.texture.mapping=ws,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function fl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dA(i){const e=new Float32Array(i),t=new D(0,1,0);return new Ls({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:kn[Jt]},outputEncoding:{value:kn[Jt]}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${rd()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function mp(){const i=new ve(1,1);return new Ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:kn[Jt]},outputEncoding:{value:kn[Jt]}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${rd()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function gp(){return new Ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:kn[Jt]},outputEncoding:{value:kn[Jt]}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${rd()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rd(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}