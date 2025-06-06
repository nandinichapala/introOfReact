const rootElement = document.getElementById("root");
      const fullName=user=>user.firstName+" "+user.lastName;
      const user={firstName:"nandini",lastName:"chepala"}
      const element = (<div><h1 className="greeting">Hello {fullName(user)}!!</h1>
      <p className="greeting">all the best</p>
      </div>)
      ReactDOM.render(element,rootElement);
