var tok={
	user:"",
	game:"",
	userName:"",
	passWord:"",
	eMail:"",
	createUser:function(){
		if(!confirm("New?"))return;
		this.userName=prompt("UserName");
		this.eMail=prompt("EMail");
		var b=true;
		while(b)
		{
			this.passWord=prompt("PassWord");
			if(prompt("Type again")==this.passWord)
			{
				b=false;
			}else{
				alert("Wrong");
			}
		}
		this.user.setUsername(this.userName);
		this.user.setEmail(this.eMail);
		this.user.setPassword(this.passWord);
		this.user.signUp(
		    null,
		    {
				sucess:function(){
				  alert("Success");
				  if(confirm("Login now?"))
				  {
					  this.loginUser(this.userName,this.passWord);
				  }
				},
			    error:function(user,error){
					alert("Error:"+error.code+","+error.message);
				}
			});
	},
	loginUser:function(name,pass){
		Bmob.User.logIn(
		  name,
		  pass,
		  {
			  sucess:alert("Login sucess"),
			  error:alert("Login fail")
		  });
	},
	saveSong:function(title,score){
		this.game.set("title",title);
		this.game.set("score",score);
		this.game.set("player",this.userName);
		this.game.save(null,{
			success:function(){alert("yes!");},
			error:function(){alert("Save score fail");}
		  });
	},
	bmobInit:function(){
		Bmob.initialize("7ecb4ea9f7917887846eafeca63f0f1d","89c3aa02506adb570e135b6ef0a3e46a");
		this.user=new Bmob.User();
		this.game=new (Bmob.Object.extend("game"));
	},
	gameSuccess:function(score){
		if(this.userName=="")
		{
			this.createUser();
			this.gameSucess();
		}else{
			this.saveSong(prompt("What is the title of this song?"),score);
		}
	}
}