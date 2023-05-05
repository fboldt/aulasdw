import { insertPost as insertPostDB, listPosts as listPostsDB, deletePost as deletePostDB, getAuthor } from "../db/posts.js"

async function insertPost(email, text) {
    return await insertPostDB(email, text)
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
