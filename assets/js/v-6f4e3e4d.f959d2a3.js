"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43289],{40783:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-6f4e3e4d",path:"/devices/ZS190000118.html",title:"Linkind ZS190000118 control via MQTT",lang:"en-US",frontmatter:{title:"Linkind ZS190000118 control via MQTT",description:"Integrate your Linkind ZS190000118 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power_on_behavior (enum)",slug:"power-on-behavior-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZS190000118.md",git:{updatedTime:1646670307e3}}},23434:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="linkind-zs190000118" tabindex="-1"><a class="header-anchor" href="#linkind-zs190000118" aria-hidden="true">#</a> Linkind ZS190000118</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZS190000118</td></tr><tr><td>Vendor</td><td>Linkind</td></tr><tr><td>Description</td><td>Control outlet</td></tr><tr><td>Exposes</td><td>switch (state), power_on_behavior, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZS190000118.jpg" alt="Linkind ZS190000118"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power_on_behavior (enum)</h3><p>Controls the behaviour when the device is powered on. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);