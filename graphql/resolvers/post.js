const Post = require("../../models/post");

module.exports = {
	Query: {
		async getAllPosts() {
			try {
				const posts = await Post.find();
				return posts;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
