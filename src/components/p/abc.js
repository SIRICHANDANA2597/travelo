<div className = "bot">
<div style ={{display: showChat ? "" : "none"}}>
  <SimpleForm></SimpleForm>
</div>      

<div>
  {!showChat 
    ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
    : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
</div>
</div> 