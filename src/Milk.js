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

export default function Milk() {
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
                src="https://www.youtube.com/embed/hf8QsC6VzHo?si=nB7bLmd_bJajevYi"
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
                  喝純白的豆漿 是純白的浪漫
                  <br />
                  望著你可愛臉蛋 和你純真的模樣
                  <br />
                  我傻傻對你笑 是你憂愁解藥
                  <br />
                  你說我就像油條 很簡單卻很美好
                  <br />
                  我知道 你和我 就像是豆漿油條
                  <br />
                  要一起 吃下去 味道才會是最好
                  <br />
                  你需要我的傻笑 我需要你的擁抱
                  <br />
                  愛情就是要這樣 它才不會淡掉
                  <br />
                  我知道 有時候 也需要吵吵鬧鬧
                  <br />
                  但始終 也知道 只有你對我最好
                  <br />
                  豆漿離不開油條 讓我愛你愛到老
                  <br />
                  愛情就是要這樣 它才幸福美好
                  <br />
                  我知道 都知道 你知道 你都知道
                  <br />
                  好不好 別偷笑 笑 讓我知道
                  <br />
                  我喝完熱豆漿 卻念著還想要
                  <br />
                  你吃完金黃油條 愛情又要再發酵
                  <br />
                  我知道 你和我 就像是豆漿油條
                  <br />
                  要一起 吃下去 味道才會是最好
                  <br />
                  你需要我的傻笑 我需要你的擁抱
                  <br />
                  愛情就是要這樣 它才不會淡掉
                  <br />
                  我知道 有時候 也需要吵吵鬧鬧
                  <br />
                  但始終 也知道 只有你對我最好
                  <br />
                  豆漿離不開油條 讓我愛你愛到老
                  <br />
                  愛情就是要這樣 它才幸福美好
                  <br />
                  我知道 都知道 你知道 你都知道
                  <br />
                  好不好 別偷笑 笑 讓我知道
                  <br />
                  我知道 都知道 你知道 你都知道
                  <br />
                  好不好 別偷笑 笑 讓我知道(就好)
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
                  <ListItem>
                    豆浆油条是一道经典的中国早餐组合，由豆浆和油条组成。
                  </ListItem>
                  <ListItem>
                    在中国许多地方，特别是在北方地区，这道菜深受喜爱和欢迎。
                  </ListItem>
                  <ListItem>
                    豆浆是中国汉族传统饮品，最早的豆浆为西汉淮南王刘安制作。
                  </ListItem>
                  <ListItem>
                    它的制作方法是将大豆浸泡，磨成糊状，然后用凝固剂煮沸混合物。
                  </ListItem>
                  <ListItem>
                    油条是一种油炸面食。油条是由简单的面团制成，由面粉、水和膨松剂组成。将面团拉伸成细长的条状，然后油炸至金黄色和蓬松。
                  </ListItem>
                  <ListItem>
                    在早餐时，人们喜欢吃一些简单易做、口感美味、价格实惠的食品，豆浆油条正是这样的一种食品。
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
                    这首歌是一首描写爱情的歌曲。歌曲以豆浆油条作为早餐的比喻，表达了爱情的甜蜜和美好。
                  </ListItem>
                  <ListItem>
                    很多人认为早餐时吃油条、喝豆浆，缺了哪一样都感觉不对劲。这首歌就是用这种想法来来代表互相离不开的情侣
                  </ListItem>
                  <ListItem>
                    歌曲的标题“豆浆油条”是一个引人共鸣的选择，因为这道菜是许多中国文化中的常见早餐食品，有种熟悉和舒适的感觉。
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
