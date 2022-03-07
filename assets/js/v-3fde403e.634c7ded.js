"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84254],{71720:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-3fde403e",path:"/devices/SMSZB-120.html",title:"Develco SMSZB-120 control via MQTT",lang:"en-US",frontmatter:{title:"Develco SMSZB-120 control via MQTT",description:"Integrate your Develco SMSZB-120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Warning usage",slug:"warning-usage",children:[]},{level:3,title:"Triggering alarm (using old style warning)",slug:"triggering-alarm-using-old-style-warning",children:[]},{level:3,title:"Triggering alarm, Simple",slug:"triggering-alarm-simple",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Smoke (binary)",slug:"smoke-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Test (binary)",slug:"test-binary",children:[]},{level:3,title:"Max_duration (numeric)",slug:"max-duration-numeric",children:[]},{level:3,title:"Alarm (binary)",slug:"alarm-binary",children:[]},{level:3,title:"Reliability (enum)",slug:"reliability-enum",children:[]},{level:3,title:"Fault (binary)",slug:"fault-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SMSZB-120.md",git:{updatedTime:1646670307e3}}},96780:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var o=a(66252);const i=(0,o.uE)('<h1 id="develco-smszb-120" tabindex="-1"><a class="header-anchor" href="#develco-smszb-120" aria-hidden="true">#</a> Develco SMSZB-120</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SMSZB-120</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>Smoke detector with siren</td></tr><tr><td>Exposes</td><td>temperature, battery, smoke, battery_low, test, max_duration, alarm, reliability, fault, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SMSZB-120.jpg" alt="Develco SMSZB-120"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="warning-usage" tabindex="-1"><a class="header-anchor" href="#warning-usage" aria-hidden="true">#</a> Warning usage</h3><p>Warning only support a single mode, <code>burglar</code></p><p>Duration of using <code>warning</code> can be shorter than <code>max_duration</code> but not longer. If <code>max_duration</code> are set to 60 seconds, and you try to set <code>warning</code> with <code>duration</code> of 90 seconds, the warning will only apply for 60 seconds. Default value of <code>max_duration</code> are 240 seconds</p><p>This device do not support the <code>strobe</code> and <code>strobe_duty_cycle</code> functionality</p><h3 id="triggering-alarm-using-old-style-warning" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-using-old-style-warning" aria-hidden="true">#</a> Triggering alarm (using old style <code>warning</code>)</h3><p>This smoke alarm can be triggered manually by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with the payloads:</p><p>To start :</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;burglar&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code> Where:</li></ul><ul><li><code>duration</code>: the number of seconds the alarm will be on</li><li><code>level</code>: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>mode</code>: <code>stop</code>, <code>burglar</code></li><li><code>strobe</code>: not supported</li><li><code>strobe_duty_cycle</code>: not supported</li></ul><p>To stop:</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;stop&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code></li></ul><h3 id="triggering-alarm-simple" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-simple" aria-hidden="true">#</a> Triggering alarm, Simple</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: &quot;START&quot;}</code> and <code>{&quot;alarm&quot;: &quot;OFF&quot;}</code> Set <code>max_duration</code> from the Zigbee2MQTT UI or by publishing <code>{&quot;max_duration&quot;: NEW_VALUE}</code> This alarm are preset to highest volume</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',17),d=(0,o.Uk)("This device supports OTA updates, for more information see "),r=(0,o.Uk)("OTA updates"),l=(0,o.Uk)("."),n=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),c=(0,o.Uk)("How to use device type specific configuration"),s=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary" aria-hidden="true">#</a> Test (binary)</h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric" aria-hidden="true">#</a> Max_duration (numeric)</h3><p>Duration of Siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Manual Start of Siren. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>START</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="reliability-enum" tabindex="-1"><a class="header-anchor" href="#reliability-enum" aria-hidden="true">#</a> Reliability (enum)</h3><p>Indicates reason if any fault. Value can be found in the published state on the <code>reliability</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>no_fault_detected</code>, <code>unreliable_other</code>, <code>process_error</code>.</p><h3 id="fault-binary" tabindex="-1"><a class="header-anchor" href="#fault-binary" aria-hidden="true">#</a> Fault (binary)</h3><p>Indicates whether the device are in fault state. Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),u={},h=(0,a(83744).Z)(u,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[d,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[r])),_:1}),l]),n,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[c])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);