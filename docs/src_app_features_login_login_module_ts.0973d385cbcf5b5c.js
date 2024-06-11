"use strict";(self.webpackChunkng_shopping_cart=self.webpackChunkng_shopping_cart||[]).push([["src_app_features_login_login_module_ts"],{1672:(P,p,r)=>{r.r(p),r.d(p,{LoginModule:()=>s});var m=r(9706),w=r(1670),e=r(2508),y=r(6008),o=r(2560),h=r(1527),T=r(3902),L=r(4666),U=r(7822),v=r(4522),A=r(1267),d=r(5074);function C(i,n){1&i&&(o.TgZ(0,"mat-error"),o._uU(1," Please enter a valid email address "),o.qZA())}function F(i,n){1&i&&(o.TgZ(0,"mat-error"),o._uU(1," Email is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function x(i,n){1&i&&(o.TgZ(0,"mat-error"),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function J(i,n){1&i&&(o.TgZ(0,"mat-error"),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"incorrect"),o.qZA()())}class g{constructor(n,t,c,f,l,u){this.fb=n,this.authService=t,this.router=c,this.route=f,this.alert=l,this.spinner=u,this.showPassword=!1}ngOnInit(){this.authService.hasLoggedUser()?this.router.navigate(["/"]):this.loginForm=this.fb.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required]]})}login(){var n=this;return(0,w.Z)(function*(){n.spinner.show();const t=n.loginForm.getRawValue(),c=t.email,f=t.password,l=y.nb.find(E=>E.email===c);if(!l)return n.alert.createErrorDialog("Account does not exist","Check your email"),void n.spinner.hide();if(l.password!==f)return n.loginForm.get("password").setErrors({incorrectPassword:!0}),void n.spinner.hide();const u=n.route.snapshot.queryParamMap.get("from");yield n.authService.login(l);let Z=u??"/";u?.includes("admin")&&"admin"!==l.role&&(Z="/",n.alert.createWarningDialog("You are not an administrator","You cannot access this page!")),n.router.navigate([Z]),n.spinner.hide()})()}}g.\u0275fac=function(n){return new(n||g)(o.Y36(e.qu),o.Y36(h.e8),o.Y36(m.F0),o.Y36(m.gz),o.Y36(h.c9),o.Y36(T.o))},g.\u0275cmp=o.Xpm({type:g,selectors:[["ng-component"]],decls:29,vars:8,consts:[["role","form",1,"form",3,"formGroup"],[1,"login-container"],["routerLink","/","title","Back to Store",1,"logo"],["loading","lazy","src","assets/images/shopping-cart-logo.png","width","60","height","60"],[1,"fields"],["id","email-field"],["type","email","matInput","","formControlName","email","placeholder","Enter your email"],[4,"ngIf"],["matInput","","formControlName","password","placeholder","Enter your password",3,"type"],["matSuffix","","mat-icon-button","",3,"click"],[1,"action-buttons"],["mat-flat-button","","color","primary",3,"disabled","click"],["routerLink","/account-creation"]],template:function(n,t){1&n&&(o.TgZ(0,"form",0)(1,"div",1)(2,"div",2),o._UZ(3,"img",3),o.TgZ(4,"span"),o._uU(5,"Demo Store"),o.qZA()(),o.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),o._uU(9,"My Email"),o.qZA(),o._UZ(10,"input",6),o.YNc(11,C,2,0,"mat-error",7),o.YNc(12,F,4,0,"mat-error",7),o.qZA(),o.TgZ(13,"mat-form-field")(14,"mat-label"),o._uU(15,"Password"),o.qZA(),o._UZ(16,"input",8),o.TgZ(17,"button",9),o.NdJ("click",function(){return t.showPassword=!t.showPassword}),o.TgZ(18,"mat-icon"),o._uU(19),o.qZA()(),o.YNc(20,x,4,0,"mat-error",7),o.YNc(21,J,4,0,"mat-error",7),o.qZA()(),o.TgZ(22,"div",10)(23,"button",11),o.NdJ("click",function(){return t.login()}),o._uU(24," Login "),o.qZA(),o.TgZ(25,"a",12),o._uU(26," Haven't an account? Create now! "),o.qZA(),o.TgZ(27,"a"),o._uU(28," Forgot my password "),o.qZA()()()()),2&n&&(o.Q6J("formGroup",t.loginForm),o.xp6(11),o.Q6J("ngIf",t.loginForm.get("email").hasError("email")&&!t.loginForm.get("email").hasError("required")),o.xp6(1),o.Q6J("ngIf",t.loginForm.get("email").hasError("required")),o.xp6(4),o.Q6J("type",t.showPassword?"text":"password"),o.xp6(3),o.hij(" ",t.showPassword?"visibility_off":"visibility"," "),o.xp6(1),o.Q6J("ngIf",t.loginForm.get("password").hasError("required")),o.xp6(1),o.Q6J("ngIf",t.loginForm.get("password").hasError("incorrectPassword")),o.xp6(2),o.Q6J("disabled",t.loginForm.invalid))},dependencies:[L.O5,U.Hw,v.lW,v.RK,A.Nt,d.KE,d.hX,d.TO,d.R9,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,m.rH],styles:[".form{width:100%;height:100vh;display:flex;align-items:center;background-color:gray}  .form .login-container{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;width:50%;height:55vh;margin:auto;background-color:#fff;border-radius:10px}  .form .login-container .logo{display:flex;align-items:center;cursor:pointer}  .form .login-container .logo img{height:5rem;width:5rem;object-fit:contain}  .form .login-container .logo span{font-size:3rem;font-weight:900}  .form .login-container .fields{display:inherit;flex-direction:inherit;width:100%;align-items:inherit;justify-content:center;gap:8px}  .form .login-container .fields #email-field,   .form .login-container .fields #password-field{width:90%}  .form .login-container .fields .mat-mdc-form-field{width:100%;height:5rem}  .form .login-container .action-buttons{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}  .form .login-container .action-buttons button{width:50%}  .form .login-container .action-buttons a{text-decoration:underline;color:#006ac0;font-size:12px}"]});const b=[{path:"",component:g}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[m.Bz.forChild(b),m.Bz]});var Y=r(9575);class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[Y.m,a]})}}]);