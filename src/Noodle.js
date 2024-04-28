import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  VStack,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Noodle() {
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
                src="https://www.youtube.com/embed/SnWBTBelaw4?si=Yt0hXNaHfx3EIdhG"
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
                  在我以为那曾是爱情的起点
                  <br />
                  我的心开始因为油腻而改变
                  <br />
                  你说女孩穿得随意会更好些
                  <br />
                  买一件长裙都想着你是否会喜欢
                  <br />
                  开心的日子因为等待而不安
                  <br />
                  你始终不说爱或是不爱
                  <br />
                  等啊等啊等啊等啊\
                  <br />
                  海枯了石也烂了你才说本不应该
                  <br />
                  为什么珍惜两个人的爱情总是女人
                  <br />
                  想想其实你也很遥远
                  <br />
                  却还想留住唇边匆促的缠绵
                  <br />
                  为什么珍惜两个人的爱情总是女人
                  <br />
                  情断了缘也断了
                  <br />
                  我却还想着你爱吃的青菜鸡蛋面
                  <br />
                  开心的日子因为等待而不安
                  <br />
                  你始终不说爱或是不爱
                  <br />
                  等啊等啊等啊等啊
                  <br />
                  海枯了石也烂了你才说本不应该
                  <br />
                  为什么珍惜两个人的爱情总是女人
                  <br />
                  想想其实你也很遥远
                  <br />
                  却还想留住唇边匆促的缠绵
                  <br />
                  为什么珍惜两个人的爱情总是女人
                  <br />
                  情断了缘也断了
                  <br />
                  我却还想着你爱吃的青菜鸡蛋面
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
                    青菜鸡蛋面是一道美食，主要食材是青菜和鸡蛋.
                  </ListItem>
                  <ListItem>
                    青菜鸡蛋面是一道历史悠久的中华传统面食，做法简单，营养丰富，深受人们喜爱。
                  </ListItem>
                  <ListItem>
                    在许多中国家庭中，青菜鸡蛋面是一道常吃的家常菜。它代表着家人团聚的温馨回忆
                  </ListItem>
                  <ListItem>
                    在一些地区，人们有春节吃青菜鸡蛋面的习俗，寓意在新的一年里生活清清白白、平平安安。
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
                    这首歌是一首悲伤的爱情歌曲，讲述了一位女子在一段失败的感情中所经历的痛苦和无奈。
                  </ListItem>
                  <ListItem>
                    青菜鸡蛋面是一道简单的菜，只需普通的食材就可完成。歌手用这来暗示她对爱人的爱也是简单而纯粹的。
                  </ListItem>
                  <ListItem>
                    这首歌以语言和旋律提醒人们在爱情中要保持清醒的头脑，不要为了爱情而失去自我。
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
