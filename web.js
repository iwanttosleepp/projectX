const heading=React.createElement("h3",{id:"Mallu"},"Hello there i am new to react!");
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"hello bro i am using React framework by meta"),
React.createElement("h2",{id:"heading2"},"hello bhi ma React framework istamal kar raha hu")
)]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);