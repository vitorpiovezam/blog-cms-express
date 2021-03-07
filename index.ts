import { PostService } from './src/services/post.service';
import express from 'express';
var cors = require('cors');

const app = express();
const postService = new PostService();
const port = process.env.PORT || 8000;

app.use(cors());
app.get('/', (req, res) => res.send('🔥'));

app.get('/posts', async (req, res) => res.send(await postService.getAllPosts()));
app.get('/post/:slug', async (req, res) => res.send(await postService.getPostBySlug(req.param('slug') || '')));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});