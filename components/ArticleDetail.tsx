import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // 矢印アイコンをインポート

// Articleの型定義
interface Article {
  id: string;
  title: string;
  created_at: string;
  rendered_body: string;
}

const ArticleDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null); // 初期値をnullに設定
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(`https://qiita.com/api/v2/items/${id}`);
          setArticle(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching article:', error);
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>; // ローディング状態を表示
  if (!article) return <div>Article not found</div>; // articleがnullの場合の処理

  return (
    <Container>
      {/* 戻るボタンを追加 */}
      <IconButton
        style={{ position: 'absolute', top: '16px', left: '16px' }}
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: article.rendered_body }} />
    </Container>
  );
};

export default ArticleDetail;