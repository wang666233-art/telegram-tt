/*! For license information please see 757.e669f135f9dce66de020.js.LICENSE.txt */
(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[757],{3535:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ActiveCallHeader:()=>z,GroupCall:()=>B});var n=a(3794),i=a(4050),o=a(5116),r=a(1226),s=a(1638),l=a(2607),c=a(4446),d=a(3716),u=a(782),p=a(1689),m=a(6204);(0,o.Q6)("apiUpdate",((e,t,a)=>{const{activeGroupCallId:i}=e.groupCalls;switch(a["@type"]){case"updateGroupCallLeavePresentation":t.toggleGroupCallPresentation({value:!1});break;case"updateGroupCallStreams":if(!a.userId||!i)break;if(!(0,l.GU)(e,i,a.userId))break;return(0,c.B6)(e,i,a.userId,(0,u.CE)(a,["@type","userId"]));case"updateGroupCallConnectionState":if(!i)break;if("disconnected"===a.connectionState){t.leaveGroupCall({isFromLibrary:!0});break}return(0,c.AH)(e,i,{connectionState:a.connectionState,isSpeakerDisabled:a.isSpeakerDisabled});case"updateGroupCallParticipants":{const{groupCallId:e,participants:t}=a;i===e&&(0,n.handleUpdateGroupCallParticipants)(t);break}case"updateGroupCallConnection":{if(a.data.stream){t.showNotification({message:"Big live streams are not yet supported"}),t.leaveGroupCall();break}(0,n.handleUpdateGroupCallConnection)(a.data,a.presentation);const i=(0,l.mU)(e);null!=i&&i.participants&&Object.keys(i.participants).length>0&&(0,n.handleUpdateGroupCallParticipants)(Object.values(i.participants));break}}})),(0,o.Q6)("leaveGroupCall",((e,t,a)=>{const{isFromLibrary:i,shouldDiscard:s,shouldRemove:d,rejoin:u}=a||{},m=(0,l.mU)(e);m&&(e=(0,c.Ic)(e,{connectionState:"disconnected"},m.participantsCount-1),(async()=>{await(0,r.t9)("leaveGroupCall",{call:m}),s&&await(0,r.t9)("discardGroupCall",{call:m}),e=(0,o.Rd)(),d&&(e=(0,c.dc)(e,m.id)),(0,p.Mt)(),(0,o.R3)({...e,groupCalls:{...e.groupCalls,isGroupCallPanelHidden:!0,activeGroupCallId:void 0}}),i||(0,n.leaveGroupCall)(),u&&t.joinGroupCall(u)})())})),(0,o.Q6)("toggleGroupCallVideo",(e=>{const t=(0,l.mU)(e),a=(0,s.dy)(e,e.currentUserId);a&&t&&(async()=>{await(0,n.toggleStream)("video"),await(0,r.t9)("editGroupCallParticipant",{call:t,videoStopped:!(0,n.isStreamEnabled)("video"),participant:a})})()})),(0,o.Q6)("requestToSpeak",((e,t,a)=>{const{value:n}=a||{value:!0},i=(0,l.mU)(e),o=(0,s.dy)(e,e.currentUserId);o&&i&&(0,r.t9)("editGroupCallParticipant",{call:i,raiseHand:n,participant:o})})),(0,o.Q6)("setGroupCallParticipantVolume",((e,t,a)=>{const{participantId:i,volume:o}=a,c=(0,l.mU)(e),u=(0,s.dy)(e,i);u&&c&&((0,n.setVolume)(i,Math.floor(o/d.Ro)/100),(0,r.t9)("editGroupCallParticipant",{call:c,volume:Number(o),participant:u}))})),(0,o.Q6)("toggleGroupCallMute",((e,t,a)=>{const{participantId:i,value:o}=a||{},c=(0,l.mU)(e),d=(0,s.dy)(e,i||e.currentUserId);d&&c&&(async()=>{const e=void 0===o?(0,n.isStreamEnabled)("audio",d.id):o;i?(0,n.setVolume)(i,e?0:1):await(0,n.toggleStream)("audio"),await(0,r.t9)("editGroupCallParticipant",{call:c,muted:e,participant:d})})()})),(0,o.Q6)("toggleGroupCallPresentation",((e,t,a)=>{const i=(0,l.mU)(e),o=(0,s.dy)(e,e.currentUserId);o&&i&&(async()=>{if(void 0!==(null==a?void 0:a.value)?null==a?void 0:a.value:!(0,n.isStreamEnabled)("presentation")){const e=await(0,n.startSharingScreen)();if(!e)return;await(0,r.t9)("joinGroupCallPresentation",{call:i,params:e})}else await(0,n.toggleStream)("presentation",!1),await(0,r.t9)("leaveGroupCallPresentation",{call:i});await(0,r.t9)("editGroupCallParticipant",{call:i,presentationPaused:!(0,n.isStreamEnabled)("presentation"),participant:o})})()})),(0,o.Q6)("connectToActiveGroupCall",((e,t)=>{const a=(0,l.mU)(e);if(!a)return;if("discarded"===a.connectionState)return void t.showNotification({message:"This voice chat is not active"});const i=(0,p.FF)(),c=(0,p.NH)();if(!i||!c)return;const{currentUserId:d}=e;d&&(async()=>{const e=await(0,n.joinGroupCall)(d,c,i,t.apiUpdate);if(await(0,r.t9)("joinGroupCall",{call:a,params:e,inviteHash:a.inviteHash})&&(t.loadMoreGroupCallParticipants(),a.chatId)){const e=(0,s.Z1)((0,o.Rd)(),a.chatId);if(!e)return;await(0,m.f)(e)}})()}));var v=a(7361),g=a(6752),f=a(706),C=a(9107),S=a(4288),P=a(231),h=a(3106),E=a(8964),b=a(3103);const y=()=>{var e,t;null===(e=(t=navigator).vibrate)||void 0===e||e.call(t,50)};var k=a(7204),Z=a(7324),G=a(7799);const I=(0,i.X$)((({size:e,name:t,playSegment:a,color:n})=>{const[o,r]=(0,i.eJ)();return(0,i.d4)((()=>{(0,Z.Z)(t).then(r)}),[t]),i.ZP.createElement(G.Z,{id:t,play:!0,noLoop:!0,playSegment:a,size:e,speed:1,animationData:o,color:n})})),w=(0,i.X$)((0,o.c$)((e=>{const t=(0,l.mU)(e),{connectionState:a}=t||{},n=t&&(0,l.GU)(e,t.id,e.currentUserId),{raiseHandRating:i,hasAudioStream:o,canSelfUnmute:r,isMuted:s}=n||{};return{connectionState:a||"discarded",hasRequestedToSpeak:Boolean(i),noAudioStream:!o,canSelfUnmute:r,isMuted:s}}),((e,t)=>(0,u.ei)(t,["toggleGroupCallMute","requestToSpeak","playGroupCallSound"])))((({noAudioStream:e,canSelfUnmute:t,isMuted:a,hasRequestedToSpeak:n,connectionState:o,toggleGroupCallMute:r,requestToSpeak:s,playGroupCallSound:l})=>{const c=(0,C.Z)(),d=(0,i.sO)("up"),[u,p]=(0,i.eJ)(!1),m="connected"!==o,v=!t&&a,f=(0,k.Z)(v);(0,i.d4)((()=>{f&&!v&&l("allowTalk")}),[l,f,v]);const S=(0,i.Ye)((()=>{if(u){const e=Math.floor(100*Math.random());return e<32?[0,120]:e<64?[120,240]:e<97?[240,420]:[420,540]}return!f&&v?e?[99,135]:[136,172]:f&&!v?[0,36]:v?[0,0]:e?[69,99]:[36,69]}),[f,u,e,v]),P=u?"HandFilled":"VoiceMini",h=()=>{y(),r()},E=(0,i.Ye)((()=>c(n?"VoipMutedTapedForSpeak":v?"VoipMutedByAdmin":e?"VoipUnmute":"VoipTapToMute")),[n,e,c,v]);return i.ZP.createElement("div",{className:"button-wrapper microphone-wrapper"},i.ZP.createElement("button",{className:(0,g.Z)("MicrophoneButton",e&&"crossed",t&&"can-self-unmute",m&&"is-connecting",v&&"muted-by-admin"),onMouseDown:()=>{if(v){if(u)return;return y(),s(),p(!0),void setTimeout((()=>{p(!1)}),3e3)}d.current="down",e&&setTimeout((()=>{"down"===d.current&&(d.current="hold",h())}),200)},onMouseUp:()=>{v||(h(),d.current="up")}},i.ZP.createElement(I,{name:P,size:48,playSegment:S})),i.ZP.createElement("div",{className:"button-text"},E))})));var M=a(4605),T=a(6071),N=a(2328),D=a(2275);const O=[0,17],U=[17,34],$=(0,i.X$)((0,o.c$)((e=>({isAdmin:(0,l.Ht)(e)})),((e,t)=>(0,u.ei)(t,["setGroupCallParticipantVolume","toggleGroupCallMute","openChat","toggleGroupCallPanel","requestToSpeak"])))((({participant:e,closeDropdown:t,isDropdownOpen:a,anchor:n,isAdmin:o,toggleGroupCallMute:r,setGroupCallParticipantVolume:s,toggleGroupCallPanel:l,openChat:c,requestToSpeak:u})=>{const p=(0,C.Z)(),[m,v,S]=(0,f.Z)(),P=null==e?void 0:e.id,{isMutedByMe:h,isMuted:b,isSelf:y,canSelfUnmute:k}=e||{},Z=Boolean(null==e?void 0:e.raiseHandRating),G=!k&&b,[w,M]=(0,i.eJ)(h?0:((null==e?void 0:e.volume)||d.aC)/d.Ro);(0,i.d4)((()=>{M(h?0:((null==e?void 0:e.volume)||d.aC)/d.Ro)}),[P]);const $=(0,T.Z)(500),V=(0,i.I4)((e=>{e.stopPropagation(),v(),t()}),[v,t]),R=(0,i.I4)((e=>{e.stopPropagation(),u({value:!1}),t()}),[u,t]),A=(0,i.I4)((e=>{e.stopPropagation(),t(),o||M(h?d.aC/d.Ro:0),r({participantId:P,value:o?!G:!h})}),[t,r,P,o,G,h]),H=(0,i.I4)((e=>{e.stopPropagation(),l(),c({id:P}),t()}),[l,t,c,P]),x=0===w?O:U;return i.ZP.createElement("div",null,i.ZP.createElement(N.Z,{isOpen:a,positionX:"right",autoClose:!0,style:n?`right: 1rem; top: ${n.y}px;`:void 0,onClose:t,className:"participant-menu"},!y&&!G&&i.ZP.createElement("div",{className:"group"},i.ZP.createElement("div",{className:(0,g.Z)("volume-control",w<50&&"low",w>=50&&w<100&&"medium",w>=100&&w<150&&"normal",w>=150&&"high")},i.ZP.createElement("input",{type:"range",min:"0",max:"200",value:w,onChange:e=>{const t=Number(e.target.value);M(t),$((()=>{0===t?r({participantId:P,value:!0}):s({participantId:P,volume:Math.floor(t*d.Ro)})}))}}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement(I,{name:"Speaker",playSegment:x,size:24}),i.ZP.createElement("span",null,w,"%")))),i.ZP.createElement("div",{className:"group"},Z&&y&&i.ZP.createElement(E.Z,{icon:"stop-raising-hand",onClick:R},p("VoipGroupCancelRaiseHand")),!y&&i.ZP.createElement(E.Z,{icon:"user",onClick:H},p("VoipGroupOpenProfile")),!y&&i.ZP.createElement(E.Z,{icon:b&&o?"allow-speak":"microphone-alt",onClick:A},p(o?G?"VoipGroupAllowToSpeak":"VoipMute":h?"VoipGroupUnmuteForMe":"VoipGroupMuteForMe")),!y&&o&&i.ZP.createElement(E.Z,{icon:"delete-user",destructive:!0,onClick:V},p("VoipGroupUserRemove")))),!y&&o&&i.ZP.createElement(D.Z,{isOpen:m,userId:P,onClose:S}))})));var V=a(7407),R=a(172);const A=(0,i.X$)((({participant:e,noColor:t})=>{const{isMuted:a,isMutedByMe:o}=e,r=(e.amplitude||0)>n.THRESHOLD,s=Boolean(e.raiseHandRating),l=(0,k.Z)(s),c=!(null!=e&&e.canSelfUnmute)&&a,d=(0,k.Z)(a),u=(0,i.Ye)((()=>a&&!d?[43,64]:!a&&d?[22,42]:s&&!l?[65,84]:!c&&l?[0,21]:a?[22,23]:[43,44]),[a,c,s]),p=(0,i.Ye)((()=>t?[255,255,255]:s?[77,166,224]:c||o?[255,112,111]:r?[87,188,108]:[132,141,148]),[t,s,c,o,r]);return i.ZP.createElement(I,{name:"VoiceOutlined",playSegment:u,size:28,color:p})})),H=(0,i.X$)((0,o.c$)(((e,{participant:t})=>({user:t.isUser?(0,s.dy)(e,t.id):void 0,chat:t.isUser?void 0:(0,s.Z1)(e,t.id)})))((({openParticipantMenu:e,participant:t,user:a,chat:o})=>{const r=(0,i.sO)(null),s=(0,C.Z)(),{isSelf:l,isMutedByMe:c,isMuted:u}=t,p=(t.amplitude||0)>n.THRESHOLD,m=Boolean(t.raiseHandRating),[v,f]=(0,i.Ye)((()=>l?[s("ThisIsYou"),"blue"]:c?[s("VoipGroupMutedForMe"),"red"]:m?[s("WantsToSpeak"),"blue"]:!u&&p?[t.volume&&t.volume!==d.aC?s("SpeakingWithVolume",(t.volume/d.Ro).toString()).replace("%%","%"):s("Speaking"),"green"]:t.about?[t.about,""]:[s("Listening"),"blue"]),[p,t.volume,s,l,c,m,u,t.about]);if(!a&&!o)return;const S=a?`${a.firstName||""} ${a.lastName||""}`:null==o?void 0:o.title;return i.ZP.createElement("div",{className:(0,g.Z)("GroupCallParticipant",t.canSelfUnmute&&"can-self-unmute"),onClick:()=>{l||e(r.current,t)},ref:r},i.ZP.createElement(R.Z,{user:a,chat:o,size:"medium"}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement("span",{className:"name"},S),i.ZP.createElement("span",{className:(0,g.Z)("about",f)},v)),i.ZP.createElement("div",{className:"microphone"},i.ZP.createElement(A,{participant:t})))})));var x=a(1273);const F=(0,i.X$)((0,o.c$)((e=>{const{participantsCount:t,participants:a,chatId:n}=(0,l.mU)(e)||{},i=n&&(0,s.Z1)(e,n);return{participants:a,participantsCount:t||0,canInvite:!!i&&!!i.username}}),((e,t)=>(0,u.ei)(t,["createGroupCallInviteLink","loadMoreGroupCallParticipants"])))((({createGroupCallInviteLink:e,loadMoreGroupCallParticipants:t,participants:a,participantsCount:n,openParticipantMenu:o,canInvite:r})=>{const s=(0,C.Z)(),l=(0,i.Ye)((()=>Object.keys(a||{})),[a]),[c,d]=(0,V.Z)(t,l,l.length>=n);return i.ZP.createElement("div",{className:"participants"},r&&i.ZP.createElement("div",{className:"invite-btn",onClick:e},i.ZP.createElement("div",{className:"icon"},i.ZP.createElement("i",{className:"icon-add-user"})),i.ZP.createElement("div",{className:"text"},s("VoipGroupInviteMember"))),i.ZP.createElement(x.Z,{items:c,onLoadMore:d},null==c?void 0:c.map((e=>a[e]&&i.ZP.createElement(H,{key:e,openParticipantMenu:o,participant:a[e]})))))}))),L=(0,i.X$)((0,o.c$)(((e,{participant:t})=>({currentUserId:e.currentUserId,user:t.isUser?(0,s.dy)(e,t.id):void 0,chat:t.isUser?void 0:(0,s.Z1)(e,t.id),isActive:(t.amplitude||0)>n.THRESHOLD})))((({type:e,onClick:t,user:a,chat:o,isActive:r,isFullscreen:s})=>{const l=(0,C.Z)(),c=(0,i.I4)((()=>{t&&t((null==a?void 0:a.id)||o.id,e)}),[o,t,e,null==a?void 0:a.id]);if(!a&&!o)return;const u=(0,n.getUserStreams)((null==a?void 0:a.id)||o.id);return i.ZP.createElement("div",{className:(0,g.Z)("GroupCallParticipantVideo",r&&"active"),onClick:c},s&&i.ZP.createElement("button",{className:"back-button"},i.ZP.createElement("i",{className:"icon-arrow-left"}),l("Back")),i.ZP.createElement(R.Z,{user:a,chat:o,className:"thumbnail-avatar"}),d.LH&&i.ZP.createElement("div",{className:"thumbnail-wrapper"},i.ZP.createElement("video",{className:"thumbnail",muted:!0,autoPlay:!0,playsInline:!0,srcObject:null==u?void 0:u[e]})),i.ZP.createElement("video",{className:"video",muted:!0,autoPlay:!0,playsInline:!0,srcObject:null==u?void 0:u[e]}),i.ZP.createElement("div",{className:"info"},i.ZP.createElement("i",{className:"icon-microphone-alt"}),i.ZP.createElement("span",{className:"name"},(null==a?void 0:a.firstName)||(null==o?void 0:o.title)),"presentation"===e&&i.ZP.createElement("i",{className:"last-icon icon-active-sessions"})))}))),j=(0,i.X$)((0,o.c$)((e=>{const{participants:t}=(0,l.mU)(e)||{};return{participants:t}}))((({participants:e,onDoubleClick:t})=>{const[a,n]=(0,i.eJ)(void 0),o=(0,i.Ye)((()=>Object.values(e||{}).filter((e=>e.hasPresentationStream))),[e]),r=(0,i.Ye)((()=>Object.values(e||{}).filter((e=>e.hasVideoStream))),[e]),s=r.length+o.length,l=s<=2?1:s<=6?2:s<=9?3:4,c=3===s||2===l&&s%2!=0,d=(0,i.I4)(((e,t)=>{a&&e===a.id&&t===a.type?n(void 0):n({id:e,type:t})}),[a]);return i.ZP.createElement("div",{className:"streams",onDoubleClick:t},i.ZP.createElement("div",{className:(0,g.Z)("videos",c&&"span-last-video"),style:`--column-count: ${a?1:l}`},a&&i.ZP.createElement(L,{key:a.id,isFullscreen:!0,onClick:d,participant:e[a.id],type:a.type}),a?void 0:o.map((e=>i.ZP.createElement(L,{key:e.id,onClick:d,participant:e,type:"presentation"}))),a?void 0:r.map((e=>i.ZP.createElement(L,{key:e.id,onClick:d,participant:e,type:"video"})))))}))),_=[0,10],B=(0,i.X$)((0,o.c$)(((e,{groupCallId:t})=>{const{connectionState:a,title:n,isSpeakerDisabled:i,participants:o,participantsCount:r}=(0,l.$5)(e,t)||{};return{connectionState:a,title:n,isSpeakerEnabled:!i,participantsCount:r,meParticipant:(0,l.GU)(e,t,e.currentUserId),isGroupCallPanelHidden:!!e.groupCalls.isGroupCallPanelHidden,isAdmin:(0,l.Ht)(e),participants:o}}),((e,t)=>(0,u.ei)(t,["toggleGroupCallVideo","leaveGroupCall","toggleGroupCallPresentation","toggleGroupCallPanel","connectToActiveGroupCall","playGroupCallSound"])))((({groupCallId:e,isGroupCallPanelHidden:t,connectionState:a,isSpeakerEnabled:o,title:r,meParticipant:s,isAdmin:l,participants:c,toggleGroupCallVideo:d,toggleGroupCallPresentation:u,leaveGroupCall:p,toggleGroupCallPanel:m,connectToActiveGroupCall:y,playGroupCallSound:k})=>{const Z=(0,C.Z)(),G=(0,i.sO)(null),[T,N]=(0,i.eJ)(!1),[D,O,U]=(0,f.Z)(),[V,R,A]=(0,f.Z)(!0),H=c&&Object.values(c).some((e=>e.video||e.presentation)),x=D&&!v.wB&&H,[L,B]=(0,i.eJ)(),[z,Q,q]=(0,f.Z)(),[X,J,Y]=(0,f.Z)(),[W,K]=(0,i.eJ)(!1),[ee,te]=(0,i.eJ)(!1),ae=null==s?void 0:s.hasVideoStream,ne=null==s?void 0:s.hasPresentationStream,ie="connected"!==a,oe=!(null==s?void 0:s.canSelfUnmute)&&(null==s?void 0:s.isMuted),re=(0,i.I4)(((e,t)=>{const a=e.getBoundingClientRect(),n=G.current;B({anchor:{x:a.left,y:a.top-n.offsetTop+60},participant:t}),Q()}),[Q]);(0,i.d4)((()=>{"connected"===a?k({sound:"join"}):"reconnecting"===a&&k({sound:"connecting"})}),[a,k]);const se=(0,i.I4)((()=>{te(!ee)}),[ee]),le=()=>{Y(),K(!1)},ce=(0,i.Ye)((()=>({onTrigger:e,isOpen:t})=>i.ZP.createElement(P.Z,{round:!0,size:"smaller",color:"translucent",className:t?"active":void 0,onClick:e,ariaLabel:Z("AccDescrMoreOptions")},i.ZP.createElement("i",{className:"icon-more"}))),[Z]),de=(0,i.I4)((()=>{G.current&&(D?document.exitFullscreen().then(U):G.current.requestFullscreen().then(O))}),[U,D,O]),ue=(0,i.I4)((()=>{v.t0&&(D||A(),de())}),[A,de,D]),pe=(0,i.I4)((()=>{D?U():O()}),[U,D,O]);(0,i.d4)((()=>{if(!v.t0)return;const e=G.current;return e?(e.addEventListener("fullscreenchange",pe),()=>{e.removeEventListener("fullscreenchange",pe)}):void 0}),[pe]),(0,i.d4)((()=>{y()}),[y,e]);const me=()=>{if(l&&!X)return J(),void(D&&de());k({sound:"leave"}),N(!0),Y()};return i.ZP.createElement(b.Z,{isOpen:!t&&!T,onClose:m,className:(0,g.Z)("GroupCall",v.wB&&"single-column",x&&"landscape",!V&&"no-sidebar"),dialogRef:G,onCloseAnimationEnd:()=>{T&&p({shouldDiscard:ee})}},i.ZP.createElement("div",{className:"header"},i.ZP.createElement("h3",null,r||Z("VoipGroupVoiceChat")),v.t0&&i.ZP.createElement(P.Z,{round:!0,size:"smaller",color:"translucent",onClick:de,ariaLabel:Z(D?"AccExitFullscreen":"AccSwitchToFullscreen")},i.ZP.createElement("i",{className:D?"icon-smallscreen":"icon-fullscreen"})),x&&i.ZP.createElement(P.Z,{round:!0,size:"smaller",color:"translucent",onClick:()=>{V?A():R()}},i.ZP.createElement("i",{className:"icon-sidebar"})),(n.IS_SCREENSHARE_SUPPORTED&&!oe||l)&&i.ZP.createElement(h.Z,{positionX:"right",trigger:ce},n.IS_SCREENSHARE_SUPPORTED&&!oe&&i.ZP.createElement(E.Z,{icon:"share-screen",onClick:u},Z(ne?"VoipChatStopScreenCapture":"VoipChatStartScreenCapture")),l&&i.ZP.createElement(E.Z,{icon:"phone-discard-outline",onClick:()=>{K(!0),te(!0),J(),D&&de()},destructive:!0},Z("VoipGroupLeaveAlertEndChat")))),i.ZP.createElement("div",{className:"scrollable custom-scroll"},i.ZP.createElement(j,{onDoubleClick:ue}),(!x||V)&&i.ZP.createElement(F,{openParticipantMenu:re})),i.ZP.createElement($,{participant:null==L?void 0:L.participant,anchor:null==L?void 0:L.anchor,isDropdownOpen:z,closeDropdown:q}),i.ZP.createElement("div",{className:"buttons"},ie&&i.ZP.createElement(S.Z,null),i.ZP.createElement("div",{className:"button-wrapper"},i.ZP.createElement("div",{className:"video-buttons"},ae&&(v.wZ||v.cj)&&i.ZP.createElement("button",{className:"smaller-button",onClick:n.switchCameraInput},i.ZP.createElement(I,{name:"CameraFlip",playSegment:_,size:24})),i.ZP.createElement("button",{className:(0,g.Z)("small-button",oe?"speaker":"camera",(ae||oe&&o)&&"active"),onClick:()=>{oe?(0,n.toggleSpeaker)():d()}},i.ZP.createElement("i",{className:oe?"icon-speaker":ae?"icon-video-stop":"icon-video"}))),i.ZP.createElement("div",{className:"button-text"},Z(oe?"VoipSpeaker":"VoipCamera"))),i.ZP.createElement(w,null),i.ZP.createElement("div",{className:"button-wrapper"},i.ZP.createElement("button",{className:"small-button leave",onClick:me},i.ZP.createElement("i",{className:"icon-phone-discard"})),i.ZP.createElement("div",{className:"button-text"},Z("VoipGroupLeave")))),i.ZP.createElement(b.Z,{isOpen:X,onClose:le,className:"error",title:Z(W?"VoipGroupEndAlertTitle":"VoipGroupLeaveAlertTitle")},i.ZP.createElement("p",null,Z(W?"VoipGroupEndAlertText":"VoipGroupLeaveAlertText")),!W&&i.ZP.createElement(M.Z,{label:Z("VoipGroupEndChat"),checked:ee,onChange:se}),i.ZP.createElement(P.Z,{isText:!0,className:"confirm-dialog-button",onClick:me},Z(W?"VoipGroupEnd":"VoipGroupLeave")),i.ZP.createElement(P.Z,{isText:!0,className:"confirm-dialog-button",onClick:le},Z("Cancel"))))}))),z=(0,i.X$)((0,o.c$)((e=>({groupCall:(0,l.mU)(e),isGroupCallPanelHidden:e.groupCalls.isGroupCallPanelHidden,meParticipant:(0,l.GU)(e,e.groupCalls.activeGroupCallId,e.currentUserId)})),((e,t)=>(0,u.ei)(t,["toggleGroupCallPanel"])))((({groupCall:e,meParticipant:t,isGroupCallPanelHidden:a,toggleGroupCallPanel:n})=>{const o=(0,C.Z)();if((0,i.d4)((()=>{document.body.classList.toggle("has-group-call-header",a)}),[a]),e&&t)return i.ZP.createElement("div",{className:(0,g.Z)("ActiveCallHeader",a&&"open"),onClick:n},i.ZP.createElement("span",{className:"title"},e.title||o("VoipGroupVoiceChat")))})))},7324:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(6137),i=a(647);const o={MonkeyIdle:a(1679),MonkeyTracking:a(4889),MonkeyClose:a(4185),MonkeyPeek:a(8431),FoldersAll:a(6041),FoldersNew:a(7196),DiscussionGroups:a(4349),CameraFlip:a(6280),HandFilled:a(9129),HandOutline:a(1039),Speaker:a(9261),VoiceAllowTalk:a(2873),VoiceMini:a(7242),VoiceMuted:a(1274),VoiceOutlined:a(973)};function r(e){const t=o[e].replace(window.location.origin,"");return i.he(`file${t}`,n.IU.Lottie)}},3794:(e,t)=>{(()=>{"use strict";var e={"./src/blacksilence.ts":(e,t,a)=>{a.r(t),a.d(t,{silence:()=>n,black:()=>i});const n=e=>{const t=e.createOscillator(),a=t.connect(e.createMediaStreamDestination());return t.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])},i=({width:e=640,height:t=480}={})=>{const a=Object.assign(document.createElement("canvas"),{width:e,height:t}),n=a.getContext("2d");if(!n)throw Error("Cannot create canvas ctx");n.fillRect(0,0,e,t);const i=a.captureStream();return new MediaStream([Object.assign(i.getVideoTracks()[0],{enabled:!1})])}},"./src/buildSdp.ts":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a("./src/utils.ts");const i=(e,t=!1,a=!1)=>{const i=[],o=e=>{i.push(e)},{sessionId:r,ssrcs:s,audioExtensions:l,videoExtensions:c,audioPayloadTypes:d,videoPayloadTypes:u,transport:{ufrag:p,pwd:m,fingerprints:v,candidates:g}}=e;o("v=0"),o(`o=- ${r} 2 IN IP4 0.0.0.0`),o("s=-"),o("t=0 0"),o(`a=group:BUNDLE ${s.map((e=>e.endpoint)).join(" ")}${a?"":" 2"}`),o("a=ice-lite");const f=e=>{let t="";t+="a=candidate:",t+=`${e.foundation} ${e.component} ${e.protocol} ${e.priority} ${e.ip} ${e.port} typ ${e.type}`,"rel-addr"in e&&(t+=` raddr ${e["rel-addr"]} rport ${e["rel-port"]}`),t+=` generation ${e.generation}`,o(t)},C=()=>{o(`a=ice-ufrag:${p}`),o(`a=ice-pwd:${m}`),v.forEach((e=>{o(`a=fingerprint:${e.hash} ${e.fingerprint}`),o("a=setup:passive")})),g.forEach(f)},S=e=>{var t;const{channels:a,id:n,name:i,clockrate:r,parameters:s}=e;var l=a?`/${a}`:"";o(`a=rtpmap:${n} ${i}/${r}${l}`),s&&(l=Object.keys(s).map((e=>`${e}=${s[e]};`)).join(" "),o(`a=fmtp:${n} ${l}`)),null===(t=e["rtcp-fbs"])||void 0===t||t.forEach((e=>{o(`a=rtcp-fb:${n} ${e.type}${e.subtype?` ${e.subtype}`:""}`)}))};return e=e=>{const a=e.isVideo?u:d;var i=e.isVideo?"video":"audio";o(`m=${i} ${e.isMain?1:0} RTP/SAVPF ${a.map((e=>e.id)).join(" ")}`),o("c=IN IP4 0.0.0.0"),o("b=AS:1300"),o(`a=mid:${e.endpoint}`),o("a=rtcp-mux"),a.forEach(S),o("a=rtcp:1 IN IP4 0.0.0.0"),e.isVideo&&o("a=rtcp-rsize"),(e.isVideo?c:l).forEach((({id:e,uri:t})=>{o(`a=extmap:${e} ${t}`)})),e.isRemoved?o("a=inactive"):(C(),t?o("a=recvonly"):(e.isMain?o("a=sendrecv"):(o("a=sendonly"),o("a=bundle-only")),e.sourceGroups.forEach((t=>{o(`a=ssrc-group:${t.semantics} ${t.sources.map(n.fromTelegramSource).join(" ")}`),t.sources.forEach((t=>{t=(0,n.fromTelegramSource)(t),o(`a=ssrc:${t} cname:${e.endpoint}`),o(`a=ssrc:${t} msid:${e.endpoint} ${e.endpoint}`),o(`a=ssrc:${t} mslabel:${e.endpoint}`),o(`a=ssrc:${t} label:${e.endpoint}`)}))}))))},s.filter((e=>"0"===e.endpoint||"1"===e.endpoint)).map(e),a||(o("m=application 1 UDP/DTLS/SCTP webrtc-datachannel"),o("c=IN IP4 0.0.0.0"),C(),o("a=ice-options:trickle"),o("a=mid:"+(a?"1":"2")),o("a=sctp-port:5000"),o("a=max-message-size:262144")),s.filter((e=>"0"!==e.endpoint&&"1"!==e.endpoint)).map(e),`${i.join("\n")}\n`}},"./src/parseSdp.ts":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a("./src/utils.ts");const i=e=>{var t,a;if(!e||!e.sdp)throw Error("Failed parsing SDP: session description is null");const i=e.sdp.split("\r\nm=").map(((e,t)=>0===t?e:`m=${e}`)).reduce(((e,t)=>{var a;return e[(null===(a=t.match(/^m=(.+?)\s/))||void 0===a?void 0:a[1])||"header"]=t.split("\r\n").filter(Boolean),e}),{});var o=(e,t)=>{var a,n;return t?null===(a=i[t])||void 0===a||null===(n=a.find((t=>t.startsWith(e))))||void 0===n?void 0:n.substr(e.length):Object.values(i).map((t=>{var a;return null===(a=t.find((t=>t.startsWith(e))))||void 0===a?void 0:a.substr(e.length)})).filter(Boolean)[0]};const r=o("a=ssrc:","audio");var s=r&&Number(r.split(" ")[0]);const l=(null===(t=o("a=ssrc-group:","video"))||void 0===t?void 0:t.split(" "))||void 0;if(!l)throw Error("Failed parsing SDP: no video ssrc");var[c,d]=(null===(a=o("a=fingerprint:"))||void 0===a?void 0:a.split(" "))||[];if(!c||!d)throw Error("Failed parsing SDP: no fingerprint");if(e=o("a=ice-ufrag:"),o=o("a=ice-pwd:"),!e||!o)throw Error("Failed parsing SDP: no ICE ufrag or pwd");return{fingerprints:[{fingerprint:d,hash:c,setup:"active"}],pwd:o,ufrag:e,...s&&{ssrc:(0,n.toTelegramSource)(s)},...l&&{"ssrc-groups":[{semantics:l[0],sources:l.slice(1,l.length).map(Number).map(n.toTelegramSource)}]}}}},"./src/secretsauce.ts":(e,t,a)=>{a.r(t),a.d(t,{getDevices:()=>async function(e,t=!0){return(await navigator.mediaDevices.enumerateDevices()).filter((a=>a.kind===`${e}${t?"input":"output"}`))},toggleSpeaker:()=>function(){var e,t;s&&(s.isSpeakerDisabled=!s.isSpeakerDisabled,null!==(e=s)&&void 0!==e&&null!==(t=e.onUpdate)&&void 0!==t&&t.call(e,{"@type":"updateGroupCallConnectionState",connectionState:"connected",isSpeakerDisabled:s.isSpeakerDisabled}),s.participantFunctions&&Object.values(s.participantFunctions).forEach((e=>{var t,a;null===(t=e.toggleMute)||void 0===t||t.call(e,!(null===(a=s)||void 0===a||!a.isSpeakerDisabled))})))},toggleNoiseSuppression:()=>function(){if(s&&s.myId&&s.streams){const a=s.streams[s.myId].audio;if(a){const n=a.getTracks()[0];var e,t;n&&(({echoCancellation:e,noiseSuppression:t}=n.getConstraints()),n.applyConstraints({echoCancellation:!e,noiseSuppression:!t}))}}},getUserStreams:()=>c,setVolume:()=>function(e,t){var a,n,i;const o=null===(a=s)||void 0===a||null===(n=a.participantFunctions)||void 0===n?void 0:n[e];o&&(null===(i=o.setVolume)||void 0===i||i.call(o,t))},isStreamEnabled:()=>d,switchCameraInput:()=>async function(){var e;if(null!==(e=s)&&void 0!==e&&e.myId&&s.connection&&s.streams&&s.facingMode){var t;const e=null===(t=c(s.myId))||void 0===t?void 0:t.video;if(e){const t=e.getTracks()[0];if(t){const e=s.connection.getSenders().find((e=>{var a;return t.id===(null===(a=e.track)||void 0===a?void 0:a.id)}));if(e){s.facingMode="environment"===s.facingMode?"user":"environment";try{const t=await p("video",s.facingMode);await e.replaceTrack(t.getTracks()[0]),s.streams[s.myId].video=t}catch(e){}}}}}},toggleStream:()=>m,leaveGroupCall:()=>g,handleUpdateGroupCallParticipants:()=>async function(e){if(s){const{participants:n,conference:o,connection:r,myId:l}=s;if(n&&o&&r&&o.ssrcs&&o.transport&&l)if(e.find((e=>{var t,a,n,i;return e.isSelf&&e.source!==(null===(t=s)||void 0===t||null===(a=t.conference)||void 0===a||null===(n=a.ssrcs)||void 0===n||null===(i=n.find((e=>e.isMain&&!e.isVideo)))||void 0===i?void 0:i.sourceGroups[0].sources[0])})))g();else{const n=[];if(e.forEach((e=>{if(e.isSelf)e.isMuted&&!e.canSelfUnmute&&(m("audio",!1),m("video",!1),m("presentation",!1));else{var t=e.isLeft;const a=e.isMuted||e.isMutedByMe,i=!e.isVideoJoined||!e.video||t,r=!e.presentation||t;let s=!1,l=!1,c=!1;o.ssrcs.filter((t=>t.userId===e.id)).forEach((t=>{t.isVideo||(t.sourceGroups[0].sources[0]===e.source&&(l=!0),t.isRemoved=a),t.isVideo&&(t.isPresentation||(e.video&&t.endpoint===e.video.endpoint&&(s=!0),t.isRemoved=i),t.isPresentation&&(e.presentation&&t.endpoint===e.presentation.endpoint&&(c=!0),t.isRemoved=r))})),a||l||o.ssrcs.push({userId:e.id,isMain:!1,endpoint:`audio${e.source}`,isVideo:!1,sourceGroups:[{semantics:"FID",sources:[e.source]}]}),i||s||!e.video||(n.push(e.video.endpoint),o.ssrcs.push({userId:e.id,isMain:!1,endpoint:e.video.endpoint,isVideo:!0,sourceGroups:e.video.sourceGroups})),r||c||!e.presentation||o.ssrcs.push({isPresentation:!0,userId:e.id,isMain:!1,endpoint:e.presentation.endpoint,isVideo:!0,sourceGroups:e.presentation.sourceGroups})}})),s.updatingParticipantsQueue)s.updatingParticipantsQueue.push(o);else{s.updatingParticipantsQueue=[],e=(0,i.default)(o),await r.setRemoteDescription({type:"offer",sdp:e});try{var t=await r.createAnswer();if(await r.setLocalDescription(t),u(l),0<s.updatingParticipantsQueue.length)for(const e of s.updatingParticipantsQueue){await r.setRemoteDescription({type:"offer",sdp:(0,i.default)(e)});var a=await r.createAnswer();await r.setLocalDescription(a),u(l)}s.updatingParticipantsQueue=void 0}catch(e){console.error(e)}}}}},handleUpdateGroupCallConnection:()=>async function(e,t){if(s){var a=t?s.screenshareConference:s.conference;const d=t?s.screenshareConnection:s.connection;if(a&&d&&a.ssrcs){var n,o,r,l,c=Date.now();e={...a,transport:e.transport,sessionId:c,audioExtensions:null===(n=e.audio)||void 0===n?void 0:n["rtp-hdrexts"],audioPayloadTypes:null===(o=e.audio)||void 0===o?void 0:o["payload-types"],videoExtensions:null===(r=e.video)||void 0===r?void 0:r["rtp-hdrexts"],videoPayloadTypes:null===(l=e.video)||void 0===l?void 0:l["payload-types"]},s={...s,...t?{screenshareConference:e}:{conference:e}};try{await d.setRemoteDescription({type:"answer",sdp:(0,i.default)(e,!0,t)})}catch(e){console.error(e)}}}},startSharingScreen:()=>async function(){if(s)try{const e=await p("presentation");return e?(e.getTracks()[0].onended=()=>{var e;s&&s.myId&&(null!==(e=s.streams)&&void 0!==e&&e[s.myId].presentation,u(s.myId),l())},new Promise((t=>{var{connection:a,dataChannel:t}=S([e],t,!0);s={...s,screenshareConnection:a,screenshareDataChannel:t}}))):void 0}catch(e){return}},joinGroupCall:()=>function(e,t,a,n){if(s)throw Error("Already in call");v("connecting");var i=t.createMediaStreamDestination();return a.srcObject=i.stream,a.play().catch((e=>console.warn(e))),s={onUpdate:n,participants:[],myId:e,speaking:{},silence:(0,o.silence)(t),black:(0,o.black)({width:640,height:480}),analyserInterval:setInterval(f,1e3),audioElement:a,destination:i,audioContext:t},new Promise((e=>{s={...s,...S([s.silence,s.black],e)}}))}});var n=a("./src/parseSdp.ts"),i=a("./src/buildSdp.ts"),o=a("./src/blacksilence.ts"),r=a("./src/utils.ts");let s;function l(e){var t,a,n,i;s&&(null!==(t=s.screenshareDataChannel)&&void 0!==t&&t.close(),null!==(a=s.screenshareConnection)&&void 0!==a&&a.close(),e||null===(n=(i=s).onUpdate)||void 0===n||n.call(i,{"@type":"updateGroupCallLeavePresentation"}))}function c(e){var t,a;return null===(t=s)||void 0===t||null===(a=t.streams)||void 0===a?void 0:a[e]}function d(e,t){var a,n,i;const o=(t=t||(null===(a=s)||void 0===a?void 0:a.myId))&&(null===(n=c(t))||void 0===n?void 0:n[e]);return!!o&&(null===(i=o.getTracks()[0])||void 0===i?void 0:i.enabled)}function u(e){var t,a,n;null===(t=s)||void 0===t||null===(a=t.onUpdate)||void 0===a||a.call(t,{"@type":"updateGroupCallStreams",userId:e,hasAudioStream:d("audio",e),hasVideoStream:d("video",e),hasPresentationStream:d("presentation",e),amplitude:null===(n=s.speaking)||void 0===n?void 0:n[e]})}function p(e,t="user"){return"presentation"===e?navigator.mediaDevices.getDisplayMedia({audio:!1,video:!0}):navigator.mediaDevices.getUserMedia({audio:"audio"===e&&{...r.IS_ECHO_CANCELLATION_SUPPORTED&&{echoCancellation:!0},...r.IS_NOISE_SUPPRESSION_SUPPORTED&&{noiseSuppression:!0}},video:"video"===e&&{facingMode:t}})}async function m(e,t){if(s&&s.myId&&s.connection&&s.streams){var a;const o=null===(a=c(s.myId))||void 0===a?void 0:a[e];if(o){const a=o.getTracks()[0];if(a){var n;const o=[...s.connection.getSenders(),...(null===(n=s.screenshareConnection)||void 0===n?void 0:n.getSenders())||[]].find((e=>{var t;return a.id===(null===(t=e.track)||void 0===t?void 0:t.id)}));if(o){t=void 0===t?!a.enabled:t;try{if(t&&!a.enabled){const t=await p(e);if(await o.replaceTrack(t.getTracks()[0]),s.streams[s.myId][e]=t,"video"===e)s.facingMode="user";else if("audio"===e){var i;const e=s.audioContext;if(!e)return;const a=e.createMediaStreamSource(t),n=e.createAnalyser();n.minDecibels=-100,n.maxDecibels=-30,n.smoothingTimeConstant=.05,n.fftSize=1024,a.connect(n),s={...s,participantFunctions:{...s.participantFunctions,[s.myId]:{...null===(i=s.participantFunctions)||void 0===i?void 0:i[s.myId],getCurrentAmplitude:()=>{var e=new Uint8Array(n.frequencyBinCount);return n.getByteFrequencyData(e),(0,r.getAmplitude)(e,1.5)}}}}}}else if(!t&&a.enabled){a.stop();const t="audio"===e?s.silence:s.black;if(!t)return;await o.replaceTrack(t.getTracks()[0]),s.streams[s.myId][e]=t,"video"===e&&(s.facingMode=void 0)}u(s.myId),"presentation"!==e||t||l(!0)}catch(e){}}}}}}function v(e){var t,a;null===(t=s)||void 0===t||null===(a=t.onUpdate)||void 0===a||a.call(t,{"@type":"updateGroupCallConnectionState",connectionState:e})}function g(){var e,t,a;s&&(s.myId&&null!==(e=s.streams)&&void 0!==e&&e[s.myId]&&Object.values(s.streams[s.myId]||{}).forEach((e=>{null==e||e.getTracks().forEach((e=>{e.stop()}))})),l(!0),null!==(t=s.dataChannel)&&void 0!==t&&t.close(),null!==(a=s.connection)&&void 0!==a&&a.close(),v("disconnected"),s.analyserInterval&&clearInterval(s.analyserInterval),s=void 0)}function f(){s&&s.participantFunctions&&Object.keys(s.participantFunctions).forEach((e=>{const t=s.participantFunctions[Number(e)].getCurrentAmplitude;var a,n;t&&(a=t(),n=s.speaking[e]||0,((s.speaking[e]=a)>r.THRESHOLD&&n<=r.THRESHOLD||a<=r.THRESHOLD&&n>r.THRESHOLD)&&u(e))}))}function C(e){if(s&&s.audioElement&&s.destination&&s.audioContext){var t,a,n=null===(t=s.conference)||void 0===t||null===(a=t.ssrcs)||void 0===a?void 0:a.find((t=>t.endpoint===e.track.id));if(n&&n.userId){var i,o;const{userId:t,isPresentation:a}=n;var l=null===(i=s.participants)||void 0===i?void 0:i.find((e=>e.id===t));const d="video"===e.track.kind?a?"presentation":"video":"audio";if(e.track.onended=()=>{var e,a;null!==(e=s)&&void 0!==e&&null!==(a=e.streams)&&void 0!==a&&a[t][d],u(t)},n=e.streams[0],"audio"===e.track.kind){var c;const e=s.audioContext,a=e.createMediaStreamSource(n),i=e.createGain();i.gain.value=((null==l?void 0:l.volume)||1e4)/1e4;const o=e.createGain();i.gain.value=1;const d=e.createAnalyser();d.minDecibels=-100,d.maxDecibels=-30,d.smoothingTimeConstant=.05,d.fftSize=1024,a.connect(d).connect(o).connect(i).connect(s.destination);const u=new Audio;u.srcObject=a.mediaStream,u.muted=!0,u.remove(),s={...s,participantFunctions:{...s.participantFunctions,[t]:{...null===(c=s.participantFunctions)||void 0===c?void 0:c[t],setVolume:e=>{i.gain.value=1<e?2*e:e},toggleMute:e=>{o.gain.value=e?0:1},getCurrentAmplitude:()=>{var e=new Uint8Array(d.frequencyBinCount);return d.getByteFrequencyData(e),(0,r.getAmplitude)(e,1.5)}}}}}s={...s,streams:{...s.streams,[t]:{...null===(o=s.streams)||void 0===o?void 0:o[t],[d]:n}}},u(t)}}}function S(e,t,a=!1){const i=new RTCPeerConnection;var o=a?void 0:function(e){const t=e.createDataChannel("data",{id:0});return t.onopen=()=>{},t.onmessage=e=>{JSON.parse(e.data).colibriClass},t.onerror=e=>{console.log("%conerror","background: green; font-size: 5em"),console.error(e)},t}(i);return e.forEach((e=>e.getTracks().forEach((t=>{i.addTrack(t,e)})))),a||(i.oniceconnectionstatechange=()=>{var e=i.iceConnectionState;"connected"===e||"completed"===e?v("connected"):"checking"===e||"new"===e?v("connecting"):"disconnected"===i.iceConnectionState&&v("reconnecting")}),i.ontrack=C,i.onnegotiationneeded=async()=>{if(s){var o=s.myId;if(o){var r=await i.createOffer({offerToReceiveVideo:!0,offerToReceiveAudio:!a});if(await i.setLocalDescription(r),r.sdp){var l,c=(0,n.default)(r),d=a?void 0:{userId:"",sourceGroups:[{semantics:"FID",sources:[c.ssrc||0]}],isRemoved:a,isMain:!0,isVideo:!1,isPresentation:a,endpoint:a?"1":"0"},p=c["ssrc-groups"]&&{isPresentation:a,userId:"",sourceGroups:c["ssrc-groups"],isMain:!0,isVideo:!0,endpoint:a?"0":"1"};r=a?s.screenshareConference:s.conference;const i=[];a?(p&&i.push(p),d&&i.push(d)):(d&&i.push(d),p&&i.push(p)),d=e.find((e=>"audio"===e.getTracks()[0].kind)),p=e.find((e=>"video"===e.getTracks()[0].kind)),s={...s,...a?{screenshareConference:{...r,ssrcs:i}}:{conference:{...r,ssrcs:i}},streams:{...s.streams,[o]:{...null===(l=s.streams)||void 0===l?void 0:l[o],...d&&{audio:d},...!a&&p?{video:p}:{presentation:p}}}},u(o),t(c)}}}},{connection:i,dataChannel:o}}},"./src/types.ts":(e,t,a)=>{a.r(t)},"./src/utils.ts":(e,t,a)=>{var n,i,o,r,s;function l(){var{userAgent:e,platform:t}=window.navigator;let a;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?a="macOS":-1!==["iPhone","iPad","iPod"].indexOf(t)?a="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?a="Windows":/Android/.test(e)?a="Android":/Linux/.test(t)&&(a="Linux"),a}a.r(t),a.d(t,{toTelegramSource:()=>function(e){return e<<0},fromTelegramSource:()=>function(e){return e>>>0},getAmplitude:()=>function(e,t=3){if(!e)return 0;var a=e.length;let n=0;for(let t=0;t<a;t++)n+=e[t]*e[t];var i=Math.sqrt(n/a)/255;return Math.min(1,i*t)},getPlatform:()=>l,THRESHOLD:()=>c,PLATFORM_ENV:()=>d,IS_MAC_OS:()=>u,IS_IOS:()=>p,IS_SCREENSHARE_SUPPORTED:()=>m,IS_ECHO_CANCELLATION_SUPPORTED:()=>v,IS_NOISE_SUPPRESSION_SUPPORTED:()=>g});const c=.1,d=l(),u="macOS"===d,p="iOS"===d,m="getDisplayMedia"in((null===(n=navigator)||void 0===n?void 0:n.mediaDevices)||{}),v=null===(i=navigator)||void 0===i||null===(o=i.mediaDevices)||void 0===o?void 0:o.getSupportedConstraints().echoCancellation,g=null===(r=navigator)||void 0===r||null===(s=r.mediaDevices)||void 0===s?void 0:s.getSupportedConstraints().noiseSuppression}},a={};function n(t){var i=a[t];return void 0!==i||(i=a[t]={exports:{}},e[t](i,i.exports,n)),i.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{handleUpdateGroupCallConnection:()=>e.handleUpdateGroupCallConnection,startSharingScreen:()=>e.startSharingScreen,joinGroupCall:()=>e.joinGroupCall,getDevices:()=>e.getDevices,getUserStreams:()=>e.getUserStreams,setVolume:()=>e.setVolume,isStreamEnabled:()=>e.isStreamEnabled,toggleStream:()=>e.toggleStream,leaveGroupCall:()=>e.leaveGroupCall,handleUpdateGroupCallParticipants:()=>e.handleUpdateGroupCallParticipants,switchCameraInput:()=>e.switchCameraInput,toggleSpeaker:()=>e.toggleSpeaker,toggleNoiseSuppression:()=>e.toggleNoiseSuppression,IS_SCREENSHARE_SUPPORTED:()=>t.IS_SCREENSHARE_SUPPORTED,THRESHOLD:()=>t.THRESHOLD});var e=n("./src/secretsauce.ts"),t=n("./src/utils.ts");n("./src/types.ts")})();var o,r=t;for(o in i)r[o]=i[o];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})()},4349:(e,t,a)=>{"use strict";e.exports=a.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a..tgs"},6041:(e,t,a)=>{"use strict";e.exports=a.p+"FoldersAll.3f9f9e243d19f0fbf9aa..tgs"},7196:(e,t,a)=>{"use strict";e.exports=a.p+"FoldersNew.9a40d71c0c8be70f5bd1..tgs"},4185:(e,t,a)=>{"use strict";e.exports=a.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e..tgs"},1679:(e,t,a)=>{"use strict";e.exports=a.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab..tgs"},8431:(e,t,a)=>{"use strict";e.exports=a.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e..tgs"},4889:(e,t,a)=>{"use strict";e.exports=a.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12..tgs"},6280:(e,t,a)=>{"use strict";e.exports=a.p+"CameraFlip.1a9fe44cf01fcb22347d..tgs"},9129:(e,t,a)=>{"use strict";e.exports=a.p+"HandFilled.f87939d160f1dc288586..tgs"},1039:(e,t,a)=>{"use strict";e.exports=a.p+"HandOutline.f9831751ba60df30c484..tgs"},9261:(e,t,a)=>{"use strict";e.exports=a.p+"Speaker.04bb3743412b41ff83c5..tgs"},2873:(e,t,a)=>{"use strict";e.exports=a.p+"VoiceAllowTalk.a9cc7c39ec438973ddc9..tgs"},7242:(e,t,a)=>{"use strict";e.exports=a.p+"VoiceMini.bf00ffdf69625c579569..tgs"},1274:(e,t,a)=>{"use strict";e.exports=a.p+"VoiceMuted.a4b4ec6bfd7c6c5fb275..tgs"},973:(e,t,a)=>{"use strict";e.exports=a.p+"VoiceOutlined.91b394ab3562cdfad6bc..tgs"}}]);
//# sourceMappingURL=757.e669f135f9dce66de020.js.map