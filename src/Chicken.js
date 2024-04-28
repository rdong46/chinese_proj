import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Chicken() {
  return (
    <Flex flexDirection={"column"}>
      <Center>
        <Box w="80%">
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            {/* Video Section */}
            <Box>
              <Heading as="h2" size="lg" textAlign="center">
                Song
              </Heading>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/a4Ueq1WKE24?si=j_ptgU69LTf0UG4w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>

            {/* Lyrics Section */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <VStack align="stretch" spacing="4">
                <Heading as="h2" size="lg" textAlign="center">
                  Lyrics
                </Heading>
                <Text whiteSpace="pre-line">
                  最近你变得很冷漠 让我有些不知所措
                  <br />
                  其实我没期待太多 你能像从前般爱我
                  <br />
                  只是连约会你都逃脱 什么解释都不说
                  <br />
                  不是我不知道 爱情需要煎熬
                  <br />
                  不是我没祈祷 我在人民广场吃着炸鸡
                  <br />
                  而此时此刻你在哪里 虽然或许你在声东击西
                  <br />
                  但疲倦已让我懒得怀疑 我在人民广场吃着炸鸡
                  <br />
                  而此时此刻 你在哪里 最近你变得很冷漠
                  <br />
                  让我有些不知所措 其实我没期待太多
                  <br />
                  你能像从前般爱我 只是连约会你都逃脱
                  <br />
                  什么解释都不说 不是我不知道 爱情需要煎熬
                  <br />
                  不是我没祈祷 你只是......迟到 我在人民广场吃着炸鸡
                  <br />
                  而此时此刻你在哪里 虽然或许你在声东击西
                  <br />
                  但疲倦已让我懒得怀疑 我在人民广场吃着炸鸡
                  <br />
                  而此时此刻 你在哪里 不是我不知道
                  <br />
                  爱情需要煎熬 不是我没祈祷 我在人民广场吃着炸鸡
                  <br />
                  而此时此刻你在？ 而此时此刻你在？ 而此时此刻你在？
                  <br />
                  我在人民广场吃着炸鸡 而此时此刻 你在？
                </Text>
              </VStack>
            </Box>
          </Flex>

          {/* Text Sections */}
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w="50%" mr={{ base: 0, md: "4" }}>
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Dish Introduction
                </Heading>
                <UnorderedList>
                  <ListItem>炸鸡是西方文化里非常著名的一道菜</ListItem>
                  <ListItem>
                    在1987年，肯德基进入中国。他们的到来代表了炸鸡在中国开始。
                  </ListItem>
                  <ListItem>
                    肯德基作为西方的品牌让炸鸡受到了非常多人的认可。当时，西方产品被视为高档和值得信赖的
                  </ListItem>
                  <ListItem>
                    虽然肯德基提供美式炸鸡，但他们巧妙地根据当地口味调整了菜单。
                  </ListItem>
                  <ListItem>
                    20世纪90年代末和21世纪初，专门从事炸鸡的中国快餐连锁店开始出现
                  </ListItem>
                  <ListItem>
                    这些连锁店提供更实惠的选择，炸鸡块更小，更容易用筷子食用
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box w="50%">
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Meaning
                </Heading>
                <UnorderedList>
                  <ListItem>
                    这首歌讲述了主人公在经历了恋人冷漠的态度后，独自在人民广场吃炸鸡时的复杂心情。
                  </ListItem>
                  <ListItem>
                    这首歌也表达了一种轻松、自在、无忧无虑的生活态度。
                  </ListItem>
                  <ListItem>
                    这首歌也引发了人们对生活意义的思考。在快节奏的都市生活中，许多人感到迷茫和焦虑。这首歌告诉我们，生活可以很简单、很快乐，只要我们有一颗积极乐观的心态。
                  </ListItem>
                  <ListItem>
                    炸鸡作为西方的一个代表性食物展现了西方比较自由自在的文化。在这个年代，许多快餐店像肯德基是很多人约会的地方。
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
      <Center marginTop="5em" padding="2em">
        <Link to={"/"}>Back Home</Link>
      </Center>
    </Flex>
  );
}
