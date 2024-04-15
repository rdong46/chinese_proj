import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Select,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

const songsData = [
  {
    id: 1,
    title: "我在人民广场吃炸鸡",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiqG2NXwQ5ffUX0AaJHnJo4qNyd3TVtq0Z42K4Ui-Ew&s",
    region: "Mainland China",
    timePeriod: "2010s",
    artist: "阿肆",
  },
  {
    id: 2,
    title: "红豆",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/W_azuki2111.jpg",
    region: "Mainland China",
    timePeriod: "1990s",
    artist: "王菲",
  },
  {
    id: 3,
    title: "水煮鱼",
    coverUrl:
      "https://dumplingmusicbar.com/wp-content/uploads/2022/11/%E6%B0%B4%E7%85%AE%E9%B1%BC-scaled.jpg",
    region: "Mainland China",
    timePeriod: "2000s",
    artist: "王蓉",
  },
  {
    id: 4,
    title: "咖喱辣椒",
    coverUrl: "https://example.com/song2.jpg",
    region: "Mainland China",
    timePeriod: "2000s",
    artist: "潘玮柏",
  },
  {
    id: 5,
    title: "青菜雞蛋麵",
    coverUrl:
      "https://i3.meishichina.com/atta/recipe/2020/12/29/20201229160917889342124691713.jpg?x-oss-process=style/p800",
    region: "Mainland China",
    timePeriod: "2000s",
    artist: "陳琳",
  },
  {
    id: 6,
    title: "麻婆豆腐",
    coverUrl: "https://i.ytimg.com/vi/JDRlmbk7YOI/maxresdefault.jpg",
    region: "Mainland China",
    timePeriod: "2010s",
    artist: "张艺兴",
  },
  {
    id: 7,
    title: "芹菜",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPic5XylM4fIli1zeMcZl2I9l3z8GFJlAwAfKyQC8XOxqYxZiIlu331K5pML_Lx1p2eVtT14mZc8f-CxUELXf4AtK3w6ZsfQ9PFACeAA",
    region: "Taiwan",
    timePeriod: "1990s",
    artist: "林志颖",
  },
  {
    id: 8,
    title: "蛋炒饭",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTh9MKflilaoQS945CB4s3OUgfpierSIhyRRhnhMB0PA&s",
    region: "Taiwan",
    timePeriod: "2000s",
    artist: "虞澄庆",
  },
  {
    id: 9,
    title: "洋葱",
    coverUrl: "https://kewpie.com.cn/images/yangcong_img01.jpg",
    region: "Taiwan",
    timePeriod: "2000s",
    artist: "杨宗纬",
  },
  {
    id: 10,
    title: "叉燒包",
    coverUrl:
      "https://dimsum8.group/wp-content/uploads/2023/11/%E8%A0%94%E7%9A%87%E5%8F%89%E7%87%92%E5%8C%85894X560.jpg",
    region: "Taiwan",
    timePeriod: "2000s",
    artist: "周蕙",
  },
  {
    id: 11,
    title: "爆米花的味道",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Popcorn02.jpg/1200px-Popcorn02.jpg",
    region: "Taiwan",
    timePeriod: "2000s",
    artist: "蔡依林",
  },
  {
    id: 12,
    title: "疗伤烧肉粽",
    coverUrl:
      "https://cp1.douguo.com/upload/caiku/a/7/7/750_a77cc395b002726c43c680e42aac63f7.jpg",
    region: "Taiwan",
    timePeriod: "2010s",
    artist: "周杰伦",
  },
];

const App = () => {
  const [sortBy, setSortBy] = useState("timePeriod");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const groupedSongs = {};
  songsData.forEach((song) => {
    const key = song[sortBy];
    if (!groupedSongs[key]) {
      groupedSongs[key] = [];
    }
    groupedSongs[key].push(song);
  });

  const sortTimePeriods = (a, b) => {
    const periodsOrder = {
      "1990s": 1,
      "2000s": 2,
      "2010s": 3,
    };
    return periodsOrder[a] - periodsOrder[b];
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex align="center" justify="space-between" mb={4} paddingRight={2}>
        <Heading as="h1" fontSize="3xl" fontWeight="bold">
          中国食物歌单
        </Heading>
        <Select w="auto" onChange={handleSortChange} value={sortBy}>
          <option value="timePeriod">Sort by Time Period</option>
          <option value="region">Sort by Region</option>
        </Select>
      </Flex>
      {Object.keys(groupedSongs)
        .sort(sortBy === "timePeriod" ? sortTimePeriods : undefined)
        .map((key) => (
          <Box padding={20} key={key} mb={4}>
            <Heading as="h2" fontSize="xl" mb={2}>
              {key}
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={10}>
              {groupedSongs[key].map((song) => (
                <GridItem key={song.id}>
                  <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                  >
                    <Image
                      src={song.coverUrl}
                      alt={song.title}
                      w="90%"
                      h="200px"
                      objectFit="cover"
                    />
                    <Box p={4}>
                      <Text fontSize="lg" fontWeight="bold" mb={2}>
                        {song.title}
                      </Text>
                      <Text fontSize="sm">Time Period: {song.artist}</Text>
                      <Text fontSize="sm">Region: {song.region}</Text>
                      <Text fontSize="sm">Time Period: {song.timePeriod}</Text>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
    </Container>
  );
};

export default App;
