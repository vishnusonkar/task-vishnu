export const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: "Lorem ipsum dolor sit amet consectetur Porta mi libero vestibulum saggytits",
                    subTitle: "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra odio placerat tempor magna. Ut in ornare sit sed odio.",
                    items:[
                        {name: "Consultation",
                         desc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat. Sed nibh integer eget commodo. Volutpat.",
                         imgUrl: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_640.jpg",
                         imagDesc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat sed nibh integer eget commodo, Volutpat lobortis tortor congue sem mi ver viverra Gravida vitae vulputate adipiscing nunc porta amet dapibus tortor ut. Elit magnis nunc id nisi enim forem risus pellentesque",   
                        },
                        {name: "Design & TechPacks",
                        desc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat. Sed nibh integer eget commodo. Volutpat.",
                        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzT65Sgazb1LfXp_gwLU7R0_CaLpQbi5ayNg&s",
                        imagDesc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat sed nibh integer eget commodo, Volutpat lobortis tortor congue sem mi ver viverra Gravida vitae vulputate adipiscing nunc porta amet dapibus tortor ut. Elit magnis nunc id nisi enim forem risus pellentesque",   
                        },
                        {name: "Sampling",
                        desc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat. Sed nibh integer eget commodo. Volutpat.",
                        imgUrl: "https://images.pexels.com/photos/2549944/pexels-photo-2549944.jpeg?auto=compress&cs=tinysrgb&w=600",
                        imagDesc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat sed nibh integer eget commodo, Volutpat lobortis tortor congue sem mi ver viverra Gravida vitae vulputate adipiscing nunc porta amet dapibus tortor ut. Elit magnis nunc id nisi enim forem risus pellentesque",   
                        },
                        {name: "Flexible Production",
                        desc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat. Sed nibh integer eget commodo. Volutpat.",
                        imgUrl: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600",
                        imagDesc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat sed nibh integer eget commodo, Volutpat lobortis tortor congue sem mi ver viverra Gravida vitae vulputate adipiscing nunc porta amet dapibus tortor ut. Elit magnis nunc id nisi enim forem risus pellentesque",   
                        },
                        {name: "Branding & Delivery",
                        desc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat. Sed nibh integer eget commodo. Volutpat.",
                        imgUrl: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
                        imagDesc: "Lorem ipsum dolor sit amet consectetur. Sit accumsan mollis velit volutpat sed nibh integer eget commodo, Volutpat lobortis tortor congue sem mi ver viverra Gravida vitae vulputate adipiscing nunc porta amet dapibus tortor ut. Elit magnis nunc id nisi enim forem risus pellentesque",   
                        },
                        
                    ],
                   
                }
            ]);
        }, 2000);
    });
};
