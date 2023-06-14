import { insertPost as insertPostDB, listPosts as listPostsDB, deletePost as deletePostDB, getAuthor, getPost } from "../db/posts.js"

async function insertPost(email, text) {
    const result = await insertPostDB(email, text)
    const postId = result[0].id
    return await getPost(postId)    
}

async function listPosts() {
    return await listPostsDB()
}

async function deletePost(user, id) {
    const { email } = await getAuthor(id)
    if (email == user) {
        return await deletePostDB(id)
    }
    return false
}

export { insertPost, listPosts, deletePost }
