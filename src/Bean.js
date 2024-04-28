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

export default function Bean() {
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
                src="https://www.youtube.com/embed/5wmfXve11rM?si=4BxRH26Vbz5FelB6"
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
                  還沒好好地感受 雪花綻放的氣候
                  <br />
                  我們一起顫抖 會更明白什麼是溫柔
                  <br />
                  還沒跟你牽著手 走過荒蕪的沙丘
                  <br />
                  可能從此以後 學會珍惜天長和地久
                  <br />
                  有時候 有時候
                  <br />
                  我會相信一切有盡頭
                  <br />
                  相聚離開 都有時候
                  <br />
                  沒有什麼會永垂不朽
                  <br />
                  可是我 有時候
                  <br />
                  寧願選擇留戀不放手
                  <br />
                  等到風景都看透
                  <br />
                  也許你會陪我看細水長流
                  <br />
                  還沒為你把紅豆 熬成纏綿的傷口
                  <br />
                  然後一起分享 會更明白相思的哀愁
                  <br />
                  還沒好好地感受 醒著親吻的溫柔
                  <br />
                  可能在我左右 你才追求孤獨的自由
                  <br />
                  有時候 有時候
                  <br />
                  我會相信一切有盡頭
                  <br />
                  相聚離開 都有時候
                  <br />
                  沒有什麼會永垂不朽
                  <br />
                  可是我 有時候
                  <br />
                  寧願選擇留戀不放手
                  <br />
                  等到風景都看透
                  <br />
                  也許你會陪我看細水長流
                  <br />
                  有時候 有時候
                  <br />
                  我會相信一切有盡頭
                  <br />
                  相聚離開 都有時候
                  <br />
                  沒有什麼會永垂不朽
                  <br />
                  可是我 有時候
                  <br />
                  寧願選擇留戀不放手
                  <br />
                  等到風景都看透
                  <br />
                  也許你會陪我看細水長流
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
                    红豆，又称赤小豆，是一种常见的豆类食材，广泛分布于亚洲东部地区。
                  </ListItem>
                  <ListItem>
                    红豆富含蛋白质、膳食纤维、维生素和矿物质，营养价值较高。
                  </ListItem>
                  <ListItem>
                    在中国的饮食文化中，红豆有着悠久的历史，被用作制作各种甜点、主食和饮料。
                  </ListItem>
                  <ListItem>
                    在中国的文化中，红豆也具有重要的象征意义。在古代，红豆常被用作定情信物，寓意着相思和爱情。
                  </ListItem>
                  <ListItem>
                    此外，红豆也被视为吉祥的象征，常用于喜庆场合。例如，在一些地区，在婚礼上会向新人撒红豆，寓意着早生贵子。
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
                    在中国文化中，红豆被认为是爱情的象征。这首歌的歌词表达了对爱情的思念和渴望。红豆在这首歌里就是用来强调这个主题。
                  </ListItem>
                  <ListItem>
                    这首歌以红豆为主题，表达了歌手对爱情的复杂情感，既有甜蜜的期待，也有苦涩的思念，还有对爱情的珍惜和挽留。
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
