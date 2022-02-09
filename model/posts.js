module.exports = {
    posts:[
        {
            id: "asfafadf",
            title: "Teste Mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({ id: generateID(), title, description })
    },
    deletePost(id){
        this.posts.splice(id, 1)
    }

    
}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}