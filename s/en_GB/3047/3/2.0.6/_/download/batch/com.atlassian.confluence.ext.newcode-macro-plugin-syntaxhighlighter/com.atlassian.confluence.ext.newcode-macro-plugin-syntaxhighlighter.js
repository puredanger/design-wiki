/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.??? (July 29 2011)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1R 2F("2a\'t 40 M 4M 25 3C 4s 4G");(6(){6 r(f,e){I(!M.1Q(f))1R 3D("3X 17 4E");K a=f.1u;f=M(f.1j,t(f)+(e||""));I(a)f.1u={1j:a.1j,1c:a.1c?a.1c.1b(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.5D?"i":"")+(f.5O?"m":"")+(f.5L?"x":"")+(f.3F?"y":"")}6 B(f,e,a,b){K c=u.L,d,g,h;v=R;5I{O(;c--;){h=u[c];I(a&h.3G&&(!h.2M||h.2M.W(b))){h.2q.12=e;I((g=h.2q.X(f))&&g.P===e){d={3E:h.24.W(b,g,a),1B:g};1M}}}}5v(i){1R i}5u{v=11}H d}6 p(f,e,a){I(3w.Z.19)H f.19(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1I,c=0,d,g;I(M.1Q(f)){I(e!==1g)1R 3D("2a\'t 5g 5i 5d 5r 5p 17 5o 5E");H r(f)}I(v)1R 2F("2a\'t W 3C M 4L 4u 5z 5m 5Q");e=e||"";O(d={2I:11,1c:[],2K:6(h){H e.19(h)>-1},3z:6(h){e+=h}};c<f.L;)I(g=B(f,c,b,d)){a.T(g.3E);c+=g.1B[0].L||1}Y I(g=n.X.W(z[b],f.1b(c))){a.T(g[0]);c+=g[0].L}Y{g=f.3x(c);I(g==="[")b=M.2p;Y I(g==="]")b=M.1I;a.T(g);c++}a=17(a.1N(""),n.Q.W(e,w,""));a.1u={1j:f,1c:d.2I?d.1c:N};H a};M.3Z="1.5.0";M.2p=1;M.1I=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5n]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:17.Z.X,1t:17.Z.1t,1B:1v.Z.1B,Q:1v.Z.Q,1f:1v.Z.1f},x=n.X.W(/()??/,"")[1]===1g,D=6(){K f=/^/g;n.1t.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=17.Z.3F!==1g,z={};z[M.2p]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\2i-26-f]{2}|u[\\2i-26-f]{4}|c[A-3H-z]|[\\s\\S]))/;z[M.1I]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\2i-26-f]{2}|u[\\2i-26-f]{4}|c[A-3H-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1i=6(f,e,a,b){u.T({2q:r(f,"g"+(E?"y":"")),24:e,3G:a||M.1I,2M:b||N})};M.2G=6(f,e){K a=f+"/"+(e||"");H M.2G[a]||(M.2G[a]=M(f,e))};M.3t=6(f){H r(f,"g")};M.5s=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5k=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3B=6(){M.1i=6(){1R 2F("2a\'t 5c 1i 5b 3B")}};M.1Q=6(f){H 5e.Z.1z.W(f)==="[2l 17]"};M.3A=6(f,e,a,b){O(K c=r(e,"g"),d=-1,g;g=c.X(f);){a.W(b,g,++d,f,c);c.12===g.P&&c.12++}I(e.1J)e.12=0};M.5f=6(f,e){H 6 a(b,c){K d=e[c].1D?e[c]:{1D:e[c]},g=r(d.1D,"g"),h=[],i;O(i=0;i<b.L;i++)M.3A(b[i],g,6(k){h.T(d.3v?k[d.3v]||"":k[0])});H c===e.L-1||!h.L?h:a(h,c+1)}([f],0)};17.Z.1s=6(f,e){H J.X(e[0])};17.Z.W=6(f,e){H J.X(e)};17.Z.X=6(f){K e=n.X.1s(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=17(J.1j,n.Q.W(t(J),"g",""));n.Q.W(f.1b(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1g)e[c]=1g})}I(J.1u&&J.1u.1c)O(K b=1;b<e.L;b++)I(a=J.1u.1c[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)17.Z.1t=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1v.Z.1B=6(f){M.1Q(f)||(f=17(f));I(f.1J){K e=n.1B.1s(J,14);f.12=0;H e}H f.X(J)};1v.Z.Q=6(f,e){K a=M.1Q(f),b,c;I(a&&1l e.5h()==="3V"&&e.19("${")===-1&&y)H n.Q.1s(J,14);I(a){I(f.1u)b=f.1u.1c}Y f+="";I(1l e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1h 1v(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1s(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(g,h,i){I(h)5K(h){27"$":H"$";27"&":H d[0];27"`":H d[d.L-1].1b(0,d[d.L-2]);27"\'":H d[d.L-1].1b(d[d.L-2]+d[0].L);5J:i="";h=+h;I(!h)H g;O(;h>d.L-3;){i=1v.Z.1b.W(h,-1)+i;h=1T.3u(h/10)}H(h?d[h]||"":"$")+i}Y{h=+i;I(h<=d.L-3)H d[h];h=b?p(b,i):-1;H h>-1?d[h+1]:g}})})}I(a&&f.1J)f.12=0;H c};1v.Z.1f=6(f,e){I(!M.1Q(f))H n.1f.1s(J,14);K a=J+"",b=[],c=0,d,g;I(e===1g||+e<0)e=5M;Y{e=1T.3u(+e);I(!e)H[]}O(f=M.3t(f);d=f.X(a);){I(f.12>c){b.T(a.1b(c,d.P));d.L>1&&d.P<a.L&&3w.Z.T.1s(b,d.1b(1));g=d[0].L;c=f.12;I(b.L>=e)1M}f.12===d.P&&f.12++}I(c===a.L){I(!n.1t.W(f,"")||g)b.T("")}Y b.T(a.1b(c));H b.L>e?b.1b(0,e):b};M.1i(/\\(\\?#[^)]*\\)/,6(f){H n.1t.W(A,f.2L.1b(f.P+f[0].L))?"":"(?:)"});M.1i(/\\((?!\\?)/,6(){J.1c.T(N);H"("});M.1i(/\\(\\?<([$\\w]+)>/,6(f){J.1c.T(f[1]);J.2I=R;H"("});M.1i(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.1c,f[1]);H e>-1?"\\\\"+(e+1)+(4a(f.2L.3x(f.P+f[0].L))?"":"(?:)"):f[0]});M.1i(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1i(/^\\(\\?([5y]+)\\)/,6(f){J.3z(f[1]);H""});M.1i(/(?:\\s+|#.*)+/,6(f){H n.1t.W(A,f.2L.1b(f.P+f[0].L))?"":"(?:)"},M.1I,6(){H J.2K("x")});M.1i(/\\./,6(){H"[\\\\s\\\\S]"},M.1I,6(){H J.2K("s")})})();1l 2d!="1g"&&(2d.M=M);K 1r=6(){6 r(a,b){a.1k.19(b)!=-1||(a.1k+=" "+b)}6 t(a){H a.19("3I")==0?a:"3I"+a}6 B(a){H e.23.2R[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3W:[a.2C],g={"#":"1d",".":"1k"}[b.1o(0,1)]||"3J",h,i;h=g!="3J"?b.1o(1):b.5C();I((a[g]||"").19(h)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 25 a)c[d]=a[d];O(d 25 b)c[d]=b[d];H c}6 w(a,b,c,d){6 g(h){h=h||1K.59;I(!h.1E){h.1E=h.58;h.3k=6(){J.4F=11}}c.W(d||1K,h)}a.3S?a.3S("4D"+b,g):a.4C(b,g,11)}6 A(a,b){K c=e.23.2H,d=N;I(c==N){c={};O(K g 25 e.1W){K h=e.1W[g];d=h.4H;I(d!=N){h.1Z=g.4K();O(h=0;h<d.L;h++)c[d[h]]=g}}e.23.2H=c}d=e.1W[c[a]];d==N&&b!=11&&1K.1U(e.13.1A.1U+(e.13.1A.3M+a));H d}6 v(a,b){O(K c=a.1f("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1N("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",g=0;g<c.L-1;g++)d+=e.13.1X;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2m;| )+/,6(g){d=g;H""});I(c.L==0)H d;H d+\'<15 1e="\'+b+\'">\'+c+"</15>"});H a}6 n(a,b){a.1f("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(g){I(g.19("\\t")==-1)H g;O(K h=0;(h=g.19("\\t"))!=-1;)g=g.1o(0,h)+c.1o(0,b-h%b)+g.1o(h+1,g.L);H g})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,g=[],h=b.2s?b.2s:c;(d=b.1D.X(a))!=N;){K i=h(d,b);I(1l i=="3V")i=[1h e.2J(i,d.P,b.1Y)];g=g.1O(i)}H g}6 E(a){K b=/(.*)((&1C;|&1y;).*)/;H a.Q(e.2Y.3m,6(c){K d="",g=N;I(g=b.X(c)){c=g[1];d=g[2]}g=c.2h(0,c.19("<"));c=c.2h(c.19("<"),c.L);d+=c;H\'<a 28="\'+g+\'">\'+g+"</a>"+d})}6 z(){O(K a=1G.4o("1m"),b=[],c=0;c<a.L;c++)a[c].3X=="1V"&&b.T(a[c]);H b}6 f(a){a=a.1E;K b=p(a,".1V",R);a=p(a,".3l",R);K c=1G.4c("2w");I(!(!a||!b||p(a,"2w"))){B(b.1d);r(b,"1j");O(K d=a.3W,g=[],h=0;h<d.L;h++)g.T(d[h].4I||d[h].4B);g=g.1N("\\r");c.3R(1G.4A(g));a.3R(c);c.2B();c.32();4t("2w").4r("3L","3L");w(c,"4w",6(){c.2C.4z(c);b.1k=b.1k.Q("1j","")})}}I(1l 3K!="1g"&&1l M=="1g")M=3K("M").M;K e={2Q:{"1e-2e":"","2c-1x":1,"2r-1x-2o":11,1L:N,1n:N,"41-43":R,"44-22":4,1w:R,16:R,"3y-15":R,2U:11,"4k-4p":R,2T:11,"1q-1m":11},13:{1X:"&2m;",2v:R,4g:11,4b:11,4n:"4y",1A:{20:"4x 1j",2z:"?",1U:"1r\\n\\n",3M:"52\'t 51 1F O: ",4e:"4Z 4Y\'t 53 O 1q-1m 54: ",3N:\'<!57 1q 56 "-//55//3s 4X 1.0 4W//4Q" "1S://2x.3O.3Y/4P/3P/3s/3P-4O.5R"><1q 4R="1S://2x.3O.3Y/4V/4U"><3o><4T 1S-5P="6c-7a" 78="2u/1q; 74=71-8" /><1n>7b 1r</1n></3o><2Z 1P="2g-6N:6G,6H,6I,6V-6U;6R-2j:#6T;2j:#6S;2g-22:6Y;2u-35:34;"><U 1P="2u-35:34;37-3e:1.6Q;"><U 1P="2g-22:6P-6J;">1r</U><U 1P="2g-22:.6K;37-6L:6O;"><U>3Z 3.0.6M (6Z 79 38)</U><U><a 28="1S://39.2y/1r" 1E="3h" 1P="2j:#31">1S://39.2y/1r</a></U><U>76 15 73 75.</U><U>72 77-38 7c 6X.</U></U><U>6E 68 67 J 1m, 66 <a 28="3n://2x.65.2y/6a-6e/6d?6F=6b-64&63=5W" 1P="2j:#31">5V</a> 30 <2S/>5U 5S 5T!</U></U></2Z></1q>\'}},23:{2H:N,2R:{}},1W:{},2Y:{5Y:/\\/\\*[\\s\\S]*?\\*\\//2b,62:/\\/\\/.*$/2b,61:/#.*$/2b,60:/"([^\\\\"\\n]|\\\\.)*"/g,5Z:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6f:1h M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3r"),6g:1h M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3r"),6w:/(&1y;|<)!--[\\s\\S]*?--(&1C;|>)/2b,3m:/(6u|1S|3n):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?/g,6y:{18:/(&1y;|<)\\?=?/g,1a:/\\?(&1C;|>)/g},6z:{18:/(&1y;|<)%=?/g,1a:/%(&1C;|>)/g},6D:{18:/(&1y;|<)\\s*1m.*?(&1C;|>)/2O,1a:/(&1y;|<)\\/\\s*1m\\s*(&1C;|>)/2O}},16:{1H:6(a){6 b(i,k){H e.16.2E(i,k,e.13.1A[k])}O(K c=\'<U 1e="16">\',d=e.16.2N,g=d.3j,h=0;h<g.L;h++)c+=(d[g[h]].1H||b)(a,g[h]);c+="</U>";H c},2E:6(a,b,c){H\'<3q><a 28="#" 1e="6C 6B\'+b+" "+b+\'">\'+c+"</a></3q>"},24:6(a){K b=a.1E,c=b.1k||"";b=B(p(b,".1V",R).1d);K d=6(g){H(g=17(g+"6t(\\\\w+)").X(c))?g[1]:N}("6s");b&&d&&e.16.2N[d].2A(b);a.3k()},2N:{3j:["20","2z"],20:{1H:6(a){I(a.V("2U")!=R)H"";K b=a.V("1n");H e.16.2E(a,"20",b?b:e.13.1A.20)},2A:6(a){a=1G.6h(t(a.1d));a.1k=a.1k.Q("45","")}},2z:{2A:6(){K a="6m=0";a+=", 18="+(3d.3c-3f)/2+", 3e="+(3d.3g-3i)/2+", 3c=3f, 3g=3i";a=a.Q(/^,/,"");a=1K.6q("","3h",a);a.2B();K b=a.1G;b.6p(e.13.1A.3N);b.6o();a.2B()}}}},4m:6(a,b){K c;I(b)c=[b];Y{c=1G.4o(e.13.4n);O(K d=[],g=0;g<c.L;g++)d.T(c[g]);c=d}c=c;d=[];I(e.13.2v)c=c.1O(z());I(c.L===0)H d;O(g=0;g<c.L;g++){O(K h=c[g],i=a,k=c[g].1k,j=4j 0,l={},m=1h M("^\\\\[(?<2t>(.*?))\\\\]$"),s=1h M("(?<2e>[\\\\w-]+)\\\\s*:\\\\s*(?<21>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.21.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1t(o)){o=m.X(o);o=o.2t.L>0?o.2t.1f(/\\s*,\\s*/):[]}l[j.2e]=o}h={1E:h,1p:C(i,l)};h.1p.1F!=N&&d.T(h)}H d},1L:6(a,b){K c=J.4m(a,b),d=N,g=e.13;I(c.L!==0)O(K h=0;h<c.L;h++){b=c[h];K i=b.1E,k=b.1p,j=k.1F,l;I(j!=N){I(k["1q-1m"]=="R"||e.2Q["1q-1m"]==R){d=1h e.49(j);j="6n"}Y I(d=A(j))d=1h d;Y 6l;l=i.3U;I(g.2v){l=l;K m=x(l),s=11;I(m.19("<![6A[")==0){m=m.2h(9);s=R}K o=m.L;I(m.19("]]\\>")==o-3){m=m.2h(0,o-3);s=R}l=s?m:l}I((i.1n||"")!="")k.1n=i.1n;k.1F=j;d.2P(k);b=d.2W(l);I((i.1d||"")!="")b.1d=i.1d;i.2C.6x(b,i)}}},2D:6(a){w(1K,"40",6(){e.1L(a)})}};e.2D=e.2D;e.1L=e.1L;e.2J=6(a,b,c){J.21=a;J.P=b;J.L=a.L;J.1Y=c;J.1Z=N};e.2J.Z.1z=6(){H J.21};e.49=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,g=1h e.1W.69,h=J,i="2W 1H 2P".1f(" ");I(c!=N){d=1h c;O(K k=0;k<i.L;k++)(6(){K j=i[k];h[j]=6(){H g[j].1s(g,14)}})();d.29==N?1K.1U(e.13.1A.1U+(e.13.1A.4e+a)):g.2V.T({1D:d.29.15,2s:6(j){O(K l=j.15,m=[],s=d.2V,o=j.P+j.18.L,F=d.29,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1a!=N&&j.1a!=N){q=y(j.1a,F.1a);b(q,j.P+j[0].4S(j.1a));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1Z=c.1Z;H m}})}};e.4d=6(){};e.4d.Z={V:6(a,b){K c=J.1p[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Q:6(a){H 1G.4c(a)},4l:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1l a[d]=="2l")c=c.1O(y(b,a[d]));H J.4f(c.4J(D))},4f:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,g=b+1;g<a.L&&a[b]!==N;g++){K h=a[g];I(h!==N)I(h.P>d)1M;Y I(h.P==c.P&&h.L>c.L)a[b]=N;Y I(h.P>=c.P&&h.P<d)a[g]=N}H a},4i:6(a){K b=[],c=2n(J.V("2c-1x"));v(a,6(d,g){b.T(g+c)});H b},4h:6(a){K b=J.V("1L",[]);I(1l b!="2l"&&b.T==N)b=[b];a:{a=a.1z();K c=4j 0;O(c=c=1T.5B(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1M a}b=-1}H b!=-1},2k:6(a,b,c){a=["1x","5A"+b,"P"+a,"5x"+(b%2==0?1:2).1z()];J.4h(b)&&a.T("5N");b==0&&a.T("1M");H\'<U 1e="\'+a.1N(" ")+\'">\'+c+"</U>"},3b:6(a,b){K c="",d=a.1f("\\n").L,g=2n(J.V("2c-1x")),h=J.V("2r-1x-2o");I(h==R)h=(g+d-1).1z().L;Y I(4a(h)==R)h=0;O(K i=0;i<d;i++){K k=b?b[i]:g+i,j;I(k==0)j=e.13.1X;Y{j=h;O(K l=k.1z();l.L<j;)l="0"+l;j=l}a=j;c+=J.2k(i,k,a)}H c},48:6(a,b){a=x(a);K c=a.1f("\\n");J.V("2r-1x-2o");K d=2n(J.V("2c-1x"));a="";O(K g=J.V("1F"),h=0;h<c.L;h++){K i=c[h],k=/^(&2m;|\\s)+/.X(i),j=N,l=b?b[h]:d+h;I(k!=N){j=k[0].1z();i=i.1o(j.L);j=j.Q(" ",e.13.1X)}i=x(i);I(i.L==0)i=e.13.1X;a+=J.2k(h,l,(j!=N?\'<15 1e="\'+g+\' 5t">\'+j+"</15>":"")+i)}H a},3p:6(a){H a?"<47>"+a+"</47>":""},42:6(a,b){6 c(l){H(l=l?l.1Z||h:h)?l+" ":""}O(K d=0,g="",h=J.V("1F",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);g+=u(a.1o(d,k.P-d),j+"46")+u(k.21,j+k.1Y);d=k.P+k.L+(k.70||0)}}g+=u(a.1o(d),c()+"46");H g},1H:6(a){K b="",c=["1V"],d;I(J.V("2T")==R)J.1p.16=J.1p.1w=11;1k="1V";J.V("2U")==R&&c.T("45");I((1w=J.V("1w"))==11)c.T("5a");c.T(J.V("1e-2e"));c.T(J.V("1F"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("44-22");I(J.V("41-43")==R)a=n(a,b);Y{O(K g="",h=0;h<b;h++)g+=" ";a=a.Q(/\\t/g,g)}a=a;a:{b=a=a;g=/<2S\\s*\\/?>|&1y;2S\\s*\\/?&1C;/2O;I(e.13.4g==R)b=b.Q(g,"\\n");I(e.13.4b==R)b=b.Q(g,"");b=b.1f("\\n");g=/^\\s*/;h=4v;O(K i=0;i<b.L&&h>0;i++){K k=b[i];I(x(k).L!=0){k=g.X(k);I(k==N){a=a;1M a}h=1T.6W(k[0].L,h)}}I(h>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(h);a=b.1N("\\n")}I(1w)d=J.4i(a);b=J.4l(J.2V,a);b=J.42(a,b);b=J.48(b,d);I(J.V("4k-4p"))b=E(b);1l 2X!="1g"&&2X.4q&&2X.4q.1B(/6r/)&&c.T("4N");H b=\'<U 1d="\'+t(J.1d)+\'" 1e="\'+c.1N(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<36 6i="0" 6j="0" 6k="0">\'+J.3p(J.V("1n"))+"<33><3a>"+(1w?\'<2f 1e="1w">\'+J.3b(a)+"</2f>":"")+\'<2f 1e="15"><U 1e="3l" 1n="6v: 5X-3T 30 32 15">\'+b+"</U></2f></3a></33></36></U>"},2W:6(a){I(a===N)a="";J.15=a;K b=J.3Q("U");b.3U=J.1H(a);J.V("16")&&w(p(b,".16"),"3T",e.16.24);J.V("3y-15")&&w(p(b,".15"),"5w",f);H b},2P:6(a){J.1d=""+1T.5F(1T.5G()*5H).1z();e.23.2R[t(J.1d)]=J;J.1p=C(e.2Q,a||{});I(J.V("2T")==R)J.1p.16=J.1p.1w=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5q:6(a){J.29={18:{1D:a.18,1Y:"1m"},1a:{1D:a.1a,1Y:"1m"},15:1h M("(?<18>"+a.18.1j+")(?<15>.*?)(?<1a>"+a.1a.1j+")","5l")}}};H e}();1l 2d!="1g"&&(2d.1r=1r);',62,447,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||push|div|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|code|toolbar|RegExp|left|indexOf|right|slice|captureNames|id|class|split|undefined|new|addToken|source|className|typeof|script|title|substr|params|html|SyntaxHighlighter|apply|test|_xregexp|String|gutter|line|lt|toString|strings|match|gt|regex|target|brush|document|getHtml|OUTSIDE_CLASS|global|window|highlight|break|join|concat|style|isRegExp|throw|http|Math|alert|syntaxhighlighter|brushes|space|css|brushName|expandSource|value|size|vars|handler|in|Fa|case|href|htmlScript|can|gm|first|exports|name|td|font|substring|dA|color|getLineHtml|object|nbsp|parseInt|numbers|INSIDE_CLASS|pattern|pad|func|values|text|useScriptTags|textarea|www|com|help|execute|focus|parentNode|all|getButtonHtml|Error|cache|discoveredBrushes|hasNamedCapture|Match|hasFlag|input|trigger|items|gi|init|defaults|highlighters|br|light|collapse|regexList|getDiv|navigator|regexLib|body|to|005896|select|tbody|center|align|table|margin|2010|alexgorbatchev|tr|getLineNumbersHtml|width|screen|top|500|height|_blank|250|list|preventDefault|container|url|https|head|getTitleHtml|span|gs|DTD|copyAsGlobal|floor|backref|Array|charAt|quick|setFlag|iterate|freezeTokens|the|TypeError|output|sticky|scope|Za|highlighter_|nodeName|require|readonly|noBrush|aboutDialog|w3|xhtml1|create|appendChild|attachEvent|click|innerHTML|string|childNodes|type|org|version|load|smart|getMatchesHtml|tabs|tab|collapsed|plain|caption|getCodeLinesHtml|HtmlScript|isNaN|stripBrs|createElement|Highlighter|brushNotHtmlScript|removeNestedMatches|bloggerMode|isLineHighlighted|figureOutLineNumbers|void|auto|findMatches|findElements|tagName|getElementsByTagName|links|userAgent|attr|same|jQuery|within|1E3|blur|expand|pre|removeChild|createTextNode|textContent|addEventListener|on|expected|returnValue|frame|aliases|innerText|sort|toLowerCase|constructor|twice|ie|transitional|TR|EN|xmlns|lastIndexOf|meta|xhtml|1999|Transitional|XHTML|wasn|Brush||find|Can|configured|option|W3C|PUBLIC|DOCTYPE|srcElement|event|nogutter|after|run|when|Object|matchChain|supply|valueOf|flags|getKeywords|execAt|sgi|definition|gimy|from|one|forHtmlScript|constructing|escape|spaces|finally|catch|dblclick|alt|imsx|token|number|max|toUpperCase|ignoreCase|another|round|random|1E6|try|default|switch|extended|Infinity|highlighted|multiline|equiv|functions|dtd|development|active|keep|donate|2930402|double|multiLineCComments|singleQuotedString|doubleQuotedString|singleLinePerlComments|singleLineCComments|hosted_button_id|xclick|paypal|please|like|you|Xml|cgi|_s|Content|webscr|bin|multiLineDoubleQuotedString|multiLineSingleQuotedString|getElementById|border|cellpadding|cellspacing|continue|scrollbars|htmlscript|close|write|open|MSIE|command|_|ftp|Hint|xmlComments|replaceChild|phpScriptTags|aspScriptTags|CDATA|command_|toolbar_item|scriptScriptTags|If|cmd|Geneva|Arial|Helvetica|large|75em|bottom|83|family|3em|xx|5em|background|000|fff|serif|sans|min|Gorbatchev|1em|July|offset|utf|Copyright|syntax|charset|highlighter|JavaScript|2004|content|02|Type|About|Alex'.split('|'),0,{}))

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 u={8:{}};u.8={A:4(c,k,l,m,n,o){4 d(a,b){2 a!=1?a:b}4 f(a){2 a!=1?a.E():1}c=c.I(":");3 g=c[0],e={};t={"r":K};M=1;5=8.5;9(3 j R c)e[c[j]]="r";k=f(d(k,5.C));l=f(d(l,5.D));m=f(d(m,5.s));o=f(d(o,5.Q));n=f(d(n,5["x-y"]));2{P:g,C:d(t[e.O],k),D:d(t[e.N],l),s:d({"r":r}[e.s],m),"x-y":d(4(a,b){9(3 h=T S("^"+b+"\\\\[(?<q>\\\\w+)\\\\]$","U"),i=1,p=0;p<a.7;p++)6((i=h.J(a[p]))!=1)2 i.q;2 1}(c,"G"),n)}},F:4(c,k,l,m,n,o){4 d(){9(3 a=H,b=0;b<a.7;b++)6(a[b]!==1){6(z a[b]=="L"&&a[b]!="")2 a[b]+"";6(z a[b]=="X"&&a[b].q!="")2 a[b].q+""}2 1}4 f(a,b,h){h=12.13(h);9(3 i=0;i<h.7;i++)h[i].V("15")==b&&a.Y(h[i])}3 g=[];f(g,c,"Z");f(g,c,"W");6(g.7!==0)9(c=0;c<g.7;c++){3 e=g[c],j=d(e.B["14"],e.10,e.B.v,e.v);6(j!==1){j=u.8.A(j,k,l,m,n,o);8.11(j,e)}}}};',62,68,'|null|return|var|function|defaults|if|length|SyntaxHighlighter|for|||||||||||||||||value|true|collapse|reverse|dp|language||first|line|typeof|parseParams|attributes|gutter|toolbar|toString|HighlightAll|firstline|arguments|split|exec|false|string|result|nocontrols|nogutter|brush|ruler|in|XRegExp|new|gi|getAttribute|textarea|object|push|pre|className|highlight|document|getElementsByTagName|class|name'.split('|'),0,{}))

AJS.toInit( function() {
	try {
		if (window.SyntaxHighlighter && window.SyntaxHighlighter.config) {
			var contextRoot = (document.getElementById("confluence-context-path").content || "");
			var clipboardUrl =  contextRoot + '/s/2.0.6/_/download/resources/com.atlassian.confluence.ext.newcode-macro-plugin:clipboard/clipboard.swf';
		    window.SyntaxHighlighter.config.clipboardSwf = clipboardUrl;
		}
		window.SyntaxHighlighter.highlight();
	} catch (err) {
		AJS.log(err);
	}
});

