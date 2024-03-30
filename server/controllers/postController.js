import Post from "../models/Post.js";

export const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            throw new Error("Please give both title & content");
        }
        
        const post = new Post({
            title, // title: title
            content, // content: content
            author: req.user.id
        });
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}