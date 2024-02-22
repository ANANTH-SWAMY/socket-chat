import ScrollToBottom from "react-scroll-to-bottom"

function ChatBody({messages}){
	return(
		<ScrollToBottom className="w-screen p-2 overflow-y-scroll">
			{messages.map((i, index)=>{
				if(i.name === "Me"){
					return (
						<div className="chat chat-end" key={index}>
							<div className="chat-header">{i.name}</div>
							<div className="chat-bubble chat-bubble-secondary">{i.message}</div>
						</div>
					)
				}else{
					return (
						<div className="chat chat-start" key={index}>
							<div className="chat-header">{i.name}</div>
							<div className="chat-bubble chat-bubble-primary">{i.message}</div>
						</div>
					)
				}
			})}
		</ScrollToBottom>
	)
}

export default ChatBody
