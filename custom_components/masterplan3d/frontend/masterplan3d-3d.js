var yd=0,Du=1,_d=2;var go=1,Md=2,ds=3,li=0,rn=1,se=2,Ln=0,Tn=1,Ee=2,Nu=3,bo=4,Sd=5;var xr=100,wd=101,Td=102,Ed=103,Ad=104,Rd=200,Cd=201,Pd=202,Id=203,Ou=204,Uu=205,Ld=206,Fd=207,Dd=208,Nd=209,Od=210,Ud=211,Bd=212,kd=213,zd=214,Na=0,Oa=1,Ua=2,is=3,Ba=4,ka=5,za=6,Va=7,Bu=0,Vd=1,Gd=2,Hn=0,ku=1,zu=2,Vu=3,Gu=4,Hu=5,Wu=6,Xu=7;var Yu=300,Wi=301,vr=302,gl=303,bl=304,xo=306,dr=1e3,Mn=1001,Ga=1002,tn=1003,Hd=1004;var vo=1005;var Xe=1006,xl=1007;var Xi=1008;var En=1009,qu=1010,$u=1011,ps=1012,vl=1013,Wn=1014,Xn=1015,Yn=1016,yl=1017,_l=1018,ms=1020,Zu=35902,Ku=35899,Ju=1021,ju=1022,Fn=1023,ni=1026,Yi=1027,Qu=1028,Ml=1029,qi=1030,Sl=1031;var wl=1033,yo=33776,_o=33777,Mo=33778,So=33779,Tl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Fl=37489,wo=37490,Dl=37491,Nl=37808,Ol=37809,Ul=37810,Bl=37811,kl=37812,zl=37813,Vl=37814,Gl=37815,Hl=37816,Wl=37817,Xl=37818,Yl=37819,ql=37820,$l=37821,Zl=36492,Kl=36494,Jl=36495,jl=36283,Ql=36284,To=36285,tc=36286;var qs=2300,Ha=2301,La=2302,Su=2303,wu=2400,Tu=2401,Eu=2402;var Wd=3200;var th=0,Xd=1,wi="",Oe="srgb",$s="srgb-linear",Zs="linear",ve="srgb";var Fa=7680;var Yd=519,qd=512,$d=513,Zd=514,ec=515,Kd=516,Jd=517,nc=518,jd=519,eh=35044,nh=35048;var ih="300 es",Vn=2e3,Ks=2001;function qg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){let i=rs("canvas");return i.style.display="block",i}var Vf={},ss=null;function Js(...i){let t="THREE."+i.shift();ss?ss("log",t,...i):console.log(t,...i)}function tp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $t(...i){i=tp(i);let t="THREE."+i.shift();if(ss)ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=tp(i);let t="THREE."+i.shift();if(ss)ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fr(...i){let t=i.join(" ");t in Vf||(Vf[t]=!0,$t(...i))}function ep(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var np={[Na]:Oa,[Ua]:za,[Ba]:Va,[is]:ka,[Oa]:Na,[za]:Ua,[Va]:Ba,[ka]:is},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qc=Math.PI/180,Wa=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Zg(i,t){return(i%t+t)%t}function tu(i,t,e){return(1-e)*i+e*t}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lh=class lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;var te=lh,ri=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],b=s[o+3];if(u!==b||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*b;g<0&&(f=-f,d=-d,m=-m,b=-b,g=-g);let p=1-a;if(g<.9995){let x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eu.copy(this).projectOnVector(t),this.sub(eu)}reflect(t){return this.sub(eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var W=ch,eu=new W,Gf=new ri,uh=class uh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=r[0],g=r[3],p=r[6],x=r[1],y=r[4],v=r[7],M=r[2],w=r[5],C=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*g+a*y+l*w,s[6]=o*p+a*v+l*C,s[1]=c*b+h*x+u*M,s[4]=c*g+h*y+u*w,s[7]=c*p+h*v+u*C,s[2]=f*b+d*x+m*M,s[5]=f*g+d*y+m*w,s[8]=f*p+d*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=e*u+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(t,e)),this}rotate(t){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-t)),this}translate(t,e){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;var ne=uh,nu=new ne,Hf=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kg(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:Zs,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var he=Kg();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Br,Xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Br===void 0&&(Br=rs("canvas")),Br.width=t.width,Br.height=t.height;let r=Br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Br}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jg=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var jg=0,ru=new W,hn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,r=Mn,s=Xe,o=Xi,a=Fn,l=En,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Ui(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Yu;hn.DEFAULT_ANISOTROPY=1;var hh=class hh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(h+f)/4,C=(u+b)/4,_=(m+g)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=C/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=_/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=_/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;var Be=hh,Ya=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new os(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ml=class ml{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/kr.setFromMatrixColumn(t,0).length(),s=1/kr.setFromMatrixColumn(t,1).length(),o=1/kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f+b*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f-b*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-b*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qg,t,tb)}lookAt(t,e,n){let r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Li.crossVectors(n,yn),Li.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Li.crossVectors(n,yn)),Li.normalize(),ra.crossVectors(yn,Li),r[0]=Li.x,r[4]=ra.x,r[8]=yn.x,r[1]=Li.y,r[5]=ra.y,r[9]=yn.y,r[2]=Li.z,r[6]=ra.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],M=n[15],w=r[0],C=r[4],_=r[8],T=r[12],S=r[1],E=r[5],F=r[9],I=r[13],P=r[2],R=r[6],A=r[10],D=r[14],N=r[3],U=r[7],k=r[11],z=r[15];return s[0]=o*w+a*S+l*P+c*N,s[4]=o*C+a*E+l*R+c*U,s[8]=o*_+a*F+l*A+c*k,s[12]=o*T+a*I+l*D+c*z,s[1]=h*w+u*S+f*P+d*N,s[5]=h*C+u*E+f*R+d*U,s[9]=h*_+u*F+f*A+d*k,s[13]=h*T+u*I+f*D+d*z,s[2]=m*w+b*S+g*P+p*N,s[6]=m*C+b*E+g*R+p*U,s[10]=m*_+b*F+g*A+p*k,s[14]=m*T+b*I+g*D+p*z,s[3]=x*w+y*S+v*P+M*N,s[7]=x*C+y*E+v*R+M*U,s[11]=x*_+y*F+v*A+M*k,s[15]=x*T+y*I+v*D+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],b=t[7],g=t[11],p=t[15],x=l*d-c*f,y=a*d-c*u,v=a*f-l*u,M=o*d-c*h,w=o*f-l*h,C=o*u-a*h;return e*(b*x-g*y+p*v)-n*(m*x-g*M+p*w)+r*(m*y-b*M+p*C)-s*(m*v-b*w+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=e*a-n*o,y=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,C=r*c-s*l,_=h*b-u*m,T=h*g-f*m,S=h*p-d*m,E=u*g-f*b,F=u*p-d*b,I=f*p-d*g,P=x*I-y*F+v*E+M*S-w*T+C*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return t[0]=(a*I-l*F+c*E)*R,t[1]=(r*F-n*I-s*E)*R,t[2]=(b*C-g*w+p*M)*R,t[3]=(f*w-u*C-d*M)*R,t[4]=(l*S-o*I-c*T)*R,t[5]=(e*I-r*S+s*T)*R,t[6]=(g*v-m*C-p*y)*R,t[7]=(h*C-f*v+d*y)*R,t[8]=(o*F-a*S+c*_)*R,t[9]=(n*S-e*F-s*_)*R,t[10]=(m*w-b*v+p*x)*R,t[11]=(u*v-h*w-d*x)*R,t[12]=(a*T-o*E-l*_)*R,t[13]=(e*E-n*T+r*_)*R,t[14]=(b*y-m*M-g*x)*R,t[15]=(h*M-u*y+f*x)*R,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,b=o*h,g=o*u,p=a*u,x=l*c,y=l*h,v=l*u,M=n.x,w=n.y,C=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(m-y)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(m+y)*C,r[9]=(g-x)*C,r[10]=(1-(f+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=kr.set(r[0],r[1],r[2]).length(),a=kr.set(r[4],r[5],r[6]).length(),l=kr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Un.copy(this);let c=1/o,h=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Vn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,b;if(l)m=s/(o-s),b=o*s/(o-s);else if(a===Vn)m=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Ks)m=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Vn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,b;if(l)m=1/(o-s),b=o/(o-s);else if(a===Vn)m=-2/(o-s),b=-(o+s)/(o-s);else if(a===Ks)m=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ml.prototype.isMatrix4=!0;var we=ml,kr=new W,Un=new we,Qg=new W(0,0,0),tb=new W(1,1,1),Li=new W,ra=new W,yn=new W,Xf=new we,Yf=new ri,Bi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eb=0,qf=new W,zr=new ri,gi=new we,sa=new W,Bs=new W,nb=new W,ib=new ri,$f=new W(1,0,0),Zf=new W(0,1,0),Kf=new W(0,0,1),Jf={type:"added"},rb={type:"removed"},Vr={type:"childadded",child:null},su={type:"childremoved",child:null},bn=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Bi,n=new ri,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new ne}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis($f,t)}rotateY(t){return this.rotateOnAxis(Zf,t)}rotateZ(t){return this.rotateOnAxis(Kf,t)}translateOnAxis(t,e){return qf.copy(t).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($f,t)}translateY(t){return this.translateOnAxis(Zf,t)}translateZ(t){return this.translateOnAxis(Kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Bs,sa,this.up):gi.lookAt(sa,Bs,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(gi),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jf),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rb),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jf),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,nb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,ib,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new W(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function ou(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=Zg(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ou(o,s,t+1/3),this.g=ou(o,s,t),this.b=ou(o,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return he.workingToColorSpace(un.copy(this),t),Math.round(de(un.r*255,0,255))*65536+Math.round(de(un.g*255,0,255))*256+Math.round(de(un.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(un.copy(this),e);let n=un.r,r=un.g,s=un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Oe){he.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,r=un.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(oa);let n=tu(Fi.h,oa.h,e),r=tu(Fi.s,oa.s,e),s=tu(Fi.l,oa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new j;j.NAMES=ip;var Qs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var si=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new W,bi=new W,au=new W,xi=new W,Gr=new W,Hr=new W,jf=new W,lu=new W,cu=new W,uu=new W,hu=new Be,fu=new Be,du=new Be,_i=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Bn.subVectors(t,e),r.cross(Bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Bn.subVectors(r,e),bi.subVectors(n,e),au.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(bi),l=Bn.dot(au),c=bi.dot(bi),h=bi.dot(au),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return hu.setScalar(0),fu.setScalar(0),du.setScalar(0),hu.fromBufferAttribute(t,e),fu.fromBufferAttribute(t,n),du.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(hu,s.x),o.addScaledVector(fu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(t,e,n,r){return Bn.subVectors(n,e),bi.subVectors(t,e),Bn.cross(bi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Bn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Gr.subVectors(r,n),Hr.subVectors(s,n),lu.subVectors(t,n);let l=Gr.dot(lu),c=Hr.dot(lu);if(l<=0&&c<=0)return e.copy(n);cu.subVectors(t,r);let h=Gr.dot(cu),u=Hr.dot(cu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gr,o);uu.subVectors(t,s);let d=Gr.dot(uu),m=Hr.dot(uu);if(m>=0&&d<=m)return e.copy(s);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Hr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return jf.subVectors(s,r),a=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(jf,a);let p=1/(g+b+f);return o=b*p,a=f*p,e.copy(n).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),la.subVectors(this.max,ks),Wr.subVectors(t.a,ks),Xr.subVectors(t.b,ks),Yr.subVectors(t.c,ks),Di.subVectors(Xr,Wr),Ni.subVectors(Yr,Xr),lr.subVectors(Wr,Yr);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-lr.z,lr.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,lr.z,0,-lr.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-lr.y,lr.x,0];return!pu(e,Wr,Xr,Yr,la)||(e=[1,0,0,0,1,0,0,0,1],!pu(e,Wr,Xr,Yr,la))?!1:(ca.crossVectors(Di,Ni),e=[ca.x,ca.y,ca.z],pu(e,Wr,Xr,Yr,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new W,new W,new W,new W,new W,new W,new W,new W],kn=new W,aa=new xn,Wr=new W,Xr=new W,Yr=new W,Di=new W,Ni=new W,lr=new W,ks=new W,la=new W,ca=new W,cr=new W;function pu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){cr.fromArray(i,s);let a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=t.dot(cr),c=e.dot(cr),h=n.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new W,ua=new te,ob=0,Sn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nt=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ab=new xn,zs=new W,mu=new W,ki=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ab.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(mu)),this.expandByPoint(zs.copy(t.center).sub(mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lb=0,Pn=new we,gu=new bn,qr=new W,_n=new xn,Vs=new xn,je=new W,Vt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qg(t)?pr:to)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return gu.lookAt(t),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(_n.min,Vs.min),_n.expandByPoint(je),je.addVectors(_n.max,Vs.max),_n.expandByPoint(je)):(_n.expandByPoint(Vs.min),_n.expandByPoint(Vs.max))}_n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(t,c),je.add(qr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new W,l[_]=new W;let c=new W,h=new W,u=new W,f=new te,d=new te,m=new te,b=new W,g=new W;function p(_,T,S){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(E),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(E),a[_].add(b),a[T].add(b),a[S].add(b),l[_].add(g),l[T].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,T=x.length;_<T;++_){let S=x[_],E=S.start,F=S.count;for(let I=E,P=E+F;I<P;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new W,v=new W,M=new W,w=new W;function C(_){M.fromBufferAttribute(r,_),w.copy(M);let T=a[_];y.copy(T),y.sub(M.multiplyScalar(M.dot(T))).normalize(),v.crossVectors(w,T);let E=v.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,E)}for(let _=0,T=x.length;_<T;++_){let S=x[_],E=S.start,F=S.count;for(let I=E,P=E+F;I<P;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Sn(f,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new W,eo=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bu=new W,cb=new W,ub=new ne,zn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=bu.subVectors(n,e).cross(cb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(bu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ub.getNormalMatrix(t),r=this.coplanarPoint(bu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hb=0,oi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Tn,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=Uu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$r,Gs=new W,Zr=new W,Kr=new W,Jr=new te,Hs=new te,rp=new we,ha=new W,Ws=new W,fa=new W,Qf=new te,xu=new te,td=new te,no=class extends bn{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $a(e,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new eo(n,3,0,!1)),$r.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=$r,this.material=t,this.center=new te(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;da(ha.set(-.5,-.5,0),Kr,o,Zr,r,s),da(Ws.set(.5,-.5,0),Kr,o,Zr,r,s),da(fa.set(.5,.5,0),Kr,o,Zr,r,s),Qf.set(0,0),xu.set(1,0),td.set(1,1);let a=t.ray.intersectTriangle(ha,Ws,fa,!1,Gs);if(a===null&&(da(Ws.set(-.5,.5,0),Kr,o,Zr,r,s),xu.set(0,1),a=t.ray.intersectTriangle(ha,fa,Ws,!1,Gs),a===null))return;let l=t.ray.origin.distanceTo(Gs);l<t.near||l>t.far||e.push({distance:l,point:Gs.clone(),uv:_i.getInterpolation(Gs,ha,Ws,fa,Qf,xu,td,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(i,t,e,n,r,s){Jr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Hs.x=s*Jr.x-r*Jr.y,Hs.y=r*Jr.x+s*Jr.y):Hs.copy(Jr),i.copy(t),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(rp)}var yi=new W,vu=new W,pa=new W,ma=new W,mr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){vu.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(vu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=ma.dot(this.direction),l=-ma.dot(pa),c=ma.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(vu).addScaledVector(pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),r=yi.dot(yi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,b=e.y-o.y,g=e.z-o.z,p=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(h),C,_,T,S,E,F,I,P,R,A,D,N;if(v>=M&&v>=w?(T=l,F=u,R=m,N=p,l>=0?(C=c,_=h,S=f,E=d,I=b,P=g,A=x,D=y):(C=h,_=c,S=d,E=f,I=g,P=b,A=y,D=x)):M>=w?(T=c,F=f,R=b,N=x,c>=0?(C=h,_=l,S=d,E=u,I=g,P=m,A=y,D=p):(C=l,_=h,S=u,E=d,I=m,P=g,A=p,D=y)):(T=h,F=d,R=g,N=y,h>=0?(C=l,_=c,S=u,E=f,I=m,P=b,A=p,D=x):(C=c,_=l,S=f,E=u,I=b,P=m,A=x,D=p)),T===0)return null;let U=C/T,k=_/T,z=1/T,Z=S-U*F,X=E-k*F,Y=I-U*R,$=P-k*R,st=A-U*N,H=D-k*N,V=st*$-H*Y,tt=Z*H-X*st,ct=Y*X-$*Z;if(r){if(V<0||tt<0||ct<0)return null}else if((V<0||tt<0||ct<0)&&(V>0||tt>0||ct>0))return null;let it=V+tt+ct;if(it===0)return null;let lt=z*(V*F+tt*R+ct*N);return(it>0?lt<0:lt>0)?null:this.at(lt/it,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ed=new we,ur=new mr,ga=new ki,nd=new W,ba=new W,xa=new W,va=new W,yu=new W,ya=new W,id=new W,_a=new W,Ct=class extends bn{constructor(t=new Vt,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(yu.fromBufferAttribute(u,t),o?ya.addScaledVector(yu,h):ya.addScaledVector(yu.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ur.copy(t.ray).recast(t.near),!(ga.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ga,nd)===null||ur.origin.distanceToSquared(nd)>(t.far-t.near)**2))&&(ed.copy(s).invert(),ur.copy(t.ray).applyMatrix4(ed),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ur)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);r=Ma(this,p,t,n,c,h,u,w,C,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Ma(this,o,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=v,C=v+1,_=v+2;r=Ma(this,p,t,n,c,h,u,w,C,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=g,y=g+1,v=g+2;r=Ma(this,o,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function fb(i,t,e,n,r,s,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===li,a),l===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:i}}function Ma(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ba),i.getVertexPosition(l,xa),i.getVertexPosition(c,va);let h=fb(i,t,e,n,ba,xa,va,id);if(h){let u=new W;_i.getBarycoord(id,ba,xa,va,u),r&&(h.uv=_i.getInterpolatedAttribute(r,a,l,c,u,new te)),s&&(h.uv1=_i.getInterpolatedAttribute(s,a,l,c,u,new te)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new W,materialIndex:0};_i.getNormal(ba,xa,va,f.normal),h.face=f,h.barycoord=u}return h}var Za=class extends hn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=tn,h=tn,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=new ki,db=new te(.5,.5),Sa=new W,io=class{constructor(t=new zn,e=new zn,n=new zn,r=new zn,s=new zn,o=new zn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],y=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-h,p-m,M-x).normalize(),r[1].setComponents(c+o,d+h,p+m,M+x).normalize(),r[2].setComponents(c+a,d+u,p+b,M+y).normalize(),r[3].setComponents(c-a,d-u,p-b,M-y).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===Vn)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===Ks)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let e=db.distanceTo(t.center);return hr.radius=.7071067811865476+e,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Sa.x=r.normal.x>0?t.max.x:t.min.x,Sa.y=r.normal.y>0?t.max.y:t.min.y,Sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ka=new W,Ja=new W,rd=new we,Xs=new mr,wa=new ki,_u=new W,sd=new W,ja=class extends bn{constructor(t=new Vt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ka.fromBufferAttribute(e,r-1),Ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ka.distanceTo(Ja);t.setAttribute("lineDistance",new Nt(n,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),wa.radius+=s,t.ray.intersectsSphere(wa)===!1)return;rd.copy(r).invert(),Xs.copy(t.ray).applyMatrix4(rd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=d,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),y=Ta(this,t,Xs,l,p,x,b);y&&e.push(y)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(d),p=Ta(this,t,Xs,l,b,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let b=d,g=m-1;b<g;b+=c){let p=Ta(this,t,Xs,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Ta(this,t,Xs,l,m-1,d,m-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ta(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ka.fromBufferAttribute(a,r),Ja.fromBufferAttribute(a,s),e.distanceSqToSegment(Ka,Ja,_u,sd)>n)return;_u.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_u);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var od=new W,ad=new W,qe=class extends ja{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+od.distanceTo(ad);t.setAttribute("lineDistance",new Nt(n,1))}else $t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Si=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ld=new we,Au=new mr,Ea=new ki,Aa=new W,zi=class extends bn{constructor(t=new Vt,e=new Si){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;ld.copy(r).invert(),Au.copy(t.ray).applyMatrix4(ld);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,b=d;m<b;m++){let g=c.getX(m);Aa.fromBufferAttribute(u,g),cd(Aa,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,b=d;m<b;m++)Aa.fromBufferAttribute(u,m),cd(Aa,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function cd(i,t,e,n,r,s,o){let a=Au.distanceSqToPoint(i);if(a<e){let l=new W;Au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ro=class extends hn{constructor(t=[],e=Wi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends hn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends hn{constructor(t,e,n=Wn,r,s,o,a=tn,l=tn,c,h=ni,u=1){if(h!==ni&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends ai{constructor(t,e=Wn,n=Wi,r,s,o=tn,a=tn,l,c=ni){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},so=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},us=class i extends Vt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function m(b,g,p,x,y,v,M,w,C,_,T){let S=v/C,E=M/_,F=v/2,I=M/2,P=w/2,R=C+1,A=_+1,D=0,N=0,U=new W;for(let k=0;k<A;k++){let z=k*E-I;for(let Z=0;Z<R;Z++){let X=Z*S-F;U[b]=X*x,U[g]=z*y,U[p]=P,c.push(U.x,U.y,U.z),U[b]=0,U[g]=0,U[p]=w>0?1:-1,h.push(U.x,U.y,U.z),u.push(Z/C),u.push(1-k/_),D+=1}}for(let k=0;k<_;k++)for(let z=0;z<C;z++){let Z=f+z+R*k,X=f+z+R*(k+1),Y=f+(z+1)+R*(k+1),$=f+(z+1)+R*k;l.push(Z,X,$),l.push(X,Y,$),N+=6}a.addGroup(d,N,T),d+=N,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var oo=class i extends Vt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new W,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function pb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=sp(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=vb(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ao(s,o,e,a,l,c,0),o}function sp(i,t,e,n,r){let s;if(r===Pb(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=ud(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ud(o/n|0,i[o],i[o+1],s);return s&&hs(s,s.next)&&(co(s),s=s.next),s}function gr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(i,t,e,n,r,s,o){if(!i)return;!o&&s&&wb(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?gb(i,n,r,s):mb(i)){t.push(l.i,i.i,c.i),co(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bb(gr(i),t),ao(i,t,e,n,r,s,2)):o===2&&xb(i,t,e,n,r,s):ao(gr(i),t,e,n,r,s,1);break}}}function mb(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ys(r,a,s,l,o,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gb(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ue(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),p=Ru(d,m,t,e,n),x=Ru(b,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Ys(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ys(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=b&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Ys(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ys(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!hs(n,r)&&ap(n,e,e.next,r)&&lo(n,r)&&lo(r,n)&&(t.push(n.i,e.i,r.i),co(e),co(e.next),e=i=r),e=e.next}while(e!==i);return gr(e)}function xb(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ab(o,a)){let l=lp(o,a);o=gr(o,o.next),l=gr(l,l.next),ao(o,t,e,n,r,s,0),ao(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function vb(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=sp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Eb(c))}r.sort(yb);for(let s=0;s<r.length;s++)e=_b(r[s],e);return e}function yb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function _b(i,t){let e=Mb(i,t);if(!e)return t;let n=lp(e,i);return gr(n,n.next),gr(e,e.next)}function Mb(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(hs(i,e))return e;do{if(hs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&op(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);lo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Sb(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Sb(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function wb(i,t,e,n){let r=i;do r.z===0&&(r.z=Ru(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Tb(r)}function Tb(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Ru(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Eb(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function op(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ys(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&op(i,t,e,n,r,s,o,a)}function Ab(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rb(i,t)&&(lo(i,t)&&lo(t,i)&&Cb(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||hs(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hs(i,t){return i.x===t.x&&i.y===t.y}function ap(i,t,e,n){let r=Ca(Ue(i,t,e)),s=Ca(Ue(i,t,n)),o=Ca(Ue(e,n,i)),a=Ca(Ue(e,n,t));return!!(r!==s&&o!==a||r===0&&Ra(i,e,t)||s===0&&Ra(i,n,t)||o===0&&Ra(e,i,n)||a===0&&Ra(e,t,n))}function Ra(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ca(i){return i>0?1:i<0?-1:0}function Rb(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lo(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Cb(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lp(i,t){let e=Cu(i.i,i.x,i.y),n=Cu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ud(i,t,e,n){let r=Cu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pb(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Pu=class{static triangulate(t,e,n=2){return pb(t,e,n)}},uo=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];hd(t),fd(n,t);let o=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,fd(n,e[l]);let a=Pu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gn=class i extends Vt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*f-o;for(let y=0;y<c;y++){let v=y*u-s;m.push(v,-x,0),b.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;d.push(y,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(b,3)),this.setAttribute("uv",new Nt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ho=class i extends Vt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new W,m=new te;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,y=x,v=x+n+1,M=x+n+2,w=x+1;a.push(y,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(dd(r))r.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(dd(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=yr(i[e]);for(let r in n)t[r]=n[r]}return t}function dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ib(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var cp={clone:yr,merge:dn},Lb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lb,this.fragmentShader=Fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Ib(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new te().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tl=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var el=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function jr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends Vi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:s=t,a=2*e-n;break;case Eu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:o=t,l=2*n-e;break;case Eu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*b+.5*m,v=d*g-d*b;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+x*o[c+M]+y*o[l+M]+v*o[u+M];return s}},rl=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},sl=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ol=class extends Vi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(r-e),b=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*m;return s}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let b=o[c+m],g=o[l+m],p=d*f+m*2,x=u[p],y=u[p+1],v=t*f+m*2,M=h[v],w=h[v+1],C=Nb(n,e,x,M,r);s[m]=up(C,b,y,w,g)}return s}};function up(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Db(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Nb(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=up(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Db(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var wn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Mu(t.settings)&&(n.settings={inTangents:jr(t.settings.inTangents,Array),outTangents:jr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ol(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break;case Su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Mu(this.settings)&&(pd(this.settings.inTangents,t),pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&$g(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===La,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let b=e[u+m];if(b!==e[f+m]||b!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Mu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ha;var Gi=class extends wn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=qs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};al.prototype.ValueTypeName="color";var ll=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};ll.prototype.ValueTypeName="number";var cl=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)ri.slerpFlat(s,0,o,c-a,o,c,l);return s}},fo=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends wn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=qs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};ul.prototype.ValueTypeName="vector";var Da={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(md(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!md(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function md(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var hl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new hl,fs=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=new WeakMap,fl=class extends fs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Da.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Qr.get(o);u===void 0&&(u=[],Qr.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=rs("img");function l(){h(),e&&e(this);let u=Qr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Qr.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Da.remove(`image:${t}`);let f=Qr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}Qr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Da.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var br=class extends fs{constructor(t){super(t)}load(t,e,n,r){let s=new hn,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Pa=new W,Ia=new ri,ti=new W,po=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pa,Ia,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pa,Ia,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new W,gd=new te,bd=new te,Qe=class extends po{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,gd,bd),e.subVectors(bd,gd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var In=class extends po{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ts=-90,es=1,dl=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(ts,es,t,e);r.layers=this.layers,this.add(r);let s=new Qe(ts,es,t,e);s.layers=this.layers,this.add(s);let o=new Qe(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new Qe(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new Qe(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new Qe(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},pl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var sh="\\[\\]\\.:\\/",Ob=new RegExp("["+sh+"]","g"),oh="[^"+sh+"]",Ub="[^"+sh.replace("\\.","")+"]",Bb=/((?:WC+[\/:])*)/.source.replace("WC",oh),kb=/(WCOD+)?/.source.replace("WCOD",Ub),zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Gb=new RegExp("^"+Bb+kb+zb+Vb+"$"),Hb=["material","materials","bones","map"],Iu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ob,"")}static parseTrackName(t){let e=Gb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Hb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Iu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mw=new Float32Array(1);var xd=new we,mo=class{constructor(t,e,n=0,r=1/0){this.ray=new mr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xd),this}intersectObject(t,e=!0,n=[]){return Lu(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Lu(t[r],this,n,e);return n.sort(vd),n}};function vd(i,t){return i.distance-t.distance}function Lu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Lu(s[o],t,e,!0)}}var fh=class fh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};fh.prototype.isMatrix2=!0;var Fu=fh;function ah(i,t,e,n){let r=Wb(n);switch(e){case Ju:return i*t;case Qu:return i*t/r.components*r.byteLength;case Ml:return i*t/r.components*r.byteLength;case qi:return i*t*2/r.components*r.byteLength;case Sl:return i*t*2/r.components*r.byteLength;case ju:return i*t*3/r.components*r.byteLength;case Fn:return i*t*4/r.components*r.byteLength;case wl:return i*t*4/r.components*r.byteLength;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case Rl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Pl:case Ll:case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:case wo:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wb(i){switch(i){case En:case qu:return{byteLength:1,components:1};case ps:case $u:case Yn:return{byteLength:2,components:1};case yl:case _l:return{byteLength:2,components:4};case Wn:case vl:case Xn:return{byteLength:4,components:1};case Zu:case Ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fp(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Yb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,xx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gv=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$v=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fy=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,my=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:qb,alphahash_pars_fragment:$b,alphamap_fragment:Zb,alphamap_pars_fragment:Kb,alphatest_fragment:Jb,alphatest_pars_fragment:jb,aomap_fragment:Qb,aomap_pars_fragment:tx,batching_pars_vertex:ex,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:hx,color_fragment:fx,color_pars_fragment:dx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:bx,defaultnormal_vertex:xx,displacementmap_pars_vertex:vx,displacementmap_vertex:yx,emissivemap_fragment:_x,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:wx,envmap_fragment:Tx,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:kx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Ix,fog_fragment:Lx,fog_pars_fragment:Fx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Ux,lights_pars_begin:Bx,lights_toon_fragment:zx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:Yx,lights_fragment_maps:qx,lights_fragment_end:$x,lightprobes_pars_fragment:Zx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Qx,map_fragment:tv,map_pars_fragment:ev,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:rv,metalnessmap_pars_fragment:sv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:uv,normal_fragment_begin:hv,normal_fragment_maps:fv,normal_pars_fragment:dv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:xv,clearcoat_pars_fragment:vv,iridescence_pars_fragment:yv,opaque_fragment:_v,packing:Mv,premultiplied_alpha_fragment:Sv,project_vertex:wv,dithering_fragment:Tv,dithering_pars_fragment:Ev,roughnessmap_fragment:Av,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Iv,shadowmask_pars_fragment:Lv,skinbase_vertex:Fv,skinning_pars_vertex:Dv,skinning_vertex:Nv,skinnormal_vertex:Ov,specularmap_fragment:Uv,specularmap_pars_fragment:Bv,tonemapping_fragment:kv,tonemapping_pars_fragment:zv,transmission_fragment:Vv,transmission_pars_fragment:Gv,uv_pars_fragment:Hv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:Yv,background_vert:qv,background_frag:$v,backgroundCube_vert:Zv,backgroundCube_frag:Kv,cube_vert:Jv,cube_frag:jv,depth_vert:Qv,depth_frag:ty,distance_vert:ey,distance_frag:ny,equirect_vert:iy,equirect_frag:ry,linedashed_vert:sy,linedashed_frag:oy,meshbasic_vert:ay,meshbasic_frag:ly,meshlambert_vert:cy,meshlambert_frag:uy,meshmatcap_vert:hy,meshmatcap_frag:fy,meshnormal_vert:dy,meshnormal_frag:py,meshphong_vert:my,meshphong_frag:gy,meshphysical_vert:by,meshphysical_frag:xy,meshtoon_vert:vy,meshtoon_frag:yy,points_vert:_y,points_frag:My,shadow_vert:Sy,shadow_frag:wy,sprite_vert:Ty,sprite_frag:Ey},At={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ui={basic:{uniforms:dn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:dn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:dn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:dn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:dn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new j(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:dn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:dn([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:dn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:dn([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:dn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:dn([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:dn([At.common,At.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:dn([At.lights,At.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var ic={r:0,b:0,g:0},Ay=new we,Dp=new ne;Dp.set(-1,0,0,0,1,0,0,0,1);function Ry(i,t,e,n,r,s){let o=new j(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(x){let y=!1,v=d(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===xo)?(c===void 0&&(c=new Ct(new us(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:yr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dp),c.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ct(new Gn(2,2),new fn({name:"BackgroundMaterial",uniforms:yr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(ic,rh(i)),e.buffers.color.setClear(ic.r,ic.g,ic.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:b,dispose:p}}function Cy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(E,F,I,P,R){let A=!1,D=u(E,P,I,F);s!==D&&(s=D,c(s.object)),A=d(E,P,I,R),A&&m(E,P,I,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,v(E,F,I,P),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,F,I,P){let R=P.wireframe===!0,A=n[F.id];A===void 0&&(A={},n[F.id]=A);let D=E.isInstancedMesh===!0?E.id:0,N=A[D];N===void 0&&(N={},A[D]=N);let U=N[I.id];U===void 0&&(U={},N[I.id]=U);let k=U[R];return k===void 0&&(k=f(l()),U[R]=k),k}function f(E){let F=[],I=[],P=[];for(let R=0;R<e;R++)F[R]=0,I[R]=0,P[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:P,object:E,attributes:{},index:null}}function d(E,F,I,P){let R=s.attributes,A=F.attributes,D=0,N=I.getAttributes();for(let U in N)if(N[U].location>=0){let z=R[U],Z=A[U];if(Z===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor)),z===void 0||z.attribute!==Z||Z&&z.data!==Z.data)return!0;D++}return s.attributesNum!==D||s.index!==P}function m(E,F,I,P){let R={},A=F.attributes,D=0,N=I.getAttributes();for(let U in N)if(N[U].location>=0){let z=A[U];z===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(z=E.instanceColor));let Z={};Z.attribute=z,z&&z.data&&(Z.data=z.data),R[U]=Z,D++}s.attributes=R,s.attributesNum=D,s.index=P}function b(){let E=s.newAttributes;for(let F=0,I=E.length;F<I;F++)E[F]=0}function g(E){p(E,0)}function p(E,F){let I=s.newAttributes,P=s.enabledAttributes,R=s.attributeDivisors;I[E]=1,P[E]===0&&(i.enableVertexAttribArray(E),P[E]=1),R[E]!==F&&(i.vertexAttribDivisor(E,F),R[E]=F)}function x(){let E=s.newAttributes,F=s.enabledAttributes;for(let I=0,P=F.length;I<P;I++)F[I]!==E[I]&&(i.disableVertexAttribArray(I),F[I]=0)}function y(E,F,I,P,R,A,D){D===!0?i.vertexAttribIPointer(E,F,I,R,A):i.vertexAttribPointer(E,F,I,P,R,A)}function v(E,F,I,P){b();let R=P.attributes,A=I.getAttributes(),D=F.defaultAttributeValues;for(let N in A){let U=A[N];if(U.location>=0){let k=R[N];if(k===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),k!==void 0){let z=k.normalized,Z=k.itemSize,X=t.get(k);if(X===void 0)continue;let Y=X.buffer,$=X.type,st=X.bytesPerElement,H=$===i.INT||$===i.UNSIGNED_INT||k.gpuType===vl;if(k.isInterleavedBufferAttribute){let V=k.data,tt=V.stride,ct=k.offset;if(V.isInstancedInterleavedBuffer){for(let it=0;it<U.locationSize;it++)p(U.location+it,V.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let it=0;it<U.locationSize;it++)g(U.location+it);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let it=0;it<U.locationSize;it++)y(U.location+it,Z/U.locationSize,$,z,tt*st,(ct+Z/U.locationSize*it)*st,H)}else{if(k.isInstancedBufferAttribute){for(let V=0;V<U.locationSize;V++)p(U.location+V,k.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let V=0;V<U.locationSize;V++)g(U.location+V);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let V=0;V<U.locationSize;V++)y(U.location+V,Z/U.locationSize,$,z,Z*st,Z/U.locationSize*V*st,H)}}else if(D!==void 0){let z=D[N];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(U.location,z);break;case 3:i.vertexAttrib3fv(U.location,z);break;case 4:i.vertexAttrib4fv(U.location,z);break;default:i.vertexAttrib1fv(U.location,z)}}}}x()}function M(){T();for(let E in n){let F=n[E];for(let I in F){let P=F[I];for(let R in P){let A=P[R];for(let D in A)h(A[D].object),delete A[D];delete P[R]}}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let F=n[E.id];for(let I in F){let P=F[I];for(let R in P){let A=P[R];for(let D in A)h(A[D].object),delete A[D];delete P[R]}}delete n[E.id]}function C(E){for(let F in n){let I=n[F];for(let P in I){let R=I[P];if(R[E.id]===void 0)continue;let A=R[E.id];for(let D in A)h(A[D].object),delete A[D];delete R[E.id]}}}function _(E){for(let F in n){let I=n[F],P=E.isInstancedMesh===!0?E.id:0,R=I[P];if(R!==void 0){for(let A in R){let D=R[A];for(let N in D)h(D[N].object),delete D[N];delete R[A]}delete I[P],Object.keys(I).length===0&&delete n[F]}}}function T(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Py(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Iy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==En&&C!==Xn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Ly(i){let t=this,e=null,n=0,r=!1,s=!1,o=new zn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{let x=s?0:n,y=x*4,v=p.clippingState||null;l.value=v,v=h(m,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==b;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var bs=4,Fy=6,Dy=20,Ny=256,Eo=new In,fp=new j,dh=null,ph=0,mh=0,gh=!1,Oy=new W,_r=new W,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Oy}=s;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Yn,format:Fn,colorSpace:$s,depthBuffer:!1},r=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Uy(s)),this._blurMaterial=ky(s,t,e),this._ggxMaterial=By(s,t,e)}return r}_compileMaterial(t){let e=new Ct(new Vt,t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(fp),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new us,new Yt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(fp),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let M=this._cubeSize;gs(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Wi||t.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-bs?n-m+bs:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,gs(s,g,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,gs(t,g,p,3*b,2*b),r.setRenderTarget(t),r.render(a,Eo)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-bs?r-this._lodMax+bs:0),f=4*(this._cubeSize-h);gs(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Eo)}};function Uy(i){let t=[],e=[],n=i,r=i-bs+1+Fy;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,y=p>2?0:-1,v=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let w=h[M*2]*2-1,C=h[M*2+1]*2-1;p===0?_r.set(1,C,w):p===1?_r.set(-w,1,-C):p===2?_r.set(-w,C,1):p===3?_r.set(-1,C,-w):p===4?_r.set(-w,-1,C):_r.set(w,C,-1),_r.toArray(b,(p*f+M)*d)}}let g=new Vt;g.setAttribute("position",new Sn(m,d)),g.setAttribute("outputDirection",new Sn(b,d)),e.push(new Ct(g,null)),n>bs&&n--}return{lodMeshes:e,sizeLods:t}}function dp(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function By(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ky(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function pp(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function mp(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ro(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new us(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ln});s.uniforms.tEquirect.value=e;let o=new Ct(r,s),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Xe),new dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function zy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===gl||d===bl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new oc(m.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===gl||d===bl,b=d===Wi||d===vr;if(m||b){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new sc(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return m&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new sc(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===gl?f.mapping=Wi:d===bl&&(f.mapping=vr),f}function l(f){let d=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Vy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&fr("WebGLRenderer: "+n+" extension not supported."),r}}}function Gy(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){let M=x[y+0],w=x[y+1],C=x[y+2];f.push(M,w,w,C,C,M)}}else{let x=m.array;b=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let M=y+0,w=y+1,C=y+2;f.push(M,w,w,C,C,M)}}let g=new(m.count>=65535?pr:to)(f,1);g.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hy(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Xy(i,t,e){let n=new WeakMap,r=new Be;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),b===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),C=new js(w,v,M,u);C.type=Xn,C.needsUpdate=!0;let _=y*4;for(let S=0;S<u;S++){let E=g[S],F=p[S],I=x[S],P=v*M*4*S;for(let R=0;R<E.count;R++){let A=R*_;d===!0&&(r.fromBufferAttribute(E,R),w[P+A+0]=r.x,w[P+A+1]=r.y,w[P+A+2]=r.z,w[P+A+3]=0),m===!0&&(r.fromBufferAttribute(F,R),w[P+A+4]=r.x,w[P+A+5]=r.y,w[P+A+6]=r.z,w[P+A+7]=0),b===!0&&(r.fromBufferAttribute(I,R),w[P+A+8]=r.x,w[P+A+9]=r.y,w[P+A+10]=r.z,w[P+A+11]=I.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new te(v,M)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Yy(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var qy={[ku]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Vu]:"CINEON_TONE_MAPPING",[Gu]:"ACES_FILMIC_TONE_MAPPING",[Wu]:"AGX_TONE_MAPPING",[Xu]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function $y(i,t,e,n,r,s){let o=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vt;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let h=new tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ct(c,h),f=new In(-1,1,1,-1,0,1),d=null,m=null,b=!1,g,p=null,x=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let C=x[w];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){x=v,y=x.length>0&&x[0].isRenderPass===!0;let M=o.width,w=o.height;x.length>0&&a===null&&(a=new Ye(M,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){let _=x[C];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Hn&&x.length===0)return!1;if(p=M,M!==null){let w=M.width,C=M.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return y===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,b=!0;let w=o,C=a;for(let _=0;_<x.length;_++){let T=x[_];T.enabled!==!1&&(T.render(v,C,w,M),T.needsSwap!==!1&&(w=C,C=C===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},he.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let _=qy[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,f),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Np=new hn,vh=new ai(1,1),Op=new js,Up=new qa,Bp=new ro,gp=[],bp=[],xp=new Float32Array(16),vp=new Float32Array(9),yp=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=bp[t];e===void 0&&(e=new Int32Array(t),bp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Qy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),Ke(e,n)}}function t1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),Ke(e,n)}}function e1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;xp.set(n),i.uniformMatrix4fv(this.addr,!1,xp),Ke(e,n)}}function n1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function s1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function o1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function u1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=e.isReversedDepthBuffer()?nc:ec,s=vh):s=Np,e.setTexture2D(t||s,r)}function h1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Up,r)}function f1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bp,r)}function d1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Op,r)}function p1(i){switch(i){case 5126:return Zy;case 35664:return Ky;case 35665:return Jy;case 35666:return jy;case 35674:return Qy;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(i,t){i.uniform1fv(this.addr,t)}function g1(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function b1(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function x1(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function v1(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y1(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _1(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M1(i,t){i.uniform1iv(this.addr,t)}function S1(i,t){i.uniform2iv(this.addr,t)}function w1(i,t){i.uniform3iv(this.addr,t)}function T1(i,t){i.uniform4iv(this.addr,t)}function E1(i,t){i.uniform1uiv(this.addr,t)}function A1(i,t){i.uniform2uiv(this.addr,t)}function R1(i,t){i.uniform3uiv(this.addr,t)}function C1(i,t){i.uniform4uiv(this.addr,t)}function P1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=vh:o=Np;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function I1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Up,s[o])}function L1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bp,s[o])}function F1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Op,s[o])}function D1(i){switch(i){case 5126:return m1;case 35664:return g1;case 35665:return b1;case 35666:return x1;case 35674:return v1;case 35675:return y1;case 35676:return _1;case 5124:case 35670:return M1;case 35667:case 35671:return S1;case 35668:case 35672:return w1;case 35669:case 35673:return T1;case 5125:return E1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return F1}}var yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p1(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D1(e.type)}},Mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function _p(i,t){i.seq.push(t),i.map[t.id]=t}function N1(i,t,e){let n=i.name,r=n.length;for(bh.lastIndex=0;;){let s=bh.exec(n),o=bh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_p(e,c===void 0?new yh(a,i,t):new _h(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mh(a),_p(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);N1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Mp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var O1=37297,U1=0;function B1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sp=new ne;function k1(i){he._getMatrix(Sp,he.workingColorSpace,i);let t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Zs:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+B1(i.getShaderSource(t),a)}else return s}function z1(i,t){let e=k1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var V1={[ku]:"Linear",[zu]:"Reinhard",[Vu]:"Cineon",[Gu]:"ACESFilmic",[Wu]:"AgX",[Xu]:"Neutral",[Hu]:"Custom"};function G1(i,t){let e=V1[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new W;function H1(){he.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function X1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function Tp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ep(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(q1,Z1)}var $1=new Map;function Z1(i,t){let e=ce[t];if(e===void 0){let n=$1.get(t);if(n!==void 0)e=ce[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sh(e)}var K1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(i){return i.replace(K1,J1)}function J1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var j1={[go]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Q1(i){return j1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[Wi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function e_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var n_={[vr]:"ENVMAP_MODE_REFRACTION"};function i_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[Bu]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function s_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r_[i.combine]||"ENVMAP_BLENDING_NONE"}function o_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Q1(e),c=e_(e),h=i_(e),u=s_(e),f=o_(e),d=W1(e),m=X1(s),b=r.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(g=[Rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[Rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Hn?G1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,z1("linearToOutputTexel",e.outputColorSpace),H1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Sh(o),o=Tp(o,e),o=Ep(o,e),a=Sh(a),a=Tp(a,e),a=Ep(a,e),o=Ap(o),a=Ap(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+g+o,v=x+p+a,M=Mp(r,r.VERTEX_SHADER,y),w=Mp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(E){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(b)||"",I=r.getShaderInfoLog(M)||"",P=r.getShaderInfoLog(w)||"",R=F.trim(),A=I.trim(),D=P.trim(),N=!0,U=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let k=wp(r,M,"vertex"),z=wp(r,w,"fragment");Zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+k+`
`+z)}else R!==""?$t("WebGLProgram: Program Info Log:",R):(A===""||D==="")&&(U=!1);U&&(E.diagnostics={runnable:N,programLog:R,vertexShader:{log:A,prefix:g},fragmentShader:{log:D,prefix:p}})}r.deleteShader(M),r.deleteShader(w),_=new xs(r,b),T=Y1(r,b)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,O1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var l_=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Th(t),e.set(t,n)),n}},Th=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function c_(i){return i===qi||i===wo||i===To}function u_(i,t,e,n,r,s){let o=new as,a=new wh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,S,E,F,I){let P=E.fog,R=F.geometry,A=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=t.get(_.envMap||A,D),U=N&&N.mapping===xo?N.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&$t("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Z=z!==void 0?z.length:0,X=0;R.morphAttributes.position!==void 0&&(X=1),R.morphAttributes.normal!==void 0&&(X=2),R.morphAttributes.color!==void 0&&(X=3);let Y,$,st,H;if(k){let Ae=ui[k];Y=Ae.vertexShader,$=Ae.fragmentShader}else{Y=_.vertexShader,$=_.fragmentShader;let Ae=a.getVertexShaderStage(_),be=a.getFragmentShaderStage(_);a.update(_,Ae,be),st=Ae.id,H=be.id}let V=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ct=F.isInstancedMesh===!0,it=F.isBatchedMesh===!0,lt=!!_.map,ut=!!_.matcap,dt=!!N,ot=!!_.aoMap,xt=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,Xt=!!_.normalMap,Jt=!!_.displacementMap,re=!!_.emissiveMap,_e=!!_.metalnessMap,Ie=!!_.roughnessMap,K=_.anisotropy>0,Ge=_.clearcoat>0,ge=_.dispersion>0,G=_.retroreflectivity>0,L=_.iridescence>0,Q=_.sheen>0,rt=_.transmission>0,ht=K&&!!_.anisotropyMap,yt=Ge&&!!_.clearcoatMap,_t=Ge&&!!_.clearcoatNormalMap,ft=Ge&&!!_.clearcoatRoughnessMap,mt=L&&!!_.iridescenceMap,Mt=L&&!!_.iridescenceThicknessMap,Gt=Q&&!!_.sheenColorMap,Et=Q&&!!_.sheenRoughnessMap,St=!!_.specularMap,Ht=!!_.specularColorMap,qt=!!_.specularIntensityMap,ae=rt&&!!_.transmissionMap,J=rt&&!!_.thicknessMap,wt=!!_.gradientMap,pt=!!_.alphaMap,Tt=_.alphaTest>0,It=!!_.alphaHash,bt=!!_.extensions,Wt=Hn;_.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Bt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:$,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:it,batchingColor:it&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:ut,envMap:dt,envMapMode:dt&&N.mapping,envMapCubeUVHeight:U,aoMap:ot,lightMap:xt,bumpMap:vt,normalMap:Xt,displacementMap:Jt,emissiveMap:re,normalMapObjectSpace:Xt&&_.normalMapType===Xd,normalMapTangentSpace:Xt&&_.normalMapType===th,packedNormalMap:Xt&&_.normalMapType===th&&c_(_.normalMap.format),metalnessMap:_e,roughnessMap:Ie,anisotropy:K,anisotropyMap:ht,clearcoat:Ge,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ft,dispersion:ge,retroreflection:G,iridescence:L,iridescenceMap:mt,iridescenceThicknessMap:Mt,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:Et,specularMap:St,specularColorMap:Ht,specularIntensityMap:qt,transmission:rt,transmissionMap:ae,thicknessMap:J,gradientMap:wt,opaque:_.transparent===!1&&_.blending===Tn&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:Tt,alphaHash:It,combine:_.combine,mapUv:lt&&m(_.map.channel),aoMapUv:ot&&m(_.aoMap.channel),lightMapUv:xt&&m(_.lightMap.channel),bumpMapUv:vt&&m(_.bumpMap.channel),normalMapUv:Xt&&m(_.normalMap.channel),displacementMapUv:Jt&&m(_.displacementMap.channel),emissiveMapUv:re&&m(_.emissiveMap.channel),metalnessMapUv:_e&&m(_.metalnessMap.channel),roughnessMapUv:Ie&&m(_.roughnessMap.channel),anisotropyMapUv:ht&&m(_.anisotropyMap.channel),clearcoatMapUv:yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&m(_.sheenRoughnessMap.channel),specularMapUv:St&&m(_.specularMap.channel),specularColorMapUv:Ht&&m(_.specularColorMap.channel),specularIntensityMapUv:qt&&m(_.specularIntensityMap.channel),transmissionMapUv:ae&&m(_.transmissionMap.channel),thicknessMapUv:J&&m(_.thicknessMap.channel),alphaMapUv:pt&&m(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Xt||K),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(lt||pt),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:tt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:X,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:re&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===se,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&_.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)T.push(S),T.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(p(T,_),x(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let T=d[_.type],S;if(T){let E=ui[T];S=cp.clone(E.uniforms)}else S=_.uniforms;return S}function v(_,T){let S=h.get(T);return S!==void 0?++S.usedTimes:(S=new a_(i,T,_,r),c.push(S),h.set(T,S)),S}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:C}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,b,g,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function l(f,d,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let y=a(f,d,m,b,g,p);m.transmission>0?n.push(y):m.transparent===!0?r.push(y):e.push(y)}function c(f,d,m,b,g,p){let x=a(f,d,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||f_),n.length>1&&n.sort(d||Cp),r.length>1&&r.sort(d||Cp)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function d_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Pp,i.set(n,[o])):r>=s.length?(o=new Pp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new j};break;case"SpotLight":e={position:new W,direction:new W,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function m_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var g_=0;function b_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x_(i){let t=new p_,e=m_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let r=new W,s=new we,o=new we;function a(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,x=0,y=0,v=0,M=0,w=0,C=0,_=0,T=0,S=0;c.sort(b_);for(let F=0,I=c.length;F<I;F++){let P=c[F],R=P.color,A=P.intensity,D=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===qi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=R.r*A,u+=R.g*A,f+=R.b*A;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],A);S++}else if(P.isSunLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,z=e.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=z,n.sunShadowMap[m]=N;let Z=k.getViewportCount();for(let X=0;X<Z;X++)n.sunShadowMatrix[b+X]=k.getMatrix(X),n.sunShadowCascade[b+X]=k._cascadeData[X];b+=Z,m++}n.sun[d]=U,d++}else if(P.isDirectionalLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,z=e.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=P.shadow.matrix,M++}n.directional[g]=U,g++}else if(P.isSpotLight){let U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(R).multiplyScalar(A),U.distance=D,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[x]=U;let k=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,k.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=k.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=N,C++}x++}else if(P.isRectAreaLight){let U=t.get(P);U.color.copy(R).multiplyScalar(A),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=U,y++}else if(P.isPointLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let k=P.shadow,z=e.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=U,p++}else if(P.isHemisphereLight){let U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(A),U.groundColor.copy(P.groundColor).multiplyScalar(A),n.hemi[v]=U,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let E=n.hash;(E.sunLength!==d||E.directionalLength!==g||E.pointLength!==p||E.spotLength!==x||E.rectAreaLength!==y||E.hemiLength!==v||E.numSunShadows!==m||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==C||E.numSpotMaps!==_||E.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,E.sunLength=d,E.directionalLength=g,E.pointLength=p,E.spotLength=x,E.rectAreaLength=y,E.hemiLength=v,E.numSunShadows=m,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=C,E.numSpotMaps=_,E.numLightProbes=S,n.version=g_++)}function l(c,h){let u=0,f=0,d=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ip(i){let t=new x_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function v_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Ip(i),t.set(r,[a])):s>=o.length?(a=new Ip(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],S_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Lp=new we,Ao=new W,xh=new W;function w_(i,t,e){let n=new io,r=new te,s=new te,o=new Be,a=new el,l=new nl,c={},h=e.maxTextureSize,u={[li]:rn,[rn]:li,[se]:se},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:y_,fragmentShader:__}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ct(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let p=this.type;this.render=function(w,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Md&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=go);let T=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let I=p!==this.type;I&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(R=>R.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,R=w.length;P<R;P++){let A=w[P],D=A.shadow;if(D===void 0){$t("WebGLShadowMap:",A,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let N=D.getFrameExtents();r.multiply(N),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,D.mapSize.y=s.y));let U=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=U,D.map===null||I===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===ds){if(A.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Ye(r.x,r.y,{format:qi,type:Yn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),D.map.texture.name=A.name+".shadowMap",D.map.depthTexture=new ai(r.x,r.y,Xn),D.map.depthTexture.name=A.name+".shadowMapDepth",D.map.depthTexture.format=ni,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=tn,D.map.depthTexture.magFilter=tn}else A.isPointLight?(D.map=new oc(r.x),D.map.depthTexture=new Qa(r.x,Wn)):(D.map=new Ye(r.x,r.y),D.map.depthTexture=new ai(r.x,r.y,Wn)),D.map.depthTexture.name=A.name+".shadowMap",D.map.depthTexture.format=ni,this.type===go?(D.map.depthTexture.compareFunction=U?nc:ec,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=tn,D.map.depthTexture.magFilter=tn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);let k=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();A.isPointLight!==!0&&D.updateMatrices(A,_);for(let z=0;z<k;z++){let Z=D.getCamera(z);if(A.isPointLight){let X=D.camera,Y=D.matrix,$=A.distance||X.far;$!==X.far&&(X.far=$,X.updateProjectionMatrix()),Ao.setFromMatrixPosition(A.matrixWorld),X.position.copy(Ao),xh.copy(X.position),xh.add(M_[z]),X.up.copy(S_[z]),X.lookAt(xh),X.updateMatrixWorld(),Y.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Lp.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Lp,X.coordinateSystem,X.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,z),i.clear();else{z===0&&(i.setRenderTarget(D.map),i.clear());let X=D.getViewport(z);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),F.viewport(o)}n=D.getFrustum(z),v(C,_,Z,A,this.type)}D.isPointLightShadow!==!0&&this.type===ds&&x(D,_),D.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,E)};function x(w,C){let _=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ye(r.x,r.y,{format:qi,type:Yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,_,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,_,d,b,null)}function y(w,C,_,T){let S=null,E=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=_.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=S.uuid,I=C.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let R=P[I];R===void 0&&(R=S.clone(),P[I]=R,C.addEventListener("dispose",M)),S=R}if(S.visible=C.visible,S.wireframe=C.wireframe,T===ds?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=_}return S}function v(w,C,_,T,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let I=t.update(w),P=w.material;if(Array.isArray(P)){let R=I.groups;for(let A=0,D=R.length;A<D;A++){let N=R[A],U=P[N.materialIndex];if(U&&U.visible){let k=y(w,U,T,S);w.onBeforeShadow(i,w,C,_,I,k,N),i.renderBufferDirect(_,null,I,k,w,N),w.onAfterShadow(i,w,C,_,I,k,N)}}}else if(P.visible){let R=y(w,P,T,S);w.onBeforeShadow(i,w,C,_,I,R,null),i.renderBufferDirect(_,null,I,R,w,null),w.onAfterShadow(i,w,C,_,I,R,null)}}let F=w.children;for(let I=0,P=F.length;I<P;I++)v(F[I],C,_,T,S)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function T_(i,t){function e(){let J=!1,wt=new Be,pt=null,Tt=new Be(0,0,0,0);return{setMask:function(It){pt!==It&&!J&&(i.colorMask(It,It,It,It),pt=It)},setLocked:function(It){J=It},setClear:function(It,bt,Wt,Bt,Ae){Ae===!0&&(It*=Bt,bt*=Bt,Wt*=Bt),wt.set(It,bt,Wt,Bt),Tt.equals(wt)===!1&&(i.clearColor(It,bt,Wt,Bt),Tt.copy(wt))},reset:function(){J=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let J=!1,wt=!1,pt=null,Tt=null,It=null;return{setReversed:function(bt){if(wt!==bt){let Wt=t.get("EXT_clip_control");bt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),wt=bt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return wt},setTest:function(bt){bt?V(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(bt){pt!==bt&&!J&&(i.depthMask(bt),pt=bt)},setFunc:function(bt){if(wt&&(bt=np[bt]),Tt!==bt){switch(bt){case Na:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=bt}},setLocked:function(bt){J=bt},setClear:function(bt){It!==bt&&(It=bt,wt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){J=!1,pt=null,Tt=null,It=null,wt=!1}}}function r(){let J=!1,wt=null,pt=null,Tt=null,It=null,bt=null,Wt=null,Bt=null,Ae=null;return{setTest:function(be){J||(be?V(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(be){wt!==be&&!J&&(i.stencilMask(be),wt=be)},setFunc:function(be,On,jn){(pt!==be||Tt!==On||It!==jn)&&(i.stencilFunc(be,On,jn),pt=be,Tt=On,It=jn)},setOp:function(be,On,jn){(bt!==be||Wt!==On||Bt!==jn)&&(i.stencilOp(be,On,jn),bt=be,Wt=On,Bt=jn)},setLocked:function(be){J=be},setClear:function(be){Ae!==be&&(i.clearStencil(be),Ae=be)},reset:function(){J=!1,wt=null,pt=null,Tt=null,It=null,bt=null,Wt=null,Bt=null,Ae=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,y=null,v=null,M=null,w=null,C=null,_=new j(0,0,0),T=0,S=!1,E=null,F=null,I=null,P=null,R=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,N=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=N>=2);let k=null,z={},Z=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),Y=new Be().fromArray(Z),$=new Be().fromArray(X);function st(J,wt,pt,Tt){let It=new Uint8Array(4),bt=i.createTexture();i.bindTexture(J,bt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<pt;Wt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(wt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return bt}let H={};H[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(is),vt(!1),Xt(Du),V(i.CULL_FACE),ot(Ln);function V(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function tt(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function ct(J,wt){return f[J]!==wt?(i.bindFramebuffer(J,wt),f[J]=wt,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function it(J,wt){let pt=m,Tt=!1;if(J){pt=d.get(wt),pt===void 0&&(pt=[],d.set(wt,pt));let It=J.textures;if(pt.length!==It.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Wt=It.length;bt<Wt;bt++)pt[bt]=i.COLOR_ATTACHMENT0+bt;pt.length=It.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function lt(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let ut={[xr]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};ut[Ed]=i.MIN,ut[Ad]=i.MAX;let dt={[Rd]:i.ZERO,[Cd]:i.ONE,[Pd]:i.SRC_COLOR,[Ou]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[Uu]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Bd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(J,wt,pt,Tt,It,bt,Wt,Bt,Ae,be){if(J===Ln){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(V(i.BLEND),g=!0),J!==Sd){if(J!==p||be!==S){if((x!==xr||M!==xr)&&(i.blendEquation(i.FUNC_ADD),x=xr,M=xr),be)switch(J){case Tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",J);break}else switch(J){case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nu:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",J);break}y=null,v=null,w=null,C=null,_.set(0,0,0),T=0,p=J,S=be}return}It=It||wt,bt=bt||pt,Wt=Wt||Tt,(wt!==x||It!==M)&&(i.blendEquationSeparate(ut[wt],ut[It]),x=wt,M=It),(pt!==y||Tt!==v||bt!==w||Wt!==C)&&(i.blendFuncSeparate(dt[pt],dt[Tt],dt[bt],dt[Wt]),y=pt,v=Tt,w=bt,C=Wt),(Bt.equals(_)===!1||Ae!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Ae),_.copy(Bt),T=Ae),p=J,S=!1}function xt(J,wt){J.side===se?tt(i.CULL_FACE):V(i.CULL_FACE);let pt=J.side===rn;wt&&(pt=!pt),vt(pt),J.blending===Tn&&J.transparent===!1?ot(Ln):ot(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),s.setMask(J.colorWrite);let Tt=J.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),re(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(J){E!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),E=J)}function Xt(J){J!==yd?(V(i.CULL_FACE),J!==F&&(J===Du?i.cullFace(i.BACK):J===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),F=J}function Jt(J){J!==I&&(D&&i.lineWidth(J),I=J)}function re(J,wt,pt){J?(V(i.POLYGON_OFFSET_FILL),(P!==wt||R!==pt)&&(P=wt,R=pt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,pt))):tt(i.POLYGON_OFFSET_FILL)}function _e(J){J?V(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Ie(J){J===void 0&&(J=i.TEXTURE0+A-1),k!==J&&(i.activeTexture(J),k=J)}function K(J,wt,pt){pt===void 0&&(k===null?pt=i.TEXTURE0+A-1:pt=k);let Tt=z[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[pt]=Tt),(Tt.type!==J||Tt.texture!==wt)&&(k!==pt&&(i.activeTexture(pt),k=pt),i.bindTexture(J,wt||H[J]),Tt.type=J,Tt.texture=wt)}function Ge(){let J=z[k];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function L(){try{i.texSubImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function Q(){try{i.texSubImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function yt(){try{i.texStorage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function _t(){try{i.texStorage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function ft(){try{i.texImage2D(...arguments)}catch(J){Zt("WebGLState:",J)}}function mt(){try{i.texImage3D(...arguments)}catch(J){Zt("WebGLState:",J)}}function Mt(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function Gt(J,wt){u[J]!==wt&&(i.pixelStorei(J,wt),u[J]=wt)}function Et(J){Y.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Y.copy(J))}function St(J){$.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),$.copy(J))}function Ht(J,wt){let pt=c.get(wt);pt===void 0&&(pt=new WeakMap,c.set(wt,pt));let Tt=pt.get(J);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,J.name),pt.set(J,Tt))}function qt(J,wt){let Tt=c.get(wt).get(J);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,J.__bindingPointIndex),l.set(wt,Tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,z={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,y=null,v=null,M=null,w=null,C=null,_=new j(0,0,0),T=0,S=!1,E=null,F=null,I=null,P=null,R=null,Y.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:tt,bindFramebuffer:ct,drawBuffers:it,useProgram:lt,setBlending:ot,setMaterial:xt,setFlipSided:vt,setCullFace:Xt,setLineWidth:Jt,setPolygonOffset:re,setScissorTest:_e,activeTexture:Ie,bindTexture:K,unbindTexture:Ge,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:ft,texImage3D:mt,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:qt,texStorage2D:yt,texStorage3D:_t,texSubImage2D:L,texSubImage3D:Q,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Et,viewport:St,reset:ae}}function E_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,L){return m?new OffscreenCanvas(G,L):rs("canvas")}function g(G,L,Q){let rt=1,ht=ge(G);if((ht.width>Q||ht.height>Q)&&(rt=Q/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let yt=Math.floor(rt*ht.width),_t=Math.floor(rt*ht.height);f===void 0&&(f=b(yt,_t));let ft=L?b(yt,_t):f;return ft.width=yt,ft.height=_t,ft.getContext("2d").drawImage(G,0,0,yt,_t),$t("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+yt+"x"+_t+")."),ft}else return"data"in G&&$t("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),G;return G}function p(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(G,L,Q,rt,ht,yt=!1){if(G!==null){if(i[G]!==void 0)return i[G];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let _t;rt&&(_t=t.get("EXT_texture_norm16"),_t||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=L;if(L===i.RED&&(Q===i.FLOAT&&(ft=i.R32F),Q===i.HALF_FLOAT&&(ft=i.R16F),Q===i.UNSIGNED_BYTE&&(ft=i.R8),Q===i.UNSIGNED_SHORT&&_t&&(ft=_t.R16_EXT),Q===i.SHORT&&_t&&(ft=_t.R16_SNORM_EXT)),L===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.R8UI),Q===i.UNSIGNED_SHORT&&(ft=i.R16UI),Q===i.UNSIGNED_INT&&(ft=i.R32UI),Q===i.BYTE&&(ft=i.R8I),Q===i.SHORT&&(ft=i.R16I),Q===i.INT&&(ft=i.R32I)),L===i.RG&&(Q===i.FLOAT&&(ft=i.RG32F),Q===i.HALF_FLOAT&&(ft=i.RG16F),Q===i.UNSIGNED_BYTE&&(ft=i.RG8),Q===i.UNSIGNED_SHORT&&_t&&(ft=_t.RG16_EXT),Q===i.SHORT&&_t&&(ft=_t.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RG16UI),Q===i.UNSIGNED_INT&&(ft=i.RG32UI),Q===i.BYTE&&(ft=i.RG8I),Q===i.SHORT&&(ft=i.RG16I),Q===i.INT&&(ft=i.RG32I)),L===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),Q===i.UNSIGNED_INT&&(ft=i.RGB32UI),Q===i.BYTE&&(ft=i.RGB8I),Q===i.SHORT&&(ft=i.RGB16I),Q===i.INT&&(ft=i.RGB32I)),L===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ft=i.RGBA32UI),Q===i.BYTE&&(ft=i.RGBA8I),Q===i.SHORT&&(ft=i.RGBA16I),Q===i.INT&&(ft=i.RGBA32I)),L===i.RGB&&(Q===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGB16_EXT),Q===i.SHORT&&_t&&(ft=_t.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),L===i.RGBA){let mt=yt?Zs:he.getTransfer(ht);Q===i.FLOAT&&(ft=i.RGBA32F),Q===i.HALF_FLOAT&&(ft=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ft=mt===ve?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGBA16_EXT),Q===i.SHORT&&_t&&(ft=_t.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function M(G,L){let Q;return G?L===null||L===Wn||L===ms?Q=i.DEPTH24_STENCIL8:L===Xn?Q=i.DEPTH32F_STENCIL8:L===ps&&(Q=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Wn||L===ms?Q=i.DEPTH_COMPONENT24:L===Xn?Q=i.DEPTH_COMPONENT32F:L===ps&&(Q=i.DEPTH_COMPONENT16),Q}function w(G,L){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==tn&&G.minFilter!==Xe?Math.log2(Math.max(L.width,L.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?L.mipmaps.length:1}function C(G){let L=G.target;L.removeEventListener("dispose",C),T(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function _(G){let L=G.target;L.removeEventListener("dispose",_),E(L)}function T(G){let L=n.get(G);if(L.__webglInit===void 0)return;let Q=G.source,rt=d.get(Q);if(rt){let ht=rt[L.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(G),Object.keys(rt).length===0&&d.delete(Q)}n.remove(G)}function S(G){let L=n.get(G);i.deleteTexture(L.__webglTexture);let Q=G.source,rt=d.get(Q);delete rt[L.__cacheKey],o.memory.textures--}function E(G){let L=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(L.__webglFramebuffer[rt]))for(let ht=0;ht<L.__webglFramebuffer[rt].length;ht++)i.deleteFramebuffer(L.__webglFramebuffer[rt][ht]);else i.deleteFramebuffer(L.__webglFramebuffer[rt]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[rt])}else{if(Array.isArray(L.__webglFramebuffer))for(let rt=0;rt<L.__webglFramebuffer.length;rt++)i.deleteFramebuffer(L.__webglFramebuffer[rt]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let rt=0;rt<L.__webglColorRenderbuffer.length;rt++)L.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[rt]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let Q=G.textures;for(let rt=0,ht=Q.length;rt<ht;rt++){let yt=n.get(Q[rt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(Q[rt])}n.remove(G)}let F=0;function I(){F=0}function P(){return F}function R(G){F=G}function A(){let G=F;return G>=r.maxTextures&&$t("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,G}function D(G){let L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function N(G,L){let Q=n.get(G);if(G.isVideoTexture&&K(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let rt=G.image;if(rt===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Q,G,L);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+L)}function U(G,L){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,L);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+L)}function k(G,L){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,L);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+L)}function z(G,L){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){ct(Q,G,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+L)}let Z={[dr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},X={[tn]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[xl]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Y={[qd]:i.NEVER,[jd]:i.ALWAYS,[$d]:i.LESS,[ec]:i.LEQUAL,[Zd]:i.EQUAL,[nc]:i.GEQUAL,[Kd]:i.GREATER,[Jd]:i.NOTEQUAL};function $(G,L){if(L.type===Xn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===Xe||L.magFilter===xl||L.magFilter===vo||L.magFilter===Xi||L.minFilter===Xe||L.minFilter===xl||L.minFilter===vo||L.minFilter===Xi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,Z[L.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,Z[L.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,Z[L.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,X[L.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,X[L.minFilter]),L.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,Y[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===tn||L.minFilter!==vo&&L.minFilter!==Xi||L.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function st(G,L){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,L.addEventListener("dispose",C));let rt=L.source,ht=d.get(rt);ht===void 0&&(ht={},d.set(rt,ht));let yt=D(L);if(yt!==G.__cacheKey){ht[yt]===void 0&&(ht[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ht[yt].usedTimes++;let _t=ht[G.__cacheKey];_t!==void 0&&(ht[G.__cacheKey].usedTimes--,_t.usedTimes===0&&S(L)),G.__cacheKey=yt,G.__webglTexture=ht[yt].texture}return Q}function H(G,L,Q){return Math.floor(Math.floor(G/Q)/L)}function V(G,L,Q,rt){let yt=G.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,Q,rt,L.data);else{yt.sort((Gt,Et)=>Gt.start-Et.start);let _t=0;for(let Gt=1;Gt<yt.length;Gt++){let Et=yt[_t],St=yt[Gt],Ht=Et.start+Et.count,qt=H(St.start,L.width,4),ae=H(Et.start,L.width,4);St.start<=Ht+1&&qt===ae&&H(St.start+St.count-1,L.width,4)===qt?Et.count=Math.max(Et.count,St.start+St.count-Et.start):(++_t,yt[_t]=St)}yt.length=_t+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let Gt=0,Et=yt.length;Gt<Et;Gt++){let St=yt[Gt],Ht=Math.floor(St.start/4),qt=Math.ceil(St.count/4),ae=Ht%L.width,J=Math.floor(Ht/L.width),wt=qt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ae,J,wt,pt,Q,rt,L.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function tt(G,L,Q){let rt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(rt=i.TEXTURE_3D);let ht=st(G,L),yt=L.source;e.bindTexture(rt,G.__webglTexture,i.TEXTURE0+Q);let _t=n.get(yt);if(yt.version!==_t.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let pt=he.getPrimaries(he.workingColorSpace),Tt=L.colorSpace===wi?null:he.getPrimaries(L.colorSpace),It=L.colorSpace===wi||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let mt=g(L.image,!1,r.maxTextureSize);mt=Ge(L,mt);let Mt=s.convert(L.format,L.colorSpace),Gt=s.convert(L.type),Et=v(L.internalFormat,Mt,Gt,L.normalized,L.colorSpace,L.isVideoTexture);$(rt,L);let St,Ht=L.mipmaps,qt=L.isVideoTexture!==!0,ae=_t.__version===void 0||ht===!0,J=yt.dataReady,wt=w(L,mt);if(L.isDepthTexture)Et=M(L.format===Yi,L.type),ae&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Et,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Et,mt.width,mt.height,0,Mt,Gt,null));else if(L.isDataTexture)if(Ht.length>0){qt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Ht[0].width,Ht[0].height);for(let pt=0,Tt=Ht.length;pt<Tt;pt++)St=Ht[pt],qt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,Mt,Gt,St.data);L.generateMipmaps=!1}else qt?(ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,mt.width,mt.height),J&&V(L,mt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Et,mt.width,mt.height,0,Mt,Gt,mt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){qt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,Ht[0].width,Ht[0].height,mt.depth);for(let pt=0,Tt=Ht.length;pt<Tt;pt++)if(St=Ht[pt],L.format!==Fn)if(Mt!==null)if(qt){if(J)if(L.layerUpdates.size>0){let It=ah(St.width,St.height,L.format,L.type);for(let bt of L.layerUpdates){let Wt=St.data.subarray(bt*It/St.data.BYTES_PER_ELEMENT,(bt+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,bt,St.width,St.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Et,St.width,St.height,mt.depth,0,St.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,Gt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Et,St.width,St.height,mt.depth,0,Mt,Gt,St.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{qt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Ht[0].width,Ht[0].height);for(let pt=0,Tt=Ht.length;pt<Tt;pt++)St=Ht[pt],L.format!==Fn?Mt!==null?qt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,St.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,Mt,Gt,St.data)}else if(L.isDataArrayTexture)if(qt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,mt.width,mt.height,mt.depth),J)if(L.layerUpdates.size>0){let pt=ah(mt.width,mt.height,L.format,L.type);for(let Tt of L.layerUpdates){let It=mt.data.subarray(Tt*pt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*pt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,Mt,Gt,It)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Gt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,mt.width,mt.height,mt.depth,0,Mt,Gt,mt.data);else if(L.isData3DTexture)qt?(ae&&e.texStorage3D(i.TEXTURE_3D,wt,Et,mt.width,mt.height,mt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Gt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,mt.width,mt.height,mt.depth,0,Mt,Gt,mt.data);else if(L.isFramebufferTexture){if(ae)if(qt)e.texStorage2D(i.TEXTURE_2D,wt,Et,mt.width,mt.height);else{let pt=mt.width,Tt=mt.height;for(let It=0;It<wt;It++)e.texImage2D(i.TEXTURE_2D,It,Et,pt,Tt,0,Mt,Gt,null),pt>>=1,Tt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),mt.parentNode!==pt){pt.appendChild(mt),u.add(L),pt.onpaint=Tt=>{let It=Tt.changedElements;for(let bt of u)It.includes(bt.image)&&(bt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let It=i.RGBA,bt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,bt,Wt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(qt&&ae){let pt=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,wt,Et,pt.width,pt.height)}for(let pt=0,Tt=Ht.length;pt<Tt;pt++)St=Ht[pt],qt?J&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,Gt,St):e.texImage2D(i.TEXTURE_2D,pt,Et,Mt,Gt,St);L.generateMipmaps=!1}else if(qt){if(ae){let pt=ge(mt);e.texStorage2D(i.TEXTURE_2D,wt,Et,pt.width,pt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Mt,Gt,mt);p(L)&&x(rt),_t.__version=yt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function ct(G,L,Q){if(L.image.length!==6)return;let rt=st(G,L),ht=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let yt=n.get(ht);if(ht.version!==yt.__version||rt===!0){e.activeTexture(i.TEXTURE0+Q);let _t=he.getPrimaries(he.workingColorSpace),ft=L.colorSpace===wi?null:he.getPrimaries(L.colorSpace),mt=L.colorSpace===wi||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Mt=L.isCompressedTexture||L.image[0].isCompressedTexture,Gt=L.image[0]&&L.image[0].isDataTexture,Et=[];for(let bt=0;bt<6;bt++)!Mt&&!Gt?Et[bt]=g(L.image[bt],!0,r.maxCubemapSize):Et[bt]=Gt?L.image[bt].image:L.image[bt],Et[bt]=Ge(L,Et[bt]);let St=Et[0],Ht=s.convert(L.format,L.colorSpace),qt=s.convert(L.type),ae=v(L.internalFormat,Ht,qt,L.normalized,L.colorSpace),J=L.isVideoTexture!==!0,wt=yt.__version===void 0||rt===!0,pt=ht.dataReady,Tt=w(L,St);$(i.TEXTURE_CUBE_MAP,L);let It;if(Mt){J&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,St.width,St.height);for(let bt=0;bt<6;bt++){It=Et[bt].mipmaps;for(let Wt=0;Wt<It.length;Wt++){let Bt=It[Wt];L.format!==Fn?Ht!==null?J?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,ae,Bt.width,Bt.height,0,Bt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,qt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,ae,Bt.width,Bt.height,0,Ht,qt,Bt.data)}}}else{if(It=L.mipmaps,J&&wt){It.length>0&&Tt++;let bt=ge(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Gt){J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Et[bt].width,Et[bt].height,Ht,qt,Et[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Et[bt].width,Et[bt].height,0,Ht,qt,Et[bt].data);for(let Wt=0;Wt<It.length;Wt++){let Ae=It[Wt].image[bt].image;J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Ae.width,Ae.height,Ht,qt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,ae,Ae.width,Ae.height,0,Ht,qt,Ae.data)}}else{J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,qt,Et[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Ht,qt,Et[bt]);for(let Wt=0;Wt<It.length;Wt++){let Bt=It[Wt];J?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Ht,qt,Bt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,ae,Ht,qt,Bt.image[bt])}}}p(L)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ht.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function it(G,L,Q,rt,ht,yt){let _t=s.convert(Q.format,Q.colorSpace),ft=s.convert(Q.type),mt=v(Q.internalFormat,_t,ft,Q.normalized,Q.colorSpace),Mt=n.get(L),Gt=n.get(Q);if(Gt.__renderTarget=L,!Mt.__hasExternalTextures){let Et=Math.max(1,L.width>>yt),St=Math.max(1,L.height>>yt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,yt,mt,Et,St,L.depth,0,_t,ft,null):e.texImage2D(ht,yt,mt,Et,St,0,_t,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Ie(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ht,Gt.__webglTexture,0,_e(L)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ht,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(G,L,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),L.depthBuffer){let rt=L.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,yt=M(L.stencilBuffer,ht),_t=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(L),yt,L.width,L.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(L),yt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,G)}else{let rt=L.textures;for(let ht=0;ht<rt.length;ht++){let yt=rt[ht],_t=s.convert(yt.format,yt.colorSpace),ft=s.convert(yt.type),mt=v(yt.internalFormat,_t,ft,yt.normalized,yt.colorSpace);Ie(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(L),mt,L.width,L.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(L),mt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,mt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(G,L,Q){let rt=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(L.depthTexture);if(ht.__renderTarget=L,(!ht.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),rt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,L.depthTexture.addEventListener("dispose",C)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),$(i.TEXTURE_CUBE_MAP,L.depthTexture);let Mt=s.convert(L.depthTexture.format),Gt=s.convert(L.depthTexture.type),Et;L.depthTexture.format===ni?Et=i.DEPTH_COMPONENT24:L.depthTexture.format===Yi&&(Et=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Et,L.width,L.height,0,Mt,Gt,null)}}else N(L.depthTexture,0);let yt=ht.__webglTexture,_t=_e(L),ft=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,mt=L.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===ni)Ie(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,yt,0);else if(L.depthTexture.format===Yi)Ie(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(G){let L=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){let rt=G.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),rt){let ht=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),L.__depthDisposeCallback=ht}L.__boundDepthTexture=rt}if(G.depthTexture&&!L.__autoAllocateDepthBuffer)if(Q)for(let rt=0;rt<6;rt++)ut(L.__webglFramebuffer[rt],G,rt);else{let rt=G.texture.mipmaps;rt&&rt.length>0?ut(L.__webglFramebuffer[0],G,0):ut(L.__webglFramebuffer,G,0)}else if(Q){L.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[rt]),L.__webglDepthbuffer[rt]===void 0)L.__webglDepthbuffer[rt]=i.createRenderbuffer(),lt(L.__webglDepthbuffer[rt],G,!1);else{let ht=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,yt)}}else{let rt=G.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),lt(L.__webglDepthbuffer,G,!1);else{let ht=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(G,L,Q){let rt=n.get(G);L!==void 0&&it(rt.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&dt(G)}function xt(G){let L=G.texture,Q=n.get(G),rt=n.get(L);G.addEventListener("dispose",_);let ht=G.textures,yt=G.isWebGLCubeRenderTarget===!0,_t=ht.length>1;if(_t||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=L.version,o.memory.textures++),yt){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let mt=0;mt<L.mipmaps.length;mt++)Q.__webglFramebuffer[ft][mt]=i.createFramebuffer()}else Q.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<L.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ft=0,mt=ht.length;ft<mt;ft++){let Mt=n.get(ht[ft]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(G.samples>0&&Ie(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let mt=ht[ft];Q.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);let Mt=s.convert(mt.format,mt.colorSpace),Gt=s.convert(mt.type),Et=v(mt.internalFormat,Mt,Gt,mt.normalized,mt.colorSpace,G.isXRRenderTarget===!0),St=_e(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Et,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Q.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),$(i.TEXTURE_CUBE_MAP,L);for(let ft=0;ft<6;ft++)if(L.mipmaps&&L.mipmaps.length>0)for(let mt=0;mt<L.mipmaps.length;mt++)it(Q.__webglFramebuffer[ft][mt],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else it(Q.__webglFramebuffer[ft],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(L)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ft=0,mt=ht.length;ft<mt;ft++){let Mt=ht[ft],Gt=n.get(Mt),Et=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Et=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,Gt.__webglTexture),$(Et,Mt),it(Q.__webglFramebuffer,G,Mt,i.COLOR_ATTACHMENT0+ft,Et,0),p(Mt)&&x(Et)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ft=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,rt.__webglTexture),$(ft,L),L.mipmaps&&L.mipmaps.length>0)for(let mt=0;mt<L.mipmaps.length;mt++)it(Q.__webglFramebuffer[mt],G,L,i.COLOR_ATTACHMENT0,ft,mt);else it(Q.__webglFramebuffer,G,L,i.COLOR_ATTACHMENT0,ft,0);p(L)&&x(ft),e.unbindTexture()}G.depthBuffer&&dt(G)}function vt(G){let L=G.textures;for(let Q=0,rt=L.length;Q<rt;Q++){let ht=L[Q];if(p(ht)){let yt=y(G),_t=n.get(ht).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let Xt=[],Jt=[];function re(G){if(G.samples>0){if(Ie(G)===!1){let L=G.textures,Q=G.width,rt=G.height,ht=i.COLOR_BUFFER_BIT,yt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(G),ft=L.length>1;if(ft)for(let Mt=0;Mt<L.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let mt=G.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<L.length;Mt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Q,rt,0,0,Q,rt,ht,i.NEAREST),l===!0&&(Xt.length=0,Jt.length=0,Xt.push(i.COLOR_ATTACHMENT0+Mt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(Xt.push(yt),Jt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<L.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let L=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function _e(G){return Math.min(r.maxSamples,G.samples)}function Ie(G){let L=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function K(G){let L=o.render.frame;h.get(G)!==L&&(h.set(G,L),G.update())}function Ge(G,L){let Q=G.colorSpace,rt=G.format,ht=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==$s&&Q!==wi&&(he.getTransfer(Q)===ve?(rt!==Fn||ht!==En)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",Q)),L}function ge(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=A,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=R,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=ot,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function A_(i,t){function e(n,r=wi){let s,o=he.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qu)return i.BYTE;if(n===$u)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===ju)return i.RGB;if(n===Fn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Qu)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===yo||n===_o||n===Mo||n===So)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Pl||n===Il||n===Ll||n===Fl||n===wo||n===Dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cl||n===Pl)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Il)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ll)return s.COMPRESSED_R11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return s.COMPRESSED_RG11_EAC;if(n===Dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ol||n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===$l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===Kl||n===Jl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Ql||n===To||n===tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new so(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends ii{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,b=typeof XRWebGLBinding<"u",g=new Eh,p={},x=e.getContextAttributes(),y=null,v=null,M=[],w=[],C=new te,_=null,T=null,S=new Qe;S.viewport=new Be;let E=new Qe;E.viewport=new Be;let F=[S,E],I=new pl,P=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=M[H];return V===void 0&&(V=new ls,M[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=M[H];return V===void 0&&(V=new ls,M[H]=V),V.getGripSpace()},this.getHand=function(H){let V=M[H];return V===void 0&&(V=new ls,M[H]=V),V.getHandSpace()};function A(H){let V=w.indexOf(H.inputSource);if(V===-1)return;let tt=M[V];tt!==void 0&&(tt.update(H.inputSource,H.frame,c||o),tt.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let H=0;H<M.length;H++){let V=w[H];V!==null&&(w[H]=null,M[H].disconnect(V))}P=null,R=null,g.reset();for(let H in p)delete p[H];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,ct=null,it=null;x.depth&&(it=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?Yi:ni,ct=x.stencil?ms:Wn);let lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(lt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:Fn,type:En,depthTexture:new ai(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(H){for(let V=0;V<H.removed.length;V++){let tt=H.removed[V],ct=w.indexOf(tt);ct>=0&&(w[ct]=null,M[ct].disconnect(tt))}for(let V=0;V<H.added.length;V++){let tt=H.added[V],ct=w.indexOf(tt);if(ct===-1){for(let lt=0;lt<M.length;lt++)if(lt>=w.length){w.push(tt),ct=lt;break}else if(w[lt]===null){w[lt]=tt,ct=lt;break}if(ct===-1)break}let it=M[ct];it&&it.connect(tt)}}let U=new W,k=new W;function z(H,V,tt){U.setFromMatrixPosition(V.matrixWorld),k.setFromMatrixPosition(tt.matrixWorld);let ct=U.distanceTo(k),it=V.projectionMatrix.elements,lt=tt.projectionMatrix.elements,ut=it[14]/(it[10]-1),dt=it[14]/(it[10]+1),ot=(it[9]+1)/it[5],xt=(it[9]-1)/it[5],vt=(it[8]-1)/it[0],Xt=(lt[8]+1)/lt[0],Jt=ut*vt,re=ut*Xt,_e=ct/(-vt+Xt),Ie=_e*-vt;if(V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(_e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),it[10]===-1)H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let K=ut+_e,Ge=dt+_e,ge=Jt-Ie,G=re+(ct-Ie),L=ot*dt/Ge*K,Q=xt*dt/Ge*K;H.projectionMatrix.makePerspective(ge,G,L,Q,K,Ge),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Z(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let V=H.near,tt=H.far;g.texture!==null&&(g.depthNear>0&&(V=g.depthNear),g.depthFar>0&&(tt=g.depthFar)),I.near=E.near=S.near=V,I.far=E.far=S.far=tt,(P!==I.near||R!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,R=I.far),I.layers.mask=H.layers.mask|6,S.layers.mask=I.layers.mask&-5,E.layers.mask=I.layers.mask&-3;let ct=H.parent,it=I.cameras;Z(I,ct);for(let lt=0;lt<it.length;lt++)Z(it[lt],ct);it.length===2?z(I,S,E):I.projectionMatrix.copy(S.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),X(H,I,ct)};function X(H,V,tt){tt===null?H.matrix.copy(V.matrixWorld):(H.matrix.copy(tt.matrixWorld),H.matrix.invert(),H.matrix.multiply(V.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Wa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(H){return p[H]};let Y=null;function $(H,V){if(h=V.getViewerPose(c||o),m=V,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ct=!1;tt.length!==I.cameras.length&&(I.cameras.length=0,ct=!0);for(let dt=0;dt<tt.length;dt++){let ot=tt[dt],xt=null;if(d!==null)xt=d.getViewport(ot);else{let Xt=u.getViewSubImage(f,ot);xt=Xt.viewport,dt===0&&(t.setRenderTargetTextures(v,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(v))}let vt=F[dt];vt===void 0&&(vt=new Qe,vt.layers.enable(dt),vt.viewport=new Be,F[dt]=vt),vt.matrix.fromArray(ot.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ot.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),dt===0&&(I.matrix.copy(vt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ct===!0&&I.cameras.push(vt)}let it=r.enabledFeatures;if(it&&it.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let dt=u.getDepthInformation(tt[0]);dt&&dt.isValid&&dt.texture&&g.init(dt,r.renderState)}if(it&&it.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<tt.length;dt++){let ot=tt[dt].camera;if(ot){let xt=p[ot];xt||(xt=new so,p[ot]=xt);let vt=u.getCameraImage(ot);xt.sourceTexture=vt}}}}for(let tt=0;tt<M.length;tt++){let ct=w[tt],it=M[tt];ct!==null&&it!==void 0&&it.update(ct,V,c||o)}Y&&Y(H,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),m=null}let st=new Fp;st.setAnimationLoop($),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}},P_=new we,kp=new ne;kp.set(-1,0,0,0,1,0,0,0,1);function I_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function L_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",x));let C=M.program;n.updateUBOMapping(v,C);let _=t.render.frame;s[v.id]!==_&&(f(v),s[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),C=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=w.length;_<T;_++){let S=w[_];if(Array.isArray(S))for(let E=0,F=S.length;E<F;E++)d(S[E],_,E,C);else d(S,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,C){if(b(v,M,w,C)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let S=0;for(let E=0;E<T.length;E++){let F=T[E],I=p(F);m(F,v.__data,S),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(S+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,C){let _=v.value,T=M+"_"+w;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let S=C[T];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function g(v){let M=v.uniforms,w=0,C=16;for(let T=0,S=M.length;T<S;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,I=E.length;F<I;F++){let P=E[F],R=Array.isArray(P.value)?P.value:[P.value];for(let A=0,D=R.length;A<D;A++){let N=R[A],U=p(N),k=w%C,z=k%U.boundary,Z=k+z;w+=z,Z!==0&&C-Z<U.storage&&(w+=C-Z),P.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=U.storage}}}let _=w%C;return _>0&&(w+=C-_),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function D_(){return ci===null&&(ci=new Za(F_,16,16,qi,Yn),ci.name="DFG_LUT",ci.minFilter=Xe,ci.magFilter=Xe,ci.wrapS=Mn,ci.wrapT=Mn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Mr=class{constructor(t={}){let{canvas:e=Qd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let b=d,g=new Set([wl,Sl,Ml]),p=new Set([En,Wn,ps,ms,yl,_l]),x=new Uint32Array(4),y=new Int32Array(4),v=new W,M=null,w=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,E=!1,F=null,I=null,P=null,R=null;this._outputColorSpace=Oe;let A=0,D=0,N=null,U=-1,k=null,z=new Be,Z=new Be,X=null,Y=new j(0),$=0,st=e.width,H=e.height,V=1,tt=null,ct=null,it=new Be(0,0,st,H),lt=new Be(0,0,st,H),ut=!1,dt=new io,ot=!1,xt=!1,vt=new we,Xt=new W,Jt=new Be,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Ie(){return N===null?V:1}let K=n;function Ge(B,q){return e.getContext(B,q)}let ge,G,L,Q,rt,ht,yt,_t,ft,mt,Mt,Gt,Et,St,Ht,qt,ae,J,wt,pt,Tt,It,bt;try{let B={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",On,!1),K===null){let q="webgl2";if(K=Ge(q,B),K===null)throw Ge(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(B){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Zt("WebGLRenderer: "+B.message),B}function Wt(){ge=new Vy(K),ge.init(),Tt=new A_(K,ge),G=new Iy(K,ge,t,Tt),L=new T_(K,ge),G.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),I=K.createFramebuffer(),P=K.createFramebuffer(),R=K.createFramebuffer(),Q=new Wy(K),rt=new h_,ht=new E_(K,ge,L,rt,G,Tt,Q),yt=new zy(S),_t=new Yb(K),It=new Cy(K,_t),ft=new Gy(K,_t,Q,It),mt=new Yy(K,ft,_t,It,Q),J=new Xy(K,G,ht),Ht=new Ly(rt),Mt=new u_(S,yt,ge,G,It,Ht),Gt=new I_(S,rt),Et=new d_,St=new v_(ge),ae=new Ry(S,yt,L,mt,m,l),qt=new w_(S,mt,G),bt=new L_(K,Q,G,L),wt=new Py(K,ge,Q),pt=new Hy(K,ge,Q),Q.programs=Mt.programs,S.capabilities=G,S.extensions=ge,S.properties=rt,S.renderLists=Et,S.shadowMap=qt,S.state=L,S.info=Q}b!==En&&(T=new $y(b,e.width,e.height,a,r,s));let Bt=new Ah(S,K);this.xr=Bt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let B=ge.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ge.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(B){B!==void 0&&(V=B,this.setSize(st,H,!1))},this.getSize=function(B){return B.set(st,H)},this.setSize=function(B,q,at=!0){if(Bt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}st=B,H=q,e.width=Math.floor(B*V),e.height=Math.floor(q*V),at===!0&&(e.style.width=B+"px",e.style.height=q+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,B,q)},this.getDrawingBufferSize=function(B){return B.set(st*V,H*V).floor()},this.setDrawingBufferSize=function(B,q,at){st=B,H=q,V=at,e.width=Math.floor(B*at),e.height=Math.floor(q*at),this.setViewport(0,0,B,q)},this.setEffects=function(B){if(b===En){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let q=0;q<B.length;q++)if(B[q].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(it)},this.setViewport=function(B,q,at,et){B.isVector4?it.set(B.x,B.y,B.z,B.w):it.set(B,q,at,et),L.viewport(z.copy(it).multiplyScalar(V).round())},this.getScissor=function(B){return B.copy(lt)},this.setScissor=function(B,q,at,et){B.isVector4?lt.set(B.x,B.y,B.z,B.w):lt.set(B,q,at,et),L.scissor(Z.copy(lt).multiplyScalar(V).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(B){L.setScissorTest(ut=B)},this.setOpaqueSort=function(B){tt=B},this.setTransparentSort=function(B){ct=B},this.getClearColor=function(B){return B.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(B=!0,q=!0,at=!0){let et=0;if(B){let nt=!1;if(N!==null){let Pt=N.texture.format;nt=g.has(Pt)}if(nt){let Pt=N.texture.type,Dt=p.has(Pt),Rt=ae.getClearColor(),Ot=ae.getClearAlpha(),kt=Rt.r,le=Rt.g,ue=Rt.b;Dt?(x[0]=kt,x[1]=le,x[2]=ue,x[3]=Ot,K.clearBufferuiv(K.COLOR,0,x)):(y[0]=kt,y[1]=le,y[2]=ue,y[3]=Ot,K.clearBufferiv(K.COLOR,0,y))}else et|=K.COLOR_BUFFER_BIT}q&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),F=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",On,!1),ae.dispose(),Et.dispose(),St.dispose(),rt.dispose(),yt.dispose(),mt.dispose(),It.dispose(),bt.dispose(),Mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Lf),Bt.removeEventListener("sessionend",Ff),ar.stop()};function Ae(B){B.preventDefault(),Js("WebGLRenderer: Context Lost."),E=!0}function be(){Js("WebGLRenderer: Context Restored."),E=!1;let B=Q.autoReset,q=qt.enabled,at=qt.autoUpdate,et=qt.needsUpdate,nt=qt.type;Wt(),Q.autoReset=B,qt.enabled=q,qt.autoUpdate=at,qt.needsUpdate=et,qt.type=nt}function On(B){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function jn(B){let q=B.target;q.removeEventListener("dispose",jn),zg(q)}function zg(B){Vg(B),rt.remove(B)}function Vg(B){let q=rt.get(B).programs;q!==void 0&&(q.forEach(function(at){Mt.releaseProgram(at)}),B.isShaderMaterial&&Mt.releaseShaderCache(B))}this.renderBufferDirect=function(B,q,at,et,nt,Pt){q===null&&(q=re);let Dt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Rt=Wg(B,q,at,et,nt);L.setMaterial(et,Dt);let Ot=at.index,kt=1;if(et.wireframe===!0){if(Ot=ft.getWireframeAttribute(at),Ot===void 0)return;kt=2}let le=at.drawRange,ue=at.attributes.position,Ut=le.start*kt,xe=(le.start+le.count)*kt;Pt!==null&&(Ut=Math.max(Ut,Pt.start*kt),xe=Math.min(xe,(Pt.start+Pt.count)*kt)),Ot!==null?(Ut=Math.max(Ut,0),xe=Math.min(xe,Ot.count)):ue!=null&&(Ut=Math.max(Ut,0),xe=Math.min(xe,ue.count));let He=xe-Ut;if(He<0||He===1/0)return;It.setup(nt,et,Rt,at,Ot);let Le,Te=wt;if(Ot!==null&&(Le=_t.get(Ot),Te=pt,Te.setIndex(Le)),nt.isMesh)et.wireframe===!0?(L.setLineWidth(et.wireframeLinewidth*Ie()),Te.setMode(K.LINES)):Te.setMode(K.TRIANGLES);else if(nt.isLine){let ln=et.linewidth;ln===void 0&&(ln=1),L.setLineWidth(ln*Ie()),nt.isLineSegments?Te.setMode(K.LINES):nt.isLineLoop?Te.setMode(K.LINE_LOOP):Te.setMode(K.LINE_STRIP)}else nt.isPoints?Te.setMode(K.POINTS):nt.isSprite&&Te.setMode(K.TRIANGLES);if(nt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Te.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,Ft=nt._multiDrawCounts,mn=nt._multiDrawCount,me=Ot?_t.get(Ot).bytesPerElement:1,Cn=rt.get(et).currentProgram.getUniforms();for(let Qn=0;Qn<mn;Qn++)Cn.setValue(K,"_gl_DrawID",Qn),Te.render(ln[Qn]/me,Ft[Qn])}else if(nt.isInstancedMesh)Te.renderInstances(Ut,He,nt.count);else if(at.isInstancedBufferGeometry){let ln=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ft=Math.min(at.instanceCount,ln);Te.renderInstances(Ut,He,Ft)}else Te.render(Ut,He)};function If(B,q,at,et){F!==null&&B.isNodeMaterial&&F.setObject(et,B),ot===!0&&Ht.setState(B,at,!1),B.transparent===!0&&B.side===se&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,ia(B,q,et),B.side=li,B.needsUpdate=!0,ia(B,q,et),B.side=se):ia(B,q,et)}this.compile=function(B,q,at=null){at===null&&(at=B),F!==null&&F.renderStart(B,q,at),w=St.get(at),w.init(q),_.push(w),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),B!==at&&B.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),xt=this.localClippingEnabled,ot=Ht.init(this.clippingPlanes,xt),ot===!0&&Ht.setGlobalState(this.clippingPlanes,q),F!==null&&qt.render(w.state.shadowsArray,at,q);let et=new Set;return B.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Pt=nt.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Rt=Pt[Dt];If(Rt,at,q,nt),et.add(Rt)}else If(Pt,at,q,nt),et.add(Pt)}),w=_.pop(),F!==null&&F.renderEnd(),et},this.compileAsync=function(B,q,at=null){let et=this.compile(B,q,at);return new Promise(nt=>{function Pt(){if(et.forEach(function(Dt){let Ot=rt.get(Dt).currentProgram;(Ot===void 0||Ot.isReady())&&et.delete(Dt)}),et.size===0){nt(B);return}setTimeout(Pt,10)}ge.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Jc=null;function Gg(B){Jc&&Jc(B)}function Lf(){ar.stop()}function Ff(){ar.start()}let ar=new Fp;ar.setAnimationLoop(Gg),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(B){Jc=B,Bt.setAnimationLoop(B),B===null?ar.stop():ar.start()},Bt.addEventListener("sessionstart",Lf),Bt.addEventListener("sessionend",Ff),this.render=function(B,q){if(q!==void 0&&q.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;F!==null&&F.renderStart(B,q);let at=Bt.enabled===!0&&Bt.isPresenting===!0,et=T!==null&&(N===null||at)&&T.begin(S,N);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(q),q=Bt.getCamera()),B.isScene===!0&&B.onBeforeRender(S,B,q,N),w=St.get(B,_.length),w.init(q),w.state.textureUnits=ht.getTextureUnits(),_.push(w),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),dt.setFromProjectionMatrix(vt,Vn,q.reversedDepth),xt=this.localClippingEnabled,ot=Ht.init(this.clippingPlanes,xt),M=Et.get(B,C.length),M.init(),C.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Dt=S.xr.getDepthSensingMesh();Dt!==null&&jc(Dt,q,-1/0,S.sortObjects)}jc(B,q,0,S.sortObjects),M.finish(),F!==null&&F.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(tt,ct),_e=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,_e&&ae.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ht.beginShadows();let nt=w.state.shadowsArray;if(qt.render(nt,B,q),ot===!0&&Ht.endShadows(),(et&&T.hasRenderPass())===!1){let Dt=M.opaque,Rt=M.transmissive;if(w.setupLights(),q.isArrayCamera){let Ot=q.cameras;if(Rt.length>0)for(let kt=0,le=Ot.length;kt<le;kt++){let ue=Ot[kt];Nf(Dt,Rt,B,ue)}_e&&ae.render(B);for(let kt=0,le=Ot.length;kt<le;kt++){let ue=Ot[kt];Df(M,B,ue,ue.viewport)}}else Rt.length>0&&Nf(Dt,Rt,B,q),_e&&ae.render(B),Df(M,B,q)}N!==null&&D===0&&(ht.updateMultisampleRenderTarget(N),ht.updateRenderTargetMipmap(N)),et&&T.end(S),B.isScene===!0&&B.onAfterRender(S,B,q),It.resetDefaultState(),U=-1,k=null,_.pop(),_.length>0?(w=_[_.length-1],ht.setTextureUnits(w.state.textureUnits),ot===!0&&Ht.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,F!==null&&F.renderEnd()};function jc(B,q,at,et){if(B.visible===!1)return;if(B.layers.test(q.layers)){if(B.isGroup)at=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(q);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(dt)){et&&Jt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(vt);let Dt=mt.update(B),Rt=B.material;Rt.visible&&M.push(B,Dt,Rt,at,Jt.z,null,q)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(dt))){let Dt=mt.update(B),Rt=B.material;if(et&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Jt.copy(B.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Jt.copy(Dt.boundingSphere.center)),Jt.applyMatrix4(B.matrixWorld).applyMatrix4(vt)),Array.isArray(Rt)){let Ot=Dt.groups;for(let kt=0,le=Ot.length;kt<le;kt++){let ue=Ot[kt],Ut=Rt[ue.materialIndex];Ut&&Ut.visible&&M.push(B,Dt,Ut,at,Jt.z,ue,q)}}else Rt.visible&&M.push(B,Dt,Rt,at,Jt.z,null,q)}}let Pt=B.children;for(let Dt=0,Rt=Pt.length;Dt<Rt;Dt++)jc(Pt[Dt],q,at,et)}function Df(B,q,at,et){let{opaque:nt,transmissive:Pt,transparent:Dt}=B;w.setupLightsView(at),ot===!0&&Ht.setGlobalState(S.clippingPlanes,at),et&&L.viewport(z.copy(et)),nt.length>0&&na(nt,q,at),Pt.length>0&&na(Pt,q,at),Dt.length>0&&na(Dt,q,at),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Nf(B,q,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let Ut=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new Ye(1,1,{generateMipmaps:!0,type:Ut?Yn:En,minFilter:Xi,samples:Math.max(4,G.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[et.id],Dt=et.viewport||z;Pt.setSize(Dt.z*S.transmissionResolutionScale,Dt.w*S.transmissionResolutionScale);let Rt=S.getRenderTarget(),Ot=S.getActiveCubeFace(),kt=S.getActiveMipmapLevel();S.setRenderTarget(Pt),S.getClearColor(Y),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),_e&&ae.render(at);let le=S.toneMapping;S.toneMapping=Hn;let ue=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),ot===!0&&Ht.setGlobalState(S.clippingPlanes,et),na(B,at,et),ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xe=0,He=q.length;xe<He;xe++){let Le=q[xe],{object:Te,geometry:ln,material:Ft,group:mn}=Le;if(Ft.side===se&&Te.layers.test(et.layers)){let me=Ft.side;Ft.side=rn,Ft.needsUpdate=!0,Of(Te,at,et,ln,Ft,mn),Ft.side=me,Ft.needsUpdate=!0,Ut=!0}}Ut===!0&&(ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt))}S.setRenderTarget(Rt,Ot,kt),S.setClearColor(Y,$),ue!==void 0&&(et.viewport=ue),S.toneMapping=le}function na(B,q,at){let et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,Pt=B.length;nt<Pt;nt++){let Dt=B[nt],{object:Rt,geometry:Ot,group:kt}=Dt,le=Dt.material;le.allowOverride===!0&&et!==null&&(le=et),Rt.layers.test(at.layers)&&Of(Rt,q,at,Ot,le,kt)}}function Of(B,q,at,et,nt,Pt){F!==null&&nt.isNodeMaterial&&F.setObject(B,nt),B.onBeforeRender(S,q,at,et,nt,Pt),B.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),nt.onBeforeRender(S,q,at,et,B,Pt),nt.transparent===!0&&nt.side===se&&nt.forceSinglePass===!1?(nt.side=rn,nt.needsUpdate=!0,S.renderBufferDirect(at,q,et,nt,B,Pt),nt.side=li,nt.needsUpdate=!0,S.renderBufferDirect(at,q,et,nt,B,Pt),nt.side=se):S.renderBufferDirect(at,q,et,nt,B,Pt),B.onAfterRender(S,q,at,et,nt,Pt)}function ia(B,q,at){q.isScene!==!0&&(q=re);let et=rt.get(B),nt=w.state.lights,Pt=w.state.shadowsArray,Dt=nt.state.version,Rt=Mt.getParameters(B,nt.state,Pt,q,at,w.state.lightProbeGridArray),Ot=Mt.getProgramCacheKey(Rt),kt=et.programs;et.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;let le=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;et.envMap=yt.get(B.envMap||et.environment,le),et.envMapRotation=et.environment!==null&&B.envMap===null?q.environmentRotation:B.envMapRotation,kt===void 0&&(B.addEventListener("dispose",jn),kt=new Map,et.programs=kt);let ue=kt.get(Ot);if(ue!==void 0){if(et.currentProgram===ue&&et.lightsStateVersion===Dt)return Bf(B,Rt),ue}else Rt.uniforms=Mt.getUniforms(B),F!==null&&B.isNodeMaterial&&F.build(B,at,Rt),B.onBeforeCompile(Rt,S),ue=Mt.acquireProgram(Rt,Ot),kt.set(Ot,ue),et.uniforms=Rt.uniforms;let Ut=et.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ut.clippingPlanes=Ht.uniform),Bf(B,Rt),et.needsLights=Yg(B),et.lightsStateVersion=Dt,et.needsLights&&(Ut.ambientLightColor.value=nt.state.ambient,Ut.lightProbe.value=nt.state.probe,Ut.sunLights.value=nt.state.sun,Ut.sunLightShadows.value=nt.state.sunShadow,Ut.directionalLights.value=nt.state.directional,Ut.directionalLightShadows.value=nt.state.directionalShadow,Ut.spotLights.value=nt.state.spot,Ut.spotLightShadows.value=nt.state.spotShadow,Ut.rectAreaLights.value=nt.state.rectArea,Ut.ltc_1.value=nt.state.rectAreaLTC1,Ut.ltc_2.value=nt.state.rectAreaLTC2,Ut.pointLights.value=nt.state.point,Ut.pointLightShadows.value=nt.state.pointShadow,Ut.hemisphereLights.value=nt.state.hemi,Ut.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ut.sunShadowCascade.value=nt.state.sunShadowCascade,Ut.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ut.spotLightMatrix.value=nt.state.spotLightMatrix,Ut.spotLightMap.value=nt.state.spotLightMap,Ut.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=ue,et.uniformsList=null,ue}function Uf(B){if(B.uniformsList===null){let q=B.currentProgram.getUniforms();B.uniformsList=xs.seqWithValue(q.seq,B.uniforms)}return B.uniformsList}function Bf(B,q){let at=rt.get(B);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Hg(B,q){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let at=0,et=B.length;at<et;at++){let nt=B[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(v))return nt}return null}function Wg(B,q,at,et,nt){q.isScene!==!0&&(q=re),ht.resetTextureUnits();let Pt=q.fog,Dt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,Rt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:he.workingColorSpace,Ot=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=yt.get(et.envMap||Dt,Ot),le=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ue=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ut=!!at.morphAttributes.position,xe=!!at.morphAttributes.normal,He=!!at.morphAttributes.color,Le=Hn;et.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Le=S.toneMapping);let Te=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ln=Te!==void 0?Te.length:0,Ft=rt.get(et),mn=w.state.lights;if(ot===!0&&(xt===!0||B!==k)){let Re=B===k&&et.id===U;Ht.setState(et,B,Re)}let me=!1;et.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==mn.state.version||Ft.outputColorSpace!==Rt||nt.isBatchedMesh&&Ft.batching===!1||!nt.isBatchedMesh&&Ft.batching===!0||nt.isBatchedMesh&&Ft.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Ft.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Ft.instancing===!1||!nt.isInstancedMesh&&Ft.instancing===!0||nt.isSkinnedMesh&&Ft.skinning===!1||!nt.isSkinnedMesh&&Ft.skinning===!0||nt.isInstancedMesh&&Ft.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Ft.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Ft.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Ft.instancingMorph===!1&&nt.morphTexture!==null||Ft.envMap!==kt||et.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ht.numPlanes||Ft.numIntersection!==Ht.numIntersection)||Ft.vertexAlphas!==le||Ft.vertexTangents!==ue||Ft.morphTargets!==Ut||Ft.morphNormals!==xe||Ft.morphColors!==He||Ft.toneMapping!==Le||Ft.morphTargetsCount!==ln||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ft.__version=et.version);let Cn=Ft.currentProgram;me===!0&&(Cn=ia(et,q,nt),F&&et.isNodeMaterial&&F.onUpdateProgram(et,Cn,Ft));let Qn=!1,Ci=!1,Or=!1,Me=Cn.getUniforms(),ze=Ft.uniforms;if(L.useProgram(Cn.program)&&(Qn=!0,Ci=!0,Or=!0),et.id!==U&&(U=et.id,Ci=!0),Ft.needsLights){let Re=Hg(w.state.lightProbeGridArray,nt);Ft.lightProbeGrid!==Re&&(Ft.lightProbeGrid=Re,Ci=!0)}if(Qn||k!==B){L.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Me.setValue(K,"projectionMatrix",B.projectionMatrix),Me.setValue(K,"viewMatrix",B.matrixWorldInverse);let Ii=Me.map.cameraPosition;Ii!==void 0&&Ii.setValue(K,Xt.setFromMatrixPosition(B.matrixWorld)),G.logarithmicDepthBuffer&&Me.setValue(K,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue(K,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Ci=!0,Or=!0)}if(Ft.needsLights&&(mn.state.sunShadowMap.length>0&&Me.setValue(K,"sunShadowMap",mn.state.sunShadowMap,ht),mn.state.directionalShadowMap.length>0&&Me.setValue(K,"directionalShadowMap",mn.state.directionalShadowMap,ht),mn.state.spotShadowMap.length>0&&Me.setValue(K,"spotShadowMap",mn.state.spotShadowMap,ht),mn.state.pointShadowMap.length>0&&Me.setValue(K,"pointShadowMap",mn.state.pointShadowMap,ht)),nt.isSkinnedMesh){Me.setOptional(K,nt,"bindMatrix"),Me.setOptional(K,nt,"bindMatrixInverse");let Re=nt.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Me.setValue(K,"boneTexture",Re.boneTexture,ht))}nt.isBatchedMesh&&(Me.setOptional(K,nt,"batchingTexture"),Me.setValue(K,"batchingTexture",nt._matricesTexture,ht),Me.setOptional(K,nt,"batchingIdTexture"),Me.setValue(K,"batchingIdTexture",nt._indirectTexture,ht),Me.setOptional(K,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue(K,"batchingColorTexture",nt._colorsTexture,ht));let Pi=at.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&J.update(nt,at,Cn),(Ci||Ft.receiveShadow!==nt.receiveShadow)&&(Ft.receiveShadow=nt.receiveShadow,Me.setValue(K,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(ze.envMapIntensity.value=q.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=D_()),Ci){if(Me.setValue(K,"toneMappingExposure",S.toneMappingExposure),Ft.needsLights&&Xg(ze,Or),Pt&&et.fog===!0&&Gt.refreshFogUniforms(ze,Pt),Gt.refreshMaterialUniforms(ze,et,V,H,w.state.transmissionRenderTarget[B.id]),Ft.needsLights&&Ft.lightProbeGrid){let Re=Ft.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}xs.upload(K,Uf(Ft),ze,ht)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(xs.upload(K,Uf(Ft),ze,ht),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue(K,"center",nt.center),Me.setValue(K,"modelViewMatrix",nt.modelViewMatrix),Me.setValue(K,"normalMatrix",nt.normalMatrix),Me.setValue(K,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let Re=et.uniformsGroups;for(let Ii=0,Ur=Re.length;Ii<Ur;Ii++){let zf=Re[Ii];bt.update(zf,Cn),bt.bind(zf,Cn)}}return Cn}function Xg(B,q){B.ambientLightColor.needsUpdate=q,B.lightProbe.needsUpdate=q,B.sunLights.needsUpdate=q,B.sunLightShadows.needsUpdate=q,B.directionalLights.needsUpdate=q,B.directionalLightShadows.needsUpdate=q,B.pointLights.needsUpdate=q,B.pointLightShadows.needsUpdate=q,B.spotLights.needsUpdate=q,B.spotLightShadows.needsUpdate=q,B.rectAreaLights.needsUpdate=q,B.hemisphereLights.needsUpdate=q}function Yg(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(B,q,at){let et=rt.get(B);et.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),rt.get(B.texture).__webglTexture=q,rt.get(B.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,q){let at=rt.get(B);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(B,q=0,at=0){N=B,A=q,D=at;let et=null,nt=!1,Pt=!1;if(B){let Rt=rt.get(B);if(Rt.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(K.FRAMEBUFFER,Rt.__webglFramebuffer),z.copy(B.viewport),Z.copy(B.scissor),X=B.scissorTest,L.viewport(z),L.scissor(Z),L.setScissorTest(X),U=-1;return}else if(Rt.__webglFramebuffer===void 0)ht.setupRenderTarget(B);else if(Rt.__hasExternalTextures)ht.rebindTextures(B,rt.get(B.texture).__webglTexture,rt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let le=B.depthTexture;if(Rt.__boundDepthTexture!==le){if(le!==null&&rt.has(le)&&(B.width!==le.image.width||B.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(B)}}let Ot=B.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);let kt=rt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?et=kt[q][at]:et=kt[q],nt=!0):B.samples>0&&ht.useMultisampledRTT(B)===!1?et=rt.get(B).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[at]:et=kt,z.copy(B.viewport),Z.copy(B.scissor),X=B.scissorTest}else z.copy(it).multiplyScalar(V).floor(),Z.copy(lt).multiplyScalar(V).floor(),X=ut;if(at!==0&&(et=I),L.bindFramebuffer(K.FRAMEBUFFER,et)&&L.drawBuffers(B,et),L.viewport(z),L.scissor(Z),L.setScissorTest(X),nt){let Rt=rt.get(B.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,Rt.__webglTexture,at)}else if(Pt){let Rt=q;for(let Ot=0;Ot<B.textures.length;Ot++){let kt=rt.get(B.textures[Ot]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ot,kt.__webglTexture,at,Rt)}}else if(B!==null&&at!==0){let Rt=rt.get(B.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Rt.__webglTexture,at)}U=-1};function kf(B){let q=rt.get(B);return(q.__readFormat!==B.format||q.__readType!==B.type)&&(q.__readFormat=B.format,q.__readType=B.type,q.__formatReadable=G.textureFormatReadable(B.format),q.__typeReadable=G.textureTypeReadable(B.type)),q}this.readRenderTargetPixels=function(B,q,at,et,nt,Pt,Dt,Rt=0){if(!(B&&B.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){L.bindFramebuffer(K.FRAMEBUFFER,Ot);try{let kt=B.textures[Rt],le=kt.format,ue=kt.type;B.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Rt);let Ut=kf(kt);if(Ut.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=B.width-et&&at>=0&&at<=B.height-nt&&K.readPixels(q,at,et,nt,Tt.convert(le),Tt.convert(ue),Pt)}finally{let kt=N!==null?rt.get(N).__webglFramebuffer:null;L.bindFramebuffer(K.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(B,q,at,et,nt,Pt,Dt,Rt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot)if(q>=0&&q<=B.width-et&&at>=0&&at<=B.height-nt){L.bindFramebuffer(K.FRAMEBUFFER,Ot);let kt=B.textures[Rt],le=kt.format,ue=kt.type;B.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Rt);let Ut=kf(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,xe),K.bufferData(K.PIXEL_PACK_BUFFER,Pt.byteLength,K.STREAM_READ),K.readPixels(q,at,et,nt,Tt.convert(le),Tt.convert(ue),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let He=N!==null?rt.get(N).__webglFramebuffer:null;L.bindFramebuffer(K.FRAMEBUFFER,He);let Le=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await ep(K,Le,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,xe),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Pt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(xe),K.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,q=null,at=0){let et=Math.pow(2,-at),nt=Math.floor(B.image.width*et),Pt=Math.floor(B.image.height*et),Dt=q!==null?q.x:0,Rt=q!==null?q.y:0;ht.setTexture2D(B,0),K.copyTexSubImage2D(K.TEXTURE_2D,at,0,0,Dt,Rt,nt,Pt),L.unbindTexture()},this.copyTextureToTexture=function(B,q,at=null,et=null,nt=0,Pt=0){let Dt,Rt,Ot,kt,le,ue,Ut,xe,He,Le=B.isCompressedTexture?B.mipmaps[Pt]:B.image;if(at!==null)Dt=at.max.x-at.min.x,Rt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,le=at.min.y,ue=at.isBox3?at.min.z:0;else{let ze=Math.pow(2,-nt);Dt=Math.floor(Le.width*ze),Rt=Math.floor(Le.height*ze),B.isDataArrayTexture?Ot=Le.depth:B.isData3DTexture?Ot=Math.floor(Le.depth*ze):Ot=1,kt=0,le=0,ue=0}et!==null?(Ut=et.x,xe=et.y,He=et.z):(Ut=0,xe=0,He=0);let Te=Tt.convert(q.format),ln=Tt.convert(q.type),Ft;q.isData3DTexture?(ht.setTexture3D(q,0),Ft=K.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ht.setTexture2DArray(q,0),Ft=K.TEXTURE_2D_ARRAY):(ht.setTexture2D(q,0),Ft=K.TEXTURE_2D),L.activeTexture(K.TEXTURE0),L.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(K.UNPACK_ALIGNMENT,q.unpackAlignment);let mn=L.getParameter(K.UNPACK_ROW_LENGTH),me=L.getParameter(K.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(K.UNPACK_SKIP_PIXELS),Qn=L.getParameter(K.UNPACK_SKIP_ROWS),Ci=L.getParameter(K.UNPACK_SKIP_IMAGES);L.pixelStorei(K.UNPACK_ROW_LENGTH,Le.width),L.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Le.height),L.pixelStorei(K.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(K.UNPACK_SKIP_ROWS,le),L.pixelStorei(K.UNPACK_SKIP_IMAGES,ue);let Or=B.isDataArrayTexture||B.isData3DTexture,Me=q.isDataArrayTexture||q.isData3DTexture;if(B.isDepthTexture){let ze=rt.get(B),Pi=rt.get(q),Re=rt.get(ze.__renderTarget),Ii=rt.get(Pi.__renderTarget);L.bindFramebuffer(K.READ_FRAMEBUFFER,Re.__webglFramebuffer),L.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ur=0;Ur<Ot;Ur++)Or&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(B).__webglTexture,nt,ue+Ur),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Pt,He+Ur)),K.blitFramebuffer(kt,le,Dt,Rt,Ut,xe,Dt,Rt,K.DEPTH_BUFFER_BIT,K.NEAREST);L.bindFramebuffer(K.READ_FRAMEBUFFER,null),L.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(nt!==0||B.isRenderTargetTexture||rt.has(B)){let ze=rt.get(B),Pi=rt.get(q);L.bindFramebuffer(K.READ_FRAMEBUFFER,P),L.bindFramebuffer(K.DRAW_FRAMEBUFFER,R);for(let Re=0;Re<Ot;Re++)Or?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ze.__webglTexture,nt,ue+Re):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ze.__webglTexture,nt),Me?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Pi.__webglTexture,Pt,He+Re):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pi.__webglTexture,Pt),nt!==0?K.blitFramebuffer(kt,le,Dt,Rt,Ut,xe,Dt,Rt,K.COLOR_BUFFER_BIT,K.NEAREST):Me?K.copyTexSubImage3D(Ft,Pt,Ut,xe,He+Re,kt,le,Dt,Rt):K.copyTexSubImage2D(Ft,Pt,Ut,xe,kt,le,Dt,Rt);L.bindFramebuffer(K.READ_FRAMEBUFFER,null),L.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Me?B.isDataTexture||B.isData3DTexture?K.texSubImage3D(Ft,Pt,Ut,xe,He,Dt,Rt,Ot,Te,ln,Le.data):q.isCompressedArrayTexture?K.compressedTexSubImage3D(Ft,Pt,Ut,xe,He,Dt,Rt,Ot,Te,Le.data):K.texSubImage3D(Ft,Pt,Ut,xe,He,Dt,Rt,Ot,Te,ln,Le):B.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Pt,Ut,xe,Dt,Rt,Te,ln,Le.data):B.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Pt,Ut,xe,Le.width,Le.height,Te,Le.data):K.texSubImage2D(K.TEXTURE_2D,Pt,Ut,xe,Dt,Rt,Te,ln,Le);L.pixelStorei(K.UNPACK_ROW_LENGTH,mn),L.pixelStorei(K.UNPACK_IMAGE_HEIGHT,me),L.pixelStorei(K.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(K.UNPACK_SKIP_ROWS,Qn),L.pixelStorei(K.UNPACK_SKIP_IMAGES,Ci),Pt===0&&q.generateMipmaps&&K.generateMipmap(Ft),L.unbindTexture()},this.initRenderTarget=function(B){rt.get(B).__webglFramebuffer===void 0&&ht.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ht.setTextureCube(B,0):B.isData3DTexture?ht.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ht.setTexture2DArray(B,0):ht.setTexture2D(B,0),L.unbindTexture()},this.resetState=function(){A=0,D=0,N=null,L.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function zp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Vp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function Gp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var N_=[],Rh=new Map,O_=0;function Co(i){N_=i,Rh=new Map(i.flatMap(t=>t.items.map(e=>[U_(t.id,e.id),e]))),O_++}function U_(i,t){return`pack:${i}:${t}`}function Ph(i){return i.startsWith("pack:")}function cc(i){return Ph(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Ih(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function Hp(i){return i==="robot_vacuum"||Ph(i)&&i.endsWith(":robot_vacuum")}function Po(i){return i.z>.05}function Wp(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Po(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var B_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Xp(i){return ye(i)?.parts.find(t=>t.screen)}function ye(i){if(!Ph(i))return;let t=Rh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=B_[e];return r?Rh.get(`pack:${r}:${n.join(":")}`):void 0}function sn(i,t){let e=ye(t.type);if(t.mount_y!=null)return t.mount_y;let n=$p(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return hc;if(Yp.has(t.type))return Math.max(0,i.height-qp(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));if(t.type==="air_fryer_philips_hd9880")return $i(i,t)+Ch(i,t.x,t.z);switch(e?.mount){case"surface":return $i(i,t)+Ch(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?$i(i,t):Sr(t)||$i(i,t)}}function $i(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>jt([t.x,t.z],n.points))?0:uc(i,t.x,t.z)}var ys={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function qn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Lh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!qn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function dc(i){return[...i.rooms,...Lh(i)]}function z_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function V_(i,t,e,n){return wr(i,t)+ys[t.type]-Io(i,t,e,n)}var Fh=-.2,fc={set:!1,level:Fh};function Kp(i){let t=i?.settings.terrain??null;fc={set:t?.level!=null,level:t?.level??Fh}}function _s(i,t){return fc.level}function Jp(i){return i.elevation>.3?0:fc.set?fc.level-i.elevation:Fh}function wr(i,t){return Jp(i)+(t.offset??0)}function Io(i,t,e,n){return t.type==="pool"?0:z_(t,e,n)}function uc(i,t,e){let n=(i.outdoor??[]).filter(s=>!qn(s.type)&&s.type!=="pool"&&jt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?V_(i,r,t,e):Jp(i)}function pc(i,t){return wr(i,t)+(t.above?Qp(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function G_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Qp(i):1.5}function Dh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!qn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>jt(n,e.points)))}function jp(i,t){return!t.above&&!Dh(i,t)?mc(i,t)-.05:pc(i,t)-G_(t)}function mc(i,t){return pc(i,t)-.15}function Qp(i){return i.height&&i.height>.3?i.height:1.2}var H_={type:"none",pitch:35,overhang:.4},t3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...H_}};var t0=.3;var e0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),hc=1.75;var Yp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function qp(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var n0=new Set(["stairs","stairs_u"]);function i0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function r0(i){return e0.has(i)||!!ye(i)?.light}var W_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Sr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Zp=.04,X_=1.2;function Ch(i,t,e,n=0){let r=0;for(let s of i.furniture)!(W_.has(s.type)||ye(s.type)?.surface)||!jt([t,e],Ji(s))||s.type==="worktop"&&n>0&&s.h-Zp>=X_&&n<=s.h-Zp-.02||(r=Math.max(r,s.h));return r}var gc=new Set(["wall_switch","wall_socket"]),Y_=4;function s0(i){let t=(i.gangs??[]).slice(0,Y_);return t.length?t:[{entity:null}]}function $p(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var k_=new Set([...e0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","air_fryer_philips_hd9880","washer","dryer","kitchen","island","sink"]);var q_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],$_=["standard","bars","glass_wall"];function Zi(i,t){return i.type==="door"?i.style&&q_.includes(i.style)?i.style:t?"front":"interior":i.style&&$_.includes(i.style)?i.style:"standard"}function o0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function a0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function An(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function $n(i){return Math.abs(An(i))}function Ki(i){let t=An(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function l0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function c0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Ji(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Tr(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],hi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Dn=(i,t)=>[i[0]*t,i[1]*t],Ss=(i,t)=>i[0]*t[0]+i[1]*t[1],Ms=(i,t)=>i[0]*t[1]-i[1]*t[0],Lo=i=>Math.hypot(i[0],i[1]),Rn=i=>{let t=Lo(i)||1;return[i[0]/t,i[1]/t]},Nh=i=>[-i[1],i[0]],u0=i=>[i[1],-i[0]];function fi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let E=0;E<o.length;E++)if(Math.abs(o[E][0]-S[0])<=n&&Math.abs(o[E][1]-S[1])<=n)return E;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let E=S.points;if(E.length<3||Math.abs(An(E))<1e-6)continue;let F=An(E)>0,I=E.map(a);for(let P=0;P<E.length;P++){let R=I[P],A=I[(P+1)%E.length];R!==A&&l.push(F?{u:R,v:A,room:S.id,edge:P,forward:!0}:{u:A,v:R,room:S.id,edge:P,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let E=S.points;E.length<3||(S.wall_splits??[]).forEach((F,I)=>{if(!F||I>=E.length)return;let P=E[I],R=ke(E[(I+1)%E.length],P),A=Lo(R);for(let D of F)D>n&&D<A-n&&h.add(a(hi(P,Dn(R,D/A))))})}let u=[];for(let S of l){let E=o[S.u],F=o[S.v],I=ke(F,E),P=Lo(I),R=Dn(I,1/P),A=[];for(let N=0;N<o.length;N++){if(N===S.u||N===S.v)continue;let U=ke(o[N],E),k=Ss(U,R);k<=n||k>=P-n||Math.abs(Ms(R,U))<=n&&A.push({t:k,id:N})}A.sort((N,U)=>N.t-U.t);let D=[{t:0,id:S.u},...A,{t:P,id:S.v}];for(let N=0;N+1<D.length;N++){let U=D[N],k=D[N+1],z=S.forward?U.t:P-k.t,Z=S.forward?k.t:P-U.t;u.push({u:U.id,v:k.id,room:S.room,edge:S.edge,t0:z,t1:Z})}}let f=new Map;for(let S of u){let E=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,F=f.get(E);F||f.set(E,F=[]),F.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),m=new Map;for(let S of u){let E=`${S.room}:${S.edge}`;m.set(E,[...m.get(E)??[],S.t0].sort((F,I)=>F-I))}let b=S=>{let E=i.find(I=>I.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(E))return E;let F=m.get(`${S.room}:${S.edge}`)??[];return E[F.indexOf(S.t0)]??null},g=S=>{let E=S.map(b).filter(I=>typeof I=="number"&&I>0);if(E.length)return Math.min(...E);let F=S.map(I=>i.find(P=>P.id===I.room)?.ceiling_height);return F.every(I=>typeof I=="number"&&I>0)?Math.max(...F):void 0},p=S=>{let E=S.map(F=>i.find(I=>I.id===F.room)?.wall_thickness?.[F.edge]).filter(F=>typeof F=="number"&&F>0);return E.length?Math.max(...E):void 0},x=S=>{for(let E of S){let F=i.find(A=>A.id===E.room),I=F?.wall_slopes?.[E.edge];if(!F||!I)continue;let P=F.points[E.edge],R=F.points[(E.edge+1)%F.points.length];return{p:[P[0],P[1]],q:[R[0],R[1]],h0:Math.max(.05,I[0]),h1:Math.max(.05,I[1])}}},y=S=>S.some(E=>b(E)===0),v=S=>{let E=x(S);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:g(S)}},M=[],w=[];for(let S of f.values()){let E=S[0],F=S.find(I=>I!==E&&I.u===E.v&&I.v===E.u&&I.room!==E.room);for(let I of S)I!==E&&I!==F&&I.room!==E.room&&r.push(`overlap:${E.room}:${I.room}`);if(y(F?[E,F]:[E])){F&&M.push([E.room,F.room]);continue}if(F){let I=p([E,F])??t.interior;w.push({a:E.u,b:E.v,left:I/2,right:I/2,exterior:!1,roomLeft:E.room,roomRight:F.room,sources:[d(E),d(F)],...v([E,F])})}else w.push({a:E.u,b:E.v,left:0,right:p([E])??t.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[d(E)],...v([E])})}let C=S=>Rn(ke(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let E=new Set;for(let I of[S.a,S.b])for(let P of w)!P.exterior||P.free||P.a!==I&&P.b!==I||Math.abs(Ms(C(S),C(P)))>1e-6||(P.roomLeft===S.roomLeft?E.add("left"):P.roomLeft===S.roomRight&&E.add("right"));if(E.size!==1)continue;let F=S.left+S.right;E.has("left")?(S.left=0,S.right=F):(S.left=F,S.right=0)}s.forEach((S,E)=>{let[F,I]=c[E];if(F===I)return;let P=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],R=i.find(N=>N.points.length>=3&&jt(P,N.points))?.id??null,A=(S.thickness??t.interior)/2,D=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:F,b:I,left:A,right:A,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:D})}),w=K_(w,o,h);let _=j_(w,o);return{walls:w.map((S,E)=>{let F=o[S.a],I=o[S.b],P=_.get(`${E}:a`),R=_.get(`${E}:b`),A=Q_([P.right,R.left,I,R.right,P.left,F],1e-6);return{id:Z_(F,I),a:[F[0],F[1]],b:[I[0],I[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:A,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function Z_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function h0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function K_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=h0(l)),c.a!==o&&(c=h0(c)),l.a===c.b)continue;let h=Rn(ke(t[l.b],t[l.a])),u=Rn(ke(t[c.b],t[c.a]));if(Math.abs(Ms(h,u))>1e-6||Ss(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:J_(l.sources,c.sources)},d=n.filter((m,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function J_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function j_(i,t){let e=new Map;i.forEach((r,s)=>{let o=Rn(ke(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Dn(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:hi(o,Dn(Nh(c.d),c.left)),right:hi(o,Dn(u0(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=hi(o,Dn(Nh(h.d),h.left)),d=hi(o,Dn(u0(u.d),u.right)),m=Ms(h.d,u.d);if(Math.abs(m)<1e-4)continue;let b=Ms(ke(d,f),u.d)/m,g=hi(f,Dn(h.d,b));Lo(ke(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function Q_(i,t){let e=i.filter((r,s)=>Lo(ke(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=ke(o,s),c=ke(a,o);if(Math.abs(Ms(Rn(l),Rn(c)))<1e-7&&Ss(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Oh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Rn(ke(r,n));return hi(n,Dn(s,e))}function f0(i,t){let e=ke(i.b,i.a),n=Nh(Rn(e)),r=a=>t.some(l=>l.points.length>=3&&jt(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=hi(i.a,Dn(e,a));r(hi(l,Dn(n,i.left+.2)))&&s++,r(ke(l,Dn(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function ws(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Rn(ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,hi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Ts(i,t,e){if(!t.wall)return tM(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Oh(e.room,0,t.offset);return{wall:n,s:Ss(ke(r,n.a),Rn(ke(n.b,n.a)))}}function Uh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Rn(ke(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||Ss(Rn(ke(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function tM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Oh(t,e,n);return{wall:r,s:Ss(ke(o,r.a),Rn(ke(r.b,r.a)))}}return null}function bc(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],m=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,p=m>-c.right-1e-4&&m<c.left+1e-4,x=Math.abs(m-(g+b*(o/2)));if(!p&&x>.03||a&&x>=a.off)continue;let y=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=p?g+b*(o/2):m,w=c.slope?Tr(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:y+d[0]*M,z:v+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var ji=Math.PI/180;function Er(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*ji;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function vc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],s=e?-i.s:i.s;return[i.p[0]+n*i.c-r*s,i.p[1]+n*s+r*i.c]}function an(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),s=Er(i),o=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=s?(l,c)=>vc(s,o(l,c)):o;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function kh(i,t,e,n=1e-6){let[r,s]=pi(i,t,e),o=an({...i,rotation:0});return r>=o.u0-n&&r<=o.u1+n&&s>=-n&&s<=o.w+n}function on(i){let t=an(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=x0(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function zh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Vh=.14;function p0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Gh(i,t){return on(i).rh-Vh>t+.01}function m0(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of zh(i)){if(o.open||n!==void 0&&!Gh(o,n)||!kh(o,t,e)||o.points&&o.points.length>=3&&!jt([t,e],o.points))continue;let[a,l]=pi(o,t,e),c=o.shape==="flat"||o.shape==="parapet",h=Math.max(0,o.overhang??s),f=((c?null:No(Rr(o,{u0:h,u1:h,a:h,b:h}),a,l))??on(o).y(l))-Vh;r=r===null?f:Math.max(r,f)}return r}function yc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=$n(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=d0([a[0]-o[0],a[1]-o[1]]),h=d0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],b=Math.hypot(d,m);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+m*u[1])/b,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*p,a[1]+m/b*t*p])}return r}function d0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function g0(i,t){if(i.points&&i.points.length>=3)return yc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t,o=Er(i);return[[e,r],[n,r],[n,s],[e,s]].map(a=>vc(o,a))}function b0(i,t,e,n){let r=fi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let m=(o.get(s(d))??[]).find(b=>!l.has(b));if(!m||(l.add(m),d=s(m.a)===s(d)?m.b:m.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs($n(f))>Math.abs($n(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],m=c[(u+1)%c.length],b=(d[0]-f[0])*(m[1]-d[1])-(d[1]-f[1])*(m[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?yc(h,e):null}var Fo=Math.tan(30*ji);function x0(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Fo*(i-o+s))/(2*Fo))),h=a+(c-s)*Fo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*Fo:f<=i-o?l+(i-o-f)*Fo:e+(i-f)*r}}function Rr(i,t){let e=an(i),n=on(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(N,U)=>[N,U,n.y(U)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji);if(i.shape==="pent"){let N=[h,u,f,d],U=[[0,n.y(0)],[r,n.y(r)]];return{faces:[N],rim:N,ridges:[[f,d]],gable:U,gables:[U,U]}}if(i.shape==="pyramid"){let N=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,N],[u,f,N],[f,d,N],[d,h,N]],rim:[h,u,f,d],ridges:[[h,N],[d,N],[u,N],[f,N]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let N=x0(r,i.eave_a,i.eave_b,m,b),U=[[0,n.y(0)],[N.vla,N.yla],[N.vr,N.rh],[r-N.vlb,N.ylb],[r,n.y(r)]],k=[a,N.vla,N.yla],z=[l,N.vla,N.yla],Z=[a,r-N.vlb,N.ylb],X=[l,r-N.vlb,N.ylb],Y=[a,N.vr,N.rh],$=[l,N.vr,N.rh];return{faces:[[h,u,z,k],[k,z,$,Y],[Y,$,X,Z],[Z,X,f,d]],rim:[h,u,z,$,X,f,d,Z,Y,k],ridges:[[Y,$],[k,z],[Z,X]],gable:U,gables:[U,U]}}let[g,p]=_c(i)??["gable","gable"],x=Hh(i,[g,p]),y=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=p==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],C=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],T=g==="halfhip",S=p==="halfhip",E=[[h,u,...S?[C]:[],v,y,...T?[M]:[]],[y,v,...S?[_]:[],f,d,...T?[w]:[]]];g==="hip"&&E.push([d,h,y]),T&&E.push([w,M,y]),p==="hip"&&E.push([u,f,v]),S&&E.push([C,_,v]);let F=[h,u,...p==="gable"?[v]:S?[C,_]:[],f,d,...g==="gable"?[y]:T?[w,M]:[]],I=[[y,v]];g==="hip"&&I.push([h,y],[d,y]),T&&I.push([M,y],[w,y]),p==="hip"&&I.push([u,v],[f,v]),S&&I.push([C,v],[_,v]);let P=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],R=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],A=N=>N==="gable"?P:N==="halfhip"?R:null,D=[A(g),A(p)];return{faces:E,rim:F,ridges:I,gable:D[0]??D[1],gables:D}}function _c(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Hh(i,t){let e=an(i),n=on(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(h-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(h-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),m=Math.min(l-.1,(n.rh-h)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?m:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function No(i,t,e){let n=null;for(let r of i.faces){if(!jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],m=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/b;n=n===null?p:Math.min(n,p)}return n}function pi(i,t,e){let[n,r]=vc(Er(i),[t,e],!0),s=Math.min(i.x0,i.x1),o=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?o-n:n-s]}function Bh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ar(i,t){let[e,n]=vc(Er(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5||kh(o,e,n)&&(!s||r(o)<r(s))&&(s=o);return s}function Wh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=an(t),n=on(t).rh,r=Rr(i,{u0:0,u1:0,a:0,b:0}),s=on(i),o=b=>{let[g,p]=e.at(b,e.w/2),[x,y]=pi(i,g,p);return No(r,x,y)??s.y(y)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(o(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Er(t),m={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?m.x1=f:m.x0=f:c===e.u1?m.z1=f:m.z0=f,m}function v0(i,t){let e=Wh(i,t),n=an(e),r=on(e),s=Rr(i,{u0:0,u1:0,a:0,b:0}),o=on(i),a=f=>{let[d,m]=n.at(f,n.w/2),[b,g]=pi(i,d,m);return No(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),x=1/0,y=-1/0;for(let _=0;_<=40;_++){let T=n.w*_/40;r.y(T)>p+.02&&(x=Math.min(x,T),y=Math.max(y,T))}if(!(y-x>.05))continue;let v=n.at(b,x),M=n.at(g,y),w=pi(i,v[0],v[1]),C=pi(i,M[0],M[1]);h.push({u0:Math.min(w[0],C[0]),u1:Math.max(w[0],C[0]),v0:Math.min(w[1],C[1]),v1:Math.max(w[1],C[1])})}return h}function di(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Xh(i,t){let e=di(i,0,t.u0,!0),n=di(i,0,t.u1,!1),r=di(di(i,0,t.u0,!1),0,t.u1,!0),s=di(r,1,t.v0,!0),o=di(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs($n(a.map(l=>[l[0],l[1]])))>1e-6)}function Mc(i,t,e){let n=an(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(h=>r.some(u=>jt(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function y0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function eM(i){return on(i).rh}function _0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Ar(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>eM(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return kh(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function xc(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Do(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let m=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(m)>Math.abs(o)&&(o=m,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],h=s[2]-t[2],u=(c*l-h*r)/o,f=(n*h-a*c)/o;return[u,f,t[2]-u*t[0]-f*t[1]]}var Es=i=>Math.abs($n(i.map(t=>[t[0],t[1]])));function Sc(i){let t=An(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function nM(i,t){let e=Do(i),n=Do(t.poly);if(!e||!n||Es(t.poly)<1e-6)return null;let r=[...Sc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function M0(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=nM(s,n),a=o?s:[];for(let c of o??[])a=xc(a,c);if(a.length<3||Es(a)<1e-6){r.push(s);continue}let l=s;for(let[c,h,u]of Sc(a)){let f=xc(l,[-c,-h,-u]);if(f.length>=3&&Es(f)>1e-6&&r.push(f),l=xc(l,[c,h,u]),l.length<3)break}}e=r}return e}function Yh(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Do(s.poly);if(!o||Es(s.poly)<1e-6)continue;let a=Sc(s.poly).map(([d,m,b])=>[d*i[0]+m*i[1]+b,d*(t[0]-i[0])+m*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(s.depth)&&a.push([s.depth-c,-h]);let u=0,f=1;for(let[d,m]of a){if(Math.abs(m)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/m;m>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,m])=>[[d,Math.min(m,u)],[Math.max(d,f),m]]).filter(([d,m])=>m-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function S0(i,t){let e=Do(i),n=Do(t);if(!e||!n||Es(t)<1e-6)return null;let r=[...i];for(let c of Sc(t))r=xc(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=s(h),d=s(u);if(f<0!=d<0){let m=f/(f-d);o.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m,h[2]+(u[2]-h[2])*m])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function w0(i,t){let e=an(i),n=s=>s.map(([o,a,l])=>{let[c,h]=e.at(o,a);return[c,h,l]}),r=[];for(let s of t){let o=di(di(di(di(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&Es(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of Xh(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Vh})}return r}function qh(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...pi(i,n,r),s]),depth:e.depth}))}function T0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Ar(i,t)!==e&&Ar(i,e)!==t}function E0(i,t){if(t.dormer||t.open||!_c(t)||Er(t)||Ar(i,t))return null;let e=an(t),n=on(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||Er(o)||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=on(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=Bh(o),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],m=Bh(t),[b,g]=t.axis==="x"?[m.z0,m.z1]:[m.x0,m.x1];if(b<f-.05||g>d+.05)continue;let p=A0(t,o),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=p+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=p-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function A0(i,t){let e=an(t),n=e.at(e.u0,on(t).vr);return i.axis==="x"?n[0]:n[1]}function R0(i,t){let e=A0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Bh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function $h(i,t){return t.rooms.some(e=>e.points.length>=3)?b0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Zh(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=$h(i,t);return!!e&&e.some(([n,r])=>_s(n,r)-t.elevation>-.15)}function C0(i,t,e,n,r){return!e||!Zh(i,t)?!1:n<Math.min(t.height,_s(r[0],r[1])-t.elevation)-.05}function As(i,t){let e=An(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let m=f/(f-d);n.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m])}}}return n}function P0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Zn=1e-4;function Kh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function I0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Zn&&a<1-Zn&&l>-Zn&&l<1+Zn?a:null}function Jh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Zn||o>=1-Zn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Zn?o:null}function iM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(I0(n,r,o,a)!==null||Jh(o,n,r)!==null||Jh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Zn)return!0}}return jt(i[0],t)||jt(t[0],i)}function rM(i){let t=i.map(s=>Kh(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let m=u[d],b=u[(d+1)%u.length],g=I0(l,c,m,b)??Jh(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Zn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&jt(b,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Zn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Zn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Kh(o)>1e-6&&n.push(o)}return n}function L0(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&iM(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:rM(s))}function sM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function F0(i,t,e=.03){return i.every(n=>jt(n,t)||t.some((r,s)=>sM(n,r,t[(s+1)%t.length])<=e))}function D0(i,t){let e=Kh(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Qh(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Rs=(i,t)=>!!i.fix&&i.fix.includes(t);function jh(i,t,e,n){let r=new Map,s=i.filter(c=>Rs(c,t)).map(c=>({p:c,e:Qh(c,t,e)})),o=Math.min(.05,.1*e);for(let{p:c,e:h}of s)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||u[0]>a+(a===0?o:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:o)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of s)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Cr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function N0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!wc(n))return[Cr(t,n),Cr(e,n)];let r=n.side.get(i)??"lo",s=e-t;if(r==="mid")return[n.s/2-s/2,n.s/2+s/2];if(r==="free"){let o=Cr((t+e)/2,n);return[o-s/2,o+s/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function wc(i){return i.lo>0||i.hi>0}function Tc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:jh(i.parts,"w",r,t),d:jh(i.parts,"d",s,e),h:jh(i.parts,"h",o,n)},l={w:!wc(a.w)&&i.parts.some(c=>Rs(c,"w")),d:!wc(a.d)&&i.parts.some(c=>Rs(c,"d")),h:!wc(a.h)&&i.parts.some(c=>Rs(c,"h"))};return i.parts.map(c=>{let h=x=>{let y=a[x],[v,M]=Qh(c,x,y.s0);return Rs(c,x)&&!l[x]?N0(c,v,M,y):[Cr(v,y),Cr(M,y)]},[u,f]=h("w"),[d,m]=h("d"),[b,g]=h("h"),p={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+m)/2/e-.5,d:(m-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(C,_,T,S,E)=>{let F=a[C],I=_??S,P=T??E,R=(I-P/2+.5)*F.s0,A=(I+P/2+.5)*F.s0;if(!Rs(c,C)||l[C])return[Cr(R,F),Cr(A,F)];let[D,N]=Qh(c,C,F.s0),[U]=N0(c,D,N,F),k=U-D;return[R+k,A+k]},[y,v]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);p.tx=(y+v)/2/t-.5,p.tw=(v-y)/t,p.tz=(M+w)/2/e-.5,p.td=(w-M)/e}return p})}var oM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var aM=["wall","pole","pillar","parcel","bank"];function U0(i){return oM.includes(i.variant??"")?i.variant:"bin240"}function B0(i){return aM.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],Pr=["#23262b","#23262b"],Kn=["#5a3b25","#5a3b25"],De=["#1f4fa8","#1f4fa8"],Qi=["#e3b616","#e3b616"],fe=["#2f7d3b","#2f7d3b"],O0={default:{rest:Ve,bio:Kn,paper:De,plastic:Qi,glass:fe,garden:fe,recycling:Qi,other:Ve},DE:{rest:Pr,bio:Kn,paper:De,plastic:Qi,glass:fe,garden:fe,recycling:Qi},AT:{rest:Ve,bio:Kn,paper:[Ve[0],"#c0262d"],plastic:Qi,glass:fe,garden:fe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:fe,paper:De,plastic:Ve,glass:fe,garden:fe},NL:{rest:Ve,bio:fe,paper:De,plastic:["#3a3f47","#e57a1f"],glass:fe,garden:fe},BE:{rest:Ve,bio:fe,paper:De,plastic:De,glass:fe,garden:fe},GB:{rest:Pr,bio:["#3a3f47","#5a3b25"],paper:De,plastic:De,glass:Pr,garden:Kn,recycling:De},US:{rest:Pr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},CA:{rest:Pr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:Kn,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:fe,garden:fe},IT:{rest:Ve,bio:Kn,paper:De,plastic:Qi,glass:fe,garden:fe},ES:{rest:Ve,bio:Kn,paper:De,plastic:Qi,glass:fe,garden:fe},PT:{rest:Ve,bio:Kn,paper:De,plastic:Qi,glass:fe,garden:fe},DK:{rest:Pr,bio:fe,paper:De,plastic:Ve,glass:fe,garden:fe},SE:{rest:Pr,bio:Kn,paper:De,plastic:Ve,glass:fe,garden:fe},NO:{rest:Ve,bio:Kn,paper:De,plastic:Ve,glass:fe,garden:fe},FI:{rest:Ve,bio:Kn,paper:De,plastic:Ve,glass:fe,garden:fe}},k0="DE";function z0(){return k0}function lM(i,t){return O0[t]?.[i]??O0.default[i]??Ve}function V0(i,t=k0){let e=lM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var tr=zt(3662079,.95),tf=zt(3662079,1),Ti=zt(5995775,.34),G0=zt(5995775,.22),Ec=[-.55,.83],Qt=-1,Ac=16,er=32,H0=48,ef=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Qt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Vt;return t.setAttribute("position",new Nt(this.p,3)),t.setAttribute("color",new Nt(this.c,3)),t.setAttribute("fold",new Nt(this.f,1)),this.uv&&t.setAttribute("uv",new Nt(this.uv,2)),this.tile&&t.setAttribute("tile",new Nt(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=tr,r=Qt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Qt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Qt),this.seg(c,a,n,s)}geometry(){let t=new Vt;return t.setAttribute("position",new Nt(this.p,3)),t.setAttribute("color",new Nt(this.c,3)),t.setAttribute("fold",new Nt(this.f,1)),t}};function W0(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,b)=>m+(f.p[b]-m)*d),c:u.c.map((m,b)=>m+(f.c[b]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,b)=>m+(f.uv[b]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let b=u*3+m;for(let g=0;g<3;g++)i.p[b*3+g]=f[m].p[g],i.c[b*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[m].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv&&i.uv.push(...m.uv??[.5,.5]),i.tile&&i.tile.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(_=>_.p[1]>e+1e-6),m=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],g=(_,T)=>a(_,T,(e-_.p[1])/(T.p[1]-_.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),y=f[x],v=f[(x+1)%3],M=f[(x+2)%3],w=g(y,v),C=g(M,y);p===1?(l(u,[y,w,C],n),c([w,v,M],b),c([w,M,C],b)):(l(u,[y,w,C],b),c([w,v,M],n),c([w,M,C],n))}}function X0(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ie=Math.PI/180;function zt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function cM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function pn(i,t=[]){let e=i.map(([n,r])=>new te(n,r));return uo.triangulateShape(e,t.map(n=>n.map(([r,s])=>new te(r,s))))}function Y0(i,t,e,n,r,s,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],b=t[(d+1)%4],g=e[d],p=e[(d+1)%4],x=b[0]-m[0],y=b[1]-m[1],v=Math.hypot(x,y);if(v<1e-6)continue;let w=.8+.28*((y/v*Ec[0]-x/v*Ec[1]+1)/2),C=(g[0]+p[0]-m[0]-b[0])/2*(-y/v)+(g[1]+p[1]-m[1]-b[1])/2*(x/v),_=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,r-n)))),T=zt(s,l(n)*w).lerp(a,_),S=zt(s,l(r)*w).lerp(a,_);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],T,S,S),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[b[0],n,b[1]],T,S,T)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function q0(i,t,e,n,r,s,o,a,l,c){let h=new j(l),u=[];for(let g=0;g<c;g++){let p=g/c*Math.PI*2;u.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(g,p)=>{let x=t(g,u[p%c].s);return[x[0],u[p%c].y,x[1]]},d=t(e,r),m=t(n,r),b=(g,p,x,y,v)=>{let M=(p[1]-g[1])*(x[2]-g[2])-(p[2]-g[2])*(x[1]-g[1]),w=(p[2]-g[2])*(x[0]-g[0])-(p[0]-g[0])*(x[2]-g[2]),C=(p[0]-g[0])*(x[1]-g[1])-(p[1]-g[1])*(x[0]-g[0]);M*y[0]+w*y[1]+C*y[2]<0?i.tri(g,x,p,v):i.tri(g,p,x,v)};for(let g=0;g<c;g++){let p=(g+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(p))),y=t((e+n)/2,r+Math.sin(p)*o),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(p)*o,y[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,p,x]of[[e,m,d],[n,d,m]]){let y=t(g,r),v=[y[0],s,y[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let w=0;w<c;w++)b(v,f(g,w),f(g,w+1),M,h)}}function Pe(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??Qt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(o.holes??[]).map(m=>cM(m)>0?[...m].reverse():m),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:pn(t,u);if(o.topFace!==!1){let m=new j(s);for(let[b,g,p]of d){let x=f[b],y=f[g],v=f[p];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=zt(r,.55);for(let[b,g,p]of d){let x=f[b],y=f[g],v=f[p];i.tri([x[0],e,x[1]],[y[0],e,y[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...u])for(let b=0;b<m.length;b++){let g=m[b],p=m[(b+1)%m.length],x=p[0]-g[0],y=p[1]-g[1],v=Math.hypot(x,y);if(v<1e-6||o.skipSide?.(g,p))continue;let w=.8+.28*((y/v*Ec[0]-x/v*Ec[1]+1)/2),C=a(g),_=a(p),T=zt(r,h(e)*w),S=zt(r,h(C)*w),E=zt(r,h(_)*w);i.tri([g[0],e,g[1]],[g[0],C,g[1]],[p[0],_,p[1]],T,S,E,void 0,c),i.tri([g[0],e,g[1]],[p[0],_,p[1]],[p[0],e,p[1]],T,E,T,void 0,c)}}var O={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},gt=zt(5995775,.3),Lt=zt(5995775,.17),Kt=zt(3662079,.45),ir=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=rf(n)}rotated(t,e,n){let r=n*ie,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Pe(this.buf,Rc(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Rc(l)&&(l.reverse(),c.reverse()),Y0(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}roundedBox(t,e,n,r,s,o,a,l,c,h=null){let u=Math.min(a,(e-t)/2,(o-s)/2),f=[];for(let[d,m,b]of[[e-u,o-u,0],[t+u,o-u,90],[t+u,s+u,180],[e-u,s+u,270]])for(let g=0;g<=3;g++){let p=(b+g*30)*ie;f.push(this.tf(d+Math.cos(p)*u,m+Math.sin(p)*u))}if(Pe(this.buf,Rc(f),n,r,l,c,{aoFrom:0,bottom:n>.05}),h)for(let d=0;d<f.length;d++)this.line(f[d],f[(d+1)%f.length],r,r,h)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,b=t==="x"?n:e,g=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(q0(this.buf,g,m-o/2,m+o/2,b,d,f,l,c,h),u)for(let p of[m-o/2,m+o/2])for(let x=0;x<h;x++){let y=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(p,b+Math.sin(y)*f),g(p,b+Math.sin(v)*f),d+Math.cos(y)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Pe(this.buf,Rc(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=gt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Qt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function rf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Rc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Ir(i,t,e,n,r,s,o=O.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function Uo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Lt)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,Kt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Kt)}}}function $0(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Ir(i,t,e,.07,.05,.05,O.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,O.fabric,O.fabricTop,.04,gt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,O.fabric,O.fabricTop,gt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,gt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,gt);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let b=s+c+d*m+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,O.cushion,O.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,O.cushion)}}function Z0(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],b=(_,T)=>i.loft([_-.015,_+.015,T-.015,T+.015],[_-.025,_+.025,T-.025,T+.025],0,.07,O.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let _ of m)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,O.fabric,O.fabricTop,.04,gt);for(let _ of m){let[T,S]=_<0?[s+.02,s+c]:[o-c,o-.02];i.pad(T,S,.07,f-.08,a+c-.02,l,O.fabric,O.fabricTop,.04,gt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,O.fabric,O.fabricTop,gt);for(let _ of m)_<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,gt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,gt);for(let _ of m){let[T,S]=_<0?[s+h,s+c]:[o-c,o-h];i.pad(T,S,f-.08,d,l-u,l,O.fabric,O.fabricTop,.04,gt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,O.fabric,O.fabricTop,.04,gt);let g=s+h,p=r?o-h:o-u,x=Math.max(1,Math.round((p-g)/.62)),y=(p-g)/x;for(let _=0;_<x;_++){let T=g+y*_+.02,S=T+y-.04;i.pad(T,S,f-.08,f+.05,a+h+.02,a+c-.04,O.cushion,O.cushion,.04),i.loft([T+.01,S-.01,a+h*.55,a+h+.14],[T+.03,S-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,O.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),C=(M-v)/w;for(let _ of m)for(let T=0;T<w;T++){let S=v+C*T+.02,E=S+C-.04;_<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,S,E,O.cushion,O.cushion,.04),i.loft([s+h*.55,s+h+.14,S+.01,E-.01],[s+h*.4,s+h*.4+.06,S+.03,E-.03],f+.03,n*.93,O.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,S,E,O.cushion,O.cushion,.04),i.loft([o-h-.14,o-h*.55,S+.01,E-.01],[o-h*.4-.06,o-h*.4,S+.03,E-.03],f+.03,n*.93,O.cushion))}}function uM(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Ir(i,t,e,.08,.06,.03,O.wood,!0),i.box(o,a,.08,l,r+.06,s,O.wood,O.woodTop,gt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,O.white,O.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,O.wood,O.woodTop,gt),i.box(o,a,n-.05,n,r,r+.09,O.wood,O.woodTop,Lt);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,O.cushion,O.fabricTop,.025,Lt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,O.cushion,O.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let m=o+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],[m+.03,m+f-.03,b,b+g],c,c+.06,O.whiteTop),i.loft([m+.03,m+f-.03,b,b+g],[m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],c+.06,c+.12,O.whiteTop,O.whiteTop,Lt)}}function hM(i,t,e,n){let r=Math.min(.46,n*.52);Ir(i,t,e,r-.04,.035,.02,O.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,O.wood,O.woodTop,gt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,O.cushion,O.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,O.wood,O.woodTop,gt)}function fM(i,t,e,n){Ir(i,t,e,n-.04,.06,.05,O.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,Kt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,O.body)}function dM(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,O.wood,O.woodTop,gt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,O.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,O.body,O.bodyTop,gt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Lt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Kt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,O.dark,O.dark,Kt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,O.metal)}function nr(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,gt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),Uo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function pM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,O.wood,O.woodTop,gt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,O.wood,O.woodTop,gt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,O.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,O.wood,O.woodTop,Lt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?O.fabric:O.cushion,O.fabricTop),l+=h+.006,c++}}}}function mM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));nr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,gt)}function gM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,gt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Lt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Kt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Kt)}var Cc=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex(),Oo=!1;function Q0(i){Oo=i}function tm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function bM(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new j(f).toArray());return Cc(f,d>.05?Math.max(1,.62/d):1)},a=Oo?o(s[0]):Cc(s[0],.55),l=Oo?o(s[1]):Cc(s[1],.8),c=Cc(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Lt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Lt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,gt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Lt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,gt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Lt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,O.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,O.metal,O.metal,Lt);return}if(r==="bin1100"){for(let d of[-1,1])for(let m of[-1,1])i.cyl(d*(t/2-.12),m*(e/2-.12),.05,0,.14,O.dark,O.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,gt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Lt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Lt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,O.dark,O.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,gt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Lt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,Kt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Lt))}function xM(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?O.metal:O.white,o?O.metal:O.whiteTop,gt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Lt),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,O.white,O.whiteTop,Lt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Lt);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,O.metal,O.metal,Lt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Lt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,O.dark,O.dark,14,Lt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,gt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,gt)}}}function vM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,gt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Lt)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,O.white,O.whiteTop,24,gt),i.cyl(0,0,s*.5,n,n+.01,O.metal,O.metal,12)}function yM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,.05,gt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,O.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,O.metal,O.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,O.white,O.whiteTop,20,gt),i.cyl(0,0,s*.85,n-.05,n,O.white,O.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,O.dark,O.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,O.dark)}function _M(i,t,e,n,r){let s=O.metal,o=zt(O.metal,1.25).getHex(),a=zt(O.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,O.wood,O.woodTop,Lt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,gt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,gt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,O.dark,O.dark,Lt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Lt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,gt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,O.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,gt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Lt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,O.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,gt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Lt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,O.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,gt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,gt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,O.dark)}function MM(i,t,e,n){let r=e/2-em;i.box(-t/2,t/2,.02,n,-e/2,r,O.body,O.bodyTop,gt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,O.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Lt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Lt))}var em=.06;function nm(i,t,e,n){let r=t.rotation*ie,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(P,R,A)=>[t.x+P*s-A*o,R,t.z+P*o+A*s],c=(P,R,A,D,N)=>{i.tri(P,R,A,N),i.tri(P,A,D,N),i.tri(P,A,R,N),i.tri(P,D,A,N)},h=(P,R,A,D)=>{let N=l(P[0],P[1],P[2]),U=l(R[0],R[1],R[2]),k=U[0]-N[0],z=U[1]-N[1],Z=U[2]-N[2],X=Math.hypot(k,z,Z)||1,Y=[k/X,z/X,Z/X],$=Math.abs(Y[1])>.9?[1,0,0]:[0,1,0],st=[Y[1]*$[2]-Y[2]*$[1],Y[2]*$[0]-Y[0]*$[2],Y[0]*$[1]-Y[1]*$[0]],H=Math.hypot(st[0],st[1],st[2])||1,V=[st[0]/H*A,st[1]/H*A,st[2]/H*A],tt=[Y[1]*V[2]-Y[2]*V[1],Y[2]*V[0]-Y[0]*V[2],Y[0]*V[1]-Y[1]*V[0]],ct=[[1,1],[-1,1],[-1,-1],[1,-1]],it=(lt,ut)=>[lt[0]+V[0]*ct[ut][0]+tt[0]*ct[ut][1],lt[1]+V[1]*ct[ut][0]+tt[1]*ct[ut][1],lt[2]+V[2]*ct[ut][0]+tt[2]*ct[ut][1]];for(let lt=0;lt<4;lt++){let ut=(lt+1)%4;i.tri(it(N,lt),it(U,lt),it(U,ut),D),i.tri(it(N,lt),it(U,ut),it(N,ut),D)}},u=(P,R,A,D,N,U,k,z)=>{c(l(P,D,N),l(R,D,N),l(R,D,U),l(P,D,U),z),c(l(P,A,U),l(R,A,U),l(R,D,U),l(P,D,U),k),c(l(P,A,N),l(R,A,N),l(R,A,U),l(P,A,U),k),c(l(P,A,N),l(P,A,U),l(P,D,U),l(P,D,N),k),c(l(R,A,N),l(R,A,U),l(R,D,U),l(R,D,N),k)},f=new j(O.body),d=new j(O.bodyTop),m=new j(O.accent),b=new j(1929098),g=new j(995141),p=(P,R,A,D,N)=>{let U=(k,z,Z)=>[k[0]+(z[0]-k[0])*Z,k[1]+(z[1]-k[1])*Z,k[2]+(z[2]-k[2])*Z];for(let k=0;k<N;k++){let z=U(P,R,k/N),Z=U(P,R,(k+1)/N),X=U(A,D,(k+1)/N),Y=U(A,D,k/N);c(l(z[0],z[1],z[2]),l(Z[0],Z[1],Z[2]),l(X[0],X[1],X[2]),l(Y[0],Y[1],Y[2]),k%2?b:g)}},x=t.w/2,y=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,C=(P,R)=>{t.awning_valance!==!1&&p([-x+.04,P,R+.01],[x-.04,P,R+.01],[-x+.04,P-.2,R+.01],[x-.04,P-.2,R+.01],M)},_=t.variant??"arm";if(_==="side"){let P=e,R=.05,A=0,D=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,P+.05,A-.05,A+.05,f,d),u(x-.06,x,0,P+.05,A-.03,A+.03,f,d),a>.01&&p([-x+.1,P,A],[-x+.1,R,A],[D,P,A],[D,R,A],Math.max(4,Math.round((P-R)/.3))),h([D,R,A],[D,P,A],.02,m);return}if(_==="vertical"){let P=y,R=Math.min(t.d/2,y+v);u(-x,x,e,e+v,P,R,f,d);let A=(P+R)/2;for(let N of[-x+.02,x-.02])h([N,.02,A],[N,e,A],.02,m);let D=e-a*Math.max(0,e-.04);a>.01&&p([-x+.04,e,A],[x-.04,e,A],[-x+.04,D,A],[x-.04,D,A],M),h([-x+.03,D,A],[x-.03,D,A],.025,m);return}if(_==="pergola"){let P=t.d/2-.05,R=e+v,A=R-(P-y)*Math.tan(w);u(-x,x,e,R,y,y+v,f,d);for(let U of[-x+.05,x-.05])h([U,R,y+v],[U,A,P],.035,m),h([U,0,P],[U,A,P],.045,f);h([-x+.05,A,P],[x-.05,A,P],.035,m);let D=y+v+a*(P-y-v),N=R-(D-y)*Math.tan(w)+.04;a>.01&&p([-x+.08,R+.04,y+v],[x-.08,R+.04,y+v],[-x+.08,N,D],[x-.08,N,D],M),h([-x+.08,N,D],[x-.08,N,D],.025,m);return}let T=y,S=y+v;u(-x,x,e,e+v,T,S,f,d);let E=[S-.02,e+v*.35];if(_==="drop"){let P=Math.max(.3,t.d-v),R=[S,E[1]-P],A=a*(Math.PI/2+w),D=[R[0]+Math.sin(A)*P,R[1]+Math.cos(A)*P];for(let N of[-x+.08,x-.08])h([N,R[1],R[0]],[N,D[1],D[0]],.018,m);a>.01&&p([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],M),h([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,m),a>.05&&C(D[1],D[0]);return}let F=Math.max(0,t.d-v)*a,I=[E[0]+F,E[1]-F*Math.tan(w)];if(F>.01){p([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],M);let P=Math.max(.3,(t.d-v)/2+.05);for(let R of[-1,1]){let A=R*(x-.12),D=[A,e+.02,S-.04],N=[A,I[1]-.02,I[0]],U=Math.hypot(N[2]-D[2],N[1]-D[1]),k=Math.sqrt(Math.max(0,P*P-(U/2)**2)),z=[A-R*Math.min(k,x-.15),(D[1]+N[1])/2,(D[2]+N[2])/2];h(D,z,.018,m),h(z,N,.018,m)}}h([-x+.02,I[1],I[0]],[x-.02,I[1],I[0]],.03,m),F>.05&&C(I[1],I[0])}function im(i,t,e,n,r){let s=i.p.length;SM(i,t,e,n,r),t.mirror&&af(i,s)}function SM(i,t,e,n,r){let s=t.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],h=e+.05,u=e+t.h-.02,f=new j(.75,.1,.14),d=new j(O.dark),m=new j(O.accent),b=t.w/2-.006,g=(v,M,w)=>{let C=w/p,_=new j(2043212).lerp(f,C),T=new j(O.body).lerp(f,C*.8),S=Math.cos(w),E=Math.sin(w),F=(R,A)=>c(v+M*(R*S-A*E),t.d/2+R*E+A*S),I=(R,A,D,N)=>{let[U,k,z,Z]=R;i.tri([U[0],A,U[1]],[k[0],A,k[1]],[z[0],D,z[1]],N),i.tri([U[0],A,U[1]],[z[0],D,z[1]],[Z[0],D,Z[1]],N)},P=(R,A,D,N,U,k,z,Z=z)=>{let X=[F(R,k),F(A,k),F(A,U),F(R,U)];I([X[0],X[1],X[1],X[0]],D,N,Z),I([X[3],X[2],X[2],X[3]],D,N,z),I([X[0],X[3],X[3],X[0]],D,N,z),I([X[1],X[2],X[2],X[1]],D,N,z),I([X[0],X[1],X[2],X[3]],N,N,z),I([X[3],X[2],X[1],X[0]],D,D,z)};return P(0,b,h,u,-em,0,T,_),P(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),P},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function wM(i,t,e,n){nr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.dark,O.dark,gt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,O.dark,1451583,12,Kt)}}function TM(i,t,e,n){nr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,gt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,gt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,O.metal,O.metal,Kt),i.cyl(0,-e/2+.05,.02,n,n+.28,O.metal,O.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,O.metal)}function EM(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,O.white,O.whiteTop,gt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,O.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,O.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,O.glass,O.glass,Kt),i.cyl(-t/2+.04,0,.02,n,n+.12,O.metal,O.metal,8)}function AM(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,O.whiteTop,O.whiteTop,gt),i.cyl(0,0,.04,.05,.052,O.metal,O.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Kt),i.seg(r,n,s,o,n,a,Kt),i.seg(o,.05,a,o,n,a,Kt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,O.metal,O.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,O.metal,O.metal,12,Kt)}function RM(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,O.white,O.whiteTop,gt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,O.white,O.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,O.white,O.whiteTop,12,gt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,O.whiteTop)}function CM(i,t,e,n){nr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,O.white,O.whiteTop,gt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,O.glass,O.glass,Kt),i.cyl(0,-e/2+.06,.018,n,n+.2,O.metal,O.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,O.glass,O.glass,Kt)}function PM(i,t,e,n){nr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,O.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,O.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,O.dark,O.dark,Kt)}function IM(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,O.pot,O.pot,10,gt),i.cyl(0,0,r*.08,s,n*.55,O.wood,O.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,O.plant,O.plantTop,8,a===o-1?Lt:null)}}function LM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,O.fabric,O.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,gt)}function FM(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,O.wood,O.woodTop),i.seg(-t/2,d,u,t/2,d,u,gt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,gt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Lt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),Kt);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Lt)}}function DM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=i0(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,m=t/2,b=-e/2+l;for(let C=0;C<s;C++){let _=e/2-c*C,T=h*(C+1);i.box(u,f,0,T,_-c,_,O.wood,O.woodTop),i.seg(u,T,_,f,T,_,gt)}i.seg(u,0,e/2,u,h,e/2,gt);let g=h*r,p=.2;i.box(u,f,0,g,-e/2,b,O.wood,O.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,b,O.wood,O.woodTop),i.seg(u,g,b,f,g,b,gt);for(let C=0;C<o;C++){let _=b+c*C,T=h*(r+1+C);i.box(d,m,Math.max(0,T-h-p),T,_,_+c,O.wood,O.woodTop),i.seg(d,T,_,m,T,_,gt)}i.seg(u,h,e/2,u,g,b,Lt),i.seg(m,g,b,m,n,b+c*(o-1),Lt);let x=.9,y=f-.03,v=d+.03,M=b-.03,w=Math.max(1,o-4);i.seg(y,h+x,e/2-c/2,y,g+x,M,Kt),i.seg(y,g+x,M,v,g+x,M,Kt),i.seg(v,g+x,M,v,h*(r+w)+x,b+c*(w-.5),Kt);for(let C=0;C<s;C+=3){let _=e/2-c*(C+.5);i.seg(y,h*(C+1),_,y,h*(C+1)+x,_,Lt)}for(let C of[y,v])i.seg(C,g,M,C,g+x,M,Lt);for(let C=2;C<w;C+=3){let _=b+c*(C+.5);i.seg(v,h*(r+1+C),_,v,h*(r+1+C)+x,_,Lt)}}function NM(i,t,e,n){Ir(i,t,e,.12,.03,.04,O.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,O.wood,O.woodTop,gt),Uo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function OM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,O.wood,O.woodTop,gt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,O.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Lt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Kt)}}function UM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,O.wood,O.woodTop,gt),Uo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,O.body,O.bodyTop,gt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,gt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,O.metal,O.metal)}}function K0(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,O.wood,O.woodTop,gt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,O.wood,O.woodTop,gt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,O.cushion,O.cushion,Lt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,O.wood,O.woodTop,gt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,O.wood,O.woodTop,gt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,O.cushion,O.cushion,Lt))}function BM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,O.metal,O.metal,12),i.cyl(0,0,.025,.02,n-.05,O.metal,O.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,O.metal,O.metal,12,Lt),i.cyl(0,0,r,n-.05,n,O.cushion,O.fabricTop,14,gt)}function kM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,O.metal),i.box(-.03,.03,.04,.08,-r,r,O.metal),i.cyl(0,0,.06,.02,.1,O.dark,O.dark,8),i.cyl(0,0,.025,.1,.44,O.metal,O.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,O.fabric,O.cushion,gt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,O.fabric,O.fabricTop,gt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,O.metal)}function zM(i,t,e,n){Ir(i,t,e,.08,.04,.05,O.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,O.fabric,O.cushion,gt)}function VM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,O.body,O.bodyTop,gt),Uo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function GM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,gt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,O.dark,O.dark,Kt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Kt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Lt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Kt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Kt)}function HM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,O.body,O.bodyTop,gt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,O.dark),Uo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,gt)}function WM(i,t,e,n){let r=e*.41,s=t*.14;for(let o of[-.32,.32])for(let a of[-.3,.27])i.box((o-.07)*t,(o+.07)*t,0,n*.035,(a-.05)*e,(a+.05)*e,O.dark);i.roundedBox(-t/2,t/2,n*.025,n*.565,-e/2,r,s,O.body,O.bodyTop,gt),i.roundedBox(-t/2,t/2,n*.565,n*.605,-e/2,r,s,O.metal,O.metal,Lt),i.roundedBox(-t/2,t/2,n*.605,n*.965,-e/2,r,s,O.body,O.bodyTop,gt),i.roundedBox(-t*.485,t*.485,n*.965,n,-e*.485,r-e*.015,s,O.dark,O.bodyTop,Lt),i.pad(-t*.425,t*.425,n*.65,n*.91,r,r+e*.012,O.dark,O.glass,t*.02,Lt),i.box(-t*.15,t*.11,n*.69,n*.855,r+e*.012,r+e*.015,O.glass,O.glass,Kt);for(let o of[.745,.795])i.seg(-t*.1,n*o,r+e*.016,t*.065,n*o,r+e*.016,Kt);i.lyingCyl("z",t*.3,r+e*.025,n*.71,n*.87,e*.035,t*.14,O.dark,O.metal,16,Kt);for(let o of[.1,.47])i.box(-t*.065,t*.065,n*o,n*(o+.06),r,e/2-e*.025,O.dark);i.pad(-t*.075,t*.075,n*.07,n*.535,e/2-e*.04,e/2,O.body,O.metal,t*.025,Kt),i.seg(-t*.35,n*.55,r+e*.001,t*.35,n*.55,r+e*.001,Lt);for(let o=0;o<6;o++)i.seg(-t*.25,n*(.7+o*.025),-e/2-5e-4,t*.25,n*(.7+o*.025),-e/2-5e-4,Lt)}function XM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,O.body,O.bodyTop,gt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Kt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,gt)}function J0(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,O.white,O.whiteTop,gt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Lt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Kt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,Kt),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Lt)}}function YM(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),O.wood,O.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,O.wood,O.woodTop,gt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,O.white,O.whiteTop,Lt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,O.whiteTop,O.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,O.wood,O.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,gt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Lt)}function qM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,O.metal,O.metal,12),i.cyl(0,0,.05,.03,n-.04,O.wood,O.wood,8),i.cyl(0,0,r,n-.04,n,O.wood,O.woodTop,20,gt)}function $M(i,t,e,n){Ir(i,t,e,n-.03,.04,.03,O.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,O.wood,O.woodTop,gt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,O.body,O.bodyTop,Lt)}function ZM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,O.dark,O.dark,Kt)}function KM(i,t,e,n){let r=sf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,O.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,O.white,O.whiteTop,gt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Lt)}}function JM(i,t,e,n){let r=of;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,O.white,O.whiteTop,gt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,O.white,O.white,gt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,O.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Lt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Kt)}function Cs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Kt)}}function jM(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.dark,O.body,gt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Kt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,O.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,gt),Cs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Kt);for(let a of[-1,1])Cs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,gt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,O.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Kt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Lt)}function QM(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,O.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,O.metal,O.metal,gt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Lt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,O.dark,O.body,14,gt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,O.glass,O.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Kt)}}function t2(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,O.dark,O.dark,16),i.cyl(0,0,s,n*.08,n*.78,O.dark,O.body,18,gt),i.cyl(0,0,s*.75,n*.78,n*.84,O.dark,O.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,O.dark,O.metal,gt),Cs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,O.dark,O.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,O.dark,O.metal,16,gt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Kt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,O.dark,O.body)}function e2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,O.white,O.whiteTop,gt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,O.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;Cs(i,s,o,r,e/2+.004,24),Cs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Lt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Lt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,O.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Kt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Lt)}function n2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,O.white,O.whiteTop,gt);for(let s of[-1,1])Cs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Kt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,O.white,O.glass,Lt)}function i2(i,t,e,n){let r=t0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,O.metal,O.metal,gt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,O.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,O.accent,O.accent)}function r2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.dark,O.body,gt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,O.dark,O.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Kt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Lt)}function s2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,O.dark,O.body,gt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,Kt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,O.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,O.dark,O.body)}function o2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,O.white,O.whiteTop,gt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Lt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Lt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,O.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,O.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Kt)}function a2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,O.white,O.whiteTop,gt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Kt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Lt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,O.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,O.dark,O.body,gt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Kt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,O.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,O.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,O.white,O.whiteTop,gt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Kt)}}var sf=.12,of=2.05;function rm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function lf(i,t){let e=l2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function l2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Xp(i.type);if(s){let l=t?sn(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?sn(t,i)-Sr(i):0,a=c2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function c2(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?sn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:sf+.02,y1:sf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:of+.015,y1:of+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function u2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=ye(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function h2(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new j(1-r,1-r,1-r),c=new j(1,1,1),h=o+.003;if(s){let b=v=>[v[0],h,v[1]],p=(v,M,w)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*w),x=i.p.length,y=b(t(0,0));for(let v=0;v<24;v++){let M=b(p(v,e/2,n/2)),w=b(p(v+1,e/2,n/2)),C=b(p(v,e/2+a,n/2+a)),_=b(p(v+1,e/2+a,n/2+a));i.tri(y,M,w,l),i.tri(M,C,_,l,c,c),i.tri(M,_,w,l,c,l)}rf(t)&&af(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],m=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}rf(t)&&af(i,m)}function Pc(i,t,e,n,r=0,s=!1){f2(i,t,e,n,r,s)}function af(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function f2(i,t,e,n,r,s=!1){let o=ye(n.type)?0:r-Sr(n);if(ye(n.type)||Math.abs(o)<.001)return j0(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;j0(i,t,r<.05?e:new ee,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=o;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=o;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=o}function j0(i,t,e,n,r,s=!1){let o=n.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new ir(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),m=Math.max(.005,n.h);switch(n.type){case"sofa":$0(u,f,d,m,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":$0(u,f,d,m,1);break;case"sofa_l":Z0(u,f,d,m,!1);break;case"sofa_u":Z0(u,f,d,m,!0);break;case"bed":uM(u,f,d,m);break;case"chair":hM(u,f,d,m);break;case"table":fM(u,f,d,m);break;case"desk":dM(u,f,d,m);break;case"nightstand":nr(u,f,d,m,1,m*.72,!0),u.seg(-f/2,m*.5,d/2-.02,f/2,m*.5,d/2-.02,Lt);break;case"wardrobe":nr(u,f,d,m,Math.max(2,Math.round(f/.5)),m*.5);break;case"shelf":pM(u,f,d,m);break;case"kitchen":mM(u,f,d,m);break;case"fridge":gM(u,f,d,m);break;case"fridge_smart":MM(u,f,d,m);break;case"waste_bin":{let b=i.c.length;bM(u,f,d,m,U0(n),V0(n,z0())),Oo&&tm(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;_M(u,f,d,m,B0(n));let p=Sr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;if(p>0)return;break}case"wifi_ap":vM(u,f,d,m,n.variant==="wall");return;case"water_heater":if(yM(u,f,d,m,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;xM(u,f,d,m,s0(n).length,n.type==="wall_socket",n.variant==="outdoor");let p=Sr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;return}case"awning":return;case"stove":wM(u,f,d,m);break;case"sink":TM(u,f,d,m);break;case"bathtub":EM(u,f,d,m);break;case"shower":AM(u,f,d,m);break;case"wc":RM(u,f,d,m);break;case"washbasin":CM(u,f,d,m);break;case"tv_board":PM(u,f,d,m);break;case"plant":IM(u,f,d,m);break;case"rug":LM(u,f,d);return;case"stairs":FM(u,f,d,m);break;case"stairs_u":DM(u,f,d,m);break;case"stairwell":return;case"sideboard":NM(u,f,d,m);break;case"dresser":OM(u,f,d,m);break;case"tall_cabinet":nr(u,f,d,m,1,m*.5);break;case"coat_rack":UM(u,f,d,m);break;case"bench":K0(u,f,d,m,!1);break;case"corner_bench":K0(u,f,d,m,!0);break;case"bar_stool":BM(u,f,d,m);break;case"office_chair":kM(u,f,d,m);break;case"stool":zM(u,f,d,m);break;case"kitchen_wall":VM(u,f,d,m);return;case"kitchen_tall":GM(u,f,d,m);break;case"island":HM(u,f,d,m);break;case"worktop":u.box(-f/2,f/2,Math.max(0,m-.04),m,-d/2,d/2,O.whiteTop,O.whiteTop,gt);return;case"air_fryer_philips_hd9880":WM(u,f,d,m);break;case"dishwasher":XM(u,f,d,m);break;case"washer":J0(u,f,d,m,!1);break;case"dryer":J0(u,f,d,m,!0);break;case"bunk_bed":YM(u,f,d,m);break;case"table_round":qM(u,f,d,m);break;case"coffee_table":$M(u,f,d,m);break;case"tv_wall":ZM(u,f,d,m);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let p=0;p<4;p++)u.seg(g[p][0],.012,g[p][1],g[(p+1)%4][0],.012,g[(p+1)%4][1],Lt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,gt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,gt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,m,-d/2,-d/2+d*.3,O.white,O.whiteTop,gt),u.box(-f*.2,f*.2,m*.5,m*.62,-d/2+d*.3,-d/2+d*.31,O.accent);return;case"radiator":KM(u,f,d,m);return;case"ac_unit":JM(u,f,d,m);return;case"inverter":jM(u,f,d,m,n.variant??null);return;case"grid_point":r2(u,f,d,m);break;case"wallbox":s2(u,f,d,m);return;case"pool_pump":QM(u,f,d,m);break;case"pool_filter":t2(u,f,d,m,n.variant??null);break;case"pool_heat_pump":e2(u,f,d,m);break;case"pool_dosing":n2(u,f,d,m);break;case"pool_valve":i2(u,f,d,m);return;case"meter":o2(u,f,d,m);return;case"home_battery":if(a2(u,f,d,m,n.variant??null),n.variant==="wall")return;break;default:{let b=ye(n.type);if(b){let g=cc(n.type),p=g?x=>Ih(g,x):Hp(n.type)&&!s?Po:null;if(Bo(u,b,f,d,m,r,null,null,p),r>.05)return}else u.box(-f/2,f/2,0,m,-d/2,d/2,O.body,O.bodyTop,gt)}}h2(e,h,f,d,n.type==="plant"?.35:.5,u2(n),Math.min(0,r))}function sm(i){return!!ye(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function nf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=O;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Bo(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let h of Tc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&o!==null,d=f?o:nf(u.color,!1)??O.body,m=f?o:nf(u.top,!1)??nf(u.color,!0)??zt(d,1.25).getHex(),b=s+u.y*r,g=s+Math.min(r,(u.y+u.h)*r),p=i.colors.length,x=u.edges==="glow"?tr:u.edges==="faint"?Lt:u.edges?gt:null,y=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))y.lyingCyl(u.axis,u.x*e,u.z*n,b,g,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,m,14,x);else if(u.shape==="cyl")y.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,g,d,m,14,x);else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,C=u.td??u.d;y.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-w/2)*e,(v+w/2)*e,(M-C/2)*n,(M+C/2)*n],b,g,d,m,x)}else y.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,g,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,m,x);Oo&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&tm(i.colors,p)}}function om(i,t,e,n,r,s){let o=s*ie,a=Math.cos(o),l=Math.sin(o),c=(m,b)=>[e+m*a-b*l,r+m*l+b*a],h=new ir(i,new Ne,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,O.accent,O.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,O.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function am(i,t,e,n,r){let s=Wp(t)*n,o=new ir(i,new Ne,(c,h)=>[c,h-s]);Bo(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Po);let a=0,l=0;for(let c of Tc(t,e,n,r)){if(!Po(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function ko(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Bo(new ir(i,new Ne,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function lm(i,t,e,n,r,s){let o=d2(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ie,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Bo(new ir(i,new Ne,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function d2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Ih(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function cm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of Tc(i,n,r,s)){if(!g.glow)continue;let p=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,y=g.y*s,v=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-y));o+=M,a+=p*M,l+=(y+v)/2*M,c+=x*M}if(!o)return null;let h=a/o,u=c/o,f=t.rotation*ie,d=Math.cos(f),m=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*m,e+l/o,t.z+b*h*m+u*d]}function Ic(i,t,e,n,r){let s=e.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Bo(new ir(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var p2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function m2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*m-n[0],l[1]+f*m-n[1])<.4}))}function hm(i,t){return t.type==="pool"?mc(i,t):wr(i,t)+(qn(t.type)?.01:ys[t.type])}function zo(i){return An(i)>=0?i:[...i].reverse()}function g2(i,t){let e=i[t];if(qn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>jt(o,e.points))&&n.push(zo(s.points))}return n}function um(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Pe(i,zo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let m=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Qt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Qt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Qt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Qt)},p=new j(a),x=new j(zt(o,.9)),y=new j(zt(o,.6));g([m(s,1),b(s,1),b(s,-1),m(s,-1)],p),g([m(r,1),b(r,1),b(r,-1),m(r,-1)],y),g([m(r,1),b(r,1),b(s,1),m(s,1)],x),g([m(r,-1),b(r,-1),b(s,-1),m(s,-1)],x),g([m(r,1),m(r,-1),m(s,-1),m(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function fm(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=wr(e,s),l=(x,y)=>a-Io(e,s,x,y),c=a-(s.type==="pool"?0:s.slope??0),h=qn(s.type)&&s.height?s.height:ys[s.type],u={...p2[s.type],top:h},f=zo(s.points),d=zt(u.edge,u.edgeAlpha),m=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Qt)}},g=n??i,p=new j(n?1734832:u.color);switch(s.type){case"pool":{let x=new j(u.side),y=new j(zt(u.side,.55)),v=new j(932440),M=mc(e,s),w=pc(e,s),C=jp(e,s);for(let[_,T,S]of pn(f)){let E=f[_],F=f[T],I=f[S];(n?g:i).tri([E[0],M,E[1]],[I[0],M,I[1]],[F[0],M,F[1]],p,p,p,void 0,Qt),i.tri([E[0],C,E[1]],[I[0],C,I[1]],[F[0],C,F[1]],v,v,v,void 0,Qt)}for(let _=0;_<f.length;_++){let T=f[_],S=f[(_+1)%f.length];i.tri([S[0],C,S[1]],[S[0],w,S[1]],[T[0],w,T[1]],y,x,x,void 0,Qt),i.tri([S[0],C,S[1]],[T[0],w,T[1]],[T[0],C,T[1]],y,x,y,void 0,Qt)}if(!s.above&&Dh(e,s)){let _=new j(660258),T=new j(396054),S=C-.2,E=Math.min(a,w);for(let F=0;F<f.length;F++){let I=f[F],P=f[(F+1)%f.length];i.tri([I[0],S,I[1]],[I[0],E,I[1]],[P[0],E,P[1]],T,_,_,void 0,Qt),i.tri([I[0],S,I[1]],[P[0],E,P[1]],[P[0],S,P[1]],T,_,T,void 0,Qt)}for(let[F,I,P]of pn(f)){let R=f[F],A=f[I],D=f[P];i.tri([R[0],S,R[1]],[A[0],S,A[1]],[D[0],S,D[1]],T,T,T,void 0,Qt)}if(s.outline!==!1)for(let F=0;F<f.length;F++){let I=f[F],P=f[(F+1)%f.length];t.seg([I[0],S,I[1]],[P[0],S,P[1]],zt(u.edge,u.edgeAlpha*.35),Qt),t.seg([I[0],S,I[1]],[I[0],E,I[1]],zt(u.edge,u.edgeAlpha*.25),Qt)}}if(w>a+.02){let _=new j(2044240),T=new j(1187123);for(let S=0;S<f.length;S++){let E=f[S],F=f[(S+1)%f.length];i.tri([E[0],a,E[1]],[E[0],w,E[1]],[F[0],w,F[1]],T,_,_,void 0,Qt),i.tri([E[0],a,E[1]],[F[0],w,F[1]],[F[0],a,F[1]],T,_,T,void 0,Qt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),s.outline!==!1)for(let _=0;_<f.length;_++){let T=f[_],S=f[(_+1)%f.length];t.seg([T[0],C+.005,T[1]],[S[0],C+.005,S[1]],zt(u.edge,u.edgeAlpha*.4),Qt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===m)continue;let y=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),w=Math.max(1,Math.round(M/2)),C=m>=0&&x===m-1?w:w-1;for(let _=0;_<=C;_++){let T=_/w,S=y[0]+(v[0]-y[0])*T,E=y[1]+(v[1]-y[1])*T,F=l(S,E);Pe(i,zo([[S-.04,E-.04],[S+.04,E-.04],[S+.04,E+.04],[S-.04,E+.04]]),F,F+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([y[0],l(y[0],y[1])+_*u.top,y[1]],[v[0],l(v[0],v[1])+_*u.top,v[1]],d,Qt)}break}case"pergola":{let x=u.top;for(let[y,v]of f){let M=l(y,v);Pe(i,zo([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+x,u.side,u.color)}for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length],w=l(v[0],v[1])+x;if(um(i,v,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let C=l(v[0],v[1]),_=l(M[0],M[1]);t.seg([v[0],C+.25,v[1]],[M[0],_+x-.25,M[1]],d,Qt),t.seg([M[0],_+.25,M[1]],[v[0],C+x-.25,v[1]],d,Qt)}}if(l0(f)){let y=c0(f),v=y.x1-y.x0,M=y.z1-y.z0,w=v>=M,C=w?v:M,_=Math.max(1,Math.round(C/.6));for(let T=1;T<_;T++){let S=(w?y.x0:y.z0)+C*T/_,E=w?[S,y.z0+.06]:[y.x0+.06,S],F=w?[S,y.z1-.06]:[y.x1-.06,S],I=l(E[0],E[1])+x;um(i,E,F,.06,I-.04,I+.08,u.side,u.color,l(F[0],F[1])-l(E[0],E[1]))}}b((y,v)=>l(y,v)+x+.004);break}case"balcony":{Pe(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let y=s.height&&s.height>.3?s.height:1,v=zt(9417983,.42),M=zt(3662079,.55);for(let w=0;w<f.length;w++){let C=f[w],_=f[(w+1)%f.length];if(m2(e,C,_))continue;let T=Math.hypot(_[0]-C[0],_[1]-C[1]),S=a+u.top;t.seg([C[0],S+y,C[1]],[_[0],S+y,_[1]],M,Qt),t.seg([C[0],S+.1,C[1]],[_[0],S+.1,_[1]],v,Qt);let E=Math.max(1,Math.round(T/.12));for(let F=0;F<=E;F++){let I=F/E,P=C[0]+(_[0]-C[0])*I,R=C[1]+(_[1]-C[1])*I;t.seg([P,S,R],[P,S+y,R],F===0||F===E?M:v,Qt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,y=g2(r,o);if(Pe(i,f,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let w=v[M],C=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[C[0],x(C[0],C[1])+.004,C[1]],d,Qt)}}}})}var Fc=Math.PI/180,b2=1.13,x2=1.72,cf=.025,Lr=.07,dm=.25;function pm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=fi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},m=(b,g,p,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});m(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&m(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var uf="ground";function Ps(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function mm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Ps(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:uc(s,o,a)):t.base??0;return{key:uf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function v2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Dr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>y2(x,Mc(i,x,x.overhang??t.overhang)));let e=v2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(y=>y[0])),r=e.rooms.flatMap(x=>x.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=e.elevation+e.height;if(t.type==="flat")return[gm("main",null,o,l,a,c,h+dm)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,m=d*Math.tan(t.pitch*Fc),b=(x,y,v)=>f?[x,h+v,(l+c)/2+y]:[(o+a)/2+y,h+v,x],[g,p]=f?[o,a]:[l,c];return[-1,1].map(x=>Lc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(p,x*d,0),b(g,0,m),t.pitch,()=>[0,p-g]))}function y2(i,t){let e=an(i),n=on(i),r=(y,v,M)=>{let[w,C]=e.at(y,v);return[w,M,C]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let y=e.at(a,-s),v=e.at(l,e.w+o);return[gm(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+dm)]}if(i.shape==="pent")return[Lc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=_c(i),u=h?Hh(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",m=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+m-a:0,p=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let y=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(Lc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/y),c-p*(v/y)]))}if(e.w-n.vr>.3){let y=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(Lc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[p*(v/y),c-g*(v/y)]))}if(f||d){let y=n.y(-s),v=n.y(e.w+o),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,y),r(e.u0+m,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,y),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[w,C,_,T,S]of M){let E=_2(w,i.id,C,_,T,S);E&&x.push(E)}}return x}function _2(i,t,e,n,r,s){let o=Vo(Fr(r,n));if(o<.3)return null;let a=rr(Fr(r,n)),l=Fr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Vo(h);if(u<.3)return null;let f=rr(h),d=rr(vm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=rr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Fc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/u));return[c*x,o-(o-c)*x]},facing:[m[0],m[2]]}}function Lc(i,t,e,n,r,s,o,a){let l=rr(Fr(r,n)),c=rr(Fr(s,n)),h=rr(vm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=rr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Vo(Fr(r,n)),ls:Vo(Fr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function gm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function bm(i){let t=i.module_w||b2,e=i.module_h||x2;return i.portrait===!1?[e,t]:[t,e]}function M2(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function xm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Fc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Fc:0}function S2(i,t){let[,e]=bm(t),n=xm(i,t);return i.wall?e*Math.cos(n)+cf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+cf}function Go(i,t,e=!1){let[n,r]=bm(t),s=[],o=xm(i,t),a=r*Math.cos(o),l=S2(i,t),c=M2(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*p],m=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,x]=i.span(g);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let p=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let y=`${g}:${x}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(x+p)*(n+cf),w=t.v+g*l,C=M+n,_=w+(i.flat||i.wall?a:r);if(f){if(!(m((M+C)/2,w)&&m((M+C)/2,_)))continue}else if(![[M,w],[C,w],[C,_],[M,_]].every(([P,R])=>m(P,R)))continue;if(i.wall&&o>.001){let P=Lr+r*Math.sin(o),[R,A]=t.flip?[P,Lr]:[Lr,P],D=[d(M,w,R),d(C,w,R),d(C,_,A),d(M,_,A)],N=t.flip?w:_,U=[M+.05,C-.05].map(k=>[d(k,N,0),d(k,N,P)]);s.push({corners:D,posts:U,cell:y,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,w,Lr),d(C,w,Lr),d(C,_,Lr),d(M,_,Lr)],posts:[],cell:y,skipped:v});continue}let T=.15,S=T+r*Math.sin(o),[E,F]=t.flip?[_,w]:[w,_],I=[d(M,E,T),d(C,E,T),d(C,F,S),d(M,F,S)];s.push({corners:I,posts:[M+.05,C-.05].flatMap(P=>[[d(P,E,0),d(P,E,T)],[d(P,F,0),d(P,F,S)]]),cell:y,skipped:v})}}),s}function Fr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Vo(i){return Math.hypot(i[0],i[1],i[2])}function rr(i){let t=Vo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function vm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var w2=.78,T2=1.18;function E2(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||w2,module_h:i.h||T2}}function Dc(i,t){let e=Go(i,E2(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Nc(i,t,e){let n=t?Dc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>jt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Ho=1712952,Wo=2239816,Sm=1318193,sr=zt(3662079,.9),Is=zt(5995775,.45),Je=.14,A2=9427199,R2=13226982,C2=14936565,P2={black:{glass:new j(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new j(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},I2=zt(13226982,.5),L2=zt(13226982,.85),F2=zt(16757575,.95),ym=new j(2845583),_m=new j(1713986),D2=new j(3662079).multiplyScalar(.35),Mm=new j(4871791);function N2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function wm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:B2(i),r=e?.type==="custom"?k2(i,e.sections??[],e.overhang):n?[n]:[];return U2(i,r),O2(i,r,t),r}function O2(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Dr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Dc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(A=>A.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?Nc(i,o,s):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=A=>[A[0],A[1]-u,A[2]],[d,m,b,g]=a.map(f),p=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),y=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new ee,lines:new Ne,glass:new ee}).get(h.id):x?l.win??={solid:new ee,lines:new Ne,glass:new ee}:l.winRoof??={solid:new ee,lines:new Ne,glass:new ee},v=(A,D)=>[A[0]+o.n[0]*D,A[1]+o.n[1]*D,A[2]+o.n[2]*D],M=(A,D,N)=>[A[0]+(D[0]-A[0])*N,A[1]+(D[1]-A[1])*N,A[2]+(D[2]-A[2])*N],w=p.open>.02||p.tilt>.02?F2:L2,C=[d,m,b,g].map(A=>v(A,.06)),_=[d,m,b,g].map(A=>v(A,-.02));for(let A=0;A<4;A++){y.lines.seg(C[A],C[(A+1)%4],w);let D=(A+1)%4;y.solid.tri(_[A],_[D],C[D],Mm),y.solid.tri(_[A],C[D],C[A],Mm)}let T=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*ie,S=Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2]),E=A=>{let D=o.es;return[A[0]-D[0]*S*Math.cos(T)+o.n[0]*S*Math.sin(T),A[1]-D[1]*S*Math.cos(T)+o.n[1]*S*Math.sin(T),A[2]-D[2]*S*Math.cos(T)+o.n[2]*S*Math.sin(T)]},F=v(g,.065),I=v(b,.065),P=E(F),R=E(I);y.glass.tri(P,R,I,ym),y.glass.tri(P,I,F,ym);for(let[A,D]of[[P,R],[R,I],[I,F],[F,P]])y.lines.seg(A,D,w);if(p.cover>.02){let A=Math.min(1,p.cover),D=v(M(F,P,A),.01),N=v(M(I,R,A),.01),U=v(F,.01),k=v(I,.01);y.solid.tri(D,N,k,_m),y.solid.tri(D,k,U,_m);let z=Math.max(1,Math.round(S*A/.05));for(let Z=1;Z<=z;Z++){let X=Z/z;y.lines.seg(v(M(U,D,X),.004),v(M(k,N,X),.004),D2)}}}}function U2(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Dr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&hf(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function hf(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=P2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Go(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let m=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,y)=>[p[0]+(x[0]-p[0])*y,p[1]+(x[1]-p[1])*y,p[2]+(x[2]-p[2])*y],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(b(h,u,p/a)),m(b(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(b(h,d,p/l)),m(b(u,f,p/l)),o.cells);for(let[p,x]of c.posts)t.seg(s(p),s(x),I2)}}function B2(i){let t=i.settings.roof,e=N2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(E=>E[0])),r=e.rooms.flatMap(S=>S.points.map(E=>E[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new ee,u=new Ne;if(t.type==="flat"){Pe(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,Ho,Wo,{bottom:!0});let S=.252;for(let[E,F]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([E[0],S,E[1]],[F[0],S,F[1]],sr),u.seg([E[0],0,E[1]],[F[0],0,F[1]],Is);return{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,b=m*Math.tan(t.pitch*ie),g=(S,E,F)=>d?[S,F,(l+c)/2+E]:[(o+a)/2+E,F,S],[p,x]=d?[o,a]:[l,c],y=new j(Wo),v=new j(Ho),M=(S,E,F,I,P)=>{h.tri(S,E,F,P),h.tri(S,F,I,P)};for(let S of[-1,1]){M(g(p,S*m,0),g(x,S*m,0),g(x,0,b),g(p,0,b),y),M(g(p,S*m,-Je),g(p,0,b-Je),g(x,0,b-Je),g(x,S*m,-Je),v),M(g(p,S*m,-Je),g(x,S*m,-Je),g(x,S*m,0),g(p,S*m,0),v);for(let E of[p,x])M(g(E,S*m,-Je),g(E,S*m,0),g(E,0,b),g(E,0,b-Je),v);u.seg(g(p,S*m,0),g(x,S*m,0),Is);for(let E of[p,x])u.seg(g(E,S*m,0),g(E,0,b),Is)}let w=t.overhang,C=new j(Sm),_=m-w,T=_*Math.tan(t.pitch*ie);for(let S of[p+w,x-w])h.tri(g(S,-_,-Je),g(S,_,-Je),g(S,0,T-Je),C),h.tri(g(S,_,-Je),g(S,-_,-Je),g(S,0,T-Je),C);return u.seg(g(p,0,b+.004),g(x,0,b+.004),sr),{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}function k2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Dr(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=Ar(t,l),h=c?null:E0(t,l),u=c?Wh(c,l):h?R0(l,h):l,f=Mc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,m=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:m?w0(u,Rr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),h=y0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new ee,lines:new Ne,glass:new ee,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,m=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Ar(t,v)===l).flatMap(v=>v0(l,v));for(let v of i.settings.roof.windows??[]){let M=s.get(v.face),w=M&&M.section===l.id?Dc(M,v):null;if(!w)continue;let C=w.map(_=>pi(l,_[0],_[2]));b.push({u0:Math.min(...C.map(_=>_[0])),u1:Math.max(...C.map(_=>_[0])),v0:Math.min(...C.map(_=>_[1])),v1:Math.max(...C.map(_=>_[1]))})}let g=c.drawn,p=c.junction?1-c.junction.end:null;if(d){let v=an(g),M=Rr(d,{u0:0,u1:0,a:0,b:0}),w=C=>{let[_,T]=v.at(C,v.w/2),[S,E]=pi(d,_,T);return No(M,S,E)??on(d).y(E)};p=w(v.u0)<=w(v.u1)?0:1}let x=o.filter(v=>T0(t,l,v)),y=x.length?{covers:qh(g,x.flatMap(v=>a.get(v).covers)),lines:qh(g,x.filter(v=>o.indexOf(v)>o.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[an(l).u0,an(l).u1]:null}:null;z2(f.solid,f.lines,g,c.ov,h.elevation,f.glass,m,b,p,y)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function z2(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let h=an(e),u=on(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),m=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),p=h.u1+Math.max(0,f.u1),x=(A,D,N)=>{let[U,k]=h.at(A,D);return[U,N-r,k]},y=new j(Wo),v=new j(Ho),M=new j(Sm),w=(A,D)=>{for(let N=1;N+1<A.length;N++)i.tri(A[0],A[N],A[N+1],D)},C=[],_=[],T=[],S=[null,null],E=[];if(e.shape==="flat"||e.shape==="parapet"){let A=e.eave_a,D=e.shape==="parapet",N=e.points&&e.points.length>=3?g0(e,D?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):D?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(p,-d),h.at(p,b+m),h.at(g,b+m)];Pe(i,N,A-r,A-r+.25,Ho,Wo,{bottom:!0});for(let U=0;U<N.length;U++){let k=N[U],z=N[(U+1)%N.length];t.seg([k[0],A-r+.252,k[1]],[z[0],A-r+.252,z[1]],sr),t.seg([k[0],A-r,k[1]],[z[0],A-r,z[1]],Is)}if(D){let U=X=>$n(X)>=0?X:[...X].reverse(),k=U(N),z=yc(k,-.2),Z=k.length;for(let X=0;X<Z;X++){let Y=U([k[X],k[(X+1)%Z],z[(X+1)%Z],z[X]]);Pe(i,Y,A-r+.25,A-r+.65,Ho,Wo),t.seg([k[X][0],A-r+.652,k[X][1]],[k[(X+1)%Z][0],A-r+.652,k[(X+1)%Z][1]],sr),t.seg([z[X][0],A-r+.652,z[X][1]],[z[(X+1)%Z][0],A-r+.652,z[(X+1)%Z][1]],sr)}}}else{let A=Rr(e,f);C=A.faces;for(let D of a)C=C.flatMap(N=>Xh(N,D));if(_=A.rim,T=A.ridges,S=A.gables,c){for(let D of C)for(let N of c.lines){let U=S0(D,N.poly);if(U)for(let[k,z]of Yh(U[0],U[1],c.covers.filter(Z=>Z!==N)))E.push([k,z])}C=C.flatMap(D=>M0(D,c.covers))}}let F=!!e.open,I=new j(A2);for(let A of C){if(F){for(let D=1;D+1<A.length;D++)s.tri(x(A[0][0],A[0][1],A[0][2]),x(A[D][0],A[D][1],A[D][2]),x(A[D+1][0],A[D+1][1],A[D+1][2]),I);continue}w(A.map(([D,N,U])=>x(D,N,U)),y),w(A.map(([D,N,U])=>x(D,N,U-Je)),v)}let P=(A,D)=>c?Yh(A,D,c.covers):[[A,D]];for(let A=0;A<_.length;A++)for(let[[D,N,U],[k,z,Z]]of P(_[A],_[(A+1)%_.length]))F||w([x(D,N,U),x(k,z,Z),x(k,z,Z-Je),x(D,N,U-Je)],v),t.seg(x(D,N,U),x(k,z,Z),F?sr:Is);if(F){V2(i,t,h,u,f,x,r);return}for(let[A,D]of T)for(let[[N,U,k],[z,Z,X]]of P(A,D))t.seg(x(N,U,k+.004),x(z,Z,X+.004),sr);for(let[[A,D,N],[U,k,z]]of E)t.seg(x(A,D,N+.004),x(U,k,z+.004),sr);let R=e.base;if(!o){for(let A of[0,1]){let D=S[A];if(!D||l!==null&&l!==A)continue;let N=G2(D,R-Je),U=A===0?h.u0:h.u1;N.length>=3&&w(N.map(([k,z])=>x(U,k,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[A,D]=c?.wallU??[h.u0,h.u1];for(let N of[0,b]){let U=u.y(N)-Je;U>R+.02&&w([x(A,N,R),x(D,N,R),x(D,N,U),x(A,N,U)],M)}}else if(e.eave_a>R+.02)for(let[A,D,N,U]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(A,D,R),x(N,U,R),x(N,U,e.eave_a),x(A,D,e.eave_a)],M)}}function V2(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,x,y,v,M,w)=>{let C=[e.at(p,y),e.at(x,y),e.at(x,v),e.at(p,v)],_=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);Pe(i,_<0?[...C].reverse():C,M-o,w-o,R2,C2,{bottom:!0})},b=o;for(let[p,x]of[[0,h],[a,u]]){if(!x)continue;let y=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,p,y-c),s(e.u1,p,y-c),Is)}for(let[p,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,w-c,w)}let g=[];for(let[p,x]of[[0,h],[a-l,u]]){if(!x)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let w=e.u0+y*M/v;M===0&&!f||M===v&&!d||g.push([w,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,x]of g){let y=n.y(x+l/2)-.03-c;m(p,p+l,x,x+l,b,y)}}function G2(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Xo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Tm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},en=.2,H2=-.06,W2=.01,Yo=8,Oc=.42,ff=.42;function Cm(i,t,e,n=[],r=[],s){let{walls:o,open:a}=fi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,A,D,N)=>{let U=N?.slope?Math.min(D,Tr(N.slope,R,A)):D,k=s?s(R,A):null;return k===null?U:Math.max(.05,Math.min(U,k))},c=(R,A)=>{let D=s?s(R,A):null;return D!==null&&D<H2},h=(R,A,D,N,U,k)=>{if(!s&&!k?.slope)return U;let z=U,Z=Math.max(2,Math.ceil((N-D)/.25)+1);for(let X=0;X<Z;X++){let Y=D+(N-D)*X/(Z-1);z=Math.min(z,l(R[0]+A[0]*Y,R[1]+A[1]*Y,U,k))}return z},u=new ee(!0,!0),f=[],d=new Ne,m=[];for(let R of i.rooms){if(R.points.length<3)continue;let A=Uc(R.points),D=Tm[R.floor_material]??Tm.wood,N=new j(D.color),U=n.flatMap($=>{if(F0($,A))return[$];if(!P0($))return[];let st=As(A,$);return st.length>=3&&Math.abs($n(st))>.01?[Uc(st)]:[]}),k=L0(U).map($=>D0(Uc($),.003));m.push(...k);let z=[...A,...k.flat()],Z=u.count;for(let[$,st,H]of pn(A,k)){let V=z[$],tt=z[st],ct=z[H];u.tri([V[0],0,V[1]],[ct[0],0,ct[1]],[tt[0],0,tt[1]],N,N,N,[V[0],V[1],ct[0],ct[1],tt[0],tt[1]],Qt,D.tile)}f.push({roomId:R.id,start:Z,end:u.count,color:D.color});let X=new j(Xo.slab),Y=$=>{for(let st=0;st<$.length;st++){let H=$[st],V=$[(st+1)%$.length];u.tri([H[0],-en,H[1]],[H[0],0,H[1]],[V[0],0,V[1]],X),u.tri([H[0],-en,H[1]],[V[0],0,V[1]],[V[0],-en,V[1]],X)}};Y(A);for(let $ of k){Y([...Uc($)].reverse());for(let st=0;st<$.length;st++){let H=$[st],V=$[(st+1)%$.length];d.seg([H[0],.006,H[1]],[V[0],.006,V[1]],tr),d.seg([H[0],-en,H[1]],[V[0],-en,V[1]],Ti)}}}let b=new Map,g=[],p=new Map,x=new Map;for(let R of o){if(!R.free)continue;let A=f0(R,i.rooms);A!==null&&x.set(R,A)}for(let R of o){let A="interior",D=null,N=x.get(R);if(R.exterior||N!==void 0){let k=R.b[0]-R.a[0],z=R.b[1]-R.a[1],Z=Math.hypot(k,z)||1,X=N===!1?-1:1,Y=[X*z/Z,-X*k/Z],$=(Math.round(Math.atan2(Y[1],Y[0])/(2*Math.PI)*Yo)%Yo+Yo)%Yo;A=`s${$}`;let st=$/Yo*2*Math.PI;D=[Math.cos(st),Math.sin(st)]}let U=b.get(A);U===void 0&&(U=g.length,b.set(A,U),g.push(D)),p.set(R,U)}let y=new Map,v=[];for(let R of i.openings){let A=ws(R,i.rooms,i.walls??[]);if(!A)continue;let D=Ts(o,R,A);if(!D)continue;let{wall:N,s:U}=D,k=kc([N.b[0]-N.a[0],N.b[1]-N.a[1]]),z=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1]),Z=U-R.width/2<-1e-6?Uh(o,N,!1):null,X=U+R.width/2>z+1e-6?Uh(o,N,!0):null,Y=re=>re?Math.hypot(re.b[0]-re.a[0],re.b[1]-re.a[1]):0,$=-Y(Z),st=z+Y(X),H=Math.min(R.width,st-$),V=Math.max($,Math.min(st-H,U-H/2)),tt=A.room.points,ct=x.get(N),it=N.free?ct??k[0]*(tt[1][0]-tt[0][0])+k[1]*(tt[1][1]-tt[0][1])>0:N.exterior||N.roomLeft===R.room_id,lt=[-k[1],k[0]],ut=it?lt:[-lt[0],-lt[1]],dt=Math.min(h(N.a,k,V,V+H,qo(N,i.height),N)-.02,R.sill+R.height),ot=Math.max(0,Math.min(R.sill,dt-.1)),xt=[ut[1],-ut[0]],vt=k[0]*xt[0]+k[1]*xt[1]>0,Xt={opening:R,bucket:p.get(N),start:[N.a[0]+k[0]*V,N.a[1]+k[1]*V],axis:k,width:H,toRoom:ut,faceRoom:it?N.left:N.right,faceOut:it?N.right:N.left,sill:ot,top:dt,hingeAtStart:R.hinge==="left"===vt,exterior:N.exterior||ct!==void 0};v.push(Xt);let Jt=y.get(N);Jt||y.set(N,Jt=[]),Jt.push({s0:V,s1:V+H,sill:ot,top:dt,info:Xt});for(let re of[Z,X]){if(!re)continue;let _e=ge=>(N.a[0]+k[0]*ge-re.a[0])*k[0]+(N.a[1]+k[1]*ge-re.a[1])*k[1],Ie=Math.max(0,_e(V)),K=Math.min(Y(re),_e(V+H));if(K-Ie<1e-4)continue;let Ge=y.get(re);Ge||y.set(re,Ge=[]),Ge.push({s0:Ie,s1:K,sill:ot,top:dt,info:Xt,cont:!0})}}let M=Math.min(i.cut_height,i.height),w=new ee;for(let R of o){let A=p.get(R),D=kc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),N=(y.get(R)??[]).sort((V,tt)=>V.s0-tt.s0),U=qo(R,i.height),k=[],z=[-1/0,...new Set(N.flatMap(V=>[V.s0,V.s1])).values(),1/0].sort((V,tt)=>V-tt);for(let V=0;V+1<z.length;V++){let tt=z[V],ct=z[V+1];if(ct-tt<1e-6)continue;let it=Number.isFinite(tt)&&Number.isFinite(ct)?(tt+ct)/2:Number.isFinite(tt)?tt+1:ct-1,lt=N.filter(ot=>ot.s0<it&&ot.s1>it).map(ot=>[ot.sill,ot.top]).sort((ot,xt)=>ot[0]-xt[0]),ut=[],dt=-en;for(let[ot,xt]of lt)ot>dt+1e-4&&ut.push([dt,ot<1e-4?-W2:ot]),dt=Math.max(dt,xt);U>dt+1e-4&&ut.push([dt,U]),k.push({t0:tt,t1:ct,ranges:ut})}let Z=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),X=(s||R.slope)&&h(R.a,D,0,Z,U,R)<U-.001,Y=X?k.flatMap(V=>{let tt=Math.max(V.t0,-.5),ct=Math.min(V.t1,Z+.5),it=Math.max(1,Math.ceil((ct-tt)/.3));return Array.from({length:it},(lt,ut)=>({t0:ut===0?V.t0:tt+(ct-tt)*ut/it,t1:ut===it-1?V.t1:tt+(ct-tt)*(ut+1)/it,ranges:V.ranges,inner0:ut>0,inner1:ut<it-1}))}):k.map(V=>({...V,inner0:!1,inner1:!1})),$=V=>(V[0]-R.a[0])*D[0]+(V[1]-R.a[1])*D[1],st=V=>{if(!s)return[V];let tt=df(R.footprint,R.a,D,V.t0,V.t1),ct=tt.filter(([dt,ot])=>c(dt,ot)).length;if(ct===0)return[V];if(ct===tt.length)return[];let it=Math.max(V.t0,-.5),lt=Math.min(V.t1,Z+.5),ut=Math.max(1,Math.ceil((lt-it)/.05));return Array.from({length:ut},(dt,ot)=>({t0:ot===0?V.t0:it+(lt-it)*ot/ut,t1:ot===ut-1?V.t1:it+(lt-it)*(ot+1)/ut,ranges:V.ranges,inner0:ot>0||V.inner0,inner1:ot<ut-1||V.inner1})).filter(dt=>!df(R.footprint,R.a,D,dt.t0,dt.t1).every(([ot,xt])=>c(ot,xt)))},H=V=>{let tt=dt=>l(R.a[0]+D[0]*dt,R.a[1]+D[1]*dt,U,R),ct=Math.max(V.t0,0),it=Math.min(V.t1,Z);if(it-ct<.01||(tt(ct)-M)*(tt(it)-M)>=0)return[V];let lt=tt(it)>M;for(let dt=0;dt<24;dt++){let ot=(ct+it)/2;tt(ot)>M===lt?it=ot:ct=ot}let ut=lt?it:ct;return[{...V,t1:ut,inner1:!0},{...V,t0:ut,inner0:!0}]};for(let V of X?Y.flatMap(st).flatMap(H):Y){let tt=df(R.footprint,R.a,D,V.t0,V.t1);if(tt.length<3)continue;let ct=(ut,dt)=>Math.abs($(ut)-dt)<1e-4,it=(ut,dt)=>V.inner0&&ct(ut,V.t0)&&ct(dt,V.t0)||V.inner1&&ct(ut,V.t1)&&ct(dt,V.t1),lt=X?Math.min(...tt.map(([ut,dt])=>l(ut,dt,U,R))):U;for(let[ut,dt]of V.ranges){let ot=Math.min(dt,X?Math.max(...tt.map(([Jt,re])=>l(Jt,re,U,R))):dt);if(ot-ut<1e-4||lt-ut<.01)continue;let xt=ut>.01,vt=X&&dt>lt,Xt=(Jt,re)=>Math.min(dt,l(Jt,re,U,R));if(ut<M-1e-6){let Jt=ot>M+1e-6?H0+A:er+A,re=vt&&lt<M?(_e,Ie)=>Math.min(M,Xt(_e,Ie)):Math.min(ot,M);Pe(w,tt,ut,re,Xo.wall,Xo.wallTop,{aoFrom:0,bottom:xt,fold:er+A,topFold:Jt,skipSide:it})}ot>M+1e-6&&lt>M-1e-6&&Pe(w,tt,Math.max(ut,M),vt?Xt:ot,Xo.wall,Xo.wallTop,{aoFrom:0,fold:A,bottom:xt&&ut>=M,skipSide:it})}}}let C=o.flatMap(R=>R.footprint),_=q2(o,C),T=new Ne;T.p.push(...d.p),T.c.push(...d.c),T.f.push(...d.f);let S=(R,A)=>(y.get(R)??[]).filter(A);for(let R of _.edges){let A=p.get(R.wall);for(let[N,U]of Bc(R,S(R.wall,k=>k.sill<=.005)))T.seg([N[0],.004,N[1]],[U[0],.004,U[1]],G0);for(let[N,U]of Bc(R,S(R.wall,k=>k.sill<M&&k.top>M)))T.seg([N[0],M,N[1]],[U[0],M,U[1]],tf,Ac+A);let D=qo(R.wall,i.height);for(let[N,U]of Bc(R,S(R.wall,k=>k.top>=D-.021))){if(!s&&!R.wall.slope){T.seg([N[0],D,N[1]],[U[0],D,U[1]],tr,D<=M+1e-6?er+A:A);continue}let k=Math.max(1,Math.ceil(Math.hypot(U[0]-N[0],U[1]-N[1])/.3));for(let z=0;z<k;z++){let Z=[N[0]+(U[0]-N[0])*z/k,N[1]+(U[1]-N[1])*z/k],X=[N[0]+(U[0]-N[0])*(z+1)/k,N[1]+(U[1]-N[1])*(z+1)/k];if(c(Z[0],Z[1])&&c(X[0],X[1]))continue;let Y=l(Z[0],Z[1],D,R.wall),$=l(X[0],X[1],D,R.wall);T.seg([Z[0],Y,Z[1]],[X[0],$,X[1]],tr,Math.max(Y,$)<=M+1e-6?er+A:A)}}}let E=(R,A)=>l(A[0],A[1],qo(R,i.height),R);for(let R of _.corners){if(c(R.p[0],R.p[1]))continue;let A=R.walls.reduce((N,U)=>E(U,R.p)>E(N,R.p)+1e-6?U:N,R.wall),D=l(R.p[0],R.p[1],qo(A,i.height),A);T.segSplit([R.p[0],.004,R.p[1]],[R.p[0],D,R.p[1]],Ti,Math.min(M,D),p.get(A))}for(let R of _.joints){let[A,D]=R.walls,N=[E(A,R.a),E(D,R.a)],U=[E(A,R.b),E(D,R.b)];if(Math.abs(N[0]-N[1])<.01&&Math.abs(U[0]-U[1])<.01)continue;let k=N[1]+U[1]>=N[0]+U[0]?D:A,z=p.get(k),Z=Math.max(...N),X=Math.max(...U);T.seg([R.a[0],Z,R.a[1]],[R.b[0],X,R.b[1]],tr,Math.max(Z,X)<=M+1e-6?er+z:z);for(let[Y,$]of[[R.a,N],[R.b,U]]){let st=Math.min(...$),H=Math.max(...$);H-st>.01&&T.segSplit([Y[0],st,Y[1]],[Y[0],H,Y[1]],Ti,M,z)}}for(let R of y.values())for(let A of R)A.cont||X2(T,A,M);let F=$2(_.edges,i.rooms,y),I=new ee;fm(w,T,i,I);for(let R of r)hf(w,T,R.face,R.field,i.elevation);let P=[];for(let R of i.furniture){if(r0(R.type))continue;let A=w.count,D=T.p.length/6,N=R,U=sn(i,N);if(gc.has(N.type)){let k=bc(o,N,i.height,U);N={...N,x:k.x,z:k.z},U=k.y}Pc(w,T,F,N,U),U+N.h>M+.05&&(W0(w,A,M,ef),X0(T,D,M,ef)),P.push({id:N.id,start:A,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:m,walls:w.geometry(),water:I.geometry(),lines:T.geometry(),shadow:F.geometry(),buckets:g,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(R=>p.get(R)),furnitureTris:P,roofUnder:s}}function X2(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Qt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ti,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ti,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ti,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ti,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ti,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),tf,Ac+r)}function df(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=Em(o,a=>s(a)-n)),Number.isFinite(r)&&(o=Em(o,a=>r-s(a))),o}function Em(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var Am=i=>Math.round(i*1e3),$o=i=>`${Am(i[0])},${Am(i[1])}`,Rm=(i,t)=>{let e=$o(i),n=$o(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Y2(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];$o(f)!==$o(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function q2(i,t){let e=i.map(h=>({wall:h,edges:Y2(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let m=Rm(f,d);n.set(m,(n.get(m)??0)+1);let b=r.get(m);b?b.walls.push(h):r.set(m,{a:f,b:d,walls:[h]})}let s=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&s.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let o=[],a=new Map,l=(h,u,f)=>{let d=$o(h),m=a.get(d);m||a.set(d,m={p:h,wall:u,walls:[],d:[]}),m.d.push(f),m.walls.includes(u)||m.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Rm(f,d))!==1)continue;let m=Math.hypot(d[0]-f[0],d[1]-f[1]);if(m<1e-4)continue;o.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/m,(d[1]-f[1])/m];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(m=>d.some(b=>Math.abs(m[0]*b[1]-m[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:o,corners:c,joints:s}}function Bc(i,t){if(!t.length)return[[i.a,i.b]];let e=kc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=kc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function $2(i,t,e){let n=new ee,r=new j(ff,ff,ff),s=new j(1,1,1),o=.002;for(let a of i)for(let[l,c]of Bc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&jt(m,p.points)))continue;let b=[l[0]+d[0]*Oc,l[1]+d[1]*Oc],g=[c[0]+d[0]*Oc,c[1]+d[1]*Oc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function Pm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Ji),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(n0.has(s.type)||ye(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(Ji);return[...e,...r]}function qo(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function kc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Uc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var Z2=new j(1516340),K2=new j(527897),pf=new j(1779256),Zo=new j(1120808),J2=new j(4163256),Im=new j(5995161),j2=new j(2240842),Q2=new j(1318704),tS=.35,Ls=.8,eS=.2,Lm=.1;function nS(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||qn(o.type)||!jt(e,o.points)||(r=Math.max(r,s.elevation+wr(s,o)+ys[o.type]-t.elevation));return r>n?r-n:0}function Fm(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=$h(i,t);if(!r)return null;let s=(m,b)=>_s(m,b)-t.elevation,o=n&&r.some(([m,b])=>s(m,b)<-en-.03);if(!o&&!Zh(i,t))return null;let a=t.height,l=-tS,c=(m,b)=>Math.min(a,_s(m,b)-t.elevation),h=new ee,u=new ee,f=new Ne,d=(m,b,g,p,x,y,v,M)=>{let w=[b[0]-m[0],b[2]-m[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(m,b,g,y,y,v),M.tri(m,g,p,y,v,v)):(M.tri(m,g,b,y,v,y),M.tri(m,p,g,y,v,v))};for(let m=0;m<r.length;m++){let b=r[m],g=r[(m+1)%r.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<1e-4)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],y=[x[1],-x[0]],v=[(b[0]+g[0])/2+y[0]*.05,(b[1]+g[1])/2+y[1]*.05];jt(v,r)&&(y=[-y[0],-y[1]]);let M=(S,E=.012)=>[b[0]+x[0]*S+y[0]*E,b[1]+x[1]*S+y[1]*E],w=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let E=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,F=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,I=(E-b[0])*x[0]+(F-b[1])*x[1];Math.abs((E-b[0])*y[0]+(F-b[1])*y[1])>.08||I<-.05||I>p+.05||C0(i,t,S.exterior,S.sill,[E,F])&&w.push({s0:Math.max(0,I-S.width/2-Lm),s1:Math.min(p,I+S.width/2+Lm),bottom:Math.max(l+.05,S.sill-eS),rim:S.opening.well_rim??0})}let C=new Set([0,p]);for(let S of w)C.add(S.s0),C.add(S.s1);let _=[...C].sort((S,E)=>S-E),T=[];for(let S=0;S<_.length-1;S++){let E=Math.max(1,Math.ceil((_[S+1]-_[S])/.5));for(let F=0;F<E;F++)T.push(_[S]+(_[S+1]-_[S])*F/E)}T.push(p);for(let S=0;S<T.length-1;S++){let E=T[S],F=T[S+1],I=w.find(Z=>E>=Z.s0-1e-6&&F<=Z.s1+1e-6),P=M(E),R=M(F),A=c(P[0],P[1]),D=c(R[0],R[1]),N=I?Math.min(A,I.bottom):A,U=I?Math.min(D,I.bottom):D;if(N>l+.01||U>l+.01){let Z=Math.min(N,l),X=Math.min(U,l);d([P[0],Z,P[1]],[R[0],X,R[1]],[R[0],Math.max(U,l),R[1]],[P[0],Math.max(N,l),P[1]],y,K2,Z2,h)}let k=s(P[0],P[1]),z=s(R[0],R[1]);if(o&&(k<-en-.01||z<-en-.01)&&d([P[0],Math.min(k,-en),P[1]],[R[0],Math.min(z,-en),R[1]],[R[0],-en,R[1]],[P[0],-en,P[1]],y,Q2,j2,h),A>l||D>l||o&&(k<-en||z<-en)){let Z=o?Math.min(k,Math.max(A,l)):Math.max(A,l),X=o?Math.min(z,Math.max(D,l)):Math.max(D,l);f.seg([P[0],Z+.004,P[1]],[R[0],X+.004,R[1]],J2)}}for(let S of w){let E=M(S.s0,0),F=M(S.s1,0),I=[E[0]+y[0]*Ls,E[1]+y[1]*Ls],P=[F[0]+y[0]*Ls,F[1]+y[1]*Ls],R=[(E[0]+F[0]+I[0]+P[0])/4,(E[1]+F[1]+I[1]+P[1])/4],A=nS(i,t,R,c(R[0],R[1])),D=Math.max(S.rim,A>0?A+.02:0),N=Y=>c(Y[0],Y[1])+D,U=S.bottom,k=(Y,$)=>[Y[0],$,Y[1]];u.tri(k(E,U),k(F,U),k(P,U),Zo),u.tri(k(E,U),k(P,U),k(I,U),Zo);let z=(Y,$)=>{u.tri(k(Y,U),k($,U),k($,N($)),Zo,Zo,pf),u.tri(k(Y,U),k($,N($)),k(Y,N(Y)),Zo,pf,pf)};z(E,I),z(F,P),z(I,P);let Z=Y=>[Y[0],N(Y)+.01,Y[1]];for(let[Y,$]of[[E,F],[F,P],[P,I],[I,E]])f.seg(Z(Y),Z($),Im);let X=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let Y=1;Y<X;Y++){let $=Y/X,st=[E[0]+(F[0]-E[0])*$,E[1]+(F[1]-E[1])*$];f.seg(Z(st),Z([st[0]+y[0]*Ls,st[1]+y[1]*Ls]),Im)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var Dm=i=>Math.round(i*1e3)/1e3;function iS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Nm(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&jt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=An(a)>=0?1:-1,c=Ji({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Ji({...t,x:h,z:u});for(let m=0;m<a.length;m++){let b=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<.05)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],y=[-x[1]*l,x[0]*l],v=iS(i,o.id,b,g)?r/2:0,M=0;d.forEach((w,C)=>{let _=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(_<-.01||_>p+.01)return;let T=(w[0]-b[0])*y[0]+(w[1]-b[1])*y[1]-v,S=c[C];(S[0]-b[0])*y[0]+(S[1]-b[1])*y[1]-v<-s||T<M&&(M=T)}),M<-1e-4&&(h-=y[0]*M,u-=y[1]*M)}}return[Dm(h),Dm(u)]}var rS=500,sS=1e3;function Om(i,t){let e=t-i.timeStamp;return e>sS&&e<6e4}var Um=.12,Bm=1.35,oS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,zc=class{view={target:new W,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=oS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=mf(this.view.phi+this.velocity.phi,Um,Bm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},rS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Om(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=mf(this.view.phi+c,Um,Bm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Om(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=mf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new W(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new W(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function mf(i,t,e){return Math.min(e,Math.max(t,i))}var hR=[16,8,0].map(i=>(16758087>>i&255)/255);var aS=2e3;function lS(i){return(1-Math.cos(i/aS*Math.PI*2))/2}var Vc=class{entries=new Map;orange=new j(16758087).toArray();colors;changed;constructor(t,e=()=>{}){this.colors=t,this.changed=e}get active(){return this.entries.size>0}setRunning(t,e){let n=new Set(t.map(r=>r.id));for(let[r,s]of this.entries)n.has(r)||(this.colors.set(s.base,s.start),this.changed(s.start,s.base.length),this.entries.delete(r));for(let r of t){if(this.entries.has(r.id))continue;let s=r.start*9;this.entries.set(r.id,{start:s,base:this.colors.slice(s,r.end*9),at:e})}}update(t){for(let{start:e,base:n,at:r}of this.entries.values()){let s=lS(t-r);for(let o=0;o<n.length;o+=3){let a=Math.min(1,.65+Math.max(n[o],n[o+1],n[o+2]));for(let l=0;l<3;l++)this.colors[e+o+l]=n[o+l]+(this.orange[l]*a-n[o+l])*s}this.changed(e,n.length)}}};function mi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Wc=5,Gc=512,km=.7,Hc=class{projectors=new Map;loader=new br;loggedIds="";depthMaterial=new Yt({colorWrite:!1,side:se});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Ye(Gc,Gc);a.depthTexture=new ai(Gc,Gc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,km,40),target:a,matrix:new we,uniforms:{uProjMat:{value:new we},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(Wc),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`MasterPlan3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Oe;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`MasterPlan3D lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`MasterPlan3D lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`MasterPlan3D lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of o.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),o.overlays.delete(b));for(let b of n){let g=o.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new Ct(b.geometry,this.material(o,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),o.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let h=o.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/o.aspect)*180/Math.PI,h.aspect=o.aspect,h.far=a.reach,h.near=km,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),o.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),m=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=m;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Yt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?mi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function zm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Vm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=zm(s,o),c=zm(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],m=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,p=(1-g)*(1-g),x=2*(1-g)*g,y=g*g;n.push([p*d[0]+x*o[0]+y*m[0],p*d[1]+x*o[1]+y*m[1],p*d[2]+x*o[2]+y*m[2]])}}return n.push(i[i.length-1]),n}var Gm=new j(7568261),Hm=new j(4869974),cS=new j(3116287),Wm=new j(3948872),gf=Nr([.35,.85,.4]),Xm=10;function Nr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ko(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ym(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Nr(Ko(i,t));return[e,Nr(Ko(i,e))]}function Ei(i,t){let e=.5+.5*Math.max(0,t[0]*gf[0]+t[1]*gf[1]+t[2]*gf[2]);return i.clone().multiplyScalar(e)}function Fs(i,t,e,n,r,s=!1){let o=Nr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Ym(o),c=(h,u)=>{let f=u/Xm*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Xm;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),m=c(e,h+1);i.tri(u.p,m.p,d.p,Ei(r,u.n),Ei(r,m.n),Ei(r,d.n)),i.tri(u.p,f.p,m.p,Ei(r,u.n),Ei(r,f.n),Ei(r,m.n)),s&&(i.tri([...t],f.p,u.p,Ei(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,m.p,Ei(r,o)))}}function uS(i,t,e,n,r,s,o,a){let l=Nr(Ko(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Ei(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function qm(i,t){if(t.points.length<2)return;let e=t.radius,n=Vm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?Gm.clone().multiplyScalar(.55):Gm;Fs(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);Fs(i,o,a,e*1.22,Hm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);Fs(i,o,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Fs(i,c,h,e*1.3,Hm,!0)}}else{let[o,a]=s(.055);Fs(i,o,a,e*1.4,Wm,!0);let[l]=Ym(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Fs(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Wm,!0);let u=r.open===!1?Nr(Ko(r.dir,c)):r.dir,f=Nr(Ko(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];uS(i,d,u,f,.1,.028,.012,cS)}}}var bf=1.62,Xc=.2,xf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=fi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=ws(a,e.rooms,e.walls??[]);if(!c)continue;let h=Ts(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],m=Math.hypot(f,d)||1,b=f/m,g=d/m,p=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,y=u.right+.45,v=[[p[0]-g*x,p[1]+b*x],[p[0]+g*y,p[1]-b*y]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&jt(v[1],w.points)))continue;let M=o.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),o.set(u,M),this.doors.push({centre:p,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=Xc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Xc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Xc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let m=this.path(d,e);return m?[d,...m]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let m=this.path(t,d);return m?[...m,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>hS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let m=Xc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,p])=>[d.c[0]+d.u[0]*g*(d.hw+m)+b[0]*p*(d.hd+m),d.c[1]+d.u[1]*g*(d.hw+m)+b[1]*p*(d.hd+m)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let h=new Map,u=(d,m)=>{let b=d<m?`${d}:${m}`:`${m}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(s[d],s[m]),h.set(b,g)),g};for(;;){let d=-1;for(let m=0;m<o;m++)!c[m]&&a[m]<1/0&&(d<0||a[m]<a[d])&&(d=m);if(d<0)return null;if(d===1)break;c[d]=!0;for(let m=0;m<o;m++){if(c[m]||m===d)continue;let b=Math.hypot(s[d][0]-s[m][0],s[d][1]-s[m][1]);a[d]+b>=a[m]||u(d,m)&&(a[m]=a[d]+b,l[m]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=ws(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=Ts(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],m=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>$m(s)-$m(r))[0],n=e?this.freeNear(Ki(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function hS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function $m(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var vf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+bf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-bf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Ki(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[m[1]*b[2]-m[2]*b[1],m[2]*b[0]-m[0]*b[2],m[0]*b[1]-m[1]*b[0]],p=[-g[0],-g[1],-g[2]],x=[m[0]+b[0]*r*u*f+p[0]*s*u,m[1]+b[1]*r*u*f+p[1]*s*u,m[2]+b[2]*r*u*f+p[2]*s*u];if(x[1]>=-.02)return null;let y=bf/-x[1];return[l+x[0]*y,c+x[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function fS(i,t){let e=ye(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function yf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?fS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}var Zm=8,Km=1024,Ai=6,Yc=class{group=new Ce;shadow;target=null;arc=new Ce;glow=mS();textures=[];constructor(){this.shadow=new Ct(new Gn(1,1),new Yt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,s,o,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Km,Math.max(32,Math.ceil((h-l)*Zm))),d=Math.min(Km,Math.max(32,Math.ceil((u-c)*Zm)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ye(f,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let m=new si,b=w=>{let C=new Float32Array(w.length/2*3);for(let T=0,S=0;T<w.length;T+=2,S+=3)C.set([w[T],-w[T+1],0],S);let _=new Vt;return _.setAttribute("position",new Nt(C,3)),_},g=new Ct(b(e),new Yt({color:16777215,side:se})),p=[];for(let w of r)for(let C of pn(w))for(let _ of C)p.push(w[_][0],w[_][1]);let x=new Ct(b(p),new Yt({color:0,transparent:!0,opacity:0,blending:Ln,side:se}));x.renderOrder=1,m.add(g,x);let y=new In(l,h,-c,-u,.1,10);y.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(m,y),t.setRenderTarget(v);for(let w of[g,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,s,(c+u)/2);let M=this.shadow.material;M.opacity=o,M.color.set(a),this.shadow.visible=o>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Tn:Ee,n=(s,o)=>{let a=pS(t.points.map(c=>c.at),s,t.points.map(c=>dS(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new Ct(a,new Yt({vertexColors:!0,transparent:!0,opacity:o*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new zi(Jm(t.hours.flat()),new Si({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let s=this.sprite(gS(t.light),t.size*5,t.size*5,t.fade,e);s.position.set(...t.sun),this.arc.add(s)}for(let s of t.labels){let o=this.sprite(bS(`${s.rising?"\u2191":"\u2193"} ${s.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Tn,!0);o.position.set(...s.at),this.arc.add(o)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:s}=t.ring,o=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,o,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(Jm(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Tn:Ee,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),s.forEach((h,u)=>{let f=this.sprite(xS(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Tn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,s,o=!1){this.textures.push(t);let a=new no(new cs({map:t,transparent:!0,opacity:r,blending:s,depthWrite:!1,depthTest:!o}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Jm(i){let t=new Vt;return t.setAttribute("position",new Nt(i,3)),t}function dS(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new j(t?13778970:16730666),r=new j(t?14711552:16753978),s=new j(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(s,(e-.4)/.6)}function pS(i,t,e){let n=[],r=[],s=[],o=new W(0,1,0);for(let l=0;l<i.length;l++){let c=new W(...i[l]),h=new W(...i[Math.max(0,l-1)]),f=new W(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new W().crossVectors(f,o);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let m=new W().crossVectors(d,f).normalize();for(let b=0;b<Ai;b++){let g=b/Ai*Math.PI*2,p=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(m,Math.sin(g)*t);n.push(p.x,p.y,p.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ai;b++){let g=(l-1)*Ai+b,p=(l-1)*Ai+(b+1)%Ai,x=l*Ai+b,y=l*Ai+(b+1)%Ai;s.push(g,x,y,g,y,p)}}let a=new Vt;return a.setAttribute("position",new Nt(n,3)),a.setAttribute("color",new Nt(r,3)),a.setIndex(s),a}function qc(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function mS(){let[i,t]=qc(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new vn(i)}function gS(i){let[t,e]=qc(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let s=r%2===0?124:92,o=e.createLinearGradient(0,0,0,-s);o.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),o.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-s),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new vn(t)}function bS(i,t){let[e,n]=qc(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),s=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(s,10,r,84,42):n.rect(s,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new vn(e)}function xS(i,t,e){let[n,r]=qc(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new vn(n)}var vS=40;function jm(i,t,e,n,r){let s=[];if(n<=0)return s;let o=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(vS,Math.max(0,h-r)*o);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>s.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),m=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,p]of pn(h.points))l(d[b],d[g],d[p]),l(m[b],m[g],m[p]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],m[g]),l(d[b],m[g],m[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return s}function Qm(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let s=0;s<i.length;s+=2)t=Math.min(t,i[s]),n=Math.max(n,i[s]),e=Math.min(e,i[s+1]),r=Math.max(r,i[s+1]);return[t,e,n,r]}function _f(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=yS(c.id)%1e3/1e3;for(let b of Go(l,c)){let[g,p,x,y]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[x,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,C,_]=v[M];e.push(w[0],w[1],w[2]),n.push(C,_),r.push(u,f),s.push(d)}}let m=e.length/3-h;m&&o.push({id:c.id,start:h,count:m})}if(!e.length)return null;let a=new Vt;return a.setAttribute("position",new Nt(e,3)),a.setAttribute("uv",new Nt(n,2)),a.setAttribute("aCells",new Nt(r,2)),a.setAttribute("aPhase",new Nt(s,1)),a.setAttribute("aLevel",new Nt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Jo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Mf(i){let t=new Yt({transparent:!0,blending:Ee,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function yS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var eg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_S=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,MS=eg,SS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function tg(i,t){let e=[];for(let[r,s,o]of pn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Vt;return n.setAttribute("position",new Nt(e,3)),n}function ng(i,t){let e=new Ce;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Ct(tg(n.points,o),new fn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:eg,fragmentShader:_S,transparent:!0,blending:Ee,depthWrite:!1,side:se}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),m=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=As(n.points,m);if(b.length>=3){let g=new Ct(tg(b,n.y+.03),new fn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:MS,fragmentShader:SS,transparent:!0,side:se}));g.renderOrder=6,e.add(g);let p=[];for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Vt;x.setAttribute("position",new Nt(p,3)),e.add(new qe(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function ig(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var rg=["neon","blueprint","day"];function sg(i){return rg.indexOf(i)}var Ds={value:new W(.22,.88,1)},Ns={value:0};function og(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var wS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function nn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Ds,s.uniforms.uAccentOn=Ns,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${wS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function jo(i){return i==="day"?Tn:Ee}var Ri=.012,TS=.012;function lg(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(p,x,y,v,M,w,C)=>{for(let _ of[p,x,y,p,y,v])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(C)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let y=p.points.map(E=>E[0]),v=p.points.map(E=>E[1]),M=Math.min(...y),w=Math.min(...v),C=Math.max(...y),_=Math.max(...v),T=Math.max(1,Math.ceil((C-M)/r)),S=Math.max(1,Math.ceil((_-w)/r));for(let E=0;E<T;E++)for(let F=0;F<S;F++){let I=M+E*r,P=w+F*r,R=Math.min(I+r,C),A=Math.min(P+r,_),D=As(p.points,[[I,P],[R,P],[R,A],[I,A]]),N=D.length>=3?Math.abs(IS(D)):0;if(N<1e-4)continue;let U=LS(D);if(!s.some(k=>jt(U,k))){if(N>(R-I)*(A-P)-1e-6){u([I,Ri,P],[I,Ri,A],[R,Ri,A],[R,Ri,P],[0,1,0],x,-1);continue}for(let[k,z,Z]of pn(D)){let X=D[k],Y=D[Z],$=D[z];($[1]-X[1])*(Y[0]-X[0])-($[0]-X[0])*(Y[1]-X[1])<0&&([X,Y]=[Y,X]),u([X[0],Ri,X[1]],[$[0],Ri,$[1]],[Y[0],Ri,Y[1]],[Y[0],Ri,Y[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!qn(p.type));if(d.length){let p=d.flatMap(_=>_.points.map(T=>T[0])),x=d.flatMap(_=>_.points.map(T=>T[1])),y=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-y)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),C=(_,T,S)=>hm(i,_)-Io(i,_,T,S)+Ri;for(let _=0;_<M;_++)for(let T=0;T<w;T++){let S=y+_*r,E=v+T*r,F,I=[S+r/2,E+r/2];F=d.find(R=>R.type==="pool"&&jt(I,R.points));for(let R=d.length-1;R>=0&&!F;R--)jt(I,d[R].points)&&(F=d[R]);if(!F)continue;let P=(R,A)=>[R,C(F,R,A),A];u(P(S,E),P(S,E+r),P(S+r,E+r),P(S+r,E),[0,1,0],f,-1)}}let m=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let y=Math.min(i.height,p.height??i.height),v=Math.min(m,y-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],C=Math.hypot(M,w);if(C<.05)return;let _=[M/C,w/C],T=[-_[1],_[0]],S=e[x],E=AS(p,_,C,n),F=(D,N)=>D?i.rooms.findIndex(U=>U.id===D):N?f:-1,I=p.slope?{h:Math.min(y,Tr(p.slope,p.a[0],p.a[1])),h1:Math.min(y,Tr(p.slope,p.b[0],p.b[1]))}:{h:y};b.push({a:p.a,b:p.b,...I,ra:F(p.roomLeft,!1),rb:F(p.roomRight,p.exterior),gaps:E});let P=(D,N,U)=>[N,U,...D.filter(k=>k>N+.005&&k<U-.005)].sort((k,z)=>k-z).filter((k,z,Z)=>z===0||k>Z[z-1]+.005),R=P([v,(v+y)/2,...E.flatMap(D=>[D.y0+.01,D.y1-.01])],.02,y-.02),A=P(E.flatMap(D=>[D.s0,D.s1]),0,C);for(let D of[1,-1]){let N=D>0?p.roomLeft:p.roomRight,U=N?i.rooms.findIndex(Y=>Y.id===N):p.exterior?f:-1;if(U<0)continue;let k=(D>0?p.left:p.right)+TS,z=[T[0]*D,T[1]*D],Z=(Y,$)=>[p.a[0]+_[0]*Y+z[0]*k,$,p.a[1]+_[1]*Y+z[1]*k],X=Y=>{let $=Z(Y,0),st=o?.($[0],$[2]),H=p.slope?Tr(p.slope,p.a[0]+_[0]*Y,p.a[1]+_[1]*Y)-.02:1/0;return Math.min(st==null?1/0:st-.02,H)};for(let Y=0;Y<A.length-1;Y++){let $=A[Y+1]-A[Y],st=Math.max(1,Math.ceil($/r));for(let H=0;H<st;H++){let V=A[Y]+$/st*H,tt=A[Y]+$/st*(H+1),ct=(V+tt)/2;for(let it=0;it<R.length-1;it++){let lt=R[it],ut=R[it+1];if(ut-lt<.01)continue;let dt=(lt+ut)/2;if(E.some(Xt=>ct>Xt.s0&&ct<Xt.s1&&dt>Xt.y0&&dt<Xt.y1))continue;let ot=lt>=m-1e-6?S:er+S,xt=Math.min(ut,X(V)),vt=Math.min(ut,X(tt));if(!(xt<=lt+.005&&vt<=lt+.005)){if(xt<lt||vt<lt){let Xt=V+(tt-V)*(lt-xt)/(vt-xt);xt<lt?u(Z(Xt,lt),Z(tt,lt),Z(tt,vt),Z(Xt,lt),[z[0],0,z[1]],U,ot):u(Z(V,lt),Z(Xt,lt),Z(Xt,lt),Z(V,xt),[z[0],0,z[1]],U,ot);continue}u(Z(V,lt),Z(tt,lt),Z(tt,vt),Z(V,xt),[z[0],0,z[1]],U,ot)}}}}}});let g=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>cg(M,p)&&ES(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);y<0||v<0||g.push({id:p.opening.id,a:y,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b}}function cg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function ES(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function AS(i,t,e,n){let r=[];for(let s of n){if(!cg(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function RS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function CS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function ag(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=CS(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*m*(.2+.8*b)*RS(i.kind,l/u)}function ug(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,m]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let p of t){if(p.room!==d)continue;let x=p.x-h.x,y=p.y-h.y,v=p.z-h.z,M=Math.hypot(x,y,v)||1,w=ag(p,h.x,h.y,h.z,x/M,y/M,v/M);b[0]+=p.color[0]*w,b[1]+=p.color[1]*w,b[2]+=p.color[2]*w}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let s=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(h.room,[...s.get(h.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=s.get(l[h]);if(!u)continue;let f=h*3,d=0,m=0,b=0;for(let g of u){if(g.walls.length&&PS(g,g.walls,o[f],o[f+1],o[f+2]))continue;let p=ag(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,b+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function PS(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let m=(u*o-f*s)/h;if(m<0||m>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*m))continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&b>p.y0&&b<p.y1))return!0}return!1}function hg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Sf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&jt([t,e],r.points));return n<0?i.rooms.length:n}function Os(i,t){return i&&t>=0&&t<i.length?i[t]:t}function IS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function LS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Qo={open:0,open2:0,tilt:0,tilt2:0,cover:null},fg=2043986,dg=2769520,FS=2242399,wf=1845831,DS=1450554,$c=3662079,NS=1.2,OS=1.5,US=.5,BS=1846349,kS=2572395,zS=1120816,VS=1845831,pg=5995775,mg=9085695,Us=zt(3662079,.08),GS=.2;function Zc(i,t,e,n,r,s,o,a,l,c,h){let u=(d,m,b)=>t(d,m,b),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),zt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),zt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),zt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),zt(l.getHex(),.92)]];for(let[d,m,b,g,p]of f)i.tri(d,m,b,p,p,p,void 0,h),i.tri(d,b,g,p,p,p,void 0,h)}function pe(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return Zc(i,t,e,n,r,s,o,a,l,c,Qt);if(o>=h-1e-6)return Zc(i,t,e,n,r,s,o,a,l,c,u);Zc(i,t,e,n,r,s,o,h,l,c,Qt),Zc(i,t,e,n,r,s,h,a,l,c,u)}function or(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,m)=>{let b=v=>h?(o-v)/h:.5,g=t(e,r,f),p=t(n,r,f),x=t(n,r,d),y=t(e,r,d);i.tri(g,p,x,a,a,a,[0,b(f),1,b(f),1,b(d)],m),i.tri(g,x,y,a,a,a,[0,b(f),1,b(d),0,b(d)],m)};o<=l+1e-6?u(s,o,Qt):s>=l-1e-6?u(s,o,c):(u(s,l,Qt),u(l,o,c))}function HS(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),m=0,b=(s-r)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,b],l),i.tri(h,f,d,a,a,a,[0,m,1,b,0,b],l)}function WS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function XS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!WS(i,t)&&Zi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function gg(i,t,e,n,r,s,o,a,l){let c=XS(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&pe(e,n,-.04,h+.04,r+s,i.faceRoom+.07,u-.03,u,new j(wf),o,a,l),c.outside&&pe(e,n,-.03,h+.03,-i.faceOut-.06,r-s,u-.04,u-.02,new j(wf),o,a,l)}function bg(i,t,e){let n=new ee,r=new ee,s=new ee(!0),o=new j(fg),a=new j(dg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,m=s.count,b=t.get(u.opening.id)??Qo,g=u.width,{sill:p,top:x,bucket:y}=u,v=(_,T,S)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*T,S,u.start[1]+u.axis[1]*_+u.toRoom[1]*T],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",C=u.opening.type==="door"&&Zi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!C||u.opening.type==="garage"){let _=-u.faceOut-.012,T=u.faceRoom+.012,S=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),E=S?zt(16758087,.8):new j(fg),F=S?zt(16758087,1):new j(dg);pe(n,v,-.045,.02,_,T,0,x+.045,E,F,e,y),pe(n,v,g-.02,g+.045,_,T,0,x+.045,E,F,e,y),pe(n,v,.02,g-.02,_,T,x-.02,x+.045,E,F,e,y)}if(u.opening.type==="door"){let _=Zi(u.opening,u.exterior),T=a0(_),S=u.opening.swing==="out"?-1:1,E=S>0?u.faceRoom:-u.faceOut,F=u.opening.leaves===2,I=.02,P=g-.02,R=o0(g,_,u.hingeAtStart,u.opening);if(R){let k=-u.faceOut-.012,z=u.faceRoom+.012,Z=E-S*(T?.06:.04)/2,X=.06;for(let[Y,$]of R.panels)pe(n,v,Y,Y+X,k,z,.02,x-.02,o,a,e,y),pe(n,v,$-X,$,k,z,.02,x-.02,o,a,e,y),pe(n,v,Y+X,$-X,k,z,.02,.12,o,a,e,y),or(r,v,Y+X,$-X,Z,.12,x-.02,Us,e,y);I=R.x0,P=R.x1}let A=F?(P-I)/2-.004:P-I,D=T?.06:.04;T&&(pe(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new j(wf),a,e,y),u.exterior&&pe(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,zt(16758087,.55),zt(16758087,.85),e,Qt));let N=C?[]:[[u.hingeAtStart,b.open]];F&&!C&&N.push([!u.hingeAtStart,b.open2??0]);let U=u.opening.open_angle;for(let[k,z]of N){let Z=Math.min(1,Math.max(0,z)),X=_==="sliding"?0:U!=null&&U>0?(b.sensed?Z:Math.min(1,Z/US))*Math.min(170,U)*(Math.PI/180):Z*OS,Y=_==="sliding"?Z*A:0,$=(dt,ot,xt)=>{let vt=dt*Math.cos(X)-ot*Math.sin(X)-Y,Xt=E+S*(ot*Math.cos(X)+dt*Math.sin(X)+(Y?.05:0));return v(k?I+vt:P-vt,Xt,xt)},st=Z>.05?Qt:y,H=w?!!b.sensed&&Z<.05:Z>.9,V=H?zt(16758087,.7):new j(T?zS:BS),tt=H?zt(16758087,.9):new j(T?VS:kS);_==="glass"?(pe(n,$,0,.05,-D,0,.01,x-.01,V,tt,e,st),pe(n,$,A-.05,A,-D,0,.01,x-.01,V,tt,e,st),pe(n,$,.05,A-.05,-D,0,.01,.12,V,tt,e,st),pe(n,$,.05,A-.05,-D,0,x-.08,x-.01,V,tt,e,st),or(r,$,.05,A-.05,-D/2,.12,x-.08,Us,e,st)):pe(n,$,0,A,-D,0,.01,x-.01,V,tt,e,st);for(let dt of[.001,-D-.001])_==="front_glass"?or(r,$,.12,A-.12,dt,x*.55,x-.18,Us,e,st):T&&or(r,$,.1,.18,dt,.3,x-.3,Us,e,st);let ct=Math.min(1.05,x*.5),it=T?.3:.012,lt=T?A-.11:A-.16,ut=T?A-.08:A-.05;pe(n,$,lt,ut,.004,.05,ct-it,ct+it,new j(pg),new j(mg),e,st),pe(n,$,lt,ut,-D-.05,-D-.004,ct-it,ct+it,new j(pg),new j(mg),e,st),b.unlocked&&k===u.hingeAtStart&&pe(n,$,A-.022,A+.004,-D-.006,.006,.03,x-.03,zt($c,.85),zt($c,1),e,st)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),T=new j(13951231),S=u.faceRoom-.03,E=x*(1-_);_>.01&&or(s,v,.02,g-.02,S,E,x,T,e,y,.5);let F=(1-_)*x;F>.01&&HS(s,v,.02,g-.02,S,S+F,x+.03,T,y,.5)}else if(Zi(u.opening,u.exterior)==="glass_wall"){pe(n,v,0,.04,M-.025,M+.025,p,x,o,a,e,y),pe(n,v,g-.04,g,M-.025,M+.025,p,x,o,a,e,y),pe(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,o,a,e,y),pe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,o,a,e,y),gg(u,i,n,v,M,.025,a,e,y);let S=Math.max(1,Math.round((g-2*.04)/.9)),E=(g-2*.04)/S;for(let F=1;F<S;F++){let I=.04+F*E;pe(n,v,I-.02,I+.02,M-.025,M+.025,p+.03,x-.04,o,a,e,y)}for(let F=0;F<S;F++){let I=.04+F*E+(F?.02:0),P=.04+(F+1)*E-(F<S-1?.02:0);or(r,v,I,P,M,p+.03,x-.04,Us,e,y)}}else{pe(n,v,0,.06,M-.035,M+.035,p,x,o,a,e,y),pe(n,v,g-.06,g,M-.035,M+.035,p,x,o,a,e,y),pe(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),pe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,o,a,e,y),gg(u,i,n,v,M,.035,a,e,y);let S=.055,E=p+(p>.05?.06:.03),F=x-.06,I=M+.035,P=M+.035+.06,A=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let D of A){let N=D.open>.02||D.tilt>.02,U=w?!!b.sensed&&!N:N,k=U?zt(16758087,.75):new j(FS),z=U?zt(16758087,.95):a,Z=D.x0,X=D.x1,Y=X-Z,$=D.open*NS*(u.opening.swing==="out"?-1:1),st=D.tilt*GS,H=(tt,ct,it)=>{let lt=it-E,ut=ct+lt*Math.sin(st),dt=E+lt*Math.cos(st),ot=tt*Math.cos($)-(ut-I)*Math.sin($);ut=I+(ut-I)*Math.cos($)+tt*Math.sin($);let xt=D.atStart?Z+ot:X-ot;return v(xt,ut,dt)},V=Math.abs($)>.05?Qt:y;if(pe(n,H,0,S,I,P,E,F,k,z,e,V),pe(n,H,Y-S,Y,I,P,E,F,k,z,e,V),pe(n,H,S,Y-S,I,P,E,E+S,k,z,e,V),pe(n,H,S,Y-S,I,P,F-S,F,k,z,e,V),or(r,H,S,Y-S,(I+P)/2,E+S,F-S,U?zt(16758087,.16):Us,e,V),b.unlocked&&D.atStart===u.hingeAtStart&&pe(n,H,Y-.022,Y+.004,I-.006,P+.006,E+.02,F-.02,zt($c,.85),zt($c,1),e,V),Zi(u.opening,u.exterior)==="bars"){let tt=(E+F)/2,ct=(I+P)/2;pe(n,H,S,Y-S,ct-.012,ct+.012,tt-.012,tt+.012,k,z,e,V),pe(n,H,Y/2-.012,Y/2+.012,ct-.012,ct+.012,E+S,F-S,k,z,e,V)}}}if(b.cover!==null){let _=-u.faceOut,T=x+.2;pe(n,v,-.05,g+.05,_-.15,_,x,T,new j(DS),a,e,y);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let E=x-S*(x-p);or(s,v,0,g,_-.07,E,x,new j(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var YS=.3,xg=2.6;function vg(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>jt(_,i))&&!n.some(_=>C.some(T=>jt(T,_)))},d=(M,w)=>f(h?[M,w]:[w,M]),m=(M,w)=>{let C=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<C;_++)if(!f([M[0]+(w[0]-M[0])*_/C,M[1]+(w[1]-M[1])*_/C]))return!1;return!0},[b,g,p,x]=h?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,C=null,_=.05;for(let F=p;F<=x+1e-6;F+=_)if(d(M,F)&&(C??=F),(!d(M,F)||F+_>x+1e-6)&&C!==null){let I=d(M,F)?F:F-_;(!w||I-C>w[1]-w[0])&&(w=[C,I]),C=null}if(!w||w[1]-w[0]<.2)continue;let T=F=>{let[I,P]=F?w:[w[1],w[0]];return[h?[M,I]:[I,M],h?[M,P]:[P,M]]},S=T(v),E=y[y.length-1];if(E&&n.length&&!m(E,S[0])){let F=T(!v);if(!m(E,F[0]))continue;S=F,v=!v}y.push(S[0],S[1]),v=!v}return y}function Ef(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Tf=i=>Math.atan2(Math.sin(i),Math.cos(i));function yg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Tf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),xg*e),!0)}let a=Math.atan2(r,s),l=Tf(a-i.heading);if(i.heading=Tf(i.heading+Math.sign(l)*Math.min(Math.abs(l),xg*e)),Math.abs(l)<.35){let c=Math.min(o,YS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function _g(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var qS=66,$S=250;function Mg(i,t){return i?t>=3e4?$S:qS:0}function Sg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Nn=null,wg=new Map;function Eg(i,t=0){let e=new ee,n=new Ne,r=ye(i.type);if(r?.light)Ic(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Af(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Pc(e,n,new ee,s,0,!0)}return{buf:e,lines:n}}function ZS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=wg.get(r);if(s)return s;e&&Co(e),Nn??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Nn.setSize(t,t,!1),Nn.setClearColor(0,0);let{buf:o,lines:a}=Eg(i),l=new si,c=new Ct(o.geometry(),new Yt({vertexColors:!0,color:new j(n,n,n)})),h=new qe(a.geometry(),new $e({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new xn().setFromObject(c),f=u.getCenter(new W),d=new In(-1,1,1,-1,.01,100);d.position.copy(f).add(new W(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let v=new W(p,x,y).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let b=m*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Nn.render(l,d);let g=Nn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),wg.set(r,g),g}function KS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Tg.get(s);if(o)return o;n&&Co(n);let{buf:a,lines:l}=Eg(i,t),c=new Ct(a.geometry(),new Yt({vertexColors:!0,color:new j(r,r,r)})),h=new qe(l.geometry(),new $e({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),u=new xn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,m=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((b-m)*e)));Nn??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(1),Nn.setSize(g,p,!1),Nn.setClearColor(0,0);let x=new si;x.add(c,h);let y=new In(f,d,b,m,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Nn.render(x,y);let v=Nn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:m,y1:b};return Tg.set(s,M),M}var Tg=new Map;var LC={Group:Ce,Mesh:Ct,MeshBasicMaterial:Yt,CanvasTexture:vn,Color:j,PlaneGeometry:Gn,BufferGeometry:Vt,Float32BufferAttribute:Nt,DoubleSide:se},Rg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},JS=[.22,.88,1],jS=2.4,Cg=1.4,QS=.22,Pg=.94,Ig=140,Lg=1.5;function tw(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,h=l-o,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*h)/u));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+h*f)))}return n}var Cf=32,ew=500,Fg=160,nw=33,Dg=.028,iw=.026,rw=.012,sw=.09,oe=2767456,ow=2240847,aw=3096944,lw=1911110,cw=1,Ng=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Kc=450,Og=125,uw=200,hw=.08,ea={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},fw=new j(1714765);function dw(){let i=navigator;return Sg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Pf=class{host;options;renderer;scene=new si;camera=new Qe(38,1,.1,400);controls;labels;root=new Ce;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new Yc;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;washerTimer;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Vt,new $e({color:10471679,transparent:!0,opacity:.4,blending:Ee,depthWrite:!1}));snow=new zi(new Vt,new Si({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ct(new oo(1,28),new Yt({color:16767370,transparent:!0,opacity:0,blending:Ee,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=mw(),this.blindTexture=bw(),this.haloTexture=yw(),this.ground=new Ct(new Gn(1,1),new Yt({transparent:!1,blending:Ee,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Mg(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return _g(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Co(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,Kp(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>(this.floorId===null||h.floor.id===this.floorId)&&dc(h.floor).some(u=>u.id===t)),n=e?dc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Ki(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new W(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=Ki(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new W(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new W(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Jo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Jo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(ig(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=ng(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ce;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new Ct(new ho(.92,1,48),new Yt({color:3662079,transparent:!0,opacity:0,blending:Ee,depthWrite:!1,side:se}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Vt;c.setAttribute("position",new Nt(a,3));let h=new qe(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:Ee,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=ta(r),o=Rf(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of pn(c.points))for(let f of u)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Vt;l.setAttribute("position",new Nt(s,3)),l.setAttribute("color",new Nt(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let s of e)qm(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,m,b,g)=>{let p=Math.hypot(m-f,b-d)||1,x=-(b-d)/p*(g/2+o),y=(m-f)/p*(g/2+o);a.push(f+x,d+y,0,m+x,b+y,0,m-x,b-y,0,f+x,d+y,0,m-x,b-y,0,f-x,d-y,0)},h=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,m=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(m)*h,1.47+Math.sin(m)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Vt;return u.setAttribute("position",new Nt(a,3)),u},n=new Ct(e(0),new Yt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:se})),r=new Ct(e(.05),new Yt({color:t,transparent:!0,opacity:.22,blending:Ee,depthWrite:!1,side:se}));n.renderOrder=6,r.renderOrder=5;let s=new Ce;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=og(t),n=e?1:0;n===Ns.value&&(!e||Ds.value.equals(new W(...e)))||(Ns.value=n,e&&Ds.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=sg(t),Q0(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||sm(o.type)))&&this.rebuild();let n=jo(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Qs(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Vt;l.setAttribute("position",new Nt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ie,o=(r?t.azimuth+180:t.azimuth)*ie,a=Math.max(10,Math.abs(t.elevation))*ie,{center:l,r:c}=this.skyFrame(),h=new W(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new W((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*ie,s=this.weather?.cloud??0,o=n&&!this.lowQuality&&e.elevation>1&&s<.9&&!this.roomTint,a=o?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${s.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,o?this.drawShadow(t,e,r,s):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${s.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(p,x,y=0)=>{let v=Math.max(0,x)*ie,M=r+p*ie;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+y,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*s,m=Date.now(),b=p=>new Date(p).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(p=>({at:f(p.azimuth,p.elevation),t:p.t,elevation:p.elevation})),now:m,hours:l.points.filter(p=>p!==l.rise&&p!==l.set&&new Date(p.t).getMinutes()===0).map(p=>f(p.azimuth,p.elevation)),labels:[l.rise,l.set].flatMap(p=>p?[{text:b(p.t),at:f(p.azimuth,p.elevation,g*2.2),rising:p===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Ps(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),s=n.map(h=>h[1]),[o,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...s),Math.max(...s)];return{x:(o+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-o,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),s=n&&r>0?Ps(n):null,o=!!s&&Math.abs(t.floor.elevation-s.elevation)<.5,a=new Map;if(o)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=o&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new ee;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(P=>P.id===u.opening.room_id),d=f<0?void 0:a.get(Os(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let p=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),y=new j(d[0]/p*x,d[1]/p*x,d[2]/p*x),v=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=(P,R,A)=>{let D=R/M,N=-A*D+P*(u.width+2*A*D);return $i(t.floor,{x:u.start[0]+u.axis[0]*N+v[0]*(u.faceOut+R),z:u.start[1]+u.axis[1]*N+v[1]*(u.faceOut+R)})},C=w(.5,.05,0),_=hg((P,R)=>w(P,R,.35*M),C,M);if(_<.2)continue;let T=.35*_,S=C+.014,E=(P,R)=>{let A=R/_,D=-T*A+P*(u.width+2*T*A);return[u.start[0]+u.axis[0]*D+v[0]*(u.faceOut+R),S,u.start[1]+u.axis[1]*D+v[1]*(u.faceOut+R)]},F=4,I=[[0,0],[.18,1],[.82,1],[1,0]];for(let P=0;P<F;P++){let R=_*P/F,A=_*(P+1)/F,D=(1-P/F)**2,N=(1-(P+1)/F)**2;for(let U=0;U+1<I.length;U++){let[k,z]=I[U],[Z,X]=I[U+1],Y=E(k,R),$=E(Z,R),st=E(Z,A),H=E(k,A),V=y.clone().multiplyScalar(D*z),tt=y.clone().multiplyScalar(D*X),ct=y.clone().multiplyScalar(N*X),it=y.clone().multiplyScalar(N*z);h.tri(Y,$,st,V,tt,ct),h.tri(Y,st,H,V,ct,it)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let s=Ps(t),o=s?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!s||!o.length)return this.sunFx.hideShadow();let a=o.flatMap(g=>g.points.map(p=>p[0])),l=o.flatMap(g=>g.points.map(p=>p[1])),c=s.elevation+$i(s,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ie,u=jm(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Qm(u);if(!f)return this.sunFx.hideShadow();let d=s.elevation-c<=.35?s.elevation+.012:c+.012,m=t.floors.filter(g=>Math.abs(g.elevation-s.elevation)<.5).flatMap(g=>g.rooms.filter(p=>!p.outdoor&&p.points.length>=3).map(p=>p.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,m,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Qo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Fg),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);im(e,n,sn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&nm(e,n,sn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=cc(n.type),s=r?ye(n.type):void 0;r&&s&&lm(e,s,r,n,sn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new Hc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new W(e.x,a,e.z),direction:new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(Wc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Wc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),clearTimeout(this.washerTimer),this.washerTimer=void 0,this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&dw();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Mr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Oe,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new zc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},ew)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=lg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Ug(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Os(r,a.ra),a.rb=Os(r,a.rb)}t.lightSurface=n;let s=new Vt;s.setAttribute("position",new Nt(n.pos,3)),s.setAttribute("color",new Nt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Nt(n.fold,1));let o=new pr(new Uint32Array(n.pos.length/3),1);o.setUsage(nh),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=ye(t.pack);if(!e)return null;let[n,r,s]=t.size??ea.wall;return cm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Sf(t.floor,n.x,n.z),a=Os(t.lightZones,o),[l,,c]=n.size??(n.lamp?ea[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<cw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],m=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ie,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let y=(n.rise??0)*ie;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(y),y:m+Math.sin(y)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(y),color:b,level:r.level*.55,kind:p||y?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:m,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=jt([h.x,h.z],s)?0:tw(h.x,h.z,s);if(f>Lg)continue;let d=u.level*(1-f/Lg);for(let m=0;m<3;m++)a[m]+=u.color[m]*d;o+=d}if(o<.02)continue;let[l,c]=Ki(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:Os(t.lightZones,Sf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(m=>m.opening.id===u.id);if(f&&Zi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=ug(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:nn(new Yt({vertexColors:!0}),this.themeUniform),pattern:gw(this.patternTexture),wall:nn(mi(new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:mi(new Yt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Yt({vertexColors:!0,blending:bo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:nn(mi(new $e({vertexColors:!0,transparent:!0,blending:jo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:mi(new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:nn(mi(new Yt({vertexColors:!0,side:se}),t),this.themeUniform),glass:mi(new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se}),t),blinds:nn(mi(new Yt({map:this.blindTexture,vertexColors:!0,side:se}),t),this.themeUniform),water:nn(new Yt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:se}),this.themeUniform),flow:vw(this.flowTime),pipeLine:xw(this.flowTime),patch:new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Mf(this.flowTime),lamps:nn(new Yt({vertexColors:!0}),this.themeUniform),halos:new Si({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1}),cones:new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se}),screens:new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se}),earth:nn(new Yt({vertexColors:!0}),this.themeUniform),earthWell:nn(new Yt({vertexColors:!0,side:se}),this.themeUniform),earthLines:nn(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Ps(n)?.id===s.id?o.filter(ot=>ot.face===uf).map(ot=>({field:ot,face:mm(n,ot)})):[],l=o.filter(ot=>ot.face.startsWith(`wall:${s.id}:`));if(l.length){let ot=new Map(pm(n,s.id).map(xt=>[xt.key,xt]));for(let xt of l){let vt=ot.get(xt.face);vt&&a.push({field:xt,face:vt})}}let h=zh(n).some(ot=>p0(ot,s.elevation+s.height)&&Gh(ot,s.elevation))?(ot,xt)=>{let vt=m0(n,ot,xt,s.elevation);return vt===null?null:vt-s.elevation}:void 0,u=Cm(yf(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Pm(n.floors,s),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new Ce,b=new Ct(u.floor,d.floor),g=new Ct(u.shadow,d.shadow);g.renderOrder=1;let p=new Ct(u.floor,d.pattern);p.renderOrder=2;let x=new Ct(new Vt,d.glow);x.renderOrder=3,x.visible=!1;let y=new Ct(new Vt,d.frames),v=new Ct(new Vt,d.blinds),M=new Ct(new Vt,d.glass);M.renderOrder=4;let w=new Ct(new Vt,d.lamps);w.visible=!1;let C=new Ct(new Vt,d.cones);C.visible=!1,C.renderOrder=3;let _=new Ct(new Vt,d.cones);_.visible=!1,_.renderOrder=3;let T=new zi(new Vt,d.halos);T.visible=!1,T.renderOrder=7;let S=new Ct(new Vt,d.cones);S.visible=!1,S.renderOrder=7;let E=new Ct(new Vt,d.cones);E.visible=!1,E.renderOrder=7;let F=new Ct(new Vt,d.lamps);F.visible=!1;let I=new Ct(new Vt,d.lamps);I.visible=!1;let P=new Ct(new Vt,d.patch);P.visible=!1,P.renderOrder=3;let R=new Ct(new Vt,d.patchGlow);R.visible=!1,R.renderOrder=3;let A=new Ct(new Vt,d.screens);A.visible=!1,A.renderOrder=5;let D=new Ct(new Vt,d.flow);D.renderOrder=5,D.frustumCulled=!1;let N=new Ct(new Vt,d.pipeLine),U=new Ct(new Vt,d.pipeLine),k=new Ct(new Vt,d.pipeLine);for(let ot of[N,U,k])ot.renderOrder=4,ot.frustumCulled=!1,ot.visible=!1;let z=_f(a,s.elevation),Z=z?new Ct(z.geometry,d.solarLive):null;Z&&(Z.renderOrder=6,Jo(z,this.solarLevels));for(let ot of[y,v,M])ot.frustumCulled=!1;let X=new Ct(u.walls,d.glassWall),Y=new Ct(u.walls,d.wall);X.renderOrder=6;let $=new Ct(u.water,d.water);$.renderOrder=4;let st=Math.min(...n.floors.filter(ot=>ot.rooms.length).map(ot=>ot.elevation)),H=Fm(n,s,u.openings,s.elevation===st),V=H?[new Ct(H.earth.geometry(),d.earth),new Ct(H.wells.geometry(),d.earthWell),new qe(H.lines.geometry(),d.earthLines)]:[];for(let ot of V)ot.userData.earth=!0;m.add(b,g,p,x,Y,$,new qe(u.lines,d.lines),y,v,M,D,N,U,k,w,C,_,T,S,E,F,I,P,R,A,X,...Z?[Z]:[],...V),this.root.add(m);let tt=document.createElement("button");tt.className="fp3d-pin fp3d-pin-floor",tt.dataset.floor=s.id;let ct=document.createElement("b");ct.textContent=s.name||"\u2013";let it=document.createElement("span");it.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",tt.append(ct,it),tt.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(tt);let lt=t.get(s.id),ut=[],dt=null;for(let ot of dc(s)){let xt=document.createElement("button");xt.className="fp3d-pin",xt.dataset.room=ot.id,xt.dataset.floor=s.id,this.fillRoomPin(xt,ot.name,this.roomInfo.get(ot.id)),xt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,ot.id)),this.labels.append(xt);let[vt,Xt]=Ki(ot.points);if(ut.push({pin:xt,room:ot,cx:vt,cz:Xt}),!ot.outdoor)for(let[Jt,re]of ot.points)dt??={x0:Jt,x1:Jt,z0:re,z1:re},dt.x0=Math.min(dt.x0,Jt),dt.x1=Math.max(dt.x1,Jt),dt.z0=Math.min(dt.z0,re),dt.z1=Math.max(dt.z1,re)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:u,floorMesh:b,shadowMesh:g,patternMesh:p,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,flowMesh:D,pipeLineMesh:N,pipeHouseMesh:U,pipeFloorMesh:k,pipeLineSig:"",solarMesh:Z,solarLive:z,lampMesh:w,sunMesh:C,sunSig:"",spillMesh:_,spillSig:"",haloMesh:T,coneMesh:S,trailMesh:E,fridgeMesh:F,pipeMesh:I,pipeSig:"",patchMesh:P,patchGlowMesh:R,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:Y,screenMesh:A,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:dt,roomPins:ut,labelSize:null,materials:d,mask:f,openings:new Map,y:lt?.y??0,o:lt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:tt})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Qo);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?wm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Dr(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],r=Mf(this.flowTime),s=[],o=new Ce,a=nn(new Yt({vertexColors:!0,transparent:!0,side:se}),this.themeUniform),l=nn(new $e({vertexColors:!0,transparent:!0,blending:jo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=nn(new Yt({vertexColors:!0,transparent:!0,side:se,depthWrite:!1}),this.themeUniform),h=new Ce,u=nn(new Yt({vertexColors:!0,side:se}),this.themeUniform),f=nn(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),d=nn(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),m=nn(new $e({vertexColors:!0,transparent:!0,blending:jo(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(p=>{let x=new Ce;x.add(new Ct(p.solid.geometry(),a),new qe(p.lines.geometry(),l)),p.glass.count&&x.add(new Ct(p.glass.geometry(),c));let y=n.flatMap(w=>{let C=e.get(w.face);return C&&(C.section?p.sections?.includes(C.section):p===t[0])?[{face:C,field:w}]:[]}),v=_f(y,p.floor.elevation+p.base);if(v){let w=new Ct(v.geometry,r);w.renderOrder=9,x.add(w),s.push(v),Jo(v,this.solarLevels)}p.winRoof?.solid.count&&x.add(new Ct(p.winRoof.solid.geometry(),u),new qe(p.winRoof.lines.geometry(),m)),p.winRoof?.glass.count&&x.add(new Ct(p.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let M=null;(p.win?.solid.count||p.win?.glass.count)&&(M=new Ce,M.add(new Ct(p.win.solid.geometry(),u),new qe(p.win.lines.geometry(),m)),p.win.glass.count&&M.add(new Ct(p.win.glass.geometry(),f)),h.add(M));for(let[w,C]of p.winBelow??[]){if(!C.solid.count&&!C.glass.count)continue;let _=new Ce;_.add(new Ct(C.solid.geometry(),u),new qe(C.lines.geometry(),m)),C.glass.count&&_.add(new Ct(C.glass.geometry(),f)),h.add(_),b.push({floorId:w,win:_})}return{group:x,floorId:p.floor.id,rideId:_0(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:M}});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:m,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Pg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Pg*n:0,o=1-Math.exp(-t/Ig),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Cg:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Cg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:QS)):r=this.explode?n.rank*jS:0,n.ty=r,n.to=s;let a=e===n?rn:li;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Ig);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Fg);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Qo,h=(d,m)=>(d??null)===(m??null)||typeof d=="number"&&typeof m=="number"&&Math.abs(d-m)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let m=c[d]??0,b=l[d]??0,g=m-b;Math.abs(g)<.003?u[d]=m:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=uw)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*hw+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Kc?.5+.5*Math.sin(f/140):f/Kc;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new ee,u=[],f=[],d=new Map,m=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??m)>Math.min(t.floor.cut_height,m):b.lamp?Ng.has(b.lamp)&&(b.top??m)>Math.min(t.floor.cut_height,m):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let p=h.count,x=b.pack?ye(b.pack):void 0,[y,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||om(h,b.model,b.x,b.model==="camera_ceiling"?m:b.y,b.z,b.rotation??0):x?Ic(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:y,d:v,h:M,mirror:b.mirror},b.base??0,65280):Af(h,{...b,lamp:b.lamp},b.top??m,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:p,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:p,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=zp(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],m=d?.55+.45*d.level:0,b=d?new j(...d.color.map(x=>Math.min(1,x*m))):new j(lw),g=n(h.id);g>0&&b.lerp(new j(1,1,1),.7*g);let p=new j(b.getHex());Vp(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ie,r=this.weather?.cloud??0,s=Ug(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ie,h=e.azimuth*ie,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let m=[-d.toRoom[0],-d.toRoom[1]],b=m[0]*u[0]+m[1]*u[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),p=d.top-(g?.cover??0)*(d.top-d.sill);if(p-d.sill<.05)continue;let x=(E,F)=>{let I=Math.min(7,F*f);return[d.start[0]+d.axis[0]*E+d.toRoom[0]*d.faceRoom-u[0]*I,.02,d.start[1]+d.axis[1]*E+d.toRoom[1]*d.faceRoom-u[1]*I]},y=.14*l*Math.min(1,b*1.5),v=new j(1*y,.82*y,.55*y),M=v.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(E=>E.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let C=s[w],_=t.floor.rooms.filter((E,F)=>s[F]===C&&E.points.length>=3).map(E=>E.points),T=Math.max(1,Math.ceil(Math.min(7,p*f)/.25)),S=Math.max(1,Math.ceil(d.width/.3));for(let E=0;E<T;E++){let F=d.sill+(p-d.sill)*E/T,I=d.sill+(p-d.sill)*(E+1)/T,P=E/T,R=(E+1)/T,A=v.clone().lerp(M,P),D=v.clone().lerp(M,R);for(let N=0;N<S;N++){let U=d.width*N/S,k=d.width*(N+1)/S,z=x((U+k)/2,(F+I)/2);if(!_.some(st=>jt([z[0],z[2]],st)))continue;let Z=x(U,F),X=x(k,F),Y=x(k,I),$=x(U,I);a.tri(Z,X,Y,A,A,D),a.tri(Z,Y,$,A,D,D)}}}this.pushRoofSun(t,a,s,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Dr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let u of l){let f=c.get(u.face),d=Nc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let m=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,p,x]=d.corners,y=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(y>.95)continue;let v=(P,R,A)=>[P[0]+(R[0]-P[0])*A,P[1]+(R[1]-P[1])*A,P[2]+(R[2]-P[2])*A],M=v(x,b,y),w=v(p,g,y),C=t.floor.rooms.findIndex(P=>P.id===d.roomId);if(C<0)continue;let _=t.floor.rooms.filter((P,R)=>n[R]===n[C]&&P.points.length>=3).map(P=>P.points),T=(P,R)=>{let A=(N,U)=>v(v(P[0],P[1],N),v(P[3],P[2],N),U);for(let N=0;N<6;N++)for(let U=0;U<6;U++){let k=A((N+.5)/6,(U+.5)/6);if(!_.some($=>jt([k[0],k[2]],$)))continue;let z=A(N/6,U/6),Z=A((N+1)/6,U/6),X=A((N+1)/6,(U+1)/6),Y=A(N/6,(U+1)/6);e.tri(z,Z,X,R,R,R),e.tri(z,X,Y,R,R,R)}},S=P=>[P[0],.019,P[2]],E=.06*o;if(T([S(b),S(g),S(w),S(M)],new j(.75*E,.85*E,1*E)),m<.05)continue;let F=P=>{let R=Math.min(7,(P[1]-t.floor.elevation)/Math.tan(s));return[P[0]-r[0]*R,.02,P[2]-r[1]*R]},I=.16*o*Math.min(1,m*1.5);T([F(b),F(g),F(w),F(M)],new j(1*I,.84*I,.6*I))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ie,y=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*ie/2,C=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),_=new j(0,0,0),T=Math.max(4,Math.round(w/.15)),S=.015,E=t.geo.walls2d,F=U=>{let k=U.b[0]-U.a[0],z=U.b[1]-U.a[1],Z=k*k+z*z||1,X=Math.max(0,Math.min(1,((l.x-U.a[0])*k+(l.z-U.a[1])*z)/Z));return Math.hypot(l.x-(U.a[0]+k*X),l.z-(U.a[1]+z*X))},I=null;for(let U of E)F(U)<.45&&(!I||F(U)<F(I))&&(I=U);let P=U=>{let k=y[0]*Math.cos(U)-y[1]*Math.sin(U),z=y[1]*Math.cos(U)+y[0]*Math.sin(U),Z=M;for(let X of E){let Y=X.b[0]-X.a[0],$=X.b[1]-X.a[1],st=k*$-z*Y;if(Math.abs(st)<1e-9)continue;let H=((X.a[0]-l.x)*$-(X.a[1]-l.z)*Y)/st,V=((X.a[0]-l.x)*z-(X.a[1]-l.z)*k)/st;X===I&&H<=.45||H>.02&&H<Z&&V>=0&&V<=1&&(Z=H)}return Z},R=(U,k)=>S+$i(t.floor,{x:U,z:k}),A=U=>{let k=P(U),z=l.x+(y[0]*Math.cos(U)-y[1]*Math.sin(U))*k,Z=l.z+(y[1]*Math.cos(U)+y[0]*Math.sin(U))*k;return[z,R(z,Z),Z]},D=[l.x,Math.max(R(l.x,l.z),v?-1/0:R(l.x+y[0]*.3,l.z+y[1]*.3)),l.z],N=s.count;for(let U=0;U<T;U++)s.tri(D,A(-w+2*w*(U+1)/T),A(-w+2*w*U/T),C,_,_);o.push({id:l.id,start:N,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Ng.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??ea[l.lamp],m=l.base??0,b=(l.rotation??0)*ie,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],p=(x,y,v=1)=>{n.push(x,g,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,m+u*(.5+x),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6));else if(l.rise){let y=l.rise*ie;n.push(l.x+Math.cos(b)*u*x*Math.cos(y),g+Math.sin(y)*u*x,l.z+Math.sin(b)*u*x*Math.cos(y)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else p(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(y=>y*c.level*.7))):p(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new j(...c.color.map(C=>C*.09*c.level)),y=new j(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let C=0;C<w;C++){let _=C/w*Math.PI*2,T=(C+1)/w*Math.PI*2,S=[l.x+Math.cos(_)*v,g,l.z+Math.sin(_)*v],E=[l.x+Math.cos(T)*v,g,l.z+Math.sin(T)*v],F=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],I=[l.x+Math.cos(T)*M,.02,l.z+Math.sin(T)*M];s.tri(S,F,I,x,y,y),s.tri(S,I,E,x,y,x)}}}let a=new Vt;a.setAttribute("position",new Nt(n,3)),a.setAttribute("color",new Nt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=t.wallMesh.geometry.getAttribute("color"),n=new Set(t.floor.furniture.filter(l=>(l.type==="washer"||l.type==="dishwasher")&&this.screens.get(l.id)?.pulse).map(l=>l.id));(n.size||t.washerPulse)&&(t.washerPulse??=new Vc(e.array,(l,c)=>{e.addUpdateRange(l,c),e.needsUpdate=!0}),t.washerPulse.setRunning(t.geo.furnitureTris.filter(l=>n.has(l.id)),performance.now()),t.washerPulse.update(performance.now()));let r=yf(t.floor,this.parked).furniture.filter(l=>this.screens.has(l.id)),o=(Ns.value?Ds.value.toArray().map(l=>Math.round(l*255)).join(","):"")+"|"+r.map(l=>`${l.id}:${l.x},${l.z},${l.rotation},${l.w},${l.d},${l.h},${l.mount_y??""},${l.mirror?1:0}:${JSON.stringify(this.screens.get(l.id))}`).join(";");if(o===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,r);t.screenSig=o;let a=new ee;for(let l of r){let c=this.screens.get(l.id);if(c.pulse)continue;let h=gc.has(l.type)?bc(t.geo.walls2d,l,t.floor.height,sn(t.floor,l)):null,u=h?{...l,x:h.x,z:h.z,mount_y:h.y}:l,f=u.rotation*ie,d=Math.cos(f),m=Math.sin(f),b=(T,S,E)=>[u.x+T*d-E*m,S,u.z+T*m+E*d];if(c.faces){let T=Math.max(.05,u.w)*(u.mirror?-1:1),S=Math.max(.05,u.d),E=Math.max(.005,u.h),F=sn(t.floor,u);for(let I of c.faces){if(I.part==="lights"){let Y=ye(u.type),$=st=>["#e8f4ff","#ff3b4f"].includes(st.color.toLowerCase());if(Y&&Y.parts.some($)){let st=new j(...I.color.map(H=>Math.min(1,H*(.4+.6*I.level))));ko(a,Y,u,F,st.getHex(),$)}continue}if(I.part==="cabin"){let Y=ye(u.type),$=st=>st.color.toLowerCase()==="#13283a"||st.color==="glass";if(Y&&Y.parts.some($)){let st=new j(...I.color.map(H=>Math.min(1,H*(.3+.5*I.level))));ko(a,Y,u,F,st.getHex(),$);continue}}if(I.part==="burners"&&ye(u.type)){let Y=ye(u.type),$=new j(...I.color.map(st=>Math.min(1,st*(.25+.6*I.level))));ko(a,Y,u,F,$.getHex(),Gp);continue}if(I.part==="burners"){let Y=new j(...I.color.map(st=>Math.min(1,st*(.25+.6*I.level)))),$=F+E+.008;for(let[st,H,V]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let tt=st*Math.abs(T)/.6,ct=H*S/.62,it=14;for(let lt=0;lt<it;lt++){let ut=lt/it*Math.PI*2,dt=(lt+1)/it*Math.PI*2;a.tri(b(tt,$,ct),b(tt+Math.cos(ut)*V,$,ct+Math.sin(ut)*V),b(tt+Math.cos(dt)*V,$,ct+Math.sin(dt)*V),Y)}}continue}if(I.part==="band"||I.part==="cabin"){let Y=I.part==="cabin",$=F+E*(Y?.6:.42),st=Y?F+E*.86:$+.07,H=new j(...I.color.map(it=>Math.min(1,it*(.3+.45*I.level)))),V=Math.abs(T)/2+(Y?.012:.02),tt=S/2+(Y?.012:.02),ct=[[-V,-tt],[V,-tt],[V,tt],[-V,tt]];for(let it=0;it<4;it++){let lt=ct[it],ut=ct[(it+1)%4],dt=b(lt[0]*Math.sign(T),$,lt[1]),ot=b(ut[0]*Math.sign(T),$,ut[1]),xt=b(ut[0]*Math.sign(T),st,ut[1]),vt=b(lt[0]*Math.sign(T),st,lt[1]);a.tri(dt,ot,xt,H),a.tri(dt,xt,vt,H)}continue}if(I.part==="strata"){let Y=I.top??I.color,$=.22+.4*I.level,st=new j(...I.color.map(ut=>Math.min(1,ut*$))),H=new j(...Y.map(ut=>Math.min(1,ut*$))),V=F+E*.06,tt=F+E*.94,ct=Math.abs(T)/2+.012,it=S/2+.012,lt=20;for(let ut=0;ut<lt;ut++){let dt=ut/lt*Math.PI*2,ot=(ut+1)/lt*Math.PI*2,xt=[Math.cos(dt)*ct,Math.sin(dt)*it],vt=[Math.cos(ot)*ct,Math.sin(ot)*it];a.tri(b(xt[0],V,xt[1]),b(vt[0],V,vt[1]),b(vt[0],tt,vt[1]),st,st,H),a.tri(b(xt[0],V,xt[1]),b(vt[0],tt,vt[1]),b(xt[0],tt,xt[1]),st,H,H)}continue}if(I.part==="apring"){let Y=u.variant==="wall",$=Math.abs(T),st=Y?Math.min($,E)*.3:Math.min($,S)*.3,H=new j(...I.color.map(it=>Math.min(1,it*(.4+.6*I.level)))),V=new j(0,0,0),tt=24,ct=(it,lt)=>Y?b(Math.cos(it)*lt,F+E/2+Math.sin(it)*lt,S/2+.004):b(Math.cos(it)*lt,F-.003,Math.sin(it)*lt);for(let it=0;it<tt;it++){let lt=it/tt*Math.PI*2,ut=(it+1)/tt*Math.PI*2;a.tri(ct(lt,st*.8),ct(lt,st),ct(ut,st),H),a.tri(ct(lt,st*.8),ct(ut,st),ct(ut,st*.8),H),a.tri(ct(lt,st),ct(lt,st*1.5),ct(ut,st*1.5),H,V,V),a.tri(ct(lt,st),ct(ut,st*1.5),ct(ut,st),H,V,H)}continue}if(I.part==="drum"){let Y=Math.abs(T),$=Math.min(Y*.36,(E-.2)*.42),st=F+(E-.14)/2+.04,H=S/2-.006,V=new j(...I.color.map(ut=>Math.min(1,ut*(.35+.65*I.level)))),tt=V.clone().multiplyScalar(.12),ct=new j(0,0,0),it=28,lt=(ut,dt)=>b(Math.cos(ut)*dt,st+Math.sin(ut)*dt,H);for(let ut=0;ut<it;ut++){let dt=ut/it*Math.PI*2,ot=(ut+1)/it*Math.PI*2;a.tri(b(0,st,H),lt(dt,$*.78),lt(ot,$*.78),tt),a.tri(lt(dt,$*.78),lt(dt,$),lt(ot,$),V),a.tri(lt(dt,$*.78),lt(ot,$),lt(ot,$*.78),V),a.tri(lt(dt,$),lt(dt,$*1.18),lt(ot,$*1.18),V,ct,ct),a.tri(lt(dt,$),lt(ot,$*1.18),lt(ot,$),V,ct,V)}continue}if(I.part==="gang"){let Y=Math.max(1,I.of??1),$=Math.abs(T),st=$/Y,H=(-$/2+st*((I.index??0)+.5))*Math.sign(T),V=S/2+(u.variant==="outdoor"?.02:.008),tt=I.accent?Ns.value?Ds.value.toArray():JS:I.color,ct=new j(...tt.map(Jt=>Math.min(1,Jt*(.35+.65*I.level)))),it=ct.clone().multiplyScalar(.5),lt=new j(0,0,0),ut=st*.34,dt=F+E*.16,ot=F+E*.84,xt=[b(H-ut,dt,V),b(H+ut,dt,V),b(H+ut,ot,V),b(H-ut,ot,V)];a.tri(xt[0],xt[1],xt[2],ct),a.tri(xt[0],xt[2],xt[3],ct);let vt=.012+.015*I.level,Xt=[b(H-ut-vt,dt-vt,V-.001),b(H+ut+vt,dt-vt,V-.001),b(H+ut+vt,ot+vt,V-.001),b(H-ut-vt,ot+vt,V-.001)];for(let Jt=0;Jt<4;Jt++){let re=(Jt+1)%4;a.tri(xt[Jt],Xt[re],Xt[Jt],it,lt,lt),a.tri(xt[Jt],xt[re],Xt[re],it,it,lt)}continue}if(I.part==="beacon"){let Y=new j(...I.color.map(ot=>Math.min(1,ot*(.25+.45*I.level)))),$=new j(0,0,0),st=F+E+.01,H=.6+.6*I.level,V=Math.min(Math.abs(T),S)*.38;for(let[ot,xt]of[[V,0],[0,V]]){let vt=b(-ot,st,-xt),Xt=b(ot,st,xt),Jt=b(ot*.4,st+H,xt*.4),re=b(-ot*.4,st+H,-xt*.4);a.tri(vt,Xt,Jt,Y,Y,$),a.tri(vt,Jt,re,Y,$,$)}let tt=sn(t.floor,{...u,mount_y:0})+.012,ct=Math.abs(T)/2+.03,it=S/2+.03,lt=.22+.18*I.level,ut=(ot,xt,vt)=>b(ot*(ct+vt),tt,xt*(it+vt)),dt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ot=0;ot<4;ot++){let[xt,vt]=dt[ot],[Xt,Jt]=dt[(ot+1)%4];a.tri(ut(xt,vt,0),ut(Xt,Jt,0),ut(Xt,Jt,lt),Y,Y,$),a.tri(ut(xt,vt,0),ut(Xt,Jt,lt),ut(xt,vt,lt),Y,$,$)}continue}let P=I.part==="right"?.03:-Math.abs(T)/2+.03,R=I.part==="left"?-.03:Math.abs(T)/2-.03,A=F+(I.part==="bottom"?E*.45:E)+.006,D=new j(...I.color.map(Y=>Math.min(1,Y*(.35+.65*I.level)))),N=new j(0,0,0),U=(Y,$,st=A)=>b(Y*Math.sign(T),st,$),k=[U(P,-S/2+.03),U(R,-S/2+.03),U(R,S/2-.03),U(P,S/2-.03)];a.tri(k[0],k[2],k[1],D),a.tri(k[0],k[3],k[2],D);let z=I.part==="lid"?.025+.02*I.level:.12+.1*I.level,Z=D.clone().multiplyScalar(I.part==="lid"?.7:.5),X=[U(P-z,-S/2-z,A+.004),U(R+z,-S/2-z,A+.004),U(R+z,S/2+z,A+.004),U(P-z,S/2+z,A+.004)];for(let Y=0;Y<4;Y++){let $=(Y+1)%4;a.tri(k[Y],X[$],X[Y],Z,N,N),a.tri(k[Y],k[$],X[$],Z,Z,N)}}continue}let g=ye(u.type);if(g&&!g.light&&c.ring&&g.parts.some(T=>T.glow)){let T=new j(...c.color.map(S=>Math.min(1,S*(.45+.55*c.level))));ko(a,g,u,sn(t.floor,u),T.getHex())}let p=lf(u,t.floor);if(!p)continue;let x=new j(...c.color.map(T=>Math.min(1,T*(.35+.65*c.level)))),y=new j(0,0,0),v=p.z+.004;if(a.tri(b(p.x0,p.y0,v),b(p.x1,p.y0,v),b(p.x1,p.y1,v),x),a.tri(b(p.x0,p.y0,v),b(p.x1,p.y1,v),b(p.x0,p.y1,v),x),c.plain)continue;let M=.18+.12*c.level,w=x.clone().multiplyScalar(.5),C=[b(p.x0,p.y0,v),b(p.x1,p.y0,v),b(p.x1,p.y1,v),b(p.x0,p.y1,v)],_=[b(p.x0-M,p.y0-M,v+.01),b(p.x1+M,p.y0-M,v+.01),b(p.x1+M,p.y1+M,v+.01),b(p.x0-M,p.y1+M,v+.01)];for(let T=0;T<4;T++){let S=(T+1)%4;a.tri(C[T],_[T],_[S],w,y,y),a.tri(C[T],_[S],C[S],w,y,w)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=a.geometry(),t.screenMesh.visible=a.count>0,this.updateScreenPictures(t,r)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=lf(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Ct(new Gn(1,1),new Yt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new br().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Oe,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,{w:a,h:l}=rm(n.x1-n.x0,n.y1-n.y0,o),c=e.rotation*ie,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(ta).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(ta(h))??{speed:Rf(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),m=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(m<1e-4)continue;let b=[(h.b[0]-h.a[0])/m,(h.b[1]-h.a[1])/m,(h.b[2]-h.a[2])/m],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Dg*1.4,1]]:[[sw,.25],[Dg,1]];for(let[x,y]of p)for(let v of g){let M=x*(h.width??1)/2,w=(_,T)=>[_[0]+v[0]*M*T,_[1]+v[1]*M*T,_[2]+v[2]*M*T],C=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+m,0],[w(h.b,1),h.dist+m,1],[w(h.a,1),h.dist,1]];for(let _ of[0,1,2,0,2,3]){let[T,S,E]=C[_];n.push(T[0],T[1],T[2]),r.push(d[0]*y,d[1]*y,d[2]*y),s.push(S,E),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Vt;c.setAttribute("position",new Nt(n,3)),c.setAttribute("color",new Nt(r,3)),c.setAttribute("uv",new Nt(s,2)),c.setAttribute("flowSpeed",new Nt(o,1)),c.setAttribute("flowOffset",new Nt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(ta(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let m=this.flowPhase.get(ta(f))??{speed:Rf(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let p=iw*(f.width??1),x=f.power>.5?1:.62,y=[[p+rw*2,[.02,.025,.05],.78,2],[p,f.color.map(v=>v*x),1,0]];for(let[v,M,w,C]of y)for(let _ of g){let T=v/2,S=C===0?.002:0,E=(I,P)=>[I[0]+_[0]*T*P,I[1]+_[1]*T*P+S,I[2]+_[2]*T*P],F=[[E(f.a,-1),f.dist,C],[E(f.b,-1),f.dist+d,C],[E(f.b,1),f.dist+d,C+1],[E(f.a,1),f.dist,C+1]];for(let I of[0,1,2,0,2,3]){let[P,R,A]=F[I];s.push(P[0],P[1],P[2]),o.push(M[0],M[1],M[2],w),a.push(R,A),l.push(m.speed),c.push(m.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Vt;u.setAttribute("position",new Nt(s,3)),u.setAttribute("color",new Nt(o,4)),u.setAttribute("uv",new Nt(a,2)),u.setAttribute("flowSpeed",new Nt(l,1)),u.setAttribute("flowOffset",new Nt(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=bg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new j(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new j(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(fw,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new xn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[m,b]of d.points)e.expandByPoint(new W(m,f,b)),e.expandByPoint(new W(m,f+u.floor.height,b))}e.isEmpty()&&e.set(new W(-4,0,-4),new W(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new W),r=e.getSize(new W),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new W(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new xn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=_w();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new W),r=t.getSize(new W),s=Cf*Math.ceil((Math.max(r.x,r.z)+16)/Cf);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-en-.02,n.z)}distanceFor(t){let e=this.camera.fov*ie,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new mo;return r.setFromCamera(new te(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Qt;if(f!==Qt&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=Lh(c.floor).find(d=>jt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,b=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!b){let p=n.ray.direction,x=Math.hypot(p.x,p.z)||1,y=[a.point.x-p.x/x*.3,a.point.z-p.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&jt(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Kc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ie,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new W),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((m[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Nm(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=ye(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?sn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:sn(e.floor,n),u=n.rotation*ie,f=Math.cos(u),d=Math.sin(u),m=(g,p,x)=>[s+g*f-p*d,x,o+g*d+p*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[p,x]=b[g],[y,v]=b[(g+1)%4];t.seg(m(p,x,h+.01),m(y,v,h+.01),r),t.seg(m(p,x,h+c),m(y,v,h+c),r),t.seg(m(p,x,h+.01),m(p,x,h+c),r)}t.seg(m(-n.w/2,n.d/2+.03,h+.02),m(n.w/2,n.d/2+.03,h+.02),new j(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ye(s,o);a.texture.colorSpace=Oe;let l=new In(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let b=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let I of this.floors)I.group.visible=I===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let x=p.floor.rooms.flatMap(I=>I.points),y=p.floor.elevation,v=new xn(new W(Math.min(...x.map(I=>I[0]))-.3,y,Math.min(...x.map(I=>I[1]))-.3),new W(Math.max(...x.map(I=>I[0]))+.3,y+Math.min(p.floor.cut_height,p.floor.height),Math.max(...x.map(I=>I[1]))+.3)),M=v.getCenter(new W),w=-.6,C=.8,_=new W(Math.sin(C)*Math.sin(w),Math.cos(C),Math.sin(C)*Math.cos(w));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let T=.5,S=.5;for(let I of[v.min.x,v.max.x])for(let P of[v.min.y,v.max.y])for(let R of[v.min.z,v.max.z]){let A=new W(I,P,R).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(A.x)),S=Math.max(S,Math.abs(A.y))}let E=s/o;T/S>E?S=T/E:T=S*E,l.left=-T*1.05,l.right=T*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let F=b.createImageData(s,o);for(let I=0;I<o;I++)F.data.set(d.subarray((o-1-I)*s*4,(o-I)*s*4),I*s*4);b.putImageData(F,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?vg(n.room,void 0,void 0,n.obstacles):Ef(n.rest),l=a.length?a:Ef(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Rg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&ye(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Yt({color:Rg[t.mode]}),r=this.robotModelKey(t),s=t.model?ye(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,h=new ee,{radius:u,top:f}=am(h,s,a,l,c),d=new ee,m=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Pe(d,[[-m,b],[m,b],[m,b+m*.8],[-m,b+m*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Yt({vertexColors:!0});let g=[h.geometry(),d.geometry()],p=new Ce;return p.add(new Ct(g[0],this.robotMat),new Ct(g[1],n)),{info:t,motion:e,group:p,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new ee,l=(h,u,f,d,m)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Pe(a,b,u,f,d,m,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Yt({vertexColors:!0});let c=new ee;Pe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new Ce;return o.add(new Ct(this.robotGeo,this.robotMat),new Ct(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??ea.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new ee;kg(h,0,0,0,l,0),this.fanMat??=new Yt({vertexColors:!0});let u=new Ct(h.geometry(),this.fanMat),f=new Ce;f.add(u),f.rotation.y=-((n.rotation??0)*ie),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Bg(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=yg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),s=new j(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let m=h.points[d-1];if(m){let b=Math.hypot(u-m[0],f-m[1])||1,g=-(f-m[1])/b*.1,p=(u-m[0])/b*.1;l.tri([m[0]+g,o,m[1]+p],[u+g,o,f+p],[u-g,o,f-p],s,s,s),l.tri([m[0]+g,o,m[1]+p],[u-g,o,f-p],[m[0]-g,o,m[1]-p],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[u+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,m=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+m],[h.x+d,o,h.z+m],[h.x-d,o,h.z-m],b,u,u),l.tri([c.x+d,o,c.z+m],[h.x-d,o,h.z-m],[c.x-d,o,c.z-m],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(m)*.22,o,h.z+Math.sin(m)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new W(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Kc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new W(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let x=new Set;for(let[y,v]of this.flashes){let M=this.deviceFloor.get(y);M&&x.add(M),v<=t&&this.flashes.delete(y)}a=this.flashes.size>0;for(let y of this.floors)x.has(y.floor.id)&&this.buildLamps(y)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=this.floors.some(x=>!!x.washerPulse?.active&&x.o>.001);if(f)for(let x of this.floors)!x.washerPulse?.active||x.o<=.001||x.washerPulse.update(t);let d=r||s||o||a||l,m=[];(r||this.controls.busy)&&m.push("camera"),s&&m.push("floors"),o&&m.push("openings"),a&&m.push("flash"),l&&m.push("roof"),this.flowActive&&m.push("flow"),this.soundActive&&m.push("sound"),this.poolActive&&m.push("pool"),this.solarActive&&m.push("solar"),this.effectTick&&m.push("effect"),c&&m.push("robot"),h&&m.push("fan"),f&&m.push("appliance"),n&&m.push("orbit"),this.tintTick&&m.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,m),!d&&f&&!this.washerTimer&&(this.washerTimer=setTimeout(()=>{this.washerTimer=void 0,this.invalidate()},this.lowQuality?66:33)),d&&this.invalidate();let b=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;b&&!this.decorWas&&(this.lastWake=t),this.decorWas=b;let g=this.effectFloors.size?this.decor(this.lowQuality?2*Og:Og):null;if(g!==null&&!this.effectTimer&&!document.hidden){let x=g;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=x/1e3,this.effectTick=!0;for(let y of this.floors)y.o<.02||!this.effectFloors.has(y.floor.id)||(this.buildLamps(y),this.buildGlow(y));this.decorTimer||this.invalidate()},x)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let x=c||p||h?this.decor(h?83:0,h?83:void 0):null;!d&&x!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},x));return}!d&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!d&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!d&&p&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},nw))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new W,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new W(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new W(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new W,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=pw(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function pw(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function mw(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new vn(t);return s.flipY=!1,s.wrapS=Mn,s.wrapT=Mn,s.anisotropy=4,s.colorSpace=Oe,s}function gw(i){let t=new Yt({map:i,transparent:!0,blending:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function bw(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new vn(i);return e.wrapS=dr,e.wrapT=dr,e.colorSpace=Oe,e}function ta(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function Rf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function xw(i){let t=new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function vw(i){let t=new Yt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Ug(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function yw(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new vn(t);return r.colorSpace=Oe,r}function _w(){let t=Cf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new vn(e);return s.anisotropy=4,s.colorSpace=Oe,s}function qC(i,t){return new Pf(i,t)}function Bg(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function kg(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([m,b])=>[t+m*h-b*u,n+m*u+b*h]);Pe(i,d,e-.006,e+.006,ow,aw,{aoFrom:0,bottom:!0})}}function Af(i,t,e,n,r=!0){let[s,o,a]=t.size??ea[t.lamp],l=t.base??0,c=(t.rotation??0)*ie,h=Math.cos(c),u=Math.sin(c),f=(g,p)=>[t.x+g*h-p*u,t.z+g*u+p*h],d=(g,p,x,y,v,M=14)=>{let w=[];for(let C=0;C<M;C++){let _=C/M*Math.PI*2;w.push([t.x+Math.cos(_)*g,t.z+Math.sin(_)*g])}Pe(i,w,p,x,y,v,{aoFrom:0,bottom:!0})},m=(g,p,x,y,v,M,w,C=w)=>Pe(i,[f(g,x),f(p,x),f(p,y),f(g,y)],v,M,w,C,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,oe,oe,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,oe,oe,8);let p=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,p,e-.02,oe,oe,5),t.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),M=Math.PI*((y+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)d(b*(.25+.75*(4-y)/4),g+.06*y,g+.06*(y+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,oe,oe,10),d(.012,g+.16,e-.03,oe,oe,6),d(.13,g+.07,g+.16,oe,oe,16),d(.11,g,g+.07,n,n,16),r&&kg(i,t.x,Bg(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,oe,oe,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,oe,oe,10),d(b,e-Math.max(.06,a),e-.02,oe,oe,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":m(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,oe,oe),m(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,oe,oe),d(.014,l+.03,l+a-.12,oe,oe,6),d(b,l+a-.14,l+a-.02,oe,oe),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,oe,oe,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,oe,oe,10);break;case"garden":d(.012,l,l+a-.08,oe,oe,5),d(b,l+a-.08,l+a-.01,oe,oe,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,oe,oe),d(.014,l+.03,l+a-.28,oe,oe,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,oe,oe),d(.012,l+.03,l+a-.16,oe,oe,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??hc;m(-s/2+.03,s/2-.03,-o/2,-o/2+.02,g,g+a,oe),m(-s/2,s/2,-o/2+.02,o/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),p=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){m(-s/2,s/2,-o/2,o/2,p-g,p,n);break}let x=(t.roll??0)*ie,y=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:p-g/2,w=(t.upright?0:t.rise??0)*ie,C=(F,I,P)=>{let R=F,A=I*y-P*v,D=I*v+P*y;return w&&([R,A]=[R*Math.cos(w)-A*Math.sin(w),R*Math.sin(w)+A*Math.cos(w)]),t.upright&&([R,A]=[-A,R]),[t.x+R*h-D*u,M+A,t.z+R*u+D*h]},_=[C(-s/2,-g/2,-o/2),C(s/2,-g/2,-o/2),C(s/2,-g/2,o/2),C(-s/2,-g/2,o/2),C(-s/2,g/2,-o/2),C(s/2,g/2,-o/2),C(s/2,g/2,o/2),C(-s/2,g/2,o/2)],T=new j(n),S=[t.x,M,t.z],E=(F,I,P,R)=>{let[A,D,N]=[_[F],_[I],_[P]],U=[(D[1]-A[1])*(N[2]-A[2])-(D[2]-A[2])*(N[1]-A[1]),(D[2]-A[2])*(N[0]-A[0])-(D[0]-A[0])*(N[2]-A[2]),(D[0]-A[0])*(N[1]-A[1])-(D[1]-A[1])*(N[0]-A[0])],k=[A[0]-S[0],A[1]-S[1],A[2]-S[2]],z=U[0]*k[0]+U[1]*k[1]+U[2]*k[2]<0,[Z,X,Y,$]=z?[_[R],_[P],_[I],_[F]]:[_[F],_[I],_[P],_[R]];i.tri(Z,X,Y,T,T,T),i.tri(Z,Y,$,T,T,T)};E(0,1,2,3),E(4,5,6,7),E(0,1,5,4),E(1,2,6,5),E(2,3,7,6),E(3,0,4,7);break}}}export{xf as FloorMap,Pf as FloorplanViewer,vf as WalkCamera,qC as createViewer,LC as funLib,KS as furnitureFront,ZS as furniturePreview,dw as isLowEnd,kg as pushFanBlades,Af as pushLampModel};
