<template>
  <div>
    <h1>{{ title }}</h1>
    <p>WordCamp Tokyo 2018のために制作された様々なデータを GitHub 上で公開し、多くの人と共有できるように GitHub リポジトリの一覧ページを作りました。</p>
    <p>GitHub リポジトリの一覧は<a href="https://github.com/wct2018">https://github.com/wct2018</a>にアクセスするとご覧いただけます。</p>
    <h2>WordCamp について</h2>
    <p>オープンソース・ソフトウェアである WordPress は世界中のコミュニティによって支えられています。日本でも地域ごとにコミュニティがたくさんあり、WordPress の情報交換や勉強会が積極的に行われています。これらはボランティアメンバーによって運営されています。そのコミュニティの中でも WordCamp は、WordPress Foundation の公式な承認のもとに世界中で開かれている WordPress のイベントです。</p>
    <h2>Credit</h2>
    <h3>デザインチーム</h3>
    <h3>Web 制作チーム</h3>
    <h3>動画チーム</h3>
    <h2>License</h2>
    <p>GitHub 上で公開されているデザインデータは全て WordPress のライセンスである GPLv2 またはそれ以降のバージョンが適用されます。</p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      title: 'About'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}

</script>
